"use client"

import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function About() {
  const { t } = useLanguage()

  return (
    <section id="about" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-teal-400 font-mono text-xl mr-4">01.</span>
          <h2 className="text-3xl font-bold text-slate-200">{t("about.title")}</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="text-slate-400 space-y-4 text-lg leading-relaxed">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>

            <div className="grid grid-cols-2 gap-2 mt-6 text-slate-400 font-mono text-sm">
              {t("about.technologies").map((tech: string, index: number) => (
                <div key={index} className="flex items-center">
                  <span className="text-teal-400 mr-2">▹</span>
                  {tech}
                </div>
              ))}
            </div>
          </div>

          <div className="relative group">
            <div className="relative z-10 bg-teal-400/10 rounded-lg overflow-hidden">
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                width={300}
                height={300}
                className="w-full h-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-teal-400 rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
