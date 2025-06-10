"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-end">
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm">
              <span className="text-teal-400">01.</span> {t("nav.about")}
            </a>
            <a href="#experience" className="text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm">
              <span className="text-teal-400">02.</span> {t("nav.experience")}
            </a>
            <a href="#education" className="text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm">
              <span className="text-teal-400">03.</span> {t("nav.education")}
            </a>
            <a href="#projects" className="text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm">
              <span className="text-teal-400">04.</span> {t("nav.work")}
            </a>
            <a href="#contact" className="text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm">
              <span className="text-teal-400">05.</span> {t("nav.contact")}
            </a>
            <LanguageSelector />
          </div>
        </div>
      </div>
    </nav>
  )
}
