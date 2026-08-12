"use client";

import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Medical Tattoo & Permanent Makeup",
      description:
        "Restoring confidence through advanced medical tattooing, permanent makeup and paramedical pigmentation in Tijuana, Baja California.",
      contact: "Contact",
      follow: "Follow Olga",
      socialDescription:
        "Follow Olga on social media to see real patient transformations, behind-the-scenes content and the latest treatments available at the studio.",
      rights:
        "Medical Tattoo & Permanent Makeup • All Rights Reserved.",
    },

    es: {
      tagline: "Tatuaje Médico y Maquillaje Permanente",
      description:
        "Restaurando la confianza a través del tatuaje médico avanzado, maquillaje permanente y pigmentación paramédica en Tijuana, Baja California.",
      contact: "Contacto",
      follow: "Sigue a Olga",
      socialDescription:
        "Sigue a Olga en redes sociales para conocer transformaciones reales, contenido detrás de cámaras y los últimos tratamientos disponibles en el estudio.",
      rights:
        "Tatuaje Médico y Maquillaje Permanente • Todos los Derechos Reservados.",
    },
  };

  const current = content[language];

  const whatsappMessage =
    language === "en"
      ? "Hello Olga! I'd like to learn more about your services."
      : "¡Hola Olga! Me gustaría conocer más sobre tus servicios.";

  const whatsappUrl = `https://wa.me/526641350986?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="w-full overflow-hidden bg-[#2D2A26] text-white">
      <div className="container py-16 lg:py-20">

        <div className="grid gap-14 lg:grid-cols-3 lg:gap-16">

          {/* BRAND */}

          <div>

            <h2 className="font-serif text-4xl">
              Olga Koshkina
            </h2>

            <p className="mt-3 uppercase tracking-[0.2em] text-xs text-[#D6B5AE] lg:text-sm lg:tracking-[0.25em]">
              {current.tagline}
            </p>

            <p className="mt-7 max-w-md leading-8 text-gray-300">
              {current.description}
            </p>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="mb-7 text-xl font-semibold">
              {current.contact}
            </h3>

            <div className="space-y-6">

              {/* ADDRESS */}

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt
                  className="mt-1 shrink-0 text-[#B08D87]"
                  size={18}
                />

                <p className="leading-7 text-gray-300">
                  Parque Baja California Sur 478
                  <br />
                  Playas de Tijuana
                  <br />
                  22506 Tijuana, Baja California
                  <br />
                  México
                </p>

              </div>

              {/* WHATSAPP */}

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 transition hover:text-white"
              >

                <FaWhatsapp
                  className="shrink-0 text-[#B08D87]"
                  size={18}
                />

                +52 664 135 0986

              </a>

              {/* EMAIL */}

              <a
                href="mailto:Koshkinanumberone@icloud.com"
                className="flex items-center gap-4 break-all text-gray-300 transition hover:text-white"
              >

                <FaEnvelope
                  className="shrink-0 text-[#B08D87]"
                  size={18}
                />

                Koshkinanumberone@icloud.com

              </a>

            </div>

          </div>

          {/* SOCIAL */}

          <div>

            <h3 className="mb-7 text-xl font-semibold">
              {current.follow}
            </h3>

            <div className="flex gap-4">

              {/* INSTAGRAM */}

              <a
                href="https://www.instagram.com/olga_pmu_tj/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-13 w-13 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#B08D87]"
              >
                <FaInstagram size={21} />
              </a>

              {/* FACEBOOK */}

              <a
                href="https://www.facebook.com/share/191QwM347m/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-13 w-13 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#B08D87]"
              >
                <FaFacebookF size={20} />
              </a>

              {/* TIKTOK */}

              <a
                href="https://www.tiktok.com/@koshkinanumberone"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-13 w-13 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#B08D87]"
              >
                <FaTiktok size={20} />
              </a>

            </div>

            <p className="mt-8 max-w-md leading-7 text-gray-400">
              {current.socialDescription}
            </p>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="mt-16 border-t border-white/10 pt-7 text-center text-xs leading-6 text-gray-400 lg:mt-20 lg:text-sm">

          © 2026 Olga Koshkina • {current.rights}

        </div>

      </div>
    </footer>
  );
}