"use client";

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language, t } = useLanguage();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    treatment: "",
    message: "",
  });

  const isSpanish = language === "es";

  const content = {
    en: {
      service: "Medical Tattoo & Permanent Makeup",

      name: "Full Name",
      email: "Email",
      phone: "Phone",
      treatment: "Select a treatment",
      message:
        "Tell us about the treatment you are interested in...",

      treatments: [
        "3D Areola Restoration",
        "Scar Camouflage",
        "Vitiligo Camouflage",
        "Permanent Makeup",
        "Tattoo Removal",
        "PMU Removal",
        "Other",
      ],

      continue: "Continue on WhatsApp",
      whatsapp: "WhatsApp Olga",
      directions: "Get Directions",

      notProvided: "Not provided",
      recommendation: "I would like your recommendation",
      noMessage: "No additional message.",

      intro:
        "Hello Olga!\n\nI would like to schedule a consultation.",

      labelName: "Name",
      labelEmail: "Email",
      labelPhone: "Phone",
      labelTreatment: "Treatment",
      labelMessage: "Message",
    },

    es: {
      service:
        "Tatuaje Médico y Maquillaje Permanente",

      name: "Nombre completo",
      email: "Correo electrónico",
      phone: "Teléfono",
      treatment: "Selecciona un tratamiento",
      message:
        "Cuéntanos sobre el tratamiento que te interesa...",

      treatments: [
        "Restauración de Areola 3D",
        "Camuflaje de Cicatrices",
        "Camuflaje de Vitiligo",
        "Maquillaje Permanente",
        "Eliminación de Tatuajes",
        "Eliminación de PMU",
        "Otro",
      ],

      continue: "Continuar en WhatsApp",
      whatsapp: "WhatsApp Olga",
      directions: "Cómo llegar",

      notProvided: "No proporcionado",
      recommendation:
        "Me gustaría recibir una recomendación",
      noMessage: "Sin mensaje adicional.",

      intro:
        "¡Hola Olga!\n\nMe gustaría agendar una consulta.",

      labelName: "Nombre",
      labelEmail: "Correo",
      labelPhone: "Teléfono",
      labelTreatment: "Tratamiento",
      labelMessage: "Mensaje",
    },
  };

  const current = content[language] || content.en;

  function handleChange(event) {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  }

  function trackWhatsAppClick(buttonName, extraData = {}) {
    if (
      typeof window !== "undefined" &&
      window.gtag
    ) {
      window.gtag("event", "whatsapp_click", {
        button_name: buttonName,
        link_url: "https://wa.me/526641350986",
        page_location: window.location.href,
        ...extraData,
      });
    }
  }

  function openWhatsApp() {
    const treatment =
      form.treatment || current.recommendation;

    const message =
      `${current.intro}\n\n` +
      `${current.labelName}: ${
        form.name || current.notProvided
      }\n` +
      `${current.labelEmail}: ${
        form.email || current.notProvided
      }\n` +
      `${current.labelPhone}: ${
        form.phone || current.notProvided
      }\n` +
      `${current.labelTreatment}: ${treatment}\n\n` +
      `${current.labelMessage}:\n${
        form.message || current.noMessage
      }`;

    const whatsappUrl =
      "https://wa.me/526641350986?text=" +
      encodeURIComponent(message);

    trackWhatsAppClick("Contact Form", {
      treatment,
    });

    window.location.href = whatsappUrl;
  }

  const directMessage = isSpanish
    ? "¡Hola Olga! Me gustaría conocer más sobre tus servicios."
    : "Hello Olga! I'd like to learn more about your services.";

  const directWhatsApp =
    "https://wa.me/526641350986?text=" +
    encodeURIComponent(directMessage);

  const consultationMessage = isSpanish
    ? "¡Hola Olga! Me gustaría agendar una consulta."
    : "Hello Olga! I'd like to schedule a consultation.";

  const consultationWhatsApp =
    "https://wa.me/526641350986?text=" +
    encodeURIComponent(consultationMessage);

  function handleDirectWhatsAppClick() {
    trackWhatsAppClick("Contact WhatsApp");
  }

  function handleConsultationClick() {
    trackWhatsAppClick("Contact Consultation");
  }

  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-[#F8F4F0] py-20 sm:py-24 lg:py-36"
    >
      <div className="container">

        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-24">

          {/* LEFT SIDE */}

          <div className="min-w-0">

            <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B08D87] sm:text-xs sm:tracking-[0.35em]">
              {t.contact.eyebrow}
            </span>

            <h2 className="mt-4 max-w-xl font-serif text-4xl leading-[1.05] text-[#2D2A26] sm:text-5xl lg:mt-5 lg:text-7xl">
              {t.contact.title}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#6A635E] sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              {t.contact.description}
            </p>

            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-7 lg:mt-12 lg:space-y-8">

              {/* STUDIO */}

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B08D87] sm:text-xs sm:tracking-[0.25em]">
                  {t.contact.studio}
                </p>

                <p className="mt-2 text-base text-[#2D2A26] sm:text-lg">
                  Olga Koshkina
                </p>

                <p className="mt-1 text-sm text-[#6A635E] sm:text-base">
                  {current.service}
                </p>
              </div>

              {/* LOCATION */}

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B08D87] sm:text-xs sm:tracking-[0.25em]">
                  {t.contact.location}
                </p>

                <p className="mt-2 text-sm leading-6 text-[#6A635E] sm:text-base sm:leading-7">
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

              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#B08D87] sm:text-xs">
                  {t.contact.whatsapp}
                </p>

                <a
                  href={directWhatsApp}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleDirectWhatsAppClick}
                  className="mt-2 inline-block text-base text-[#B08D87] sm:text-lg"
                >
                  +52 664 135 0986
                </a>
              </div>

            </div>

            {/* LEFT BUTTONS */}

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              <a
                href={consultationWhatsApp}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleConsultationClick}
                className="btn-primary inline-flex w-full justify-center sm:w-auto"
              >
                {current.whatsapp}
              </a>

              <a
                href="https://maps.app.goo.gl/dup7ko52LydrgqcC7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex w-full justify-center sm:w-auto"
              >
                {current.directions}
              </a>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="min-w-0 rounded-[28px] bg-white p-5 shadow-xl sm:rounded-[36px] sm:p-7 lg:p-10">

            <div className="space-y-4 sm:space-y-5">

              {/* NAME */}

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder={current.name}
                className="w-full rounded-2xl border border-[#E5DED7] bg-white p-4 text-sm text-[#2D2A26] outline-none placeholder:text-[#9A918B] focus:border-[#B08D87] sm:text-base"
              />

              {/* EMAIL */}

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder={current.email}
                className="w-full rounded-2xl border border-[#E5DED7] bg-white p-4 text-sm text-[#2D2A26] outline-none placeholder:text-[#9A918B] focus:border-[#B08D87] sm:text-base"
              />

              {/* PHONE */}

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder={current.phone}
                className="w-full rounded-2xl border border-[#E5DED7] bg-white p-4 text-sm text-[#2D2A26] outline-none placeholder:text-[#9A918B] focus:border-[#B08D87] sm:text-base"
              />

              {/* TREATMENT */}

              <select
                name="treatment"
                value={form.treatment}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#E5DED7] bg-white p-4 text-sm text-[#6A635E] outline-none focus:border-[#B08D87] sm:text-base"
              >
                <option value="">
                  {current.treatment}
                </option>

                {current.treatments.map((item) => (
                  <option
                    key={item}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>

              {/* MESSAGE */}

              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder={current.message}
                className="w-full resize-none rounded-2xl border border-[#E5DED7] bg-white p-4 text-sm text-[#2D2A26] outline-none placeholder:text-[#9A918B] focus:border-[#B08D87] sm:text-base"
              />

              {/* CONTINUE WHATSAPP */}

              <button
                type="button"
                onClick={openWhatsApp}
                className="!mt-2 flex !min-h-[56px] w-full !items-center !justify-center !rounded-full !bg-[#B08D87] px-6 py-4 text-base font-semibold !text-white shadow-md transition hover:!bg-[#96716B] active:scale-[0.99]"
              >
                {current.continue}
              </button>

              {/* PRIVACY */}

              <p className="px-2 text-center text-[10px] leading-5 text-[#8A817B] sm:text-xs">
                {t.contact.privacy}
              </p>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}