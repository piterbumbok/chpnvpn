"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Sun, Moon } from "lucide-react"
import { useLanguage } from "@/context/language-context"
import { useTheme } from "@/context/theme-context"
import LanguageSwitcher from "./language-switcher"

export default function Header() {
  const [mounted, setMounted] = useState(false)
  const { t } = useLanguage()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light")
  }

  // Если компонент не смонтирован, возвращаем заглушку для предотвращения проблем с гидратацией
  if (!mounted) {
    return (
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 relative mr-2"></div>
            <span className="text-lg font-medium">Chupapi Munyanya</span>
          </div>
          <div className="flex items-center space-x-3">
            <div className="bg-blue-500 text-white rounded-lg px-3 py-2"></div>
            <div className="w-8 h-8 flex items-center justify-center text-gray-600 dark:text-gray-300"></div>
          </div>
        </div>
      </header>
    )
  }

  return (
    <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="w-8 h-8 relative mr-2">
            <Image src="https://chpnvpn.com/logotg.png" alt="Chupapi Munyanya Logo" width={32} height={32} />
          </div>
          <span className="text-lg font-medium text-gray-900 dark:text-white">Chupapi Munyanya</span>
        </Link>

        <div className="flex items-center space-x-3">
          <LanguageSwitcher />
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            aria-label={theme === "light" ? "Switch to dark theme" : "Switch to light theme"}
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </div>
      </div>
    </header>
  )
}
