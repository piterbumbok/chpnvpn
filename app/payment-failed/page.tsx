"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { XCircle } from "lucide-react"

export default function PaymentFailed() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-8">
          <XCircle className="text-red-600 dark:text-red-400" size={40} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("payment.failed.title")}</h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{t("payment.failed.subtitle")}</p>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          {t("payment.failed.message")}
        </p>

        <Link href="/pricing" className="apple-button">
          {t("payment.failed.button")}
        </Link>
      </div>
    </section>
  )
}
