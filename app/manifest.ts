import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: '정상헌 | Front-end Developer Portfolio',
    short_name: '정상헌 Portfolio',
    description: 'React, TypeScript 기반의 6년차 웹 프론트엔드 개발자 정상헌의 포트폴리오',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#0ea5e9',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}

