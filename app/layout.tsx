import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "정상헌 | Front-end Developer",
  description:
    "React, TypeScript 기반의 6년차 웹 프론트엔드 개발자입니다. 블록체인 및 AI 도메인의 다양한 서비스를 개발했으며, 도메인에 대한 깊은 이해를 바탕으로 완성도 높은 개발을 추구합니다.",
  keywords: [
    "정상헌",
    "Sanghun Jeong",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web3",
    "Blockchain",
    "DeFi",
    "Portfolio",
  ],
  authors: [
    { name: "정상헌 (Sanghun Jeong)", url: "https://github.com/puremax77" },
  ],
  openGraph: {
    title: "정상헌 | Front-end Developer",
    description:
      "React, TypeScript 기반의 6년차 웹 프론트엔드 개발자 포트폴리오",
    type: "website",
    locale: "ko_KR",
    url: "https://puremax77.tistory.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "정상헌 | Front-end Developer",
    description:
      "React, TypeScript 기반의 6년차 웹 프론트엔드 개발자 포트폴리오",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
