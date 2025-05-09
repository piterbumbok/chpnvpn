"use client"

import { useLanguage } from "@/context/language-context"
import FaqSection from "@/components/faq-section"

export default function Faq() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("faq.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t("faq.subtitle")}</p>
        </div>

        <FaqSection />
      </div>
    </section>
  )
}
