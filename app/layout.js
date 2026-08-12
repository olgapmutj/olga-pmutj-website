import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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

  title: {
    default:
      "Olga Koshkina | Medical Tattoo & Permanent Makeup | Tijuana",
    template: "%s | Olga Koshkina",
  },

  description:
    "Olga Koshkina is a medical tattoo and permanent makeup specialist in Tijuana, specializing in 3D areola restoration, scar camouflage, stretch mark camouflage and advanced micropigmentation.",

  keywords: [
    "Medical Tattoo Tijuana",
    "Paramedical Tattoo Tijuana",
    "Areola Restoration Tijuana",
    "Scar Camouflage Tijuana",
    "Stretch Mark Camouflage Tijuana",
    "Permanent Makeup Tijuana",
    "Micropigmentation Tijuana",
    "Medical Tattoo",
    "Paramedical Tattoo",
    "Areola Restoration",
    "Scar Camouflage",
    "Permanent Makeup",
    "Micropigmentation",
    "PMU Tijuana",
  ],

  authors: [
    {
      name: "Olga Koshkina",
    },
  ],

  creator: "Olga Koshkina",

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title:
      "Olga Koshkina | Medical Tattoo & Permanent Makeup | Tijuana",

    description:
      "Premium medical tattoo and permanent makeup studio in Tijuana specializing in areola restoration, scar camouflage and advanced micropigmentation.",

    url: siteUrl,

    siteName: "Olga Koshkina",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Olga Koshkina Medical Tattoo & Permanent Makeup",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Olga Koshkina | Medical Tattoo & Permanent Makeup | Tijuana",

    description:
      "Medical tattoo, areola restoration, scar camouflage and advanced micropigmentation in Tijuana.",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },

  verification: {
    google: "CtPQwvFlOPbeV_qCG9Mt-RumCY2MmIPyAW5HjvR7Bg4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>

        <Analytics />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-JM8DPN4448"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', 'G-JM8DPN4448');
          `}
        </Script>
      </body>
    </html>
  );
}