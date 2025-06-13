"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
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
  const [language, setLanguage] = useState<Language>("en")

  // Detect user's language based on browser settings
  useEffect(() => {
    const detectLanguage = () => {
      const browserLang = navigator.language.split("-")[0].toLowerCase()

      // Check if the browser language is supported in our app
      const supportedLanguages: Language[] = ["en", "tr", "ru"]

      if (supportedLanguages.includes(browserLang as Language)) {
        setLanguage(browserLang as Language)
      }

      // Save the language preference to localStorage
      const savedLanguage = localStorage.getItem("preferredLanguage")
      if (savedLanguage && supportedLanguages.includes(savedLanguage as Language)) {
        setLanguage(savedLanguage as Language)
      }
    }

    detectLanguage()
  }, [])

  // Save language preference when it changes
  useEffect(() => {
    localStorage.setItem("preferredLanguage", language)
  }, [language])

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
