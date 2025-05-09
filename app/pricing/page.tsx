"use client"

import { useLanguage } from "@/context/language-context"

export default function PricingPage() {
  const { t } = useLanguage()

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold text-center mb-8">
        {t("pricing.title")} <span className="text-blue-500"></span>
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">{t("pricing.subtitle")}</p>

      <div className="flex justify-center">
        <div className="text-center p-8 border border-gray-200 dark:border-gray-700 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">{t("pricing.coming")}</h2>
          <p className="text-gray-600 dark:text-gray-400">{t("pricing.message")}</p>
        </div>
      </div>
    </div>
  )
}
