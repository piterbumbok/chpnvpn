"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { Shield, Zap, Globe } from "lucide-react"
import { useEffect, useRef } from "react"

export default function Hero() {
  const { t } = useLanguage()
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Создаем анимированные блобы для фона
    if (heroRef.current) {
      const createBlob = () => {
        const blob = document.createElement("div")
        blob.classList.add("blob-shape", "animate-pulse-glow")

        // Случайный размер
        const size = Math.random() * 250 + 100
        blob.style.width = `${size}px`
        blob.style.height = `${size}px`

        // Случайная позиция
        blob.style.left = `${Math.random() * 100}%`
        blob.style.top = `${Math.random() * 100}%`

        // Случайный цвет (оттенки синего)
        const hue = 210 + Math.random() * 30
        const saturation = 70 + Math.random() * 30
        const lightness = 50 + Math.random() * 20
        blob.style.background = `hsla(${hue}, ${saturation}%, ${lightness}%, 0.1)`

        heroRef.current?.appendChild(blob)

        // Анимация движения
        const animateBlob = () => {
          const newX = Math.random() * 100
          const newY = Math.random() * 100
          blob.style.transition = "all 15s ease-in-out"
          blob.style.left = `${newX}%`
          blob.style.top = `${newY}%`

          setTimeout(animateBlob, 15000)
        }

        animateBlob()

        return blob
      }

      const blobs = Array.from({ length: 3 }, createBlob)

      return () => {
        blobs.forEach((blob) => blob.remove())
      }
    }
  }, [])

  return (
    <section className="compact-section relative overflow-hidden" ref={heroRef}>
      <div className="compact-container text-center relative z-10">
        <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mb-6 backdrop-blur-sm border border-blue-200/50 dark:border-blue-800/50">
          <Shield size={14} className="mr-1.5" />
          <span className="text-xs font-medium">{t("hero.badge")}</span>
        </div>

        <h1 className="compact-heading mb-3">
          <span className="gradient-text">{t("hero.titleHighlight")}</span> {t("hero.titleRest")}
        </h1>

        <p className="compact-subheading mb-8">{t("hero.subtitle")}</p>

        <div className="flex flex-col sm:flex-row justify-center gap-3 mb-12">
          <Link href="/pricing" className="blue-button flex items-center justify-center">
            <Shield size={16} className="mr-1.5" />
            {t("hero.primaryButton")}
          </Link>
          <Link href="/faq" className="blue-button-outline flex items-center justify-center">
            <Globe size={16} className="mr-1.5" />
            {t("hero.secondaryButton")}
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="glass-card compact-card glow-effect">
            <div className="feature-icon compact-icon mb-3 mx-auto">
              <Zap size={18} />
            </div>
            <h3 className="compact-feature mb-1">{t("hero.feature1.title")}</h3>
            <p className="compact-description">{t("hero.feature1.description")}</p>
          </div>

          <div className="glass-card compact-card glow-effect">
            <div className="feature-icon compact-icon mb-3 mx-auto">
              <Shield size={18} />
            </div>
            <h3 className="compact-feature mb-1">{t("hero.feature2.title")}</h3>
            <p className="compact-description">{t("hero.feature2.description")}</p>
          </div>

          <div className="glass-card compact-card glow-effect">
            <div className="feature-icon compact-icon mb-3 mx-auto">
              <Globe size={18} />
            </div>
            <h3 className="compact-feature mb-1">{t("hero.feature3.title")}</h3>
            <p className="compact-description">{t("hero.feature3.description")}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
