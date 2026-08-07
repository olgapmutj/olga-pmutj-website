export default function Testimonials() {
  const reviews = [
    {
      name: "Maria S.",
      treatment: "3D Areola Restoration",
      review:
        "Olga made me feel comfortable from the first consultation. The results exceeded my expectations.",
    },
    {
      name: "Jessica R.",
      treatment: "Scar Camouflage",
      review:
        "Professional, caring and incredibly talented. I finally feel confident wearing what I want.",
    },
    {
      name: "Andrea T.",
      treatment: "Permanent Makeup",
      review:
        "Beautiful natural results. The entire experience felt luxurious and personalized.",
    },
  ];

  return (
    <section id="reviews" className="bg-[#FAF7F2] py-32">
      <div className="container">

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 font-serif text-6xl text-[#2D2A26]">
            Patient Stories
          </h2>

          <p className="mt-6 text-lg leading-8 text-[#6A635E]">
            Every treatment is personal. Every result tells a story.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="rounded-[32px] bg-white p-10 shadow-lg"
            >

              <div className="text-[#D7B55A] text-2xl">
                ★★★★★
              </div>

              <p className="mt-8 leading-8 text-[#6A635E]">
                "{review.review}"
              </p>

              <div className="mt-10">

                <h4 className="font-semibold text-lg text-[#2D2A26]">
                  {review.name}
                </h4>

                <p className="text-[#B08D87]">
                  {review.treatment}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}