import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  // 충청북도 도메인 주소 설정
  metadataBase: new URL("https://www.cbrainguard.co.kr"),
  title: siteConfig.defaultTitle,
  description: siteConfig.defaultDescription,
  verification: {
    // 플레이스홀더 처리
    google: "GOOGLE_VERIFICATION_PLACEHOLDER",
    other: {
      "naver-site-verification": "NAVER_VERIFICATION_PLACEHOLDER"
    }
  },
  icons: {
    icon: [
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png"
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        url: "/favicon.ico"
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png"
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="antialiased min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
