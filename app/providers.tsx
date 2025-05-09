"use client"

import { ThemeProvider } from "@/context/theme-context"
import { LanguageProvider } from "@/context/language-context"
import type { ReactNode } from "react"

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
