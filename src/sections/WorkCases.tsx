"use client";

import React, { useState, useEffect, useRef } from "react";
import SafeImage from "@/components/SafeImage";
import { imageSlots } from "@/config/imageSlots";
import { ServiceData, DetailedRegion } from "@/types";

interface WorkCasesProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function WorkCases({ region, service }: WorkCasesProps) {
  const regionName = region?.keywordName || "충북";
  const serviceName = service?.keyword || "빗물누수";
  const isDynamic = !!region && !!service;

  // 1. 현장 사례 카드 데이터 세팅
  const casesData = [
    {
      title: "창틀 노후 실리콘 전체 제거 후 재코킹",
      buildingType: "아파트",
      symptom: "비만 오면 베란다 앞뒤 창가 도배지가 젖어들어가는 현상",
      point: "자외선 노출로 외부 샷시 실리콘이 경화되어 콘크리트 틈새 박리",
      work: "노후 실리콘 전면 칼 제거 후 프라이머 도포 및 친환경 창호 우레탄 실란트 도포",
      result: "시공 후 3차례의 집중 호우 시에도 물 샘 증상 완벽 차단 완료",
      beforeImg: imageSlots.case01BeforeImage,
      afterImg: imageSlots.case01AfterImage
    },
    {
      title: "외벽 크랙 보수 및 창틀 방수 코킹",
      buildingType: "상가 빌딩",
      symptom: "비가 올 때 상층부 외벽 틈새를 타고 아래층 천장 누수 발생",
      point: "상가 외벽 층간 옹벽 조인트의 세로 방향 균열 폭 확대",
      work: "고공 로프 작업을 통한 균열 V-Cutting, 충진 퍼티 보강 및 탄성 도막 방수 마감",
      result: "천장 누수 해결 및 건물 외벽 균열 결속력 강화",
      beforeImg: imageSlots.case02BeforeImage,
      afterImg: imageSlots.case02AfterImage
    },
    {
      title: "지붕 아스팔트 슁글 및 배수로 보수",
      buildingType: "주택/빌라",
      symptom: "다락방 천장에서 물방울이 한 방울씩 낙하하고 곰팡이 유발",
      point: "아스팔트 슁글 일부 유실 및 지붕 물받이 선홈통 이물질 적체로 역류",
      work: "부틸 시트 지붕 기밀 방수 및 PVC 물받이 드레인 관통부 실링 보강",
      result: "낙수 현상 즉시 종료 및 노후 지붕 방수 피복 수명 연장",
      beforeImg: imageSlots.case03BeforeImage,
      afterImg: imageSlots.case03AfterImage
    }
  ];

  // 2. 모바일 스와이프 슬라이더 상태
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  // 미디어 쿼리 감지용 prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== "undefined") {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    }
    return false;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // 자동 슬라이드 동작 (4초 간격, prefers-reduced-motion 시 정지)
  useEffect(() => {
    if (prefersReducedMotion || isPaused) {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
      return;
    }

    autoPlayRef.current = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % casesData.length);
    }, 4500); // 4초 미만 롤링 차단 (4.5초)

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [prefersReducedMotion, isPaused, casesData.length]);

  return (
    <section id="cases" className="py-12 sm:py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 10단계: 섹션 4 - 현장 사례 */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            {isDynamic ? `${serviceName} 시공 사례` : "레인가드 현장 시공 사례"}
          </h2>
          <p className="mt-2 text-xs xs:text-sm text-gray-500 leading-relaxed">
            {isDynamic 
              ? `${regionName} 지역 고객님의 의사결정을 돕는 유사 방수/코킹 작업 사례 목록입니다.`
              : "충북 전역 아파트, 빌라, 상가 건물의 신뢰할 수 있는 완공 기록을 소개합니다."}
          </p>
        </div>

        {/* 사례 슬라이더 영역 (모바일 스와이프 레이아웃 / PC 3열 정렬) */}
        <div 
          className="relative max-w-5xl mx-auto mb-16"
          onTouchStart={() => setIsPaused(true)}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* 모바일: 가로 슬라이더 구조 (1개 노출 + 다음 카드 일부 슬쩍 노출) */}
          <div className="block md:hidden overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIdx * 88}%)` }}
            >
              {casesData.map((item, idx) => {
                const hasImages = !!item.beforeImg || !!item.afterImg;
                
                return (
                  <div 
                    key={idx}
                    className="w-[88%] shrink-0 pr-4 transition-all duration-300"
                  >
                    <div className="bg-slate-50 border border-slate-100/80 rounded-2xl p-5 shadow-xs flex flex-col justify-between min-h-[380px]">
                      <div>
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-[10px] font-bold text-brand-accent bg-blue-50 px-2 py-0.5 rounded-md">
                            {item.buildingType}
                          </span>
                          <span className="text-[10px] text-gray-400 font-semibold">
                            {isDynamic ? `${serviceName} 유사 작업 사례` : `${regionName} 실제 시공 사례`}
                          </span>
                        </div>

                        <h3 className="font-extrabold text-sm xs:text-base text-brand-primary mb-4">
                          {item.title}
                        </h3>

                        {/* 비포/애프터 이미지 (없을 시 숨김) */}
                        {hasImages && (
                          <div className="grid grid-cols-2 gap-2 mb-4">
                            {item.beforeImg && (
                              <div>
                                <div className="text-[9px] text-gray-400 font-bold mb-0.5">시공 전 (Before)</div>
                                <SafeImage src={item.beforeImg} alt={`${regionName} ${serviceName} 사례 시공 전`} aspectRatioClassName="aspect-square" />
                              </div>
                            )}
                            {item.afterImg && (
                              <div>
                                <div className="text-[9px] text-brand-accent font-bold mb-0.5">시공 후 (After)</div>
                                <SafeImage src={item.afterImg} alt={`${regionName} ${serviceName} 사례 시공 후`} aspectRatioClassName="aspect-square" />
                              </div>
                            )}
                          </div>
                        )}

                        <div className="space-y-1.5 text-xs text-gray-600">
                          <p><strong>의심 증상 :</strong> {item.symptom}</p>
                          <p><strong>점검 원인 :</strong> {item.point}</p>
                          <p><strong>시공 작업 :</strong> {item.work}</p>
                        </div>
                      </div>

                      <div className="mt-4 pt-3 border-t border-slate-200/40 flex justify-between items-center text-xs">
                        <span className="text-gray-400">결과</span>
                        <span className="font-bold text-brand-accent">{item.result}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 인디케이터 도트 */}
            <div className="flex justify-center gap-1.5 mt-4">
              {casesData.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIdx(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${currentIdx === idx ? "bg-brand-accent" : "bg-slate-200"}`}
                  aria-label={`${idx + 1}번 사례로 이동`}
                />
              ))}
            </div>
          </div>

          {/* PC: 3열 격자 고정형 정렬 */}
          <div className="hidden md:grid grid-cols-3 gap-6">
            {casesData.map((item, idx) => {
              const hasImages = !!item.beforeImg || !!item.afterImg;

              return (
                <div 
                  key={idx}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-6 flex flex-col justify-between hover:shadow-xs transition-shadow min-h-[440px]"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-[10px] font-bold text-brand-accent bg-blue-50 px-2 py-0.5 rounded-md">
                        {item.buildingType}
                      </span>
                      <span className="text-[10px] text-gray-400 font-semibold">
                        {isDynamic ? `${serviceName} 유사 작업` : `${regionName} 실제 시공`}
                      </span>
                    </div>

                    <h3 className="font-extrabold text-base text-brand-primary mb-4">
                      {item.title}
                    </h3>

                    {/* 비포/애프터 이미지 (없을 시 숨김) */}
                    {hasImages && (
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {item.beforeImg && (
                          <div>
                            <div className="text-[9px] text-gray-400 font-bold mb-0.5">시공 전 (Before)</div>
                            <SafeImage src={item.beforeImg} alt={`${regionName} ${serviceName} 사례 시공 전`} aspectRatioClassName="aspect-square" />
                          </div>
                        )}
                        {item.afterImg && (
                          <div>
                            <div className="text-[9px] text-brand-accent font-bold mb-0.5">시공 후 (After)</div>
                            <SafeImage src={item.afterImg} alt={`${regionName} ${serviceName} 사례 시공 후`} aspectRatioClassName="aspect-square" />
                          </div>
                        )}
                      </div>
                    )}

                    <div className="space-y-2 text-xs text-gray-600">
                      <p><strong>의심 증상:</strong> {item.symptom}</p>
                      <p><strong>점검 원인:</strong> {item.point}</p>
                      <p><strong>시공 작업:</strong> {item.work}</p>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200/40 flex justify-between items-center text-xs">
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
