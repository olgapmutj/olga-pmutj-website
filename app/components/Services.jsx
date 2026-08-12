"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const services = {
  en: [
    {
      category: "MEDICAL TATTOO",
      title: "Restoring What Life Changed",
      description:
        "Advanced paramedical tattooing focused on restoring the appearance of skin affected by surgery, scars and medical conditions.",
      services: [
        "3D Areola Restoration",
        "Scar Camouflage",
        "Vitiligo Camouflage",
        "Paramedical Tattooing",
      ],
      image: "/images/working/olga-working-03.jpg",
    },
    {
      category: "PERMANENT MAKEUP",
      title: "Everyday Beauty, Refined",
      description:
        "Natural-looking permanent makeup created with precision, balance and a personalized approach to each client.",
      services: [
        "Eyebrows",
        "Lip Blush",
        "Eyeliner",
        "Permanent Makeup",
      ],
      image: "/images/working/olga-working-04.jpg",
    },
    {
      category: "TATTOO REMOVAL",
      title: "A Fresh Start",
      description:
        "Professional removal services with a personalized approach based on the pigment, skin and previous work.",
      services: [
        "Tattoo Removal",
        "PMU Removal",
      ],
      image: "/images/working/olga-working-05.jpg",
    },
  ],

  es: [
    {
      category: "TATUAJE MÉDICO",
      title: "Restaurando lo que la vida cambió",
      description:
        "Tatuaje paramédico avanzado enfocado en restaurar la apariencia de la piel afectada por cirugías, cicatrices y condiciones médicas.",
      services: [
        "Restauración de Areola 3D",
        "Camuflaje de Cicatrices",
        "Camuflaje de Vitiligo",
        "Tatuaje Paramédico",
      ],
      image: "/images/working/olga-working-03.jpg",
    },
    {
      category: "MAQUILLAJE PERMANENTE",
      title: "Belleza diaria, refinada",
      description:
        "Maquillaje permanente de apariencia natural creado con precisión, equilibrio y un enfoque personalizado para cada cliente.",
      services: [
        "Cejas",
        "Lip Blush",
        "Delineado de Ojos",
        "Maquillaje Permanente",
      ],
      image: "/images/working/olga-working-04.jpg",
    },
    {
      category: "ELIMINACIÓN DE TATUAJES",
      title: "Un nuevo comienzo",
      description:
        "Servicios profesionales de eliminación con un enfoque personalizado según el pigmento, la piel y el trabajo previo.",
      services: [
        "Eliminación de Tatuajes",
        "Eliminación de PMU",
      ],
      image: "/images/working/olga-working-05.jpg",
    },
  ],
};

export default function Services() {
  const { language, t } = useLanguage();

  const currentServices = services[language] || services.en;

  return (
    <section
      id="services"
      className="w-full bg-[#F8F4F0] py-24 lg:py-36"
    >
      <div className="container">

        {/* HEADER */}

        <div className="mx-auto w-full max-w-3xl text-center">

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
            {t.services.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-5xl leading-[1.05] text-[#2D2A26] lg:text-7xl">
            {t.services.title}
            <br />
            <span className="text-[#B08D87]">
              {t.services.titleAccent}
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#6A635E] lg:text-lg">
            {t.services.description}
          </p>

        </div>

        {/* SERVICE CARDS */}

        <div className="mx-auto mt-16 grid w-full max-w-6xl grid-cols-1 gap-8 lg:mt-20 lg:grid-cols-3">

          {currentServices.map((service) => (
            <article
              key={service.title}
              className="group flex min-w-0 flex-col overflow-hidden rounded-[32px] bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* IMAGE */}

              <div className="relative h-[340px] w-full overflow-hidden lg:h-[360px]">

                <Image
                  src={service.image}
                  alt={service.title}
                  width={800}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="block h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                <div className="absolute bottom-5 left-5 rounded-full bg-white/90 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4F4945] shadow-sm backdrop-blur">
                  {service.category}
                </div>

              </div>

              {/* CONTENT */}

              <div className="flex flex-1 flex-col p-8">

                <h3 className="font-serif text-3xl leading-[1.1] text-[#2D2A26]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-7 text-[#6D6662]">
                  {service.description}
                </p>

                <div className="mt-7 space-y-3">

                  {service.services.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-[#4F4945]"
                    >
                      <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08D87]" />
                      <span>{item}</span>
                    </div>
                  ))}

                </div>

                <a
                  href="#contact"
                  className="mt-auto pt-8"
                >
                  <span className="inline-flex rounded-full bg-[#B08D87] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#96716B]">
                    {language === "en"
                      ? "Schedule Consultation"
                      : "Agendar Consulta"}
                  </span>
                </a>

              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}