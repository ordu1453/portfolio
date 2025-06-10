"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)
  const { t } = useLanguage()
  const experiences = t("experience.positions")

  return (
    <section id="experience" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-teal-400 font-mono text-xl mr-4">02.</span>
          <h2 className="text-3xl font-bold text-slate-200">{t("experience.title")}</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible">
            {experiences.map((exp: any, index: number) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-left whitespace-nowrap lg:whitespace-normal border-l-2 lg:border-l-2 lg:border-b-0 border-b-2 transition-colors font-mono text-sm ${
                  activeTab === index
                    ? "border-teal-400 text-teal-400 bg-teal-400/10"
                    : "border-slate-600 text-slate-400 hover:text-teal-400 hover:bg-slate-800/50"
                }`}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-200">
                {experiences[activeTab].title} <span className="text-teal-400">@ {experiences[activeTab].company}</span>
              </h3>
              <p className="text-slate-400 font-mono text-sm mt-1">{experiences[activeTab].period}</p>
            </div>

            <ul className="space-y-3">
              {experiences[activeTab].description.map((item: string, index: number) => (
                <li key={index} className="flex items-start text-slate-400">
                  <span className="text-teal-400 mr-3 mt-1">▹</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
