export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 bg-white"
    >
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-20">

          <div>

            <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
              CONTACT
            </span>

            <h2 className="mt-6 text-5xl lg:text-6xl font-serif text-[#2D2A26]">
              Schedule Your
              <br />
              Consultation
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#66615E] max-w-lg">
              Every treatment begins with a personalized consultation.
              We'd love to answer your questions and recommend the
              best treatment for your needs.
            </p>

            <div className="mt-12 space-y-8">

              <div>
                <h3 className="font-semibold text-[#2D2A26]">
                  Location
                </h3>

                <p className="mt-2 text-[#66615E]">
                  Tijuana, Baja California, México
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2D2A26]">
                  WhatsApp
                </h3>

                <p className="mt-2 text-[#66615E]">
                  +52 XXX XXX XXXX
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-[#2D2A26]">
                  Instagram
                </h3>

                <p className="mt-2 text-[#66615E]">
                  @olgapmutj
                </p>
              </div>

            </div>

          </div>

          <div className="bg-[#FAF7F2] rounded-[40px] p-10">

            <form className="space-y-6">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full rounded-xl border border-[#E8DDD4] px-5 py-4 bg-white outline-none"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-xl border border-[#E8DDD4] px-5 py-4 bg-white outline-none"
              />

              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-xl border border-[#E8DDD4] px-5 py-4 bg-white outline-none"
              />

              <textarea
                rows="5"
                placeholder="Tell us about your treatment..."
                className="w-full rounded-xl border border-[#E8DDD4] px-5 py-4 bg-white outline-none resize-none"
              />

              <button
                className="w-full rounded-full bg-[#B08D87] py-4 text-white hover:bg-[#9B7872] transition"
              >
                Request Consultation
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}