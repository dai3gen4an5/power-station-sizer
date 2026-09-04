export const AFFILIATE_LINKS_ENABLED = true;
export type CapacityClassId = "500wh" | "1000wh" | "2000wh" | "3000wh-plus";
export type BrandId = string;
export type ProductAvailability = "available" | "unavailable" | "unconfirmed";
export interface AmazonUsMetadata { asin: string | null; title: string | null; availability: ProductAvailability; standaloneVerified: boolean }
export interface ProductEntry {
  id: string; brand: BrandId; brandName: string; productName: string; modelName: string;
  capacityWh: number; continuousOutputW: number | null; surgeOutputW: number | null;
  acVoltageV: readonly number[] | null; batteryChemistry: string | null; weightLb: number | null;
  expandable: boolean; maximumExpandedCapacityWh: number | null; officialProductUrl: string;
  officialImageSourceUrl: string | null; specSourceUrls: readonly string[]; amazonUs: AmazonUsMetadata;
  affiliateUrl: string | null; imageSrc?: string; imageAlt?: string; enabled: boolean; specIdentityVerified: boolean;
}
export interface CapacityClass { id: CapacityClassId; label: string; minWh: number; maxWh: number | null; reason: string }
export const CAPACITY_CLASSES: readonly CapacityClass[] = [
  { id:"500wh",label:"500Wh",minWh:0,maxWh:500,reason:"Your estimate is around 500Wh, which suits a small device or a short top-up." },
  { id:"1000wh",label:"1,000Wh",minWh:501,maxWh:1000,reason:"Your estimate is around 1,000Wh, a common size for overnight use or several small devices." },
  { id:"2000wh",label:"2,000Wh",minWh:1001,maxWh:2000,reason:"Your estimate is around 2,000Wh, which suits longer runtimes or heavier loads." },
  { id:"3000wh-plus",label:"3,000Wh+",minWh:2001,maxWh:null,reason:"Your estimate is above 2,000Wh, where larger and expandable systems become relevant." },
] as const;

type Seed = [id:string,brand:string,brandName:string,name:string,capacity:number,continuous:number|null,surge:number|null,voltage:number,official:string,asin:string|null,affiliate:string|null,image:string|null,enabled:boolean,verified:boolean,chemistry?:string|null,weight?:number|null,expandable?:boolean,maxExpanded?:number|null];
const seeds: readonly Seed[] = [
  ["jackery-explorer-500-v2","jackery","Jackery","Jackery Explorer 500 v2",512,500,1000,120,"https://www.jackery.com/products/jackery-explorer-500-v2","B07SM5HBK1","https://amzn.to/3ULg6T7","/products/jackery-explorer-500-v2.webp",true,true],
  ["ecoflow-river-2-max-500","ecoflow","EcoFlow","EcoFlow RIVER 2 Max 500",499,500,null,120,"https://manuals.ecoflow.com/us/product/river-2-max-portable-power-station?lang=en_US","B0CVZQ5RN1","https://amzn.to/4gK4pnj","/products/ecoflow-river-2-max-500.webp",true,true],
  ["jackery-explorer-1000-v2","jackery","Jackery","Jackery Explorer 1000 v2",1070,1500,3000,120,"https://www.jackery.com/products/jackery-explorer-1000-v2","B0D7PPG25F","https://amzn.to/4wWx2Ue","/products/jackery-explorer-1000-v2.webp",true,true],
  ["ecoflow-delta-3-classic","ecoflow","EcoFlow","EcoFlow DELTA 3 Classic",1024,1800,3600,120,"https://us.ecoflow.com/products/delta-3-classic-portable-power-station","B0FQVC4RF5","https://amzn.to/4zM42RC","/products/ecoflow-delta-3-classic.webp?v=2",true,true],
  ["bluetti-elite-100-v2","bluetti","BLUETTI","BLUETTI Elite 100 V2",1024,1800,null,120,"https://www.bluettipower.com/products/elite-100-v2-portable-power-station","B0F42CSQWG","https://amzn.to/4gECyVw","/products/bluetti-elite-100-v2.webp?v=2",true,true],
  ["jackery-explorer-2000-v2","jackery","Jackery","Jackery Explorer 2000 v2",2042,2200,4400,120,"https://www.jackery.com/products/jackery-explorer-2000-v2-portable-power-station","B0DFG2WDQH","https://amzn.to/4d7s3c4","/products/jackery-explorer-2000-v2.webp",true,true],
  ["ecoflow-delta-3-max","ecoflow","EcoFlow","EcoFlow DELTA 3 Max",2048,2400,null,120,"https://www.ecoflow.com/us/delta-3-series","B0FQV6LMVX","https://amzn.to/46wIOty","/products/ecoflow-delta-3-max.webp",true,true],
  ["bluetti-ac200l","bluetti","BLUETTI","BLUETTI AC200L",2048,2400,null,120,"https://www.bluettipower.com/products/ac200l","B0CLGZB3L6","https://amzn.to/4ck9AJf","/products/bluetti-ac200l.webp",true,true],
  ["jackery-homepower-3000","jackery","Jackery","Jackery HomePower 3000",3072,3600,7200,120,"https://www.jackery.com/products/jackery-homepower-3000","B0FFSLG3WZ","https://amzn.to/3UulYA8","/products/jackery-homepower-3000.webp",true,true],
  ["ecoflow-delta-3-ultra","ecoflow","EcoFlow","EcoFlow DELTA 3 Ultra",3072,3600,7200,120,"https://us.ecoflow.com/products/ecoflow-delta-3-ultra-portable-power-station-3072wh","B0FQVBFLHL","https://amzn.to/3SCc7Yk","/products/ecoflow-delta-3-ultra.webp",true,true],
  ["bluetti-elite-300","bluetti","BLUETTI","BLUETTI Elite 300",3014,2400,null,120,"https://www.bluettipower.com/products/elite-300-portable-power-station","B0GKRTX336","https://amzn.to/4cONKh0","/products/bluetti-elite-300.webp?v=2",true,true],
  ["anker-solix-c300","anker","Anker SOLIX","Anker SOLIX C300 Portable Power Station",288,300,600,120,"https://www.ankersolix.com/products/c300","B0D62GMQ3F",null,null,false,false,"LiFePO4",9.1],
  ["anker-solix-c800","anker","Anker SOLIX","Anker SOLIX C800 Portable Power Station",768,1200,null,120,"https://www.ankersolix.com/C800-plus-c800-pps","B0C6MC2CTN",null,null,false,false,"LiFePO4",23.1],
  ["anker-solix-c1000-gen-2","anker","Anker SOLIX","Anker SOLIX C1000 Gen 2 Portable Power Station",1024,2000,3000,120,"https://www.ankersolix.com/products/c1000-gen2","B0FN7MSY4L",null,null,false,false,"LiFePO4",24.9],
  ["anker-solix-s2000","anker","Anker SOLIX","Anker SOLIX S2000 Portable Power Station",2010,1500,null,120,"https://www.ankersolix.com/blogs/portable-power-station/anker-solix-s2000-compact-2000wh-lifepo4-power-station","B0GY4TQ2P8",null,null,false,false,"LiFePO4",35.7],
  ["dji-power-1000-v2","dji","DJI","DJI Power 1000 V2",1024,2600,null,120,"https://www.dji.com/power-1000-v2","B0FD9Z5F3S",null,null,false,false,"LiFePO4",31,true],
  ["dji-power-2000","dji","DJI","DJI Power 2000",2048,3000,null,120,"https://www.dji.com/power-2000","B0FBRD1B8C",null,null,false,false,"LiFePO4",48.5,true,22528],
  ["goal-zero-yeti-300-6g","goal-zero","Goal Zero","Goal Zero Yeti 300 Portable Power Station",297,350,600,120,"https://goalzero.com/pages/yeti-power-stations-6th-gen-family-lifepo4","B0CRD8CVD8",null,null,false,false,"LiFePO4",13.7],
  ["goal-zero-yeti-700-6g","goal-zero","Goal Zero","Goal Zero Yeti 700 Portable Power Station",677,600,1000,120,"https://goalzero.com/pages/yeti-power-stations-6th-gen-family-lifepo4","B0CRCVKNHR",null,null,false,false,"LiFePO4",21],
  ["goal-zero-yeti-1500-6g","goal-zero","Goal Zero","Goal Zero Yeti 1500 6th Gen",1505,2000,3600,120,"https://goalzero.com/pages/portable-power-stations","B0GMKKGQCY",null,null,false,false,"LiFePO4",52.75],
  ["pecron-e600lfp","pecron","PECRON","PECRON E600LFP",614,1200,2400,120,"https://www.pecron.com/products/pecron-e600lfp-1200w-portable-power-station-lifepo4","B0C48V7DZD",null,null,false,false,"LiFePO4",20],
  ["pecron-e3600lfp","pecron","PECRON","PECRON E3600LFP",3072,3600,7000,120,"https://www.pecron.com/products/pecron-e3600lfp-portable-power-station-3600w-3072wh","B0D83QYRDS",null,null,false,false,"LiFePO4",79,true,18432],
  ["vtoman-flashspeed-600","vtoman","VTOMAN","VTOMAN FlashSpeed 600",499,600,1200,110,"https://vtoman.com/products/vtoman-flashspeed-600-power-station","B0DPWMYSYC",null,null,false,false,"LiFePO4",15.9,true,2047],
  ["vtoman-flashspeed-1000","vtoman","VTOMAN","VTOMAN FlashSpeed 1000",828,1000,2000,110,"https://vtoman.com/products/flashspeed-1000-portable-power-station","B0DPM15S54",null,null,false,false,"LiFePO4",33,true,2376],
  ["vtoman-flashspeed-1500","vtoman","VTOMAN","VTOMAN FlashSpeed 1500",1548,1500,3000,110,"https://vtoman.com/products/vtoman-flashspeed-1500-power-station","B0C8T2C8DB",null,null,false,false,"LiFePO4",41.4,true,3096],
] as const;

export const PRODUCT_CATALOG: readonly ProductEntry[] = seeds.map((s) => ({
  id:s[0],brand:s[1],brandName:s[2],productName:s[3],modelName:s[3],capacityWh:s[4],continuousOutputW:s[5],surgeOutputW:s[6],acVoltageV:[s[7]],
  batteryChemistry:s[14]??null,weightLb:s[15]??null,expandable:s[16]??false,maximumExpandedCapacityWh:s[17]??null,
  officialProductUrl:s[8],officialImageSourceUrl:s[11]?s[8]:null,specSourceUrls:[s[8]],
  amazonUs:{asin:s[9],title:s[3],availability:s[12]?"available":"unconfirmed",standaloneVerified:s[12]&&s[13]},
  affiliateUrl:s[10],imageSrc:s[11]??undefined,imageAlt:s[11]?`${s[3]} portable power station`:undefined,enabled:s[12],specIdentityVerified:s[13],
}));
export const ACTIVE_PRODUCTS = PRODUCT_CATALOG.filter((product) => product.enabled);
