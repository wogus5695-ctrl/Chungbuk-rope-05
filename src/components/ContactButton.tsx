"use client";

import React from "react";
import { siteConfig } from "@/config/site";

interface ContactButtonProps {
  type: "phone" | "kakao";
  className?: string;
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "floating" | "text";
}

export default function ContactButton({
  type,
  className = "",
  children,
  variant = "primary"
}: ContactButtonProps) {
  const isPhone = type === "phone";
  const targetUrl = isPhone ? siteConfig.phoneHref : siteConfig.kakaoChannelUrl;
  const targetText = isPhone ? siteConfig.phoneNumber : "카카오톡 채널";
  const hasValue = !!targetUrl;

  const handleClick = (e: React.MouseEvent) => {
    if (!hasValue) {
      e.preventDefault();
      
      // 개발 환경에서만 미설정 경고 표시
      if (process.env.NODE_ENV === "development") {
        console.warn(`[레인가드] ${isPhone ? "전화번호(phoneHref)" : "카카오톡 주소(kakaoChannelUrl)"} 설정값이 비어 있습니다. config/site.ts 파일을 확인해주세요.`);
      }
      
      // 운영 환경이나 개발 환경 모두에서 오류를 내지 않고 알림창 제공 또는 조용히 리턴
      alert(`${isPhone ? "전화 문의" : "카카오톡 문의"} 채널은 현재 준비 중입니다.`);
    }
  };

  // 기본 스타일 지정
  let baseStyle = className;
  if (!className) {
    if (variant === "primary") {
      baseStyle = "inline-flex items-center justify-center px-6 h-11 bg-brand-accent hover:bg-brand-accent-hover text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent";
    } else if (variant === "secondary") {
      baseStyle = "inline-flex items-center justify-center px-6 h-11 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold border border-gray-200 rounded-lg transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-accent";
    } else if (variant === "floating") {
      baseStyle = "flex flex-col items-center justify-center flex-1 h-full cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-accent";
    } else if (variant === "text") {
      baseStyle = "hover:text-brand-accent transition-colors cursor-pointer focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-brand-accent";
    }
  }

  // 값이 존재하지 않을 때는 안전하게 버튼 요소로 렌더링하고 onClick만 바인딩
  if (!hasValue) {
    return (
      <button 
        type="button" 
        onClick={handleClick} 
        className={baseStyle}
        aria-label={`${isPhone ? "전화" : "카카오톡"} 문의 (준비중)`}
      >
        {children || (isPhone ? (targetText || "전화 문의 (준비중)") : "카카오톡 문의 (준비중)")}
      </button>
    );
  }

  // 값이 존재할 때는 a 링크로 정상 동작
  return (
    <a
      href={targetUrl}
      onClick={handleClick}
      className={baseStyle}
      target={isPhone ? undefined : "_blank"}
      rel={isPhone ? undefined : "noopener noreferrer"}
      aria-label={`${isPhone ? "전화" : "카카오톡"} 문의 연결`}
    >
      {children || (isPhone ? targetText : "카카오톡 문의")}
    </a>
  );
}
