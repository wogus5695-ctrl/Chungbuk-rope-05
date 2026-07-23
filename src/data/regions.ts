import { RegionData } from "@/types";

export interface DetailedRegion {
  id: string;
  keywordName: string;
  formalName: string;
  regionType: "si" | "gun" | "gu" | "eup" | "myeon" | "dong";
  parentId: string | null;
  nearbyRegionIds: string[];
  keywordVariantType: "formal" | "alias";
}

// 충청북도 시·군·구·읍·면·동 전수 행정구역 데이터
export const regionsData: DetailedRegion[] = [
  // 1. 시/군 단위 (및 시 단위 별도 표기)
  { id: "cheongju-si", keywordName: "청주시", formalName: "청주시", regionType: "si", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongju", keywordName: "청주", formalName: "청주시", regionType: "si", parentId: null, nearbyRegionIds: [], keywordVariantType: "alias" },
  
  { id: "chungju-si", keywordName: "충주시", formalName: "충주시", regionType: "si", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju", keywordName: "충주", formalName: "충주시", regionType: "si", parentId: null, nearbyRegionIds: [], keywordVariantType: "alias" },
  
  { id: "jecheon-si", keywordName: "제천시", formalName: "제천시", regionType: "si", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon", keywordName: "제천", formalName: "제천시", regionType: "si", parentId: null, nearbyRegionIds: [], keywordVariantType: "alias" },

  { id: "boeun-gun", keywordName: "보은군", formalName: "보은군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-gun", keywordName: "옥천군", formalName: "옥천군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-gun", keywordName: "영동군", formalName: "영동군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jeungpyeong-gun", keywordName: "증평군", formalName: "증평군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jincheon-gun", keywordName: "진천군", formalName: "진천군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-gun", keywordName: "괴산군", formalName: "괴산군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-gun", keywordName: "음성군", formalName: "음성군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-gun", keywordName: "단양군", formalName: "단양군", regionType: "gun", parentId: null, nearbyRegionIds: [], keywordVariantType: "formal" },

  // 2. 구 단위 (청주시 하위 4개 구)
  { id: "cheongju-sangdang", keywordName: "상당구", formalName: "청주시 상당구", regionType: "gu", parentId: "cheongju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongju-seowon", keywordName: "서원구", formalName: "청주시 서원구", regionType: "gu", parentId: "cheongju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongju-heungdeok", keywordName: "흥덕구", formalName: "청주시 흥덕구", regionType: "gu", parentId: "cheongju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongju-cheongwon", keywordName: "청원구", formalName: "청주시 청원구", regionType: "gu", parentId: "cheongju-si", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 상당구 하위 (5면, 8동) ---
  { id: "sangdang-nangseong", keywordName: "낭성면", formalName: "청주시 상당구 낭성면", regionType: "myeon", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-miwon", keywordName: "미원면", formalName: "청주시 상당구 미원면", regionType: "myeon", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-gadeok", keywordName: "가덕면", formalName: "청주시 상당구 가덕면", regionType: "myeon", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-namil", keywordName: "남일면", formalName: "청주시 상당구 남일면", regionType: "myeon", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-munui", keywordName: "문의면", formalName: "청주시 상당구 문의면", regionType: "myeon", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  
  // 상당구 중앙동 (중앙동 이름 중복으로 '청주중앙동' 키워드 적용)
  { id: "sangdang-jungang", keywordName: "청주중앙동", formalName: "청주시 상당구 중앙동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-seongan", keywordName: "성안동", formalName: "청주시 상당구 성안동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-tapdaeseong", keywordName: "탑대성동", formalName: "청주시 상당구 탑·대성동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-yeoungun", keywordName: "영운동", formalName: "청주시 상당구 영운동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-geumcheon", keywordName: "금천동", formalName: "청주시 상당구 금천동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-yongdammyeongamsanseong", keywordName: "용담명암산성동", formalName: "청주시 상당구 용담·명암·산성동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-yongam1", keywordName: "용am1동", formalName: "청주시 상당구 용암1동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "sangdang-yongam2", keywordName: "용am2동", formalName: "청주시 상당구 용암2동", regionType: "dong", parentId: "cheongju-sangdang", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 서원구 하위 (2면, 9동) ---
  { id: "seowon-nami", keywordName: "남이면", formalName: "청주시 서원구 남이면", regionType: "myeon", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-hyeondo", keywordName: "현도면", formalName: "청주시 서원구 현도면", regionType: "myeon", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-sajik1", keywordName: "사직1동", formalName: "청주시 서원구 사직1동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-sajik2", keywordName: "사직2동", formalName: "청주시 서원구 사직2동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-sachang", keywordName: "사창동", formalName: "청주시 서원구 사창동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-mochung", keywordName: "모충동", formalName: "청주시 서원구 모충동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-sugok1", keywordName: "수곡1동", formalName: "청주시 서원구 수곡1동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-sugok2", keywordName: "수곡2동", formalName: "청주시 서원구 수곡2동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-sannam", keywordName: "산남동", formalName: "청주시 서원구 산남동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-bunpyeong", keywordName: "분평동", formalName: "청주시 서원구 분평동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "seowon-seonghwagaesinjungnim", keywordName: "성화개신죽림동", formalName: "청주시 서원구 성화·개신·죽림동", regionType: "dong", parentId: "cheongju-seowon", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 흥덕구 하위 (1읍, 2면, 8동) ---
  { id: "heungdeok-osong", keywordName: "오송읍", formalName: "청주시 흥덕구 오송읍", regionType: "eup", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-gangnae", keywordName: "강내면", formalName: "청주시 흥덕구 강내면", regionType: "myeon", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-oksan", keywordName: "옥산면", formalName: "청주시 흥덕구 옥산면", regionType: "myeon", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-uncheonsinbong", keywordName: "운천신봉동", formalName: "청주시 흥덕구 운천·신봉동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-bokdae", keywordName: "복대동", formalName: "청주시 흥덕구 복대동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-bokdae1", keywordName: "복대1동", formalName: "청주시 흥덕구 복대1동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-bokdae2", keywordName: "복대2동", formalName: "청주시 흥덕구 복대2동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-gagyeong", keywordName: "가경동", formalName: "청주시 흥덕구 가경동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-bongmyeong1", keywordName: "봉명1동", formalName: "청주시 흥덕구 봉명1동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-bongmyeong2songjeong", keywordName: "봉명2송정동", formalName: "청주시 흥덕구 봉명2·송정동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-gangseo1", keywordName: "강서1동", formalName: "청주시 흥덕구 강서1동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "heungdeok-gangseo2", keywordName: "강서2동", formalName: "청주시 흥덕구 강서2동", regionType: "dong", parentId: "cheongju-heungdeok", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 청원구 하위 (2읍, 1면, 5동) ---
  { id: "cheongwon-naesu", keywordName: "내수읍", formalName: "청주시 청원구 내수읍", regionType: "eup", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongwon-ochang", keywordName: "오창읍", formalName: "청주시 청원구 오창읍", regionType: "eup", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongwon-bugi", keywordName: "북이면", formalName: "청주시 청원구 북이면", regionType: "myeon", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongwon-uam", keywordName: "우암동", formalName: "청주시 청원구 우암동", regionType: "dong", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongwon-naedeok1", keywordName: "내덕1동", formalName: "청주시 청원구 내덕1동", regionType: "dong", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongwon-naedeok2", keywordName: "내덕2동", formalName: "청주시 청원구 내덕2동", regionType: "dong", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongwon-yullyangsacheon", keywordName: "율량사천동", formalName: "청주시 청원구 율량·사천동", regionType: "dong", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "cheongwon-ogeunjang", keywordName: "오근장동", formalName: "청주시 청원구 오근장동", regionType: "dong", parentId: "cheongju-cheongwon", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 2. 충주시 하위 (1읍, 12면, 12동) ---
  { id: "chungju-judeok", keywordName: "주덕읍", formalName: "충주시 주덕읍", regionType: "eup", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-geumga", keywordName: "금가면", formalName: "충주시 금가면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-noeun", keywordName: "노은면", formalName: "충주시 노은면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-daesowon", keywordName: "대소원면", formalName: "충주시 대소원면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-dongryang", keywordName: "동량면", formalName: "충주시 동량면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-sancheok", keywordName: "산척면", formalName: "충주시 산척면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-salmi", keywordName: "살미면", formalName: "충주시 살미면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-sotae", keywordName: "소태면", formalName: "충주시 소태면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-suanbo", keywordName: "수안보면", formalName: "충주시 수안보면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-sinni", keywordName: "신니면", formalName: "충주시 신니면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-angseong", keywordName: "앙성면", formalName: "충주시 앙성면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-eomjeong", keywordName: "엄정면", formalName: "충주시 엄정면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-jungangtap", keywordName: "중앙탑면", formalName: "충주시 중앙탑면", regionType: "myeon", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },

  { id: "chungju-gyohyeonalrim", keywordName: "교현안림동", formalName: "충주시 교현·안림동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-gyohyeon2", keywordName: "교현2동", formalName: "충주시 교현2동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-dalcheon", keywordName: "달천동", formalName: "충주시 달천동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-mokhaengyongtan", keywordName: "목행용탄동", formalName: "충주시 목행·용탄동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-munhwa", keywordName: "문화동", formalName: "충주시 문화동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-bongbang", keywordName: "봉방동", formalName: "충주시 봉방동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-seongnaechungin", keywordName: "성내충인동", formalName: "충주시 성내·충인동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-yeonsu", keywordName: "연수동", formalName: "충주시 연수동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-yongsan", keywordName: "용산동", formalName: "충주시 용산동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-jihyeon", keywordName: "지현동", formalName: "충주시 지현동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-chilgeumgeumreung", keywordName: "칠금금릉동", formalName: "충주시 칠금·금릉동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "chungju-hoamjik", keywordName: "호암직동", formalName: "충주시 호암·직동", regionType: "dong", parentId: "chungju-si", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 3. 제천시 하위 (1읍, 7면, 9동) ---
  { id: "jecheon-bongyang", keywordName: "봉양읍", formalName: "제천시 봉양읍", regionType: "eup", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-geumseong", keywordName: "금성면", formalName: "제천시 금성면", regionType: "myeon", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-deoksan", keywordName: "덕산면", formalName: "제천시 덕산면", regionType: "myeon", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-baegun", keywordName: "백운면", formalName: "제천시 백운면", regionType: "myeon", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-songhak", keywordName: "송학면", formalName: "제천시 송학면", regionType: "myeon", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-susan", keywordName: "수산면", formalName: "제천시 수산면", regionType: "myeon", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-cheongpung", keywordName: "청풍면", formalName: "제천시 청풍면", regionType: "myeon", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-hansu", keywordName: "한수면", formalName: "제천시 한수면", regionType: "myeon", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },

  { id: "jecheon-gyo", keywordName: "교동", formalName: "제천시 교동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-namhyeon", keywordName: "남현동", formalName: "제천시 남현동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-sinbaek", keywordName: "신백동", formalName: "제천시 신백동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-yeongseo", keywordName: "영서동", formalName: "제천시 영서동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-yongdu", keywordName: "용두동", formalName: "제천시 용두동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-uirimji", keywordName: "의림지동", formalName: "제천시 의림지동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  // 제천시 중앙동 (중앙동 이름 중복으로 '제천중앙동' 키워드 적용)
  { id: "jecheon-jungang", keywordName: "제천중앙동", formalName: "제천시 중앙동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-cheongjeon", keywordName: "청전동", formalName: "제천시 청전동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jecheon-hwasan", keywordName: "화산동", formalName: "제천시 화산동", regionType: "dong", parentId: "jecheon-si", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 4. 보은군 하위 (1읍, 10면) ---
  { id: "boeun-boeun", keywordName: "보은읍", formalName: "보은군 보은읍", regionType: "eup", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-songnisan", keywordName: "속리산면", formalName: "보은군 속리산면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-jangan", keywordName: "장안면", formalName: "보은군 장안면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-maro", keywordName: "마로면", formalName: "보은군 마로면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-tanbu", keywordName: "탄부면", formalName: "보은군 탄부면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-samseung", keywordName: "삼승면", formalName: "보은군 삼승면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-suhan", keywordName: "수한면", formalName: "보은군 수한면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-hoenam", keywordName: "회남면", formalName: "보은군 회남면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-hoein", keywordName: "회인면", formalName: "보은군 회인면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-naebuk", keywordName: "내북면", formalName: "보은군 내북면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "boeun-sanoe", keywordName: "산외면", formalName: "보은군 산외면", regionType: "myeon", parentId: "boeun-gun", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 5. 옥천군 하위 (1읍, 8면) ---
  { id: "okcheon-okcheon", keywordName: "옥천읍", formalName: "옥천군 옥천읍", regionType: "eup", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-dongi", keywordName: "동이면", formalName: "옥천군 동이면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-annam", keywordName: "안남면", formalName: "옥천군 안남면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-annae", keywordName: "안내면", formalName: "옥천군 안내면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-cheongseong", keywordName: "청성면", formalName: "옥천군 청성면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-cheongsan", keywordName: "청산면", formalName: "옥천군 청산면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-iwon", keywordName: "이원면", formalName: "옥천군 이원면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-gunbuk", keywordName: "군북면", formalName: "옥천군 군북면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "okcheon-gunseo", keywordName: "군서면", formalName: "옥천군 군서면", regionType: "myeon", parentId: "okcheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 6. 영동군 하위 (1읍, 10면) ---
  { id: "yeongdong-yeongdong", keywordName: "영동읍", formalName: "영동군 영동읍", regionType: "eup", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-yongsan", keywordName: "용산면", formalName: "영동군 용산면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-hwanggan", keywordName: "황간면", formalName: "영동군 황간면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-chupungryeong", keywordName: "추풍령면", formalName: "영동군 추풍령면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-maegok", keywordName: "매곡면", formalName: "영동군 매곡면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-sangchon", keywordName: "상촌면", formalName: "영동군 상촌면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-yanggang", keywordName: "양강면", formalName: "영동군 양강면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-yonghwa", keywordName: "용화면", formalName: "영동군 용화면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-haksan", keywordName: "학산면", formalName: "영동군 학산면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-yangsan", keywordName: "양산면", formalName: "영동군 양산면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "yeongdong-simcheon", keywordName: "심천면", formalName: "영동군 심천면", regionType: "myeon", parentId: "yeongdong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 7. 증평군 하위 (1읍, 1면) ---
  { id: "jeungpyeong-jeungpyeong", keywordName: "증평읍", formalName: "증평군 증평읍", regionType: "eup", parentId: "jeungpyeong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jeungpyeong-doan", keywordName: "도안면", formalName: "증평군 도안면", regionType: "myeon", parentId: "jeungpyeong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 8. 진천군 하위 (2읍, 5면) ---
  { id: "jincheon-jincheon", keywordName: "진천읍", formalName: "진천군 진천읍", regionType: "eup", parentId: "jincheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jincheon-deoksan", keywordName: "덕산읍", formalName: "진천군 덕산읍", regionType: "eup", parentId: "jincheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jincheon-chopyeong", keywordName: "초평면", formalName: "진천군 초평면", regionType: "myeon", parentId: "jincheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jincheon-munbaek", keywordName: "문백면", formalName: "진천군 문백면", regionType: "myeon", parentId: "jincheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jincheon-baegok", keywordName: "백곡면", formalName: "진천군 백곡면", regionType: "myeon", parentId: "jincheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jincheon-iywol", keywordName: "이월면", formalName: "진천군 이월면", regionType: "myeon", parentId: "jincheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "jincheon-gwanghyewon", keywordName: "광혜원면", formalName: "진천군 광혜원면", regionType: "myeon", parentId: "jincheon-gun", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 9. 괴산군 하위 (1읍, 10면) ---
  { id: "goesan-goesan", keywordName: "괴산읍", formalName: "괴산군 괴산읍", regionType: "eup", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-gammul", keywordName: "감물면", formalName: "괴산군 감물면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-jangyeon", keywordName: "장연면", formalName: "괴산군 장연면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-yeonpung", keywordName: "연풍면", formalName: "괴산군 연풍면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-chilseong", keywordName: "칠성면", formalName: "괴산군 칠성면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-mungwang", keywordName: "문광면", formalName: "괴산군 문광면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-cheongcheon", keywordName: "청천면", formalName: "괴산군 청천면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-cheongan", keywordName: "청안면", formalName: "괴산군 청안면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-sari", keywordName: "사리면", formalName: "괴산군 사리면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-sosu", keywordName: "소수면", formalName: "괴산군 소수면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "goesan-buljeong", keywordName: "불정면", formalName: "괴산군 불정면", regionType: "myeon", parentId: "goesan-gun", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 10. 음성군 하위 (3읍, 6면) ---
  { id: "eumseong-eumseong", keywordName: "음성읍", formalName: "음성군 음성읍", regionType: "eup", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-geumwang", keywordName: "금왕읍", formalName: "음성군 금왕읍", regionType: "eup", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-daeso", keywordName: "대소읍", formalName: "음성군 대소읍", regionType: "eup", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-soyi", keywordName: "소이면", formalName: "음성군 소이면", regionType: "myeon", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-wonnam", keywordName: "원남면", formalName: "음성군 원남면", regionType: "myeon", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-maengdong", keywordName: "맹동면", formalName: "음성군 맹동면", regionType: "myeon", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-samseong", keywordName: "삼성면", formalName: "음성군 삼성면", regionType: "myeon", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-saengeuk", keywordName: "생극면", formalName: "음성군 생극면", regionType: "myeon", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "eumseong-gamgok", keywordName: "감곡면", formalName: "음성군 감곡면", regionType: "myeon", parentId: "eumseong-gun", nearbyRegionIds: [], keywordVariantType: "formal" },

  // --- 11. 단양군 하위 (2읍, 6면) ---
  { id: "danyang-danyang", keywordName: "단양읍", formalName: "단양군 단양읍", regionType: "eup", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-maepo", keywordName: "매포읍", formalName: "단양군 매포읍", regionType: "eup", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-danseong", keywordName: "단성면", formalName: "단양군 단성면", regionType: "myeon", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-daegang", keywordName: "대강면", formalName: "단양군 대강면", regionType: "myeon", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-gagog", keywordName: "가곡면", formalName: "단양군 가곡면", regionType: "myeon", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-yeongchun", keywordName: "영춘면", formalName: "단양군 영춘면", regionType: "myeon", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-eoshangcheon", keywordName: "어상천면", formalName: "단양군 어상천면", regionType: "myeon", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" },
  { id: "danyang-jeokseong", keywordName: "적성면", formalName: "단양군 적성면", regionType: "myeon", parentId: "danyang-gun", nearbyRegionIds: [], keywordVariantType: "formal" }
];
