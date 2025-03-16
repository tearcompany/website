import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tear Company | Divine Realms of Emotions",
  description: "Odkryj siłę prawdziwych emocji poprzez łzy. Tear Company to miejsce, gdzie każda łza jest początkiem nowej podróży w Divine Realms.",
  keywords: ["tear company", "divine realms", "emocje", "łzy", "duchowość", "podróż duchowa", "świadomość", "emotional healing", "spiritual journey"],
  openGraph: {
    title: "Tear Company | Divine Realms of Emotions",
    description: "Odkryj siłę prawdziwych emocji poprzez łzy. Rozpocznij swoją duchową podróż z Tear Company.",
    type: "website",
    locale: "pl_PL",
    url: "https://tearcompany.com",
    siteName: "Tear Company",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tear Company - Divine Realms of Emotions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tear Company | Divine Realms of Emotions",
    description: "Odkryj siłę prawdziwych emocji poprzez łzy. Rozpocznij swoją duchową podróż z Tear Company.",
    images: ["/og-image.jpg"],
    creator: "@tearcompany",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: "Tear Company", url: "https://tearcompany.com" }],
  metadataBase: new URL("https://tearcompany.com"),
  alternates: {
    canonical: "https://tearcompany.com",
    languages: {
      'pl-PL': "https://tearcompany.com",
      'en-US': "https://tearcompany.com/en",
    },
  },
  category: "Spiritual & Emotional Healing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="canonical" href="https://tearcompany.com" />
        <meta name="theme-color" content="#030303" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Script id="schema-org" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Tear Company",
              "url": "https://tearcompany.com",
              "logo": "https://tearcompany.com/logo.png",
              "description": "Odkryj siłę prawdziwych emocji poprzez łzy. Tear Company to miejsce, gdzie każda łza jest początkiem nowej podróży w Divine Realms.",
              "email": "love@tearcompany.com",
              "sameAs": [
                "https://twitter.com/tearcompany",
                "https://instagram.com/tearcompany",
                "https://facebook.com/tearcompany"
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "15, Dorotka",
                "addressLocality": "Kraków",
                "postalCode": "30-348",
                "addressCountry": "PL"
              },
              "offers": {
                "@type": "Offer",
                "description": "Duchowa podróż poprzez emocje",
                "availability": "https://schema.org/InStock"
              }
            }
          `}
        </Script>
      </body>
    </html>
  );
}
