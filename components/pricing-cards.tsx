"use client"

import { useLanguage } from "@/context/language-context"
import { Check } from "lucide-react"

export default function PricingCards() {
  const { t } = useLanguage()

  const plans = [
    {
      price: 450,
      features: ["devices", "unlimited", "speed", "support"],
    },
    {
      price: 2970,
      features: ["devices", "unlimited", "speed", "support"],
    },
    {
      price: 4050,
      features: ["devices", "unlimited", "speed", "support"],
    },
    {
      price: 5400,
      popular: true,
      features: ["devices", "unlimited", "speed", "support"],
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <div key={index} className={`pricing-card ${plan.popular ? "pricing-card-popular" : ""}`}>
          {plan.popular && <div className="popular-badge">{t("pricing.popular")}</div>}

          <div className="text-3xl font-bold mb-2">{plan.price} ₽</div>
          <div className="text-gray-600 dark:text-gray-400 mb-6">/ {t("pricing.monthly")}</div>

          <ul className="space-y-3 mb-8">
            {plan.features.map((feature, idx) => (
              <li key={idx} className="flex items-start">
                <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                <span>{t(`pricing.${feature}`)}</span>
              </li>
            ))}
          </ul>

          <button className="w-full apple-button">{t("pricing.button")}</button>
        </div>
      ))}
    </div>
  )
}
