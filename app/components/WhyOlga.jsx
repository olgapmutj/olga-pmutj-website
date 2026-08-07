export default function WhyOlga() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-28">
      <div className="max-w-3xl">
        <p className="uppercase tracking-[0.4em] text-gray-400 text-sm mb-4">
          Why Olga
        </p>

        <h2 className="text-5xl font-light mb-8">
          More Than Permanent Makeup
        </h2>

        <p className="text-xl text-gray-400 leading-9">
          Olga specializes in advanced paramedical tattooing focused on
          restoring confidence after surgery, trauma, or medical conditions.
          Every treatment is customized with precision, artistry, and a deep
          understanding of skin healing.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mt-16">
        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl mb-4">Experience</h3>
          <p className="text-gray-400">
            Specialized training in advanced medical tattoo techniques.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl mb-4">Natural Results</h3>
          <p className="text-gray-400">
            Every treatment is designed to blend naturally with your skin.
          </p>
        </div>

        <div className="bg-zinc-900 rounded-2xl p-8">
          <h3 className="text-2xl mb-4">Personal Care</h3>
          <p className="text-gray-400">
            A private consultation and personalized treatment plan for every
            client.
          </p>
        </div>
      </div>
    </section>
  );
}