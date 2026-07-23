"use client";

import React, { useState } from "react";
import { DetailedRegion } from "@/data/regions";
import { ServiceData } from "@/types";

interface SitemapSearchContainerProps {
  regions: DetailedRegion[];
  services: ServiceData[];
}

export default function SitemapSearchContainer({ regions, services }: SitemapSearchContainerProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedService, setSelectedService] = useState<string>("all");

  // 1. 상위 그룹별 지역 매핑 정의 (regionsData의 선언 순서 유지 보장)
  // 청주시, 청주, 충주시, 충주, 제천시, 제천 및 8대 군을 분리합니다.
  const groupDefinitions = [
    { id: "cheongju-si", name: "청주시 (정식 행정구역)", match: (r: DetailedRegion) => r.id === "cheongju-si" || r.parentId === "cheongju-si" || regions.find(p => p.id === r.parentId)?.parentId === "cheongju-si" },
    { id: "cheongju-alias", name: "청주 (자연어 검색 키워드)", match: (r: DetailedRegion) => r.id === "cheongju" },
    { id: "chungju-si", name: "충주시 (정식 행정구역)", match: (r: DetailedRegion) => r.id === "chungju-si" || r.parentId === "chungju-si" },
    { id: "chungju-alias", name: "충주 (자연어 검색 키워드)", match: (r: DetailedRegion) => r.id === "chungju" },
    { id: "jecheon-si", name: "제천시 (정식 행정구역)", match: (r: DetailedRegion) => r.id === "jecheon-si" || r.parentId === "jecheon-si" },
    { id: "jecheon-alias", name: "제천 (자연어 검색 키워드)", match: (r: DetailedRegion) => r.id === "jecheon" },
    { id: "boeun", name: "보은군", match: (r: DetailedRegion) => r.id === "boeun-gun" || r.parentId === "boeun-gun" },
    { id: "okcheon", name: "옥천군", match: (r: DetailedRegion) => r.id === "okcheon-gun" || r.parentId === "okcheon-gun" },
    { id: "yeongdong", name: "영동군", match: (r: DetailedRegion) => r.id === "yeongdong-gun" || r.parentId === "yeongdong-gun" },
    { id: "jeungpyeong", name: "증평군", match: (r: DetailedRegion) => r.id === "jeungpyeong-gun" || r.parentId === "jeungpyeong-gun" },
    { id: "jincheon", name: "진천군", match: (r: DetailedRegion) => r.id === "jincheon-gun" || r.parentId === "jincheon-gun" },
    { id: "goesan", name: "괴산군", match: (r: DetailedRegion) => r.id === "goesan-gun" || r.parentId === "goesan-gun" },
    { id: "eumseong", name: "음성군", match: (r: DetailedRegion) => r.id === "eumseong-gun" || r.parentId === "eumseong-gun" },
    { id: "danyang", name: "단양군", match: (r: DetailedRegion) => r.id === "danyang-gun" || r.parentId === "danyang-gun" }
  ];

  // 각 그룹에 해당하는 지역 목록 추출 (원본 regionsData 배열의 선언 순서가 100% 보존됨)
  const groupedRegions = groupDefinitions.map(group => {
    const matched = regions.filter(group.match);
    return {
      ...group,
      regionsList: matched
    };
  });

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.trim().toLowerCase());
  };

  const handleServiceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedService(e.target.value);
  };

  // 검색이나 필터링 작동 여부 판별 (동작 중일 때는 아코디언을 자동으로 열어 보여주는 스마트 UX 적용)
  const isFilteringActive = searchQuery !== "" || selectedService !== "all";

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
            placeholder="동네 이름 검색 (예: 복대동, 오창읍, 충주)"
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
                {s.keyword} ({s.intentType})
              </option>
            ))}
          </select>
        </div>

      </div>

      {/* 12단계: 아코디언 허브 구조 (초기 HTML에 100% 탑재되는 details/summary 기법과 CSS 필터 융합) */}
      <div className="space-y-4">
        {groupedRegions.map(group => {
          // 해당 그룹 내 지역 중 검색 조건 및 작업 필터 조건에 부합하는 지역이 있는지 확인
          const filteredList = group.regionsList.filter(reg => {
            const matchesQuery = searchQuery === "" || reg.formalName.toLowerCase().includes(searchQuery) || reg.keywordName.toLowerCase().includes(searchQuery);
            return matchesQuery;
          });

          // 필터에 매칭되는 내역이 전혀 없는 그룹 아코디언은 검색 모드일 때 화면에서 숨김 처리
          const shouldHideGroup = isFilteringActive && filteredList.length === 0;

          return (
            <details 
              key={group.id}
              className={`bg-white rounded-2xl border border-slate-200/50 shadow-xs group transition-all overflow-hidden ${shouldHideGroup ? "hidden" : "block"}`}
              open={isFilteringActive} // 검색 필터링이 활성화되면 모든 아코디언을 강제 활성화(open)
            >
              <summary className="font-extrabold text-sm xs:text-base text-brand-primary p-5 cursor-pointer list-none flex items-center justify-between select-none bg-slate-50/50 group-open:bg-slate-100/30">
                <div className="flex items-center gap-2">
                  <span className="w-1 h-3.5 bg-brand-accent rounded-full"></span>
                  <span>{group.name}</span>
                  <span className="text-xs font-semibold text-gray-400 bg-slate-100 px-2 py-0.5 rounded-full">
                    {group.regionsList.length}개 구역
                  </span>
                </div>
                <svg className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>

              <div className="p-5 border-t border-slate-100 bg-white">
                <div className="space-y-6">
                  
                  {group.regionsList.map(reg => {
                    const isRegionMatched = searchQuery === "" || reg.formalName.toLowerCase().includes(searchQuery) || reg.keywordName.toLowerCase().includes(searchQuery);

                    return (
                      <div 
                        key={reg.id} 
                        className={`border-b border-slate-100 pb-4 last:border-0 last:pb-0 ${isRegionMatched ? "block" : "hidden"}`}
                      >
                        <div className="text-xs text-gray-400 font-bold mb-2 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                          <span>{reg.formalName} ({reg.regionType})</span>
                        </div>
                        
                        {/* 13대 작업명 링크 격자 생성 (모바일 가로 스크롤 차단을 위해 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 래핑) */}
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
                  })}

                </div>
              </div>
            </details>
          );
        })}
      </div>

    </div>
  );
}
