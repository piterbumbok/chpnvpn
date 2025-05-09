"use client"

import Link from "next/link"
import { useLanguage } from "@/context/language-context"
import { useEffect, useState } from "react"

export default function Footer() {
  const { t, language } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Если компонент не смонтирован, возвращаем null
  if (!mounted) {
    return null
  }

  return (
    <footer className="bg-white dark:bg-gray-900 py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-medium mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/aml-kyc-policy"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  {t("footer.aml")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t("footer.support")}</h3>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{t("footer.faq")}</span>
              </li>
              <li>
                <span className="text-gray-600 dark:text-gray-400 text-sm">{t("footer.guide")}</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t("footer.contact")}</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:support@chpnvpn.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  {t("footer.email")}
                </a>
              </li>
              <li>
                <a
                  href="https://t.me/chpnvpn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 text-sm"
                >
                  {t("footer.telegram")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">{t("footer.payment")}</h3>
            <div className="flex flex-wrap gap-2">
              <div className="border border-gray-200 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                Visa
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                MasterCard
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                PayPal
              </div>
              <div className="border border-gray-200 dark:border-gray-700 rounded px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
                Bitcoin
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
