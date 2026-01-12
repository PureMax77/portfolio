import { Project } from "@/types/project";

export const sideProjects: Project[] = [
  {
    id: 1,
    title: "풀밭서리단 (Pulbat Seoridan)",
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
    liveUrl: "https://pulbat-seoridan.vercel.app/market",
    achievement:
      "실시간 농산물 시세 조회, 가격 변동 추이 차트, 다단계 필터 시스템, PWA 지원",
    issues: [
      {
        issue: "전국 8개 주요 도시의 농산물 소매가격 실시간 조회",
        solution:
          "50여 종의 주요 농산물 가격 정보 제공 및 부류, 품목, 품종, 등급별 세밀한 필터링 기능 구현",
      },
      {
        issue: "가격 변동 추이를 직관적으로 파악하기 어려움",
        solution:
          "Chart.js를 활용하여 최근 4개월 간의 일별 가격 추이를 인터랙티브한 그래프로 시각화. 지역별 비교 분석 가능",
      },
      {
        issue: "모바일 환경에서의 복잡한 필터 UI 구성",
        solution:
          "Bottom Sheet UI와 칩(Chip) 형태의 시각적 표시, 필터 확장/축소 기능으로 화면 공간을 효율적으로 활용",
      },
      {
        issue: "네이티브 앱 수준의 사용자 경험 제공 필요",
        solution:
          "PWA 기술을 적용하여 오프라인 지원, 캐싱 전략, 홈 화면 추가 기능을 구현하고 모바일에 최적화된 네비게이션 제공",
      },
    ],
  },
];
