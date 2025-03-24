import { Metadata } from "next"
import Logo from "./components/Logo"
import ElegantShape from "./components/ElegantShape"
import HomeContent from "./components/HomeContent"

export const metadata: Metadata = {
  title: "Tear Company | We Refactor Ideas with Soul",
  description: "Tear Company is a non-profit digital lab focused on refactoring ideas and building future-ready systems. We help visionaries transform purpose-driven concepts into beautiful, scalable technology.",
  applicationName: "Tear Company",
  keywords: [
    "refactoring", "digital transformation", "idea acceleration", "future-ready systems",
    "non-profit tech", "AI architecture", "distributed systems", "innovation lab",
    "scalable solutions", "intuitive technology", "creative engineering", "software optimization",
    "system audits", "code quality", "open-source thinking", "tech for good",
    "Michał Porydzaj", "Tear Company", "developer experience", "visionary systems",
    "refaktoryzacja", "digitalizacja", "transformacja cyfrowa", "laboratorium innowacji",
    "organizacja non-profit", "architektura AI", "systemy rozproszone", "optymalizacja oprogramowania",
    "innowacyjne pomysły", "technologia intuicyjna", "inżynieria kreatywna", "pomoc przez technologię",
    "rozwój oprogramowania", "audyt systemów", "doświadczenie programisty", "Michał Porydzaj"
  ],
  authors: [
    {
      name: "Michał Porydzaj",
      url: "https://www.linkedin.com/in/mike-porydzaj"
    }
  ],
  creator: "Tear Company",
  publisher: "Tear Company",
  category: "Technology | Non-Profit | Innovation",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tearcompany.com",
    siteName: "Tear Company",
    title: "Tear Company – We Refactor Ideas with Soul",
    description: "We help creators and innovators bring their ideas to life through ethical, intuitive, and future-driven technology. Non-profit by nature. Visionary by design.",
    images: [
      {
        url: "https://tearcompany.com/og-image.jpg",
        width: 1200,
        height: 1200,
        alt: "Tear Company – Ethical Tech for Visionaries"
      }
    ]
  },
  metadataBase: new URL("https://tearcompany.com"),
  alternates: {
    canonical: "https://tearcompany.com",
    languages: {
      "en-US": "https://tearcompany.com",
      "pl-PL": "https://tearcompany.com/pl"
    }
  }
}

export default function Page() {
  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-[#030303]">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-transparent to-purple-500/[0.08] blur-3xl" />

      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <Logo
          width={24}
          height={24}
          className="w-6 h-6"
        />
      </div>

      <div className="absolute inset-0 overflow-hidden">
        <ElegantShape
          delay={0.3}
          width={600}
          height={140}
          rotate={12}
          gradient="from-indigo-500/[0.15]"
          className="left-[-10%] md:left-[-5%] top-[15%] md:top-[20%]"
        />

        <ElegantShape
          delay={0.5}
          width={500}
          height={120}
          rotate={-15}
          gradient="from-purple-500/[0.15]"
          className="right-[-5%] md:right-[0%] top-[70%] md:top-[75%]"
        />

        <ElegantShape
          delay={0.4}
          width={300}
          height={80}
          rotate={-8}
          gradient="from-pink-500/[0.15]"
          className="left-[5%] md:left-[10%] bottom-[5%] md:bottom-[10%]"
        />

        <ElegantShape
          delay={0.6}
          width={200}
          height={60}
          rotate={20}
          gradient="from-indigo-400/[0.15]"
          className="right-[15%] md:right-[20%] top-[10%] md:top-[15%]"
        />

        <ElegantShape
          delay={0.7}
          width={150}
          height={40}
          rotate={-25}
          gradient="from-purple-400/[0.15]"
          className="left-[20%] md:left-[25%] top-[5%] md:top-[10%]"
        />
      </div>

      <HomeContent />

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/80 pointer-events-none" />
    </div>
  )
}

