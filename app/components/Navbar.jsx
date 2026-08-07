export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container">
        <nav className="mt-6 flex h-20 items-center justify-between rounded-full border border-white/60 bg-white/80 px-8 backdrop-blur-xl shadow-lg">

          {/* Logo */}

          <a
            href="/"
            className="font-serif text-3xl text-[#2D2A26]"
          >
            Olga PMU TJ
          </a>

          {/* Desktop Navigation */}

          <div className="hidden lg:flex items-center gap-10">

            <a
              href="#services"
              className="text-[15px] text-[#5F5854] transition hover:text-[#B08D87]"
            >
              Services
            </a>

            <a
              href="#gallery"
              className="text-[15px] text-[#5F5854] transition hover:text-[#B08D87]"
            >
              Gallery
            </a>

            <a
              href="#about"
              className="text-[15px] text-[#5F5854] transition hover:text-[#B08D87]"
            >
              About
            </a>

            <a
              href="#reviews"
              className="text-[15px] text-[#5F5854] transition hover:text-[#B08D87]"
            >
              Reviews
            </a>

            <a
              href="#contact"
              className="text-[15px] text-[#5F5854] transition hover:text-[#B08D87]"
            >
              Contact
            </a>

          </div>

          {/* CTA */}

          <a
            href="#contact"
            className="hidden lg:flex items-center justify-center rounded-full bg-[#B08D87] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#9D7A74]"
          >
            Book Consultation
          </a>

          {/* Mobile */}

          <button className="lg:hidden text-3xl text-[#2D2A26]">
            ☰
          </button>

        </nav>
      </div>
    </header>
  );
}