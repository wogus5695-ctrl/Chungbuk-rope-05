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

  // B. 동적 키워드 페이지 목록 (171개 지역 * 13종 작업명 = 2,223개 조합)
  // regionsData 및 servicesData 선언 순서대로 순회하여 출력 순서 유지
  regionsData.forEach((reg) => {
    servicesData.forEach((svc) => {
      // 한글이 포함된 k 파라미터는 Next.js 내부적으로 출력 시 안전하게 1회 인코딩되므로, 
      // 이중 인코딩이 발생하지 않도록 한글 디코딩된 순수 형태로 주소를 넘겨주면 
      // Next.js XML 파서가 sitemap 생성 시 알아서 안전하게 URL 포맷팅을 완수합니다.
      const paramK = `${reg.keywordName}-${svc.keyword}`;
      sitemaps.push({
        url: `${baseUrl}/?k=${paramK}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.6,
      });
    });
  });

  return sitemaps;
}
