export interface Project {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  role: "리더" | "메인" | "보조";
  githubUrl?: string;
  liveUrl?: string;
  liveComment?: string;
  infoUrl?: string;
  achievement: string;
  image?: string;
}
