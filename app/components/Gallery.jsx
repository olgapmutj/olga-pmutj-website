import Image from "next/image";

const gallery = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="py-28 bg-[#FAF7F2]"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="max-w-3xl mb-20">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            BEFORE & AFTER
          </span>

          <h2 className="mt-5 text-5xl lg:text-6xl font-serif text-[#2D2A26]">
            Real Patient Results
          </h2>

          <p className="mt-8 text-lg leading-8 text-[#6B6663]">
            Every transformation is personalized. Our goal is to restore
            confidence with results that look natural, elegant and timeless.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {gallery.map((image, index) => (

            <div
              key={index}
              className="group overflow-hidden rounded-[32px] bg-white shadow-sm"
            >

              <Image
                src={image}
                alt={`Gallery ${index + 1}`}
                width={700}
                height={900}
                className="h-[520px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}