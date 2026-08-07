const services = [
  {
    title: "3D Areola Restoration",
    description:
      "Natural-looking nipple and areola restoration after mastectomy or breast reconstruction.",
  },
  {
    title: "Scar Camouflage",
    description:
      "Advanced pigmentation techniques to visually soften surgical and traumatic scars.",
  },
  {
    title: "Stretch Mark Camouflage",
    description:
      "Blend stretch marks with surrounding skin for a smoother, more uniform appearance.",
  },
  {
    title: "Vitiligo Camouflage",
    description:
      "Customized pigment matching to reduce visible contrast caused by vitiligo.",
  },
  {
    title: "Scalp Micropigmentation",
    description:
      "Create the appearance of fuller hair density with precise scalp pigmentation.",
  },
  {
    title: "Permanent Makeup",
    description:
      "Elegant brows, lips and eyeliner designed to enhance natural beauty.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-28 bg-white"
    >
      <div className="container">

        <div className="max-w-3xl mb-20">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            SERVICES
          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-serif text-[#2D2A26]">
            Specialized Treatments
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6B6663]">
            Every treatment is personalized using advanced techniques,
            medical-grade pigments and an artistic approach focused on
            restoring confidence through natural-looking results.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.title}
              className="rounded-[32px] border border-[#EFE7E0] p-10 hover:shadow-xl transition duration-300 bg-[#FCFBF9]"
            >

              <div className="mb-8 w-14 h-14 rounded-full bg-[#E8D5D1]" />

              <h3 className="text-2xl font-serif text-[#2D2A26]">
                {service.title}
              </h3>

              <p className="mt-5 leading-8 text-[#6C6764]">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}