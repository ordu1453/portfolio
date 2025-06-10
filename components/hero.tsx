"use client"

import { Github, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-teal-400 font-mono text-lg mb-6">{t("hero.greeting")}</p>
        <h1 className="text-5xl lg:text-7xl font-bold text-slate-200 mb-4">{t("hero.name")}</h1>
        <h2 className="text-4xl lg:text-6xl font-bold text-slate-400 mb-8">{t("hero.title")}</h2>
        <p className="text-slate-400 text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {t("hero.description")}
        </p>
        <div className="flex gap-6 justify-center">
          <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors">
            <Send className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  )
}
