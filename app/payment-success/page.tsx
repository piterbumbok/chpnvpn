"use client"

import { useLanguage } from "@/context/language-context"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function PaymentSuccess() {
  const { t } = useLanguage()

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 text-center">
        <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-8">
          <CheckCircle className="text-green-600 dark:text-green-400" size={40} />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("payment.success.title")}</h1>

        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{t("payment.success.subtitle")}</p>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
          {t("payment.success.message")}
        </p>

        <Link href="/" className="apple-button">
          {t("payment.success.button")}
        </Link>
      </div>
    </section>
  )
}
