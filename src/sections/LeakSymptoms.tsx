"use client";

import React from "react";
import SafeImage from "@/components/SafeImage";
import ContactButton from "@/components/ContactButton";
import { imageSlots } from "@/config/imageSlots";
import { ServiceData, DetailedRegion } from "@/types";

interface LeakSymptomsProps {
  region?: DetailedRegion;
  service?: ServiceData;
}

export default function LeakSymptoms({ region, service }: LeakSymptomsProps) {
  const regionName = region?.keywordName || "충북";
  const serviceName = service?.keyword || "빗물누수";

  const getFirstSymptom = () => {
    if (!region || !service) {
      return "창틀 주변 도배지 변색";
    }
    if (region.id === "cheongju-si") {
      return "청주시 아파트 세대별 창틀 벽지 곰팡이";
    }
    if (region.id === "cheongju") {
      return "청주 시내 주택 및 아파트 샷시 주변 물샘 얼룩";
    }
    return `${region.keywordName} 지역 건물 빗물 유입으로 인한 도배지 변색`;
  };

  const getSymptomList = () => {
    if (service && service.symptoms && service.symptoms.length >= 4) {
      const items = [...service.symptoms];
      items[0] = getFirstSymptom(); // 첫번째 아이템 교체
      return items.slice(0, 4);
    }
    return [
      getFirstSymptom(),
      "베란다 천장 페인트 박리 및 도장면 부풀어 오름",
      "노후 실리콘 갈라짐 및 코킹 접합부 이탈 현상",
      "강풍이나 폭우 시 샷시 하단 콘크리트로 물 고임"
    ];
  };

  const symptomsList = getSymptomList();
  const mainImage = imageSlots.symptomSectionImage;
  const altText = region && service ? `${regionName} ${serviceName} 누수 증상 자가진단` : "누수 의심 증상";

  return (
    <section id="symptoms" className="py-12 sm:py-16 bg-white w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 섹션 헤더 (H2 사용) */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-extrabold text-brand-primary tracking-tight">
            {region ? `${regionName} ${serviceName} 자가진단` : "이런 증상이 있다면 빗물누수 점검이 필요합니다"}
          </h2>
          <p className="mt-2 text-xs xs:text-sm text-gray-500 leading-relaxed">
            건물 내부 곰팡이와 마감재 변형이 시작되기 전에 문제를 빠르게 진단하세요.
          </p>
        </div>

        {/* 9단계: 이미지가 있을 때와 없을 때 레이아웃의 자연스러운 유연한 전환 */}
        <div className={`grid grid-cols-1 ${mainImage ? "lg:grid-cols-12 gap-8" : "max-w-4xl mx-auto"} items-center mb-10`}>
          
          {mainImage && (
            <div className="lg:col-span-5 w-full">
              <SafeImage 
                src={mainImage} 
                alt={altText} 
                aspectRatioClassName="aspect-[4/3] sm:aspect-video lg:aspect-square"
                className="rounded-xl shadow-xs object-cover"
              />
            </div>
          )}

          <div className={`${mainImage ? "lg:col-span-7" : "w-full"}`}>
            {/* 카드 리스트: 모바일 1열/2열, PC 최대 4열 (이미지가 없을 때는 2열 그리드로 더 와이드하게 확장) */}
            <div className={`grid gap-4 ${mainImage ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2"}`}>
              {symptomsList.map((sym, idx) => (
                <div 
                  key={idx} 
                  className="p-5 border border-slate-100/80 rounded-xl bg-slate-50/50 flex flex-col justify-start min-h-[110px]"
                >
                  <span className="text-[10px] font-bold text-brand-accent mb-1.5 uppercase tracking-wider">
                    증상 0{idx + 1}
                  </span>
                  {/* 카드 제목 H3 지정 */}
                  <h3 className="font-bold text-sm xs:text-base text-brand-primary mb-1 select-none">
                    {sym.split(" - ")[0]}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed line-clamp-3">
                    비가 내리는 시점 전후로 나타나는 전형적인 징후입니다. 방치하면 건물 내장재 손상 범위가 확대됩니다.
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 하단 카카오톡 연결 짧은 CTA 배치 */}
        <div className="text-center mt-6">
          <ContactButton 
            type="kakao" 
            variant="secondary"
            className="inline-flex items-center justify-center gap-2 px-6 h-12 bg-yellow-50 hover:bg-yellow-100/80 text-yellow-800 text-[14px] font-bold rounded-lg border border-yellow-200 transition-colors shadow-xs"
          >
            <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 3c-4.97 0-9 3.185-9 7.11 0 2.51 1.66 4.723 4.18 5.922-.165.617-.6 2.25-.688 2.587-.13.51.173.5.364.372.15-.1.2.148 2.822-1.92.73.204 1.514.32 2.322.32 4.97 0 9-3.185 9-7.11S16.97 3 12 3z" />
            </svg>
            <span>사진으로 현재 상태 문의하기</span>
          </ContactButton>
        </div>

      </div>
    </section>
  );
}
