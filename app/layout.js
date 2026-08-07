import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata = {
  metadataBase: new URL("https://olgapmutj.com"),

  title: "Olga PMU TJ | Medical Tattoo & Permanent Makeup | Tijuana",

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

  authors: [{ name: "Olga PMU TJ" }],

  openGraph: {
    title: "Olga PMU TJ",

    description:
      "Premium Medical Tattoo & Permanent Makeup Studio in Tijuana.",

    url: "https://olgapmutj.com",

    siteName: "Olga PMU TJ",

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
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        {children}
      </body>

    </html>
  );
}