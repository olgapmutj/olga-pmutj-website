import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Vitiligo Camouflage Tijuana | Olga Koshkina",

  description:
    "Vitiligo camouflage in Tijuana by Olga Koshkina. Personalized paramedical tattooing designed to visually blend areas of pigment loss with surrounding skin.",

  keywords: [
    "Vitiligo Camouflage Tijuana",
    "Vitiligo Tattoo Tijuana",
    "Paramedical Tattoo Tijuana",
    "Medical Tattoo Tijuana",
    "Vitiligo Camouflage",
    "Paramedical Tattoo Artist Tijuana",
    "Olga Koshkina",
    "Olga PMU TJ",
  ],

  alternates: {
    canonical:
      "https://olga-pmutj-website.vercel.app/services/vitiligo-camouflage",
  },

  openGraph: {
    title: "Vitiligo Camouflage Tijuana | Olga Koshkina",

    description:
      "Personalized paramedical tattooing designed to visually blend areas of pigment loss with surrounding skin.",

    url:
      "https://olga-pmutj-website.vercel.app/services/vitiligo-camouflage",

    siteName: "Olga Koshkina",

    images: [
      {
        url: "/images/working/olga-working-03.jpg",
        width: 800,
        height: 900,
        alt: "Olga Koshkina performing paramedical tattooing",
      },
    ],

    locale: "en_US",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const process = [
  {
    number: "01",
    title: "Consultation",
    text: "The treatment area, skin characteristics, previous procedures and individual goals are carefully discussed before treatment.",
  },
  {
    number: "02",
    title: "Color Matching",
    text: "Pigments are carefully considered according to the surrounding skin tone and the characteristics of the treatment area.",
  },
  {
    number: "03",
    title: "Personalized Treatment",
    text: "Specialized pigmentation techniques are used to create a more visually balanced transition between areas of pigment loss and surrounding skin.",
  },
];

const faqs = [
  {
    question: "What is vitiligo camouflage?",
    answer:
      "Vitiligo camouflage is a paramedical tattooing technique that uses carefully selected pigments to visually blend areas of pigment loss with the surrounding skin.",
  },
  {
    question: "Is every case suitable for camouflage?",
    answer:
      "Not every case is suitable. The stability and characteristics of the skin, the treatment area and individual circumstances are important factors that must be evaluated during consultation.",
  },
  {
    question: "Is the color matched to my skin?",
    answer:
      "Color selection is personalized according to the surrounding skin and the specific characteristics of the treatment area.",
  },
  {
    question: "Is the result permanent?",
    answer:
      "Paramedical tattooing is designed to provide long-lasting pigmentation, but pigment can change over time depending on individual skin characteristics and other factors. Maintenance may be recommended.",
  },
  {
    question: "Is a consultation required?",
    answer:
      "Yes. A consultation allows Olga to evaluate the treatment area and determine whether vitiligo camouflage may be appropriate for the individual case.",
  },
];

export default function VitiligoCamouflagePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Vitiligo Camouflage",
    description:
      "Personalized vitiligo camouflage and paramedical tattoo consultation in Tijuana.",
    provider: {
      "@type": "Person",
      name: "Olga Koshkina",
      url: "https://olga-pmutj-website.vercel.app",
    },
    areaServed: {
      "@type": "City",
      name: "Tijuana",
      addressCountry: "MX",
    },
    serviceType: "Vitiligo Camouflage",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      <main className="min-h-screen w-full overflow-x-hidden bg-[#FAF7F2] text-[#2D2A26]">

        {/* HEADER */}

        <header className="w-full border-b border-[#E8DED8] bg-[#FAF7F2]">
          <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 sm:px-8 lg:px-10">

            <Link
              href="/"
              className="font-serif text-xl tracking-[-0.02em]"
            >
              Olga Koshkina
            </Link>

            <Link
              href="/services/medical-tattoo"
              className="text-sm font-medium text-[#6A635E] transition hover:text-[#B08D87]"
            >
              ← Medical Tattoo
            </Link>

          </div>
        </header>

        {/* HERO */}

        <section className="w-full py-14 sm:py-20 lg:py-24">
          <div className="mx-auto w-full max-w-[1380px] px-6 sm:px-8 lg:px-12">

            <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

              <div className="min-w-0 max-w-[620px]">

                <p className="text-[10px] font-semibold uppercase tracking-[0.38em] text-[#B08D87] sm:text-xs">
                  Vitiligo Camouflage • Tijuana
                </p>

                <h1 className="mt-6 font-serif text-[48px] leading-[0.94] tracking-[-0.045em] sm:text-6xl lg:text-[76px]">
                  Restoring
                  <br />
                  <span className="text-[#B08D87]">
                    visual balance
                  </span>
                  <br />
                  through artistry.
                </h1>

                <p className="mt-7 max-w-[540px] text-base leading-7 text-[#6A635E] sm:mt-8 sm:text-lg sm:leading-8">
                  Vitiligo camouflage is a specialized form of paramedical
                  tattooing designed to visually blend areas of pigment loss
                  with the surrounding skin through carefully considered color
                  and pigmentation.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="https://wa.me/526641350986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-[#B08D87] px-7 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#96716B]"
                  >
                    Schedule a Consultation
                  </a>

                  <Link
                    href="/services/medical-tattoo"
                    className="inline-flex min-h-[52px] items-center justify-center rounded-full border border-[#D8C9C3] px-7 text-sm font-medium text-[#4F4945] transition duration-300 hover:border-[#B08D87] hover:bg-white"
                  >
                    Medical Tattoo
                  </Link>

                </div>

                <div className="mt-9 flex flex-wrap gap-x-7 gap-y-3 text-[10px] font-medium uppercase tracking-[0.22em] text-[#8A817C]">
                  <span>Personalized</span>
                  <span>Paramedical</span>
                  <span>Tijuana</span>
                </div>

              </div>

              {/* HERO IMAGE */}

              <div className="relative min-w-0 lg:pl-4">

                <div className="absolute -bottom-6 -left-4 h-[88%] w-[88%] rounded-[38px] bg-[#E8D8D2] sm:-left-6" />

                <div className="relative ml-auto aspect-[0.92] w-full max-w-[650px] overflow-hidden rounded-[38px] bg-[#E5DED8] shadow-[0_30px_80px_rgba(45,42,38,0.13)]">

                  <Image
                    src="/images/working/olga-working-03.jpg"
                    alt="Olga Koshkina performing paramedical tattoo work"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 52vw"
                    className="object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />

                  <div className="absolute bottom-6 left-6 rounded-full bg-white/95 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4F4945] shadow-sm">
                    Paramedical Tattooing
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* INTRO */}

        <section className="w-full border-y border-[#E8DED8] bg-white py-20 sm:py-24 lg:py-28">

          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="grid w-full gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                  Restorative Tattooing
                </p>
              </div>

              <div className="max-w-3xl">

                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                  A personalized approach to{" "}
                  <span className="text-[#B08D87]">
                    visual blending.
                  </span>
                </h2>

                <p className="mt-7 text-base leading-8 text-[#6A635E] sm:text-lg">
                  Changes in skin pigmentation can create visible differences
                  between areas of pigment loss and surrounding skin.
                </p>

                <p className="mt-5 text-base leading-8 text-[#6A635E] sm:text-lg">
                  Paramedical tattooing can use individualized color selection
                  and pigmentation techniques to create a more visually
                  balanced transition between the treatment area and
                  surrounding skin.
                </p>

              </div>

            </div>
          </div>
        </section>

        {/* PROCESS */}

        <section className="w-full bg-[#F6F0EB] py-20 sm:py-24 lg:py-28">

          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                The Process
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                What to expect from the{" "}
                <span className="text-[#B08D87]">
                  consultation.
                </span>
              </h2>

            </div>

            <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">

              {process.map((item) => (
                <article
                  key={item.number}
                  className="min-h-[260px] rounded-[28px] border border-[#E8DED8] bg-white p-8 shadow-sm"
                >

                  <span className="text-xs font-semibold tracking-[0.2em] text-[#B08D87]">
                    {item.number}
                  </span>

                  <h3 className="mt-7 font-serif text-3xl">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-[#6D6662]">
                    {item.text}
                  </p>

                </article>
              ))}

            </div>
          </div>
        </section>

        {/* PERSONALIZED ASSESSMENT */}

        <section className="w-full bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
              Personalized Assessment
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl">
              Every case is{" "}
              <span className="text-[#B08D87]">
                different.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#6A635E] sm:text-lg">
              The suitability of vitiligo camouflage depends on the individual
              circumstances and characteristics of the skin and treatment
              area. A consultation is the best way to evaluate the specific
              situation and determine the appropriate next step.
            </p>

          </div>
        </section>

        {/* BEFORE TREATMENT */}

        <section className="w-full bg-white py-20 sm:py-24 lg:py-28">

          <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 lg:px-10">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                Individual Evaluation
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-6xl">
                Precision begins with{" "}
                <span className="text-[#B08D87]">
                  evaluation.
                </span>
              </h2>

            </div>

            <div className="max-w-2xl">

              <p className="text-base leading-8 text-[#6A635E] sm:text-lg">
                Vitiligo camouflage is not a one-size-fits-all procedure.
                Skin tone, pigmentation, treatment area and individual
                circumstances all influence the approach.
              </p>

              <p className="mt-5 text-base leading-8 text-[#6A635E] sm:text-lg">
                Olga evaluates each case individually before recommending
                treatment. The goal is a thoughtful and natural-looking visual
                transition based on the characteristics of each individual
                case.
              </p>

            </div>

          </div>
        </section>

        {/* FAQ */}

        <section className="w-full border-t border-[#E8DED8] bg-white py-20 sm:py-24 lg:py-28">

          <div className="mx-auto max-w-5xl px-6 sm:px-8">

            <div className="text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                FAQ
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] sm:text-5xl">
                Questions about{" "}
                <span className="text-[#B08D87]">
                  vitiligo camouflage.
                </span>
              </h2>

            </div>

            <div className="mt-12 divide-y divide-[#E8DED8] border-y border-[#E8DED8]">

              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group py-6"
                >

                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-serif text-xl sm:text-2xl">

                    <span>
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-2xl font-light text-[#B08D87] transition group-open:rotate-45">
                      +
                    </span>

                  </summary>

                  <p className="mt-4 max-w-3xl pr-8 text-base leading-7 text-[#6D6662]">
                    {faq.answer}
                  </p>

                </details>
              ))}

            </div>
          </div>
        </section>

        {/* CTA */}

        <section
          id="consultation"
          className="w-full bg-[#2D2A26] py-20 sm:py-24 lg:py-28"
        >

          <div className="mx-auto max-w-4xl px-6 text-center sm:px-8">

            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#C5A7A3]">
              Tijuana • Medical Tattoo
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Start with a{" "}
              <span className="text-[#C5A7A3]">
                consultation.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#D8D0CB] sm:text-lg">
              Contact Olga to discuss your goals, ask questions and learn
              whether vitiligo camouflage may be appropriate for your
              individual situation.
            </p>

            <div className="mt-9">

              <a
                href="https://wa.me/526641350986"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[54px] items-center justify-center rounded-full bg-[#B08D87] px-9 text-sm font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#C5A7A3]"
              >
                Contact Olga on WhatsApp
              </a>

            </div>

            <p className="mt-7 text-xs uppercase tracking-[0.18em] text-white/40">
              Tijuana, Baja California, Mexico
            </p>

          </div>
        </section>

        {/* FOOTER */}

        <footer className="w-full bg-[#FAF7F2]">

          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-[#8A817C] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">

            <span>
              © {new Date().getFullYear()} Olga Koshkina
            </span>

            <div className="flex gap-6">

              <Link
                href="/"
                className="transition hover:text-[#B08D87]"
              >
                Home
              </Link>

              <Link
                href="/services/medical-tattoo"
                className="transition hover:text-[#B08D87]"
              >
                Medical Tattoo
              </Link>

            </div>

          </div>

        </footer>

      </main>
    </>
  );
}