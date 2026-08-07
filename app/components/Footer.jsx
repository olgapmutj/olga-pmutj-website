import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-white">
      <div className="container py-20">

        <div className="grid gap-16 lg:grid-cols-3">

          {/* Brand */}

          <div>

            <h2 className="font-serif text-4xl">
              Olga Koshkina
            </h2>

            <p className="mt-3 uppercase tracking-[0.25em] text-sm text-[#D6B5AE]">
              Medical Tattoo & Permanent Makeup
            </p>

            <p className="mt-8 leading-8 text-gray-300">
              Restoring confidence through advanced medical tattooing,
              permanent makeup and paramedical pigmentation in Tijuana,
              Baja California.
            </p>

          </div>

          {/* Contact */}

          <div>

            <h3 className="mb-8 text-xl font-semibold">
              Contact
            </h3>

            <div className="space-y-6">

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt
                  className="mt-1 text-[#B08D87]"
                  size={18}
                />

                <p className="leading-7 text-gray-300">
                  Parque Baja California Sur 478
                  <br />
                  Playas de Tijuana
                  <br />
                  22506 Tijuana, Baja California
                  <br />
                  México
                </p>

              </div>

              <a
                href="https://wa.me/526641234567"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-gray-300 transition hover:text-white"
              >
                <FaWhatsapp
                  className="text-[#B08D87]"
                  size={18}
                />

                +52 664 123 4567
              </a>

              <a
                href="mailto:Koshkinanumberone@icloud.com"
                className="flex items-center gap-4 text-gray-300 transition hover:text-white"
              >
                <FaEnvelope
                  className="text-[#B08D87]"
                  size={18}
                />

                Koshkinanumberone@icloud.com
              </a>

            </div>

          </div>

          {/* Social */}

          <div>

            <h3 className="mb-8 text-xl font-semibold">
              Follow Olga
            </h3>

            <div className="flex gap-5">

              <a
                href="https://www.instagram.com/olga_pmu_tj"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#B08D87]"
              >
                <FaInstagram size={22} />
              </a>

              <a
                href="https://www.facebook.com/share/191QwM347m/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#B08D87]"
              >
                <FaFacebookF size={22} />
              </a>

              <a
                href="https://www.tiktok.com/@koshkinanumberone"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 transition hover:bg-[#B08D87]"
              >
                <FaTiktok size={22} />
              </a>

            </div>

            <p className="mt-10 leading-7 text-gray-400">
              Follow Olga on social media to see real patient
              transformations, behind-the-scenes content and the latest
              treatments available at the studio.
            </p>

          </div>

        </div>

        <div className="mt-20 border-t border-white/10 pt-8 text-center text-sm text-gray-400">

          © 2026 Olga Koshkina • Medical Tattoo & Permanent Makeup •
          All Rights Reserved.

        </div>

      </div>
    </footer>
  );
}