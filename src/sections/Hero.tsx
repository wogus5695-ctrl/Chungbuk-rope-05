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
      return `${region.keywordName} ${service.keyword} 상담`;
    }
    return "충북 창틀·누수·방수 현장 상담";
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

    const kw = service.keyword;
    const reg = region.keywordName;

    let suffix = "유입 원인부터 확인합니다";

    if (["창틀누수", "빗물누수", "외벽누수"].includes(kw)) {
      suffix = "누수 원인부터 확인합니다";
    } else if (["창틀코킹", "창틀실리콘", "샷시실리콘"].includes(kw)) {
      suffix = "노후 상태부터 확인합니다";
    } else if (["외벽방수", "건물방수"].includes(kw)) {
      suffix = "취약 부위부터 확인합니다";
    } else if (["옥상방수", "우레탄방수"].includes(kw)) {
      suffix = "방수층 상태부터 확인합니다";
    } else if (["지붕방수", "판넬방수"].includes(kw)) {
      suffix = "이음부부터 점검합니다";
    } else if (kw === "외벽크랙보수") {
      suffix = "균열 상태부터 확인합니다";
    }

    return (
      <>
        {reg} {kw},<br />
        <span className="text-brand-accent">{suffix}</span>
      </>
    );
  };

  const getDescription = () => {
    if (!isDynamic) {
      return "창틀 실리콘과 외벽 균열, 방수층 상태를 함께 확인해 필요한 보수 범위를 안내합니다.";
    }

    const kw = service.keyword;

    switch (kw) {
      case "창틀코킹":
        return "노후 실리콘과 창틀 접합부를 점검해 필요한 보수 범위를 안내합니다.";
      case "창틀실리콘":
      case "샷시실리콘":
        return "갈라진 실리콘과 창틀 접합부를 점검해 필요한 시공 범위를 안내합니다.";
      case "창틀누수":
        return "창틀과 외벽 접합부를 함께 확인해 누수 가능 부위와 보수 범위를 안내합니다.";
      case "빗물누수":
        return "물자국과 외부 취약 부위를 점검해 빗물 유입 가능 지점을 확인합니다.";
      case "외벽누수":
        return "외벽 균열과 접합부 상태를 점검해 누수 원인과 보수 범위를 확인합니다.";
      case "외벽방수":
        return "외벽 균열과 노후 부위를 점검해 필요한 방수 범위를 안내합니다.";
      case "건물방수":
        return "옥상·외벽·접합부의 취약 부위를 확인해 필요한 방수 작업을 안내합니다.";
      case "옥상방수":
        return "기존 방수층과 균열, 배수 상태를 점검해 필요한 작업 범위를 안내합니다.";
      case "우레탄방수":
        return "방수층의 들뜸과 균열, 바탕면 상태를 확인해 필요한 우레탄 시공 범위를 안내합니다.";
      case "지붕방수":
        return "지붕재와 접합부, 배수 부위를 점검해 누수 취약 지점을 확인합니다.";
      case "판넬방수":
        return "판넬 이음부와 볼트, 실란트 상태를 점검해 필요한 방수 범위를 안내합니다.";
      case "외벽크랙보수":
        return "균열의 폭과 진행 상태를 확인해 필요한 보수 범위를 안내합니다.";
      default:
        return "현장 상태와 접합부 결함을 점검해 필요한 보수 범위를 안내합니다.";
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-[460px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[620px] flex items-center justify-start overflow-hidden bg-slate-950 w-full"
    >
      
      {/* 독립 배경 이미지 레이어 */}
      {desktopBg && (
        <div 
          className="absolute inset-0 hidden md:block bg-cover pointer-events-none opacity-85 z-0" 
          style={{ 
            backgroundImage: `url(${desktopBg})`,
            backgroundPosition: "left 20% center"
          }}
        />
      )}
      {mobileBg && (
        <div 
          className="absolute inset-0 block md:hidden bg-cover pointer-events-none opacity-80 z-0" 
          style={{ 
            backgroundImage: `url(${mobileBg})`,
            backgroundPosition: "left 10% center" // 모바일화면 작업자 및 구도 최적화
          }}
        />
      )}

      {/* 모바일/PC 어두운 오버레이 레이어 (모바일 텍스트 가독성 최우선 확보 수평/수직 그라데이션) */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/40 md:from-slate-950/80 md:via-slate-950/50 md:to-transparent z-10" />
      <div className="absolute inset-0 block md:hidden bg-gradient-to-b from-slate-950/50 via-transparent to-slate-950/80 z-10" />

      {/* 본문 콘텐츠 */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 relative z-20 py-12 sm:py-16 md:py-20 lg:py-24">
        
        <div className="max-w-xl text-left">
          
          {/* 보조 문구 */}
          <span className="inline-block px-3 py-1 text-[12px] sm:text-[13px] font-bold text-brand-accent bg-blue-950/90 border border-brand-accent/30 rounded-full mb-3.5 sm:mb-4 tracking-tight">
            {getSubTitle()}
          </span>
          
          {/* H1 메인 타이틀 (단일 H1 요소로 반응형 타이포그래피 구현) */}
          <h1 className="text-[31px] xs:text-[32px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-[800] text-white leading-[1.14] sm:leading-[1.16] tracking-[-0.035em] mb-4 select-none break-keep">
            {getH1Title()}
          </h1>
          
          {/* 설명글 (PC 1.55 / MO 1.5, 간결한 비추상적 문구) */}
          <p className="text-[15px] sm:text-[16px] text-gray-200 leading-[1.5] sm:leading-[1.6] tracking-[-0.015em] max-w-lg mb-6 sm:mb-8 line-clamp-3 font-normal">
            {getDescription()}
          </p>
          
          {/* CTA 버튼 그룹 */}
          <div className="flex flex-row gap-2.5 sm:gap-3.5 w-full sm:w-auto items-center">
            <ContactButton 
              type="phone" 
              variant="primary" 
              aria-label="전화로 증상 상담하기"
              className="inline-flex items-center justify-center px-4 sm:px-6 h-[50px] sm:h-[52px] bg-brand-accent hover:bg-brand-accent-hover text-white text-[15px] sm:text-[16px] font-bold rounded-lg transition-colors cursor-pointer flex-1 sm:flex-initial shadow-md whitespace-nowrap"
            >
              <span className="block sm:hidden">전화 상담</span>
              <span className="hidden sm:block">전화로 증상 상담</span>
            </ContactButton>
            
            <ContactButton 
              type="kakao" 
              variant="secondary" 
              aria-label="카카오톡으로 현장 사진 문의하기"
              className="inline-flex items-center justify-center px-4 sm:px-6 h-[50px] sm:h-[52px] bg-white hover:bg-gray-50 text-slate-900 text-[15px] sm:text-[16px] font-bold border border-slate-200 rounded-lg transition-colors cursor-pointer flex-1 sm:flex-initial shadow-sm whitespace-nowrap"
            >
              <span className="block sm:hidden">사진 문의</span>
              <span className="hidden sm:block">카카오톡으로 사진 보내기</span>
            </ContactButton>
          </div>

        </div>
      </div>

    </section>
  );
}
