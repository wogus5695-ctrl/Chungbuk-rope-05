import { WorkCase } from "@/types";

/**
 * 현장 시공 사례 전용 데이터 원본 (5개 사례 등록 완료)
 * - 텍스트 콘텐츠 등록 완료
 * - 이미지 연결은 다음 단계 진행 예정입니다 (현재 imageKey 슬롯 연결 준비 상태)
 */
export const workCases: WorkCase[] = [
  {
    id: "apartment-window-caulking",
    imageKey: "caseApartmentWindowCaulking",
    buildingType: "아파트",
    categoryLabels: ["아파트", "창틀코킹", "빗물누수"],
    serviceTypes: ["창틀코킹", "창틀누수", "창틀실리콘", "샷시실리콘"],
    relatedServiceTypes: ["빗물누수", "외벽누수"],
    title: "고층 아파트 창틀 외부, 노후 코킹부를 다시 보강",
    symptom: "비가 오면 창틀 하부와 실내 몰딩 주변으로 물자국이 나타나는 현상",
    inspection: "외부 실리콘의 갈라짐과 들뜸, 창틀 하부 접합부의 틈을 확인",
    work: "노후 코킹부와 접착면을 정리한 뒤 창틀 외부 실리콘 코킹 작업 진행",
    result: "창틀 하부와 외벽 접합부의 빗물 취약 구간을 중심으로 코킹부 보강",
    mobileSummary: "노후 코킹부를 정리하고 창틀 외부 접합부를 다시 보강했습니다.",
    alt: "로프 작업자가 고층 아파트 외부 창틀 하부에 실리콘 코킹 작업을 진행하는 모습",
    isVerified: true,
    sortOrder: 1,
    isActive: true
  },
  {
    id: "factory-exterior-crack-waterproofing",
    imageKey: "caseFactoryExteriorCrackWaterproofing",
    buildingType: "공장·창고",
    categoryLabels: ["공장·창고", "외벽크랙보수", "외벽방수"],
    serviceTypes: ["외벽크랙보수", "외벽방수", "외벽누수"],
    relatedServiceTypes: ["건물방수", "빗물누수"],
    title: "공장 외벽 크랙을 먼저 보수하고 빗물 취약면까지 방수",
    symptom: "외벽 균열과 노후 도장면을 따라 비가 스며드는 현상",
    inspection: "외벽 표면 크랙과 창호·판넬 접합부의 노후 상태를 확인",
    work: "균열부 정리와 크랙 보수 후 외벽 취약면 방수 작업 진행",
    result: "균열부를 보강하고 빗물이 스며들기 쉬운 외벽 표면을 정비",
    mobileSummary: "외벽 균열을 먼저 보수한 뒤 빗물 취약면에 방수 작업을 진행했습니다.",
    alt: "고소작업차를 이용해 공장 외벽의 크랙보수와 방수 작업을 진행하는 현장",
    isVerified: true,
    sortOrder: 2,
    isActive: true
  },
  {
    id: "commercial-building-integrated-waterproofing",
    imageKey: "caseCommercialBuildingIntegratedWaterproofing",
    buildingType: "상가건물",
    categoryLabels: ["상가건물", "건물방수", "실리콘코킹"],
    serviceTypes: ["건물방수", "외벽방수", "창틀코킹", "창틀실리콘", "샷시실리콘"],
    relatedServiceTypes: ["옥상방수", "외벽누수", "빗물누수"],
    title: "창호·외벽·옥상을 함께 점검한 상가건물 종합방수",
    symptom: "창호 주변과 외벽 여러 부위에서 반복되는 빗물누수",
    inspection: "노후 실리콘과 외벽 균열, 옥상 접합부를 구역별로 확인",
    work: "창호 코킹과 외벽 크랙보수, 옥상 취약부 방수 작업 진행",
    result: "부위별 유입 가능 지점을 나누어 필요한 작업 범위를 순차적으로 보강",
    mobileSummary: "창호·외벽·옥상을 함께 점검해 부위별 방수 작업을 진행했습니다.",
    alt: "로프 작업자들이 상가건물 창호와 외벽의 코킹 및 방수 작업을 진행하는 모습",
    isVerified: true,
    sortOrder: 3,
    isActive: true
  },
  {
    id: "villa-exterior-coating-waterproofing",
    imageKey: "caseVillaExteriorCoatingWaterproofing",
    buildingType: "빌라·다가구",
    categoryLabels: ["빌라·다가구", "외벽방수", "도막방수"],
    serviceTypes: ["외벽방수", "건물방수", "외벽누수"],
    relatedServiceTypes: ["외벽크랙보수", "빗물누수"],
    title: "부분 보수를 넘어 빌라 외벽 전면 방수층 보강",
    symptom: "넓은 외벽에 미세 균열과 노후 도장면이 반복적으로 확인되는 상태",
    inspection: "부분 보수만으로 대응하기 어려운 외벽 전면의 노후 범위를 확인",
    work: "바탕면 정리와 균열부 보수 후 건물 전면 도막방수 진행",
    result: "외벽 표면에 보호층을 형성하고 빗물에 노출되는 면을 전체적으로 보강",
    mobileSummary: "균열부를 먼저 보수한 뒤 외벽 전면에 도막방수를 진행했습니다.",
    alt: "로프 작업자가 빌라 외벽 전체에 도막방수 작업을 진행하는 모습",
    isVerified: true,
    sortOrder: 4,
    isActive: true
  },
  {
    id: "rooftop-planter-waterproofing",
    imageKey: "caseRooftopPlanterWaterproofing",
    buildingType: "옥상·화단",
    categoryLabels: ["옥상·화단", "옥상방수", "도막방수"],
    serviceTypes: ["옥상방수", "우레탄방수"],
    relatedServiceTypes: ["건물방수", "빗물누수"],
    title: "화단 바닥과 모서리까지 연속된 방수층으로 보강",
    symptom: "화단의 토양 수분과 빗물이 바닥 접합부로 스며들 가능성이 있는 상태",
    inspection: "화단 바닥과 벽체 모서리, 배수 주변의 기존 방수층 상태를 확인",
    work: "바탕면 정리 후 바닥·벽체·모서리에 연속된 도막방수층 시공",
    result: "물이 머물기 쉬운 바닥과 접합부를 중심으로 방수 취약부 보강",
    mobileSummary: "화단 바닥과 벽체 모서리에 연속된 방수층을 형성했습니다.",
    alt: "작업자들이 옥상 화단의 바닥과 벽체에 도막방수재를 시공하는 모습",
    isVerified: true,
    sortOrder: 5,
    isActive: true
  }
];
