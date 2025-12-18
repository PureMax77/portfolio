import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Senior Frontend Developer',
  description: '6년차 프론트엔드 개발자의 포트폴리오입니다. React, Next.js, TypeScript를 주로 사용합니다.',
  keywords: ['Frontend Developer', 'React', 'Next.js', 'TypeScript', 'Portfolio'],
  authors: [{ name: 'Senior Frontend Developer' }],
  openGraph: {
    title: 'Portfolio | Senior Frontend Developer',
    description: '6년차 프론트엔드 개발자의 포트폴리오',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Senior Frontend Developer',
    description: '6년차 프론트엔드 개발자의 포트폴리오',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  )
}

