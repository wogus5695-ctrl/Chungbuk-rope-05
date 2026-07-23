import { ImageSlots } from "@/types";

/**
 * [3단계 - 이미지 슬롯 독립 관리 시스템]
 * 모든 실제 이미지 파일 슬롯의 초기 상태값은 null로 구성합니다.
 * 향후 이미지가 업로드되면 주석에 명시된 해당 경로에 파일을 위치시키고
 * 슬롯 값을 해당 문자열 경로로 수정하여 활성화할 수 있습니다.
 *
 * 절대 규칙:
 * 1. AI 이미지 생성 금지, 외부 스톡 이미지 금지.
 * 2. 한 슬롯의 이미지가 없을 때 다른 슬롯의 이미지로 자동 대체되지 않아야 합니다.
 * 3. 이미지가 null일 때는 깨진 아이콘이나 플레이스홀더를 노출하지 않고,
 *    CSS 브랜드 배경색 및 정상 구조로 레이아웃이 자연스럽게 연출되도록 컴포넌트 측에서 방어합니다.
 */
export const imageSlots: ImageSlots = {
  // HERO 섹션 이미지 슬롯
  mainHeroBackgroundDesktop: "/images/hero/hero-bg.jpg",
  mainHeroBackgroundMobile: "/images/hero/hero-bg.jpg",
  dynamicHeroBackgroundDesktop: "/images/hero/hero-bg.jpg",
  dynamicHeroBackgroundMobile: "/images/hero/hero-bg.jpg",

  // 누수 증상 이미지 슬롯
  symptomSectionImage: "/images/symptoms/symptom-main.jpg",           // 예: "/images/symptoms/symptom-main.jpg"

  // 서비스 소개 이미지 슬롯
  serviceInspectionImage: null,        // 예: "/images/services/inspection.jpg"
  serviceWorkMethodImage: null,        // 예: "/images/services/work-method.jpg"

  // 시공 사례 이미지 슬롯 (비포 & 애프터는 독립적으로 분리)
  case01BeforeImage: null,             // 예: "/images/cases/case01-before.jpg"
  case01AfterImage: null,              // 예: "/images/cases/case01-after.jpg"
  case02BeforeImage: null,             // 예: "/images/cases/case02-before.jpg"
  case02AfterImage: null,              // 예: "/images/cases/case02-after.jpg"
  case03BeforeImage: null,             // 예: "/images/cases/case03-before.jpg"
  case03AfterImage: null,              // 예: "/images/cases/case03-after.jpg"

  // 공정 단계 이미지 슬롯
  processStep01Image: null,            // 예: "/images/process/step01.jpg"
  processStep02Image: null,            // 예: "/images/process/step02.jpg"
  processStep03Image: null,            // 예: "/images/process/step03.jpg"

  // 최종 CTA 배경 이미지 슬롯
  finalCtaBackgroundImage: null,       // 예: "/images/cta/final-cta-bg.jpg"

  // SEO 검색 관련 이미지 슬롯
  naverSearchThumbnailImage: null,     // 예: "/images/seo/naver-thumbnail.jpg"
  openGraphThumbnailImage: null        // 예: "/images/seo/og-thumbnail.jpg"
};
