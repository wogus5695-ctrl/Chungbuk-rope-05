// scratch/verify_parser.js
// parseKeyword 함수와 데이터 파일을 기반으로 URL 파서 엔진 테스트를 로컬 시뮬레이션합니다.


const testCases = [
  // A. 정상 URL (성공 케이스)
  { k: "청주시-빗물누수", expected: true },
  { k: "청주-빗물누수", expected: true },
  { k: "충주시-창틀코킹", expected: true },
  { k: "충주-창틀코킹", expected: true },
  { k: "상당구-외벽크랙보수", expected: true },
  { k: "오창읍-판넬방수", expected: true },
  { k: "복대동-창틀누수", expected: true },
  
  // B. 비정상 URL (실패 케이스)
  { k: "청주시-흥덕구-빗물누수", expected: false },
  { k: "청주-흥덕구-빗물누수", expected: false },
  { k: "흥덕구-복대동-빗물누수", expected: false },
  { k: "복대-동-빗물누수", expected: false },
  { k: "복대-dong-빗물누수", expected: false },
  { k: "충청북도-청주시-빗물누수", expected: false },
  { k: "오창-읍-판넬방수", expected: false },
  { k: "외벽크랙-보수-청주", expected: false },
  { k: "청주시-없는작업명", expected: false },
  { k: "", expected: false }
];

// regionsData와 servicesData를 로딩하기 위해 간단한 모의 구동을 실시하거나 TS 모듈 컴파일 필요
// 본 검증은 Node 환경에서 TS를 원활히 구동하기 위해 직접 데이터 배열을 로드하여 테스트합니다.
const fs = require('fs');
const path = require('path');

// regionsData, servicesData 파싱
const regionsContent = fs.readFileSync(path.join(__dirname, '../src/data/regions.ts'), 'utf8');
const servicesContent = fs.readFileSync(path.join(__dirname, '../src/data/services.ts'), 'utf8');

// 정규식이나 eval이 아닌, 단순 데이터 추출용 파싱 함수 매핑
function extractArray(content, varName) {
  const startIdx = content.indexOf(`const ${varName}`);
  const assignIdx = content.indexOf('=', startIdx);
  const openBracketIdx = content.indexOf('[', assignIdx);
  let closeBracketIdx = content.length;
  
  // 브래킷 매칭
  let bracketCount = 0;
  for (let i = openBracketIdx; i < content.length; i++) {
    if (content[i] === '[') bracketCount++;
    if (content[i] === ']') {
      bracketCount--;
      if (bracketCount === 0) {
        closeBracketIdx = i;
        break;
      }
    }
  }
  const arrayStr = content.substring(openBracketIdx, closeBracketIdx + 1);
  return eval(`(${arrayStr})`);
}

const regionsData = extractArray(regionsContent, 'regionsData');
const servicesData = extractArray(servicesContent, 'servicesData');

// 시뮬레이션용 parseKeyword 구현
function simulateParseKeyword(k) {
  if (!k || typeof k !== "string") return null;

  const decodedK = decodeURIComponent(k).trim();
  let matchedService = null;
  let extractedRegionName = "";

  for (const service of servicesData) {
    const suffix = `-${service.keyword}`;
    if (decodedK.endsWith(suffix)) {
      matchedService = service;
      extractedRegionName = decodedK.substring(0, decodedK.length - suffix.length);
      break;
    }
  }

  if (!matchedService || !extractedRegionName) {
    return null;
  }

  const matchedRegion = regionsData.find(
    (r) => r.keywordName === extractedRegionName
  );

  if (!matchedRegion) {
    return null;
  }

  return {
    region: matchedRegion,
    service: matchedService
  };
}

console.log("=== URL 파서 검증 테스트 시작 ===\n");
let successCount = 0;

testCases.forEach((tc, idx) => {
  const parsed = simulateParseKeyword(tc.k);
  const isOk = !!parsed === tc.expected;
  
  if (isOk) {
    successCount++;
    console.log(`[PASS] 입력: "k=${tc.k}" -> 결과: ${parsed ? `성공 (지역: ${parsed.region.keywordName}, 작업: ${parsed.service.keyword})` : '실패(404)'}`);
  } else {
    console.log(`[FAIL] 입력: "k=${tc.k}" -> 예상: ${tc.expected ? '성공' : '실패'}, 결과: ${parsed ? '성공' : '실패'}`);
  }
});

console.log(`\n테스트 완료: 총 ${testCases.length}개 중 ${successCount}개 통과.`);
