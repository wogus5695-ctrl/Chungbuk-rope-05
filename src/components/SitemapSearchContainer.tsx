"use client";

import React, { useState } from "react";
import { DetailedRegion, ServiceData } from "@/types";

interface SitemapSearchContainerProps {
  regions: DetailedRegion[];
  services: ServiceData[];
}

export default function SitemapSearchContainer({ regions, services }: SitemapSearchContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string>("all");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim().toLowerCase());
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

  const isFilteringActive = searchQuery !== "" || selectedService !== "all";

  // 1. 최상위 13개 시/군 그룹 리스트 정의 (정식 키워드 기준)
  const mainGroups = [
    { id: "cheongju-si", name: "청주시 / 청주", province: "chungbuk" },
    { id: "chungju-si", name: "충주시 / 충주", province: "chungbuk" },
    { id: "jecheon-si", name: "제천시 / 제천", province: "chungbuk" },
    { id: "boeun-gun", name: "보은군", province: "chungbuk" },
    { id: "okcheon-gun", name: "옥천군", province: "chungbuk" },
    { id: "yeongdong-gun", keywordName: "영동군", name: "영동군", province: "chungbuk" },
    { id: "jeungpyeong-gun", name: "증평군", province: "chungbuk" },
    { id: "jincheon-gun", name: "진천군", province: "chungbuk" },
    { id: "goesan-gun", name: "괴산군", province: "chungbuk" },
    { id: "eumseong-gun", name: "음성군", province: "chungbuk" },
    { id: "danyang-gun", name: "단양군", province: "chungbuk" },
    { id: "daejeon-si", name: "대전시 / 대전", province: "daejeon" },
    { id: "sejong-si", name: "세종시 / 세종", province: "sejong" }
  ];

  // 각 최상위 그룹에 들어갈 지역 매핑
  const renderRegionCard = (reg: DetailedRegion) => {
    const isRegionMatched = searchQuery === "" || reg.formalName.toLowerCase().includes(searchQuery) || reg.keywordName.toLowerCase().includes(searchQuery);

    return (
      <div 
        key={reg.id} 
        className={`border-b border-slate-100 pb-4 last:border-0 last:pb-0 ${isRegionMatched ? "block" : "hidden"}`}
      >
        <div className="text-xs text-gray-400 font-bold mb-2 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
          <span>{reg.formalName}</span>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {services.map(svc => {
            const isServiceMatched = selectedService === "all" || selectedService === svc.keyword;
            const linkHref = `/?k=${encodeURIComponent(`${reg.keywordName}-${svc.keyword}`)}`;
            const linkText = `${reg.keywordName} ${svc.keyword}`;

            return (
              <a 
                key={svc.keyword}
                href={linkHref}
                className={`text-[12px] font-semibold px-3 py-2 rounded-lg border text-left transition-colors truncate ${isServiceMatched ? "bg-slate-50 hover:bg-brand-accent/5 hover:border-brand-accent/30 text-gray-600 hover:text-brand-accent border-slate-200/60 block" : "hidden"}`}
                title={linkText}
              >
                {linkText}
              </a>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full space-y-6">
      
      {/* 검색 및 필터 패널 */}
      <div className="bg-white p-5 rounded-2xl border border-slate-200/60 shadow-xs flex flex-col sm:flex-row gap-4">
        
        {/* 지역명 검색창 */}
        <div className="flex-1 relative">
          <label htmlFor="region-search" className="sr-only">지역명 검색</label>
          <input 
            id="region-search"
            type="text" 
            placeholder="동네 이름 검색 (예: 용암동, 상당구, 대전)"
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full h-11 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm text-brand-primary placeholder-gray-400 focus:outline-hidden focus:border-brand-accent focus:bg-white transition-colors"
          />
        </div>

        {/* 작업명 필터 드롭다운 */}
        <div className="w-full sm:w-64">
          <label htmlFor="service-filter" className="sr-only">시공 작업 서비스 필터</label>
          <select 
            id="service-filter"
            value={selectedService}
            onChange={handleServiceChange}
            className="w-full h-11 px-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-brand-primary font-semibold focus:outline-hidden focus:border-brand-accent focus:bg-white transition-colors"
          >
            <option value="all">모든 작업명 전체 보기 (13종)</option>
            {services.map(s => (
              <option key={s.keyword} value={s.keyword}>
                {s.keyword}
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* 아코디언 통합 허브 */}
      <div className="space-y-4">
        {mainGroups.map(group => {
          // 해당 최상위 시/군에 속하는 모든 지역 데이터 필터링
          let topLevelRegions: DetailedRegion[] = [];
          let hasSubGus = false;
          let subGus: DetailedRegion[] = [];

          if (group.id === "cheongju-si") {
            // 청주시 최상위 (청주시, 청주)
            topLevelRegions = regions.filter(r => r.variantGroupId === "cheongju");
            hasSubGus = true;
            subGus = regions.filter(r => r.parentId === "cheongju-si" && r.regionType === "district");
          } else if (group.id === "daejeon-si") {
            // 대전시 최상위 (대전시, 대전)
            topLevelRegions = regions.filter(r => r.variantGroupId === "daejeon");
            hasSubGus = true;
            subGus = regions.filter(r => r.parentId === "daejeon-si" && r.regionType === "district");
          } else if (group.id === "sejong-si") {
            // 세종시 최상위 (세종시, 세종) 및 하위 (조치원읍, 면, 법정동) 평탄화 배치
            topLevelRegions = regions.filter(r => r.provinceGroup === "sejong");
          } else if (group.id === "chungju-si") {
            // 충주시 최상위 및 하위 읍·면·동 평탄화 배치
            topLevelRegions = regions.filter(r => r.provinceGroup === "chungbuk" && (r.parentId === "chungju-si" || r.variantGroupId === "chungju"));
          } else if (group.id === "jecheon-si") {
            // 제천시 최상위 및 하위 읍·면·동 평탄화 배치
            topLevelRegions = regions.filter(r => r.provinceGroup === "chungbuk" && (r.parentId === "jecheon-si" || r.variantGroupId === "jecheon"));
          } else {
            // 8대 군 단위
            topLevelRegions = regions.filter(r => r.provinceGroup === "chungbuk" && (r.id === group.id || r.parentId === group.id));
          }

          // 검색어 필터링 검사
          const totalMatchedCount = topLevelRegions.filter(reg => {
            return searchQuery === "" || reg.formalName.toLowerCase().includes(searchQuery) || reg.keywordName.toLowerCase().includes(searchQuery);
          }).length + (hasSubGus ? regions.filter(r => {
            const isChildOfGu = subGus.some(g => g.id === r.parentId);
            return isChildOfGu && (searchQuery === "" || r.formalName.toLowerCase().includes(searchQuery) || r.keywordName.toLowerCase().includes(searchQuery));
          }).length : 0);

          const shouldHideGroup = isFilteringActive && totalMatchedCount === 0;

          return (
            <details 
              key={group.id}
              className={`bg-white rounded-2xl border border-slate-200/50 shadow-xs group transition-all overflow-hidden ${shouldHideGroup ? "hidden" : "block"}`}
              open={isFilteringActive}
            >
              <summary className="font-extrabold text-sm xs:text-base text-brand-primary p-5 cursor-pointer list-none flex items-center justify-between select-none bg-slate-50/50 group-open:bg-slate-100/30">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-3.5 bg-brand-accent rounded-full"></span>
                  <span>{group.name}</span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-5 border-t border-slate-100 bg-white space-y-6">
                
                {/* 1) 최상위 지역 및 평탄화 데이터 출력 */}
                <div className="space-y-4">
                  {topLevelRegions.map(reg => renderRegionCard(reg))}
                </div>

                {/* 2) 청주시, 대전시 등 구 단위 하위 아코디언 중첩 출력 */}
                {hasSubGus && subGus.map(gu => {
                  const guChildren = regions.filter(r => r.parentId === gu.id);
                  const matchedChildren = guChildren.filter(reg => {
                    return searchQuery === "" || reg.formalName.toLowerCase().includes(searchQuery) || reg.keywordName.toLowerCase().includes(searchQuery);
                  });

                  const shouldHideGu = isFilteringActive && matchedChildren.length === 0;

                  return (
                    <div 
                      key={gu.id}
                      className={`pl-4 border-l-2 border-slate-200/60 space-y-3 ${shouldHideGu ? "hidden" : "block"}`}
                    >
                      <details className="group/gu" open={isFilteringActive}>
                        <summary className="font-extrabold text-xs xs:text-sm text-gray-500 cursor-pointer list-none flex items-center gap-2 select-none py-2">
                          <span className="w-1 h-3 bg-slate-400 rounded-full"></span>
                          <span>{gu.keywordName}</span>
                          <span className="text-[10px] text-gray-400 bg-slate-100 px-2 py-0.5 rounded-full font-bold">
                            하위 읍·면·동
                          </span>
                        </summary>

                        <div className="pl-4 mt-3 space-y-4 border-t border-slate-50 pt-3">
                          {/* 구 자체의 키워드 링크 */}
                          {renderRegionCard(gu)}
                          {/* 구 소속 읍·면·법정동 */}
                          {guChildren.map(reg => renderRegionCard(reg))}
                        </div>
                      </details>
                    </div>
                  );
                })}

              </div>
            </details>
          );
        })}
      </div>

    </div>
  );
}
