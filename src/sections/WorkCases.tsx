"use client";

import React, { useState, useEffect, useRef } from "react";
import SafeImage from "@/components/SafeImage";
import { imageSlots } from "@/config/imageSlots";
import { ServiceData, DetailedRegion } from "@/types";

interface WorkCasesProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export interface WorkCaseItem {
  id: string;
  title: string;
  serviceTypes: string[];
  region?: string;
  buildingType: string;
  symptom: string;
  point: string;
  work: string;
  result: string;
  summary: string;
  beforeImg?: string | null;
  afterImg?: string | null;
}

// 13개 전체 작업명과 100% 매칭되는 표준 시공 사례 데이터셋
const masterCases: WorkCaseItem[] = [
  {
    id: "case-silicone-01",
    title: "창틀 노후 실리콘 전면 제거 및 고신축 코킹 시공",
    serviceTypes: ["창틀코킹", "창틀실리콘", "샷시실리콘", "창틀누수"],
    buildingType: "아파트",
    summary: "노후 삭은 실리콘 긁어냄 후 프라이머 도포 및 광폭 헤라 압착",
    symptom: "비바람 시 베란다 창틀 하단 도배지 젖음 현상",
    point: "자외선 경화로 외부 샷시 실리콘 틈새 균열 박리",
    work: "노후 실리콘 전면 칼 절삭 제거 후 우레탄 실란트 도포",
    result: "집중 호우 시에도 빗물 누수 차단 확인",
    beforeImg: imageSlots.case01BeforeImage,
    afterImg: imageSlots.case01AfterImage
  },
  {
    id: "case-exterior-01",
    title: "외벽 옹벽 균열 V-Cutting 및 탄성 퍼티 방수",
    serviceTypes: ["외벽누수", "외벽방수", "외벽크랙보수", "건물방수"],
    buildingType: "상가 빌딩",
    summary: "외벽 수직 균열 V-컷팅 홈파기 및 탄성 퍼티 충진",
    symptom: "외벽 틈새로 상층부 수분이 하층 천장으로 스며듦",
    point: "층간 옹벽 조인트의 세로 방향 크랙 유입로",
    work: "고공 로프 작업 통한 V-Cut 그라인딩 및 탄성 메움",
    result: "천장 수분 스며듦 차단 및 골조 강도 보강",
    beforeImg: imageSlots.case02BeforeImage,
    afterImg: imageSlots.case02AfterImage
  },
  {
    id: "case-roof-01",
    title: "지붕 아스팔트 슁글 밀착 고정 및 후레싱 기밀 시공",
    serviceTypes: ["지붕방수", "판넬방수", "빗물누수"],
    buildingType: "주택/빌라",
    summary: "슁글 이격 부틸 테이프 보강 및 용마루 마스틱 충진",
    symptom: "다락방 천장 및 탑층 물방울 낙수 현상",
    point: "지붕 슁글 유실 및 후레싱 이음매 빗물 유입",
    work: "지붕 전용 코팅 도막 피복 및 후레싱 실링",
    result: "탑층 낙수 현상 즉시 중단 및 피복 유지",
    beforeImg: imageSlots.case03BeforeImage,
    afterImg: imageSlots.case03AfterImage
  },
  {
    id: "case-rooftop-01",
    title: "옥상 바닥 슬래브 연삭 및 탄성 우레탄 3차 도포",
    serviceTypes: ["옥상방수", "우레탄방수", "건물방수"],
    buildingType: "상가 아파트",
    summary: "삭은 바닥 방수층 연삭 면갈이 후 하도·중도·상도 타설",
    symptom: "최상층 천장 빗물 고임 및 배수구 주변 수분 침투",
    point: "옥상 슬래브 거북이등 크랙 및 기존 도막 부풀어 오름",
    work: "바닥 바탕 연삭 가공 후 고탄성 우레탄 타설 마감",
    result: "옥상 바닥 고무 도막 방수막 형성 완료",
    beforeImg: imageSlots.case01BeforeImage,
    afterImg: imageSlots.case01AfterImage
  },
  {
    id: "case-panel-01",
    title: "조립식 판넬 이음부 부틸 시트 및 볼트 전용 캡 방수",
    serviceTypes: ["판넬방수", "지붕방수", "빗물누수"],
    buildingType: "공장/창고",
    summary: "판넬 지붕 나사못 전수 캡 충진 및 용마루 부틸 실링",
    symptom: "강풍 폭우 시 공장 지붕 볼트 구멍 빗물 낙수",
    point: "판넬 결속 나사 고무 와셔 부식 및 열팽창 수축 틈새",
    work: "볼트 헤드 녹 제거 후 볼트 캡 충진 및 씰 마스틱 마감",
    result: "공장 지붕 볼트 빗물 낙수 차단 완료",
    beforeImg: imageSlots.case02BeforeImage,
    afterImg: imageSlots.case02AfterImage
  },
  {
    id: "case-rain-01",
    title: "비바람 들이침 빗물 유입로 3중 기밀 밀봉 시공",
    serviceTypes: ["빗물누수", "창틀누수", "외벽누수"],
    buildingType: "아파트/빌라",
    summary: "바람 방향 고려 샷시 및 외벽 조인트 3중 침투 차단",
    symptom: "태풍 및 강풍 빗물 들이침 시 창틀 하부 스며듦",
    point: "풍압에 의한 외벽 미세 틈새 빗물 역류 유입",
    work: "외벽 침투 방수 및 창호 주변 전용 실란트 도포",
    result: "태풍 및 폭우 시 빗물 스며듦 차단 확인",
    beforeImg: imageSlots.case03BeforeImage,
    afterImg: imageSlots.case03AfterImage
  }
];

export default function WorkCases({ region, service }: WorkCasesProps) {
  const regionName = region?.keywordName || "충북";
  const serviceKeyword = service?.keyword || "빗물누수";
  const isDynamic = !!region && !!service;

  // 작업명별 시공 사례 필터링 및 우선순위 정렬
  const exactMatches = masterCases.filter(c => c.serviceTypes.includes(serviceKeyword));
  const relatedMatches = masterCases.filter(c => !c.serviceTypes.includes(serviceKeyword));
  
  // 최종 3개 사례 확정 (중복 ID 0개 보장)
  const displayCases = [...exactMatches, ...relatedMatches].slice(0, 3);

  // 표시 문구 결정 헬퍼 (실제 작업 사례 vs 동일 작업 사례 vs 유사 작업 사례)
  const getBadgeLabel = (item: WorkCaseItem) => {
    const isExactService = item.serviceTypes.includes(serviceKeyword);
    const isExactRegion = item.region === regionName;

    if (isExactService && isExactRegion) {
      return "실제 작업 사례";
    }
    if (isExactService) {
      return "동일 작업 사례";
    }
    return "유사 작업 사례";
  };

  return (
    <section id="cases" className="py-12 sm:py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 섹션 헤더 */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            {isDynamic ? `${serviceKeyword} 시공 사례` : "레인가드 현장 시공 사례"}
          </h2>
          <p className="mt-2 text-xs xs:text-sm text-gray-500 leading-relaxed">
            {isDynamic 
              ? `${regionName} 지역 고객님의 의사결정을 돕는 ${serviceKeyword} 전문 시공 사례입니다.`
              : "충북 전역 아파트, 빌라, 상가 건물의 신뢰할 수 있는 완공 기록을 소개합니다."}
          </p>
        </div>

        {/* DOM 중복 렌더링 없는 단일 응답형 3열 격자 레이아웃 */}
        <div className="max-w-5xl mx-auto mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayCases.map((item) => {
              const hasImages = !!item.beforeImg || !!item.afterImg;
              const badgeText = getBadgeLabel(item);

              return (
                <div 
                  key={item.id}
                  className="bg-slate-50 border border-slate-200/70 rounded-2xl p-5 sm:p-6 flex flex-col justify-between hover:shadow-xs transition-shadow min-h-[420px]"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold text-brand-accent bg-blue-50 px-2 py-0.5 rounded-md">
                        {item.buildingType}
                      </span>
                      <span className="text-[10px] text-gray-500 font-semibold bg-gray-100 px-2 py-0.5 rounded-md">
                        {badgeText}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-sm xs:text-base text-brand-primary mb-3 leading-snug">
                      {item.title}
                    </h3>

                    {/* 비포/애프터 이미지 */}
                    {hasImages && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {item.beforeImg && (
                          <div>
                            <div className="text-[9px] text-gray-400 font-bold mb-0.5">시공 전 (Before)</div>
                            <SafeImage src={item.beforeImg} alt={`${item.title} 시공 전`} aspectRatioClassName="aspect-square" />
                          </div>
                        )}
                        {item.afterImg && (
                          <div>
                            <div className="text-[9px] text-brand-accent font-bold mb-0.5">시공 후 (After)</div>
                            <SafeImage src={item.afterImg} alt={`${item.title} 시공 후`} aspectRatioClassName="aspect-square" />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-1.5 text-xs text-gray-600">
                      <p><strong>의심 증상:</strong> {item.symptom}</p>
                      <p><strong>점검 원인:</strong> {item.point}</p>
                      <p><strong>시공 작업:</strong> {item.work}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/60 flex justify-between items-center text-xs">
                    <span className="text-gray-400">결과</span>
                    <span className="font-bold text-brand-accent">{item.result}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
