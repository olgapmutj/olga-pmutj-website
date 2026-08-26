import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "3D Areola Restoration in Tijuana | Olga Koshkina",

  description:
    "3D areola restoration in Tijuana by Olga Koshkina, specializing in natural-looking paramedical tattooing and personalized restorative treatments.",

  keywords: [
    "3D Areola Restoration Tijuana",
    "Areola Tattoo Tijuana",
    "Paramedical Tattoo Tijuana",
    "3D Areola Tattoo",
    "Medical Tattoo Tijuana",
    "Olga Koshkina",
    "Olga PMU TJ",
  ],

  alternates: {
    canonical:
      "https://olga-pmutj-website.vercel.app/services/areola-restoration",
  },

  openGraph: {
    title: "3D Areola Restoration in Tijuana | Olga Koshkina",
    description:
      "Natural-looking 3D areola restoration and paramedical tattooing in Tijuana.",
    url: "https://olga-pmutj-website.vercel.app/services/areola-restoration",
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

const otherServices = [
  {
    title: "Scar Camouflage",
    description:
      "Customized pigmentation designed to visually soften the contrast between scars and surrounding skin.",
    href: "/services/scar-camouflage",
  },
  {
    title: "Vitiligo Camouflage",
    description:
      "Personalized pigmentation techniques designed to visually blend areas of pigment loss with surrounding skin.",
    href: "/services/vitiligo-camouflage",
  },
  {
    title: "Medical Tattoo",
    description:
      "Explore Olga's complete range of advanced paramedical tattooing and restorative services.",
    href: "/services/medical-tattoo",
  },
];

export default function AreolaRestorationPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "3D Areola Restoration",
    description:
      "Natural-looking 3D areola restoration through specialized paramedical tattooing.",
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
    serviceType: "3D Areola Restoration",
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
              className="font-serif text-xl tracking-[-0.02em] text-[#2D2A26]"
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

        <section className="w-full py-16 sm:py-20 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="grid w-full min-w-0 items-center gap-14 lg:grid-cols-2 lg:gap-20">

              <div className="min-w-0 max-w-xl">

                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                  Medical Tattoo • Tijuana
                </p>

                <h1 className="mt-6 break-words font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[#2D2A26] sm:text-6xl lg:text-7xl">
                  3D Areola
                  <br />
                  <span className="text-[#B08D87]">
                    Restoration
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-[#6A635E] sm:text-lg">
                  Specialized paramedical tattooing designed to recreate the
                  appearance of a natural areola with dimension, balance and
                  carefully selected tones.
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:flex-row">

                  <a
                    href="https://wa.me/526641350986"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#B08D87] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#96716B]"
                  >
                    Schedule a Consultation
                  </a>

                  <Link
                    href="/services/medical-tattoo"
                    className="inline-flex items-center justify-center rounded-full border border-[#D8C9C3] bg-transparent px-7 py-4 text-sm font-medium text-[#4F4945] transition hover:border-[#B08D87] hover:bg-white"
                  >
                    Explore Medical Tattoo
                  </Link>

                </div>

              </div>

              <div className="relative min-w-0 w-full">

                <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[36px] bg-[#E8D8D2]" />

                <div className="relative aspect-[4/4.5] w-full overflow-hidden rounded-[36px] bg-[#E5DED8] shadow-[0_30px_70px_rgba(0,0,0,0.10)]">

                  <Image
                    src="/images/working/olga-working-03.jpg"
                    alt="Olga Koshkina performing paramedical tattooing"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />

                  <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#4F4945] shadow-sm backdrop-blur">
                    3D Areola Restoration
                  </div>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* INTRO */}

        <section className="w-full border-y border-[#E8DED8] bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="grid w-full min-w-0 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                  Restorative Tattooing
                </p>
              </div>

              <div className="min-w-0 max-w-3xl">

                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl lg:text-6xl">
                  Restoring confidence through
                  <span className="text-[#B08D87]">
                    {" "}
                    artistry and precision.
                  </span>
                </h2>

                <p className="mt-7 text-base leading-8 text-[#6A635E] sm:text-lg">
                  3D areola restoration is a specialized form of paramedical
                  tattooing designed to recreate the visual appearance of an
                  areola using carefully selected pigments, shading and
                  dimensional techniques.
                </p>

                <p className="mt-5 text-base leading-8 text-[#6A635E] sm:text-lg">
                  Every treatment is approached individually. Skin tone,
                  existing tissue, previous surgery and the desired aesthetic
                  result are all considered before treatment begins.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* PROCESS */}

        <section className="w-full bg-[#F8F4F0] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                The Process
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl lg:text-6xl">
                Thoughtful from
                <span className="text-[#B08D87]">
                  consultation to result.
                </span>
              </h2>

            </div>

            <div className="mt-14 grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-3 lg:mt-16">

              <article className="rounded-[28px] border border-[#E8DED8] bg-white p-7 shadow-sm sm:p-9">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B08D87]">
                  01
                </span>

                <h3 className="mt-7 font-serif text-3xl text-[#2D2A26]">
                  Consultation
                </h3>

                <p className="mt-5 text-base leading-7 text-[#6D6662]">
                  Your skin, medical history, existing tissue and desired
                  result are carefully discussed before treatment.
                </p>
              </article>

              <article className="rounded-[28px] border border-[#E8DED8] bg-white p-7 shadow-sm sm:p-9">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B08D87]">
                  02
                </span>

                <h3 className="mt-7 font-serif text-3xl text-[#2D2A26]">
                  Color & Design
                </h3>

                <p className="mt-5 text-base leading-7 text-[#6D6662]">
                  Pigments, shape, placement and visual balance are carefully
                  selected for the individual client.
                </p>
              </article>

              <article className="rounded-[28px] border border-[#E8DED8] bg-white p-7 shadow-sm sm:p-9">
                <span className="text-xs font-semibold tracking-[0.2em] text-[#B08D87]">
                  03
                </span>

                <h3 className="mt-7 font-serif text-3xl text-[#2D2A26]">
                  Restoration
                </h3>

                <p className="mt-5 text-base leading-7 text-[#6D6662]">
                  The treatment is performed with precision and attention to
                  natural-looking dimension and tone.
                </p>
              </article>

            </div>

          </div>
        </section>

        {/* CONSULTATION */}

        <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-5xl px-6 text-center sm:px-8">

            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
              Personalized Assessment
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl lg:text-6xl">
              Every restoration begins
              <span className="text-[#B08D87]">
                {" "}
                with understanding.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#6A635E] sm:text-lg">
              The first step is a consultation where Olga evaluates the
              treatment area, discusses your goals and explains what approach
              may be appropriate for you.
            </p>

            <a
              href="https://wa.me/526641350986"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#B08D87] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#96716B]"
            >
              Discuss Your Treatment
            </a>

          </div>
        </section>

        {/* FAQ */}

        <section className="w-full bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">

            <div className="text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                FAQ
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl">
                Questions about
                <span className="text-[#B08D87]">
                  {" "}
                  areola restoration?
                </span>
              </h2>

            </div>

            <div className="mt-12 space-y-4">

              <details className="group rounded-[24px] border border-[#E8DED8] bg-white p-6">
                <summary className="cursor-pointer list-none font-serif text-xl text-[#2D2A26]">
                  How does 3D areola restoration work?
                </summary>

                <p className="mt-4 leading-7 text-[#6D6662]">
                  Specialized pigments and shading techniques are used to
                  recreate the visual appearance of an areola with dimension
                  and carefully selected tones.
                </p>
              </details>

              <details className="group rounded-[24px] border border-[#E8DED8] bg-white p-6">
                <summary className="cursor-pointer list-none font-serif text-xl text-[#2D2A26]">
                  Is every treatment customized?
                </summary>

                <p className="mt-4 leading-7 text-[#6D6662]">
                  Yes. Color, shape, placement and technique are selected
                  according to the individual client and treatment area.
                </p>
              </details>

              <details className="group rounded-[24px] border border-[#E8DED8] bg-white p-6">
                <summary className="cursor-pointer list-none font-serif text-xl text-[#2D2A26]">
                  How do I know if I am a candidate?
                </summary>

                <p className="mt-4 leading-7 text-[#6D6662]">
                  The best way to determine whether the treatment is
                  appropriate is through a personalized consultation with
                  Olga.
                </p>
              </details>

            </div>

          </div>
        </section>

        {/* OTHER SERVICES */}

        <section className="w-full bg-white py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                Explore More Services
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl lg:text-6xl">
                Continue exploring
                <span className="text-[#B08D87]">
                  {" "}
                  Olga's work.
                </span>
              </h2>

            </div>

            <div className="mt-12 grid w-full grid-cols-1 gap-5 md:grid-cols-3">

              {otherServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group rounded-[28px] border border-[#E8DED8] bg-[#FAF7F2] p-7 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8"
                >

                  <h3 className="font-serif text-2xl text-[#2D2A26] transition group-hover:text-[#B08D87]">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-[#6D6662]">
                    {service.description}
                  </p>

                  <div className="mt-6 text-sm font-medium text-[#B08D87]">
                    Learn More →
                  </div>

                </Link>
              ))}

            </div>

          </div>
        </section>

        {/* FINAL CTA */}

        <section
          id="consultation"
          className="w-full bg-[#2D2A26] py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-5xl px-6 text-center sm:px-8">

            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#C5A7A3]">
              Ready to Talk?
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Let's discuss your
              <span className="text-[#C5A7A3]">
                {" "}
                restoration.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#D8D0CB] sm:text-lg">
              Contact Olga to discuss your goals and determine the most
              appropriate next step for your treatment.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="https://wa.me/526641350986"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#B08D87] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#C5A7A3] sm:w-auto"
              >
                Contact Olga on WhatsApp
              </a>

              <Link
                href="/services/medical-tattoo"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/40 bg-transparent px-8 py-4 text-sm font-medium text-white transition hover:border-white hover:bg-white/10 sm:w-auto"
              >
                View Medical Tattoo
              </Link>

            </div>

          </div>
        </section>

        {/* FOOTER */}

        <footer className="w-full bg-[#FAF7F2]">

          <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 py-8 text-xs text-[#8A817C] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">

            <span>
              © {new Date().getFullYear()} Olga Koshkina
            </span>

            <Link
              href="/"
              className="transition hover:text-[#B08D87]"
            >
              Olga PMU TJ
            </Link>

          </div>

        </footer>

      </main>
    </>
  );
}