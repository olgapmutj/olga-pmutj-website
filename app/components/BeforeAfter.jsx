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
          beforeAlt: "Before treatment",
          afterAlt: "After treatment",
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
          beforeAlt: "Antes del tratamiento",
          afterAlt: "Después del tratamiento",
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

        {/* BEFORE / AFTER */}

        <div className="mx-auto mt-14 w-full max-w-6xl lg:mt-16">

          <div className="grid gap-5 sm:grid-cols-2">

            {/* BEFORE */}

            <div className="relative overflow-hidden rounded-[28px] bg-[#F8F4F0] shadow-lg">

              <div className="relative aspect-[4/5] w-full">

                <Image
                  src="/images/before-after/ba-1-before.jpg"
                  alt={content.beforeAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />

              </div>

              <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#4F4945] shadow-sm backdrop-blur">
                {t.beforeAfter.before}
              </div>

            </div>

            {/* AFTER */}

            <div className="relative overflow-hidden rounded-[28px] bg-[#F8F4F0] shadow-lg">

              <div className="relative aspect-[4/5] w-full">

                <Image
                  src="/images/before-after/ba-1-after.jpg"
                  alt={content.afterAlt}
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover"
                />

              </div>

              <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#4F4945] shadow-sm backdrop-blur">
                {t.beforeAfter.after}
              </div>

            </div>

          </div>

          {/* DESCRIPTION */}

          <div className="mx-auto mt-12 max-w-4xl text-center lg:mt-16">

            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#B08D87]">
              {t.beforeAfter.natural}
            </span>

            <h3 className="mt-5 font-serif text-4xl leading-[1.08] text-[#2D2A26] lg:text-5xl">
              {t.beforeAfter.heading}
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6A635E] lg:text-lg">
              {content.paragraph}
            </p>

            {/* POINTS */}

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-[#4F4945]">

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

            {/* CTA */}

            <a
              href="#contact"
              className="btn-primary mt-10 inline-flex"
            >
              {content.button}
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}