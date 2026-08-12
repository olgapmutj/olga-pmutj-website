"use client";

import { useLanguage } from "../context/LanguageContext";

const reviews = [
  {
    name: "Daria Takhtamysheva",
    location: "San Diego, CA",
    treatment: "Permanent Makeup",
    review:
      "I recently had the pleasure of visiting Olga in Tijuana for a permanent makeup session. As I live in San Diego, it was a bit of a journey, but it was definitely worth it. Olga's studio is fantastic, and I was immediately impressed with her work.",
  },
  {
    name: "RP David",
    location: "California",
    treatment: "Eyebrows",
    review:
      "I met Olga this afternoon! She is very kind and professional! I was late with my appointment but she still accommodated me! I love the way she did my eyebrows! It is so beautiful! I don't mind coming back again since I am from California.",
  },
  {
    name: "Valeryia",
    location: "San Diego, CA",
    treatment: "Permanent Lip Makeup",
    review:
      "I frequently visit Olga's studio in Playas de Tijuana from San Diego. I am particularly impressed with the skincare treatments she offers, and I am very happy with the permanent lip makeup she did for me.",
  },
  {
    name: "Terrance Jackson",
    location: "Tijuana, B.C.",
    treatment: "Eyebrows",
    review:
      "I have very thin eyebrows and needed a natural-looking brow that fit my face. I called Olga and she was able to squeeze me in. She is brilliant and an artist. Given that my skin is oily, she already knew how to approach the treatment.",
  },
  {
    name: "Karina Garcia",
    location: "Tijuana, B.C.",
    treatment: "Cejas",
    review:
      "Me encanto su trabajo tan profesional, ella es muy amable, amo mis nuevas cejas, recomendada 1000%.",
  },
  {
    name: "LCC. Yuliana Gonzalez",
    location: "Tijuana, B.C.",
    treatment: "Pigmentación",
    review:
      "Me encanto el diseño y el detalle de su trabajo. La calidad de la pigmentación genial. Ya tiene vida mi rostro 🫶🏻🫶🏻🫶🏻",
  },
];

export default function Testimonials() {
  const { language, t } = useLanguage();

  return (
    <section
      id="reviews"
      className="w-full overflow-hidden bg-[#FAF7F2] py-20 sm:py-24 lg:py-32"
    >
      <div className="container">

        {/* HEADER */}

        <div className="mx-auto mb-14 w-full max-w-3xl text-center sm:mb-16 lg:mb-20">

          <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#B08D87] sm:text-xs sm:tracking-[0.35em]">
            {t.reviews.eyebrow}
          </span>

          <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2D2A26] sm:text-5xl lg:text-6xl">
            {t.reviews.title}
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6A635E] sm:text-base sm:leading-8 lg:text-lg">
            {t.reviews.description}
          </p>

          {/* GOOGLE RATING */}

          <div className="mx-auto mt-7 inline-flex max-w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3.5 shadow-sm sm:gap-4 sm:px-6 sm:py-4">

            <div className="flex shrink-0 items-center gap-0.5 text-lg tracking-wide text-[#D7B55A] sm:text-xl">
              ★★★★★
            </div>

            <div className="h-5 w-px bg-[#E8DED8]" />

            <div className="text-left">
              <p className="text-xs font-semibold text-[#2D2A26] sm:text-sm">
                {t.reviews.rating}
              </p>

              <p className="mt-0.5 text-[10px] text-[#6A635E] sm:text-xs">
                {t.reviews.based}
              </p>
            </div>

          </div>

        </div>

        {/* REVIEWS */}

        <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review) => (
            <article
              key={review.name}
              className="flex min-w-0 flex-col rounded-[26px] bg-white p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg sm:rounded-[30px] sm:p-7 lg:p-8"
            >

              {/* STARS */}

              <div className="text-lg tracking-[0.1em] text-[#D7B55A] sm:text-xl">
                ★★★★★
              </div>

              {/* REVIEW */}

              <p className="mt-5 flex-1 text-sm leading-7 text-[#6A635E] sm:mt-6 sm:text-[15px]">
                &ldquo;{review.review}&rdquo;
              </p>

              {/* CLIENT */}

              <div className="mt-7 border-t border-[#EEE7E1] pt-5 sm:mt-8 sm:pt-6">

                <h3 className="font-serif text-lg text-[#2D2A26] sm:text-xl">
                  {review.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-[#B08D87] sm:text-sm">
                  {review.treatment}
                </p>

                <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#8A817B] sm:text-xs sm:tracking-[0.15em]">
                  {review.location}
                </p>

              </div>

            </article>
          ))}

        </div>

        {/* GOOGLE CTA */}

        <div className="mt-10 flex justify-center sm:mt-12">

          <a
            href="https://www.google.com/maps/search/?api=1&query=Olga+Permanent+Makeup+Plaza+Jade+Tijuana"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full border border-[#C5A7A3] px-6 py-3 text-xs font-medium text-[#4F4945] transition hover:bg-[#C5A7A3] hover:text-white sm:px-7 sm:text-sm"
          >
            {t.reviews.more}
          </a>

        </div>

      </div>
    </section>
  );
}