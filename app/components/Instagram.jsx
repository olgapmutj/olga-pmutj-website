"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";

const posts = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export default function Instagram() {
  const { t } = useLanguage();

  return (
    <section
      id="instagram"
      className="w-full overflow-hidden bg-white py-24 lg:py-32"
    >
      <div className="container">

        {/* HEADER */}

        <div className="mx-auto mb-14 flex w-full max-w-6xl flex-col items-start justify-between gap-8 lg:mb-16 lg:flex-row lg:items-end">

          <div className="max-w-2xl">

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
              {t.instagram.eyebrow}
            </span>

            <h2 className="mt-5 font-serif text-5xl leading-tight text-[#2D2A26] lg:text-6xl">
              {t.instagram.title}
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-[#6A635E] lg:text-lg">
              {t.instagram.description}
            </p>

          </div>

          <a
            href="https://www.instagram.com/olga_pmu_tj/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary shrink-0"
          >
            {t.instagram.follow}
          </a>

        </div>

        {/* INSTAGRAM GRID */}

        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">

          {posts.map((image, index) => (
            <a
              key={image}
              href="https://www.instagram.com/olga_pmu_tj/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block w-full overflow-hidden rounded-[24px] bg-[#EDE5DE] lg:rounded-[30px]"
            >

              <div className="relative aspect-square w-full overflow-hidden">

                <Image
                  src={image}
                  alt={`Olga PMU TJ Instagram ${index + 1}`}
                  width={800}
                  height={800}
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                  className="block h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <span className="translate-y-3 rounded-full bg-white/90 px-5 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#2D2A26] opacity-0 shadow-lg backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t.instagram.view}
                  </span>

                </div>

              </div>

            </a>
          ))}

        </div>

      </div>
    </section>
  );
}