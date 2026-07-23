export interface SiteConfig {
  brandName: string;
  branchName: string;
  phoneNumber: string;
  phoneHref: string;
  kakaoChannelUrl: string;
  businessName: string;
  representativeName: string;
  businessRegistrationNumber: string;
  address: string;
  privacyPolicyUrl: string;
  copyrightText: string;
  defaultTitle: string;
  defaultDescription: string;
  operatingRegion: string;
  ogImagePlaceholder: string;
  SEARCH_THUMBNAIL_PATH: string;
  SEARCH_THUMBNAIL_URL: string;
  SEARCH_THUMBNAIL_WIDTH: number;
  SEARCH_THUMBNAIL_HEIGHT: number;
  SEARCH_THUMBNAIL_ALT: string;
  MAIN_HERO_IMAGE: string;
  baseUrl: string;
}

export type RegionType = "city" | "county" | "district" | "eup" | "myeon" | "dong";
export type ProvinceGroup = "chungbuk" | "daejeon" | "sejong";

export interface DetailedRegion {
  id: string;
  keywordName: string;
  formalName: string;
  regionType: RegionType;
  parentId: string | null;
  provinceGroup: ProvinceGroup;
  variantGroupId: string | null;
  sortOrder: number;
  isActive: boolean;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface SymptomCard {
  title: string;
  desc: string;
  icon: string;
}

export interface PathStep {
  step: string;
  name: string;
  desc: string;
}

export interface CaseCard {
  title: string;
  type: string;
  desc: string;
}

export interface ServiceData {
  keyword: string;
  intentType: "silicone" | "leak" | "waterproof" | "crack";
  heroTitleTemplate: string;
  heroDescriptionTemplate: string;
  symptoms: string[]; // 4개
  inspectionPoints: string[];
  workScope: string[];
  cautionText: string;
  processSteps: { step: string; name: string; desc: string; }[]; // 3개
  faq: FAQItem[]; // 5개
  relatedServices: string[];
  caseTags: string[];
  titleTemplate: string;
  descriptionTemplate: string;
  finalCtaTemplate: string;
}

export interface RegionData {
  name: string;
  alias?: string[];
  subRegions?: RegionData[];
}

export interface ImageSlots {
  mainHeroBackgroundDesktop: string | null;
  mainHeroBackgroundMobile: string | null;
  dynamicHeroBackgroundDesktop: string | null;
  dynamicHeroBackgroundMobile: string | null;
  symptomSectionImage: string | null;
  serviceInspectionImage: string | null;
  serviceWorkMethodImage: string | null;
  case01BeforeImage: string | null;
  case01AfterImage: string | null;
  case02BeforeImage: string | null;
  case02AfterImage: string | null;
  case03BeforeImage: string | null;
  case03AfterImage: string | null;
  processStep01Image: string | null;
  processStep02Image: string | null;
  processStep03Image: string | null;
  finalCtaBackgroundImage: string | null;
  naverSearchThumbnailImage: string | null;
  openGraphThumbnailImage: string | null;
}

