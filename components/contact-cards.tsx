"use client"

import { useLanguage } from "@/context/language-context"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactCards() {
  const { t } = useLanguage()

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
      <div className="contact-card">
        <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white rounded-full text-white dark:text-black mb-4">
          <Mail size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{t("contact.email")}</h3>
        <p className="text-gray-600 dark:text-gray-400">support@chupapi-vpn.com</p>
      </div>

      <div className="contact-card">
        <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white rounded-full text-white dark:text-black mb-4">
          <Phone size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{t("contact.phone")}</h3>
        <p className="text-gray-600 dark:text-gray-400">+7 (999) 123-45-67</p>
      </div>

      <div className="contact-card">
        <div className="w-12 h-12 flex items-center justify-center bg-black dark:bg-white rounded-full text-white dark:text-black mb-4">
          <MapPin size={24} />
        </div>
        <h3 className="text-xl font-semibold mb-2">{t("contact.address")}</h3>
        <p className="text-gray-600 dark:text-gray-400">Москва, ул. Примерная, д. 123</p>
      </div>
    </div>
  )
}
