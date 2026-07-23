"use client";

import React from "react";
import { imageSlots } from "@/config/imageSlots";
import { getServiceProcess } from "@/data/serviceProcess";
import { ServiceData, DetailedRegion } from "@/types";

interface WorkProcessProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

// 데이터 아이콘 키에 따른 Inline SVG 렌더링 헬퍼 함수
function renderStepIcon(iconKey: string) {
  switch (iconKey) {
    case "water":
    case "water-repellent":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "clean":
    case "wash":
    case "grind":
    case "blade":
    case "cutter":
    case "degrease":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      );
    case "sealant":
    case "gun":
    case "foam":
    case "tape":
    case "seal":
    case "butyl":
    case "mortar":
    case "bolt-cap":
    case "vcut":
    case "crack-fill":
    case "inject":
    case "repair":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M11 4a2 2 0 114 0v1a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h8zM4 11h16m-10 4h10m-5 4h5" />
        </svg>
      );
    case "shield-check":
    case "shield":
    case "coat":
    case "layer":
    case "protect":
    case "spray":
    case "top-coat":
    case "flashing":
    case "paint-finish":
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case "search":
    case "search-location":
    case "crack-scan":
    case "rope":
    case "wind":
    case "check":
    case "frame":
    case "building":
    case "roof":
    case "surface":
    case "panel":
    default:
      return (
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brand-accent" aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      );
  }
}

export default function WorkProcess({ region, service }: WorkProcessProps) {
  // 1. 현재 서비스 키워드에 해당하는 3단계 공정 데이터 조회
  const serviceKeyword = service?.keyword || "창틀코킹";
  const processData = getServiceProcess(serviceKeyword);

  // 2. 데이터 누락 시 안전한 처리 (개발환경 경고 + 공개화면 섹션 숨김)
  if (!processData) {
    return null;
  }

  // 3. 전용 배경 이미지 슬롯
  const desktopBg = imageSlots.workProcessBackgroundDesktop;
  const mobileBg = imageSlots.workProcessBackgroundMobile;

  const regionName = region?.keywordName || "충북";

  return (
    <section id="process" className="relative py-16 sm:py-24 w-full overflow-hidden bg-slate-950 text-white">
      
      {/* 배경 이미지 레이어 (이미지가 있을 때만 노출) */}
      {desktopBg && (
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center pointer-events-none opacity-85 z-0"
          style={{ backgroundImage: `url(${desktopBg})` }}
        />
      )}
      {mobileBg && (
        <div 
          className="absolute inset-0 block md:hidden bg-cover bg-center pointer-events-none opacity-80 z-0"
          style={{ backgroundImage: `url(${mobileBg})` }}
        />
      )}

      {/* 브랜드 그라데이션 및 어두운 오버레이 레이어 (명도 대비 텍스트 가독성 확보) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/80 z-10" />

      {/* 본문 콘텐츠 Container */}
      <div className="relative z-20 max-w-[1140px] mx-auto px-4 sm:px-6">
        
        {/* 상단 헤더 영역 */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <span className="inline-block px-3.5 py-1 text-xs font-bold text-brand-accent bg-blue-950/80 border border-brand-accent/30 rounded-full mb-3 tracking-tight">
            {processData.eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {region ? `${regionName} ${processData.title}` : processData.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 leading-relaxed">
            {processData.description}
          </p>
        </div>

        {/* [모바일 레이아웃] 세로형 타임라인 구조 (360px, 375px, 390px, 412px 대응) */}
        <div className="block md:hidden relative pl-6 space-y-9">
          
          {/* 세로 연결선 (좌측 16px 위치, 01~03 연속 연결) */}
          <div className="absolute top-4 bottom-6 left-[21px] w-[2px] bg-gradient-to-b from-brand-accent via-brand-accent/60 to-slate-700/40 z-0" />

          {processData.steps.map((step, idx) => {
            return (
              <div key={idx} className="relative z-10 flex flex-col items-start pl-4">
                
                {/* 1행: 큰 숫자 + 아이콘 뱃지 인접 배치 (좌측 연결선 바로 옆) */}
                <div className="flex items-center gap-3 mb-2.5">
                  <span className="text-3xl font-black text-brand-accent tracking-tighter select-none font-mono">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {renderStepIcon(step.icon)}
                  </div>
                </div>

                {/* 2행: 단계 제목 (최대 2줄, 18~20px) */}
                <h3 className="text-lg font-bold text-white mb-2 leading-snug tracking-tight">
                  {step.title}
                </h3>

                {/* 3행: 단계 설명 (최대 3~4줄, 14~15px) */}
                <p className="text-sm text-gray-300 leading-relaxed mb-3 line-clamp-4">
                  {step.description}
                </p>

                {/* 4행: 주요 포인트 하이라이트 태그 (모바일 전용 간결 배치) */}
                {step.highlights && step.highlights.length > 0 && (
                  <ul className="space-y-1">
                    {step.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/80 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            );
          })}

        </div>

        {/* [PC 레이아웃] 가로 타임라인 3단계 구조 (카드 테두리/흰색 박스 완전 제거) */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 relative items-start">
          
          {processData.steps.map((step, idx) => {
            const isLast = idx === processData.steps.length - 1;

            return (
              <div key={idx} className="relative flex flex-col items-start pr-4">
                
                {/* 3단계 사이 가로 연결선 (마지막 단계 제외) */}
                {!isLast && (
                  <div className="absolute top-7 left-[35%] right-[-10%] h-[2px] bg-gradient-to-r from-brand-accent/80 via-brand-accent/40 to-slate-700/50 z-0" />
                )}

                {/* 1열: 큰 숫자 & 아이콘 뱃지 */}
                <div className="flex items-center gap-3.5 mb-5 relative z-10">
                  <span className="text-4xl lg:text-5xl font-black text-brand-accent tracking-tighter select-none font-mono">
                    {step.number}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center shadow-inner">
                    {renderStepIcon(step.icon)}
                  </div>
                </div>

                {/* 2열: 단계 제목 (20~24px) */}
                <h3 className="text-xl lg:text-[22px] font-bold text-white mb-3 tracking-tight leading-snug">
                  {step.title}
                </h3>

                {/* 3열: 설명 (15~17px, 2문장 이내) */}
                <p className="text-[15px] lg:text-[16px] text-gray-300 leading-relaxed mb-4">
                  {step.description}
                </p>

                {/* 4열: 주요 포인트 하이라이트 태그 */}
                {step.highlights && step.highlights.length > 0 && (
                  <ul className="space-y-1.5 pt-1">
                    {step.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2 text-xs text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent/80 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

              </div>
            );
          })}

        </div>

        {/* 하단 유의사항 Notice */}
        {processData.notice && (
          <div className="mt-14 sm:mt-16 text-center border-t border-slate-800/80 pt-6">
            <p className="text-xs sm:text-sm text-gray-400 flex items-center justify-center gap-1.5">
              <svg className="w-4 h-4 text-brand-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{processData.notice}</span>
            </p>
          </div>
        )}

      </div>
    </section>
  );
}
