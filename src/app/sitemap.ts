import { MetadataRoute } from "next";
import { regionsData } from "@/data/regions";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/config/site";

/**
 * 13단계: Next.js 동적 sitemap.xml 생성 엔진
 * 단일 원본 데이터(regionsData, servicesData)를 참조하여 100% 실재하는 유효 URL 목록만 사이트맵에 기재합니다.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.baseUrl || "https://www.cbrainguard.co.kr";
  const lastModified = new Date();

  // A. 정적/필수 페이지 목록
  const sitemaps: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/sitemap-chungbuk`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    }
  ];

  // B. 동적 키워드 페이지 목록 (443개 승인 지역 * 13종 작업명 = 5,759개 조합)
  regionsData
    .filter((reg) => reg.isActive)
    .forEach((reg) => {
      servicesData.forEach((svc) => {
        const paramK = `${reg.keywordName}-${svc.keyword}`;
        sitemaps.push({
          url: `${baseUrl}/?k=${encodeURIComponent(paramK)}`,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      });
    });

  return sitemaps;
}
