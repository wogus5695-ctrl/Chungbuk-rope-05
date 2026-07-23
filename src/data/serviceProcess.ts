import { ServiceProcess } from "@/types";

/**
 * [작업 과정 섹션 전용 데이터 모듈]
 * 13종 작업명별 차별화된 3단계 공정 데이터
 * 
 * 중요 규칙:
 * 1. 13종 작업명 전수 등록 (데이터 누락 없음)
 * 2. 유사어 자동 치환 및 고정 Fallback(창틀코킹 대체) 금지
 * 3. 데이터가 존재하지 않는 경우 개발 환경 경고 및 null 반환 (안전한 섹션 숨김)
 */
export const serviceProcessMap: Record<string, ServiceProcess> = {
  // 1. 창틀코킹
  "창틀코킹": {
    eyebrow: "창틀 코킹 3단계 정밀 시공",
    title: "레인가드 창틀코킹 3단계 작업 과정",
    description: "기존 실리콘 상태를 확인한 뒤 필요한 범위를 정리하고 시공합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "기존 코킹 상태 확인",
        description: "노후 실리콘의 갈라짐과 들뜸, 접착 상태를 확인해 제거 범위를 판단합니다.",
        highlights: ["노후 실리콘 갈라짐·들뜸 점검", "제거 및 보수 범위 결정"]
      },
      {
        number: "02",
        icon: "clean",
        title: "기존 실리콘 제거 및 접착면 정리",
        description: "필요한 범위의 기존 실리콘과 오염물을 제거하고 시공면을 정돈합니다.",
        highlights: ["기존 오염 실리콘 정돈", "시공면 청소 및 바닥 정리"]
      },
      {
        number: "03",
        icon: "sealant",
        title: "실리콘 충진 및 코킹 마감",
        description: "접합부에 맞춰 실리콘을 충진하고 표면을 일정하게 성형해 마감합니다.",
        highlights: ["밀착 실리콘 충진", "일정한 표면 성형 마감"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 2. 창틀누수
  "창틀누수": {
    eyebrow: "창틀 누수 원인 파악 및 보수",
    title: "창틀누수 3단계 정밀 점검 및 보수 과정",
    description: "창틀 주변 누수 증상과 유입 조건을 확인한 후 원인 부위에 맞추어 시공합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "누수 증상과 발생 조건 확인",
        description: "비의 방향과 강도, 물자국 위치를 확인해 유입 가능 부위를 좁힙니다.",
        highlights: ["강수 방향 및 물자국 추적", "유입 가능 부위 1차 범주화"]
      },
      {
        number: "02",
        icon: "check",
        title: "창틀·외벽 접합부 점검",
        description: "외부 실리콘과 창틀 모서리, 외벽 균열 및 접합부 상태를 확인합니다.",
        highlights: ["외부 실리콘·창틀 모서리 점검", "외벽 균열 및 이음새 확인"]
      },
      {
        number: "03",
        icon: "repair",
        title: "원인 부위에 맞춘 보수",
        description: "확인된 손상 범위에 따라 코킹, 균열 보수 또는 방수 작업을 진행합니다.",
        highlights: ["손상 범위별 적합 공법 적용", "코킹 및 방수 마감 처리"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 3. 빗물누수
  "빗물누수": {
    eyebrow: "빗물 유입 탐지 및 긴급 보수",
    title: "빗물누수 3단계 탐지 및 차단 과정",
    description: "빗물 유입 패턴과 물자국을 분석하여 원인 지점에 맞는 맞춤 보수를 시행합니다.",
    steps: [
      {
        number: "01",
        icon: "water",
        title: "물자국과 유입 조건 확인",
        description: "누수가 발생한 위치와 비가 내린 방향, 반복 여부를 함께 확인합니다.",
        highlights: ["누수 위치 및 강수 방향 분석", "발생 빈도 및 조건 기록"]
      },
      {
        number: "02",
        icon: "search-location",
        title: "유입 가능 부위 점검",
        description: "창틀과 외벽, 옥상 또는 지붕 접합부 중 가능성이 높은 부위를 점검합니다.",
        highlights: ["창틀·외벽·옥상 접합부 조사", "고위험 침투 경로 탐색"]
      },
      {
        number: "03",
        icon: "shield-check",
        title: "원인에 맞춘 범위별 보수",
        description: "유입 지점과 손상 범위에 따라 코킹·균열·방수 보수 방법을 결정합니다.",
        highlights: ["유입 지점별 보수법 적용", "코킹·크랙·방수 밀봉 차단"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 4. 창틀실리콘
  "창틀실리콘": {
    eyebrow: "창틀 실리콘 정밀 점검 및 시공",
    title: "창틀실리콘 3단계 시공 과정",
    description: "창틀 손상 범위를 점검하고 오염물 정리 후 꼼꼼하게 실리콘을 충진하여 마감합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "실리콘 손상 범위 점검",
        description: "창틀 모서리와 프레임 접합부의 갈라짐, 들뜸과 공극을 확인합니다.",
        highlights: ["모서리·접합부 갈라짐 점검", "들뜸 및 미세 공극 탐지"]
      },
      {
        number: "02",
        icon: "clean",
        title: "접착면 정리 및 시공 준비",
        description: "노후 실리콘과 이물질을 정리하고 필요한 경우 접착 보강 작업을 진행합니다.",
        highlights: ["노후 실리콘·이물질 제거", "접착력 보강 밑작업"]
      },
      {
        number: "03",
        icon: "sealant",
        title: "실리콘 시공 및 표면 마감",
        description: "접합부 깊이와 형태에 맞춰 실리콘을 충진하고 끊김 없이 마감합니다.",
        highlights: ["접합부 정밀 실리콘 충진", "끊김 없는 매끄러운 마감"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 5. 샷시실리콘
  "샷시실리콘": {
    eyebrow: "샷시 프레임 실리콘 시공",
    title: "샷시실리콘 3단계 시공 과정",
    description: "샷시 프레임 손상 범위를 정밀 점검하고 이물질 정리 후 꼼꼼하게 재실링 마감합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "실리콘 손상 범위 점검",
        description: "창틀 모서리와 프레임 접합부의 갈라짐, 들뜸과 공극을 확인합니다.",
        highlights: ["샷시 프레임 갈라짐 점검", "이격 부위 및 공극 확인"]
      },
      {
        number: "02",
        icon: "clean",
        title: "접착면 정리 및 시공 준비",
        description: "노후 실리콘과 이물질을 정리하고 필요한 경우 접착 보강 작업을 진행합니다.",
        highlights: ["노후 실리콘 이물질 탈거", "필요 시 접착 보강 칠"]
      },
      {
        number: "03",
        icon: "sealant",
        title: "실리콘 시공 및 표면 마감",
        description: "접합부 깊이와 형태에 맞춰 실리콘을 충진하고 끊김 없이 마감합니다.",
        highlights: ["형태별 실리콘 정량 충진", "밀착 기밀 표면 마감"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 6. 외벽누수
  "외벽누수": {
    eyebrow: "외벽 누수 경로 탐지 및 보수",
    title: "외벽누수 3단계 점검 및 보수 과정",
    description: "외부 균열과 접합부, 실내 물자국 위치를 비교하여 외벽 누수 원인을 규명하고 정밀 보강합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "외벽 손상과 실내 흔적 확인",
        description: "외부 균열과 접합부, 실내 물자국 위치를 비교해 유입 경로를 확인합니다.",
        highlights: ["외부 균열·접합부 상태 대조", "실내 물자국 유입 경로 추적"]
      },
      {
        number: "02",
        icon: "repair",
        title: "균열·실링 부위 보수",
        description: "손상된 크랙과 노후 실링 부위를 정리하고 필요한 보수재를 적용합니다.",
        highlights: ["노후 실링 및 크랙 부위 정리", "적합 방수 보수재 정밀 적용"]
      },
      {
        number: "03",
        icon: "shield-check",
        title: "방수 마감과 취약부 확인",
        description: "보수 부위를 마감한 뒤 주변 접합부와 추가 취약 부위를 함께 확인합니다.",
        highlights: ["보수 부위 완벽 방수 마감", "주변 접합부 추가 점검"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 7. 외벽방수
  "외벽방수": {
    eyebrow: "외벽 방수 상태 점검 및 마감",
    title: "외벽방수 3단계 정밀 시공 과정",
    description: "외벽 바탕면과 접합부 상태를 종합 점검하고 선행 보수 후 외벽 재질에 맞추어 방수 마감합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "외벽 바탕면과 균열 점검",
        description: "도장면 들뜸과 균열, 창호 주변 및 외벽 접합부 상태를 점검합니다.",
        highlights: ["도장면 들뜸 및 균열 조사", "창호 주변·접합부 밀착 점검"]
      },
      {
        number: "02",
        icon: "clean",
        title: "균열·노후 부위 선행 보수",
        description: "방수 작업 전 손상된 균열과 실링 부위를 정리하고 보강합니다.",
        highlights: ["노후 실링·크랙 선행 보수", "방수면 밑작업 및 정돈"]
      },
      {
        number: "03",
        icon: "coat",
        title: "외벽 조건에 맞는 방수 마감",
        description: "외벽 재질과 손상 범위에 맞춰 방수재를 적용하고 마감 상태를 확인합니다.",
        highlights: ["외벽 재질별 맞춤 방수재 적용", "최종 마감 상태 정밀 검수"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 8. 건물방수
  "건물방수": {
    eyebrow: "건물 종합 방수 정비",
    title: "건물방수 3단계 종합 정비 과정",
    description: "건물 전체 취약 부위를 종합 점검하고 원인별 선행 보수 후 재질에 맞는 공법으로 마감합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "건물별 취약 부위 종합 점검",
        description: "옥상과 외벽, 창호 및 접합부를 확인해 우선 보수가 필요한 부위를 정리합니다.",
        highlights: ["옥상·외벽·창호 종합 조사", "우선 보수 필요 부위 도출"]
      },
      {
        number: "02",
        icon: "repair",
        title: "손상 부위별 기초 보수",
        description: "균열과 노후 실링, 들뜬 방수층 등 원인별 선행 보수를 진행합니다.",
        highlights: ["균열·노후 실링 선행 정리", "들뜬 바탕층 기초 보강"]
      },
      {
        number: "03",
        icon: "shield-check",
        title: "부위별 방수 시공 및 확인",
        description: "각 부위의 재질과 사용 환경에 맞는 공법을 적용하고 마감 상태를 확인합니다.",
        highlights: ["부위별 사용 환경 맞춤 시공", "방수 마감 및 수분 차단 검수"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 9. 옥상방수
  "옥상방수": {
    eyebrow: "옥상 바탕 정비 및 방수 시공",
    title: "옥상방수 3단계 정밀 시공 과정",
    description: "옥상 바닥 바탕면과 배수 구배를 점검하고 이물질 정리 및 취약 부위 보수 후 방수층을 형성합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "바탕면·균열·배수 상태 점검",
        description: "기존 방수층의 들뜸과 균열, 물고임 및 배수구 주변 상태를 확인합니다.",
        highlights: ["방수층 들뜸·균열 상태 조사", "물고임 부위 및 배수구 점검"]
      },
      {
        number: "02",
        icon: "clean",
        title: "바탕면 정리와 손상부 보수",
        description: "시공에 방해되는 오염물과 들뜬 부분을 정리하고 균열과 취약부를 보수합니다.",
        highlights: ["오염물·불량 방수층 박리", "균열 및 파라펫 취약부 보수"]
      },
      {
        number: "03",
        icon: "coat",
        title: "방수층 시공 및 마감 확인",
        description: "현장 조건에 맞는 방수 공정을 적용하고 접합부와 배수 상태를 최종 확인합니다.",
        highlights: ["현장 맞춤 방수 공정 적용", "배수 상태 및 접합부 최종 점검"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 10. 우레탄방수
  "우레탄방수": {
    eyebrow: "우레탄 방수층 형성 및 보강",
    title: "우레탄방수 3단계 표준 시공 과정",
    description: "기존 방수층 상태와 수분을 확인하고 바탕 정리 및 균열 보수 후 우레탄 도막을 정밀하게 형성합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "기존 방수층과 바탕면 점검",
        description: "방수층의 들뜸과 갈라짐, 수분 상태 및 배수 조건을 확인합니다.",
        highlights: ["방수층 갈라짐 및 들뜸 측정", "바탕 수분 잔존도·배수 확인"]
      },
      {
        number: "02",
        icon: "clean",
        title: "바탕 정리와 기초 보강",
        description: "노후 방수층과 오염물을 정리하고 균열 및 접합부를 선행 보수합니다.",
        highlights: ["노후 방수층 연삭 정리", "균열·접합부 우레탄 실링"]
      },
      {
        number: "03",
        icon: "coat",
        title: "우레탄 방수층 형성과 마감",
        description: "현장 조건에 맞춰 우레탄 방수층을 형성하고 도막 상태와 취약부를 확인합니다.",
        highlights: ["우레탄 탄성 방수층 펴바름", "도막 균일성 및 취약부 검수"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 11. 지붕방수
  "지붕방수": {
    eyebrow: "지붕재 손상 보수 및 방수",
    title: "지붕방수 3단계 안전 시공 과정",
    description: "지붕재 겹침부와 용마루, 배수 라인의 누수 가능성을 확인한 후 지붕 구조에 맞는 맞춤 보강을 진행합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "지붕재와 접합부 상태 확인",
        description: "지붕재 손상과 겹침부, 용마루 및 배수 부위의 누수 가능성을 점검합니다.",
        highlights: ["지붕 슁글·판넬 손상 점검", "용마루 및 배수 부위 조사"]
      },
      {
        number: "02",
        icon: "repair",
        title: "손상 부위 정리와 보강",
        description: "노후 실링과 부식 또는 파손 부위를 정리하고 필요한 보수 작업을 진행합니다.",
        highlights: ["노후 실링·부식 이물질 정돈", "파손 지붕재 전용 보강"]
      },
      {
        number: "03",
        icon: "shield-check",
        title: "접합부 방수 및 마감 확인",
        description: "지붕 구조와 재질에 맞춰 방수 작업을 진행하고 누수 취약부를 최종 확인합니다.",
        highlights: ["지붕 구조별 밀착 방수 적용", "누수 취약부 밀봉 최종 검수"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 12. 판넬방수
  "판넬방수": {
    eyebrow: "조립식 판넬 접합부 보수",
    title: "판넬방수 3단계 기밀 보수 과정",
    description: "판넬 겹침부와 체결 볼트, 후레싱 손상을 정밀 점검하고 노후 실란트 정리 후 기밀 보수 마감합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "판넬 이음부와 체결부 점검",
        description: "판넬 겹침부와 볼트, 후레싱 및 기존 실란트의 손상 상태를 확인합니다.",
        highlights: ["판넬 겹침 조인트 손상 확인", "볼트 체결부 및 후레싱 조사"]
      },
      {
        number: "02",
        icon: "clean",
        title: "노후 실란트·부식 부위 정리",
        description: "접착을 방해하는 노후 실란트와 오염물, 부식 부위를 필요한 범위만큼 정리합니다.",
        highlights: ["노후 실란트·녹 오염물 제거", "실링 접착면 바닥 정리"]
      },
      {
        number: "03",
        icon: "sealant",
        title: "이음부 실링과 방수 마감",
        description: "판넬 구조에 맞춰 접합부와 체결부를 보수하고 방수 마감 상태를 확인합니다.",
        highlights: ["판넬 체결부·이음새 정밀 실링", "열팽창 대응 기밀 마감"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  },

  // 13. 외벽크랙보수
  "외벽크랙보수": {
    eyebrow: "외벽 콘크리트 균열 보수",
    title: "외벽크랙보수 3단계 정밀 공법",
    description: "외벽 콘크리트 균열 폭과 깊이를 계측하고 오염 부위 정리 후 맞춤형 보수재 주입 및 마감합니다.",
    steps: [
      {
        number: "01",
        icon: "search",
        title: "균열 폭과 진행 상태 확인",
        description: "균열의 폭과 방향, 창호 주변 및 기존 보수 부위의 상태를 점검합니다.",
        highlights: ["크랙 폭·방향 정밀 계측", "창호 주변 및 기존 보수면 점검"]
      },
      {
        number: "02",
        icon: "repair",
        title: "균열부 정리와 보수재 충진",
        description: "손상 부위를 정리한 뒤 균열 상태에 적합한 보수재를 적용합니다.",
        highlights: ["크랙 단면 청소 및 정돈", "균열 깊이별 맞춤 보수재 주입"]
      },
      {
        number: "03",
        icon: "shield-check",
        title: "표면 마감과 추가 방수 판단",
        description: "보수 부위를 마감하고 주변 외벽의 추가 방수 필요 여부를 함께 확인합니다.",
        highlights: ["표면 평탄화 마감 처리", "주변 외벽 추가 방수 필요 진단"]
      }
    ],
    notice: "건물 상태와 손상 범위에 따라 실제 작업 순서와 사용 자재는 달라질 수 있습니다."
  }
};

/**
 * 작업명(keyword)에 해당하는 ServiceProcess 데이터를 안전하게 조회합니다.
 * 
 * [안전 규칙]:
 * 1. 13종 작업명에 존재하지 않거나 null/undefined인 경우 고정 Fallback("창틀코킹")을 적용하지 않습니다.
 * 2. 데이터 누락 시 개발 환경에서는 console.error 경고를 출력하고 null을 반환하여 UI 상에서 안전하게 섹션을 숨기도록 합니다.
 */
export function getServiceProcess(serviceKeyword?: string): ServiceProcess | null {
  if (!serviceKeyword) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[serviceProcessMap] serviceKeyword가 제공되지 않았습니다.");
    }
    return null;
  }

  const processData = serviceProcessMap[serviceKeyword];

  if (!processData) {
    if (process.env.NODE_ENV === "development") {
      console.error(`[serviceProcessMap] '${serviceKeyword}'에 해당하는 작업 과정 데이터를 찾을 수 없습니다. (Fallback 사용 금지 지침 적용됨)`);
    }
    return null;
  }

  return processData;
}
