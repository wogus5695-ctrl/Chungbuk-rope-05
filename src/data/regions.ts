import { DetailedRegion } from "@/types";

/**
 * 충청북도·대전광역시·세종특별자치시 전체 공식 행정구역 및 현존 법정동 데이터 (리 단위 제외)
 * 1. 숫자 행정동 및 합성 행정동 완전 제거 -> 개별 법정동 분할 등록
 * 2. 중복 법정동(수곡동, 평촌동, 용산동, 용호동, 송정동, 성남동, 산성동, 문화동 등)은 구명/시명을 결합하여 고유 keywordName 처리
 * 3. 영문 로마자, dong/si/gu/eup/myeon 등의 텍스트 혼입 원천 차단
 */
export const regionsData: DetailedRegion[] = [
  // ==========================================
  // [1] 충청북도 최상위 시/군 및 축약 키워드
  // ==========================================
  { id: "cheongju-si", keywordName: "청주시", formalName: "청주시", regionType: "city", parentId: null, provinceGroup: "chungbuk", variantGroupId: "cheongju", sortOrder: 1, isActive: true },
  { id: "cheongju", keywordName: "청주", formalName: "청주시", regionType: "city", parentId: null, provinceGroup: "chungbuk", variantGroupId: "cheongju", sortOrder: 2, isActive: true },
  { id: "chungju-si", keywordName: "충주시", formalName: "충주시", regionType: "city", parentId: null, provinceGroup: "chungbuk", variantGroupId: "chungju", sortOrder: 3, isActive: true },
  { id: "chungju", keywordName: "충주", formalName: "충주시", regionType: "city", parentId: null, provinceGroup: "chungbuk", variantGroupId: "chungju", sortOrder: 4, isActive: true },
  { id: "jecheon-si", keywordName: "제천시", formalName: "제천시", regionType: "city", parentId: null, provinceGroup: "chungbuk", variantGroupId: "jecheon", sortOrder: 5, isActive: true },
  { id: "jecheon", keywordName: "제천", formalName: "제천시", regionType: "city", parentId: null, provinceGroup: "chungbuk", variantGroupId: "jecheon", sortOrder: 6, isActive: true },

  { id: "boeun-gun", keywordName: "보은군", formalName: "보은군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 7, isActive: true },
  { id: "okcheon-gun", keywordName: "옥천군", formalName: "옥천군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 8, isActive: true },
  { id: "yeongdong-gun", keywordName: "영동군", formalName: "영동군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 9, isActive: true },
  { id: "jeungpyeong-gun", keywordName: "증평군", formalName: "증평군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 10, isActive: true },
  { id: "jincheon-gun", keywordName: "진천군", formalName: "진천군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 11, isActive: true },
  { id: "goesan-gun", keywordName: "괴산군", formalName: "괴산군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 12, isActive: true },
  { id: "eumseong-gun", keywordName: "음성군", formalName: "음성군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 13, isActive: true },
  { id: "danyang-gun", keywordName: "단양군", formalName: "단양군", regionType: "county", parentId: null, provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 14, isActive: true },

  // ==========================================
  // [2] 청주시 하위 4개 구
  // ==========================================
  { id: "cheongju-sangdang", keywordName: "상당구", formalName: "청주시 상당구", regionType: "district", parentId: "cheongju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 15, isActive: true },
  { id: "cheongju-seowon", keywordName: "서원구", formalName: "청주시 서원구", regionType: "district", parentId: "cheongju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 16, isActive: true },
  { id: "cheongju-heungdeok", keywordName: "흥덕구", formalName: "청주시 흥덕구", regionType: "district", parentId: "cheongju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 17, isActive: true },
  { id: "cheongju-cheongwon", keywordName: "청원구", formalName: "청주시 청원구", regionType: "district", parentId: "cheongju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 18, isActive: true },

  // ==========================================
  // [3] 상당구 하위 읍·면·법정동
  // ==========================================
  { id: "sangdang-nangseong", keywordName: "낭성면", formalName: "청주시 상당구 낭성면", regionType: "myeon", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 19, isActive: true },
  { id: "sangdang-miwon", keywordName: "미원면", formalName: "청주시 상당구 미원면", regionType: "myeon", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 20, isActive: true },
  { id: "sangdang-gadeok", keywordName: "가덕면", formalName: "청주시 상당구 가덕면", regionType: "myeon", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 21, isActive: true },
  { id: "sangdang-namil", keywordName: "남일면", formalName: "청주시 상당구 남일면", regionType: "myeon", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 22, isActive: true },
  { id: "sangdang-munui", keywordName: "문의면", formalName: "청주시 상당구 문의면", regionType: "myeon", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 23, isActive: true },

  { id: "sangdang-yeong-dong", keywordName: "영동", formalName: "청주시 상당구 영동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 24, isActive: true },
  { id: "sangdang-su-dong", keywordName: "수동", formalName: "청주시 상당구 수동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 25, isActive: true },
  { id: "sangdang-bukmunro1ga", keywordName: "북문로1가", formalName: "청주시 상당구 북문로1가", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 26, isActive: true },
  { id: "sangdang-bukmunro2ga", keywordName: "북문로2가", formalName: "청주시 상당구 북문로2가", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 27, isActive: true },
  { id: "sangdang-bukmunro3ga", keywordName: "북문로3가", formalName: "청주시 상당구 북문로3가", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 28, isActive: true },
  { id: "sangdang-nammunro1ga", keywordName: "남문로1가", formalName: "청주시 상당구 남문로1가", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 29, isActive: true },
  { id: "sangdang-nammunro2ga", keywordName: "남문로2가", formalName: "청주시 상당구 남문로2가", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 30, isActive: true },
  { id: "sangdang-munhwa", keywordName: "상당문화동", formalName: "청주시 상당구 문화동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 31, isActive: true },
  { id: "sangdang-seowon-dong", keywordName: "서운동", formalName: "청주시 상당구 서운동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 32, isActive: true },
  { id: "sangdang-seomun", keywordName: "서문동", formalName: "청주시 상당구 서문동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 33, isActive: true },
  { id: "sangdang-namju", keywordName: "남주동", formalName: "청주시 상당구 남주동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 34, isActive: true },
  { id: "sangdang-seokgyo", keywordName: "석교동", formalName: "청주시 상당구 석교동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 35, isActive: true },
  { id: "sangdang-tap-dong", keywordName: "탑동", formalName: "청주시 상당구 탑동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 36, isActive: true },
  { id: "sangdang-daeseong", keywordName: "대성동", formalName: "청주시 상당구 대성동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 37, isActive: true },
  { id: "sangdang-yeongun", keywordName: "영운동", formalName: "청주시 상당구 영운동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 38, isActive: true },
  { id: "sangdang-geumcheon", keywordName: "금천동", formalName: "청주시 상당구 금천동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 39, isActive: true },
  { id: "sangdang-yongdam", keywordName: "용담동", formalName: "청주시 상당구 용담동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 40, isActive: true },
  { id: "sangdang-myeongam", keywordName: "명암동", formalName: "청주시 상당구 명암동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 41, isActive: true },
  { id: "sangdang-sanseong", keywordName: "상당산성동", formalName: "청주시 상당구 산성동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 42, isActive: true },
  { id: "sangdang-yongam", keywordName: "용암동", formalName: "청주시 상당구 용암동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 43, isActive: true },
  { id: "sangdang-yongjeong", keywordName: "용정동", formalName: "청주시 상당구 용정동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 44, isActive: true },
  { id: "sangdang-bangseo", keywordName: "방서동", formalName: "청주시 상당구 방서동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 45, isActive: true },
  { id: "sangdang-pyeongchon", keywordName: "평촌동", formalName: "청주시 상당구 평촌동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 46, isActive: true },
  { id: "sangdang-jibuk", keywordName: "지북동", formalName: "청주시 상당구 지북동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 47, isActive: true },
  { id: "sangdang-undong", keywordName: "운동동", formalName: "청주시 상당구 운동동", regionType: "dong", parentId: "cheongju-sangdang", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 48, isActive: true },

  // ==========================================
  // [4] 서원구 하위 읍·면·법정동
  // ==========================================
  { id: "seowon-nami", keywordName: "남이면", formalName: "청주시 서원구 남이면", regionType: "myeon", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 49, isActive: true },
  { id: "seowon-hyeondo", keywordName: "현도면", formalName: "청주시 서원구 현도면", regionType: "myeon", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 50, isActive: true },

  { id: "seowon-sajik", keywordName: "사직동", formalName: "청주시 서원구 사직동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 51, isActive: true },
  { id: "seowon-sachang", keywordName: "사창동", formalName: "청주시 서원구 사창동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 52, isActive: true },
  { id: "seowon-mochung", keywordName: "모충동", formalName: "청주시 서원구 모충동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 53, isActive: true },
  { id: "seowon-sugok-unique", keywordName: "서원수곡동", formalName: "청주시 서원구 수곡동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 54, isActive: true },
  { id: "seowon-bunpyeong", keywordName: "분평동", formalName: "청주시 서원구 분평동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 55, isActive: true },
  { id: "seowon-sannam", keywordName: "산남동", formalName: "청주시 서원구 산남동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 56, isActive: true },
  { id: "seowon-seonghwa", keywordName: "성화동", formalName: "청주시 서원구 성화동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 57, isActive: true },
  { id: "seowon-gaesin", keywordName: "개신동", formalName: "청주시 서원구 개신동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 58, isActive: true },
  { id: "seowon-jungnim", keywordName: "죽림동", formalName: "청주시 서원구 죽림동", regionType: "dong", parentId: "cheongju-seowon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 59, isActive: true },

  // ==========================================
  // [5] 흥덕구 하위 읍·면·법정동
  // ==========================================
  { id: "heungdeok-osong", keywordName: "오송읍", formalName: "청주시 흥덕구 오송읍", regionType: "eup", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 60, isActive: true },
  { id: "heungdeok-gangnae", keywordName: "강내면", formalName: "청주시 흥덕구 강내면", regionType: "myeon", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 61, isActive: true },
  { id: "heungdeok-oksan", keywordName: "옥산면", formalName: "청주시 흥덕구 옥산면", regionType: "myeon", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 62, isActive: true },

  { id: "heungdeok-uncheon", keywordName: "운천동", formalName: "청주시 흥덕구 운천동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 63, isActive: true },
  { id: "heungdeok-sinbong", keywordName: "신봉동", formalName: "청주시 흥덕구 신봉동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 64, isActive: true },
  { id: "heungdeok-bokdae", keywordName: "복대동", formalName: "청주시 흥덕구 복대동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 65, isActive: true },
  { id: "heungdeok-gagyeong", keywordName: "가경동", formalName: "청주시 흥덕구 가경동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 66, isActive: true },
  { id: "heungdeok-bongmyeong", keywordName: "봉명동", formalName: "청주시 흥덕구 봉명동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 67, isActive: true },
  { id: "heungdeok-songjeong", keywordName: "흥덕송정동", formalName: "청주시 흥덕구 송정동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 68, isActive: true },
  { id: "heungdeok-gangseo", keywordName: "강서동", formalName: "청주시 흥덕구 강서동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 69, isActive: true },
  { id: "heungdeok-seokso", keywordName: "석소동", formalName: "청주시 흥덕구 석소동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 70, isActive: true },
  { id: "heungdeok-oebuk", keywordName: "외북동", formalName: "청주시 흥덕구 외북동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 71, isActive: true },
  { id: "heungdeok-naegok", keywordName: "내곡동", formalName: "청주시 흥덕구 내곡동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 72, isActive: true },
  { id: "heungdeok-sangsin", keywordName: "상신동", formalName: "청주시 흥덕구 상신동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 73, isActive: true },
  { id: "heungdeok-wonpyeong", keywordName: "원평동", formalName: "청주시 흥덕구 원평동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 74, isActive: true },
  { id: "heungdeok-munam", keywordName: "문암동", formalName: "청주시 흥덕구 문암동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 75, isActive: true },
  { id: "heungdeok-danong", keywordName: "다농동", formalName: "청주시 흥덕구 다농동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 76, isActive: true },
  { id: "heungdeok-sinseong", keywordName: "신성동", formalName: "청주시 흥덕구 신성동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 77, isActive: true },
  { id: "heungdeok-seochon", keywordName: "서촌동", formalName: "청주시 흥덕구 서촌동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 78, isActive: true },
  { id: "heungdeok-jidong", keywordName: "지동동", formalName: "청주시 흥덕구 지동동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 79, isActive: true },
  { id: "heungdeok-hyangjeong", keywordName: "향정동", formalName: "청주시 흥덕구 향정동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 80, isActive: true },
  { id: "heungdeok-sindae", keywordName: "신대동", formalName: "청주시 흥덕구 신대동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 81, isActive: true },
  { id: "heungdeok-pyeong-dong", keywordName: "평동", formalName: "청주시 흥덕구 평동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 82, isActive: true },
  { id: "heungdeok-sinjen", keywordName: "신전동", formalName: "청주시 흥덕구 신전동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 83, isActive: true },
  { id: "heungdeok-hyuam", keywordName: "휴암동", formalName: "청주시 흥덕구 휴암동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 84, isActive: true },
  { id: "heungdeok-suui", keywordName: "수의동", formalName: "청주시 흥덕구 수의동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 85, isActive: true },
  { id: "heungdeok-dongmak", keywordName: "동막동", formalName: "청주시 흥덕구 동막동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 86, isActive: true },
  { id: "heungdeok-sugok-unique", keywordName: "흥덕수곡동", formalName: "청주시 흥덕구 수곡동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 87, isActive: true },
  { id: "heungdeok-biha", keywordName: "비하동", formalName: "청주시 흥덕구 비하동", regionType: "dong", parentId: "cheongju-heungdeok", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 88, isActive: true },

  // ==========================================
  // [6] 청원구 하위 읍·면·법정동
  // ==========================================
  { id: "cheongwon-naesu", keywordName: "내수읍", formalName: "청주시 청원구 내수읍", regionType: "eup", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 89, isActive: true },
  { id: "cheongwon-ochang", keywordName: "오창읍", formalName: "청주시 청원구 오창읍", regionType: "eup", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 90, isActive: true },
  { id: "cheongwon-bugi", keywordName: "북이면", formalName: "청주시 청원구 북이면", regionType: "myeon", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 91, isActive: true },

  { id: "cheongwon-uam", keywordName: "우암동", formalName: "청주시 청원구 우암동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 92, isActive: true },
  { id: "cheongwon-naedeok", keywordName: "내덕동", formalName: "청주시 청원구 내덕동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 93, isActive: true },
  { id: "cheongwon-yullyang", keywordName: "율량동", formalName: "청주시 청원구 율량동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 94, isActive: true },
  { id: "cheongwon-sacheon", keywordName: "사천동", formalName: "청주시 청원구 사천동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 95, isActive: true },
  { id: "cheongwon-juseong", keywordName: "주성동", formalName: "청주시 청원구 주성동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 96, isActive: true },
  { id: "cheongwon-jujung", keywordName: "주중동", formalName: "청주시 청원구 주중동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 97, isActive: true },
  { id: "cheongwon-oenam", keywordName: "외남동", formalName: "청주시 청원구 외남동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 98, isActive: true },
  { id: "cheongwon-oepyeong", keywordName: "외평동", formalName: "청주시 청원구 외평동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 99, isActive: true },
  { id: "cheongwon-oeha", keywordName: "외하동", formalName: "청주시 청원구 외하동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 100, isActive: true },
  { id: "cheongwon-sinjin", keywordName: "신진동", formalName: "청주시 청원구 신진동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 101, isActive: true },
  { id: "cheongwon-jeongsang", keywordName: "정상동", formalName: "청주시 청원구 정상동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 102, isActive: true },
  { id: "cheongwon-jeongha", keywordName: "정하동", formalName: "청주시 청원구 정하동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 103, isActive: true },
  { id: "cheongwon-jeongbuk", keywordName: "정북동", formalName: "청주시 청원구 정북동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 104, isActive: true },
  { id: "cheongwon-odong", keywordName: "오동동", formalName: "청주시 청원구 오동동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 105, isActive: true },
  { id: "cheongwon-ogeunjang", keywordName: "오근장동", formalName: "청주시 청원구 오근장동", regionType: "dong", parentId: "cheongju-cheongwon", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 106, isActive: true },

  // ==========================================
  // [7] 충주시 하위 읍·면·법정동
  // ==========================================
  { id: "chungju-judeok", keywordName: "주덕읍", formalName: "충주시 주덕읍", regionType: "eup", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 107, isActive: true },
  { id: "chungju-shinni", keywordName: "신니면", formalName: "충주시 신니면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 108, isActive: true },
  { id: "chungju-noeun", keywordName: "노은면", formalName: "충주시 노은면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 109, isActive: true },
  { id: "chungju-angseong", keywordName: "앙성면", formalName: "충주시 앙성면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 110, isActive: true },
  { id: "chungju-geumga", keywordName: "금가면", formalName: "충주시 금가면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 111, isActive: true },
  { id: "chungju-dongryang", keywordName: "동량면", formalName: "충주시 동량면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 112, isActive: true },
  { id: "chungju-sancheok", keywordName: "산척면", formalName: "충주시 산척면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 113, isActive: true },
  { id: "chungju-eomjeong", keywordName: "엄정면", formalName: "충주시 엄정면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 114, isActive: true },
  { id: "chungju-sotae", keywordName: "소태면", formalName: "충주시 소태면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 115, isActive: true },
  { id: "chungju-daesowon", keywordName: "대소원면", formalName: "충주시 대소원면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 116, isActive: true },
  { id: "chungju-salmi", keywordName: "살미면", formalName: "충주시 살미면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 117, isActive: true },
  { id: "chungju-suanbo", keywordName: "수안보면", formalName: "충주시 수안보면", regionType: "myeon", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 118, isActive: true },

  { id: "chungju-seongnae", keywordName: "성내동", formalName: "충주시 성내동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 119, isActive: true },
  { id: "chungju-seongnam", keywordName: "충주성남동", formalName: "충주시 성남동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 120, isActive: true },
  { id: "chungju-seongseo", keywordName: "성서동", formalName: "충주시 성서동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 121, isActive: true },
  { id: "chungju-chungin", keywordName: "충인동", formalName: "충주시 충인동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 122, isActive: true },
  { id: "chungju-chungui", keywordName: "충의동", formalName: "충주시 충의동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 123, isActive: true },
  { id: "chungju-gyohyeon", keywordName: "교현동", formalName: "충주시 교현동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 124, isActive: true },
  { id: "chungju-yongsan", keywordName: "용산동", formalName: "충주시 용산동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 125, isActive: true },
  { id: "chungju-hoam", keywordName: "호암동", formalName: "충주시 호암동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 126, isActive: true },
  { id: "chungju-jik-dong", keywordName: "직동", formalName: "충주시 직동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 127, isActive: true },
  { id: "chungju-danwol", keywordName: "단월동", formalName: "충주시 단월동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 128, isActive: true },
  { id: "chungju-pung-dong", keywordName: "풍동", formalName: "충주시 풍동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 129, isActive: true },
  { id: "chungju-gaju", keywordName: "가주동", formalName: "충주시 가주동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 130, isActive: true },
  { id: "chungju-yonggwan", keywordName: "용관동", formalName: "충주시 용관동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 131, isActive: true },
  { id: "chungju-yongdu", keywordName: "용두동", formalName: "충주시 용두동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 132, isActive: true },
  { id: "chungju-dalcheon", keywordName: "달천동", formalName: "충주시 달천동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 133, isActive: true },
  { id: "chungju-bongbang", keywordName: "봉방동", formalName: "충주시 봉방동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 134, isActive: true },
  { id: "chungju-chilgeum", keywordName: "칠금동", formalName: "충주시 칠금동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 135, isActive: true },
  { id: "chungju-yeonsu", keywordName: "연수동", formalName: "충주시 연수동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 136, isActive: true },
  { id: "chungju-mokhaeng", keywordName: "목행동", formalName: "충주시 목행동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 137, isActive: true },
  { id: "chungju-yongtan", keywordName: "용탄동", formalName: "충주시 용탄동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 138, isActive: true },
  { id: "chungju-anlim", keywordName: "안림동", formalName: "충주시 안림동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 139, isActive: true },
  { id: "chungju-mokbeol", keywordName: "목벌동", formalName: "충주시 목벌동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 140, isActive: true },
  { id: "chungju-jongmin", keywordName: "종민동", formalName: "충주시 종민동", regionType: "dong", parentId: "chungju-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 141, isActive: true },

  // ==========================================
  // [8] 제천시 하위 읍·면·법정동
  // ==========================================
  { id: "jecheon-bongyang", keywordName: "봉양읍", formalName: "제천시 봉양읍", regionType: "eup", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 142, isActive: true },
  { id: "jecheon-geumseong", keywordName: "금성면", formalName: "제천시 금성면", regionType: "myeon", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 143, isActive: true },
  { id: "jecheon-cheongpung", keywordName: "청풍면", formalName: "제천시 청풍면", regionType: "myeon", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 144, isActive: true },
  { id: "jecheon-susan", keywordName: "수산면", formalName: "제천시 수산면", regionType: "myeon", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 145, isActive: true },
  { id: "jecheon-deoksan", keywordName: "덕산면", formalName: "제천시 덕산면", regionType: "myeon", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 146, isActive: true },
  { id: "jecheon-hansu", keywordName: "한수면", formalName: "제천시 한수면", regionType: "myeon", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 147, isActive: true },
  { id: "jecheon-songhak", keywordName: "송학면", formalName: "제천시 송학면", regionType: "myeon", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 148, isActive: true },
  { id: "jecheon-baegun", keywordName: "백운면", formalName: "제천시 백운면", regionType: "myeon", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 149, isActive: true },

  { id: "jecheon-jungangro1ga", keywordName: "중앙로1가", formalName: "제천시 중앙로1가", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 150, isActive: true },
  { id: "jecheon-jungangro2ga", keywordName: "중앙로2가", formalName: "제천시 중앙로2가", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 151, isActive: true },
  { id: "jecheon-myeong-dong", keywordName: "명동", formalName: "제천시 명동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 152, isActive: true },
  { id: "jecheon-uirim", keywordName: "의림동", formalName: "제천시 의림동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 153, isActive: true },
  { id: "jecheon-seobu", keywordName: "서부동", formalName: "제천시 서부동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 154, isActive: true },
  { id: "jecheon-donghyeon", keywordName: "동현동", formalName: "제천시 동현동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 155, isActive: true },
  { id: "jecheon-namcheon", keywordName: "남천동", formalName: "제천시 남천동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 156, isActive: true },
  { id: "jecheon-sinbaek", keywordName: "신백동", formalName: "제천시 신백동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 157, isActive: true },
  { id: "jecheon-gomyeong", keywordName: "고명동", formalName: "제천시 고명동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 158, isActive: true },
  { id: "jecheon-daeryang", keywordName: "대량동", formalName: "제천시 대량동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 159, isActive: true },
  { id: "jecheon-duhak", keywordName: "두학동", formalName: "제천시 두학동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 160, isActive: true },
  { id: "jecheon-jajak", keywordName: "자작동", formalName: "제천시 자작동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 161, isActive: true },
  { id: "jecheon-heukseok", keywordName: "흑석동", formalName: "제천시 흑석동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 162, isActive: true },
  { id: "jecheon-gangje", keywordName: "강제동", formalName: "제천시 강제동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 163, isActive: true },
  { id: "jecheon-myeongji", keywordName: "명지동", formalName: "제천시 명지동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 164, isActive: true },
  { id: "jecheon-sangok", keywordName: "산곡동", formalName: "제천시 산곡동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 165, isActive: true },
  { id: "jecheon-hwasan", keywordName: "화산동", formalName: "제천시 화산동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 166, isActive: true },
  { id: "jecheon-yeongcheon", keywordName: "영천동", formalName: "제천시 영천동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 167, isActive: true },
  { id: "jecheon-haso", keywordName: "하소동", formalName: "제천시 하소동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 168, isActive: true },
  { id: "jecheon-shin-dong", keywordName: "신동", formalName: "제천시 신동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 169, isActive: true },
  { id: "jecheon-cheonnam", keywordName: "천남동", formalName: "제천시 천남동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 170, isActive: true },
  { id: "jecheon-wangam", keywordName: "왕암동", formalName: "제천시 왕암동", regionType: "dong", parentId: "jecheon-si", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 171, isActive: true },

  // ==========================================
  // [9] 보은군 하위 읍·면
  // ==========================================
  { id: "boeun-boeun", keywordName: "보은읍", formalName: "보은군 보은읍", regionType: "eup", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 172, isActive: true },
  { id: "boeun-naebuk", keywordName: "내북면", formalName: "보은군 내북면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 173, isActive: true },
  { id: "boeun-songnisan", keywordName: "속리산면", formalName: "보은군 속리산면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 174, isActive: true },
  { id: "boeun-jangan", keywordName: "장안면", formalName: "보은군 장안면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 175, isActive: true },
  { id: "boeun-maro", keywordName: "마로면", formalName: "보은군 마로면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 176, isActive: true },
  { id: "boeun-tanbu", keywordName: "탄부면", formalName: "보은군 탄부면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 177, isActive: true },
  { id: "boeun-samseung", keywordName: "삼승면", formalName: "보은군 삼승면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 178, isActive: true },
  { id: "boeun-suhan", keywordName: "수한면", formalName: "보은군 수한면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 179, isActive: true },
  { id: "boeun-hoenam", keywordName: "회남면", formalName: "보은군 회남면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 180, isActive: true },
  { id: "boeun-hoein", keywordName: "회인면", formalName: "보은군 회인면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 181, isActive: true },
  { id: "boeun-sanoe", keywordName: "산외면", formalName: "보은군 산외면", regionType: "myeon", parentId: "boeun-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 182, isActive: true },

  // ==========================================
  // [10] 옥천군 하위 읍·면
  // ==========================================
  { id: "okcheon-okcheon", keywordName: "옥천읍", formalName: "옥천군 옥천읍", regionType: "eup", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 183, isActive: true },
  { id: "okcheon-dongi", keywordName: "동이면", formalName: "옥천군 동이면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 184, isActive: true },
  { id: "okcheon-annam", keywordName: "안남면", formalName: "옥천군 안남면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 185, isActive: true },
  { id: "okcheon-annae", keywordName: "안내면", formalName: "옥천군 안내면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 186, isActive: true },
  { id: "okcheon-cheongseong", keywordName: "청성면", formalName: "옥천군 청성면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 187, isActive: true },
  { id: "okcheon-cheongsan", keywordName: "청산면", formalName: "옥천군 청산면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 188, isActive: true },
  { id: "okcheon-iwon", keywordName: "이원면", formalName: "옥천군 이원면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 189, isActive: true },
  { id: "okcheon-gunseo", keywordName: "군서면", formalName: "옥천군 군서면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 190, isActive: true },
  { id: "okcheon-gunbuk", keywordName: "군북면", formalName: "옥천군 군북면", regionType: "myeon", parentId: "okcheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 191, isActive: true },

  // ==========================================
  // [11] 영동군 하위 읍·면
  // ==========================================
  { id: "yeongdong-yeongdong", keywordName: "영동읍", formalName: "영동군 영동읍", regionType: "eup", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 192, isActive: true },
  { id: "yeongdong-용산", keywordName: "용산면", formalName: "영동군 용산면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 193, isActive: true },
  { id: "yeongdong-hwanggan", keywordName: "황간면", formalName: "영동군 황간면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 194, isActive: true },
  { id: "yeongdong-chupungryeong", keywordName: "추풍령면", formalName: "영동군 추풍령면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 195, isActive: true },
  { id: "yeongdong-sangchon", keywordName: "상촌면", formalName: "영동군 상촌면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 196, isActive: true },
  { id: "yeongdong-yanggang", keywordName: "양강면", formalName: "영동군 양강면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 197, isActive: true },
  { id: "yeongdong-용화", keywordName: "용화면", formalName: "영동군 용화면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 198, isActive: true },
  { id: "yeongdong-haksan", keywordName: "학산면", formalName: "영동군 학산면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 199, isActive: true },
  { id: "yeongdong-yangsan", keywordName: "양산면", formalName: "영동군 양산면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 200, isActive: true },
  { id: "yeongdong-simcheon", keywordName: "심천면", formalName: "영동군 심천면", regionType: "myeon", parentId: "yeongdong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 201, isActive: true },

  // ==========================================
  // [12] 증평군 하위 읍·면
  // ==========================================
  { id: "jeungpyeong-jeungpyeong", keywordName: "증평읍", formalName: "증평군 증평읍", regionType: "eup", parentId: "jeungpyeong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 202, isActive: true },
  { id: "jeungpyeong-doan", keywordName: "도안면", formalName: "증평군 도안면", regionType: "myeon", parentId: "jeungpyeong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 203, isActive: true },

  // ==========================================
  // [13] 진천군 하위 읍·면
  // ==========================================
  { id: "jincheon-jincheon", keywordName: "진천읍", formalName: "진천군 진천읍", regionType: "eup", parentId: "jincheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 204, isActive: true },
  { id: "jincheon-deoksan", keywordName: "덕산읍", formalName: "진천군 덕산읍", regionType: "eup", parentId: "jincheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 205, isActive: true },
  { id: "jincheon-chopyeong", keywordName: "초평면", formalName: "진천군 초평면", regionType: "myeon", parentId: "jincheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 206, isActive: true },
  { id: "jincheon-munbaek", keywordName: "문백면", formalName: "진천군 문백면", regionType: "myeon", parentId: "jincheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 207, isActive: true },
  { id: "jincheon-baegok", keywordName: "백곡면", formalName: "진천군 백곡면", regionType: "myeon", parentId: "jincheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 208, isActive: true },
  { id: "jincheon-iwol", keywordName: "이월면", formalName: "진천군 이월면", regionType: "myeon", parentId: "jincheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 209, isActive: true },
  { id: "jincheon-gwanghyewon", keywordName: "광혜원면", formalName: "진천군 광혜원면", regionType: "myeon", parentId: "jincheon-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 210, isActive: true },

  // ==========================================
  // [14] 괴산군 하위 읍·면
  // ==========================================
  { id: "goesan-goesan", keywordName: "괴산읍", formalName: "괴산군 괴산읍", regionType: "eup", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 211, isActive: true },
  { id: "goesan-gammul", keywordName: "감물면", formalName: "괴산군 감물면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 212, isActive: true },
  { id: "goesan-jangyeon", keywordName: "장연면", formalName: "괴산군 장연면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 213, isActive: true },
  { id: "goesan-yeonpung", keywordName: "연풍면", formalName: "괴산군 연풍면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 214, isActive: true },
  { id: "goesan-chilseong", keywordName: "칠성면", formalName: "괴산군 칠성면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 215, isActive: true },
  { id: "goesan-mungwang", keywordName: "문광면", formalName: "괴산군 문광면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 216, isActive: true },
  { id: "goesan-cheongcheon", keywordName: "청천면", formalName: "괴산군 청천면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 217, isActive: true },
  { id: "goesan-cheongan", keywordName: "청안면", formalName: "괴산군 청안면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 218, isActive: true },
  { id: "goesan-sari", keywordName: "사리면", formalName: "괴산군 사리면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 219, isActive: true },
  { id: "goesan-sosu", keywordName: "소수면", formalName: "괴산군 소수면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 220, isActive: true },
  { id: "goesan-buljeong", keywordName: "불정면", formalName: "괴산군 불정면", regionType: "myeon", parentId: "goesan-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 221, isActive: true },

  // ==========================================
  // [15] 음성군 하위 읍·면
  // ==========================================
  { id: "eumseong-eumseong", keywordName: "음성읍", formalName: "음성군 음성읍", regionType: "eup", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 222, isActive: true },
  { id: "eumseong-geumwang", keywordName: "금왕읍", formalName: "음성군 금왕읍", regionType: "eup", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 223, isActive: true },
  { id: "eumseong-soi", keywordName: "소이면", formalName: "음성군 소이면", regionType: "myeon", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 224, isActive: true },
  { id: "eumseong-wonnam", keywordName: "원남면", formalName: "음성군 원남면", regionType: "myeon", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 225, isActive: true },
  { id: "eumseong-maengdong", keywordName: "맹동면", formalName: "음성군 맹동면", regionType: "myeon", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 226, isActive: true },
  { id: "eumseong-daeso", keywordName: "대소면", formalName: "음성군 대소면", regionType: "myeon", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 227, isActive: true },
  { id: "eumseong-samseong", keywordName: "삼성면", formalName: "음성군 삼성면", regionType: "myeon", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 228, isActive: true },
  { id: "eumseong-saengeuk", keywordName: "생극면", formalName: "음성군 생극면", regionType: "myeon", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 229, isActive: true },
  { id: "eumseong-gamgok", keywordName: "감곡면", formalName: "음성군 감곡면", regionType: "myeon", parentId: "eumseong-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 230, isActive: true },

  // ==========================================
  // [16] 단양군 하위 읍·면
  // ==========================================
  { id: "danyang-danyang", keywordName: "단양읍", formalName: "단양군 단양읍", regionType: "eup", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 231, isActive: true },
  { id: "danyang-maepo", keywordName: "매포읍", formalName: "단양군 매포읍", regionType: "eup", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 232, isActive: true },
  { id: "danyang-danseong", keywordName: "단성면", formalName: "단양군 단성면", regionType: "myeon", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 233, isActive: true },
  { id: "danyang-daegang", keywordName: "대강면", formalName: "단양군 대강면", regionType: "myeon", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 234, isActive: true },
  { id: "danyang-gagog", keywordName: "가곡면", formalName: "단양군 가곡면", regionType: "myeon", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 235, isActive: true },
  { id: "danyang-yeongchun", keywordName: "영춘면", formalName: "단양군 영춘면", regionType: "myeon", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 236, isActive: true },
  { id: "danyang-eosangcheon", keywordName: "어상천면", formalName: "단양군 어상천면", regionType: "myeon", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 237, isActive: true },
  { id: "danyang-jeokseong", keywordName: "적성면", formalName: "단양군 적성면", regionType: "myeon", parentId: "danyang-gun", provinceGroup: "chungbuk", variantGroupId: null, sortOrder: 238, isActive: true },

  // ==========================================
  // [17] 대전광역시 최상위 시 및 구 키워드
  // ==========================================
  { id: "daejeon-si", keywordName: "대전시", formalName: "대전광역시", regionType: "city", parentId: null, provinceGroup: "daejeon", variantGroupId: "daejeon", sortOrder: 239, isActive: true },
  { id: "daejeon", keywordName: "대전", formalName: "대전광역시", regionType: "city", parentId: null, provinceGroup: "daejeon", variantGroupId: "daejeon", sortOrder: 240, isActive: true },
  
  { id: "daejeon-donggu", keywordName: "동구", formalName: "대전광역시 동구", regionType: "district", parentId: "daejeon-si", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 241, isActive: true },
  { id: "daejeon-junggu", keywordName: "중구", formalName: "대전광역시 중구", regionType: "district", parentId: "daejeon-si", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 242, isActive: true },
  { id: "daejeon-seogu", keywordName: "서구", formalName: "대전광역시 서구", regionType: "district", parentId: "daejeon-si", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 243, isActive: true },
  { id: "daejeon-yuseonggu", keywordName: "유성구", formalName: "대전광역시 유성구", regionType: "district", parentId: "daejeon-si", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 244, isActive: true },
  { id: "daejeon-daedeokgu", keywordName: "대덕구", formalName: "대전광역시 대덕구", regionType: "district", parentId: "daejeon-si", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 245, isActive: true },

  // ==========================================
  // [18] 대전 동구 하위 법정동
  // ==========================================
  { id: "donggu-won", keywordName: "원동", formalName: "대전광역시 동구 원동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 246, isActive: true },
  { id: "donggu-in", keywordName: "인동", formalName: "대전광역시 동구 인동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 247, isActive: true },
  { id: "donggu-hyo", keywordName: "효동", formalName: "대전광역시 동구 효동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 248, isActive: true },
  { id: "donggu-cheon", keywordName: "천동", formalName: "대전광역시 동구 천동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 249, isActive: true },
  { id: "donggu-gao", keywordName: "가오동", formalName: "대전광역시 동구 가오동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 250, isActive: true },
  { id: "donggu-sinheung", keywordName: "신흥동", formalName: "대전광역시 동구 신흥동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 251, isActive: true },
  { id: "donggu-panam", keywordName: "판암동", formalName: "대전광역시 동구 판암동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 252, isActive: true },
  { id: "donggu-samjeong-unique", keywordName: "동구삼정동", formalName: "대전광역시 동구 삼정동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 253, isActive: true },
  { id: "donggu-yongun", keywordName: "용운동", formalName: "대전광역시 동구 용운동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 254, isActive: true },
  { id: "donggu-dae-unique", keywordName: "동구대동", formalName: "대전광역시 동구 대동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 255, isActive: true },
  { id: "donggu-jayang", keywordName: "자양동", formalName: "대전광역시 동구 자양동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 256, isActive: true },
  { id: "donggu-sinan", keywordName: "신안동", formalName: "대전광역시 동구 신안동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 257, isActive: true },
  { id: "donggu-soje", keywordName: "소제동", formalName: "대전광역시 동구 소제동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 258, isActive: true },
  { id: "donggu-gayang", keywordName: "가양동", formalName: "대전광역시 동구 가양동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 259, isActive: true },
  { id: "donggu-hongdo", keywordName: "홍도동", formalName: "대전광역시 동구 홍도동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 260, isActive: true },
  { id: "donggu-samsung", keywordName: "삼성동", formalName: "대전광역시 동구 삼성동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 261, isActive: true },
  { id: "donggu-jeong", keywordName: "정동", formalName: "대전광역시 동구 정동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 262, isActive: true },
  { id: "donggu-jung", keywordName: "동구중동", formalName: "대전광역시 동구 중동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 263, isActive: true },
  { id: "donggu-seongnam", keywordName: "동구성남동", formalName: "대전광역시 동구 성남동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 264, isActive: true },
  { id: "donggu-yongjeon", keywordName: "용전동", formalName: "대전광역시 동구 용전동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 265, isActive: true },
  { id: "donggu-bunjeo", keywordName: "분저동", formalName: "대전광역시 동구 분저동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 266, isActive: true },
  { id: "donggu-sinha", keywordName: "신하동", formalName: "대전광역시 동구 신하동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 267, isActive: true },
  { id: "donggu-sinsang", keywordName: "신상동", formalName: "대전광역시 동구 신상동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 268, isActive: true },
  { id: "donggu-biryong", keywordName: "비룡동", formalName: "대전광역시 동구 비룡동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 269, isActive: true },
  { id: "donggu-jusan", keywordName: "주산동", formalName: "대전광역시 동구 주산동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 270, isActive: true },
  { id: "donggu-yonggye-unique", keywordName: "동구용계동", formalName: "대전광역시 동구 용계동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 271, isActive: true },
  { id: "donggu-masan", keywordName: "마산동", formalName: "대전광역시 동구 마산동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 272, isActive: true },
  { id: "donggu-secheon", keywordName: "세천동", formalName: "대전광역시 동구 세천동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 273, isActive: true },
  { id: "donggu-saseong", keywordName: "사성동", formalName: "대전광역시 동구 사성동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 274, isActive: true },
  { id: "donggu-naetap", keywordName: "내탑동", formalName: "대전광역시 동구 내탑동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 275, isActive: true },
  { id: "donggu-o-dong-unique", keywordName: "동구오동", formalName: "대전광역시 동구 오동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 276, isActive: true },
  { id: "donggu-juchon", keywordName: "주촌동", formalName: "대전광역시 동구 주촌동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 277, isActive: true },
  { id: "donggu-sinchon", keywordName: "신촌동", formalName: "대전광역시 동구 신촌동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 278, isActive: true },
  { id: "donggu-haso-unique", keywordName: "동구하소동", formalName: "대전광역시 동구 하소동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 279, isActive: true },
  { id: "donggu-sangso", keywordName: "상소동", formalName: "대전광역시 동구 상소동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 280, isActive: true },
  { id: "donggu-namgye", keywordName: "남계동", formalName: "대전광역시 동구 남계동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 281, isActive: true },
  { id: "donggu-isa", keywordName: "이사동", formalName: "대전광역시 동구 이사동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 282, isActive: true },
  { id: "donggu-daeseong-unique", keywordName: "동구대성동", formalName: "대전광역시 동구 대성동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 283, isActive: true },
  { id: "donggu-장척", keywordName: "장척동", formalName: "대전광역시 동구 장척동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 284, isActive: true },
  { id: "donggu-soho", keywordName: "소호동", formalName: "대전광역시 동구 소호동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 285, isActive: true },
  { id: "donggu-gudo", keywordName: "구도동", formalName: "대전광역시 동구 구도동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 286, isActive: true },
  { id: "donggu-samgoe", keywordName: "삼괴동", formalName: "대전광역시 동구 삼괴동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 287, isActive: true },
  { id: "donggu-sangdo", keywordName: "상도동", formalName: "대전광역시 동구 상도동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 288, isActive: true },
  { id: "donggu-hado", keywordName: "하도동", formalName: "대전광역시 동구 하도동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 289, isActive: true },
  { id: "donggu-nangwol", keywordName: "낭월동", formalName: "대전광역시 동구 낭월동", regionType: "dong", parentId: "daejeon-donggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 290, isActive: true },

  // ==========================================
  // [19] 대전 중구 하위 법정동
  // ==========================================
  { id: "junggu-eunhaeng", keywordName: "은행동", formalName: "대전광역시 중구 은행동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 291, isActive: true },
  { id: "junggu-seonhwa", keywordName: "선화동", formalName: "대전광역시 중구 선화동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 292, isActive: true },
  { id: "junggu-mok", keywordName: "목동", formalName: "대전광역시 중구 목동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 293, isActive: true },
  { id: "junggu-jungchon", keywordName: "중촌동", formalName: "대전광역시 중구 중촌동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 294, isActive: true },
  { id: "junggu-daeheung", keywordName: "대흥동", formalName: "대전광역시 중구 대흥동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 295, isActive: true },
  { id: "junggu-munchang", keywordName: "문창동", formalName: "대전광역시 중구 문창동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 296, isActive: true },
  { id: "junggu-seokgyo", keywordName: "석교동", formalName: "대전광역시 중구 석교동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 297, isActive: true },
  { id: "junggu-ho", keywordName: "호동", formalName: "대전광역시 중구 호동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 298, isActive: true },
  { id: "junggu-moam", keywordName: "모암동", formalName: "대전광역시 중구 모암동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 299, isActive: true },
  { id: "junggu-sajeong", keywordName: "사정동", formalName: "대전광역시 중구 사정동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 300, isActive: true },
  { id: "junggu-anyeong", keywordName: "안영동", formalName: "대전광역시 중구 안영동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 301, isActive: true },
  { id: "junggu-chimsan", keywordName: "침산동", formalName: "대전광역시 중구 침산동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 302, isActive: true },
  { id: "junggu-mokdal", keywordName: "목달동", formalName: "대전광역시 중구 목달동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 303, isActive: true },
  { id: "junggu-musu", keywordName: "무수동", formalName: "대전광역시 중구 무수동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 304, isActive: true },
  { id: "junggu-guwan", keywordName: "구완동", formalName: "대전광역시 중구 구완동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 305, isActive: true },
  { id: "junggu-eonam", keywordName: "어남동", formalName: "대전광역시 중구 어남동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 306, isActive: true },
  { id: "junggu-geum", keywordName: "금동", formalName: "대전광역시 중구 금동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 307, isActive: true },
  { id: "junggu-daesa", keywordName: "대사동", formalName: "대전광역시 중구 대사동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 308, isActive: true },
  { id: "junggu-busa", keywordName: "부사동", formalName: "대전광역시 중구 부사동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 309, isActive: true },
  { id: "junggu-yongdu-unique", keywordName: "중구용두동", formalName: "대전광역시 중구 용두동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 310, isActive: true },
  { id: "junggu-oryu", keywordName: "오류동", formalName: "대전광역시 중구 오류동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 311, isActive: true },
  { id: "junggu-taepyeong", keywordName: "태평동", formalName: "대전광역시 중구 태평동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 312, isActive: true },
  { id: "junggu-yucheon", keywordName: "유천동", formalName: "대전광역시 중구 유천동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 313, isActive: true },
  { id: "junggu-sanseong", keywordName: "중구산성동", formalName: "대전광역시 중구 산성동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 314, isActive: true },
  { id: "junggu-munhwa-unique", keywordName: "중구문화동", formalName: "대전광역시 중구 문화동", regionType: "dong", parentId: "daejeon-junggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 3141, isActive: true },

  // ==========================================
  // [20] 대전 서구 하위 법정동
  // ==========================================
  { id: "seogu-bang-unique", keywordName: "서구방동", formalName: "대전광역시 서구 방동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 315, isActive: true },
  { id: "seogu-bonggok", keywordName: "봉곡동", formalName: "대전광역시 서구 봉곡동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 316, isActive: true },
  { id: "seogu-umyeong", keywordName: "우명동", formalName: "대전광역시 서구 우명동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 317, isActive: true },
  { id: "seogu-wonjeong", keywordName: "원정동", formalName: "대전광역시 서구 원정동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 318, isActive: true },
  { id: "seogu-yongchon", keywordName: "용촌동", formalName: "대전광역시 서구 용촌동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 319, isActive: true },
  { id: "seogu-maeno", keywordName: "매노동", formalName: "대전광역시 서구 매노동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 320, isActive: true },
  { id: "seogu-sanjik", keywordName: "산직동", formalName: "대전광역시 서구 산직동", regionType: "dong", parentId: "seogu-bonggok", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 321, isActive: true },
  { id: "seogu-jangan", keywordName: "장안동", formalName: "대전광역시 서구 장안동", regionType: "dong", parentId: "seogu-bonggok", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 322, isActive: true },
  { id: "seogu-pyeongchon-unique", keywordName: "서구평촌동", formalName: "대전광역시 서구 평촌동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 323, isActive: true },
  { id: "seogu-gasuwon", keywordName: "가수원동", formalName: "대전광역시 서구 가수원동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 324, isActive: true },
  { id: "seogu-doan", keywordName: "도안동", formalName: "대전광역시 서구 도안동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 325, isActive: true },
  { id: "seogu-gwanjeo", keywordName: "관저동", formalName: "대전광역시 서구 관저동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 326, isActive: true },
  { id: "seogu-doma", keywordName: "도마동", formalName: "대전광역시 서구 도마동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 327, isActive: true },
  { id: "seogu-jeonglim", keywordName: "정림동", formalName: "대전광역시 서구 정림동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 328, isActive: true },
  { id: "seogu-boksu", keywordName: "복수동", formalName: "대전광역시 서구 복수동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 329, isActive: true },
  { id: "seogu-byeon", keywordName: "변동", formalName: "대전광역시 서구 변동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 330, isActive: true },
  { id: "seogu-gajang", keywordName: "가장동", formalName: "대전광역시 서구 가장동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 331, isActive: true },
  { id: "seogu-nae-dong", keywordName: "내동", formalName: "대전광역시 서구 내동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 332, isActive: true },
  { id: "seogu-goejeong", keywordName: "괴정동", formalName: "대전광역시 서구 괴정동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 333, isActive: true },
  { id: "seogu-tanbang", keywordName: "탄방동", formalName: "대전광역시 서구 탄방동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 334, isActive: true },
  { id: "seogu-dunsan", keywordName: "둔산동", formalName: "대전광역시 서구 둔산동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 335, isActive: true },
  { id: "seogu-galma", keywordName: "갈마동", formalName: "대전광역시 서구 갈마동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 336, isActive: true },
  { id: "seogu-wolpyeong", keywordName: "월평동", formalName: "대전광역시 서구 월평동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 337, isActive: true },
  { id: "seogu-mannyeon", keywordName: "만년동", formalName: "대전광역시 서구 만년동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 338, isActive: true },
  { id: "seogu-o-dong-unique", keywordName: "서구오동", formalName: "대전광역시 서구 오동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 339, isActive: true },
  { id: "seogu-yongdu-unique", keywordName: "서구용두동", formalName: "대전광역시 서구 용두동", regionType: "dong", parentId: "daejeon-seogu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 340, isActive: true },

  // ==========================================
  // [21] 대전 유성구 하위 법정동
  // ==========================================
  { id: "yuseong-wonnae", keywordName: "원내동", formalName: "대전광역시 유성구 원내동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 341, isActive: true },
  { id: "yuseong-bang-unique", keywordName: "유성방동", formalName: "대전광역시 유성구 방동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 342, isActive: true },
  { id: "yuseong-daejeong", keywordName: "대정동", formalName: "대전광역시 유성구 대정동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 343, isActive: true },
  { id: "yuseong-yonggye-unique", keywordName: "유성용계동", formalName: "대전광역시 유성구 용계동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 344, isActive: true },
  { id: "yuseong-hakhwa", keywordName: "학하동", formalName: "대전광역시 유성구 학하동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 345, isActive: true },
  { id: "yuseong-gyesan", keywordName: "계산동", formalName: "대전광역시 유성구 계산동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 346, isActive: true },
  { id: "yuseong-deokmyeong", keywordName: "덕명동", formalName: "대전광역시 유성구 덕명동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 347, isActive: true },
  { id: "yuseong-hanbat", keywordName: "한밭동", formalName: "대전광역시 유성구 한밭동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 348, isActive: true },
  { id: "yuseong-seongbuk", keywordName: "성북동", formalName: "대전광역시 유성구 성북동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 349, isActive: true },
  { id: "yuseong-se-dong", keywordName: "세동", formalName: "대전광역시 유성구 세동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 350, isActive: true },
  { id: "yuseong-songjeong", keywordName: "유성송정동", formalName: "대전광역시 유성구 송정동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 351, isActive: true },
  { id: "yuseong-juk", keywordName: "죽동", formalName: "대전광역시 유성구 죽동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 352, isActive: true },
  { id: "yuseong-gung", keywordName: "궁동", formalName: "대전광역시 유성구 궁동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 353, isActive: true },
  { id: "yuseong-eoun", keywordName: "어은동", formalName: "대전광역시 유성구 어은동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 354, isActive: true },
  { id: "yuseong-guseong", keywordName: "구성동", formalName: "대전광역시 유성구 구성동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 355, isActive: true },
  { id: "yuseong-noeun", keywordName: "노은동", formalName: "대전광역시 유성구 노은동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 356, isActive: true },
  { id: "yuseong-jijok", keywordName: "지족동", formalName: "대전광역시 유성구 지족동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 357, isActive: true },
  { id: "yuseong-banseok", keywordName: "반석동", formalName: "대전광역시 유성구 반석동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 358, isActive: true },
  { id: "yuseong-oesam", keywordName: "외삼동", formalName: "대전광역시 유성구 외삼동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 359, isActive: true },
  { id: "yuseong-sunam", keywordName: "수남동", formalName: "대전광역시 유성구 수남동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 360, isActive: true },
  { id: "yuseong-sinbong", keywordName: "신봉동", formalName: "대전광역시 유성구 신봉동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 361, isActive: true },
  { id: "yuseong-ansan", keywordName: "안산동", formalName: "대전광역시 유성구 안산동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 362, isActive: true },
  { id: "yuseong-jangdae", keywordName: "장대동", formalName: "대전광역시 유성구 장대동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 363, isActive: true },
  { id: "yuseong-bokyong", keywordName: "복용동", formalName: "대전광역시 유성구 복용동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 364, isActive: true },
  { id: "yuseong-sinseong-unique", keywordName: "유성신성동", formalName: "대전광역시 유성구 신성동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 365, isActive: true },
  { id: "yuseong-gajeong", keywordName: "가정동", formalName: "대전광역시 유성구 가정동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 366, isActive: true },
  { id: "yuseong-doryong", keywordName: "도룡동", formalName: "대전광역시 유성구 도룡동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 367, isActive: true },
  { id: "yuseong-jang-dong", keywordName: "장동", formalName: "대전광역시 유성구 장동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 368, isActive: true },
  { id: "yuseong-banghyeon", keywordName: "방현동", formalName: "대전광역시 유성구 방현동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 369, isActive: true },
  { id: "yuseong-hwaam", keywordName: "화암동", formalName: "대전광역시 유성구 화암동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 370, isActive: true },
  { id: "yuseong-deokjin", keywordName: "덕진동", formalName: "대전광역시 유성구 덕진동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 371, isActive: true },
  { id: "yuseong-hagi", keywordName: "하기동", formalName: "대전광역시 유성구 하기동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 372, isActive: true },
  { id: "yuseong-chumok", keywordName: "추목동", formalName: "대전광역시 유성구 추목동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 373, isActive: true },
  { id: "yuseong-jaun", keywordName: "자운동", formalName: "대전광역시 유성구 자운동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 374, isActive: true },
  { id: "yuseong-yongsan-unique", keywordName: "유성용산동", formalName: "대전광역시 유성구 용산동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 375, isActive: true },
  { id: "yuseong-taplip", keywordName: "탑립동", formalName: "대전광역시 유성구 탑립동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 376, isActive: true },
  { id: "yuseong-gwanpyeong", keywordName: "관평동", formalName: "대전광역시 유성구 관평동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 377, isActive: true },
  { id: "yuseong-songgang", keywordName: "송강동", formalName: "대전광역시 유성구 송강동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 378, isActive: true },
  { id: "yuseong-geumgo", keywordName: "금고동", formalName: "대전광역시 유성구 금고동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 379, isActive: true },
  { id: "yuseong-dae-unique", keywordName: "유성대동", formalName: "대전광역시 유성구 대동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 380, isActive: true },
  { id: "yuseong-bongsan", keywordName: "봉산동", formalName: "대전광역시 유성구 봉산동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 381, isActive: true },
  { id: "yuseong-guryong", keywordName: "구룡동", formalName: "대전광역시 유성구 구룡동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 382, isActive: true },
  { id: "yuseong-sin-dong", keywordName: "신동", formalName: "대전광역시 유성구 신동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 383, isActive: true },
  { id: "yuseong-dungok", keywordName: "둔곡동", formalName: "대전광역시 유성구 둔곡동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 384, isActive: true },
  { id: "yuseong-wonchon", keywordName: "원촌동", formalName: "대전광역시 유성구 원촌동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 385, isActive: true },
  { id: "yuseong-munji", keywordName: "문지동", formalName: "대전광역시 유성구 문지동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 386, isActive: true },
  { id: "yuseong-jeonmin", keywordName: "전민동", formalName: "대전광역시 유성구 전민동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 387, isActive: true },
  { id: "yuseong-o-dong-unique", keywordName: "유성오동", formalName: "대전광역시 유성구 오동", regionType: "dong", parentId: "daejeon-yuseonggu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 388, isActive: true },

  // ==========================================
  // [22] 대전 대덕구 하위 법정동
  // ==========================================
  { id: "daedeok-ojeong", keywordName: "오정동", formalName: "대전광역시 대덕구 오정동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 389, isActive: true },
  { id: "daedeok-daehwa", keywordName: "대화동", formalName: "대전광역시 대덕구 대화동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 390, isActive: true },
  { id: "daedeok-hoedeok", keywordName: "회덕동", formalName: "대전광역시 대덕구 회덕동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 391, isActive: true },
  { id: "daedeok-eupnae", keywordName: "읍내동", formalName: "대전광역시 대덕구 읍내동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 392, isActive: true },
  { id: "daedeok-yeonchuk", keywordName: "연축동", formalName: "대전광역시 대덕구 연축동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 393, isActive: true },
  { id: "daedeok-sindae-unique", keywordName: "대덕신대동", formalName: "대전광역시 대덕구 신대동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 394, isActive: true },
  { id: "daedeok-wa", keywordName: "와동", formalName: "대전광역시 대덕구 와동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 395, isActive: true },
  { id: "daedeok-songchon", keywordName: "송촌동", formalName: "대전광역시 대덕구 송촌동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 396, isActive: true },
  { id: "daedeok-bop", keywordName: "법동", formalName: "대전광역시 대덕구 법동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 397, isActive: true },
  { id: "daedeok-birae", keywordName: "비래동", formalName: "대전광역시 대덕구 비래동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 398, isActive: true },
  { id: "daedeok-seokbong", keywordName: "석봉동", formalName: "대전광역시 대덕구 석봉동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 399, isActive: true },
  { id: "daedeok-deogam", keywordName: "덕암동", formalName: "대전광역시 대덕구 덕암동", regionType: "dong", parentId: "daejeon-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 400, isActive: true },
  { id: "daedeok-sintanjin", keywordName: "신탄진동", formalName: "대전광역시 대덕구 신탄진동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 401, isActive: true },
  { id: "daedeok-samjeong-unique", keywordName: "대덕삼정동", formalName: "대전광역시 대덕구 삼정동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 402, isActive: true },
  { id: "daedeok-용호", keywordName: "대덕용호동", formalName: "대전광역시 대덕구 용호동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 403, isActive: true },
  { id: "daedeok-ihyeon", keywordName: "이현동", formalName: "대전광역시 대덕구 이현동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 404, isActive: true },
  { id: "daedeok-galjeon", keywordName: "갈전동", formalName: "대전광역시 대덕구 갈전동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 405, isActive: true },
  { id: "daedeok-miho", keywordName: "미호동", formalName: "대전광역시 대덕구 미호동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 406, isActive: true },
  { id: "daedeok-hwangho", keywordName: "황호동", formalName: "대전광역시 대덕구 황호동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 407, isActive: true },
  { id: "daedeok-pyeongchon-unique", keywordName: "대덕평촌동", formalName: "대전광역시 대덕구 평촌동", regionType: "dong", parentId: "daedeok-daedeokgu", provinceGroup: "daejeon", variantGroupId: null, sortOrder: 408, isActive: true },

  // ==========================================
  // [23] 세종특별자치시 최상위 시 및 조치원읍·면·법정동
  // ==========================================
  { id: "sejong-si", keywordName: "세종시", formalName: "세종특별자치시", regionType: "city", parentId: null, provinceGroup: "sejong", variantGroupId: "sejong", sortOrder: 409, isActive: true },
  { id: "sejong", keywordName: "세종", formalName: "세종특별자치시", regionType: "city", parentId: null, provinceGroup: "sejong", variantGroupId: "sejong", sortOrder: 410, isActive: true },
  
  { id: "sejong-jochiwon", keywordName: "조치원읍", formalName: "세종특별자치시 조치원읍", regionType: "eup", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 411, isActive: true },
  { id: "sejong-yeongi", keywordName: "연기면", formalName: "세종특별자치시 연기면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 412, isActive: true },
  { id: "sejong-yeondong", keywordName: "연동면", formalName: "세종특별자치시 연동면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 413, isActive: true },
  { id: "sejong-geumnam", keywordName: "금남면", formalName: "세종특별자치시 금남면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 414, isActive: true },
  { id: "sejong-janggun", keywordName: "장군면", formalName: "세종특별자치시 장군면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 415, isActive: true },
  { id: "sejong-yeonseo", keywordName: "연서면", formalName: "세종특별자치시 연서면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 416, isActive: true },
  { id: "sejong-jeonui", keywordName: "전의면", formalName: "세종특별자치시 전의면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 417, isActive: true },
  { id: "sejong-jeondong", keywordName: "전동면", formalName: "세종특별자치시 전동면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 418, isActive: true },
  { id: "sejong-sojeong", keywordName: "소정면", formalName: "세종특별자치시 소정면", regionType: "myeon", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 419, isActive: true },

  { id: "sejong-bangog", keywordName: "반곡동", formalName: "세종특별자치시 반곡동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 420, isActive: true },
  { id: "sejong-sodam", keywordName: "소담동", formalName: "세종특별자치시 소담동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 421, isActive: true },
  { id: "sejong-boram", keywordName: "보람동", formalName: "세종특별자치시 보람동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 422, isActive: true },
  { id: "sejong-daepyeong", keywordName: "대평동", formalName: "세종특별자치시 대평동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 423, isActive: true },
  { id: "sejong-garam", keywordName: "가람동", formalName: "세종특별자치시 가람동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 424, isActive: true },
  { id: "sejong-hansol", keywordName: "한솔동", formalName: "세종특별자치시 한솔동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 425, isActive: true },
  { id: "sejong-naseong", keywordName: "나성동", formalName: "세종특별자치시 나성동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 426, isActive: true },
  { id: "sejong-dajeong", keywordName: "다정동", formalName: "세종특별자치시 다정동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 427, isActive: true },
  { id: "sejong-saerom", keywordName: "새롬동", formalName: "세종특별자치시 새롬동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 428, isActive: true },
  { id: "sejong-eojin", keywordName: "어진동", formalName: "세종특별자치시 어진동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 429, isActive: true },
  { id: "sejong-dodam", keywordName: "도담동", formalName: "세종특별자치시 도담동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 430, isActive: true },
  { id: "sejong-goun", keywordName: "고운동", formalName: "세종특별자치시 고운동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 431, isActive: true },
  { id: "sejong-areum", keywordName: "아름동", formalName: "세종특별자치시 아름동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 432, isActive: true },
  { id: "sejong-jongchon", keywordName: "종촌동", formalName: "세종특별자치시 종촌동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 433, isActive: true },
  { id: "sejong-haemil", keywordName: "해밀동", formalName: "세종특별자치시 해밀동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 434, isActive: true },
  { id: "sejong-hapgang", keywordName: "합강동", formalName: "세종특별자치시 합강동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 435, isActive: true },
  { id: "sejong-jiphyeon", keywordName: "집현동", formalName: "세종특별자치시 집현동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 436, isActive: true },
  { id: "sejong-sanul", keywordName: "산울동", formalName: "세종특별자치시 산울동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 437, isActive: true },
  { id: "sejong-nuri", keywordName: "누리동", formalName: "세종특별자치시 누리동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 438, isActive: true },
  { id: "sejong-hanbyeol", keywordName: "한별동", formalName: "세종특별자치시 한별동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 439, isActive: true },
  { id: "sejong-dasom", keywordName: "다솜동", formalName: "세종특별자치시 다솜동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 440, isActive: true },
  { id: "sejong-yongho-unique", keywordName: "세종용호동", formalName: "세종특별자치시 용호동", regionType: "dong", parentId: "sejong-si", provinceGroup: "sejong", variantGroupId: null, sortOrder: 441, isActive: true },
  { id: "sejong-jochiwon-munhwa-unique", keywordName: "조치원문화동", formalName: "세종특별자치시 조치원읍 문화동", regionType: "dong", parentId: "sejong-jochiwon", provinceGroup: "sejong", variantGroupId: null, sortOrder: 442, isActive: true }
];
