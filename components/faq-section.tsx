"use client"

import { useState } from "react"
import { useLanguage } from "@/context/language-context"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

export default function FaqSection() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: "faq.q1",
      answer: "faq.a1",
    },
    {
      question: "faq.q2",
      answer: "faq.a2",
    },
    {
      question: "faq.q3",
      answer: "faq.a3",
    },
    {
      question: "faq.q4",
      answer: "faq.a4",
    },
    {
      question: "faq.q5",
      answer: "faq.a5",
    },
  ]

  const filteredFaqs = faqs.filter((faq) => t(faq.question).toLowerCase().includes(searchQuery.toLowerCase()))

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <>
      <div className="relative max-w-2xl mx-auto mb-12">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search className="text-gray-500" size={20} />
        </div>
        <input
          type="text"
          className="faq-search pl-12"
          placeholder={t("faq.search")}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <div className="max-w-3xl mx-auto">
        {filteredFaqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <button className="w-full flex justify-between items-center text-left" onClick={() => toggleFaq(index)}>
              <h3 className="text-xl font-semibold">{t(faq.question)}</h3>
              {openIndex === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
            </button>

            {openIndex === index && <div className="mt-4 text-gray-600 dark:text-gray-400">{t(faq.answer)}</div>}
          </div>
        ))}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-8 text-gray-600 dark:text-gray-400">No results found</div>
        )}
      </div>
    </>
  )
}
