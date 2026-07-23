"use client";

import React, { useState } from "react";
import Link from "next/link";
import ContactButton from "@/components/ContactButton";
import { siteConfig } from "@/config/site";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header id="header" className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* 좌측 레인가드 로고 & 심볼 */}
        <Link href="/" className="flex items-center gap-2 group select-none">
          <img 
            src="/images/brand/rainguard-logo-symbol.png" 
            alt="레인가드 로고 심볼" 
            className="w-8 h-8 object-contain transition-transform group-hover:scale-105" 
          />
          <div className="flex flex-col">
            <span className="font-extrabold text-sm xs:text-base text-brand-primary tracking-tight leading-none">
              {siteConfig.brandName}
            </span>
            <span className="text-[9px] text-gray-400 font-medium tracking-wider mt-0.5">
              CHUNGBUK BRANCH
            </span>
          </div>
        </Link>

        {/* PC: 최소 네비게이션 및 우측 문의 버튼 그룹 */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex space-x-6 text-[13px] font-semibold text-gray-600">
            <a href="#symptoms" className="hover:text-brand-accent transition-colors">누수증상</a>
            <a href="#path" className="hover:text-brand-accent transition-colors">누수경로</a>
            <a href="#cases" className="hover:text-brand-accent transition-colors">시공사례</a>
            <a href="#faq" className="hover:text-brand-accent transition-colors">자주묻는질문</a>
          </nav>
          
          <div className="flex items-center gap-2 border-l border-gray-200 pl-6">
            <ContactButton 
              type="phone" 
              variant="text" 
              className="text-xs font-bold text-gray-700 hover:text-brand-accent flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-4 h-4 text-brand-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>전화문의</span>
            </ContactButton>
            <ContactButton 
              type="kakao" 
              variant="text" 
              className="text-xs font-bold text-gray-700 hover:text-yellow-600 flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.51 1.66 4.723 4.18 5.922-.165.617-.6 2.25-.688 2.587-.13.51.173.5.364.372.15-.1.2.148 2.822-1.92.73.204 1.514.32 2.322.32 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
              </svg>
              <span>카톡문의</span>
            </ContactButton>
          </div>
        </div>

        {/* MO: 메뉴 토글 햄버거 버튼 */}
        <div className="flex md:hidden items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-brand-primary active:bg-gray-50 rounded-lg focus:outline-hidden transition-colors"
            aria-label="메뉴 토글"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* MO: 드롭다운 모바일 메뉴 */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white shadow-inner animate-fadeIn">
          <nav className="flex flex-col py-3 px-4 space-y-3.5 text-sm font-bold text-gray-700">
            <a href="#symptoms" onClick={() => setIsOpen(false)} className="hover:text-brand-accent py-1">누수증상</a>
            <a href="#path" onClick={() => setIsOpen(false)} className="hover:text-brand-accent py-1">누수경로</a>
            <a href="#cases" onClick={() => setIsOpen(false)} className="hover:text-brand-accent py-1">시공사례</a>
            <a href="#faq" onClick={() => setIsOpen(false)} className="hover:text-brand-accent py-1">자주묻는질문</a>
          </nav>
        </div>
      )}
    </header>
  );
}
