"use client";

import Image from "next/image";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const images = [
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
  "/images/gallery/gallery-4.jpg",
  "/images/gallery/gallery-5.jpg",
  "/images/gallery/gallery-6.jpg",
];

export default function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="bg-[#FAF7F2] py-32">
      <div className="container">

        <div className="max-w-2xl mb-20">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            GALLERY
          </span>

          <h2 className="mt-5 text-6xl font-serif text-[#2D2A26]">
            Our Work
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6A635E]">
            Click any image to view it in full screen.
          </p>

        </div>

        <div className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8">

          {images.map((image, i) => (

            <div
              key={i}
              onClick={() => setIndex(i)}
              className="cursor-pointer overflow-hidden rounded-[32px]"
            >

              <Image
                src={image}
                alt=""
                width={700}
                height={900}
                className="w-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

          ))}

        </div>

        <Lightbox
          open={index >= 0}
          close={() => setIndex(-1)}
          index={index}
          slides={images.map((src) => ({ src }))}
        />

      </div>
    </section>
  );
}