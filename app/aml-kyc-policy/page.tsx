"use client"

import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"

export default function AmlKycPolicy() {
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Политика AML/KYC</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Наша политика по противодействию отмыванию денег и идентификации клиентов
            </p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 max-w-4xl mx-auto">
            <div className="space-y-6 max-w-none">
              <p>Загрузка...</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aml.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t("aml.subtitle")}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 max-w-4xl mx-auto">
          <div className="space-y-6 max-w-none">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section1.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section1.content")}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section2.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section2.content")}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li className="leading-relaxed">{t("aml.section2.list.item1")}</li>
                <li className="leading-relaxed">{t("aml.section2.list.item2")}</li>
                <li className="leading-relaxed">{t("aml.section2.list.item3")}</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section3.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section3.content")}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section4.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section4.content")}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section5.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section5.content")}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section6.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section6.content")}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section7.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section7.content")}</p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">{t("aml.section8.title")}</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">{t("aml.section8.content")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
