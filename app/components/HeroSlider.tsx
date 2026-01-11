"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";

type Slide = {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  image: string;
  position?: string;
  badge?: string;
};

export default function HeroSlider() {
  const slides: Slide[] = useMemo(
    () => [
      {
        title: "Upskill with Industry-Ready Programs",
        subtitle:
          "Professional trainings, short courses, and certifications designed for your career growth.",
        cta: "View Courses",
        href: "/programmes",
        image: "/sl1.jpg",
        position: "object-center",
        badge: "New Programs",
      },
      {
        title: "Industry-Focused Cybersecurity Training",
        subtitle:
          "Hands-on learning built for real-world security careers in the digital age.",
        cta: "Get Started",
        href: "/courses",
        image: "/cyb.jpg",
        position: "object-center",
        badge: "Most Popular",
      },
      {
        title: "Build Your Future Today",
        subtitle:
          "Flexible learning paths with expert guidance and real outcomes.",
        cta: "Contact Us",
        href: "/contact",
        image: "/cre.jpg",
        position: "object-center",
        badge: "Join Us",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setIndex((i) => (i + 1) % slides.length),
      6000
    );
    return () => clearInterval(t);
  }, [slides.length]);

  return (
    <section className="relative h-[65svh] sm:h-screen w-full overflow-hidden bg-[#07080f]">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          {/* IMAGE */}
          <div className="absolute inset-0">
            <Image
              src={slides[index].image}
              alt={slides[index].title}
              fill
              priority
              sizes="100vw"
              className={`object-cover ${slides[index].position}`}
            />

            {/* 🔴 RED GLOW (CALM ON MOBILE) */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(300px_circle_at_30%_40%,rgba(239,68,68,0.22),transparent_65%)]
                sm:bg-[radial-gradient(700px_circle_at_30%_40%,rgba(239,68,68,0.45),transparent_60%)]
              "
            />

            {/* 🔵 BLUE GLOW */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(260px_circle_at_70%_30%,rgba(59,130,246,0.18),transparent_70%)]
                sm:bg-[radial-gradient(600px_circle_at_70%_30%,rgba(59,130,246,0.35),transparent_60%)]
              "
            />

            {/* 🟣 PURPLE GLOW */}
            <div
              className="
                absolute inset-0
                bg-[radial-gradient(240px_circle_at_50%_70%,rgba(168,85,247,0.12),transparent_70%)]
                sm:bg-[radial-gradient(500px_circle_at_50%_70%,rgba(168,85,247,0.25),transparent_65%)]
              "
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/70" />

            {/* GRAIN */}
            <div className="absolute inset-0 opacity-[0.04] sm:opacity-[0.06]
              [background-image:radial-gradient(rgba(255,255,255,0.15)_1px,transparent_1px)]
              [background-size:24px_24px]"
            />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
            <div className="relative max-w-3xl pt-24 sm:pt-32">
              {/* TEXT HALO (REDUCED ON MOBILE) */}
              <div
                className="
                  absolute -inset-24 sm:-inset-32
                  bg-[radial-gradient(circle,rgba(239,68,68,0.12),transparent_75%)]
                  sm:bg-[radial-gradient(circle,rgba(239,68,68,0.18),transparent_70%)]
                  -z-10
                "
              />

              {/* BADGE */}
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2 backdrop-blur mb-6">
                <Sparkles className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-white">
                  {slides[index].badge}
                </span>
              </div>

              {/* TITLE */}
              <motion.h1
                key={slides[index].title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="
                  text-4xl sm:text-6xl lg:text-7xl
                  font-extrabold leading-[1.05]
                  text-white
                  drop-shadow-[0_4px_20px_rgba(0,0,0,0.7)]
                "
              >
                {slides[index].title.split(" ").slice(0, -1).join(" ")}{" "}
                <span className="bg-gradient-to-r from-red-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
                  {slides[index].title.split(" ").slice(-1)}
                </span>
              </motion.h1>

              {/* SUBTITLE */}
              <p className="mt-6 text-lg sm:text-xl text-white/85 max-w-2xl">
                {slides[index].subtitle}
              </p>

              {/* BUTTONS (DESKTOP ONLY – GOOD UX) */}
              <div className="mt-10 hidden sm:flex gap-4">
                <a
                  href={slides[index].href}
                  className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 font-bold text-white shadow-lg shadow-red-600/40 hover:scale-105 transition"
                >
                  {slides[index].cta}
                  <ArrowRight className="h-5 w-5" />
                </a>

                <a
                  href="/about"
                  className="inline-flex items-center gap-3 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold text-white backdrop-blur hover:bg-white/20 transition"
                >
                  Learn More
                  <Play className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`transition-all ${
              i === index
                ? "w-10 h-2 bg-gradient-to-r from-red-500 to-pink-500"
                : "w-2 h-2 bg-white/40"
            } rounded-full`}
          />
        ))}
      </div>
    </section>
  );
}
