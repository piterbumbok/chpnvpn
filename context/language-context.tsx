"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "ru" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

// Обновим объект translations, добавив переводы для всех текстов на сайте

const translations = {
  "header.home": {
    ru: "Главная",
    en: "Home",
  },
  "header.pricing": {
    ru: "Тарифы",
    en: "Pricing",
  },
  "header.faq": {
    ru: "FAQ",
    en: "FAQ",
  },
  "header.contacts": {
    ru: "Контакты",
    en: "Contacts",
  },
  "header.login": {
    ru: "Войти",
    en: "Login",
  },
  "hero.title1": {
    ru: "Безопасный",
    en: "Secure",
  },
  "hero.title2": {
    ru: "интернет",
    en: "Internet",
  },
  "hero.subtitle": {
    ru: "Продвинутая защита на основе технологий VLESS и Shadowsocks для вашей конфиденциальности",
    en: "Advanced protection based on VLESS and Shadowsocks technologies for your privacy",
  },
  "hero.feature2": {
    ru: "Высокоскоростные серверы",
    en: "High-Speed Servers",
  },
  "hero.feature3": {
    ru: "256-битное шифрование",
    en: "256-bit Encryption",
  },
  "hero.feature4": {
    ru: "Безопасное и стабильное соединение",
    en: "Secure and stable connection",
  },
  "download.title1": {
    ru: "Скачайте наши",
    en: "Download our",
  },
  "download.title2": {
    ru: "приложения",
    en: "apps",
  },
  "download.subtitle": {
    ru: "Защитите ваше соединение на любом устройстве с нашими удобными приложениями",
    en: "Protect your connection on any device with our user-friendly applications",
  },
  "platform.ios": {
    ru: "iOS",
    en: "iOS",
  },
  "platform.ios.desc": {
    ru: "Безопасный просмотр на iPhone и iPad с нашим удобным приложением",
    en: "Secure browsing on iPhone and iPad with our convenient app",
  },
  "platform.android": {
    ru: "Android",
    en: "Android",
  },
  "platform.android.desc": {
    ru: "Защита для ваших Android устройств с нашим многофункциональным приложением",
    en: "Protection for your Android devices with our feature-rich application",
  },
  "platform.windows": {
    ru: "Windows",
    en: "Windows",
  },
  "platform.windows.desc": {
    ru: "Скоро для Windows PC с продвинутыми функциями безопасности",
    en: "Coming soon for Windows PC with advanced security features",
  },
  "platform.macos": {
    ru: "macOS",
    en: "macOS",
  },
  "platform.macos.desc": {
    ru: "Скоро для Mac компьютеров с бесшовной интеграцией",
    en: "Coming soon for Mac computers with seamless integration",
  },
  "platform.linux": {
    ru: "Linux",
    en: "Linux",
  },
  "platform.linux.desc": {
    ru: "Скоро для Linux систем с совместимостью с открытым исходным кодом",
    en: "Coming soon for Linux systems with open-source compatibility",
  },
  "platform.router": {
    ru: "Роутер",
    en: "Router",
  },
  "platform.router.desc": {
    ru: "Скоро для роутеров для защиты всей домашней сети",
    en: "Coming soon for routers to protect your entire home network",
  },
  "coming.soon": {
    ru: "Скоро",
    en: "Coming Soon",
  },
  "pricing.title": {
    ru: "Выберите тарифный план",
    en: "Choose Your Plan",
  },
  "pricing.subtitle": {
    ru: "Мы предлагаем гибкие тарифные планы для любых потребностей",
    en: "We offer flexible pricing plans for any needs",
  },
  "pricing.monthly": {
    ru: "месяц",
    en: "month",
  },
  "pricing.discount": {
    ru: "Скидка",
    en: "Discount",
  },
  "pricing.perMonth": {
    ru: "в месяц",
    en: "per month",
  },
  "pricing.gift": {
    ru: "в подарок",
    en: "free",
  },
  "pricing.months": {
    ru: "месяцев",
    en: "months",
  },
  "pricing.month": {
    ru: "месяц",
    en: "month",
  },
  "pricing.button": {
    ru: "Выбрать",
    en: "Select",
  },
  "pricing.popular": {
    ru: "Самый выгодный",
    en: "Best value",
  },
  "pricing.features.devices": {
    ru: "Подключение до 5 устройств",
    en: "Connect up to 5 devices",
  },
  "pricing.features.unlimited": {
    ru: "Безлимитный трафик",
    en: "Unlimited traffic",
  },
  "pricing.features.speed": {
    ru: "Максимальная скорость",
    en: "Maximum speed",
  },
  "pricing.features.support": {
    ru: "Приоритетная поддержка",
    en: "Priority support",
  },
  "footer.legal": {
    ru: "Юридическая информация",
    en: "Legal Information",
  },
  "footer.aml": {
    ru: "Политика AML/KYC",
    en: "AML/KYC Policy",
  },
  "footer.support": {
    ru: "Поддержка",
    en: "Support",
  },
  "footer.faq": {
    ru: "FAQ (скоро)",
    en: "FAQ (coming soon)",
  },
  "footer.guide": {
    ru: "Руководство по установке (скоро)",
    en: "Installation Guide (coming soon)",
  },
  "footer.contact": {
    ru: "Связаться с нами",
    en: "Contact Us",
  },
  "footer.email": {
    ru: "Email: support@chpnvpn.com",
    en: "Email: support@chpnvpn.com",
  },
  "footer.telegram": {
    ru: "Telegram: t.me/chpnvpn",
    en: "Telegram: t.me/chpnvpn",
  },
  "footer.payment": {
    ru: "Способы оплаты",
    en: "Payment Methods",
  },
  "aml.title": {
    ru: "Политика AML/KYC",
    en: "AML/KYC Policy",
  },
  "aml.subtitle": {
    ru: "Информация о политике противодействия отмыванию денег и процедурах идентификации клиентов",
    en: "Information about Anti-Money Laundering policy and Know Your Customer procedures",
  },
  "aml.section1.title": {
    ru: "1. Введение",
    en: "1. Introduction",
  },
  "aml.section1.content": {
    ru: "Данная политика AML/KYC разработана для предотвращения и снижения возможных рисков вовлечения Chupapi Munyanya в какую-либо незаконную деятельность.",
    en: "This AML/KYC Policy is designed to prevent and mitigate possible risks of Chupapi Munyanya being involved in any kind of illegal activity.",
  },
  "aml.section2.title": {
    ru: "2. Процедуры верификации",
    en: "2. Verification Procedures",
  },
  "aml.section2.content": {
    ru: "Chupapi Munyanya реализует процедуры верификации для установления личности своих пользователей и характера их деятельности. Верификация личности выполняется в соответствии со следующими правилами:",
    en: "Chupapi Munyanya implements verification procedures to establish the identity of its users and the nature of their activities. Identity verification is performed in accordance with the following rules:",
  },
  "aml.section2.list.item1": {
    ru: "Пользователи должны предоставить свое полное имя, дату рождения, адрес и номер телефона;",
    en: "Users must provide their full name, date of birth, address, and phone number;",
  },
  "aml.section2.list.item2": {
    ru: "Пользователи должны предоставить действительное удостоверение личности, выданное государством;",
    en: "Users must provide a valid government-issued ID;",
  },
  "aml.section2.list.item3": {
    ru: "Документы должны быть действительными и подлинными.",
    en: "Documents must be valid and authentic.",
  },
  "aml.section3.title": {
    ru: "3. Ответственное лицо",
    en: "3. Compliance Officer",
  },
  "aml.section3.content": {
    ru: "Ответственное лицо - это человек, должным образом уполномоченный Chupapi Munyanya, в обязанности которого входит обеспечение эффективной реализации и соблюдения политики AML/KYC.",
    en: "The Compliance Officer is the person, duly authorized by Chupapi Munyanya, whose duty is to ensure the effective implementation and enforcement of the AML/KYC Policy.",
  },
  "aml.section4.title": {
    ru: "4. Мониторинг транзакций",
    en: "4. Monitoring Transactions",
  },
  "aml.section4.content": {
    ru: "Пользователи известны не только по верификации их личности, но и по анализу их транзакционных шаблонов. Chupapi Munyanya полагается на анализ данных как на инструмент оценки рисков и обнаружения подозрительной активности.",
    en: "The users are known not only by verifying their identity but also by analyzing their transactional patterns. Chupapi Munyanya relies on data analysis as a risk-assessment and suspicious activity detection tool.",
  },
  "aml.section5.title": {
    ru: "5. Оценка рисков",
    en: "5. Risk Assessment",
  },
  "aml.section5.content": {
    ru: "Chupapi Munyanya применяет риск-ориентированный подход к своим пользователям и их транзакциям. Он проводит комплексную оценку рисков своих пользователей и категоризирует их в соответствии с воспринимаемым риском.",
    en: "Chupapi Munyanya applies a risk-based approach to its users and their transactions. It performs a comprehensive risk assessment of its users and categorizes them according to the perceived risk.",
  },
  "aml.section6.title": {
    ru: "6. Отчетность о подозрительной активности",
    en: "6. Suspicious Activity Reporting",
  },
  "aml.section6.content": {
    ru: "Chupapi Munyanya имеет процедуры для сообщения о подозрительной активности соответствующим органам. Ответственное лицо отвечает за подачу отчетов о подозрительной активности.",
    en: "Chupapi Munyanya has procedures in place to report suspicious activity to the relevant authorities. The Compliance Officer is responsible for filing reports of suspicious activity.",
  },
  "aml.section7.title": {
    ru: "7. Хранение записей",
    en: "7. Record Keeping",
  },
  "aml.section7.content": {
    ru: "Записи всех транзакций и документов KYC хранятся в течение минимум пяти лет или в соответствии с требованиями применимых законов и нормативных актов.",
    en: "Records of all transactions and KYC documents are maintained for a minimum of five years or as required by applicable laws and regulations.",
  },
  "aml.section8.title": {
    ru: "8. Обновления и обучение",
    en: "8. Updates and Training",
  },
  "aml.section8.content": {
    ru: "Данная политика AML/KYC регулярно пересматривается и обновляется для обеспечения соответствия применимым законам и нормативным актам. Все сотрудники Chupapi Munyanya проходят регулярное обучение по процедурам AML/KYC.",
    en: "This AML/KYC Policy is regularly reviewed and updated to ensure compliance with applicable laws and regulations. All employees of Chupapi Munyanya undergo regular training on AML/KYC procedures.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ru")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage && (savedLanguage === "ru" || savedLanguage === "en")) {
      setLanguageState(savedLanguage)
    }
  }, [])

  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage)
    if (mounted) {
      localStorage.setItem("language", newLanguage)
    }
  }

  const t = (key: string): string => {
    const translation = translations[key as keyof typeof translations]
    if (!translation) return key
    return translation[language] || key
  }

  return <LanguageContext.Provider value={{ language, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
