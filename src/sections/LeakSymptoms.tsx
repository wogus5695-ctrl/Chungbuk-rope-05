"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import ContactButton from "@/components/ContactButton";
import { imageSlots } from "@/config/imageSlots";
import { ServiceData, DetailedRegion } from "@/types";
import { getSelfDiagnosisData } from "@/data/selfDiagnosis";

interface LeakSymptomsProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function LeakSymptoms({ region, service }: LeakSymptomsProps) {
  const regionName = region?.keywordName || "충북";
  const serviceKeyword = service?.keyword || "샷시실리콘";
  
  // 1. 작업명별 전용 데이터 조회 (Fallback 없이 null 체크)
  const diagnosisData = getSelfDiagnosisData(serviceKeyword);

  // 데이터 누락 시 안전한 처리 (개발 환경 경고 + 공개 화면 숨김)
  if (!diagnosisData) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[SelfDiagnosis] Missing self-diagnosis data for keyword: "${serviceKeyword}"`);
    }
    return null;
  }

  const mainImage = imageSlots.symptomSectionImage;
  const altText = region && service ? `${regionName} ${serviceKeyword} 누수 증상 자가진단` : "누수 의심 증상";

  // 제목 및 보조 설명 동적 치환
  const sectionTitle = diagnosisData.sectionTitle.replace("{region}", regionName);
  const sectionDescription = diagnosisData.sectionDescription;

  return (
    <section id="symptoms" className="py-10 sm:py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* 섹션 헤더 (H2 단일 노출) */}
        <div className="text-center max-w-xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-[25px] xs:text-[27px] sm:text-[32px] md:text-[36px] font-[800] text-brand-primary tracking-tight leading-[1.25] mb-2 sm:mb-3">
            {sectionTitle}
          </h2>
          <p className="text-[15px] sm:text-[16px] text-gray-600 leading-[1.5] max-w-md mx-auto">
            {sectionDescription}
          </p>
        </div>

        {/* 메인 레이아웃: 이미지 좌측(5) + 증상 카드 2x2 우측(7) / MO 1열 구조 */}
        <div className={`grid grid-cols-1 ${mainImage ? "lg:grid-cols-12 gap-6 lg:gap-8" : "max-w-4xl mx-auto"} items-center mb-8 sm:mb-10`}>
          
          {mainImage && (
            <div className="lg:col-span-5 w-full mb-6 lg:mb-0">
              <SafeImage 
                src={mainImage} 
                alt={altText} 
                aspectRatioClassName="aspect-[4/3] sm:aspect-video lg:aspect-square"
                className="rounded-xl shadow-xs object-cover w-full"
              />
            </div>
          )}

          <div className={`${mainImage ? "lg:col-span-7" : "w-full"}`}>
            {/* 카드 리스트: MO 1열 (gap 14~16px), PC 2x2 (gap 16~20px) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4.5">
              {diagnosisData.symptoms.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-5 sm:p-6 border border-slate-200/90 rounded-xl bg-slate-50/70 flex flex-col justify-start transition-shadow hover:shadow-sm"
                >
                  {/* 1. 증상 라벨 */}
                  <span className="text-[14px] font-[800] text-brand-accent mb-1.5 uppercase tracking-wider">
                    {item.label}
                  </span>

                  {/* 2. 짧은 증상 제목 H3 */}
                  <h3 className="font-[800] text-[18px] sm:text-[19px] lg:text-[20px] text-brand-primary mb-2 leading-[1.38] tracking-tight">
                    {item.title}
                  </h3>

                  {/* 3. 원인/상태 설명 한 문장 */}
                  <p className="text-[14px] sm:text-[15px] text-gray-600 leading-[1.5] line-clamp-2 font-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 하단 카카오톡 연결 CTA 배치 */}
        <div className="text-center mt-6 sm:mt-8">
          <ContactButton 
            type="kakao" 
            variant="secondary"
            aria-label="카카오톡으로 현장 사진 문의하기"
            className="inline-flex items-center justify-center gap-2 px-6 h-12 bg-yellow-50 hover:bg-yellow-100/80 text-yellow-900 text-[14px] sm:text-[15px] font-bold rounded-lg border border-yellow-200 transition-colors shadow-xs"
          >
            <svg className="w-5 h-5 text-yellow-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.51 1.66 4.723 4.18 5.922-.165.617-.6 2.25-.688 2.587-.13.51.173.5.364.372.15-.1.2.148 2.822-1.92.73.204 1.514.32 2.322.32 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
            </svg>
            <span className="block sm:hidden">사진으로 문의하기</span>
            <span className="hidden sm:block">사진으로 현재 상태 문의하기</span>
          </ContactButton>
        </div>

      </div>
    </section>
  );
}
