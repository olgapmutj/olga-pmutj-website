"use client";

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const text = `Hello Olga!

My name is: ${form.name}

Email: ${form.email}

Phone: ${form.phone}

Treatment:

${form.message}`;

    window.open(
      `https://wa.me/526641234567?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  return (
    <section
      id="contact"
      className="bg-[#FAF7F2] py-32"
    >
      <div className="container">

        <div className="grid lg:grid-cols-2 gap-20">

          {/* LEFT */}

          <div>

            <span className="uppercase tracking-[0.35em] text-sm text-[#B08D87]">
              CONTACT
            </span>

            <h2 className="mt-6 font-serif text-6xl leading-tight text-[#2D2A26]">
              Schedule Your
              <br />
              Consultation
            </h2>

            <p className="mt-8 text-lg leading-8 text-[#6A635E]">
              We would love to learn about your goals and recommend the
              most appropriate treatment for you.
            </p>

            <div className="mt-12 space-y-10">

              <div>

                <h3 className="font-semibold text-xl text-[#2D2A26]">
                  Studio
                </h3>

                <p className="mt-3 leading-8 text-[#6A635E]">
                  Olga Koshkina
                  <br />
                  Medical Tattoo & Permanent Makeup
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl text-[#2D2A26]">
                  Address
                </h3>

                <p className="mt-3 leading-8 text-[#6A635E]">
                  Parque Baja California Sur 478
                  <br />
                  Playas de Tijuana
                  <br />
                  22506 Tijuana, Baja California
                  <br />
                  México
                </p>

              </div>

              <div>

                <h3 className="font-semibold text-xl text-[#2D2A26]">
                  WhatsApp
                </h3>

                <a
                  href="https://wa.me/526641234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-block text-[#B08D87] hover:underline"
                >
                  +52 664 123 4567
                </a>

              </div>

              <div className="flex flex-wrap gap-4">

                <a
                  href="https://maps.app.goo.gl/dup7ko52LydrgqcC7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  Get Directions
                </a>

                <a
                  href="https://wa.me/526641234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  WhatsApp
                </a>

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <form
            onSubmit={handleSubmit}
            className="rounded-[36px] bg-white p-10 shadow-xl space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#E5DED7] p-4 outline-none focus:border-[#B08D87]"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#E5DED7] p-4 outline-none focus:border-[#B08D87]"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#E5DED7] p-4 outline-none focus:border-[#B08D87]"
            />

            <textarea
              rows="6"
              name="message"
              placeholder="Tell us about the treatment you are interested in..."
              onChange={handleChange}
              className="w-full rounded-2xl border border-[#E5DED7] p-4 outline-none focus:border-[#B08D87]"
            />

            <button
              type="submit"
              className="btn-primary w-full"
            >
              Schedule Consultation
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}