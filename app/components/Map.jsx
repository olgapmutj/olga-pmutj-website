export default function Map() {
  return (
    <section className="bg-[#FAF7F2] py-24">
      <div className="container">

        <div className="text-center mb-14">

          <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
            LOCATION
          </span>

          <h2 className="mt-5 font-serif text-5xl text-[#2D2A26]">
            Visit Our Studio
          </h2>

          <p className="mt-6 text-lg text-[#6A635E]">
            Parque Baja California Sur 478<br />
            Playas de Tijuana<br />
            22506 Tijuana, Baja California, México
          </p>

        </div>

        <div className="overflow-hidden rounded-[36px] shadow-2xl">

          <iframe
            src="https://www.google.com/maps?q=Parque+Baja+California+Sur+478,+Playas+de+Tijuana,+22506,+Tijuana,+BC&output=embed"
            width="100%"
            height="500"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="border-0"
          />

        </div>

      </div>
    </section>
  );
}