"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function BeforeAfter() {
  const { language, t } = useLanguage();

  const content =
    language === "en"
      ? {
          button: "Discuss Your Treatment",
          paragraph:
            "Each procedure begins with careful assessment, personalized color selection and precise technique designed around the individual client.",
          points: [
            "Personalized treatment plan",
            "Custom pigment selection",
            "Natural-looking results",
          ],
          alt: "Before treatment",
        }
      : {
          button: "Hablar sobre tu Tratamiento",
          paragraph:
            "Cada procedimiento comienza con una evaluación cuidadosa, selección personalizada del color y una técnica precisa diseñada para cada cliente.",
          points: [
            "Plan de tratamiento personalizado",
            "Selección personalizada de pigmentos",
            "Resultados de apariencia natural",
          ],
          alt: "Antes del tratamiento",
        };

  return (
    <section
      id="before-after"
      className="w-full overflow-hidden bg-white py-24 lg:py-36"
    >
      <div className="container">

        {/* HEADER */}

        <div className="mx-auto w-full max-w-3xl text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
            {t.beforeAfter.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-5xl leading-[1.05] text-[#2D2A26] lg:text-7xl">
            {t.beforeAfter.title}
            <br />
            <span className="text-[#B08D87]">
              {t.beforeAfter.titleAccent}
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6A635E] lg:text-lg">
            {t.beforeAfter.description}
          </p>

        </div>

        {/* FEATURED RESULT */}

        <div className="mx-auto mt-14 w-full max-w-6xl lg:mt-16">

          <div className="grid w-full overflow-hidden rounded-[32px] bg-[#F8F4F0] shadow-xl lg:grid-cols-2 lg:rounded-[38px]">

            {/* IMAGE */}

            <div className="relative min-h-[420px] w-full lg:min-h-[560px]">

              <Image
                src="/images/before-after/ba-1-before.jpg"
                alt={content.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority={false}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#4F4945] shadow-sm backdrop-blur">
                {t.beforeAfter.before}
              </div>

            </div>

            {/* CONTENT */}

            <div className="flex min-w-0 flex-col justify-center p-8 sm:p-10 lg:p-16">

              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D87]">
                {t.beforeAfter.natural}
              </span>

              <h3 className="mt-5 font-serif text-4xl leading-[1.08] text-[#2D2A26] lg:text-5xl">
                {t.beforeAfter.heading}
              </h3>

              <p className="mt-6 text-base leading-8 text-[#6A635E] lg:text-lg">
                {content.paragraph}
              </p>

              <div className="mt-8 space-y-4 text-sm text-[#4F4945]">

                {content.points.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08D87]" />
                    <span>{point}</span>
                  </div>
                ))}

              </div>

              <a
                href="#contact"
                className="btn-primary mt-10 inline-flex w-fit"
              >
                {content.button}
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}