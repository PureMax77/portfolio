import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: '글로벌 이커머스 플랫폼',
    period: '2023.01 - 2024.12',
    description:
      '대규모 이커머스 플랫폼의 프론트엔드 아키텍처를 설계하고 구현했습니다. 마이크로 프론트엔드 아키텍처를 도입하여 팀 간 독립적인 개발 환경을 구축했습니다.',
    technologies: ['Next.js', 'TypeScript', 'React Query', 'Tailwind CSS', 'AWS'],
    role: '리더',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://ecommerce-demo.vercel.app',
    achievement:
      '초기 로딩 시간 40% 개선, 월간 활성 사용자 100만 달성',
  },
  {
    id: 2,
    title: 'SaaS 대시보드 플랫폼',
    period: '2022.06 - 2023.12',
    description:
      '데이터 시각화와 실시간 분석 기능을 제공하는 SaaS 대시보드를 개발했습니다. 복잡한 데이터를 직관적으로 표현하여 사용자 경험을 극대화했습니다.',
    technologies: ['React', 'TypeScript', 'Redux', 'D3.js', 'Material-UI'],
    role: '메인',
    githubUrl: 'https://github.com/yourusername/dashboard',
    liveUrl: 'https://dashboard-demo.vercel.app',
    achievement:
      '차트 렌더링 성능 60% 향상, 고객 만족도 4.8/5.0',
  },
  {
    id: 3,
    title: '협업 툴 웹 애플리케이션',
    period: '2021.09 - 2022.05',
    description:
      '실시간 협업 기능을 제공하는 프로젝트 관리 도구입니다. WebSocket을 활용한 실시간 동기화와 드래그앤드롭 인터페이스를 구현했습니다.',
    technologies: ['Vue.js', 'Vuex', 'Socket.io', 'Node.js', 'MongoDB'],
    role: '메인',
    githubUrl: 'https://github.com/yourusername/collaboration-tool',
    achievement:
      '실시간 동기화 지연시간 100ms 이하 달성, 동시 접속자 5,000명 지원',
  },
  {
    id: 4,
    title: '모바일 뱅킹 앱 (PWA)',
    period: '2021.03 - 2021.08',
    description:
      'Progressive Web App 기술을 활용한 모바일 뱅킹 서비스입니다. 오프라인에서도 작동하는 안정적인 사용자 경험을 제공합니다.',
    technologies: ['React', 'TypeScript', 'PWA', 'Redux Toolkit', 'Express'],
    role: '보조',
    githubUrl: 'https://github.com/yourusername/mobile-banking',
    achievement:
      'Lighthouse 성능 점수 95점 이상, 오프라인 모드 구현',
  },
  {
    id: 5,
    title: '소셜 미디어 플랫폼',
    period: '2020.06 - 2021.02',
    description:
      '이미지 및 동영상 공유 소셜 미디어 플랫폼의 프론트엔드를 개발했습니다. 무한 스크롤과 이미지 최적화 기술을 적용했습니다.',
    technologies: ['Next.js', 'TypeScript', 'GraphQL', 'Apollo Client', 'Styled Components'],
    role: '메인',
    githubUrl: 'https://github.com/yourusername/social-media',
    liveUrl: 'https://social-demo.vercel.app',
    achievement:
      '이미지 로딩 최적화로 데이터 사용량 50% 절감, MAU 50만 달성',
  },
]

