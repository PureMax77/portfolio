'use client'

import { motion } from 'framer-motion'
import { Code2, Layout, Server, Wrench, Award, Briefcase } from 'lucide-react'

export default function About() {
  const skills = {
    Language: ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python'],
    Frontend: [
      'React',
      'Next.js',
      'Vue.js',
      'Redux',
      'Zustand',
      'React Query',
      'Tailwind CSS',
      'Styled Components',
    ],
    Backend: ['Node.js', 'Express', 'NestJS', 'GraphQL', 'REST API'],
    Tools: [
      'Git',
      'GitHub Actions',
      'Docker',
      'AWS',
      'Vercel',
      'Webpack',
      'Vite',
      'Jest',
      'Cypress',
    ],
  }

  const achievements = [
    {
      icon: <Briefcase className="h-6 w-6" />,
      title: '6년차 경력',
      description: '스타트업부터 대기업까지 다양한 프로젝트 경험',
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: '성능 최적화',
      description: '초기 로딩 시간 40% 개선, Core Web Vitals 향상',
    },
    {
      icon: <Code2 className="h-6 w-6" />,
      title: '팀 리딩',
      description: '5인 규모 프론트엔드 팀 리드 및 멘토링 경험',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

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

        {/* Skills */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {Object.entries(skills).map(([category, items]) => (
            <motion.div key={category} variants={itemVariants}>
              <div className="flex items-center gap-3 mb-4">
                {category === 'Language' && (
                  <Code2 className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                )}
                {category === 'Frontend' && (
                  <Layout className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                )}
                {category === 'Backend' && (
                  <Server className="h-6 w-6 text-primary-600 dark:text-primary-400" />
                )}
                {category === 'Tools' && (
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
  )
}

