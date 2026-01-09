"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Server,
  Wrench,
  Building2,
  ExternalLink,
  Briefcase,
  Award,
  Code2,
} from "lucide-react";
import {
  skills,
  achievements,
  education,
  experience,
} from "@/data/about";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  Award,
  Code2,
};

export default function About() {
  // Sort education by period (newest first)
  const sortedEducation = [...education].sort((a, b) => {
    const getStartYear = (period: string) => {
      const startYear = period.split(" - ")[0];
      return parseInt(startYear);
    };
    return getStartYear(b.period) - getStartYear(a.period);
  });

  // Sort experience by period (newest first)
  const sortedExperience = [...experience].sort((a, b) => {
    const getStartDate = (period: string) => {
      const startPeriod = period.split(" - ")[0];
      const [year, month] = startPeriod.split(".").map(Number);
      return year * 100 + month; // Convert to comparable number (e.g., 202202)
    };
    return getStartDate(b.period) - getStartDate(a.period);
  });

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
            블록체인 도메인 전문성과 협업 능력을 갖춘 개발자입니다
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
                  {iconMap[achievement.iconName] &&
                    (() => {
                      const IconComponent = iconMap[achievement.iconName];
                      return <IconComponent className="h-6 w-6" />;
                    })()}
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
            {sortedEducation.map((edu, index) => (
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
            {sortedExperience.map((exp, index) => (
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
