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
    variant: "black",
  },
  {
    value: "1000+",
    label: "Students Trained",
    Icon: Users,
    variant: "black",
  },
  {
    value: "Global",
    label: "International Alumni Network",
    Icon: GraduationCap,
    variant: "red",
  },
  {
    value: "40+",
    label: "Nationalities Represented",
    Icon: Globe2,
    variant: "black",
  },
  {
    value: "1st",
    label: "KHDA Approved Programmes",
    Icon: Trophy,
    variant: "black",
  },
];

export default function StoryNumbersCarouselWhiteRB({
  speed = 0.13,
  repeats = 4,
}: {
  speed?: number;
  repeats?: number;
}) {
  const items = useMemo(
    () => Array.from({ length: repeats }, () => baseItems).flat(),
    [repeats]
  );

  const trackRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number>(0);
  const xRef = useRef<number>(0);
  const setWidthRef = useRef<number>(0);

  const [paused, setPaused] = useState(false);
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  // Reduced motion support
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReduceMotion(mq.matches);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  // Measure width
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const measure = () => {
      const total = track.scrollWidth;
      setWidthRef.current = total / repeats;
      setReady(true);
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [repeats]);

  // Animation loop
  useEffect(() => {
    if (!ready || reduceMotion) return;

    const tick = (t: number) => {
      if (!lastRef.current) lastRef.current = t;
      const dt = t - lastRef.current;
      lastRef.current = t;

      if (!paused) {
        xRef.current -= speed * dt;
        const w = setWidthRef.current;
        if (w > 0) {
          while (xRef.current <= -w) xRef.current += w;
        }
        if (trackRef.current) {
          trackRef.current.style.transform = `translate3d(${xRef.current}px,0,0)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastRef.current = 0;
    };
  }, [paused, ready, speed, reduceMotion]);

  return (
    <section className="relative w-full overflow-hidden bg-white text-black py-14">
      {/* ================= HEADER (CENTERED, PADDED) ================= */}
      <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-10">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          A Story through Numbers
        </h2>
        <p className="mt-2 max-w-2xl text-black/60">
          Credibility, outcomes, and scale — presented clearly in numbers.
        </p>
      </div>

      {/* ================= FULL WIDTH CAROUSEL ================= */}
      <div className="relative mt-8 overflow-hidden">
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
            className="flex w-max gap-4 py-2 will-change-transform
                       pl-4 sm:pl-10 lg:pl-16"
            style={{ transform: "translate3d(0,0,0)" }}
          >
            {items.map((it, idx) => {
              const isRed = it.variant === "red";

              return (
                <div
                  key={`${it.label}-${idx}`}
                  className={[
                    "min-w-[260px] sm:min-w-[360px] max-w-[460px]",
                    "rounded-[18px] border p-7",
                    isRed
                      ? "bg-red-600 text-white border-red-500/30"
                      : "bg-black text-white border-black/20",
                  ].join(" ")}
                >
                  <div className="flex items-start justify-between gap-6">
                    <div className="min-w-0">
                      <div className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none">
                        {it.value ?? ""}
                      </div>
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
                        isRed
                          ? "border-white/15 bg-white/10"
                          : "border-white/10 bg-white/5",
                      ].join(" ")}
                    >
                      <it.Icon
                        className={
                          isRed
                            ? "h-6 w-6 text-white"
                            : "h-6 w-6 text-red-400"
                        }
                      />
                    </div>
                  </div>

                  <div className="mt-6 h-px w-full bg-white/10" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
