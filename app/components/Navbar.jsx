"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container">

          <nav className="mt-6 flex h-20 items-center justify-between rounded-full bg-white/80 backdrop-blur-xl px-8 shadow-lg">

            {/* Logo */}

            <a href="/" className="leading-none">

              <h1 className="font-serif text-2xl text-[#2D2A26]">
                OLGA KOSHKINA
              </h1>

              <p className="mt-1 text-[10px] uppercase tracking-[0.28em] text-[#B08D87]">
                Medical Tattoo & Permanent Makeup
              </p>

            </a>

            {/* Desktop Menu */}

            <div className="hidden lg:flex items-center gap-10">

              <a href="#services">Services</a>

              <a href="#gallery">Gallery</a>

              <a href="#about">About</a>

              <a href="#reviews">Reviews</a>

              <a href="#contact">Contact</a>

            </div>

            <a
              href="#contact"
              className="hidden lg:flex btn-primary"
            >
              Book Consultation
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-3xl"
            >
              ☰
            </button>

          </nav>

        </div>
      </header>

      {open && (

        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-[#FAF7F2] text-3xl font-serif">

          <a href="#services" onClick={() => setOpen(false)}>
            Services
          </a>

          <a href="#gallery" onClick={() => setOpen(false)}>
            Gallery
          </a>

          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>

          <a href="#reviews" onClick={() => setOpen(false)}>
            Reviews
          </a>

          <a href="#contact" onClick={() => setOpen(false)}>
            Contact
          </a>

        </div>

      )}

    </>
  );
}