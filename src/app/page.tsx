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
      },
      openGraph: {
        title: siteConfig.defaultTitle,
        description: siteConfig.defaultDescription,
        url: siteConfig.baseUrl,
        siteName: siteConfig.branchName,
        images: [
          {
            url: siteConfig.SEARCH_THUMBNAIL_URL,
            secureUrl: siteConfig.SEARCH_THUMBNAIL_URL,
            type: "image/webp",
            width: siteConfig.SEARCH_THUMBNAIL_WIDTH,
            height: siteConfig.SEARCH_THUMBNAIL_HEIGHT,
            alt: siteConfig.SEARCH_THUMBNAIL_ALT,
          }
        ],
        locale: "ko_KR",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: siteConfig.defaultTitle,
        description: siteConfig.defaultDescription,
        images: [siteConfig.SEARCH_THUMBNAIL_URL],
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

  const rawDecodedK = decodeURIComponent(k).trim();
  const title = `${rawDecodedK} 전문 시공 | 10년 경력 레인가드`;
  const description = `${parsed.region.formalName} ${parsed.service.keyword} 전문. 꼼꼼한 원인 진단과 친환경 자재 사용으로 정밀 방수 보수.`;

  const canonicalUrl = `${siteConfig.baseUrl}/?k=${encodeURIComponent(k)}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl
    },
    robots: "index, follow",
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.branchName,
      images: [
        {
          url: siteConfig.SEARCH_THUMBNAIL_URL,
          secureUrl: siteConfig.SEARCH_THUMBNAIL_URL,
          type: "image/webp",
          width: siteConfig.SEARCH_THUMBNAIL_WIDTH,
          height: siteConfig.SEARCH_THUMBNAIL_HEIGHT,
          alt: siteConfig.SEARCH_THUMBNAIL_ALT,
        }
      ],
      locale: "ko_KR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [siteConfig.SEARCH_THUMBNAIL_URL],
    }
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
      <JsonLd region={region} service={service} rawK={k} />
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
