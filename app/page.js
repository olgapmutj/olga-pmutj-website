export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center px-6">
        <p className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">
          Tijuana • Mexico
        </p>

        <h1 className="text-6xl md:text-8xl font-light mb-6">
          Olga PMU TJ
        </h1>

        <p className="text-2xl text-gray-300 max-w-2xl mx-auto mb-10">
          Restoring Confidence Through Medical Tattooing
        </p>

        <div className="space-y-2 text-gray-400">
          <p>3D Areola Restoration</p>
          <p>Scar Camouflage</p>
          <p>Medical Tattoo</p>
          <p>Permanent Makeup</p>
        </div>

        <button className="mt-12 px-8 py-4 border border-white rounded-full hover:bg-white hover:text-black transition">
          Book a Consultation
        </button>
      </div>
    </main>
  );
}