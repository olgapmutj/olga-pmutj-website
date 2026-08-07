"use client";

import ReactCompareImage from "react-compare-image";

export default function BeforeAfter() {
  return (
    <section className="bg-white py-32">
      <div className="container">

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            BEFORE & AFTER
          </span>

          <h2 className="mt-6 font-serif text-6xl text-[#2D2A26]">
            See The Transformation
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6A635E]">
            Drag the slider to compare before and after results.
          </p>

        </div>

        <div className="max-w-5xl mx-auto rounded-[36px] overflow-hidden shadow-2xl">

          <ReactCompareImage
            leftImage="/images/before-after/ba-1-before.jpg"
            rightImage="/images/before-after/ba-1-after.jpg"
          />

        </div>

      </div>
    </section>
  );
}