import Image from "next/image";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-[#FAF7F2] pt-36 pb-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center gap-20">

          {/* LEFT */}

          <div>

            <span className="uppercase tracking-[0.45em] text-sm text-[#B08D87]">
              TIJUANA • MÉXICO
            </span>

            <h1 className="mt-6 text-6xl lg:text-8xl leading-[0.95] font-serif text-[#2D2A26]">
              Restoring
              <br />
              Confidence.
            </h1>

            <p className="mt-10 max-w-xl text-xl leading-9 text-[#5F5854]">
              Premium paramedical tattooing focused on restoring confidence
              through advanced areola restoration, scar camouflage,
              stretch mark camouflage and permanent makeup.
            </p>

            <div className="mt-12 flex flex-wrap gap-5">

              <a
                href="#contact"
                className="rounded-full bg-[#B08D87] px-8 py-4 text-white transition hover:bg-[#9B7872]"
              >
                Book Consultation
              </a>

              <a
                href="#gallery"
                className="rounded-full border border-[#B08D87] px-8 py-4 text-[#B08D87] transition hover:bg-[#B08D87] hover:text-white"
              >
                Before & After
              </a>

            </div>

            <div className="grid grid-cols-2 gap-6 mt-16">

              <div className="rounded-3xl bg-white p-6 shadow-md">

                <h3 className="text-lg font-semibold text-[#2D2A26]">
                  3D Areola
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6D6662]">
                  Natural restoration after mastectomy.
                </p>

              </div>

              <div className="rounded-3xl bg-white p-6 shadow-md">

                <h3 className="text-lg font-semibold text-[#2D2A26]">
                  Scar Camouflage
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#6D6662]">
                  Blend scars naturally with surrounding skin.
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative flex justify-center">

            <div className="absolute top-8 left-8 w-full h-full rounded-[45px] bg-[#EAD8D3]" />

            <Image
              src="/images/hero/olga-hero.jpg"
              alt="Olga PMU TJ"
              width={650}
              height={850}
              priority
              className="relative w-full max-w-[620px] rounded-[45px] object-cover shadow-2xl"
            />

          </div>

        </div>
      </div>
    </section>
  );
}