import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "Medical Tattoo & Paramedical Tattoo in Tijuana | Olga Koshkina",

  description:
    "Advanced paramedical tattooing in Tijuana by Olga Koshkina, specializing in restorative and medical tattoo techniques for skin affected by surgery, scars and medical conditions.",

  keywords: [
    "Medical Tattoo Tijuana",
    "Paramedical Tattoo Tijuana",
    "Medical Tattoo Artist Tijuana",
    "Paramedical Tattoo Artist Tijuana",
    "Areola Restoration Tijuana",
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
    title:
      "Medical Tattoo & Paramedical Tattoo in Tijuana | Olga Koshkina",

    description:
      "Advanced paramedical tattooing in Tijuana by Olga Koshkina.",

    url:
      "https://olga-pmutj-website.vercel.app/services/medical-tattoo",

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

const medicalTattooServices = [
  {
    title: "3D Areola Restoration",
    description:
      "Paramedical tattooing designed to recreate the visual appearance of a natural areola and nipple through specialized pigmentation techniques.",
    href: "/services/areola-restoration",
  },
  {
    title: "Scar Camouflage",
    description:
      "Specialized pigmentation techniques designed to visually reduce the contrast between a scar and the surrounding skin.",
    href: "/services/scar-camouflage",
  },
  {
    title: "Vitiligo Camouflage",
    description:
      "Customized pigmentation techniques intended to help visually blend areas of pigment loss with surrounding skin.",
    href: "/services/vitiligo-camouflage",
  },
  {
    title: "Paramedical Tattooing",
    description:
      "Advanced tattooing techniques focused on restoring the appearance of skin affected by surgery, scars and medical conditions.",
    href: "#consultation",
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

      <main className="min-h-screen bg-[#FAF7F2] text-[#2D2A26]">

        {/* NAVIGATION */}

        <header className="border-b border-[#E8DED8] bg-[#FAF7F2]/95 backdrop-blur">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">

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

        <section className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">

          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
                Medical Tattoo • Tijuana
              </p>

              <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[0.98] tracking-[-0.035em] sm:text-6xl lg:text-7xl">
                Medical Tattoo &
                <span className="block text-[#B08D87]">
                  Paramedical Tattooing
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-[#6A635E]">
                Advanced paramedical tattooing focused on restoring the
                appearance of skin affected by surgery, scars and medical
                conditions.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">

                <a
                  href="https://wa.me/526641350986"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#B08D87] px-7 py-4 text-sm font-medium text-white transition hover:bg-[#96716B]"
                >
                  Schedule a Consultation
                </a>

                <Link
                  href="/#services"
                  className="rounded-full border border-[#D8CBC5] px-7 py-4 text-sm font-medium text-[#4F4945] transition hover:bg-white"
                >
                  View All Services
                </Link>

              </div>

            </div>

            <div className="relative">

              <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[38px] bg-[#E7D4CF]" />

              <div className="relative overflow-hidden rounded-[38px] shadow-2xl">

                <Image
                  src="/images/working/olga-working-03.jpg"
                  alt="Olga Koshkina performing paramedical tattooing"
                  width={800}
                  height={900}
                  priority
                  className="h-[520px] w-full object-cover sm:h-[650px]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 rounded-full bg-white/90 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-[#4F4945] backdrop-blur">
                  Paramedical Tattooing
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* INTRODUCTION */}

        <section className="border-y border-[#E8DED8] bg-white">

          <div className="mx-auto max-w-4xl px-6 py-20 text-center lg:py-28">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
              Restorative Work
            </p>

            <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
              Restoring the appearance of skin
              <span className="block text-[#B08D87]">
                with precision and care
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-8 text-[#6A635E] lg:text-lg">
              Medical tattooing, also known as paramedical tattooing, uses
              specialized pigmentation techniques to address the visual
              appearance of skin affected by surgery, scars and certain
              medical conditions.
            </p>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-[#6A635E] lg:text-lg">
              Each case is different. The approach depends on the area being
              treated, the condition of the skin, previous procedures and the
              desired aesthetic result.
            </p>

          </div>

        </section>

        {/* SERVICES */}

        <section className="bg-[#F8F4F0] px-6 py-20 lg:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="max-w-2xl">

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
                Specialized Services
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Medical tattoo services
              </h2>

              <p className="mt-6 text-base leading-8 text-[#6A635E]">
                Olga offers specialized paramedical tattoo services with an
                individualized approach to each client and treatment area.
              </p>

            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2">

              {medicalTattooServices.map((service, index) => (
                <article
                  key={service.title}
                  className="rounded-[28px] bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >

                  <span className="font-serif text-2xl text-[#B08D87]">
                    0{index + 1}
                  </span>

                  <h3 className="mt-5 font-serif text-3xl text-[#2D2A26]">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-[#6A635E]">
                    {service.description}
                  </p>

                  {service.href.startsWith("/") &&
                  service.href !== "#consultation" ? (
                    <Link
                      href={service.href}
                      className="mt-6 inline-flex text-sm font-medium text-[#B08D87] transition hover:text-[#96716B]"
                    >
                      Learn more →
                    </Link>
                  ) : (
                    <a
                      href="#consultation"
                      className="mt-6 inline-flex text-sm font-medium text-[#B08D87] transition hover:text-[#96716B]"
                    >
                      Request a consultation →
                    </a>
                  )}

                </article>
              ))}

            </div>

          </div>

        </section>

        {/* PROCESS */}

        <section className="bg-[#FAF7F2] px-6 py-20 lg:py-28">

          <div className="mx-auto max-w-6xl">

            <div className="mx-auto max-w-3xl text-center">

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
                The Approach
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Every case begins with a consultation
              </h2>

              <p className="mt-6 text-base leading-8 text-[#6A635E]">
                A personalized consultation allows Olga to understand the
                treatment area, review previous procedures and discuss the
                client&apos;s goals before determining an appropriate approach.
              </p>

            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-3">

              <div className="rounded-[28px] border border-[#E8DED8] bg-white p-8">

                <span className="font-serif text-3xl text-[#B08D87]">
                  01
                </span>

                <h3 className="mt-5 font-serif text-2xl">
                  Consultation
                </h3>

                <p className="mt-4 leading-7 text-[#6A635E]">
                  Discuss the area, previous procedures, skin condition and
                  desired outcome.
                </p>

              </div>

              <div className="rounded-[28px] border border-[#E8DED8] bg-white p-8">

                <span className="font-serif text-3xl text-[#B08D87]">
                  02
                </span>

                <h3 className="mt-5 font-serif text-2xl">
                  Personalized Plan
                </h3>

                <p className="mt-4 leading-7 text-[#6A635E]">
                  The technique, pigmentation approach and treatment plan are
                  determined according to the individual case.
                </p>

              </div>

              <div className="rounded-[28px] border border-[#E8DED8] bg-white p-8">

                <span className="font-serif text-3xl text-[#B08D87]">
                  03
                </span>

                <h3 className="mt-5 font-serif text-2xl">
                  Treatment
                </h3>

                <p className="mt-4 leading-7 text-[#6A635E]">
                  The procedure is performed using specialized equipment and
                  pigmentation techniques appropriate to the treatment area.
                </p>

              </div>

            </div>

          </div>

        </section>

        {/* CREDENTIAL / EXPERIENCE */}

        <section className="bg-white px-6 py-20 lg:py-28">

          <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2">

            <div>

              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
                Olga Koshkina
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight sm:text-5xl">
                Experience, precision and specialized training
              </h2>

              <p className="mt-7 text-base leading-8 text-[#6A635E]">
                Olga Koshkina is a micropigmentation specialist focused on
                permanent makeup and paramedical tattooing. Her work combines
                technical precision with an individualized approach to each
                client.
              </p>

              <p className="mt-5 text-base leading-8 text-[#6A635E]">
                Her services in Tijuana include medical tattooing, permanent
                makeup and tattoo removal.
              </p>

              <Link
                href="/#about"
                className="mt-7 inline-flex text-sm font-medium text-[#B08D87] transition hover:text-[#96716B]"
              >
                Learn more about Olga →
              </Link>

            </div>

            <div className="rounded-[32px] bg-[#F8F4F0] p-8 lg:p-12">

              <div className="grid gap-8 sm:grid-cols-2">

                <div>
                  <p className="font-serif text-4xl text-[#B08D87]">
                    8+
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#6A635E]">
                    Years of experience
                  </p>
                </div>

                <div>
                  <p className="font-serif text-4xl text-[#B08D87]">
                    1000+
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#6A635E]">
                    Procedures
                  </p>
                </div>

                <div>
                  <p className="font-serif text-4xl text-[#B08D87]">
                    TJ
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#6A635E]">
                    Tijuana, Mexico
                  </p>
                </div>

                <div>
                  <p className="font-serif text-4xl text-[#B08D87]">
                    PMU
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-[0.12em] text-[#6A635E]">
                    Specialized work
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CONSULTATION CTA */}

        <section
          id="consultation"
          className="bg-[#2D2A26] px-6 py-20 text-white lg:py-28"
        >

          <div className="mx-auto max-w-4xl text-center">

            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#D8BDB7]">
              Tijuana • Medical Tattoo
            </p>

            <h2 className="mt-6 font-serif text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Let&apos;s discuss your case
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/70 lg:text-lg">
              If you are considering medical or paramedical tattooing,
              contact Olga to discuss your treatment area and determine the
              next step.
            </p>

            <a
              href="https://wa.me/526641350986"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex rounded-full bg-[#B08D87] px-8 py-4 text-sm font-medium text-white transition hover:bg-[#C29B94]"
            >
              Contact Olga on WhatsApp
            </a>

            <p className="mt-5 text-xs uppercase tracking-[0.18em] text-white/40">
              Tijuana, Baja California, Mexico
            </p>

          </div>

        </section>

        {/* FOOTER */}

        <footer className="bg-[#FAF7F2] px-6 py-10">

          <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-[#6A635E] sm:flex-row sm:items-center sm:justify-between">

            <p>
              © {new Date().getFullYear()} Olga Koshkina
            </p>

            <div className="flex gap-6">

              <Link
                href="/"
                className="transition hover:text-[#B08D87]"
              >
                Home
              </Link>

              <Link
                href="/#services"
                className="transition hover:text-[#B08D87]"
              >
                Services
              </Link>

              <a
                href="https://wa.me/526641350986"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#B08D87]"
              >
                WhatsApp
              </a>

            </div>

          </div>

        </footer>

      </main>
    </>
  );
}