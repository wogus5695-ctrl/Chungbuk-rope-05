import { regionsData } from "@/data/regions";
import { servicesData } from "@/data/services";
import { ServiceData, DetailedRegion } from "@/types";

interface ParsedKeywordResult {
  region: DetailedRegion;
  service: ServiceData;
}

/**
 * 6단계: 동적 URL 파서 엔진
 * URL 파라미터 k값을 받아서 디코딩 후 정밀 매칭을 수행합니다.
 * 
 * 파싱 알고리즘:
 * 1. k 파라미터 URL 디코딩
 * 2. 끝에서 등록된 작업명 13종 중 하나와 정확히 일치하는지 확인 (예: "-작업명")
 * 3. 매칭된 작업명을 제외한 앞부분을 순수 지역 키워드로 추출
 * 4. 추출된 지역명이 승인된 지역 리스트(regionsData)의 keywordName과 정확히 1:1 일치하는지 검사
 * 5. 둘 다 일치하면 파싱 결과를 리턴하고, 하나라도 틀리면 null을 리턴하여 404 처리를 유도
 */
export function parseKeyword(k: string): ParsedKeywordResult | null {
  if (!k || typeof k !== "string") return null;

  try {
    // 1. URL 디코딩 처리
    const decodedK = decodeURIComponent(k).trim();

    // 2. 문자열 끝에서 13종 작업명과 매칭 확인
    let matchedService: ServiceData | null = null;
    let extractedRegionName = "";

    for (const service of servicesData) {
      const suffix = `-${service.keyword}`;
      if (decodedK.endsWith(suffix)) {
        matchedService = service;
        // 작업명을 뗀 나머지 앞부분 추출
        extractedRegionName = decodedK.substring(0, decodedK.length - suffix.length);
        break;
      }
    }

    if (!matchedService || !extractedRegionName) {
      return null;
    }

    // 3. 추출된 지역명이 승인된 활성 지역 데이터에 1:1로 정확하게 존재하는지 검사
    const matchedRegion = regionsData.find(
      (r) => r.keywordName === extractedRegionName && r.isActive
    );

    if (!matchedRegion) {
      return null;
    }

    return {
      region: matchedRegion,
      service: matchedService
    };
  } catch (error) {
    return null;
  }
}
