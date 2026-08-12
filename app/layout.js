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

export const metadata = {
  metadataBase: new URL("https://olga-pmutj-website.vercel.app"),

  title:
    "Olga Koshkina | Medical Tattoo & Permanent Makeup | Tijuana",

  description:
    "Premium paramedical tattoo studio in Tijuana specializing in 3D Areola Restoration, Scar Camouflage, Stretch Mark Camouflage and Permanent Makeup.",

  keywords: [
    "Medical Tattoo",
    "Paramedical Tattoo",
    "Areola Restoration",
    "Scar Camouflage",
    "Permanent Makeup",
    "Tijuana",
    "Micropigmentation",
    "PMU",
  ],

  authors: [{ name: "Olga Koshkina" }],

  openGraph: {
    title:
      "Olga Koshkina | Medical Tattoo & Permanent Makeup",

    description:
      "Premium Medical Tattoo & Permanent Makeup Studio in Tijuana.",

    url: "https://olga-pmutj-website.vercel.app",

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
    google:
      "CtPQwvFlOPbeV_qCG9Mt-RumCY2MmIPyAW5HjvR7Bg4",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>

        <Analytics />
      </body>
    </html>
  );
}