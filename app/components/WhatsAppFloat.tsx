"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppFloat() {
  const phoneNumber = "971524457987";
  const message = encodeURIComponent(
    "Hello! I visited your website and would like to know more."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="
fixed bottom-6 right-6 z-50
flex items-center gap-3
px-4 py-2
rounded-full
bg-black dark:bg-black
border border-red-600/40
shadow-[0_10px_30px_rgba(220,38,38,0.35)]
hover:shadow-[0_15px_45px_rgba(220,38,38,0.55)]
transition-all duration-300
"
    >
      {/* Heart Pulse Circle */}
      <span className="relative flex h-10 w-10">
        {/* Pulse */}
<span className="absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-60 animate-ping" />        
        {/* Solid Icon */}
<span className="relative flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white">     
         <MessageCircle size={20} strokeWidth={2} />
        </span>
      </span>

      {/* Text */}
     <span className="text-sm font-medium text-white whitespace-nowrap">
  Chat with us
</span>
    </a>
  );
}