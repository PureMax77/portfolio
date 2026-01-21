import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "정상헌 | Front-end Developer",
  description:
    "React/TypeScript 기반 6년차 프론트엔드 개발자입니다. 초기 스타트업 창업 멤버 경험과 블록체인(Web3), AI 도메인 전문성을 보유하고 있습니다.",
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
      "React/TypeScript 기반 6년차 프론트엔드 개발자입니다. 초기 스타트업 창업 멤버 경험과 블록체인(Web3), AI 도메인 전문성을 보유하고 있습니다.",
    type: "website",
    locale: "ko_KR",
    url: "https://puremax77.tistory.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "정상헌 | Front-end Developer",
    description:
      "React/TypeScript 기반 6년차 프론트엔드 개발자입니다. 초기 스타트업 창업 멤버 경험과 블록체인(Web3), AI 도메인 전문성을 보유하고 있습니다.",
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
