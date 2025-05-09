"use client"

import { useState, useRef, useEffect } from "react"
import { useLanguage } from "@/context/language-context"
import { ChevronDown, Check, Globe } from "lucide-react"

export default function LanguageSwitcher() {
  const { language, setLanguage, t, languages } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Закрываем выпадающее меню при клике вне его
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguageSelect = (langCode: string) => {
    setLanguage(langCode as any)
    setIsOpen(false)
  }

  // Получаем информацию о текущем языке
  const currentLang = languages.find((lang) => lang.code === language) || languages[0]

  if (!mounted) {
    return (
      <div className="relative">
        <button className="bg-blue-500 text-white rounded-lg px-3 py-2 flex items-center space-x-2">
          <Globe size={16} />
          <span>...</span>
          <ChevronDown size={16} />
        </button>
      </div>
    )
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-3 py-2 flex items-center space-x-2 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} />
        <span>{currentLang.nativeName}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute z-50 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 max-h-96 overflow-y-auto">
          <div className="py-1" role="menu" aria-orientation="vertical">
            <div className="px-3 py-2 text-xs font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
              {t("language.select")}
            </div>
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageSelect(lang.code)}
                className={`w-full text-left px-4 py-2 text-sm flex items-center justify-between ${
                  language === lang.code
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
                role="menuitem"
              >
                <div className="flex items-center">
                  <span className="mr-2">{lang.nativeName}</span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">({lang.name})</span>
                </div>
                {language === lang.code && <Check size={16} />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
