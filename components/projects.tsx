"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Github, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { ProjectCarousel } from "@/components/project-carousel"

export function Projects() {
  const { t } = useLanguage()
  const projects = t("projects.projects")

  return (
    <section id="projects" className="py-20 px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-teal-400 font-mono text-xl mr-4">04.</span>
          <h2 className="text-3xl font-bold text-slate-200">{t("projects.title")}</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        <div className="space-y-20">
          {projects.map((project: any, index: number) => (
            <div
              key={index}
              className={`grid lg:grid-cols-12 gap-8 items-center ${index % 2 === 1 ? "lg:text-right" : ""}`}
            >
              <div className={`lg:col-span-7 ${index % 2 === 1 ? "lg:col-start-6" : ""}`}>
                <ProjectCarousel
                  images={project.images || [project.image || `/images/project${index + 1}.jpg`]}
                  title={project.title}
                />
              </div>

              <div className={`lg:col-span-5 ${index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}`}>
                <div className="space-y-4">
                  <p className="text-teal-400 font-mono text-sm">{t("projects.featuredProject")}</p>
                  <h3 className="text-2xl font-bold text-slate-200">{project.title}</h3>

                  <Card className="bg-slate-800 border-slate-700">
                    <CardContent className="p-6">
                      <p className="text-slate-400 leading-relaxed">{project.description}</p>
                    </CardContent>
                  </Card>

                  <div
                    className={`flex flex-wrap gap-3 font-mono text-sm text-slate-400 ${index % 2 === 1 ? "lg:justify-end" : ""}`}
                  >
                    {project.tech.map((tech: string, techIndex: number) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>

                  <div className={`flex gap-4 ${index % 2 === 1 ? "lg:justify-end" : ""}`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-400 transition-colors"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-teal-400 transition-colors"
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
