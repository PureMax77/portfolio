"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Github, Calendar, Award, Lightbulb, CheckCircle } from "lucide-react";
import { sideProjects } from "@/data/sideProjects";

export default function SideProjects() {
    const [selectedFilter, setSelectedFilter] = useState<string>("전체");

    // Get unique technologies for filtering
    const allTechnologies = Array.from(
        new Set(sideProjects.flatMap((project) => project.technologies))
    );

    // Filter and sort projects based on selected filters (newest first)
    const filteredProjects = sideProjects
        .filter((project) => {
            const technologyMatch =
                selectedFilter === "전체" ||
                project.technologies.includes(selectedFilter);
            return technologyMatch;
        })
        .sort((a, b) => {
            // Extract start year from period (e.g., "2024.11 - 진행중" -> 2024.11)
            const getStartDate = (period: string) => {
                const startPeriod = period.split(" - ")[0];
                const [year, month] = startPeriod.split(".").map(Number);
                return year * 100 + month; // Convert to comparable number (e.g., 202411)
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
            id="side-projects"
            className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900"
        >
            <div className="container mx-auto max-w-7xl">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
                        Side Projects
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        개인적으로 진행한 사이드 프로젝트들입니다
                    </p>
                </motion.div>

                {/* Technology Filter */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8"
                >
                    <div>
                        <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                            기술 스택 필터
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setSelectedFilter("전체")}
                                className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedFilter === "전체"
                                    ? "bg-primary-600 text-white shadow-lg"
                                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                                    }`}
                            >
                                전체
                            </button>
                            {allTechnologies.map((tech) => (
                                <button
                                    key={tech}
                                    onClick={() => setSelectedFilter(tech)}
                                    className={`px-4 py-2 rounded-lg font-medium transition-all ${selectedFilter === tech
                                        ? "bg-primary-600 text-white shadow-lg"
                                        : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                                        }`}
                                >
                                    {tech}
                                </button>
                            ))}
                        </div>
                    </div>
                </motion.div> */}

                {/* Projects Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    key={selectedFilter}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-shadow overflow-hidden"
                        >
                            <div className="p-6 md:p-8">
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                                            {project.title}
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                                            <Calendar className="h-4 w-4" />
                                            <span>{project.period}</span>
                                        </div>
                                    </div>
                                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 dark:from-purple-900 dark:to-pink-900 dark:text-purple-300">
                                        사이드 프로젝트
                                    </span>
                                </div>

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                                    {project.description}
                                </p>

                                {/* Achievement */}
                                <div className="flex items-start gap-2 mb-4 p-3 bg-amber-50 dark:bg-amber-900/20 rounded-lg">
                                    <Award className="h-5 w-5 text-amber-600 dark:text-amber-400 flex-shrink-0 mt-0.5" />
                                    <p className="text-sm text-amber-900 dark:text-amber-200">
                                        {project.achievement}
                                    </p>
                                </div>

                                {/* Key Features */}
                                {project.issues && project.issues.length > 0 && (
                                    <div className="mb-4 space-y-2">
                                        <div className="flex items-center gap-2 mb-3">
                                            <Lightbulb className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                                            <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                                                주요 기능 및 기술적 특징
                                            </h4>
                                        </div>
                                        {project.issues.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="p-3 bg-gray-50 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600"
                                            >
                                                {/* Issue as Challenge */}
                                                <div className="flex items-start gap-2 mb-2">
                                                    <div className="flex-1">
                                                        <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                                                            💡 {feature.issue}
                                                        </p>
                                                    </div>
                                                </div>
                                                {/* Solution as Implementation */}
                                                <div className="flex items-start gap-2">
                                                    <CheckCircle className="h-4 w-4 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                                                    <div className="flex-1">
                                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                                            {feature.solution}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Technologies */}
                                <div className="mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Links */}
                                <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-600">
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <Github className="h-4 w-4" />
                                            <span className="text-sm font-medium">GitHub</span>
                                        </a>
                                    )}
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            <span className="text-sm font-medium">Live Demo</span>
                                        </a>
                                    )}
                                    {project.infoUrl && (
                                        <a
                                            href={project.infoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-indigo-700 text-white rounded-lg hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
                                        >
                                            <ExternalLink className="h-4 w-4" />
                                            <span className="text-sm font-medium">Info Link</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Results Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <p className="text-gray-500 dark:text-gray-400 text-lg">
                            해당 필터에 맞는 프로젝트가 없습니다.
                        </p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
