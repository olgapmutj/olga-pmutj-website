import Image from "next/image";

const posts = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export default function Instagram() {
  return (
    <section className="bg-white py-32">
      <div className="container">

        <div className="flex items-end justify-between mb-16 flex-wrap gap-6">

          <div>

            <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
              INSTAGRAM
            </span>

            <h2 className="mt-5 font-serif text-6xl text-[#2D2A26]">
              Follow Our Journey
            </h2>

          </div>

          <a
            href="https://instagram.com/olgapmutj"
            target="_blank"
            className="btn-primary"
          >
            @olgapmutj
          </a>

        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">

          {posts.map((image, index) => (

            <div
              key={index}
              className="overflow-hidden rounded-[28px]"
            >

              <Image
                src={image}
                alt=""
                width={600}
                height={600}
                className="w-full aspect-square object-cover hover:scale-105 transition duration-500"
              />

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}