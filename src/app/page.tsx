import React from "react";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { parseKeyword } from "@/lib/keyword";
import { siteConfig } from "@/config/site";
import Header from "@/sections/Header";
import Hero from "@/sections/Hero";
import LeakSymptoms from "@/sections/LeakSymptoms";
import LeakPath from "@/sections/LeakPath";
import WorkCases from "@/sections/WorkCases";
import WorkProcess from "@/sections/WorkProcess";
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import InteractiveCTA from "@/components/InteractiveCTA";
import JsonLd from "@/components/JsonLd";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 7단계: 동적 SEO 메타데이터 생성 엔진 (정식시 vs 축약시 결정적 분기)
export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const k = typeof resolvedSearchParams.k === "string" ? resolvedSearchParams.k : undefined;

  // 메인 페이지 메타데이터
  if (!k) {
    return {
      title: siteConfig.defaultTitle,
      description: siteConfig.defaultDescription,
      alternates: {
        canonical: siteConfig.baseUrl
      }
    };
  }

  const parsed = parseKeyword(k);
  if (!parsed) {
    return {
      title: "페이지를 찾을 수 없습니다 | 레인가드",
      robots: "noindex, nofollow"
    };
  }

  const { region, service } = parsed;
  const isOfficialCity = region.regionType === "city" && region.keywordName.endsWith("시");
  const isAbbrevCity = region.regionType === "city" && !region.keywordName.endsWith("시");

  let title = `${region.keywordName} ${service.keyword} | 창틀·외벽 유입 경로 점검 레인가드`;
  let description = `${region.formalName} ${service.keyword} 전문. 꼼꼼한 원인 진단과 친환경 자재 사용으로 정밀 방수 보수.`;

  if (isOfficialCity) {
    title = `${region.keywordName} ${service.keyword} 전체 행정구역 정밀 진단 및 방수 보수 | 레인가드`;
    description = `${region.formalName} 전역 행정구역 대상 ${service.keyword} 정밀 점검 및 시공. 건물 외벽·옥상·창호 취약 부위 원인 분석 및 규격 공사.`;
  } else if (isAbbrevCity) {
    title = `${region.keywordName} ${service.keyword} 누수 증상 상담 및 정밀 보수 | 레인가드`;
    description = `${region.keywordName} 건물 ${service.keyword} 누수 증상 신속 상담. 현장 사진 진단 및 보수 범위 실시간 안내.`;
  } else if (region.regionType === "eup") {
    title = `${region.keywordName} ${service.keyword} | 판넬 이음부·체결부 점검 레인가드`;
  }

  const canonicalUrl = `${siteConfig.baseUrl}/?k=${encodeURIComponent(k)}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    robots: "index, follow"
  };
}

export default async function Home({ searchParams }: PageProps) {
  const resolvedSearchParams = await searchParams;
  const k = typeof resolvedSearchParams.k === "string" ? resolvedSearchParams.k : undefined;

  // 1. k 파라미터가 아예 없는 경우: 정상 메인 페이지 출력 (200 OK)
  if (!k) {
    return (
      <div className="min-h-screen flex flex-col pb-16 md:pb-0">
        <JsonLd />
        <Header />
        <main className="flex-grow">
          <Hero />
          <LeakSymptoms />
          <LeakPath />
          <WorkCases />
          <WorkProcess />
          <FAQ />
        </main>
        <Footer />
        <InteractiveCTA />
      </div>
    );
  }

  // 2. k 파라미터가 존재하는 경우: 동적 키워드 파싱 시작
  const parsed = parseKeyword(k);

  // 3. 파싱 실패 시: 404 페이지 렌더링
  if (!parsed) {
    notFound();
  }

  // 4. 파싱 성공 시: 검증된 region, service 데이터를 하위 UI 컴포넌트로 전달
  const { region, service } = parsed;

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <JsonLd region={region} service={service} />
      <Header />
      <main className="flex-grow">
        <Hero region={region} service={service} />
        <LeakSymptoms region={region} service={service} />
        <LeakPath region={region} service={service} />
        <WorkCases region={region} service={service} />
        <WorkProcess region={region} service={service} />
        <FAQ region={region} service={service} />
      </main>
      <Footer region={region} service={service} />
      <InteractiveCTA />
    </div>
  );
}
