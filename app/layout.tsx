import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ali Ordu - Embedded Systems Engineer",
  description: " ",
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.className} bg-slate-900 text-slate-100`}>
        <LanguageProvider>
          <Navigation />
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
