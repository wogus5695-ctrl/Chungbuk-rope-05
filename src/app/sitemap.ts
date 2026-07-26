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

  const seenUrls = new Set<string>();
  seenUrls.add(`${baseUrl}/`);
  seenUrls.add(`${baseUrl}/sitemap-chungbuk`);

  // B. 지역 데이터 중복 검사 및 경고
  const activeRegions = regionsData.filter((reg) => reg.isActive);
  const seenIds = new Set<string>();
  const seenKeywords = new Set<string>();

  for (const reg of activeRegions) {
    if (seenIds.has(reg.id)) {
      console.warn(`[Sitemap Warning] Duplicate region ID detected: "${reg.id}"`);
    }
    seenIds.add(reg.id);

    if (seenKeywords.has(reg.keywordName)) {
      console.warn(`[Sitemap Warning] Duplicate region keywordName detected: "${reg.keywordName}" (ID: ${reg.id})`);
    }
    seenKeywords.add(reg.keywordName);
  }

  // C. 동적 키워드 페이지 목록 (440개 승인 지역 * 13종 작업명 = 5,720개 조합)
  activeRegions.forEach((reg) => {
    servicesData.forEach((svc) => {
      const paramK = `${reg.keywordName}-${svc.keyword}`;
      const url = `${baseUrl}/?k=${encodeURIComponent(paramK)}`;

      if (seenUrls.has(url)) {
        console.warn(`[Sitemap Warning] Duplicate URL detected: "${url}" for region "${reg.keywordName}"`);
      } else {
        seenUrls.add(url);
        sitemaps.push({
          url,
          lastModified,
          changeFrequency: "monthly",
          priority: 0.6,
        });
      }
    });
  });

  return sitemaps;
}
