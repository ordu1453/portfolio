"use client"

import { useLanguage } from "@/contexts/language-context"

export function Education() {
  const { t } = useLanguage()
  const schools = t("education.schools")

  return (
    <section id="education" className="py-20 px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-12">
          <span className="text-teal-400 font-mono text-xl mr-4">03.</span>
          <h2 className="text-3xl font-bold text-slate-200">{t("education.title")}</h2>
          <div className="flex-1 h-px bg-slate-600 ml-8"></div>
        </div>

        <div className="space-y-12">
          {schools.map((edu: any, index: number) => (
            <div key={index} className="border-l-2 border-slate-700 pl-8 relative">
              <div className="absolute w-4 h-4 bg-teal-400 rounded-full -left-2 top-0"></div>

              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-200 mb-1">{edu.degree}</h3>
                <p className="text-teal-400 font-medium mb-1">{edu.school}</p>
                <div className="flex items-center gap-4 text-slate-400 font-mono text-sm">
                  <span>{edu.period}</span>
                  {edu.gpa && <span>GPA: {edu.gpa}</span>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-slate-200 font-medium mb-3">{t("education.courseworkTitle")}</h4>
                  <ul className="space-y-2">
                    {edu.coursework.map((course: string, courseIndex: number) => (
                      <li key={courseIndex} className="flex items-start text-slate-400 text-sm">
                        <span className="text-teal-400 mr-3 mt-1">▹</span>
                        <span>{course}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-slate-200 font-medium mb-3">{t("education.activitiesTitle")}</h4>
                  <ul className="space-y-2">
                    {edu.activities.map((activity: string, activityIndex: number) => (
                      <li key={activityIndex} className="flex items-start text-slate-400 text-sm">
                        <span className="text-teal-400 mr-3 mt-1">▹</span>
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
