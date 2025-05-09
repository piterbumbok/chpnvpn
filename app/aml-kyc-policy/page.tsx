"use client"

import { useLanguage } from "@/context/language-context"

export default function AMLKYCPolicy() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-300">
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{t("aml.title")}</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8">{t("aml.subtitle")}</p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section1.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t("aml.section1.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section2.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{t("aml.section2.content")}</p>
          <ul className="list-disc pl-6 text-gray-700 dark:text-gray-300">
            <li className="mb-2">{t("aml.section2.list.item1")}</li>
            <li className="mb-2">{t("aml.section2.list.item2")}</li>
            <li className="mb-2">{t("aml.section2.list.item3")}</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section3.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t("aml.section3.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section4.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t("aml.section4.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section5.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t("aml.section5.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section6.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t("aml.section6.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section7.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t("aml.section7.content")}</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">{t("aml.section8.title")}</h2>
          <p className="text-gray-700 dark:text-gray-300">{t("aml.section8.content")}</p>
        </section>
      </main>
    </div>
  )
}
