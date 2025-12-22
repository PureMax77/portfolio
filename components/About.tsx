"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Layout,
  Server,
  Wrench,
  Award,
  Briefcase,
  Building2,
  ExternalLink,
} from "lucide-react";

export default function About() {
  const skills = {
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

  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: "6년차 프론트엔드 개발자",
      description: "에듀테크 스타트업에서 블록체인 회사까지 다양한 도메인 경험",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "블록체인 & AI 전문성",
      description:
        "DeFi, Web Wallet, Explorer 등 블록체인 서비스 및 AI 프로젝트 개발",
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: "도메인 이해 기반 개발",
      description:
        "서비스 도메인에 대한 깊은 이해를 바탕으로 완성도 높은 개발 추구",
    },
  ];

  const education = [
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

  const experience = [
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="about"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            사용자 경험과 코드 품질을 최우선으로 생각하는 개발자입니다
          </p>
        </motion.div>

        {/* Achievements */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-3">
                <div className="p-3 bg-primary-600 text-white rounded-lg">
                  {achievement.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {achievement.title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Education */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {edu.school}
                </h4>
                {edu.major && (
                  <p className="text-gray-600 dark:text-gray-400 mb-2">
                    {edu.major}
                  </p>
                )}
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  {edu.period}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Experience
          </h3>
          <div className="space-y-4">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <Building2 className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.company}
                        </h4>
                        {exp.website && (
                          <a
                            href={exp.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                            aria-label={`${exp.company} 웹사이트 방문`}
                          >
                            <ExternalLink className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                      <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-semibold">
                        {exp.position}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                      {exp.period}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2 leading-relaxed">
                      {exp.description}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">
                      소속팀: {exp.team}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Skills
          </h3>
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                {category === "Front-end" && (
                  <Layout className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                )}
                {category === "Back-end" && (
                  <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                )}
                {category === "AI" && (
                  <Code2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                )}
                {category === "etc" && (
                  <Wrench className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:bg-primary-100 dark:hover:bg-gray-700 hover:text-primary-700 dark:hover:text-primary-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
