import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 pt-36 pb-20 grid md:grid-cols-2 gap-16 items-center">

      <div>
        <p className="uppercase tracking-[0.45em] text-gray-400 text-sm mb-5">
          TIJUANA • MEXICO
        </p>

        <h1 className="text-6xl md:text-7xl font-light leading-tight mb-6">
          Olga PMU TJ
        </h1>

        <h2 className="text-3xl text-gray-200 mb-8 leading-relaxed">
          Restoring Confidence Through
          <br />
          Advanced Medical Tattooing
        </h2>

        <p className="text-gray-400 text-lg leading-8 mb-10 max-w-xl">
          Specialized in 3D Areola Restoration, Scar Camouflage,
          Permanent Makeup and Paramedical Tattooing with natural,
          elegant and life-changing results.
        </p>

        <div className="grid grid-cols-2 gap-4 text-gray-300 mb-12">
          <div className="bg-zinc-900 rounded-xl p-4">✓ 3D Areola</div>
          <div className="bg-zinc-900 rounded-xl p-4">✓ Scar Camouflage</div>
          <div className="bg-zinc-900 rounded-xl p-4">✓ Medical Tattoo</div>
          <div className="bg-zinc-900 rounded-xl p-4">✓ Permanent Makeup</div>
        </div>

        <div className="flex gap-5 flex-wrap">
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-300 transition">
            Book Consultation
          </button>

          <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition">
            View Gallery
          </button>
        </div>
      </div>

      <div>
        <Image
          src="/images/olga-hero.jpg"
          alt="Olga PMU TJ"
          width={800}
          height={950}
          priority
          className="rounded-3xl shadow-2xl object-cover"
        />
      </div>

    </section>
  );
}