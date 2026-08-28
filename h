warning: in the working copy of 'README.md', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'app/layout.tsx', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'app/robots.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'app/sitemap.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'components/content/Faq.tsx', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/README.md b/README.md[m
[1mindex 3038b9d..6788a25 100644[m
[1m--- a/README.md[m
[1m+++ b/README.md[m
[36m@@ -12,17 +12,38 @@[m [mnpm run dev[m
 [m
 Then open http://localhost:3000.[m
 [m
[31m-The production URL is currently set to the Vercel deployment domain, `https://power-station-sizer.vercel.app`,[m
[31m-since the custom domain isn't connected yet. Once it is, update the `SITE_URL` constant in:[m
[31m-- `app/layout.tsx` (`SITE_URL`)[m
[31m-- `app/sitemap.ts`[m
[31m-- `app/robots.ts`[m
[32m+[m[32m## Production URL configuration[m
[32m+[m
[32m+[m[32mEvery sitemap entry, `robots.txt` directive, `metadataBase`, canonical URL, OpenGraph URL, and[m
[32m+[m[32mstructured-data URL in this project is derived from a single source of truth: `SITE_URL`, exported from[m
[32m+[m[32m`lib/site.ts`. Nothing else in the codebase hard-codes a production hostname — that's what caused the[m
[32m+[m[32msitemap/canonical mismatch this setup replaces.[m
[32m+[m
[32m+[m[32m`SITE_URL` resolves in this order:[m
[32m+[m
[32m+[m[32m1. **Custom domain** — set the `NEXT_PUBLIC_SITE_URL` environment variable in the Vercel dashboard:[m
[32m+[m[32m   ```[m
[32m+[m[32m   NEXT_PUBLIC_SITE_URL=https://yourdomain.com[m
[32m+[m[32m   ```[m
[32m+[m[32m   Once set, all sitemap, robots, canonical, OpenGraph, and structured-data URLs update automatically —[m
[32m+[m[32m   no code changes needed.[m
[32m+[m[32m2. **Vercel preview/production deployments** — if `NEXT_PUBLIC_SITE_URL` isn't set, Vercel's own[m
[32m+[m[32m   `VERCEL_PROJECT_PRODUCTION_URL` environment variable is used automatically (Vercel sets this for you;[m
[32m+[m[32m   it has no `https://` prefix, so `lib/site.ts` adds one).[m
[32m+[m[32m3. **Local development** — if neither is set, `http://localhost:3000` is used automatically.[m
[32m+[m
[32m+[m[32mTo change the production domain, set (or update) `NEXT_PUBLIC_SITE_URL` in Vercel's project settings —[m
[32m+[m[32mnever edit a URL string directly in the source.[m
 [m
 ## Architecture[m
 [m
 Everything runs client-side — there is no API or backend.[m
 [m
 ```[m
[32m+[m[32mlib/site.ts[m
[32m+[m[32m  SITE_URL           Single source of truth for the production URL (see above)[m
[32m+[m[32m  absoluteUrl(path)  Resolves a path against SITE_URL[m
[32m+[m
 lib/calculator/[m
   types.ts          Device, CalculatorSettings, CalculatorResults, DevicePreset types[m
   constants.ts       Default settings, default device, size classes[m
[1mdiff --git a/app/layout.tsx b/app/layout.tsx[m
[1mindex 9a693b1..a304f33 100644[m
[1m--- a/app/layout.tsx[m
[1m+++ b/app/layout.tsx[m
[36m@@ -3,6 +3,7 @@[m [mimport { IBM_Plex_Mono, Inter, Space_Grotesk } from "next/font/google";[m
 import type { ReactNode } from "react";[m
 import { SiteFooter } from "@/components/layout/SiteFooter";[m
 import { SiteHeader } from "@/components/layout/SiteHeader";[m
[32m+[m[32mimport { SITE_URL } from "@/lib/site";[m
 import "./globals.css";[m
 [m
 const display = Space_Grotesk({[m
[36m@@ -22,9 +23,6 @@[m [mconst mono = IBM_Plex_Mono({[m
   weight: ["500", "600"],[m
 });[m
 [m
[31m-// TODO: replace with the real custom domain once it is connected.[m
[31m-const SITE_URL = "https://power-station-sizer.vercel.app";[m
[31m-[m
 export const metadata: Metadata = {[m
   metadataBase: new URL(SITE_URL),[m
   title: {[m
[1mdiff --git a/app/robots.ts b/app/robots.ts[m
[1mindex 0c026e2..b2459da 100644[m
[1m--- a/app/robots.ts[m
[1m+++ b/app/robots.ts[m
[36m@@ -1,7 +1,5 @@[m
 import type { MetadataRoute } from "next";[m
[31m-[m
[31m-// TODO: replace with the real custom domain once it is connected.[m
[31m-const SITE_URL = "https://power-station-sizer.vercel.app";[m
[32m+[m[32mimport { absoluteUrl } from "@/lib/site";[m
 [m
 export default function robots(): MetadataRoute.Robots {[m
   return {[m
[36m@@ -9,6 +7,6 @@[m [mexport default function robots(): MetadataRoute.Robots {[m
       userAgent: "*",[m
       allow: "/",[m
     },[m
[31m-    sitemap: `${SITE_URL}/sitemap.xml`,[m
[32m+[m[32m    sitemap: absoluteUrl("/sitemap.xml"),[m
   };[m
 }[m
[1mdiff --git a/app/sitemap.ts b/app/sitemap.ts[m
[1mindex ba37f77..243c023 100644[m
[1m--- a/app/sitemap.ts[m
[1m+++ b/app/sitemap.ts[m
[36m@@ -1,12 +1,10 @@[m
 import type { MetadataRoute } from "next";[m
[31m-[m
[31m-// TODO: replace with the real custom domain once it is connected.[m
[31m-const SITE_URL = "https://power-station-sizer.vercel.app";[m
[32m+[m[32mimport { absoluteUrl } from "@/lib/site";[m
 [m
 export default function sitemap(): MetadataRoute.Sitemap {[m
   return [[m
     {[m
[31m-      url: SITE_URL,[m
[32m+[m[32m      url: absoluteUrl("/"),[m
       lastModified: new Date(),[m
       changeFrequency: "monthly",[m
       priority: 1,[m
[1mdiff --git a/components/content/Faq.tsx b/components/content/Faq.tsx[m
[1mindex 8baf4ce..cc56ae8 100644[m
[1m--- a/components/content/Faq.tsx[m
[1m+++ b/components/content/Faq.tsx[m
[36m@@ -1,3 +1,5 @@[m
[32m+[m[32mimport { absoluteUrl } from "@/lib/site";[m
[32m+[m
 interface FaqItem {[m
   question: string;[m
   answer: string;[m
[36m@@ -35,6 +37,7 @@[m [mexport function Faq() {[m
   const jsonLd = {[m
     "@context": "https://schema.org",[m
     "@type": "FAQPage",[m
[32m+[m[32m    mainEntityOfPage: absoluteUrl("/"),[m
     mainEntity: FAQ_ITEMS.map((item) => ({[m
       "@type": "Question",[m
       name: item.question,[m
