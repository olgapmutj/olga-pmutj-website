"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Map() {
  const { t } = useLanguage();

  return (
    <section
      id="location"
      className="w-full overflow-hidden bg-[#FAF7F2] py-24 lg:py-36"
    >
      <div className="container">

        {/* HEADER */}

        <div className="mx-auto mb-12 max-w-3xl text-center lg:mb-14">

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
            {t.map.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-5xl text-[#2D2A26] lg:text-6xl">
            {t.map.title}
          </h2>

          <p className="mt-6 text-base leading-8 text-[#6A635E] lg:text-lg">
            Parque Baja California Sur 478
            <br />
            Playas de Tijuana
            <br />
            22506 Tijuana, Baja California, México
          </p>

        </div>

        {/* MAP */}

        <div className="overflow-hidden rounded-[30px] bg-white shadow-2xl lg:rounded-[36px]">

          <iframe
            src="https://www.google.com/maps?q=Parque+Baja+California+Sur+478,+Playas+de+Tijuana,+22506,+Tijuana,+BC&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="block w-full border-0"
            title="Olga Koshkina Studio Location"
          />

        </div>

        {/* GOOGLE MAPS BUTTON */}

        <div className="mt-8 text-center">

          <a
            href="https://maps.app.goo.gl/dup7ko52LydrgqcC7"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            {t.map.button}
          </a>

        </div>

      </div>
    </section>
  );
}