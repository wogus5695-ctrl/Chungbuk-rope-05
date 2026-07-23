export interface SymptomItem {
  label: string;
  title: string;
  description: string;
}

export interface SelfDiagnosisContent {
  sectionTitle: string;
  sectionDescription: string;
  symptoms: SymptomItem[];
}

export const selfDiagnosisData: Record<string, SelfDiagnosisContent> = {
  "창틀코킹": {
    sectionTitle: "{region} 창틀코킹 자가진단",
    sectionDescription: "창틀 코킹 노후화로 나타나는 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "실리콘 갈라짐이 보여요",
        description: "햇빛과 외기에 의해 창틀 실리콘 접착면에 균열이 발생한 상태입니다."
      },
      {
        label: "증상 02",
        title: "실리콘이 들떠 있어요",
        description: "창틀 프레임과 콘크리트 접합부 실리콘이 구부러져 떨어진 모습입니다."
      },
      {
        label: "증상 03",
        title: "창틀 모서리에 틈이 생겼어요",
        description: "창틀 사각 모서리 코킹 부위가벌어져 빗물이 스며들 공간이 생긴 상태입니다."
      },
      {
        label: "증상 04",
        title: "기존 코킹이 변색·경화됐어요",
        description: "오래된 실리콘이 딱딱하게 굳어 탄성을 잃고 방수 기능을 못하는 상태입니다."
      }
    ]
  },
  "창틀누수": {
    sectionTitle: "{region} 창틀누수 자가진단",
    sectionDescription: "창틀 주변 누수로 의심되는 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "창틀 하단에 물이 고여요",
        description: "비가 올 때 창틀 샷시 프레임 밑부분으로 빗물이 들어오는 현상입니다."
      },
      {
        label: "증상 02",
        title: "벽지나 몰딩이 변색돼요",
        description: "창가 주변 벽지나 하단 걸레받이에 물 흔적과 변색이 일어난 상태입니다."
      },
      {
        label: "증상 03",
        title: "비 올 때 물방울이 맺혀요",
        description: "창틀 내부 마감 부위나 모서리 틈으로 물방울이 맺히며 떨어지는 상태입니다."
      },
      {
        label: "증상 04",
        title: "창문 주변에 곰팡이가 생겨요",
        description: "창틀 이음부 수분 유입으로 습기가 축적되어 곰팡이가 발생하는 현상입니다."
      }
    ]
  },
  "빗물누수": {
    sectionTitle: "{region} 빗물누수 자가진단",
    sectionDescription: "비 온 뒤 나타나는 빗물 유입 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "비 올 때만 물자국이 남아요",
        description: "맑은 날에는 얼룩이 마르고 비가 오면 다시 젖는 현상이 나타납니다."
      },
      {
        label: "증상 02",
        title: "천장이나 벽면이 얼룩져요",
        description: "외부 빗물이 건물 크랙이나 창틀을 타고 내부 실내 마감재로 들어온 흔적입니다."
      },
      {
        label: "증상 03",
        title: "실내에 지속적인 습기가 차요",
        description: "눈에 띄는 물샘 외에도 빗물 유입으로 실내 보일러·벽면 장판 아래가 눅눅한 상태입니다."
      },
      {
        label: "증상 04",
        title: "강풍이나 폭우 시 누수가 심해져요",
        description: "바람을 동반한 비가 칠 때 빗물이 외부 틈새로 강하게 스며드는 반응입니다."
      }
    ]
  },
  "창틀실리콘": {
    sectionTitle: "{region} 창틀실리콘 자가진단",
    sectionDescription: "창틀 실리콘 노후화로 나타나는 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "실리콘에 균열이 가 있어요",
        description: "외부 수축팽창으로 창틀 마감 실리콘 표면이 갈라진 상태입니다."
      },
      {
        label: "증상 02",
        title: "접합부가 벌어져 틈이 보여요",
        description: "창틀 프레임과 콘크리트 외벽 사이 접착면이 떨어진 모습입니다."
      },
      {
        label: "증상 03",
        title: "창틀 틈에서 바람이 유입돼요",
        description: "실리콘 틈새로 차가운 외부 바람이 들어와 기밀성이 떨어진 현상입니다."
      },
      {
        label: "증상 04",
        title: "창틀 주변에 수분 흔적이 생겨요",
        description: "실리콘 접합부 손상 부위로 약간의 빗물이 침투하는 신호입니다."
      }
    ]
  },
  "샷시실리콘": {
    sectionTitle: "{region} 샷시실리콘 자가진단",
    sectionDescription: "비 온 뒤 나타나는 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "비 온 뒤 도배지가 변색돼요",
        description: "창틀 접합부로 빗물이 스며드는 신호일 수 있습니다."
      },
      {
        label: "증상 02",
        title: "창틀 틈에서 바람 소리가 나요",
        description: "실리콘이 벌어져 외부 공기가 통과하는 상태일 수 있습니다."
      },
      {
        label: "증상 03",
        title: "실리콘 주변에 기포가 생겨요",
        description: "실리콘 안쪽으로 수분이 들어갔을 가능성이 있습니다."
      },
      {
        label: "증상 04",
        title: "비가 오면 문턱이 들떠요",
        description: "반복된 수분 유입으로 마감재가 팽창했을 수 있습니다."
      }
    ]
  },
  "외벽누수": {
    sectionTitle: "{region} 외벽누수 자가진단",
    sectionDescription: "외벽 취약 부위로 인해 일어나는 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "외벽 균열 주변에 물자국이 생겨요",
        description: "건물 외벽 틈새를 따라 빗물이 유입되어 얼룩이 진 상태입니다."
      },
      {
        label: "증상 02",
        title: "창호 모서리 벽면이 젖어 있어요",
        description: "외벽과 창틀 경계 부위 손상으로 실내 모서리 벽면까지 습기가 스며든 모습입니다."
      },
      {
        label: "증상 03",
        title: "실내 특정 벽면 전체가 변색돼요",
        description: "외벽을 통해 스며든 빗물이 실내 콘크리트 벽면 마감재를 적신 흔적입니다."
      },
      {
        label: "증상 04",
        title: "비가 그친 후에도 습기가 지속돼요",
        description: "외벽 내부에 유입된 수분이 빨리 마르지 않고 습기를 유발하는 현상입니다."
      }
    ]
  },
  "외벽방수": {
    sectionTitle: "{region} 외벽방수 자가진단",
    sectionDescription: "외벽 방수재 노후화로 나타나는 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "외벽 페인트 및 도장면이 들떠요",
        description: "외벽 방수 도막이나 페인트층이 수분으로 인해 부풀어 떨어지는 상태입니다."
      },
      {
        label: "증상 02",
        title: "외벽 수직·실크랙이 관찰돼요",
        description: "외벽 표면에 크랙이 가 있어 빗물이 방수층 내부로 침투하는 구조입니다."
      },
      {
        label: "증상 03",
        title: "외벽 접합부 실링이 노후됐어요",
        description: "석재·드라이비트·창호 층간 접합 실란트가 갈라진 현상입니다."
      },
      {
        label: "증상 04",
        title: "실내 외벽 접촉면이 자주 축축해요",
        description: "외벽의 방수 성능이 떨어져 비가 온 뒤 외벽 측면 실내가 축축한 반응입니다."
      }
    ]
  },
  "옥상방수": {
    sectionTitle: "{region} 옥상방수 자가진단",
    sectionDescription: "옥상 방수층 균열 및 손상 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "옥상 바닥에 물이 고여 마르지 않아요",
        description: "구배가 맞지 않거나 배수구 주변에 수분이 고여 방수층을 부식시키는 상태입니다."
      },
      {
        label: "증상 02",
        title: "옥상 방수 도막이 들뜨고 벗겨져요",
        description: "바탕면과 방수층 사이에 수분이 차올라 도막층이 일어난 현상입니다."
      },
      {
        label: "증상 03",
        title: "옥상 바닥 콘크리트에 균열이 생겼어요",
        description: "바닥 표면 크랙을 따라 아래층 천장으로 빗물이 침투할 수 있는 상태입니다."
      },
      {
        label: "증상 04",
        title: "배수구 및 난간 접합부에 물이 스며들어요",
        description: "옥상 파라펫 난간이나 배수구 코너 부위의 접합 방수재가 갈라진 모습입니다."
      }
    ]
  },
  "건물방수": {
    sectionTitle: "{region} 건물방수 자가진단",
    sectionDescription: "건물 전체 방수 취약 부위 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "옥상과 외벽에서 동시 누수 흔적이 있어요",
        description: "상부 옥상과 측면 외벽 복합 취약 부위에서 빗물이 유입되는 모습입니다."
      },
      {
        label: "증상 02",
        title: "건물 층간 이음부가 노후됐어요",
        description: "콘크리트 조인트 및 외벽 층간 접합 부위 코킹이 삭아 틈이 발생한 상태입니다."
      },
      {
        label: "증상 03",
        title: "층간 벽면에 지속적인 수분 흔적이 보여요",
        description: "건물 외부에서 스며든 수분이 구조체를 타고 층간 계단이나 벽면으로 나오는 현상입니다."
      },
      {
        label: "증상 04",
        title: "여러 장소에서 비 올 때마다 반복 누수가 생겨요",
        description: "단일 틈새가 아닌 건물 종합 방수층 성능 하락으로 여러 지점에 누수가 발생하는 상태입니다."
      }
    ]
  },
  "지붕방수": {
    sectionTitle: "{region} 지붕방수 자가진단",
    sectionDescription: "지붕재 및 접합부 누수 의심 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "지붕재 이음부에서 물이 새요",
        description: "지붕 기와·기와골·판넬 겹침 부위 틈으로 빗물이 유입되는 현상입니다."
      },
      {
        label: "증상 02",
        title: "용마루 및 벤트 주변에 얼룩이 남아요",
        description: "지붕 덮개나 환기구 접합 부위 실링재가 부식되어 틈이 생긴 모습입니다."
      },
      {
        label: "증상 03",
        title: "최상층 천장 특정 부위에 물자국이 생겨요",
        description: "지붕에서 유입된 빗물이 서까래나 천장 구조체를 적신 흔적입니다."
      },
      {
        label: "증상 04",
        title: "강풍을 동반한 비에 유입이 잦아져요",
        description: "경사 지붕 틈새로 바람에 날린 빗물이 들이치는 수분 침투 현상입니다."
      }
    ]
  },
  "우레탄방수": {
    sectionTitle: "{region} 우레탄방수 자가진단",
    sectionDescription: "우레탄 방수 도막의 노후 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "우레탄 방수층이 부풀어 올랐어요",
        description: "하부 바탕면 수분이 기화하면서 우레탄 도막에 공기 방울과 들뜸이 생긴 상태입니다."
      },
      {
        label: "증상 02",
        title: "우레탄 표면에 균열과 갈라짐이 보여요",
        description: "자외선 노화로 우레탄 탄성이 떨어져 상부 탑코트와 중도가 갈라진 모습입니다."
      },
      {
        label: "증상 03",
        title: "우레탄 도막 마모로 바탕 콘크리트가 노출돼요",
        description: "보행 및 마찰로 방수 도막이 얇아져 방수 능력을 잃어가는 과정입니다."
      },
      {
        label: "증상 04",
        title: "물고임 부위의 우레탄이 변색·손상됐어요",
        description: "항시 물이 고이는 우레탄 바닥층이 화학적으로 삭아 파손된 상태입니다."
      }
    ]
  },
  "판넬방수": {
    sectionTitle: "{region} 판넬방수 자가진단",
    sectionDescription: "조립식 판넬 이음부 및 체결부 증상을 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "판넬 이음부 연결선에서 빗물이 새요",
        description: "샌드위치 판넬 겹침 부위 조인트 실링이 마모되어 물이 들이치는 상태입니다."
      },
      {
        label: "증상 02",
        title: "판넬 고정 볼트 주변에 녹이 났어요",
        description: "고정 볼트 캡의 부식과 부틸 테이프 손상으로 볼트 틈새 누수가 일어난 현상입니다."
      },
      {
        label: "증상 03",
        title: "후레싱 및 캡 접합부에서 물이 흘러내려요",
        description: "지붕 및 벽면 판넬 꺾임 부위 후레싱 실리콘이 벌어진 모습입니다."
      },
      {
        label: "증상 04",
        title: "기존 판넬 실란트가 갈라지고 삭았어요",
        description: "열팽창률이 큰 판넬 특성으로 인해 접합부 실란트가 경화되어 떨어진 상태입니다."
      }
    ]
  },
  "외벽크랙보수": {
    sectionTitle: "{region} 외벽크랙보수 자가진단",
    sectionDescription: "외벽 콘크리트 균열 상태를 확인해보세요.",
    symptoms: [
      {
        label: "증상 01",
        title: "외벽 미세 균열이 촘촘하게 생겼어요",
        description: "건물 외벽에 가로·세로 수직 실크랙이 발생해 빗물이 침투할 수 있는 구조입니다."
      },
      {
        label: "증상 02",
        title: "창문 모서리 대각선 방향으로 크랙이 가 있어요",
        description: "하중이 집중되는 창호 사각 모서리에 구조적 굵은 대각선 균열이 발생한 현상입니다."
      },
      {
        label: "증상 03",
        title: "기존 균열 보수 부위가 재균열됐어요",
        description: "과거 퍼티나 실란트로 막아둔 균열선이 건물의 거동으로 다시 터진 상태입니다."
      },
      {
        label: "증상 04",
        title: "균열 주변 외벽 도장면이 부풀어 떨어져요",
        description: "크랙 속으로 침투한 수분으로 인해 콘크리트 및 표면 페인트가 박리된 모습입니다."
      }
    ]
  }
};

export function getSelfDiagnosisData(keyword: string): SelfDiagnosisContent | null {
  return selfDiagnosisData[keyword] ?? null;
}
