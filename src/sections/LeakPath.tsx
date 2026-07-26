"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import { imageSlots } from "@/config/imageSlots";
import { ServiceData, DetailedRegion } from "@/types";
import { leakPathData } from "@/data/leakPath";

interface LeakPathProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function LeakPath({ region, service }: LeakPathProps) {
  const regionName = region?.keywordName || "충북";
  const serviceName = service?.keyword || "빗물누수";

  // 1. 작업명별 전용 데이터 조회 (Fallback 없이 null 안전 반환)
  const data = service ? leakPathData[service.keyword] : leakPathData["빗물누수"];

  // 데이터 누락 시 안전하게 섹션 숨김 (다른 작업 문구 혼입 원천 차단)
  if (service && !data) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`[LeakPath] Missing leakPath data for service: "${service.keyword}"`);
    }
    return null;
  }

  const activeData = data || leakPathData["빗물누수"];

  const sectionTitle = region
    ? activeData.sectionTitle.replace("{region}", regionName)
    : "점검 부위와 해결 방식";

  const sectionDescription = activeData.sectionDescription;
  const inspectionPoints = activeData.inspectionPoints;
  const workScope = activeData.workScope;
  const cautionText = activeData.cautionText;
  const technicalDescription = activeData.technicalDescription;

  // 권역별 지역 문구 처리 (충북/대전/세종)
  const provinceRegionText = region
    ? region.provinceGroup === "daejeon"
      ? "대전 지역"
      : region.provinceGroup === "sejong"
      ? "세종 지역"
      : "충북 지역"
    : "충북 지역";

  const imgInspection = imageSlots.serviceInspectionImage;
  const imgMethod = imageSlots.serviceWorkMethodImage;

  return (
    <section id="path" className="py-12 sm:py-16 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 섹션 헤더 (H2) */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            {sectionTitle}
          </h2>
          <p className="mt-2 text-xs xs:text-sm text-gray-500 leading-relaxed">
            {sectionDescription}
          </p>
        </div>

        {/* 메인 분석 콘텐츠 레이아웃 */}
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

            {/* 시공 전 필수 주의사항 */}
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

            {/* 아코디언 상세 기술 설명 */}
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
                  * 본 보수 설명은 {provinceRegionText} 건물 특성에 근거하여 작성된 기밀 시공 표준 매뉴얼입니다.
                </p>
              </div>
            </details>

          </div>

          {/* 우측: 독립 이미지 슬롯 연동 */}
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
