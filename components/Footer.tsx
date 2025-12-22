'use client'

import { Mail, Heart, Github, BookOpen } from 'lucide-react'
import { socialLinks, email } from '@/data/contact'

const socialIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Github,
  BookOpen,
  Mail,
};

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
            <span>© {currentYear} 정상헌 (Sanghun Jeong). Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>and Next.js</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                aria-label={social.label}
              >
                {socialIconMap[social.iconName] &&
                  (() => {
                    const IconComponent = socialIconMap[social.iconName];
                    return <IconComponent className="h-5 w-5" />;
                  })()}
              </a>
            ))}
            <a
              href={`mailto:${email}`}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

