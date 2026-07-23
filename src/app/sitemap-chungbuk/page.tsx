import React from "react";
import { Metadata } from "next";
import { regionsData } from "@/data/regions";
import { servicesData } from "@/data/services";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import SitemapSearchContainer from "@/components/SitemapSearchContainer";

import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "충북·대전·세종 지역별 시공 서비스 통합 허브 | 레인가드",
  description: "충북·대전·세종 지역의 창틀코킹·누수·방수 서비스 동적 키워드 목록입니다.",
  robots: "index, follow",
  alternates: {
    canonical: `${siteConfig.baseUrl}/sitemap-chungbuk`
  }
};

export default function SitemapChungbukPage() {
  // 1. 상단 통계 수치 동적 연산 (활성화된 지역 대상)
  const activeRegions = regionsData.filter(r => r.isActive);
  const provinceCount = Array.from(new Set(activeRegions.map(r => r.provinceGroup))).length;
  const siGunCount = activeRegions.filter(r => r.regionType === "city" || r.regionType === "county").length;
  const guCount = activeRegions.filter(r => r.regionType === "district").length;
  const eupCount = activeRegions.filter(r => r.regionType === "eup").length;
  const myeonCount = activeRegions.filter(r => r.regionType === "myeon").length;
  const dongCount = activeRegions.filter(r => r.regionType === "dong" && r.keywordSource === "official").length;
  
  const totalRegionsCount = activeRegions.length;
  const servicesCount = servicesData.length;
  const totalUrlsCount = totalRegionsCount * servicesCount;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 w-full">
        
        {/* 상단 타이틀 */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            충북·대전·세종 지역별 시공 서비스 통합 허브
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            충북·대전·세종 지역의 창틀코킹·누수·방수 서비스 동적 키워드 목록입니다.
          </p>
        </div>

        {/* 통계 요약 대시보드 (9개 dynamic 카드로 개편) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3 mb-10">
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">서비스 권역</span>
            <span className="text-lg font-extrabold text-brand-primary">{provinceCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">시·군</span>
            <span className="text-lg font-extrabold text-brand-primary">{siGunCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">구</span>
            <span className="text-lg font-extrabold text-brand-primary">{guCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">읍</span>
            <span className="text-lg font-extrabold text-brand-primary">{eupCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">면</span>
            <span className="text-lg font-extrabold text-brand-primary">{myeonCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">법정동</span>
            <span className="text-lg font-extrabold text-brand-primary">{dongCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">지역 키워드</span>
            <span className="text-lg font-extrabold text-brand-primary">{totalRegionsCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">작업 서비스</span>
            <span className="text-lg font-extrabold text-brand-primary">{servicesCount}종</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center bg-blue-50/50">
            <span className="text-[10px] text-brand-accent font-bold block uppercase mb-1">전체 동적 URL</span>
            <span className="text-lg font-extrabold text-brand-accent">{totalUrlsCount}개</span>
          </div>
        </div>

        {/* 검색 및 인터랙티브 아코디언 컨테이너 (클라이언트 전용 영역 격리) */}
        <SitemapSearchContainer 
          regions={regionsData} 
          services={servicesData} 
        />

      </main>

      <Footer />
    </div>
  );
}
