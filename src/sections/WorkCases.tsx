"use client";

import React, { useState, useEffect, useRef } from "react";
import SafeImage from "@/components/SafeImage";
import { imageSlots } from "@/config/imageSlots";
import { DetailedRegion } from "@/data/regions";
import { ServiceData } from "@/types";

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
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
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

  // 3. 작업 과정 (processSteps) 데이터 바인딩
  const defaultProcessSteps = [
    { step: "01", name: "증상과 사진 확인", desc: "고객님이 보내주신 물샘 위치 사진을 분석하여 약식 누수 경로를 1차 판별합니다." },
    { step: "02", name: "유입 가능 부위 점검", desc: "외벽 옹벽의 결함과 기존 코킹 박리율을 근거리에서 측정해 정확한 물길을 짚어냅니다." },
    { step: "03", name: "필요한 범위 보수", desc: "문제 부위에 최적화된 규격 충진재와 우레탄 방수 도막을 사용해 깔끔하게 기밀 보수를 시행합니다." }
  ];

  const processSteps = service?.processSteps && service.processSteps.length >= 3
    ? service.processSteps.slice(0, 3)
    : defaultProcessSteps;

  const processImages = [
    imageSlots.processStep01Image,
    imageSlots.processStep02Image,
    imageSlots.processStep03Image
  ];

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

        {/* 10단계: 섹션 5 - 작업 과정 (3단계 배치) */}
        <div className="border-t border-slate-100 pt-16 max-w-5xl mx-auto">
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-lg sm:text-2xl font-bold text-brand-primary">
              레인가드 표준 3단계 작업 과정
            </h2>
            <p className="mt-2 text-xs xs:text-sm text-gray-500">
              상담부터 마감까지 투명하고 꼼꼼하게 처리해드립니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {processSteps.map((step, idx) => {
              const processImg = processImages[idx];
              
              return (
                <div key={idx} className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="w-8 h-8 rounded-full bg-brand-accent text-white flex items-center justify-center font-bold text-sm">
                        {idx + 1}
                      </span>
                      <h3 className="font-bold text-sm xs:text-base text-brand-primary">
                        {step.name}
                      </h3>
                    </div>

                    {/* 과정 이미지 슬롯 연동 (없을 때는 깔끔한 아이콘/안내 레이아웃 대체) */}
                    <div className="mb-4">
                      {processImg ? (
                        <SafeImage src={processImg} alt={`${step.name} 과정`} aspectRatioClassName="aspect-video" />
                      ) : (
                        <div className="w-full bg-slate-100 border border-slate-200/40 rounded-xl aspect-video flex items-center justify-center">
                          <svg className="w-8 h-8 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <p className="text-xs xs:text-sm text-gray-600 leading-relaxed">
                      {step.desc}
                    </p>
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
