import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

/**
 * 13단계: Next.js 동적 robots.txt 생성 엔진
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = siteConfig.baseUrl || "https://www.cbrainguard.co.kr";

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${baseUrl}/sitemap.xml`
  };
}
