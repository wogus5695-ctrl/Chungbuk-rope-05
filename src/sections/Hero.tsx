"use client";

import React from "react";
import ContactButton from "@/components/ContactButton";
import { imageSlots } from "@/config/imageSlots";
import { ServiceData, DetailedRegion } from "@/types";

interface HeroProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function Hero({ region, service }: HeroProps) {
  const isDynamic = !!region && !!service;

  // 1. 이미지 슬롯 독립 매핑 (메인 vs 동적, PC vs MO 분리)
  const desktopBg = isDynamic ? imageSlots.dynamicHeroBackgroundDesktop : imageSlots.mainHeroBackgroundDesktop;
  const mobileBg = isDynamic ? imageSlots.dynamicHeroBackgroundMobile : imageSlots.mainHeroBackgroundMobile;

  // 2. 동적 텍스트 분기 처리
  const getSubTitle = () => {
    if (isDynamic) {
      return `${region.keywordName} 전 지역 ${service.keyword} 현장 상담`;
    }
    return "충북 전 지역 창틀·누수·방수 현장 상담";
  };

  const getH1Title = () => {
    if (!isDynamic) {
      return (
        <>
          충청북도 빗물누수·창틀코킹,<br />
          <span className="text-brand-accent">유입 원인부터 확인합니다</span>
        </>
      );
    }

    if (region.keywordName === "복대동" && service.keyword === "빗물누수") {
      return (
        <>
          복대동 빗물누수,<br />
          <span className="text-brand-accent">보이는 물자국보다 유입 지점을 확인해야 합니다</span>
        </>
      );
    }

    if (region.keywordName === "오창읍" && service.keyword === "판넬방수") {
      return (
        <>
          오창읍 판넬방수,<br />
          <span className="text-brand-accent">이음부와 체결부의 유입 지점을 확인합니다</span>
        </>
      );
    }

    // 일반 동적 페이지용 H1 타이틀
    return (
      <>
        {region.keywordName} {service.keyword},<br />
        <span className="text-brand-accent">유입 원인부터 확인합니다</span>
      </>
    );
  };

  const getDescription = () => {
    if (!isDynamic) {
      return "창틀 실리콘과 외벽 균열, 방수층 상태를 함께 확인해 필요한 보수 범위를 안내합니다.";
    }
    return `${region.keywordName} 지역의 구조적 특성과 기후 스트레스를 고려해 노화된 접합부와 미세 크랙을 추적하고 최적의 ${service.keyword} 공법을 제안합니다.`;
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[460px] sm:min-h-[520px] md:min-h-[600px] flex items-center justify-start overflow-hidden bg-slate-900 w-full"
    >
      
      {/* 3단계 & 8단계: 독립 배경 이미지 레이어 (PC / MO 분리 바인딩) */}
      {desktopBg && (
        <div 
          className="absolute inset-0 hidden md:block bg-cover bg-center pointer-events-none opacity-40 z-0" 
          style={{ 
            backgroundImage: `url(${desktopBg})`,
            backgroundPosition: "center 30%" // 텍스트가 주요 부위를 덜 가리도록 위치 분리
          }}
        />
      )}
      {mobileBg && (
        <div 
          className="absolute inset-0 block md:hidden bg-cover bg-center pointer-events-none opacity-30 z-0" 
          style={{ 
            backgroundImage: `url(${mobileBg})`,
            backgroundPosition: "center 40%"
          }}
        />
      )}

      {/* 이미지가 없을 때를 대비한 모던 브랜드 그라데이션 오버레이 (명도 대비 확보용 암막 효과 통합) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/90 to-transparent z-10" />

      {/* 본문 콘텐츠 (가로 스크롤 완전 방지) */}
      <div className="w-full max-w-7xl mx-auto px-4 relative z-20 py-16 sm:py-24">
        
        {/* 모바일 360px~390px 우선 레이아웃 설계 */}
        <div className="max-w-xl text-left">
          
          {/* 보조 문구 */}
          <span className="inline-block px-3 py-1 text-[11px] xs:text-xs font-bold text-brand-accent bg-blue-950/80 border border-brand-accent/30 rounded-full mb-4.5 tracking-tight">
            {getSubTitle()}
          </span>
          
          {/* H1 메인 타이틀 (최대 3줄 이내 설계) */}
          <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight mb-4 select-none">
            {getH1Title()}
          </div>
          
          {/* 설명글 (최대 3~4줄 설계) */}
          <p className="text-xs xs:text-sm sm:text-base text-gray-300 leading-relaxed max-w-lg mb-8 line-clamp-4">
            {getDescription()}
          </p>
          
          {/* CTA 버튼 그룹 (최소 높이 48px, 글꼴 15px 이상 모바일 최적화 규격 준수) */}
          <div className="flex flex-col xs:flex-row gap-3 w-full sm:w-auto">
            <ContactButton 
              type="phone" 
              variant="primary" 
              className="inline-flex items-center justify-center px-6 h-12 bg-brand-accent hover:bg-brand-accent-hover text-white text-[15px] font-bold rounded-lg transition-colors cursor-pointer w-full xs:w-auto shadow-md"
            >
              전화로 증상 상담
            </ContactButton>
            
            <ContactButton 
              type="kakao" 
              variant="secondary" 
              className="inline-flex items-center justify-center px-6 h-12 bg-white hover:bg-gray-50 text-slate-800 text-[15px] font-bold border border-slate-200 rounded-lg transition-colors cursor-pointer w-full xs:w-auto shadow-sm"
            >
              카카오톡으로 사진 보내기
            </ContactButton>
          </div>

        </div>
      </div>

    </section>
  );
}
