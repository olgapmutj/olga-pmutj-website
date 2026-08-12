import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://olga-pmutj-website.vercel.app";

export const metadata = {
  metadataBase: new URL(siteUrl),

  title:
    "Olga Koshkina | Medical Tattoo & Permanent Makeup in Tijuana",

  description:
    "Olga Koshkina specializes in paramedical tattoo and permanent makeup in Tijuana, including 3D areola restoration, scar camouflage, stretch mark camouflage and natural-looking PMU results.",

  keywords: [
    "Medical Tattoo Tijuana",
    "Paramedical Tattoo Tijuana",
    "Areola Restoration Tijuana",
    "3D Areola Restoration",
    "Scar Camouflage Tijuana",
    "Stretch Mark Camouflage Tijuana",
    "Permanent Makeup Tijuana",
    "PMU Tijuana",
    "Micropigmentation Tijuana",
    "Olga Koshkina",
  ],

  authors: [{ name: "Olga Koshkina" }],

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Olga Koshkina | Medical Tattoo & Permanent Makeup in Tijuana",

    description:
      "Premium paramedical tattoo and permanent makeup services in Tijuana, specializing in 3D areola restoration, scar camouflage and natural-looking results.",

    url: siteUrl,

    siteName: "Olga Koshkina",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: "CtPQwvFlOPbeV_qCG9Mt-RumCY2MmIPyAW5HjvR7Bg4",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Olga Koshkina",
  description:
    "Paramedical tattoo and permanent makeup studio in Tijuana specializing in 3D areola restoration, scar camouflage, stretch mark camouflage and permanent makeup.",
  url: siteUrl,
  telephone: "+52 664 135 0986",

  address: {
    "@type": "PostalAddress",
    streetAddress: "Parque Baja California Sur 478",
    addressLocality: "Tijuana",
    addressRegion: "Baja California",
    postalCode: "22506",
    addressCountry: "MX",
  },

  areaServed: {
    "@type": "City",
    name: "Tijuana",
  },

  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

        <Analytics />
      </body>
    </html>
  );
}