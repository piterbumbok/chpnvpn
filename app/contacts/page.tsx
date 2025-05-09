"use client"

import { useLanguage } from "@/context/language-context"
import ContactCards from "@/components/contact-cards"

export default function Contacts() {
  const { t } = useLanguage()

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("contact.title")}</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <ContactCards />

        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 max-w-3xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                {t("contact.form.name")}
              </label>
              <input type="text" id="name" className="contact-form-input" required />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                {t("contact.form.email")}
              </label>
              <input type="email" id="email" className="contact-form-input" required />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                {t("contact.form.message")}
              </label>
              <textarea id="message" rows={5} className="contact-form-input" required></textarea>
            </div>

            <button type="submit" className="w-full apple-button">
              {t("contact.form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
