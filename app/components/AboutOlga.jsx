import Image from "next/image";

export default function AboutOlga() {
  return (
    <section id="about" className="bg-white py-36">
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-24 items-center">

          {/* IMAGE */}

          <div className="relative">

            <div className="absolute top-8 left-8 w-full h-full rounded-[42px] bg-[#E8D6D1]" />

            <Image
              src="/images/about/olga-about.jpg"
              alt="Olga PMU TJ"
              width={700}
              height={900}
              className="relative rounded-[42px] shadow-2xl object-cover w-full"
            />

          </div>

          {/* CONTENT */}

          <div>

            <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
              ABOUT OLGA
            </span>

            <h2 className="mt-6 text-6xl leading-tight font-serif text-[#2D2A26]">
              Precision,
              <br />
              Compassion &
              <br />
              Confidence
            </h2>

            <p className="mt-8 text-lg leading-9 text-[#6D6662]">
              Olga is a specialist in advanced paramedical tattooing,
              combining medical precision with artistic excellence to
              restore confidence after surgery, trauma and skin
              conditions.
            </p>

            <p className="mt-8 text-lg leading-9 text-[#6D6662]">
              Every treatment is completely personalized, using
              premium pigments and the latest techniques to create
              elegant, natural-looking and long-lasting results.
            </p>

            <div className="grid grid-cols-2 gap-10 mt-16">

              <div>

                <h3 className="text-6xl font-serif text-[#B08D87]">
                  8+
                </h3>

                <p className="mt-2 text-[#6D6662]">
                  Years Experience
                </p>

              </div>

              <div>

                <h3 className="text-6xl font-serif text-[#B08D87]">
                  1000+
                </h3>

                <p className="mt-2 text-[#6D6662]">
                  Successful Procedures
                </p>

              </div>

            </div>

            <a
              href="#contact"
              className="btn-primary mt-14"
            >
              Book Consultation
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}