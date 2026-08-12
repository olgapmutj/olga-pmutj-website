"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  function closeMenu() {
    setOpen(false);
  }

  function changeLanguage(lang) {
    setLanguage(lang);

    if (typeof window !== "undefined") {
      window.localStorage.setItem("olga-language", lang);
      window.location.reload();
    }
  }

  const isEnglish = language === "en";

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pointer-events-none">
        <div className="mx-auto w-[calc(100%-24px)] max-w-[1500px] sm:w-[calc(100%-32px)]">
          <nav className="pointer-events-auto mt-3 flex min-h-20 items-center justify-between rounded-full bg-white/95 px-4 py-3 shadow-lg backdrop-blur-xl sm:min-h-24 sm:px-7 sm:py-4 lg:mt-5 lg:px-10">

            {/* BRAND */}

            <a
              href="/"
              onClick={closeMenu}
              className="min-w-0 leading-none"
            >
              <h1 className="whitespace-nowrap font-serif text-2xl tracking-[-0.045em] text-[#2D2A26] sm:text-5xl lg:text-6xl xl:text-7xl">
                OLGA KOSHKINA
              </h1>

              <p className="mt-1.5 text-[7px] uppercase tracking-[0.16em] text-[#B08D87] sm:mt-2 sm:text-[9px] sm:tracking-[0.22em] lg:text-[10px] lg:tracking-[0.3em]">
                {isEnglish
                  ? "Medical Tattoo & Permanent Makeup"
                  : "Tatuaje Médico y Maquillaje Permanente"}
              </p>
            </a>

            {/* DESKTOP MENU */}

            <div className="hidden items-center gap-6 xl:flex">

              <a
                href="#services"
                className="text-sm text-[#4F4945] transition hover:text-[#B08D87]"
              >
                {isEnglish ? "Services" : "Servicios"}
              </a>

              <a
                href="#before-after"
                className="text-sm text-[#4F4945] transition hover:text-[#B08D87]"
              >
                {isEnglish ? "Results" : "Resultados"}
              </a>

              <a
                href="#gallery"
                className="text-sm text-[#4F4945] transition hover:text-[#B08D87]"
              >
                {isEnglish ? "Gallery" : "Galería"}
              </a>

              <a
                href="#about"
                className="text-sm text-[#4F4945] transition hover:text-[#B08D87]"
              >
                {isEnglish ? "About" : "Olga"}
              </a>

              <a
                href="#reviews"
                className="text-sm text-[#4F4945] transition hover:text-[#B08D87]"
              >
                {isEnglish ? "Reviews" : "Opiniones"}
              </a>

              <a
                href="#contact"
                className="text-sm text-[#4F4945] transition hover:text-[#B08D87]"
              >
                {isEnglish ? "Contact" : "Contacto"}
              </a>

              {/* LANGUAGE SWITCHER */}

              <div className="flex items-center rounded-full border border-[#D8C7C2] bg-[#F8F4F0] p-1">

                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  className={`min-w-[42px] rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition ${
                    isEnglish
                      ? "bg-[#B08D87] text-white shadow-sm"
                      : "text-[#7B706B] hover:text-[#2D2A26]"
                  }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage("es")}
                  className={`min-w-[42px] rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[0.12em] transition ${
                    !isEnglish
                      ? "bg-[#B08D87] text-white shadow-sm"
                      : "text-[#7B706B] hover:text-[#2D2A26]"
                  }`}
                >
                  ES
                </button>

              </div>

              {/* DESKTOP CTA */}

              <a
                href="#contact"
                className="rounded-full bg-[#B08D87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#96716B]"
              >
                {isEnglish ? "Book Consultation" : "Agendar Consulta"}
              </a>

            </div>

            {/* MOBILE CONTROLS */}

            <div className="flex items-center gap-2 xl:hidden">

              {/* MOBILE LANGUAGE */}

              <div className="flex items-center rounded-full border border-[#D8C7C2] bg-[#F8F4F0] p-1">

                <button
                  type="button"
                  onClick={() => changeLanguage("en")}
                  className={`min-w-[31px] rounded-full px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.08em] transition ${
                    isEnglish
                      ? "bg-[#B08D87] text-white shadow-sm"
                      : "text-[#7B706B]"
                  }`}
                >
                  EN
                </button>

                <button
                  type="button"
                  onClick={() => changeLanguage("es")}
                  className={`min-w-[31px] rounded-full px-2 py-1.5 text-[8px] font-bold uppercase tracking-[0.08em] transition ${
                    !isEnglish
                      ? "bg-[#B08D87] text-white shadow-sm"
                      : "text-[#7B706B]"
                  }`}
                >
                  ES
                </button>

              </div>

              {/* MOBILE MENU BUTTON */}

              <button
                type="button"
                onClick={() => setOpen(!open)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className="relative z-[60] flex h-9 w-9 items-center justify-center rounded-full bg-[#F8F4F0] text-xl text-[#2D2A26]"
              >
                {open ? "×" : "☰"}
              </button>

            </div>

          </nav>
        </div>
      </header>

      {/* MOBILE MENU */}

      {open && (
        <div className="fixed inset-0 z-40 bg-[#FAF7F2] xl:hidden">

          <div className="flex h-full flex-col items-center justify-center gap-6 px-6 pt-20">

            {/* MOBILE BRAND */}

            <div className="mb-4 text-center">

              <h2 className="font-serif text-3xl tracking-[-0.04em] text-[#2D2A26] sm:text-5xl">
                OLGA KOSHKINA
              </h2>

              <p className="mt-2 text-[8px] uppercase tracking-[0.2em] text-[#B08D87] sm:text-[9px]">
                {isEnglish
                  ? "Medical Tattoo & Permanent Makeup"
                  : "Tatuaje Médico y Maquillaje Permanente"}
              </p>

            </div>

            <a
              href="#services"
              onClick={closeMenu}
              className="font-serif text-2xl text-[#2D2A26] sm:text-3xl"
            >
              {isEnglish ? "Services" : "Servicios"}
            </a>

            <a
              href="#before-after"
              onClick={closeMenu}
              className="font-serif text-2xl text-[#2D2A26] sm:text-3xl"
            >
              {isEnglish ? "Results" : "Resultados"}
            </a>

            <a
              href="#gallery"
              onClick={closeMenu}
              className="font-serif text-2xl text-[#2D2A26] sm:text-3xl"
            >
              {isEnglish ? "Gallery" : "Galería"}
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="font-serif text-2xl text-[#2D2A26] sm:text-3xl"
            >
              {isEnglish ? "About" : "Olga"}
            </a>

            <a
              href="#reviews"
              onClick={closeMenu}
              className="font-serif text-2xl text-[#2D2A26] sm:text-3xl"
            >
              {isEnglish ? "Reviews" : "Opiniones"}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="font-serif text-2xl text-[#2D2A26] sm:text-3xl"
            >
              {isEnglish ? "Contact" : "Contacto"}
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="mt-2 rounded-full bg-[#B08D87] px-7 py-3.5 text-sm font-medium text-white"
            >
              {isEnglish ? "Book Consultation" : "Agendar Consulta"}
            </a>

          </div>
        </div>
      )}
    </>
  );
}