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
import FAQ from "@/sections/FAQ";
import Footer from "@/sections/Footer";
import InteractiveCTA from "@/components/InteractiveCTA";

interface PageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

// 7단계: 동적 SEO 메타데이터 생성 엔진
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
  const isCheongjuSi = region.id === "cheongju-si";
  const isCheongju = region.id === "cheongju";

  // 청주시 vs 청주 타이틀 분기 및 전용 템플릿 처리
  let title = `${region.keywordName} ${service.keyword} | 창틀·외벽 유입 경로 점검 레인가드`;
  if (isCheongju) {
    title = `${region.keywordName} ${service.keyword} | 비 올 때 반복되는 누수 점검 레인가드`;
  } else if (region.regionType === "eup") {
    title = `${region.keywordName} ${service.keyword} | 판넬 이음부·체결부 점검 레인가드`;
  }

  // description 커스텀 생성
  const description = isCheongjuSi 
    ? `${region.formalName} 전체 지역 대상 ${service.keyword} 신속 대응. 상당구, 서원구, 흥덕구, 청원구 밀착 시공 및 품질 보증.`
    : isCheongju 
    ? `${region.keywordName} 시민들이 추천하는 ${service.keyword} 재누수 차단 정밀 코킹 및 방수 시공 견적 상담.`
    : `${region.formalName} ${service.keyword} 전문. 꼼꼼한 원인 진단과 친환경 자재 사용으로 완벽 방수 보장.`;

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
        <Header />
        <main className="flex-grow">
          <Hero />
          <LeakSymptoms />
          <LeakPath />
          <WorkCases />
          <FAQ />
        </main>
        <Footer />
        <InteractiveCTA />
      </div>
    );
  }

  // 2. k 파라미터가 존재하는 경우: 동적 키워드 파싱 시작
  const parsed = parseKeyword(k);

  // 3. 파싱에 실패하거나 유효하지 않은 지역/작업일 경우: 실제 HTTP 404 응답 호출
  if (!parsed) {
    notFound();
  }

  const { region, service } = parsed;

  return (
    <div className="min-h-screen flex flex-col pb-16 md:pb-0">
      <Header />
      <main className="flex-grow">
        <Hero region={region} service={service} />
        <LeakSymptoms region={region} service={service} />
        <LeakPath region={region} service={service} />
        <WorkCases region={region} service={service} />
        <FAQ region={region} service={service} />
      </main>
      <Footer region={region} service={service} />
      <InteractiveCTA />
    </div>
  );
}
