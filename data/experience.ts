import { Project } from "@/types/project";

export const roles = ["전체", "리더", "메인", "보조"];

export const experiences: Project[] = [
  {
    id: 1,
    title: "DeepTime - AI 기반 학습시간 관리",
    period: "2020.02 - 2021.07",
    description:
      "스타트업의 Co-founder 개발자로서 Full-Stack 웹 서비스를 개발했습니다. 학습시간 기록, 스케줄 관리, 그룹 스터디, 교재 관리 등 서비스의 전반적인 기능을 개발했습니다.",
    technologies: [
      "React",
      "Styled Components",
      "Node.js",
      "Apollo Server",
      "GraphQL",
      "Prisma",
    ],
    role: "리더",
    liveUrl: "https://deeeeptime.netlify.app/#/experience",
    liveComment:
      "서비스 종료로 인해 체험하기 기능만 확인 가능합니다.\n시간 기록은 분 단위로 기록됩니다.",
    achievement:
      "학습시간 기록, 스케줄 관리, 그룹 스터디, 교재 관리 등 서비스의 전반적인 기능 개발",
  },
  {
    id: 2,
    title: "WEMIX.Fi - DeFi 블록체인 서비스",
    period: "2022.08 - 2024.04",
    description:
      "WEMIX 메인넷 기반의 디파이(DeFi, 탈중앙화 금융) 서비스의 Front-end를 개발했습니다. 은행처럼 자산을 관리하는 서비스이기 때문에 오류를 최소화하는 것이 가장 중요하다고 판단했으며, 디파이 로직이 정확히 어떻게 작동하는지 이해하려 노력했습니다.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Jotai",
      "SCSS",
      "Ant Design",
      "Web3.js",
    ],
    role: "보조",
    liveUrl: "https://wemax.fi",
    liveComment:
      "개발했던 서비스가 다른 회사로 이관되면서 일부 변경되었습니다.\n어떤 서비스인지 참고용으로만 봐주세요.",
    achievement:
      "Swap(V2, V3) 메인 개발, Staking, Pool, Lending, Dashboard 보조 개발",
    issues: [
      {
        issue:
          "풀(Pool)의 실시간 변동성으로 인해 사용자가 안내받은 예상 수량과 실제 스왑(Swap) 완료 후 수령하는 토큰 수량이 달라지는 혼선 발생",
        solution:
          "트랜잭션 완료 후 Web3.js로 Receipt 내 Swap Event 로그를 조회 및 디코딩하여, 실제 블록체인상에서 체결된 정확한 수량을 추출해 사용자에게 제공하는 로직 구현",
        blogUrl: "https://puremax77.tistory.com/10",
      },
      {
        issue:
          "차트, 리스트, 히스토리 등 다양한 데이터 조회 시 사용자가 필터나 탭을 빠르게 전환할 때, 이전 요청의 응답이 늦게 도착하여 현재 선택된 조건의 데이터를 덮어쓰는 화면 오류 발생",
        solution:
          "AbortController 기반 커스텀 훅을 구현하여 조건 변경 시 이전 API 요청을 즉시 중단(Abort)시키고 최신 요청만 반영되도록 처리. 차트 외에도 Dashboard, Portfolio, Tokens 등 주요 수치 데이터 조회 영역에 적용하여 데이터 정합성 확보",
        blogUrl: "https://puremax77.tistory.com/36",
      },
    ],
  },
  {
    id: 3,
    title: "WEB2X - 블록체인 API 서비스",
    period: "2024.01 - 2024.11",
    description:
      "API로 손쉽게 블록체인 서비스 개발을 도와주는 WEB2X 서비스의 Front-end를 개발했습니다. 주로 로그인, 회원가입, 세션 관리(NextAuth.js), Passkey 연동 개발을 담당했습니다.",
    technologies: ["TypeScript", "Next.js", "Ant Design", "SCSS", "NextAuth"],
    role: "보조",
    infoUrl: "https://cplabs.io/web2x",
    achievement: "로그인, 회원가입, 세션 관리(NextAuth.js), Passkey 연동 개발",
    issues: [
      {
        issue:
          "투표, 토큰 전송 등 여러 화면에서 WebAuthn API 호출, ArrayBuffer 변환, Challenge 처리 등 복잡한 Passkey 인증 로직을 각 페이지마다 중복 구현하여 유지보수성 저하",
        solution:
          "커스텀 훅으로 Passkey 인증 로직을 모듈화하고, 여러 화면에서 재사용하여 코드 중복 제거",
        // blogUrl: "https://blog.example.com/web2x-passkey-custom-hook",
      },
      {
        issue:
          "동시에 토큰 가격 정보를 요청할 때마다 외부(빗썸) API를 직접 호출하여 API Rate Limit 도달 및 서버 부하 발생. 클라이언트 캐싱 시 만료 후 동시다발적인 재요청으로 인한 서버 과부하 우려",
        solution:
          "node-cache를 활용한 서버 메모리 캐싱과 stale-while-revalidate 패턴 구현. 60초 TTL 설정으로 외부 API 호출을 99% 이상 감소시키고, 평균 응답 속도를 250ms에서 10ms 이하로 단축(약 95% 개선)하여 동시 접속자 증가 시에도 안정적인 서비스 제공",
        blogUrl: "https://puremax77.tistory.com/22",
      },
    ],
  },
  {
    id: 4,
    title: "WEMIX Web Wallet - 블록체인 지갑",
    period: "2024.04 - 2024.05",
    description:
      "WEMIX 테스트넷 전용 Web Wallet 서비스의 Front-end를 주도적으로 개발했습니다. Web3.js를 활용하여 지갑 생성, 잔고 조회, 토큰 전송, Faucet 등 블록체인 Wallet의 핵심 기능을 구현했습니다.",
    technologies: ["Javascript", "React", "Redux", "SCSS", "Web3.js"],
    role: "메인",
    liveUrl: "https://wallet.test.wemix.com/",
    achievement: "지갑 생성, 잔고 조회, 토큰 전송, Faucet 등 핵심 기능 구현",
  },
  {
    id: 5,
    title: "Metadium Explorer - 블록체인 탐색기",
    period: "2024.12 - 2025.07",
    description:
      "블록체인 활동을 간편하게 조회할 수 있는 Explorer 서비스의 Front-end를 개발했습니다. Nuxt 애플리케이션을 Next.js로 마이그레이션 일부 페이지(30%) 담당하였으며, 챗봇이 Explorer API, JSON RPC를 사용할 수 있도록 SDK를 사용해 MCP Server를 개발했습니다.",
    technologies: [
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
      "Web3.js",
      "Python",
      "MCP SDK",
    ],
    role: "보조",
    liveUrl: "https://explorer.metadium.com/",
    achievement:
      "Nuxt → Next.js 마이그레이션 일부 페이지(30%) / 챗봇이 Explorer API, JSON RPC를 사용할 수 있도록 MCP Server 개발",
  },
  {
    id: 6,
    title: "ANPR - 자동 번호판 인식 시스템",
    period: "2025.07 - 2025.12",
    description:
      "톨게이트 시스템 중 차량의 번호판을 자동으로 인식하기 위한 AI 모델 튜닝 환경을 개발했습니다. 객체 인식 모델(YOLO) 파인튜닝, 데이터셋 및 모델 버전 관리를 위한 사내 관리페이지를 개발했습니다.",
    technologies: [
      "Python",
      "PyTorch",
      "OpenCV",
      "Docker",
      "Next.js",
      "Tailwind CSS",
      "Shadcn",
    ],
    role: "보조",
    achievement:
      "객체 인식 모델(YOLO) 파인튜닝, 데이터셋 및 모델 버전 관리를 위한 사내 관리페이지 개발",
  },
];
