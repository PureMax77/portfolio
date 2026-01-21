import { Project } from "@/types/project";

export const sideProjects: Project[] = [
  {
    id: 1,
    title: "풀팝서리단 (Pulbat Seoridan)",
    period: "2024.10 - 진행중",
    description:
      "농산물 실시간 시세 정보 및 특가 상품 제공 플랫폼입니다. 한국농수산식품유통공사(KAMIS) API를 활용하여 전국 주요 도시의 농산물 소매가격을 실시간으로 조회할 수 있으며, 가격 변동 추이를 시각적으로 확인할 수 있는 서비스입니다.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "Shadcn UI",
      "Chart.js",
      "PWA",
    ],
    role: "리더",
    liveUrl: "https://pulbat-seoridan.vercel.app",
    achievement:
      "AI를 통한 마트 시세 데이터 수집 자동화, 실시간 농산물 소매 시세 조회, PWA 지원",
    issues: [
      {
        issue: "마트별로 흩어진 가격 정보와 파악하기 힘든 가격 변동 추이로 인해, 소비자가 합리적인 구매 시점과 진정한 할인 혜택(단위 가격)을 직관적으로 판단하기 어려움",
        solution: "Stagehand와 LLM을 활용한 지능형 크롤링 자동화로 실시간 시장 데이터를 수집하고, 단위 가격 분석 기반의 베스트 딜 큐레이션, 제철 장바구니 추천, 가격 추이 시각화를 통해 데이터 기반의 합리적인 소비를 지원",
      },
      {
        issue: "전국 24개 주요 도시의 농산물 소매가격 실시간 조회",
        solution:
          "40여 종의 주요 농산물 가격 정보 제공 및 부류, 품목, 품종, 등급별 세밀한 필터링 기능 구현",
      },
      {
        issue: "네이티브 앱 수준의 사용자 경험 제공 필요",
        solution:
          "PWA 기술을 적용하여 오프라인 지원, 캐싱 전략, 홈 화면 추가 기능을 구현하고 모바일에 최적화된 네비게이션 제공",
      },
    ],
  },
];
