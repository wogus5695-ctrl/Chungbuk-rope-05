"use client";

import React from "react";
import { usePathname } from "next/navigation";
import ContactButton from "./ContactButton";

export default function InteractiveCTA() {
  const pathname = usePathname();

  // sitemap-chungbuk 등 통합 허브 페이지에서는 플로팅 버튼을 숨김 처리
  if (pathname && pathname.includes("sitemap")) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-slate-900 border-t border-slate-800 md:hidden shadow-md flex items-center pb-[env(safe-area-inset-bottom)]">
      {/* 360px 환경에서 두 줄 깨짐 현상 방지: whitespace-nowrap, 동일 52px 높이, 44px 이상 터치 영역 확보 */}
      <div className="flex w-full h-[52px]">
        {/* 전화 상담: 레인가드 브랜드 블루 (#2563EB) */}
        <ContactButton 
          type="phone" 
          variant="floating" 
          className="flex flex-col items-center justify-center flex-1 h-full bg-brand-accent active:bg-blue-700 text-white whitespace-nowrap min-h-[44px]"
        >
          <svg className="w-4 h-4 mb-0.5 text-white flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="text-[12px] font-bold whitespace-nowrap leading-none">전화 상담</span>
        </ContactButton>
        
        {/* 사진 문의: 카카오 옐로우 (#FEE500) & 검정 텍스트 */}
        <ContactButton 
          type="kakao" 
          variant="floating" 
          className="flex flex-col items-center justify-center flex-1 h-full bg-[#FEE500] active:bg-[#FADA0A] text-[#191919] whitespace-nowrap min-h-[44px]"
        >
          <svg className="w-4 h-4 mb-0.5 text-[#191919] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.51 1.66 4.723 4.18 5.922-.165.617-.6 2.25-.688 2.587-.13.51.173.5.364.372.15-.1.2.148 2.822-1.92.73.204 1.514.32 2.322.32 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
          </svg>
          <span className="text-[12px] font-bold whitespace-nowrap leading-none">사진 문의</span>
        </ContactButton>
      </div>
    </div>
  );
}
