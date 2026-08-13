"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import { imageSlots } from "@/config/imageSlots";
import { siteConfig } from "@/config/site";
import { ServiceData, DetailedRegion, WorkCase, ImageSlots } from "@/types";
import { workCases } from "@/data/workCases";

interface WorkCasesProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function WorkCases({ region, service }: WorkCasesProps) {
  const serviceKeyword = service?.keyword || "빗물누수";
  const isDynamic = !!region && !!service;

  // 1. 노출 가능 사례 필터링 및 sortOrder 기준 기본 정렬
  const activeCases = [...workCases]
    .filter(c => c.isActive !== false)
    .sort((a, b) => a.sortOrder - b.sortOrder);

  // 2. 판넬방수 / 지붕방수 등 보조 노출 우선순위 설정
  let fallbackPreferredId: string | null = null;
  if (serviceKeyword === "판넬방수") {
    fallbackPreferredId = "factory-exterior-crack-waterproofing";
  } else if (serviceKeyword === "지붕방수") {
    fallbackPreferredId = "commercial-building-integrated-waterproofing";
  }

  // 3. 작업명별 사례 우선순위 그룹 분류 (1: 동일 -> 2: 관련 -> 3: 기타)
  const exactMatches = activeCases.filter(c => c.serviceTypes?.includes(serviceKeyword));
  const relatedMatches = activeCases.filter(c => 
    !c.serviceTypes?.includes(serviceKeyword) && c.relatedServiceTypes?.includes(serviceKeyword)
  );
  let otherMatches = activeCases.filter(c => 
    !c.serviceTypes?.includes(serviceKeyword) && !c.relatedServiceTypes?.includes(serviceKeyword)
  );

  // 보조 노출 선호 사례가 지정된 경우 기타 그룹 내 최상단 배치
  if (fallbackPreferredId) {
    const preferred = otherMatches.filter(c => c.id === fallbackPreferredId);
    const rest = otherMatches.filter(c => c.id !== fallbackPreferredId);
    otherMatches = [...preferred, ...rest];
  }

  // 4. 중복 사례 ID 차단 및 최종 렌더링 순서 확정 (Set 활용, 중복 0개 보장)
  const seenIds = new Set<string>();
  const displayCases: WorkCase[] = [];
  
  for (const item of [...exactMatches, ...relatedMatches, ...otherMatches]) {
    if (!seenIds.has(item.id)) {
      seenIds.add(item.id);
      displayCases.push(item);
    }
  }

  // 대표 사례 1개 + 보조 사례 4개 분리 (총 5개 사례)
  const heroCase = displayCases[0];
  const secondaryCases = displayCases.slice(1, 5);

  // 5. 표시 라벨 규칙 (동일 작업 사례 / 관련 작업 사례 / 유사 작업 사례)
  const getBadgeLabel = (item: WorkCase) => {
    if (item.serviceTypes?.includes(serviceKeyword)) {
      return "동일 작업 사례";
    }
    if (item.relatedServiceTypes?.includes(serviceKeyword)) {
      return "관련 작업 사례";
    }
    return "유사 작업 사례";
  };

  return (
    <section id="cases" className="py-12 sm:py-16 bg-white w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* 섹션 헤더 */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight mb-2.5 sm:mb-3 break-keep">
            {isDynamic ? `${serviceKeyword} 현장 시공 사례` : "레인가드 현장 시공 사례"}
          </h2>
          <p className="text-xs sm:text-sm text-gray-500 leading-relaxed break-keep">
            창틀 코킹부터 외벽·옥상방수까지, 건물별 누수 취약부와 실제 작업 내용을 소개합니다.
          </p>
        </div>

        {/* 사례 목록이 없는 경우 (방어용) */}
        {displayCases.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-12 px-6 bg-slate-50 rounded-2xl border border-slate-200/70">
            <p className="text-sm text-gray-500 font-medium">
              현재 {serviceKeyword} 관련 현장 시공 사례를 정리 중입니다.
            </p>
          </div>
        ) : (
          /* 반응형 단일 DOM 구조: PC(대표1개 + 2x2보조4개) / MO(1열) */
          <div className="space-y-6 sm:space-y-8">
            
            {/* 1. 대표 사례 카카오/PC 대형 카드 */}
            {heroCase && (() => {
              const heroBadgeText = getBadgeLabel(heroCase);
              const heroImageUrl = heroCase.imageKey && heroCase.imageKey in imageSlots
                ? imageSlots[heroCase.imageKey as keyof ImageSlots]
                : null;
              const isVilla = heroCase.id === "villa-exterior-coating-waterproofing";

              return (
                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-md transition-shadow">
                  {/* PC: 2열 배치 / MO: 1열 배치 */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-8 items-start">
                    
                    {/* 1. 모바일 뷰: 현장 유형 태그 & 뱃지 + 제목 (이미지 위로 배치하여 현장 파악 극대화) */}
                    <div className="md:hidden">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold text-brand-accent bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                          {heroCase.buildingType}
                        </span>
                        <span className="text-[11px] text-gray-600 font-semibold bg-white border border-slate-200/80 px-2.5 py-0.5 rounded-md">
                          {heroBadgeText}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-base sm:text-2xl text-brand-primary mb-3 leading-snug tracking-tight break-keep">
                        {heroCase.title}
                      </h3>
                    </div>

                    {/* 대표 이미지 영역 (모바일: 태그/제목 직후 2순위 노출) */}
                    <div className="md:col-span-5 lg:col-span-5 w-full">
                      {heroImageUrl && (
                        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl border border-slate-200/60 shadow-xs">
                          <SafeImage 
                            src={heroImageUrl} 
                            alt={heroCase.alt || heroCase.title} 
                            aspectRatioClassName="aspect-4/3 md:aspect-3/2" 
                            className={isVilla ? "object-top" : "object-center"}
                          />
                          {heroCase.isVerified && (
                            <span className="absolute top-3 left-3 bg-blue-600/90 text-white text-[10px] sm:text-xs font-bold px-2.5 py-1 rounded-md backdrop-blur-xs shadow-xs">
                              현장 실사 인증
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* 정보 영역 */}
                    <div className="md:col-span-7 lg:col-span-7 flex flex-col justify-between h-full">
                      <div>
                        {/* PC 전용: 헤더 태그 & 뱃지 + 제목 */}
                        <div className="hidden md:block">
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <span className="text-xs font-bold text-brand-accent bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                              {heroCase.buildingType}
                            </span>
                            <span className="text-xs text-gray-600 font-semibold bg-white border border-slate-200/80 px-2.5 py-0.5 rounded-md">
                              {heroBadgeText}
                            </span>
                            {heroCase.categoryLabels.map((tag, idx) => (
                              <span key={idx} className="inline-block text-[11px] text-gray-400 font-medium">
                                #{tag}
                              </span>
                            ))}
                          </div>
                          <h3 className="font-extrabold text-lg sm:text-2xl lg:text-3xl text-brand-primary mb-3 leading-snug tracking-tight break-keep">
                            {heroCase.title}
                          </h3>
                        </div>

                        {/* 시공 결과 / 핵심 요약 한 문장 (이미지 직후 3순위 노출) */}
                        <div className="mt-3 md:mt-0 bg-white p-3 sm:p-3.5 rounded-xl border border-slate-200/60 flex items-center justify-between text-xs sm:text-sm">
                          <span className="text-gray-500 font-semibold">시공 결과</span>
                          <span className="font-extrabold text-brand-accent">{heroCase.result}</span>
                        </div>

                        {/* PC 전용: 상세 내역 노출 */}
                        <div className="hidden md:block space-y-2 text-xs sm:text-sm text-gray-700 bg-white p-4 rounded-xl border border-slate-200/60 mt-3">
                          <p><strong className="text-brand-primary font-bold">확인 증상:</strong> {heroCase.symptom}</p>
                          <p><strong className="text-brand-primary font-bold">점검 내용:</strong> {heroCase.inspection}</p>
                          <p><strong className="text-brand-primary font-bold">시공 작업:</strong> {heroCase.work}</p>
                        </div>

                        {/* 모바일 전용: 원인 점검 및 시공 세부내역 Accordion (더 깔끔한 margin 구분 사용) */}
                        <details className="md:hidden group mt-3">
                          <summary className="text-xs text-brand-accent font-bold cursor-pointer flex items-center justify-between list-none select-none py-1.5 px-1">
                            <span>원인 점검 및 시공 세부내역</span>
                            <svg className="w-4 h-4 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="mt-2 space-y-2 text-xs text-gray-700 bg-white p-3.5 rounded-xl border border-slate-200/60 leading-relaxed">
                            <p><strong className="text-brand-primary">확인 증상:</strong> {heroCase.symptom}</p>
                            <p><strong className="text-brand-primary">점검 내용:</strong> {heroCase.inspection}</p>
                            <p><strong className="text-brand-primary">시공 작업:</strong> {heroCase.work}</p>
                          </div>
                        </details>
                      </div>

                    </div>

                  </div>
                </div>
              );
            })()}

            {/* 2. 보조 사례 4개 그리드 (PC 2x2 / MO 1열) */}
            {secondaryCases.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {secondaryCases.map((item) => {
                  const badgeText = getBadgeLabel(item);
                  const caseImageUrl = item.imageKey && item.imageKey in imageSlots 
                    ? imageSlots[item.imageKey as keyof ImageSlots] 
                    : null;
                  const isVilla = item.id === "villa-exterior-coating-waterproofing";

                  return (
                    <div 
                      key={item.id}
                      className="bg-slate-50 border border-slate-200/70 rounded-2xl p-4.5 sm:p-6 flex flex-col justify-between hover:shadow-xs transition-shadow"
                    >
                      <div>
                        {/* 1. 현장 유형 태그 & 뱃지 */}
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[11px] font-bold text-brand-accent bg-blue-50 border border-blue-100 px-2.5 py-0.5 rounded-md">
                            {item.buildingType}
                          </span>
                          <span className="text-[11px] text-gray-600 font-semibold bg-white border border-slate-200/80 px-2.5 py-0.5 rounded-md">
                            {badgeText}
                          </span>
                        </div>

                        {/* 2. 보조 사례 핵심 제목 */}
                        <h3 className="font-extrabold text-base sm:text-xl text-brand-primary mb-3 leading-snug break-keep">
                          {item.title}
                        </h3>

                        {/* 3. 현장 이미지 */}
                        {caseImageUrl && (
                          <div className="mb-3 overflow-hidden rounded-xl border border-slate-200/60 shadow-xs">
                            <SafeImage 
                              src={caseImageUrl} 
                              alt={item.alt || item.title} 
                              aspectRatioClassName="aspect-4/3" 
                              className={isVilla ? "object-top" : "object-center"}
                            />
                          </div>
                        )}

                        {/* 4. 핵심 결과 요약 (이미지 직후 1문장) */}
                        <div className="bg-white p-2.5 rounded-lg border border-slate-200/50 flex justify-between items-center text-xs">
                          <span className="text-gray-500 font-semibold">결과</span>
                          <span className="font-bold text-brand-accent">{item.result}</span>
                        </div>

                        {/* PC 노출: 진행 작업 요약 */}
                        <div className="hidden sm:block space-y-1.5 text-xs text-gray-600 bg-white p-3 rounded-lg border border-slate-200/50 mt-3">
                          <p><strong>진행 작업:</strong> {item.work}</p>
                        </div>

                        {/* 모바일 전용 접힘 세부정보 Accordion (과도한 구분선 수평선 제거하고 spacing으로 처리) */}
                        <details className="sm:hidden group mt-2.5">
                          <summary className="text-[11px] text-brand-accent font-bold cursor-pointer flex items-center justify-between list-none select-none py-1 px-0.5">
                            <span>원인 점검 및 시공 세부내역</span>
                            <svg className="w-3.5 h-3.5 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="mt-2 space-y-1.5 text-xs text-gray-600 bg-white p-2.5 rounded-lg border border-slate-200/50 leading-relaxed">
                            <p><strong>확인 증상:</strong> {item.symptom}</p>
                            <p><strong>점검 내용:</strong> {item.inspection}</p>
                            <p><strong>진행 작업:</strong> {item.work}</p>
                          </div>
                        </details>
                      </div>

                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* 4. 섹션 하단 공통 문의 CTA */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto bg-slate-900 text-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center shadow-lg border border-slate-800">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold mb-2.5 tracking-tight">
            비슷한 증상이 확인되나요?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6 max-w-xl mx-auto leading-relaxed">
            누수 위치와 건물 외부 사진을 보내주시면 우선 확인해야 할 부위를 안내해드립니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto">
            <a
              href={siteConfig.phoneHref}
              className="w-full sm:w-auto min-w-[180px] px-6 py-3.5 bg-brand-accent hover:bg-blue-600 text-white text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-xs"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>전화 상담 ({siteConfig.phoneNumber})</span>
            </a>
            <a
              href={siteConfig.kakaoChannelUrl || siteConfig.phoneHref}
              className="w-full sm:w-auto min-w-[180px] px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700 text-xs sm:text-sm font-bold rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>사진 문의</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
