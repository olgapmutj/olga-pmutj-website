import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#FAF7F2] pt-40 pb-28">
      <div className="container">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <div className="max-w-xl">

            <span className="inline-block rounded-full bg-[#EAD8D3] px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-[#8E6F69]">
              OLGA KOSHKINA
            </span>

            <h1 className="mt-8 font-serif text-6xl leading-[0.92] text-[#2D2A26] lg:text-8xl">
              Medical Tattoo
              <br />
              & Permanent
              <br />
              Makeup
            </h1>

            <p className="mt-8 text-xl leading-9 text-[#6A635E]">
              Olga Koshkina specializes in advanced medical tattooing,
              including 3D Areola Restoration, Scar Camouflage,
              Stretch Mark Camouflage and Permanent Makeup with elegant,
              natural-looking results.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="btn-primary"
              >
                Schedule Consultation
              </a>

              <a
                href="#gallery"
                className="btn-secondary"
              >
                View Results
              </a>

            </div>

            <div className="mt-20 grid grid-cols-3 gap-8">

              <div>

                <h3 className="font-serif text-5xl text-[#B08D87]">
                  8+
                </h3>

                <p className="mt-2 text-sm text-[#6A635E]">
                  Years Experience
                </p>

              </div>

              <div>

                <h3 className="font-serif text-5xl text-[#B08D87]">
                  1000+
                </h3>

                <p className="mt-2 text-sm text-[#6A635E]">
                  Procedures
                </p>

              </div>

              <div>

                <h3 className="font-serif text-5xl text-[#B08D87]">
                  ★★★★★
                </h3>

                <p className="mt-2 text-sm text-[#6A635E]">
                  Client Satisfaction
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute -right-8 -bottom-8 h-full w-full rounded-[48px] bg-[#E7D4CF]" />

            <Image
              src="/images/hero/olga-hero.jpg"
              alt="Olga Koshkina"
              width={780}
              height={980}
              priority
              className="relative h-[760px] w-full rounded-[48px] object-cover shadow-2xl"
            />

          </div>

        </div>

      </div>
    </section>
  );
}