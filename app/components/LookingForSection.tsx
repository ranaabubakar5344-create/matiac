"use client";

import Image from "next/image";
import Link from "next/link";
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
                  <Link
                    href="/apply-now"
                    className="rounded-full bg-red-600 px-6 py-3 text-sm font-semibold text-white hover:bg-red-700 transition"
                  >
                    Apply Now
                  </Link>

                  <Link
                    href="/programmes"
                    className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition backdrop-blur"
                  >
                    Browse Courses
                  </Link>

                  <Link
                    href="/contact"
                    className="rounded-full border border-white/10 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10 transition"
                  >
                    Talk to Advisor
                  </Link>
                </div>

                <div className="mt-9 grid grid-cols-3 gap-3 max-w-lg">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                    <p className="text-xl font-extrabold">300+</p>
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
                  Admissions open - apply today
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
