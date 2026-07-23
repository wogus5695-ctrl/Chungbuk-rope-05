"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import ContactButton from "@/components/ContactButton";
import { imageSlots } from "@/config/imageSlots";
import { DetailedRegion } from "@/data/regions";
import { ServiceData } from "@/types";

interface LeakPathProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function LeakPath({ region, service }: LeakPathProps) {
  const regionName = region?.keywordName || "충북";
  const serviceName = service?.keyword || "빗물누수";

  // 기본값 할당 (메인 페이지 대비)
  const inspectionPoints = service?.inspectionPoints && service.inspectionPoints.length > 0
    ? service.inspectionPoints
    : ["창호 주변 외벽 균열", "기존 코킹 노후 파손", "콘크리트 층간 조인트 이격", "기초 배수 구멍 마모"];

  const workScope = service?.workScope && service.workScope.length > 0
    ? service.workScope
    : ["기존 실리콘 전면 절삭 제거", "접착력 증가용 특수 프라이머 도포", "창호 전용 우레탄 충진 및 압착", "외벽 크랙 퍼티 실링"];

  const cautionText = service?.cautionText || "실외 시공용이 아닌 일반 수성 실리콘으로 시공 시 수개월 내 수축으로 재누수가 생기니 주의해야 합니다.";

  // 아코디언 상세 기술 설명 데이터
  const technicalDescription = service
    ? `${regionName} 현장의 골조 변위와 샷시 팽창율을 고려하여 공사를 진행합니다. 
       노후된 코킹제를 긁어내지 않고 덧방하면 쉽게 들뜹니다. 
       틈새에 고밀도 단열 기밀 폼을 쏘아준 뒤 우수한 신축성을 가진 우레탄 실란트를 광폭으로 밀착 도포해 외부 요인을 완전히 밀폐합니다.`
    : "건물 외벽의 균열 진행 상태와 창문 프레임 이격 정도에 따라 최적의 자재와 기법을 선정합니다. 일반 코킹 덧바름은 하자의 주요 원인이므로 전면 제거 후 프라이머 도막 보강 처리를 통해 탄탄한 하부 방수를 완성합니다.";

  const imgInspection = imageSlots.serviceInspectionImage;
  const imgMethod = imageSlots.serviceWorkMethodImage;

  return (
    <section id="path" className="py-12 sm:py-16 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 섹션 헤더 (H2) */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            {region ? `${regionName} ${serviceName} 점검 부위 및 해결` : "점검 부위와 해결 방식"}
          </h2>
          <p className="mt-2 text-xs xs:text-sm text-gray-500 leading-relaxed">
            원인을 명확히 진단하고, 확실한 규격 공정으로 물길을 차단합니다.
          </p>
        </div>

        {/* 메인 분석 콘텐츠 레이아웃 (이미지 유무에 따른 자연스러운 텍스트 중심 전환 구조) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          
          {/* 좌측: 점검 및 작업 범위 텍스트 블록 (항상 노출) */}
          <div className={`col-span-1 ${imgInspection || imgMethod ? "lg:col-span-7" : "lg:col-span-12"} space-y-6`}>
            
            {/* 점검 대상 */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs">
              <h3 className="text-sm xs:text-base font-bold text-brand-primary mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-brand-accent rounded-full"></span>
                주요 점검 대상 부위
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs xs:text-sm text-gray-600">
                {inspectionPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 py-0.5">
                    <span className="text-brand-accent font-extrabold">✓</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 작업 범위 */}
            <div className="bg-white p-5 rounded-xl border border-slate-100 shadow-xs">
              <h3 className="text-sm xs:text-base font-bold text-brand-primary mb-3 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-brand-accent rounded-full"></span>
                핵심 작업 범위
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs xs:text-sm text-gray-600">
                {workScope.map((ws, idx) => (
                  <li key={idx} className="flex items-start gap-1.5 py-0.5">
                    <span className="text-brand-accent font-extrabold">▶</span>
                    <span>{ws}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 작업 전 주의사항 (주의사항 강조) */}
            <div className="bg-red-50/50 p-5 rounded-xl border border-red-100/60">
              <h3 className="text-xs xs:text-sm font-bold text-red-900 mb-2 flex items-center gap-1.5">
                <svg className="w-4 h-4 text-red-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                시공 전 필수 주의사항
              </h3>
              <p className="text-xs xs:text-sm text-red-800 leading-relaxed">
                {cautionText}
              </p>
            </div>

            {/* 9단계: 아코디언 상세 기술 설명 (details/summary 적용하여 초기 HTML 노출 보장) */}
            <details className="bg-white rounded-xl border border-slate-100 shadow-xs group transition-all">
              <summary className="font-bold text-xs xs:text-sm text-brand-primary p-4 cursor-pointer list-none flex items-center justify-between select-none">
                <span>자세한 기술 시공 방법 보기</span>
                <span className="text-xs text-brand-accent font-semibold group-open:hidden">펼치기 ▼</span>
                <span className="text-xs text-gray-400 font-semibold hidden group-open:inline">접기 ▲</span>
              </summary>
              <div className="px-4 pb-4 pt-1 border-t border-slate-50 text-xs xs:text-sm text-gray-600 leading-relaxed">
                <p className="mb-2">
                  {technicalDescription}
                </p>
                <p className="text-gray-400 text-[11px]">
                  * 본 보수 설명은 {regionName} 지역 건물 특성에 근거하여 작성된 기밀 시공 표준 매뉴얼입니다.
                </p>
              </div>
            </details>

          </div>

          {/* 우측: 독립 이미지 슬롯 연동 (이미지 2종 렌더링 / 없을 땐 컬럼을 차지하지 않고 텍스트 중심으로 자동 확장) */}
          {(imgInspection || imgMethod) && (
            <div className="col-span-1 lg:col-span-5 flex flex-col gap-4">
              {imgInspection && (
                <div>
                  <div className="text-[10px] text-gray-400 font-bold mb-1">현장 정밀 점검 부위</div>
                  <SafeImage src={imgInspection} alt={`${regionName} ${serviceName} 정밀 점검`} aspectRatioClassName="aspect-[4/3]" />
                </div>
              )}
              {imgMethod && (
                <div>
                  <div className="text-[10px] text-gray-400 font-bold mb-1">표준 시공 방식 적용</div>
                  <SafeImage src={imgMethod} alt={`${regionName} ${serviceName} 표준 시공`} aspectRatioClassName="aspect-[4/3]" />
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
