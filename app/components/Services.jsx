import Image from "next/image";

const services = [
  {
    title: "3D Areola Restoration",
    description:
      "Natural restoration after mastectomy using advanced paramedical tattoo techniques.",
    image: "/images/gallery/gallery-1.jpg",
  },
  {
    title: "Scar Camouflage",
    description:
      "Reduce the appearance of scars with custom pigment matching and artistic precision.",
    image: "/images/gallery/gallery-2.jpg",
  },
  {
    title: "Permanent Makeup",
    description:
      "Elegant eyebrows, lips and eyeliner designed to enhance your natural beauty.",
    image: "/images/gallery/gallery-3.jpg",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-28">
      <div className="container">

        <div className="max-w-2xl mb-20">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            SERVICES
          </span>

          <h2 className="mt-4 text-5xl lg:text-6xl font-serif text-[#2D2A26]">
            Signature Treatments
          </h2>

          <p className="mt-6 text-lg text-[#6B6663] leading-8">
            Every procedure is customized to achieve elegant, natural and
            confidence-restoring results.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-10">

          {services.map((service) => (

            <article
              key={service.title}
              className="overflow-hidden rounded-[34px] bg-white shadow-lg border border-[#EFE7E0] transition duration-300 hover:-translate-y-2"
            >

              <Image
                src={service.image}
                alt={service.title}
                width={600}
                height={450}
                className="h-72 w-full object-cover"
              />

              <div className="p-8">

                <h3 className="text-3xl font-serif text-[#2D2A26]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-[#6D6662]">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="inline-block mt-8 text-[#B08D87] font-medium hover:underline"
                >
                  Schedule Consultation →
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}