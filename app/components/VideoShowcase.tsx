"use client";

import Link from "next/link";

export default function VideoHeroMetaverse() {
  return (
    <section className="relative overflow-hidden bg-black text-white min-h-[78vh] flex items-center">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/video-background.mp4"     
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        
        style={{
          filter: "brightness(1.08) contrast(1.08) saturate(1.05)",
          transform: "translateZ(0)",
        }}
      />

      {/* ✅ Overlays (light) — NO red radial */}
      <div className="pointer-events-none absolute inset-0 bg-black/30" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/20 to-black/75" />
      {/* optional premium dots (very low opacity) */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.08] [background-image:radial-gradient(rgba(255, 0, 0, 0.35)_1px,transparent_1px)] [background-size:20px_20px]" />

      {/* ✅ Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 bg-red">
        <div className="max-w-3xl">
     

          <h1 className="mt-6 font-serif font-extrabold tracking-tight leading-[1.02] text-[clamp(46px,6.5vw,84px)]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80 drop-shadow-[0_12px_35px_rgba(0,0,0,0.55)]">
              METAVERSE
            </span>
          </h1>

          <p className="mt-5 text-white text-base sm:text-lg leading-relaxed max-w-2xl">
           Metaverse Age Training Institute is an adumbration and a trailblazing hallmark in the new era of learning. It prides itself on a cutting-edge approach to providing practical education that encapsulates relevant knowledge, competence, and skills with technologies as its conduit.

Metaverse Age Training Institute is an approved and permitted institution by Knowledge Human Development Authority Dubai – United Arab Emirates.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/programmes"
              className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-white/90 transition"
            >
              Explore Programmes
            </Link>

            <Link
              href="/contact"
              className="rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition backdrop-blur"
            >
              Speak to an Advisor
            </Link>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
