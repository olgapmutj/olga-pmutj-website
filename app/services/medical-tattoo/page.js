import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Medical Tattoo & Paramedical Tattoo in Tijuana | Olga Koshkina",

  description:
    "Advanced paramedical tattooing in Tijuana by Olga Koshkina, specializing in 3D areola restoration, scar camouflage, vitiligo camouflage and restorative tattooing.",

  keywords: [
    "Medical Tattoo Tijuana",
    "Paramedical Tattoo Tijuana",
    "Medical Tattoo Artist Tijuana",
    "Paramedical Tattoo Artist Tijuana",
    "3D Areola Restoration Tijuana",
    "Scar Camouflage Tijuana",
    "Vitiligo Camouflage Tijuana",
    "Olga Koshkina",
    "Olga PMU TJ",
  ],

  alternates: {
    canonical:
      "https://olga-pmutj-website.vercel.app/services/medical-tattoo",
  },

  openGraph: {
    title: "Medical Tattoo & Paramedical Tattoo in Tijuana | Olga Koshkina",
    description:
      "Advanced paramedical tattooing in Tijuana by Olga Koshkina.",
    url: "https://olga-pmutj-website.vercel.app/services/medical-tattoo",
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

const services = [
  {
    number: "01",
    title: "3D Areola Restoration",
    description:
      "Specialized paramedical pigmentation designed to recreate the visual appearance of a natural areola with dimension, balance and carefully matched tones.",
    href: "/services/areola-restoration",
    link: true,
  },
  {
    number: "02",
    title: "Scar Camouflage",
    description:
      "Customized pigmentation designed to visually soften the contrast between scars and the surrounding skin.",
    href: "/services/scar-camouflage",
    link: true,
  },
  {
    number: "03",
    title: "Vitiligo Camouflage",
    description:
      "Personalized pigmentation techniques designed to visually blend areas of pigment loss with surrounding skin.",
    href: "/services/vitiligo-camouflage",
    link: true,
  },
  {
    number: "04",
    title: "Paramedical Tattooing",
    description:
      "Advanced restorative tattoo techniques for skin affected by surgery, scars and other medical conditions.",
    link: false,
  },
];

export default function MedicalTattooPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medical Tattoo & Paramedical Tattoo",
    description:
      "Advanced paramedical tattooing focused on restoring the appearance of skin affected by surgery, scars and medical conditions.",
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
    serviceType: "Medical Tattoo",
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
              href="/#services"
              className="text-sm font-medium text-[#6A635E] transition hover:text-[#B08D87]"
            >
              ← Back to Services
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
                  Medical Tattoo
                  <br />
                  <span className="text-[#B08D87]">
                    & Paramedical Tattooing
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-base leading-8 text-[#6A635E] sm:text-lg">
                  Advanced paramedical tattooing focused on restoring the
                  appearance of skin affected by surgery, scars and medical
                  conditions.
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
                    href="/#services"
                    className="inline-flex items-center justify-center rounded-full border border-[#D8C9C3] bg-transparent px-7 py-4 text-sm font-medium text-[#4F4945] transition hover:border-[#B08D87] hover:bg-white"
                  >
                    View All Services
                  </Link>

                </div>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.18em] text-[#8A817C]">
                  <span>Restorative</span>
                  <span>Precision</span>
                  <span>Personalized</span>
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

            <div className="grid w-full min-w-0 gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                  Restorative Work
                </p>
              </div>

              <div className="min-w-0 max-w-3xl">

                <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl lg:text-6xl">
                  Restoring confidence through
                  <span className="text-[#B08D87]">
                    {" "}
                    specialized artistry.
                  </span>
                </h2>

                <p className="mt-7 text-base leading-8 text-[#6A635E] sm:text-lg">
                  Medical tattooing requires a different approach from
                  conventional permanent makeup. Every treatment begins with
                  understanding the skin, the history of the area and the
                  desired result.
                </p>

                <p className="mt-5 text-base leading-8 text-[#6A635E] sm:text-lg">
                  Olga combines advanced pigmentation techniques with careful
                  color selection and a highly personalized process designed
                  around each individual client.
                </p>

              </div>

            </div>

          </div>
        </section>

        {/* SERVICES */}

        <section className="w-full bg-[#F8F4F0] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="max-w-3xl">

              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                Specialized Services
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl lg:text-6xl">
                Medical tattooing with
                <span className="text-[#B08D87]"> purpose.</span>
              </h2>

            </div>

            <div className="mt-14 grid w-full min-w-0 grid-cols-1 gap-5 md:grid-cols-2 lg:mt-16">

              {services.map((service) =>
                service.link ? (
                  <Link
                    key={service.number}
                    href={service.href}
                    className="group block min-w-0 rounded-[28px] border border-[#E8DED8] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-9"
                  >

                    <div className="flex items-start justify-between gap-6">

                      <span className="text-xs font-semibold tracking-[0.2em] text-[#B08D87]">
                        {service.number}
                      </span>

                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#B08D87] transition group-hover:scale-125" />

                    </div>

                    <h3 className="mt-8 font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#2D2A26] transition group-hover:text-[#B08D87] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-base leading-7 text-[#6D6662]">
                      {service.description}
                    </p>

                    <div className="mt-7 flex items-center text-sm font-medium text-[#B08D87]">
                      <span>Learn More</span>

                      <span className="ml-2 transition duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>

                  </Link>
                ) : (
                  <article
                    key={service.number}
                    className="min-w-0 rounded-[28px] border border-[#E8DED8] bg-white p-7 shadow-sm sm:p-9"
                  >

                    <div className="flex items-start justify-between gap-6">

                      <span className="text-xs font-semibold tracking-[0.2em] text-[#B08D87]">
                        {service.number}
                      </span>

                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#B08D87]" />

                    </div>

                    <h3 className="mt-8 font-serif text-3xl leading-[1.08] tracking-[-0.025em] text-[#2D2A26] sm:text-4xl">
                      {service.title}
                    </h3>

                    <p className="mt-5 text-base leading-7 text-[#6D6662]">
                      {service.description}
                    </p>

                    <div className="mt-7 text-sm font-medium text-[#8A817C]">
                      Current Service
                    </div>

                  </article>
                )
              )}

            </div>

          </div>
        </section>

        {/* WHY OLGA */}

        <section className="w-full bg-[#FAF7F2] py-20 sm:py-24 lg:py-28">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10">

            <div className="grid w-full min-w-0 items-center gap-12 lg:grid-cols-2 lg:gap-24">

              <div className="relative min-w-0 overflow-hidden rounded-[32px]">

                <Image
                  src="/images/working/olga-working-05.jpg"
                  alt="Olga Koshkina performing professional tattoo work"
                  width={800}
                  height={900}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-auto w-full object-cover"
                />

              </div>

              <div className="min-w-0 max-w-xl">

                <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#B08D87]">
                  The Olga Koshkina Approach
                </p>

                <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[#2D2A26] sm:text-5xl">
                  Precision matters when
                  <span className="text-[#B08D87]">
                    {" "}
                    restoration does.
                  </span>
                </h2>

                <div className="mt-8 space-y-5 text-base leading-8 text-[#6A635E]">

                  <p>
                    Each client receives an individualized assessment before
                    treatment begins.
                  </p>

                  <p>
                    Pigment selection, technique and design are approached
                    according to the client's skin and the specific area being
                    treated.
                  </p>

                  <p>
                    The goal is not simply to perform a procedure. It is to
                    create a result that feels natural, considered and
                    personal.
                  </p>

                </div>

              </div>

            </div>

          </div>
        </section>

        {/* CONSULTATION */}

        <section
          id="consultation"
          className="relative z-0 w-full overflow-hidden bg-[#2D2A26] py-20 sm:py-24 lg:py-28"
        >
          <div className="mx-auto w-full max-w-5xl px-6 text-center sm:px-8">

            <p className="relative z-10 text-xs font-semibold uppercase tracking-[0.32em] text-[#C5A7A3]">
              Start With A Consultation
            </p>

            <h2 className="relative z-10 mt-5 font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Let's talk about your{" "}
              <span className="text-white">
                goals.
              </span>
            </h2>

            <p className="relative z-10 mx-auto mt-7 max-w-2xl text-base leading-8 text-[#D8D0CB] sm:text-lg">
              Contact Olga to discuss your needs, ask questions and determine
              the most appropriate approach for your treatment.
            </p>

            <div className="relative z-10 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">

              <a
                href="https://wa.me/526641350986"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#C5A7A3] px-8 py-4 text-sm font-medium text-[#2D2A26] transition hover:bg-[#D8BCB7] sm:w-auto"
              >
                Contact Olga on WhatsApp
              </a>

              <Link
                href="/"
                className="inline-flex w-full items-center justify-center rounded-full border border-[#C5A7A3] bg-transparent px-8 py-4 text-sm font-medium !text-white transition hover:bg-[#C5A7A3] hover:!text-[#2D2A26] sm:w-auto"
              >
                Return to Website
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