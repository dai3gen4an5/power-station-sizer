import assert from "node:assert/strict";
import test from "node:test";
import { classifyProduct, getRecommendationState, rankEligibleProducts } from "./eligibility";
import { PRODUCT_CATALOG, type ProductEntry } from "./products";
import { resolveProductLink } from "./links";

const base = PRODUCT_CATALOG[0];
const product = (id:string, capacityWh:number, overrides:Partial<ProductEntry>={}):ProductEntry => ({
  ...base,id,productName:id,modelName:id,capacityWh,affiliateUrl:`https://example.com/${id}`,enabled:true,specIdentityVerified:true,...overrides,
});
const ids = (state:ReturnType<typeof getRecommendationState>) => state.kind === "products" ? state.products.map(p=>p.id) : [];

test("catalog contains 11 active and 14 disabled Phase 1 products",()=>{
  assert.equal(PRODUCT_CATALOG.length,25); assert.equal(PRODUCT_CATALOG.filter(p=>p.enabled).length,11);
  const disabled=PRODUCT_CATALOG.filter(p=>!p.enabled); assert.equal(disabled.length,14);
  assert.ok(disabled.every(p=>p.affiliateUrl===null&&!p.amazonUs.standaloneVerified&&!p.specIdentityVerified));
});

test("actual-capacity boundaries use exact Wh rather than a class bucket",()=>{
  const catalog=[product("499",499),product("500",500),product("512",512),product("677",677),product("768",768),product("828",828),product("998",998),product("1024",1024),product("1070",1070)];
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:499,recommendedSizeClass:500},catalog)).slice(0,3),["499","500","512"]);
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:500,recommendedSizeClass:500},catalog)).slice(0,2),["500","512"]);
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:512,recommendedSizeClass:750},catalog)).slice(0,3),["512","677","768"]);
  assert.equal(ids(getRecommendationState({recommendedCapacityWh:677,recommendedSizeClass:750},catalog))[0],"677");
  assert.equal(ids(getRecommendationState({recommendedCapacityWh:768,recommendedSizeClass:1000},catalog))[0],"768");
  assert.equal(ids(getRecommendationState({recommendedCapacityWh:828,recommendedSizeClass:1000},catalog))[0],"828");
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:678,recommendedSizeClass:750},catalog)).slice(0,2),["768","828"]);
  assert.equal(ids(getRecommendationState({recommendedCapacityWh:998,recommendedSizeClass:1000},catalog))[0],"998");
  assert.equal(ids(getRecommendationState({recommendedCapacityWh:1024,recommendedSizeClass:1500},catalog))[0],"1024");
  assert.equal(ids(getRecommendationState({recommendedCapacityWh:1070,recommendedSizeClass:1500},catalog))[0],"1070");
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:999,recommendedSizeClass:1000},catalog)).slice(0,2),["1024","1070"]);
});

test("continuous, surge and voltage distinguish insufficient from unknown",()=>{
  const p=product("p",1000,{continuousOutputW:500,surgeOutputW:1000,acVoltageV:[120]});
  assert.equal(classifyProduct(p,{recommendedWh:900,requiredContinuousOutputW:600}),"continuous-output-insufficient");
  assert.equal(classifyProduct({...p,continuousOutputW:null},{recommendedWh:900,requiredContinuousOutputW:600}),"continuous-output-unconfirmed");
  assert.equal(classifyProduct(p,{recommendedWh:900,requiredSurgeOutputW:1200}),"surge-insufficient");
  assert.equal(classifyProduct({...p,surgeOutputW:null},{recommendedWh:900,requiredSurgeOutputW:1200}),"surge-unconfirmed");
  assert.equal(classifyProduct(p,{recommendedWh:900,requiredAcVoltageV:240}),"voltage-mismatch");
  assert.equal(classifyProduct({...p,acVoltageV:null},{recommendedWh:900,requiredAcVoltageV:120}),"voltage-unconfirmed");
});

test("disabled and unverified products are excluded",()=>{
  const disabled=product("disabled",500,{enabled:false}); const unverified=product("unverified",500,{specIdentityVerified:false});
  assert.equal(classifyProduct(disabled,{recommendedWh:400}),"disabled");
  assert.equal(classifyProduct(unverified,{recommendedWh:400}),"identity-unverified");
  assert.equal(getRecommendationState({recommendedCapacityWh:400,recommendedSizeClass:500},[disabled,unverified]).kind,"no-match");
});

test("affiliate selection preserves verified links",()=>{
  assert.equal(resolveProductLink(base).type,"affiliate");
  assert.equal(resolveProductLink({...base,enabled:false}).href,null);
  assert.equal(resolveProductLink({...base,affiliateUrl:null}).href,null);
});

test("ranking is stable and avoids consecutive brands when alternatives exist",()=>{
  const list=[product("a1",500,{brand:"a"}),product("a2",501,{brand:"a"}),product("b1",502,{brand:"b"}),product("c1",503,{brand:"c"})];
  assert.deepEqual(rankEligibleProducts(list,{recommendedWh:499}).map(p=>p.id),["a1","b1","a2","c1"]);
  assert.deepEqual(rankEligibleProducts(list,{recommendedWh:499}).map(p=>p.id),["a1","b1","a2","c1"]);
});

test("no-match and output failure states remain distinct",()=>{
  assert.equal(getRecommendationState({recommendedCapacityWh:9999,recommendedSizeClass:null}).kind,"no-match");
  const insufficient=getRecommendationState({recommendedCapacityWh:400,recommendedSizeClass:500,requiredContinuousOutputW:9999});
  assert.equal(insufficient.kind,"output-unconfirmed"); if(insufficient.kind==="output-unconfirmed")assert.equal(insufficient.failureKind,"insufficient");
  const unknown=getRecommendationState({recommendedCapacityWh:400,recommendedSizeClass:500,requiredSurgeOutputW:1},[product("unknown",500,{surgeOutputW:null})]);
  assert.equal(unknown.kind,"output-unconfirmed"); if(unknown.kind==="output-unconfirmed")assert.equal(unknown.failureKind,"unconfirmed");
});

test("existing 11 golden cases keep the nearest live families",()=>{
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:470,recommendedSizeClass:500})).slice(0,2),["ecoflow-river-2-max-500","jackery-explorer-500-v2"]);
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:880,recommendedSizeClass:1000})).slice(0,3),["ecoflow-delta-3-classic","bluetti-elite-100-v2","jackery-explorer-1000-v2"]);
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:1765,recommendedSizeClass:2000})).slice(0,3),["jackery-explorer-2000-v2","ecoflow-delta-3-max","bluetti-ac200l"]);
  assert.deepEqual(ids(getRecommendationState({recommendedCapacityWh:2500,recommendedSizeClass:3000})).slice(0,3),["bluetti-elite-300","jackery-homepower-3000","ecoflow-delta-3-ultra"]);
});
