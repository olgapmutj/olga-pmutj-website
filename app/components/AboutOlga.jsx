import Image from "next/image";

export default function AboutOlga() {
  return (
    <section
      id="about"
      className="py-32 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* IMAGE */}

          <div className="relative">

            <div className="absolute inset-0 translate-x-6 translate-y-6 rounded-[40px] bg-[#EAD8D3]" />

            <Image
              src="/images/about/olga-about.jpg"
              alt="Olga PMU TJ"
              width={700}
              height={900}
              className="relative rounded-[40px] object-cover shadow-2xl"
            />

          </div>

          {/* CONTENT */}

          <div>

            <span className="uppercase tracking-[0.4em] text-sm text-[#B08D87]">
              ABOUT OLGA
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-serif text-[#2D2A26]">
              Expertise,
              <br />
              Precision &
              <br />
              Compassion
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#66615E]">
              Olga specializes in advanced paramedical tattooing,
              helping patients regain confidence after surgery,
              trauma and skin conditions through personalized
              treatments with natural-looking results.
            </p>

            <p className="mt-8 text-lg leading-9 text-[#66615E]">
              Every procedure combines medical knowledge,
              artistic precision and premium pigments to create
              elegant and long-lasting outcomes.
            </p>

            <div className="grid grid-cols-2 gap-8 mt-14">

              <div>

                <h3 className="text-5xl font-serif text-[#B08D87]">
                  8+
                </h3>

                <p className="mt-2 text-[#6D6662]">
                  Years Experience
                </p>

              </div>

              <div>

                <h3 className="text-5xl font-serif text-[#B08D87]">
                  1000+
                </h3>

                <p className="mt-2 text-[#6D6662]">
                  Procedures
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}