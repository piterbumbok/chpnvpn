"use client"

import HeroSection from "@/components/hero-section"
import DownloadSection from "@/components/download-section"
import PricingSection from "@/components/pricing-section"
import { useLanguage } from "@/context/language-context"

export default function Home() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSection />
      <DownloadSection />
      <PricingSection />
    </>
  )
}
