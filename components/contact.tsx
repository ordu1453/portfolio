"use client"

import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <span className="text-teal-400 font-mono text-xl">05. {t("contact.preTitle")}</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-8">{t("contact.title")}</h2>

        <p className="text-slate-400 text-lg leading-relaxed mb-12">{t("contact.description")}</p>

        <Button
          size="lg"
          variant="outline"
          className="border-teal-400 text-teal-400 hover:bg-teal-400/10 px-8 py-4 text-lg"
        >
          <Send className="w-5 h-5 mr-2" />
          {t("contact.cta")}
        </Button>
      </div>
    </section>
  )
}
