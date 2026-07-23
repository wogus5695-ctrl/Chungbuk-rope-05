import { SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  brandName: "레인가드",
  branchName: "레인가드 충청북도 지점",
  
  // 연락처 정보 (미확정 상태로 빈 문자열 처리)
  phoneNumber: "", // 예: "010-XXXX-XXXX"
  phoneHref: "", // 예: "tel:010XXXXXXXX"
  kakaoChannelUrl: "", // 예: "http://pf.kakao.com/_xxxxxx"
  
  // 사업자 정보 (미확정 상태로 빈 문자열 처리)
  businessName: "", // 예: "(주)레인가드충북"
  representativeName: "", // 예: "홍길동"
  businessRegistrationNumber: "", // 예: "000-00-00000"
  address: "", // 예: "충청북도 청주시 상당구 ..."
  privacyPolicyUrl: "/privacy",
  copyrightText: "© 레인가드 충청북도 지점. All rights reserved.",

  defaultTitle: "레인가드 충청북도 지점 | 창틀코킹, 빗물누수 전문",
  defaultDescription: "충청북도 전 지역 아파트/상가 창틀누수, 창틀코킹, 외벽누수 정밀 진단 및 시공 전문 레인가드입니다.",
  operatingRegion: "충청북도",
  ogImagePlaceholder: "/images/og-placeholder.png",
  SEARCH_THUMBNAIL_PATH: "/images/seo/rainguard-search-thumbnail.jpg",
  SEARCH_THUMBNAIL_URL: "https://www.cbrainguard.co.kr/images/seo/rainguard-search-thumbnail.jpg",
  SEARCH_THUMBNAIL_WIDTH: 1200,
  SEARCH_THUMBNAIL_HEIGHT: 630,
  SEARCH_THUMBNAIL_ALT: "충청북도 창틀코킹 및 빗물누수 전문 레인가드",
  MAIN_HERO_IMAGE: "/images/hero/rainguard-chungbuk-hero-v1.jpg",
  baseUrl: "https://www.cbrainguard.co.kr"
};
