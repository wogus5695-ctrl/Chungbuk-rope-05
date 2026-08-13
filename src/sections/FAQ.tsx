"use client";

import React from "react";
import { ServiceData, DetailedRegion } from "@/types";
import { getServiceFaqData } from "@/data/serviceFaq";

interface FAQProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function FAQ({ region, service }: FAQProps) {
  const regionName = region?.keywordName || "충북";
  const serviceKeyword = service?.keyword || "건물방수";

  // 1. 작업명별 전용 데이터 조회 (Fallback 없이 null 처리)
  const faqData = getServiceFaqData(serviceKeyword);

  // 데이터 누락 시 안전한 처리 (개발 환경 경고 + 공개 화면 숨김)
  if (!faqData) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[FAQ] Missing FAQ data for keyword: "${serviceKeyword}"`);
    }
    return null;
  }

  // 2. 동적 타이틀 및 설명 치환
  const sectionTitle = faqData.sectionTitle.replace("{region}", regionName);
  const sectionDescription = faqData.sectionDescription;

  return (
    <section id="faq" className="py-10 sm:py-16 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 섹션 헤더 (H2 단일 노출) */}
        <div className="text-center max-w-xl mx-auto mb-7 sm:mb-12">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight mb-2.5 sm:mb-3 break-keep">
            {sectionTitle}
          </h2>
          <p className="text-xs xs:text-sm text-gray-500 leading-relaxed break-keep">
            {sectionDescription}
          </p>
        </div>

        {/* 아코디언 리스트: 초기 HTML에 전체 Q&A 5개 탑재 보장 */}
        <div className="max-w-3xl mx-auto space-y-3.5 sm:space-y-4">
          {faqData.items.map((item, idx) => (
            <details 
              key={idx} 
              className="bg-white rounded-xl border border-gray-100 shadow-xs group transition-shadow hover:shadow-sm"
              open={idx === 0} // 첫번째 항목은 기본 열림
            >
              <summary className="font-bold text-sm xs:text-base text-brand-primary p-4 sm:p-5 cursor-pointer list-none flex items-center justify-between select-none">
                {/* 질문 제목 H3 지정 (아이콘과 겹침 완벽 방지: pr-3, shrink-0 SVG) */}
                <h3 className="flex items-start text-left pr-3 leading-snug sm:leading-relaxed break-keep font-extrabold text-[14px] sm:text-[16px]">
                  <span className="text-brand-accent mr-2 font-black shrink-0">Q.</span>
                  <span>{item.question}</span>
                </h3>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200 shrink-0 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 border-t border-gray-50">
                <p className="text-xs xs:text-sm text-gray-600 leading-[1.65] pl-5 relative break-keep font-normal">
                  <span className="absolute left-0 top-0 font-bold text-gray-400">A.</span>
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
