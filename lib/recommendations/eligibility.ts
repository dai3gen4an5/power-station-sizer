import { CAPACITY_CLASSES, PRODUCT_CATALOG, type CapacityClass, type ProductEntry } from "./products";
import { resolveProductLink } from "./links";
import { selectCapacityClass } from "./selectClass";

export type ProductEligibility = "eligible" | "disabled" | "identity-unverified" | "capacity-insufficient" | "continuous-output-insufficient" | "continuous-output-unconfirmed" | "surge-insufficient" | "surge-unconfirmed" | "voltage-mismatch" | "voltage-unconfirmed";
export interface RecommendationRequirements { recommendedCapacityWh:number; recommendedSizeClass:number|null; requiredContinuousOutputW?:number; requiredSurgeOutputW?:number; requiredAcVoltageV?:number; limit?:number }
export type OutputFailureKind = "insufficient" | "unconfirmed";
export type RecommendationState =
  | {kind:"empty"}
  | {kind:"no-match";recommendedWh:number}
  | {kind:"output-unconfirmed";recommendedWh:number;requiredContinuousOutputW:number;requiredSurgeOutputW:number;failureKind:OutputFailureKind}
  | {kind:"products";capacityClass:CapacityClass;products:ProductEntry[];recommendedWh:number;capacityClassEscalated:boolean;requiredContinuousOutputW:number;requiredSurgeOutputW:number};

const positive = (n:number|undefined) => typeof n === "number" && Number.isFinite(n) && n > 0 ? n : 0;
export function isProductCapacityEligible(product:Pick<ProductEntry,"capacityWh">,wh:number):boolean { return positive(wh)>0 && positive(product.capacityWh)>=wh; }

export function classifyProduct(product:Pick<ProductEntry,"enabled"|"specIdentityVerified"|"capacityWh"|"continuousOutputW"|"surgeOutputW"|"acVoltageV">,r:{recommendedWh:number;requiredContinuousOutputW?:number;requiredSurgeOutputW?:number;requiredAcVoltageV?:number}):ProductEligibility {
  if (!product.enabled) return "disabled";
  if (!product.specIdentityVerified) return "identity-unverified";
  if (!isProductCapacityEligible(product,r.recommendedWh)) return "capacity-insufficient";
  const continuous=positive(r.requiredContinuousOutputW);
  if (continuous) { if (!positive(product.continuousOutputW??undefined)) return "continuous-output-unconfirmed"; if ((product.continuousOutputW??0)<continuous) return "continuous-output-insufficient"; }
  const surge=positive(r.requiredSurgeOutputW);
  if (surge) { if (!positive(product.surgeOutputW??undefined)) return "surge-unconfirmed"; if ((product.surgeOutputW??0)<surge) return "surge-insufficient"; }
  const voltage=positive(r.requiredAcVoltageV);
  if (voltage) { if (!product.acVoltageV?.length) return "voltage-unconfirmed"; if (!product.acVoltageV.includes(voltage)) return "voltage-mismatch"; }
  return "eligible";
}

export function rankEligibleProducts(products:readonly ProductEntry[],r:{recommendedWh:number;requiredContinuousOutputW?:number},limit=6):ProductEntry[] {
  const continuous=positive(r.requiredContinuousOutputW);
  const indexed=products.map((product,index)=>({product,index})).sort((a,b)=>
    (a.product.capacityWh-r.recommendedWh)-(b.product.capacityWh-r.recommendedWh) ||
    (continuous ? (a.product.continuousOutputW??Infinity)-continuous-(b.product.continuousOutputW??Infinity)+continuous : 0) || a.index-b.index
  );
  const result:ProductEntry[]=[]; const remaining=[...indexed];
  while (remaining.length && result.length<limit) {
    const lastBrand=result.at(-1)?.brand;
    const pick=remaining.findIndex(({product})=>product.brand!==lastBrand);
    result.push(remaining.splice(pick<0?0:pick,1)[0].product);
  }
  return result;
}

function requiredWh(input:RecommendationRequirements):number|null { const raw=positive(input.recommendedCapacityWh); if(raw)return raw; const rounded=positive(input.recommendedSizeClass??undefined); return rounded||null; }
function classIndex(product:ProductEntry):number { const cls=selectCapacityClass(product.capacityWh); return cls?CAPACITY_CLASSES.findIndex(c=>c.id===cls.id):-1; }

export function getRecommendationState(input:RecommendationRequirements,catalog:readonly ProductEntry[]=PRODUCT_CATALOG):RecommendationState {
  const wh=requiredWh(input); if(!wh)return {kind:"empty"};
  const capacityClass=selectCapacityClass(wh); if(!capacityClass)return {kind:"empty"};
  const continuous=positive(input.requiredContinuousOutputW), surge=positive(input.requiredSurgeOutputW);
  const selectable=catalog.filter(p=>p.enabled&&p.specIdentityVerified&&resolveProductLink(p).href!==null);
  const capacityFits=selectable.filter(p=>isProductCapacityEligible(p,wh));
  if(!capacityFits.length)return {kind:"no-match",recommendedWh:wh};
  const classified=capacityFits.map(product=>({product,status:classifyProduct(product,{recommendedWh:wh,requiredContinuousOutputW:continuous,requiredSurgeOutputW:surge,requiredAcVoltageV:input.requiredAcVoltageV})}));
  const eligible=classified.filter(x=>x.status==="eligible").map(x=>x.product);
  if(!eligible.length) {
    const unconfirmed=classified.some(x=>x.status.endsWith("unconfirmed"));
    return {kind:"output-unconfirmed",recommendedWh:wh,requiredContinuousOutputW:continuous,requiredSurgeOutputW:surge,failureKind:unconfirmed?"unconfirmed":"insufficient"};
  }
  const products=rankEligibleProducts(eligible,{recommendedWh:wh,requiredContinuousOutputW:continuous},input.limit??6);
  const startIndex=CAPACITY_CLASSES.findIndex(c=>c.id===capacityClass.id);
  const nearestCapacityIndex=Math.min(...capacityFits.map(classIndex).filter(i=>i>=0));
  const selectedIndex=Math.min(...products.map(classIndex).filter(i=>i>=0));
  return {kind:"products",capacityClass,products,recommendedWh:wh,capacityClassEscalated:selectedIndex>Math.max(startIndex,nearestCapacityIndex),requiredContinuousOutputW:continuous,requiredSurgeOutputW:surge};
}
