"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const LanguageContext = createContext(null);

const translations = {
  en: {
    language: "EN",

    nav: {
      services: "Services",
      results: "Results",
      gallery: "Gallery",
      about: "About",
      reviews: "Reviews",
      contact: "Contact",
      book: "Book Consultation",
    },

    hero: {
      eyebrow: "Olga Koshkina",
      title: "Medical Tattoo",
      titleAccent: "& Permanent Makeup",
      description:
        "Advanced medical tattooing and permanent makeup designed to restore confidence and create natural, elegant results.",
      primary: "Schedule Consultation",
      secondary: "Explore Services",
      experience: "Years Experience",
      procedures: "Procedures",
      location: "Baja California",
      badge: "Medical Tattoo Specialist",
    },

    services: {
      eyebrow: "Medical Tattoo & PMU",
      title: "Expertise designed",
      titleAccent: "around you.",
      description:
        "Every treatment is personalized to your skin, your story and your goals, with a focus on natural-looking results.",
      consultation: "Schedule Consultation",
    },

    beforeAfter: {
      eyebrow: "Before & After",
      title: "See the",
      titleAccent: "Transformation",
      description:
        "Every treatment is personalized to the client, their skin and their goals. The focus is always natural-looking, refined results.",
      before: "Before",
      after: "After",
      natural: "Natural Results",
      heading: "Restoring confidence through precision.",
      descriptionLong:
        "Each procedure begins with careful assessment, personalized color selection and precise technique designed around the individual client.",
      personalizedPlan: "Personalized treatment plan",
      customPigment: "Custom pigment selection",
      naturalResults: "Natural-looking results",
      button: "Discuss Your Treatment",
    },

    gallery: {
      eyebrow: "Gallery",
      title: "Our Work",
      description:
        "A selection of Olga's work in medical tattooing, permanent makeup and personalized beauty treatments.",
      view: "View Image",
      instagram:
        "More work and new transformations are shared on Instagram.",
      follow: "Follow @olga_pmu_tj",
    },

    about: {
      eyebrow: "About Olga",
      title: "Precision, Compassion & Confidence",
      button: "Meet Olga",
    },

    reviews: {
      eyebrow: "Google Reviews",
      title: "Patient Stories",
      description:
        "Real experiences from clients who trusted Olga with their permanent makeup and medical tattoo treatments.",
      rating: "5.0 on Google",
      based: "Based on 15 reviews",
      more: "Read More Reviews on Google",
    },

    instagram: {
      eyebrow: "Instagram",
      title: "Follow Our Journey",
      description:
        "Follow Olga's latest work, transformations and behind-the-scenes moments.",
      follow: "Follow @olga_pmu_tj",
      view: "View on Instagram",
    },

    contact: {
      eyebrow: "Contact",
      title: "Schedule Your Consultation",
      description:
        "Tell us what you are looking for and we will help you determine the most appropriate treatment for your goals.",
      studio: "Studio",
      location: "Location",
      whatsapp: "WhatsApp",
      button: "Continue on WhatsApp",
      privacy:
        "Your information will be used only to respond to your consultation request.",
    },

    map: {
      eyebrow: "Location",
      title: "Visit Our Studio",
      button: "Open in Google Maps →",
    },

    footer: {
      description:
        "Medical Tattoo & Permanent Makeup in Tijuana, Baja California.",
    },
  },

  es: {
    language: "ES",

    nav: {
      services: "Servicios",
      results: "Resultados",
      gallery: "Galería",
      about: "Olga",
      reviews: "Opiniones",
      contact: "Contacto",
      book: "Agendar Consulta",
    },

    hero: {
      eyebrow: "Olga Koshkina",
      title: "Tatuaje Médico",
      titleAccent: "y Maquillaje Permanente",
      description:
        "Tatuaje médico avanzado y maquillaje permanente diseñados para restaurar la confianza y crear resultados naturales y elegantes.",
      primary: "Agendar Consulta",
      secondary: "Ver Servicios",
      experience: "Años de Experiencia",
      procedures: "Procedimientos",
      location: "Baja California",
      badge: "Especialista en Tatuaje Médico",
    },

    services: {
      eyebrow: "Tatuaje Médico y PMU",
      title: "Experiencia diseñada",
      titleAccent: "para ti.",
      description:
        "Cada tratamiento se personaliza según tu piel, tu historia y tus objetivos, buscando siempre resultados naturales.",
      consultation: "Agendar Consulta",
    },

    beforeAfter: {
      eyebrow: "Antes y Después",
      title: "Mira la",
      titleAccent: "Transformación",
      description:
        "Cada tratamiento se personaliza según la persona, su piel y sus objetivos. El enfoque siempre está en resultados naturales y refinados.",
      before: "Antes",
      after: "Después",
      natural: "Resultados Naturales",
      heading:
        "Restaurando la confianza a través de la precisión.",
      descriptionLong:
        "Cada procedimiento comienza con una evaluación cuidadosa, selección personalizada del color y una técnica precisa diseñada para cada cliente.",
      personalizedPlan:
        "Plan de tratamiento personalizado",
      customPigment:
        "Selección personalizada de pigmentos",
      naturalResults:
        "Resultados de apariencia natural",
      button: "Hablar sobre tu Tratamiento",
    },

    gallery: {
      eyebrow: "Galería",
      title: "Nuestro Trabajo",
      description:
        "Una selección del trabajo de Olga en tatuaje médico, maquillaje permanente y tratamientos personalizados.",
      view: "Ver Imagen",
      instagram:
        "Más trabajos y nuevas transformaciones se comparten en Instagram.",
      follow: "Seguir @olga_pmu_tj",
    },

    about: {
      eyebrow: "Sobre Olga",
      title: "Precisión, Compasión y Confianza",
      button: "Conoce a Olga",
    },

    reviews: {
      eyebrow: "Opiniones de Google",
      title: "Historias de Pacientes",
      description:
        "Experiencias reales de clientes que confiaron en Olga para sus tratamientos de maquillaje permanente y tatuaje médico.",
      rating: "5.0 en Google",
      based: "Basado en 15 opiniones",
      more: "Leer Más Opiniones en Google",
    },

    instagram: {
      eyebrow: "Instagram",
      title: "Sigue Nuestro Trabajo",
      description:
        "Conoce los últimos trabajos, transformaciones y momentos detrás de cámaras de Olga.",
      follow: "Seguir @olga_pmu_tj",
      view: "Ver en Instagram",
    },

    contact: {
      eyebrow: "Contacto",
      title: "Agenda tu Consulta",
      description:
        "Cuéntanos qué estás buscando y te ayudaremos a determinar el tratamiento más adecuado para tus objetivos.",
      studio: "Estudio",
      location: "Ubicación",
      whatsapp: "WhatsApp",
      button: "Continuar en WhatsApp",
      privacy:
        "Tu información será utilizada únicamente para responder a tu solicitud de consulta.",
    },

    map: {
      eyebrow: "Ubicación",
      title: "Visita Nuestro Estudio",
      button: "Abrir en Google Maps →",
    },

    footer: {
      description:
        "Tatuaje Médico y Maquillaje Permanente en Tijuana, Baja California.",
    },
  },
};

export function LanguageProvider({ children }) {
  // IMPORTANTE:
  // El servidor y el primer render del navegador empiezan
  // exactamente con el mismo idioma para evitar hydration errors.
  const [language, setLanguageState] = useState("en");

  // Después de que el navegador ya cargó, recuperamos
  // el idioma guardado.
  useEffect(() => {
    const savedLanguage =
      window.localStorage.getItem("olga-language");

    if (savedLanguage === "es" || savedLanguage === "en") {
      setLanguageState(savedLanguage);
    }
  }, []);

  function setLanguage(newLanguage) {
    if (newLanguage !== "en" && newLanguage !== "es") {
      return;
    }

    setLanguageState(newLanguage);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(
        "olga-language",
        newLanguage
      );
    }
  }

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}