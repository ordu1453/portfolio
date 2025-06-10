"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/contexts/language-context"
import { LanguageSelector } from "@/components/language-selector"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("mobile-menu-open")
    } else {
      document.body.classList.remove("mobile-menu-open")
    }

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("mobile-menu-open")
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: "#about", label: t("nav.about"), number: "01" },
    { href: "#experience", label: t("nav.experience"), number: "02" },
    { href: "#education", label: t("nav.education"), number: "03" },
    { href: "#projects", label: t("nav.work"), number: "04" },
    { href: "#contact", label: t("nav.contact"), number: "05" },
  ]

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-slate-900/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
          }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand (optional) */}
            <div className="text-teal-400 font-mono text-xl font-bold md:hidden"></div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 ml-auto">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-slate-300 hover:text-teal-400 transition-colors font-mono text-sm"
                  onClick={closeMobileMenu}
                >
                  <span className="text-teal-400">{item.number}.</span> {item.label}
                </a>
              ))}
              <LanguageSelector />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden text-slate-300 hover:text-teal-400 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && <div className="fixed inset-0 bg-black/50 z-40 md:hidden" onClick={closeMobileMenu} />}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-900 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-700">
            <div className="text-teal-400 font-mono text-xl font-bold">Menu</div>
            <button
              onClick={closeMobileMenu}
              className="text-slate-300 hover:text-teal-400 transition-colors p-2"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Mobile Menu Items */}
          <div className="flex flex-col space-y-1 p-6 flex-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-300 hover:text-teal-400 transition-colors font-mono text-lg py-3 px-4 rounded-lg hover:bg-slate-800/50"
                onClick={closeMobileMenu}
              >
                <span className="text-teal-400">{item.number}.</span> {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Language Selector */}
          <div className="p-6 border-t border-slate-700">
            <LanguageSelector />
          </div>
        </div>
      </div>
    </>
  )
}
