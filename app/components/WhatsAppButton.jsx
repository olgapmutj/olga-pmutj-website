"use client";

export default function WhatsAppButton() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "WhatsApp Button",
      });
    }
  };

  return (
    <a
      href="https://wa.me/526641350986"
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleWhatsAppClick}
      className="fixed bottom-8 right-8 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition hover:scale-110"
      aria-label="WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M20.52 3.48A11.86 11.86 0 0012.04 0C5.43 0 .06 5.37.06 11.98c0 2.11.55 4.17 1.6 5.99L0 24l6.19-1.62a11.94 11.94 0 005.85 1.49h.01c6.61 0 11.98-5.37 11.98-11.98 0-3.2-1.25-6.21-3.51-8.41zM12.05 21.8a9.8 9.8 0 01-4.99-1.37l-.36-.21-3.67.96.98-3.58-.24-.37a9.8 9.8 0 01-1.51-5.24c0-5.43 4.42-9.85 9.86-9.85a9.8 9.8 0 016.98 2.89 9.78 9.78 0 012.88 6.96c0 5.44-4.42 9.86-9.85 9.86zm5.4-7.37c-.29-.14-1.72-.85-1.99-.95-.27-.1-.46-.14-.66.15-.19.29-.75.95-.92 1.15-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.34-1.44-.86-.76-1.44-1.7-1.61-1.99-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.14-.17.19-.29.29-.49.1-.19.05-.36-.02-.51-.07-.14-.66-1.59-.9-2.18-.24-.58-.49-.5-.66-.5h-.56c-.19 0-.51.07-.78.36-.27.29-1.02 1-.99 2.44.03 1.44 1.03 2.84 1.17 3.03.14.19 2.02 3.09 4.9 4.33.69.3 1.23.48 1.65.61.69.22 1.31.19 1.8.12.55-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.27-.19-.56-.34z" />
      </svg>
    </a>
  );
}