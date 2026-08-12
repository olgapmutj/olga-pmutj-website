"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

export default function AboutOlga() {
  const { language, t } = useLanguage();

  const content = {
    en: {
      eyebrow: "About Olga",
      title: (
        <>
          Precision,
          <br />
          Compassion &
          <br />
          Confidence
        </>
      ),
      paragraph1:
        "Olga Koshkina specializes in advanced medical tattooing and permanent makeup, combining technical precision with an artistic eye for natural-looking results.",
      paragraph2:
        "Her work is deeply personal. Every treatment is carefully planned around the client, their skin, their goals and their individual story.",
      experience: "Years Experience",
      procedures: "Procedures",
      button: "Meet Olga",
    },

    es: {
      eyebrow: "Sobre Olga",
      title: (
        <>
          Precisión,
          <br />
          Compasión y
          <br />
          Confianza
        </>
      ),
      paragraph1:
        "Olga Koshkina se especializa en tatuaje médico avanzado y maquillaje permanente, combinando precisión técnica con una visión artística para crear resultados naturales.",
      paragraph2:
        "Su trabajo es profundamente personal. Cada tratamiento se planifica cuidadosamente tomando en cuenta al cliente, su piel, sus objetivos y su historia individual.",
      experience: "Años de Experiencia",
      procedures: "Procedimientos",
      button: "Conoce a Olga",
    },
  };

  const current = content[language];

  return (
    <section
      id="about"
      className="w-full overflow-hidden bg-white py-24 lg:py-36"
    >
      <div className="container">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-24">

          {/* IMAGE */}

          <div className="relative min-w-0">

            <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[34px] bg-[#E8D6D1] lg:-bottom-6 lg:-right-6 lg:rounded-[38px]" />

            <div className="relative overflow-hidden rounded-[34px] shadow-2xl lg:rounded-[38px]">

              <Image
                src="/images/about/olga-about-2.jpg"
                alt="Olga Koshkina"
                width={800}
                height={1000}
                className="h-[500px] w-full object-cover lg:h-[650px]"
              />

            </div>

          </div>

          {/* CONTENT */}

          <div className="min-w-0">

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
              {current.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-[1.02] text-[#2D2A26] lg:text-7xl">
              {current.title}
            </h2>

            <p className="mt-8 text-base leading-8 text-[#6D6662] lg:text-lg">
              {current.paragraph1}
            </p>

            <p className="mt-6 text-base leading-8 text-[#6D6662] lg:text-lg">
              {current.paragraph2}
            </p>

            {/* STATS */}

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-[#E8DED8] pt-8 lg:mt-12 lg:gap-8 lg:pt-10">

              <div>

                <p className="font-serif text-4xl text-[#B08D87] lg:text-5xl">
                  8+
                </p>

                <p className="mt-2 text-sm text-[#6D6662]">
                  {current.experience}
                </p>

              </div>

              <div>

                <p className="font-serif text-4xl text-[#B08D87] lg:text-5xl">
                  1000+
                </p>

                <p className="mt-2 text-sm text-[#6D6662]">
                  {current.procedures}
                </p>

              </div>

            </div>

            {/* CTA */}

            <a
              href="#contact"
              className="btn-primary mt-10 inline-flex"
            >
              {current.button}
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}