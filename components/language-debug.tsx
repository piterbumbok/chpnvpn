"use client"

import { useLanguage } from "@/context/language-context"

export default function LanguageDebug() {
  const { t, language, setLanguage } = useLanguage()

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg z-50">
      <h3 className="text-lg font-bold mb-2">Language Debug</h3>
      <p>Current language: {language}</p>
      <div className="flex space-x-2 mt-2">
        <button
          onClick={() => setLanguage("ru")}
          className={`px-3 py-1 rounded ${
            language === "ru" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          RU
        </button>
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 rounded ${
            language === "en" ? "bg-blue-500 text-white" : "bg-gray-200 dark:bg-gray-700"
          }`}
        >
          EN
        </button>
      </div>
      <div className="mt-4">
        <p>footer.aml: {t("footer.aml")}</p>
        <p>footer.legal: {t("footer.legal")}</p>
        <p>footer.support: {t("footer.support")}</p>
      </div>
    </div>
  )
}
