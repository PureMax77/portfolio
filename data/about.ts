export interface SkillCategory {
  [key: string]: string[];
}

export interface Achievement {
  iconName: "Briefcase" | "Award" | "Code2";
  title: string;
  description: string;
}

export interface Education {
  school: string;
  major?: string;
  period: string;
}

export interface Experience {
  company: string;
  period: string;
  description: string;
  team: string;
  position: string;
  website?: string;
}

export const skills: SkillCategory = {
  "Front-end": [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Redux",
    "Jotai",
    "Styled-Components",
    "Tailwind CSS",
    "Ant Design",
    "Shadcn",
    "Web3.js",
  ],
  "Back-end": ["Node.js", "Apollo Server", "Prisma"],
  AI: ["Cursor", "Python", "MCP"],
  etc: ["REST API", "GraphQL", "Github", "Bitbucket", "Docker"],
};

export const achievements: Achievement[] = [
  {
    iconName: "Briefcase",
    title: "6년차 프론트엔드 개발자",
    description: "스타트업 창업 멤버로 시작해 블록체인 도메인 전문성 보유",
  },
  {
    iconName: "Award",
    title: "커뮤니케이션 & 일정 관리",
    description:
      "대학원 랩장, 스타트업 프로젝트 리드 경험을 통한 협업 및 일정 관리 강점",
  },
  {
    iconName: "Code2",
    title: "도메인 이해 기반 개발",
    description:
      "블록체인, AI 등 서비스 도메인에 대한 깊은 이해를 바탕으로 완성도 높은 개발 추구",
  },
];

export const education: Education[] = [
  {
    school: "국민대학교 자동차공학과",
    period: "2010 - 2017",
  },
  {
    school: "국민대 자동차공학 전문대학원",
    major: "친인간지능형자동차",
    period: "2017 - 2019",
  },
];

export const experience: Experience[] = [
  {
    company: "슬로그",
    period: "2020.02 - 2021.07",
    description: "AI 기반 학습시간 관리 서비스를 운영하는 스타트업",
    team: "개발팀(2명)",
    position: "CTO",
    website: "https://deeeeptime.netlify.app",
  },
  {
    company: "씨피랩스",
    period: "2022.03 - 2025.12",
    description: "AI-Web3 솔루션 등 블록체인 서비스를 제공하는 중소기업",
    team: "웹개발팀(8명), AI솔루션1팀(4명)",
    position: "프로",
    website: "https://cplabs.io",
  },
];
