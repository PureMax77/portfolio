import { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 1,
    title: 'WemixFi - DeFi 블록체인 서비스',
    period: '2022.03 - 2025.12',
    description:
      'WEMIX 메인넷 기반의 디파이 서비스인 WemixFi의 Front-end를 개발했습니다. 은행처럼 자산을 관리하는 서비스이기 때문에 오류를 최소화하는 것이 가장 중요하다고 판단했으며, 디파이 로직이 정확히 어떻게 작동하는지 이해하려 노력했습니다.',
    technologies: ['TypeScript', 'Next.js', 'Jotai', 'SCSS', 'Ant Design', 'Web3.js'],
    role: '메인',
    liveUrl: 'https://wemixfi.com',
    achievement:
      'Swap V2, V3 메인 개발 / Staking, Pool, Lending, Dashboard 서브 개발',
  },
  {
    id: 2,
    title: 'Metadium Explorer - 블록체인 탐색기',
    period: '2024.06 - 2025.12',
    description:
      '블록체인 활동을 간편하게 조회할 수 있는 Explorer 서비스의 Front-end를 개발했습니다. Nuxt 애플리케이션을 Next.js로 마이그레이션하는 작업을 수행했으며, AI 챗봇이 Explorer의 정보를 조회할 수 있도록 MCP Server를 개발했습니다.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind CSS', 'Shadcn', 'Web3.js', 'Python', 'MCP SDK'],
    role: '메인',
    achievement:
      'Nuxt → Next.js 마이그레이션 (Blocks, Transactions, Tokens 페이지) / AI 챗봇 MCP Server 개발',
  },
  {
    id: 3,
    title: 'WEMIX Web Wallet - 블록체인 지갑',
    period: '2023.01 - 2023.12',
    description:
      'WEMIX 테스트넷 전용 Web Wallet 서비스의 Front-end를 주도적으로 개발했습니다. Web3.js를 활용하여 지갑 생성, 잔고 조회, 토큰 전송, Faucet 등 블록체인 Wallet의 핵심 기능을 구현했습니다.',
    technologies: ['Javascript', 'React', 'Redux', 'SCSS', 'Web3.js'],
    role: '메인',
    achievement:
      '지갑 생성, 잔고 조회, 토큰 전송, Faucet 등 핵심 기능 구현',
  },
  {
    id: 4,
    title: 'WEB2X - Web3 REST API 서비스',
    period: '2023.06 - 2024.03',
    description:
      'Web3 라이브러리 없이 REST API만으로 블록체인 기능을 사용할 수 있게 해주는 WEB2X 서비스의 Front-end를 개발했습니다. 주로 로그인, 회원가입, 세션 관리(NextAuth) 파트를 담당했으며, Passkey 연동 기능도 구현했습니다.',
    technologies: ['TypeScript', 'Next.js', 'Ant Design', 'SCSS', 'NextAuth'],
    role: '보조',
    achievement:
      '로그인, 회원가입, 세션 관리 및 Passkey 연동 기능 구현',
  },
  {
    id: 5,
    title: 'ANPR - 자동 번호판 인식 시스템',
    period: '2024.01 - 2024.06',
    description:
      '톨게이트 시스템 중 차량의 번호판을 자동으로 인식하기 위한 AI 모델 튜닝 환경을 개발했습니다. YOLO를 사용한 AI 모델 파인튜닝과 데이터셋 및 모델 버전 관리를 위한 사내 관리페이지를 개발했습니다.',
    technologies: ['Python', 'PyTorch', 'OpenCV', 'Docker', 'Next.js', 'Tailwind CSS', 'Shadcn'],
    role: '메인',
    achievement:
      'YOLO 기반 AI 모델 파인튜닝 환경 구축 / 데이터셋 & 모델 버전 관리 페이지 개발',
  },
  {
    id: 6,
    title: '슬로그 - 영상 기반 학습시간 관리',
    period: '2020.02 - 2021.07',
    description:
      '스타트업의 Co-founder 개발자로서 Full-Stack 웹 서비스를 개발했습니다. AI로 학습시간을 판단하는 로직 부분을 제외한 학습시간 기록, 스케줄 관리, 그룹 스터디, 교재 관리 등 서비스의 전반적인 기능을 개발했습니다.',
    technologies: ['React', 'Styled Components', 'Node.js', 'Apollo Server', 'GraphQL', 'Prisma'],
    role: '리더',
    achievement:
      'Full-Stack 개발: 학습시간 기록, 스케줄 관리, 그룹 스터디, 교재 관리 등',
  },
]

