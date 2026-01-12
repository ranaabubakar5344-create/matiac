"use client";

import Image from "next/image";
import { useMemo, useRef, useState, useEffect } from "react";

type Level = "All" | "Beginner" | "Intermediate" | "Advanced";

export default function CourseSearchHeroV2() {
  const [q, setQ] = useState("");
  const [level, setLevel] = useState<Level>("All");

  // ✅ Feature block in-view state
  const [featureInView, setFeatureInView] = useState(false);
  const featureRef = useRef<HTMLDivElement | null>(null);

useEffect(() => {
  const el = featureRef.current;
  if (!el) return;

  let t: ReturnType<typeof setTimeout> | null = null;

  const obs = new IntersectionObserver(
    ([entry]) => {
      // jab viewport me enter kare -> delay ke baad animate ON
      if (entry.isIntersecting) {
        if (t) clearTimeout(t);
        t = setTimeout(() => setFeatureInView(true), 800); // delay yahan change karlo
      } else {
        // jab viewport se bahar jaye -> animate reset OFF (taake next time phir chale)
        if (t) clearTimeout(t);
        setFeatureInView(false);
      }
    },
    {
      threshold: 0.25,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  obs.observe(el);

  return () => {
    if (t) clearTimeout(t);
    obs.disconnect();
  };
}, []);

  const levels: Level[] = useMemo(
    () => ["All", "Beginner", "Intermediate", "Advanced"],
    []
  );

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ q, level });
  };

  return (
    <section className="relative overflow-hidden bg-black text-white">
        
      
      {/* Premium background */}
      {/* Premium background */}
{/* <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1100px_circle_at_20%_-10%,rgba(99,102,241,0.18),transparent_55%)]" />
<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_80%_10%,rgba(239,68,68,0.20),transparent_55%)]" />
<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />
<div className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(255,255,255,0.30)_1px,transparent_1px)] [background-size:18px_18px]" />


      */}

      
            {/* <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_30%_40%,rgba(239,68,68,0.45),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_70%,rgba(168,85,247,0.25),transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_70%_30%,rgba(59,130,246,0.35),transparent_60%)]" /> */}

        {/* Search bar (glass) */}
       
  {/* <h1 className="font-serif text-5xl sm:text-7xl lg:text-5xl leading-[1.05] tracking-tight mb-8 text-center mt-24">
              A Modern Institute Built for Real{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400">
                 Outcomes
              </span>
            </h1>      Feature Block */}
      <div
        ref={featureRef} // ✅ observe this block
        className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16"
      >
        <div className="relative overflow-hidden rounded-[32px] ring-1 ring-white/10 shadow-2xl">
          <div className="grid lg:grid-cols-2">
            {/* Left Image */}
            <div className="relative h-[320px] sm:h-[460px] lg:h-[560px] overflow-hidden">
              <Image
                src="/team-meeting-startups.jpg"
                alt="Students learning together"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />

              {/* ✅ Diagonal edge (animated on scroll into view) */}
              <div className="hidden lg:block absolute inset-y-0 right-[-1px] w-[210px]">
                <div
                  className={[
                    "absolute inset-0 bg-black",
                    "transition-all duration-700 ease-out",
                    featureInView
                      ? "translate-x-0 opacity-100"
                      : "translate-x-[120px] opacity-0",
                  ].join(" ")}
                  style={{
                    clipPath: "polygon(40% 0, 100% 0, 100% 100%, 0 100%)",
                  }}
                />

                {/* thin light line like premium sites */}
                <div
                  className={[
                    "absolute inset-y-0 left-6 w-px bg-white/15",
                    "transition-all duration-700 ease-out delay-150",
                    featureInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-[40px]",
                  ].join(" ")}
                  style={{
                    transform: "skewX(-16deg)",
                    transformOrigin: "top",
                  }}
                />
              </div>
            </div>

            {/* Right Content */}
            <div className="relative bg-black p-8 sm:p-12 flex items-end">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_10%,rgba(255,255,255,0.10),transparent_55%)]" />

              <div className="relative">
                <p className="text-white/70 text-sm tracking-wide">
                  Application guidance
                </p>

                <h3 className="mt-4 font-serif text-4xl sm:text-5xl leading-[1.05]">
                  Your path to Metaverse Age
                </h3>
                
                <p className="mt-5 text-white/70 text-base sm:text-lg leading-relaxed max-w-xl">
                  Find out everything you need to apply. From entry requirements
                  to key dates and support — we’re here to help you succeed.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="/apply-now"
                    className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
                  >
                    Apply Now
                  </a>

                  <a
                    href="/courses"
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition backdrop-blur"
                  >
                    Browse Courses
                  </a>

                  <a
                    href="/contact"
                    className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                  >
                    Talk to Advisor
                  </a>
                </div>

                <div className="mt-9 grid grid-cols-3 gap-3 max-w-lg">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-xl font-extrabold">50+</p>
                    <p className="text-xs text-white/70">Courses</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-xl font-extrabold">10k+</p>
                    <p className="text-xs text-white/70">Learners</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-xl font-extrabold">UAE</p>
                    <p className="text-xs text-white/70">Training Hub</p>
                  </div>
                </div>

                <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  Admissions open — apply today
                </div>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />
        </div>
      </div>
    </section>
  );
}
