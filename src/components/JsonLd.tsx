import React from "react";
import { DetailedRegion, ServiceData } from "@/types";
import { siteConfig } from "@/config/site";
import { getServiceFaqData } from "@/data/serviceFaq";

interface JsonLdProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function JsonLd({ region, service }: JsonLdProps) {
  const baseUrl = siteConfig.baseUrl || "https://www.cbrainguard.co.kr";
  const serviceKeyword = service?.keyword || "빗물누수";

  // 1. WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteConfig.branchName || "레인가드 충북지점",
    "url": baseUrl
  };

  // 2. LocalBusiness Schema (확정된 실제 설정값만 노출)
  const localBusinessSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `${siteConfig.brandName} (${siteConfig.businessName})`,
    "url": baseUrl,
    "telephone": siteConfig.phoneNumber,
    "image": `${baseUrl}${siteConfig.SEARCH_THUMBNAIL_PATH}`,
    "logo": `${baseUrl}/images/brand/rainguard-logo-symbol.png`
  };

  if (siteConfig.address) {
    localBusinessSchema.address = siteConfig.address;
  }

  // 3. BreadcrumbList Schema (유효한 200 URL만 사용)
  const itemListElement = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "레인가드 메인",
      "item": baseUrl
    }
  ];

  if (region && service) {
    itemListElement.push({
      "@type": "ListItem",
      "position": 2,
      "name": "충북 허브",
      "item": `${baseUrl}/sitemap-chungbuk`
    });
    itemListElement.push({
      "@type": "ListItem",
      "position": 3,
      "name": `${region.displayName} ${service.keyword}`,
      "item": `${baseUrl}/?k=${encodeURIComponent(`${region.keywordName}-${service.keyword}`)}`
    });
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };

  // 4. FAQPage Schema (화면과 100% 일치하는 FAQ 5개만 기재)
  const faqData = getServiceFaqData(serviceKeyword);
  const faqSchema = faqData ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
    </>
  );
}
