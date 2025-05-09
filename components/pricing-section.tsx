"use client"

import { useLanguage } from "@/context/language-context"
import { Check } from "lucide-react"

// Функция для форматирования чисел с пробелами по три цифры
function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export default function PricingSection() {
  const { t } = useLanguage()

  const plans = [
    {
      price: 5400,
      period: 24,
      gift: 6,
      monthlyPrice: 180,
      discount: 60,
      popular: true,
      features: ["devices", "unlimited", "speed", "support"],
      oldPrice: 13500,
    },
    {
      price: 4050,
      period: 12,
      gift: 3,
      monthlyPrice: 270,
      discount: 40,
      features: ["devices", "unlimited", "speed", "support"],
      oldPrice: 6750,
    },
    {
      price: 2970,
      period: 6,
      gift: 3,
      monthlyPrice: 330,
      discount: 26.66,
      features: ["devices", "unlimited", "speed", "support"],
      oldPrice: 4500,
    },
    {
      price: 450,
      period: 1,
      monthlyPrice: 450,
      features: ["devices", "unlimited", "speed", "support"],
    },
  ]

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">{t("pricing.title")}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-12">{t("pricing.subtitle")}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg border ${
                plan.popular ? "border-blue-500 shadow-lg dark:border-blue-400" : "border-gray-200 dark:border-gray-700"
              } p-6 flex flex-col relative`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white px-3 py-1 text-xs font-semibold rounded-bl-lg rounded-tr-lg">
                  {t("pricing.popular")}
                </div>
              )}

              {/* Отображаем цену в месяц жирным шрифтом */}
              <div className="text-3xl font-bold mb-4">
                {formatNumber(plan.monthlyPrice)} ₽ / {t("pricing.monthly")}
              </div>

              {plan.period > 1 ? (
                <div className="text-gray-600 dark:text-gray-400 mb-2">
                  {plan.period === 24 ? "на 2 года" : plan.period === 12 ? "на год" : `на ${plan.period} месяцев`}
                </div>
              ) : (
                <div className="text-gray-600 dark:text-gray-400 mb-2">{t("pricing.perMonth")}</div>
              )}

              {/* Отображаем информацию о подарочных месяцах, если они есть */}
              {plan.gift && (
                <div className="text-green-500 font-medium mb-2">
                  + {plan.gift} {t("pricing.months")} {t("pricing.gift")}
                </div>
              )}

              {/* Отображаем скидку, если она есть */}
              {plan.discount && (
                <div className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm inline-block mb-2">
                  {t("pricing.discount")} {plan.discount}%
                </div>
              )}

              {/* Отображаем основную цену и перечеркнутую старую цену на одной строке */}
              <div className="text-gray-600 dark:text-gray-400 mb-4 flex items-center gap-2">
                {formatNumber(plan.price)} ₽
                {plan.oldPrice && (
                  <span className="line-through text-gray-400 dark:text-gray-500">{formatNumber(plan.oldPrice)} ₽</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 mt-2">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="text-green-500 mr-2 mt-1 flex-shrink-0" size={18} />
                    <span className="text-gray-600 dark:text-gray-400">{t(`pricing.features.${feature}`)}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`mt-auto py-2 px-4 rounded-lg font-medium ${
                  plan.popular
                    ? "bg-blue-500 hover:bg-blue-600 text-white"
                    : "bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
                } transition-colors`}
              >
                {t("pricing.button")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
