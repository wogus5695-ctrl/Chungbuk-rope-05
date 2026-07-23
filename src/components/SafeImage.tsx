"use client";

import React, { useState } from "react";

interface SafeImageProps {
  src: string | null;
  alt: string;
  className?: string;
  aspectRatioClassName?: string; // 예: "aspect-video", "aspect-[4/3]"
}

export default function SafeImage({
  src,
  alt,
  className = "",
  aspectRatioClassName = "aspect-video"
}: SafeImageProps) {
  const [error, setError] = useState(false);

  const hasImage = !!src && !error;

  if (!hasImage) {
    // 이미지가 없거나 로드 에러가 발생한 경우:
    // 깨진 아이콘이나 플레이스홀더를 절대 표시하지 않고,
    // 정해진 레이아웃 비율에 맞춰 신뢰감 있는 브랜드 톤의 미니멀한 그라데이션/배경색 박스로 렌더링합니다.
    return (
      <div 
        className={`w-full bg-linear-to-br from-slate-100 to-slate-200 border border-slate-200/60 rounded-lg ${aspectRatioClassName} ${className}`}
        aria-label={`${alt} (이미지 준비중)`}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`w-full object-cover rounded-lg ${aspectRatioClassName} ${className}`}
      loading="lazy"
    />
  );
}
