"use client";

import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="w-full overflow-hidden bg-[#FAF7F2]">

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-32 lg:px-8 lg:pb-32 lg:pt-40">

        <div className="grid w-full items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

          {/* LEFT */}

          <div className="min-w-0">

            <span className="text-[8px] font-semibold uppercase tracking-[0.25em] text-[#B08D87] sm:text-xs sm:tracking-[0.35em]">
              {t.hero.eyebrow}
            </span>

            <h1 className="mt-3 max-w-full font-serif text-[30px] leading-[0.98] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl lg:text-7xl xl:text-[82px]">
              {t.hero.title}
              <br />
              <span className="text-[#B08D87]">
                {t.hero.titleAccent}
              </span>
            </h1>

            <p className="mt-5 max-w-xl text-[13px] leading-6 text-[#6A635E] sm:text-base sm:leading-8 lg:mt-8 lg:text-lg">
              {t.hero.description}
            </p>

            {/* BUTTONS */}

            <div className="mt-6 flex flex-wrap gap-3 sm:mt-10">

              <a
                href="#contact"
                className="btn-primary px-6 py-3 text-[12px] sm:px-8 sm:py-4 sm:text-sm"
              >
                {t.hero.primary}
              </a>

              <a
                href="#services"
                className="btn-secondary px-6 py-3 text-[12px] sm:px-8 sm:py-4 sm:text-sm"
              >
                {t.hero.secondary}
              </a>

            </div>

            {/* STATS */}

            <div className="mt-8 grid grid-cols-3 gap-2 border-t border-[#E8DED8] pt-5 sm:mt-12 sm:gap-8 sm:pt-6">

              <div className="min-w-0">

                <p className="font-serif text-[26px] leading-none text-[#B08D87] sm:text-3xl">
                  8+
                </p>

                <p className="mt-1.5 text-[7px] uppercase leading-4 tracking-[0.08em] text-[#6A635E] sm:text-xs sm:tracking-wider">
                  {t.hero.experience}
                </p>

              </div>

              <div className="min-w-0">

                <p className="font-serif text-[26px] leading-none text-[#B08D87] sm:text-3xl">
                  1000+
                </p>

                <p className="mt-1.5 text-[7px] uppercase leading-4 tracking-[0.08em] text-[#6A635E] sm:text-xs sm:tracking-wider">
                  {t.hero.procedures}
                </p>

              </div>

              <div className="min-w-0">

                <p className="font-serif text-[20px] leading-none text-[#B08D87] sm:text-3xl">
                  Tijuana
                </p>

                <p className="mt-1.5 text-[7px] uppercase leading-4 tracking-[0.08em] text-[#6A635E] sm:text-xs sm:tracking-wider">
                  {t.hero.location}
                </p>

              </div>

            </div>

          </div>

          {/* VIDEO */}

          <div className="relative mt-2 w-full min-w-0 lg:mt-0">

            <div className="absolute -bottom-3 -left-3 h-full w-full rounded-[26px] bg-[#E7D4CF] sm:-bottom-6 sm:-left-6 sm:rounded-[42px]" />

            <div className="relative w-full overflow-hidden rounded-[26px] shadow-2xl sm:rounded-[42px]">

              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="h-[360px] w-full object-cover sm:h-[560px] lg:h-[720px]"
              >
                <source
                  src="/videos/hero/hero-01.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-1.5 text-[7px] font-medium uppercase tracking-[0.12em] text-[#4F4945] backdrop-blur sm:bottom-6 sm:left-6 sm:px-5 sm:py-3 sm:text-xs sm:tracking-[0.18em]">
                {t.hero.badge}
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}