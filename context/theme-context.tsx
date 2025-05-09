"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Theme = "light" | "dark"

interface ThemeContextType {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Используем null как начальное значение, чтобы избежать несоответствия между сервером и клиентом
  const [theme, setThemeState] = useState<Theme | null>(null)
  const [mounted, setMounted] = useState(false)

  // Этот эффект выполняется только на клиенте после монтирования компонента
  useEffect(() => {
    setMounted(true)
    // Получаем тему из localStorage или используем системные предпочтения
    const savedTheme = localStorage.getItem("theme") as Theme
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"

    setThemeState(savedTheme || systemTheme)
  }, [])

  // Обновляем data-атрибут только на клиенте и только когда тема определена
  useEffect(() => {
    if (mounted && theme) {
      document.documentElement.setAttribute("data-theme", theme)
    }
  }, [theme, mounted])

  const setTheme = (newTheme: Theme) => {
    if (mounted) {
      setThemeState(newTheme)
      localStorage.setItem("theme", newTheme)
    }
  }

  // Возвращаем значение темы только когда компонент смонтирован
  // Это предотвращает несоответствие между сервером и клиентом
  const contextValue = {
    theme: mounted && theme ? theme : "light",
    setTheme,
  }

  return <ThemeContext.Provider value={contextValue}>{children}</ThemeContext.Provider>
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}
