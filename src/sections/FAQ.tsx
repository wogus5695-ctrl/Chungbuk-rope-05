import React from "react";
import { DetailedRegion } from "@/data/regions";
import { ServiceData } from "@/types";

interface FAQProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function FAQ({ region, service }: FAQProps) {
  const regionName = region?.keywordName || "충북";
  const serviceName = service?.keyword || "누수방수";

  const getFAQList = () => {
    if (service && service.faq && service.faq.length > 0) {
      return service.faq;
    }
    return [
      {
        q: `${regionName} 실리콘 코킹 작업의 평균적인 수명은 어떻게 되나요?`,
        a: `제품 등급과 시공 품질, 거주 환경에 따라 다르지만 보통 8년에서 10년 이상 유지됩니다. ${regionName} 전역 아파트/상가 시공 시 정품 자재 사용과 꼼꼼한 밑작업(기존 실리콘 전면 제거)이 매우 중요합니다.`
      },
      {
        q: `${regionName} 빗물이 샐 때 샷시를 교체해야 하나요, 코킹만 해도 되나요?`,
        a: `샷시 프레임 자체의 심각한 휨 현상이나 노후 파손이 없다면, 코킹제 노후 및 외벽 균열로 인한 누수가 90% 이상입니다. 대개는 전체 교체 없이 ${regionName} 레인가드의 정밀 코킹 작업만으로 해결됩니다.`
      }
    ];
  };

  const faqList = getFAQList();

  return (
    <section id="faq" className="py-10 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          {/* 섹션 제목 H2 지정 */}
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-bold text-brand-primary">
            {regionName} {serviceName} 자주 묻는 질문 (FAQ)
          </h2>
          <p className="mt-2 text-xs xs:text-sm text-gray-500">
            {regionName} 고객님들께서 주로 궁금해하시는 시공 정보를 요약했습니다.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqList.map((item, idx) => {
            // 지역명과 작업명을 자연스럽게 텍스트 템플릿 치환 적용
            const parsedQuestion = item.q.replace(/{region}/g, regionName).replace(/{service}/g, serviceName);
            const parsedAnswer = item.a.replace(/{region}/g, regionName).replace(/{service}/g, serviceName);

            return (
              // details/summary 네이티브 아코디언으로 초기 HTML에 전체 Q&A 텍스트 100% 탑재 보장
              <details 
                key={idx} 
                className="bg-white rounded-xl border border-gray-100 shadow-xs group"
                open={idx === 0} // 첫번째 항목은 기본 열림
              >
                <summary className="font-bold text-sm xs:text-base text-brand-primary p-5 cursor-pointer list-none flex items-center justify-between select-none">
                  {/* 카드/FAQ 질문 제목 H3 지정 */}
                  <h3 className="flex items-start text-left pr-4">
                    <span className="text-brand-accent mr-2 font-extrabold">Q.</span>
                    {parsedQuestion}
                  </h3>
                  <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 pt-1 border-t border-gray-50">
                  <p className="text-xs xs:text-sm text-gray-600 leading-relaxed pl-5 relative">
                    <span className="absolute left-0 top-0 font-bold text-gray-400">A.</span>
                    {parsedAnswer}
                  </p>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
