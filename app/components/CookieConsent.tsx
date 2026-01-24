"use client";

import { useEffect, useState } from "react";

export default function CookieConsentModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setOpen(true);
    }
  }, []);

  if (!open) return null;

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setOpen(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="
          relative z-10
          w-[92%] max-w-lg
          rounded-2xl
          bg-black
          border border-red-700/30
          p-8
          shadow-[0_20px_80px_rgba(185,28,28,0.45)]
        "
      >
        <h2 className="text-2xl font-semibold text-white">
          Cookies & Privacy
        </h2>

        <p className="mt-4 text-sm text-white/75 leading-relaxed">
          We use cookies to improve your browsing experience, analyze site
          traffic, and personalize content. By clicking “Accept”, you consent to
          the use of cookies.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-end">
          <button
            onClick={reject}
            className="
              px-5 py-2.5 rounded-full
              text-sm
              text-white/70
              border border-white/20
              hover:border-white/40
              hover:text-white
              transition
            "
          >
            Reject
          </button>

          <button
            onClick={accept}
            className="
              px-6 py-2.5 rounded-full
              text-sm font-medium
              text-white
              bg-gradient-to-br from-red-600 to-red-800
              shadow-md
              hover:shadow-red-700/50
              transition
            "
          >
            Accept Cookies
          </button>
        </div>
      </div>
    </div>
  );
}