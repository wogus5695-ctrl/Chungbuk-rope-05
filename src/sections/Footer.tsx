"use client";

import React from "react";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import ContactButton from "@/components/ContactButton";
import { regionsData } from "@/data/regions";
import { servicesData } from "@/data/services";
import { imageSlots } from "@/config/imageSlots";
import { ServiceData, DetailedRegion } from "@/types";

interface FooterProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function Footer({ region, service }: FooterProps) {
  const {
    branchName,
    businessName,
    representativeName,
    businessRegistrationNumber,
    address,
    privacyPolicyUrl,
    copyrightText
  } = siteConfig;

  const regionName = region?.keywordName || "충북";
  const serviceName = service?.keyword || "빗물누수";
  const isDynamic = !!region && !!service;

  // 11단계: 최종 CTA 문구 및 배경 이미지 슬롯 단독 연동
  const getCtaTitle = () => {
    if (isDynamic) {
      return `${regionName} ${serviceName}, 증상이 반복된다면 유입 가능 부위를 먼저 확인하세요.`;
    }
    return "충청북도 빗물누수·창틀코킹, 증상이 반복된다면 원인부터 확인하세요.";
  };

  const finalCtaBg = imageSlots.finalCtaBackgroundImage;

  // 관련 내부 링크 동적 생성 (6~10개 제한)
  const renderRegionLinks = () => {
    // 공통 URL 생성 헬퍼
    const getUrl = (regionKeyword: string, serviceKeyword: string) => {
      return `/?k=${encodeURIComponent(`${regionKeyword}-${serviceKeyword}`)}`;
    };

    if (!isDynamic) {
      // 메인 페이지일 때: 최상위 시/군 정식 명칭 10개 출력 (청주시, 충주시, 제천시, 대전시, 세종시 및 대표 군)
      const primaryRegions = regionsData
        .filter(r => r.parentId === null && (r.keywordName.endsWith("시") || r.keywordName.endsWith("군")))
        .slice(0, 10);
        
      return (
        <div className="mt-8 border-t border-gray-800/60 pt-6">
          <span className="text-xs text-gray-500 font-semibold block mb-3">충북·대전·세종 전 지역 빗물누수·코킹 서비스 네트워크</span>
          <div className="flex flex-wrap gap-2 text-xs">
            {primaryRegions.map((r, idx) => (
              <a 
                key={idx}
                href={getUrl(r.keywordName, "빗물누수")}
                className="bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-gray-800/80 transition-colors"
              >
                {r.keywordName} 빗물누수
              </a>
            ))}
          </div>
        </div>
      );
    }

    const links: React.ReactNode[] = [];
    
    // 1. 같은 상위 구/시/군 아래에 속하며 동일한 regionType(동은 동끼리, 읍면은 읍면끼리)을 가진 실제 인접 형제 지역 링크 (최대 5개)
    const sameTypeSiblings = regionsData
      .filter(r => r.parentId === region.parentId && r.id !== region.id && r.regionType === region.regionType && r.isActive)
      .slice(0, 5);

    sameTypeSiblings.forEach((sib) => {
      links.push(
        <a 
          key={`sib-${sib.id}`}
          href={getUrl(sib.keywordName, serviceName)}
          className="bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-gray-800/80 transition-colors"
        >
          {sib.displayName} {serviceName}
        </a>
      );
    });

    // 2. 만약 동일 유형 형제 지역이 부족하다면, 같은 부모의 다른 유형 지역 링크 보충
    if (links.length < 5) {
      const otherTypeSiblings = regionsData
        .filter(r => r.parentId === region.parentId && r.id !== region.id && r.regionType !== region.regionType && r.isActive)
        .slice(0, 5 - links.length);

      otherTypeSiblings.forEach((ots) => {
        links.push(
          <a 
            key={`ots-${ots.id}`}
            href={getUrl(ots.keywordName, serviceName)}
            className="bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-gray-800/80 transition-colors"
          >
            {ots.displayName} {serviceName}
          </a>
        );
      });
    }

    // 3. 같은 지역(displayName)의 다른 추천 작업명 연동 링크 (4개)
    const otherServices = servicesData
      .filter(s => s.keyword !== serviceName)
      .slice(0, 4);

    otherServices.forEach((s) => {
      links.push(
        <a 
          key={`svc-${s.keyword}`}
          href={getUrl(region.keywordName, s.keyword)}
          className="bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white px-3 py-1.5 rounded-lg border border-gray-800/80 transition-colors"
        >
          {region.displayName} {s.keyword}
        </a>
      );
    });

    // 최종 6~10개 범위로 엄격 제한 컷오프
    const finalLinks = links.slice(0, 10);

    return (
      <div className="mt-8 border-t border-gray-800/60 pt-6">
        <span className="text-xs text-gray-500 font-semibold block mb-3">{regionName} 시공 지원 및 추천 네트워크</span>
        <div className="flex flex-wrap gap-2 text-xs">
          {finalLinks}
        </div>
      </div>
    );
  };

  return (
    <footer id="footer" className="bg-brand-primary text-gray-400 py-10 sm:py-14 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 11단계: 최종 CTA 영역 (배경 이미지 단독 연동, 없을 시 명품 그라데이션) */}
        <div 
          className="relative bg-gray-950 p-6 sm:p-10 rounded-2xl border border-gray-800/80 mb-10 overflow-hidden"
        >
          {finalCtaBg && (
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 pointer-events-none z-0" 
              style={{ backgroundImage: `url(${finalCtaBg})` }}
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/90 to-transparent z-10" />

          <div className="relative z-20 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-white text-base sm:text-lg lg:text-xl font-extrabold mb-2 tracking-tight">
                {getCtaTitle()}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 max-w-xl">
                전문 로프 시공팀의 밀착 진단과 확실한 사후 AS 보장을 약속드립니다. 사진을 함께 보내주시면 정확한 실시간 가견적 진단이 편리합니다.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              <ContactButton 
                type="phone" 
                variant="primary" 
                className="inline-flex items-center justify-center px-6 h-12 bg-brand-accent hover:bg-brand-accent-hover text-white text-[14px] font-bold rounded-lg transition-colors cursor-pointer w-full sm:w-auto shadow-md"
              >
                전화로 증상 상담
              </ContactButton>
              <ContactButton 
                type="kakao" 
                variant="secondary" 
                className="inline-flex items-center justify-center px-6 h-12 bg-white hover:bg-gray-50 text-gray-800 text-[14px] font-bold rounded-lg transition-colors cursor-pointer w-full sm:w-auto shadow-sm"
              >
                카카오톡으로 사진 보내기
              </ContactButton>
            </div>
          </div>
        </div>

        {/* 상단 레이아웃 (정보 요약) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-4">
          <div>
            <div className="text-white font-bold text-base mb-3">{branchName}</div>
            <p className="text-xs xs:text-sm text-gray-400 leading-relaxed max-w-sm">
              충북 전 지역 아파트/상가 창틀누수, 코킹 시공, 외벽 발수 전문. 로프 작업을 통한 안전하고 고품질의 시공을 제공합니다.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-6 md:justify-end">
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">전화 문의</span>
              <ContactButton type="phone" variant="text" className="text-sm font-semibold text-white hover:text-brand-accent transition-colors" />
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-xs text-gray-500 font-semibold uppercase tracking-wider">카카오톡 문의</span>
              <ContactButton type="kakao" variant="text" className="text-sm font-semibold text-brand-accent hover:underline transition-all" />
            </div>
          </div>
        </div>

        {/* 10단계: 동적 내부 링크 구조 렌더링 */}
        {renderRegionLinks()}

        {/* 사업자 정보 노출 영역 (공개 화면에서 undefined/null 방지) */}
        {(businessName || representativeName || businessRegistrationNumber || address) && (
          <div className="text-[11px] sm:text-xs text-gray-500 space-y-1 mt-8 mb-6 border-t border-gray-800/60 pt-6">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {businessName && <span>상호 : {businessName}</span>}
              {representativeName && <span>대표 : {representativeName}</span>}
              {businessRegistrationNumber && <span>사업자등록번호 : {businessRegistrationNumber}</span>}
            </div>
            {address && <p>주소 : {address}</p>}
          </div>
        )}

        {/* 구분선 */}
        <div className="border-t border-gray-800 my-6"></div>

        {/* 하단 저작권 및 주의사항 */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-xs text-gray-500">
          <p>{copyrightText}</p>
          <div className="flex gap-4">
            {privacyPolicyUrl && (
              <a href={privacyPolicyUrl} className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
