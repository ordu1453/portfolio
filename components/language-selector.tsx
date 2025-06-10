"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function LanguageSelector() {
  const { language, setLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: "en", name: t("languages.en") },
    { code: "tr", name: t("languages.tr") },
    { code: "ru", name: t("languages.ru") },
  ]

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="text-slate-300 hover:text-teal-400 hover:bg-transparent">
          <Globe className="h-5 w-5 mr-1" />
          <span className="font-mono text-sm">{language.toUpperCase()}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-slate-800 border-slate-700">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`font-mono text-sm cursor-pointer ${
              language === lang.code ? "text-teal-400" : "text-slate-300"
            } hover:text-teal-400 focus:text-teal-400 hover:bg-slate-700 focus:bg-slate-700`}
            onClick={() => {
              setLanguage(lang.code as "en" | "tr" | "ru")
              setIsOpen(false)
            }}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
