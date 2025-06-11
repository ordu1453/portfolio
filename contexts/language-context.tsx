"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { en } from "@/dictionaries/en"
import { tr } from "@/dictionaries/tr"
import { ru } from "@/dictionaries/ru"

type Language = "en" | "tr" | "ru"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("tr")

  const dictionaries = {
    en,
    tr,
    ru,
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value: any = dictionaries[language]

    for (const k of keys) {
      if (value && value[k]) {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }

    return value
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
