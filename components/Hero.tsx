'use client'

import { motion } from 'framer-motion'
import { ArrowDown, Download } from 'lucide-react'
import { skills } from '@/data/hero'

export default function Hero() {

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg md:text-xl text-primary-600 dark:text-primary-400 font-medium mb-4">
              안녕하세요, 저는
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            정상헌
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6"
          >
            Front-end Developer
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            React, TypeScript 기반의 6년차 웹 프론트엔드 개발자입니다.
            <br />
            블록체인 및 AI 도메인의 다양한 서비스를 개발했으며,
            도메인에 대한 깊은 이해를 바탕으로 완성도 높은 개발을 추구합니다.
          </motion.p>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {skills.map((skill, index) => (
              <span
                key={skill}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm md:text-base font-medium text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-shadow"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                {skill}
              </span>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <button
              onClick={scrollToProjects}
              className="w-full sm:w-auto px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              경험 보기
              <ArrowDown className="h-5 w-5" />
            </button>
            <a
              href="/resume_jsh.pdf"
              download
              className="w-full sm:w-auto px-8 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              이력서 다운로드
              <Download className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Social Links */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com/puremax77"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://puremax77.tistory.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="Blog"
            >
              <BookOpen className="h-6 w-6" />
            </a>
            <a
              href="tel:010-6692-2351"
              className="p-3 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors shadow-md hover:shadow-lg"
              aria-label="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
          </motion.div> */}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <ArrowDown className="h-6 w-6 text-gray-400" />
        </div>
      </motion.div>
    </section>
  )
}

