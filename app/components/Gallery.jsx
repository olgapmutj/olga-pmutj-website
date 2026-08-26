"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { useLanguage } from "../context/LanguageContext";

const images = [
  {
    src: "/images/gallery/gallery-1.jpg",
    alt: "Olga Koshkina medical tattoo work",
  },
  {
    src: "/images/gallery/gallery-2.jpg",
    alt: "Olga Koshkina permanent makeup work",
  },
  {
    src: "/images/gallery/gallery-3.jpg",
    alt: "Olga Koshkina beauty treatment",
  },
  {
    src: "/images/gallery/gallery-4.jpg",
    alt: "Olga Koshkina treatment result",
  },
  {
    src: "/images/gallery/gallery-5.jpg",
    alt: "Olga Koshkina professional work",
  },
  {
    src: "/images/gallery/gallery-6.jpg",
    alt: "Olga Koshkina permanent makeup result",
  },
  {
    src: "/images/gallery/gallery-7.jpg",
    alt: "Olga Koshkina medical tattoo and permanent makeup",
  },
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);
  const { t } = useLanguage();

  return (
    <section
      id="gallery"
      className="w-full bg-[#FAF7F2] py-24 lg:py-32"
    >
      <div className="container">

        {/* HEADER */}

        <div className="mx-auto mb-14 w-full max-w-3xl text-center lg:mb-20">

          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-[#B08D87]">
            {t.gallery.eyebrow}
          </span>

          <h2 className="mt-5 font-serif text-5xl leading-tight text-[#2D2A26] lg:text-6xl">
            {t.gallery.title}
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-[#6A635E] lg:text-lg">
            {t.gallery.description}
          </p>

        </div>

        {/* GALLERY */}

        <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">

          {images.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`${t.gallery.view} ${i + 1}`}
              className="group relative block w-full overflow-hidden rounded-[24px] bg-[#EDE5DE] text-left focus:outline-none focus:ring-2 focus:ring-[#B08D87] focus:ring-offset-4 lg:rounded-[32px]"
            >

              <div className="relative aspect-[4/5] w-full overflow-hidden">

                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1280px) 33vw, 400px"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/20" />

                <div className="absolute inset-0 flex items-center justify-center">

                  <span className="translate-y-3 rounded-full bg-white/90 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#2D2A26] opacity-0 shadow-lg backdrop-blur transition duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {t.gallery.view}
                  </span>

                </div>

              </div>

            </button>
          ))}

        </div>

        {/* INSTAGRAM */}

        <div className="mt-12 text-center">

          <p className="text-sm leading-6 text-[#8A817B]">
            {t.gallery.instagram}
          </p>

          <a
            href="https://www.instagram.com/olga_pmu_tj/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex rounded-full border border-[#C5A7A3] px-6 py-3 text-sm font-medium text-[#4F4945] transition hover:bg-[#C5A7A3] hover:text-white"
          >
            {t.gallery.follow}
          </a>

        </div>

        {/* LIGHTBOX */}

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((image) => ({
            src: image.src,
          }))}
        />

      </div>
    </section>
  );
}