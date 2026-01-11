// components/StoryNumbersCarouselWhiteRB.tsx
"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { Landmark, Users, GraduationCap, Globe2, Trophy } from "lucide-react";

type Variant = "black" | "red";

type Item = {
  value?: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
  variant: Variant;
};

const baseItems: Item[] = [
{
  value: "Campus",
  label: "Dubai Training Centre",
  Icon: Landmark,
  variant: "black"
},
{
  value: "1000+",
  label: "Students Trained",
  Icon: Users,
  variant: "black"
},
{
  value: "Global",
  label: "International Alumni Network",
  Icon: GraduationCap,
  variant: "red"
},
{
  value: "40+",
  label: "Nationalities Represented",
  Icon: Globe2,
  variant: "black"
}
,
{
  value: "1st",
  label: "KHDA Approved Programmes",
  Icon: Trophy,
  variant: "black"
}

];

export default function StoryNumbersCarouselWhiteRB({
  speed = 0.13,      // px per ms (0.13 ≈ 130px/sec)
  repeats = 4,       // ✅ increase to avoid any blank gap on big screens
}: {
  speed?: number;
  repeats?: number;
}) {
  // ✅ repeat multiple times for “never ending”
  const items = useMemo(
    () => Array.from({ length: repeats }, () => baseItems).flat(),
    [repeats]
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);
  const xRef = useRef<number>(0);
  const setWidthRef = useRef<number>(0); // ✅ width of ONE base set

  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    if (!mq) return;
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener?.("change", apply);
    return () => mq.removeEventListener?.("change", apply);
  }, []);

  // Measure total width + compute one-set width
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const total = track.scrollWidth;
      setWidthRef.current = total / repeats; // ✅ one base loop width
      setReady(true);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [repeats]);

  // Animation loop (infinite)
  useEffect(() => {
    if (!ready || reduceMotion) return;

    const tick = (t: number) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = t - lastRef.current;
      lastRef.current = t;

      if (!paused) {
        xRef.current -= speed * dt;

        const w = setWidthRef.current;
        // ✅ wrap exactly when one-set passes
        if (w > 0) {
          while (xRef.current <= -w) xRef.current += w;
        }

        const track = trackRef.current;
        if (track) track.style.transform = `translate3d(${xRef.current}px,0,0)`;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastRef.current = 0;
    };
  }, [paused, ready, speed, reduceMotion]);

  return (
    <section className="relative w-full overflow-hidden bg-white text-black">
      {/* FULL WIDTH */}
      <div className="w-full px-4 sm:px-8 lg:px-10 py-12">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
             

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight">
              A Story through Numbers
            </h2>

            <p className="mt-2 text-black/60 max-w-2xl">
              Credibility, outcomes, and scale — presented clearly in numbers.
            </p>
          </div>

        </div>

        <div className="relative mt-7 overflow-hidden">
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onPointerDown={() => setPaused(true)}
            onPointerUp={() => setPaused(false)}
            onPointerCancel={() => setPaused(false)}
            className="relative"
            aria-label="Numbers carousel"
          >
            <div
              ref={trackRef}
              className="flex w-max gap-4 py-2 will-change-transform"
              style={{ transform: "translate3d(0,0,0)" }}
            >
              {items.map((it, idx) => {
                const isRed = it.variant === "red";
                const isBlack = it.variant === "black";

                return (
                  <div
                    key={`${it.label}-${idx}`}
                    className={[
                      "min-w-[260px] sm:min-w-[360px] max-w-[460px]",
                      "rounded-[18px] border p-7", // ✅ no shadow
                      isRed ? "bg-red-600 text-white border-red-500/30" : "",
                      isBlack ? "bg-black text-white border-black/20" : "",
                    ].join(" ")}
                  >
                    <div className="flex items-start justify-between gap-6">
                      <div className="min-w-0">
                        {it.value ? (
                          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
                            {it.value}
                          </div>
                        ) : (
                          <div className="text-4xl sm:text-5xl font-extrabold tracking-tight opacity-0">
                            0
                          </div>
                        )}

                        <div
                          className={[
                            "mt-3 text-sm sm:text-base leading-relaxed",
                            isRed ? "text-white/85" : "text-white/75",
                          ].join(" ")}
                        >
                          {it.label}
                        </div>
                      </div>

                      <div
                        className={[
                          "shrink-0 rounded-2xl border p-3",
                          isRed ? "border-white/15 bg-white/10" : "border-white/10 bg-white/5",
                        ].join(" ")}
                      >
                        <it.Icon className={isRed ? "h-6 w-6 text-white" : "h-6 w-6 text-red-400"} />
                      </div>
                    </div>

                    <div className="mt-6 h-px w-full bg-white/10" />
                  </div>
                );
              })}
            </div>
          </div>

         
        </div>
      </div>
    </section>
  );
}
