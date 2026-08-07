export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah M.",
      text: "Olga exceeded every expectation. My areola restoration looks incredibly natural and gave me my confidence back.",
    },
    {
      name: "Jessica R.",
      text: "Professional, caring and incredibly talented. The scar camouflage changed the way I see myself.",
    },
    {
      name: "Emily T.",
      text: "The entire experience felt luxurious and personal. I couldn't be happier with my results.",
    },
  ];

  return (
    <section
      id="reviews"
      className="py-32 bg-[#FAF7F2]"
    >
      <div className="container">

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            TESTIMONIALS
          </span>

          <h2 className="mt-6 text-5xl lg:text-6xl font-serif text-[#2D2A26]">
            Loved by Our Clients
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((review, index) => (

            <div
              key={index}
              className="bg-white rounded-[32px] p-10 shadow-sm"
            >

              <div className="text-[#D6B15A] text-xl mb-6">
                ★★★★★
              </div>

              <p className="leading-8 text-[#66615E]">
                "{review.text}"
              </p>

              <h4 className="mt-8 font-semibold text-[#2D2A26]">
                {review.name}
              </h4>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}