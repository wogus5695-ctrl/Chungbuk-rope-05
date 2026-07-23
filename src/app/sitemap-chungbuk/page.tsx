import React from "react";
import { Metadata } from "next";
import { regionsData } from "@/data/regions";
import { servicesData } from "@/data/services";
import Header from "@/sections/Header";
import Footer from "@/sections/Footer";
import SitemapSearchContainer from "@/components/SitemapSearchContainer";

export const metadata: Metadata = {
  title: "충북 동적 키워드 통합 sitemap 허브 | 레인가드",
  description: "충청북도 전 지역 빗물누수, 창틀코킹, 방수 공사 키워드별 시공 서비스 바로가기 링크 인덱스 허브 페이지입니다.",
  robots: "index, follow",
  alternates: {
    canonical: "https://www.cbrainguard.co.kr/sitemap-chungbuk"
  }
};

export default function SitemapChungbukPage() {
  // 1. 상단 통계 수치 동적 연산
  const formalRegions = regionsData.filter(r => r.keywordVariantType === "formal");
  const aliasRegions = regionsData.filter(r => r.keywordVariantType === "alias");
  
  const siGunCount = regionsData.filter(r => (r.regionType === "si" || r.regionType === "gun") && r.keywordVariantType === "formal").length;
  const guCount = regionsData.filter(r => r.regionType === "gu").length;
  const eupCount = regionsData.filter(r => r.regionType === "eup").length;
  const myeonCount = regionsData.filter(r => r.regionType === "myeon").length;
  const dongCount = regionsData.filter(r => r.regionType === "dong").length;
  
  const totalRegionsCount = regionsData.length;
  const servicesCount = servicesData.length;
  const totalUrlsCount = totalRegionsCount * servicesCount;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      
      <main className="flex-grow max-w-7xl mx-auto px-4 py-10 w-full">
        
        {/* 상단 타이틀 */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            충북 지역별 시공 서비스 통합 허브
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 leading-relaxed">
            충청북도 전체 행정구역에 대응하는 레인가드 방수 코킹 동적 키워드 인덱스 목록입니다.
          </p>
        </div>

        {/* 12단계: 통계 요약 대시보드 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mb-10">
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">시·군</span>
            <span className="text-lg font-extrabold text-brand-primary">{siGunCount}개</span>
          </div>
          <div className="bg-white p-4 rounded-xl border border-slate-200/60 text-center shadow-xs">
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">구 (청주시)</span>
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
            <span className="text-[10px] text-gray-400 font-bold block uppercase mb-1">동</span>
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
