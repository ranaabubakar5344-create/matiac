// components/TestimonialsSection.tsx
'use client';
import { motion } from "framer-motion";
import {
  Star,
  Quote,
  Award,
  TrendingUp,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";
type Testimonial = {
  id: number;
  name: string;
  level: string;
  company: string;
  rating: number;
  text: string;
  programme: string;
  outcome: string;
    image?: string; 
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Ahmed",
    // role: "Marketing Manager",
    level: "EDUQUAL Level 5 Graduate",
    company: "Emirates Digital",
    rating: 5,
    text:
      "The EDUQUAL Level 5 Diploma transformed my career completely. The structured modules and expert guidance helped me move into a leadership role with confidence.",
    programme: "Business Management L5",
    outcome: "Promoted to Manager",
    image:"/avatar.jpg",
  },
  {
    id: 2,
    name: "Mohammed Al-Rashid",
    level: "EDUQUAL Level 5 Graduate",
    company: "Dubai Bank",
    rating: 5,
    text:
      "The hands-on cybersecurity training gave me real skills. Within months of completing the programme, I secured my dream role.",
    programme: "Cyber Security L5",
    outcome: "Career Switch",
  },
  {
    id: 3,
    name: "Priya Sharma",
    level: "EDUQUAL Level 4 Graduate",
    company: "Tech Innovations LLC",
    rating: 5,
    text:
      "Portfolio-driven learning and personal feedback made a huge difference. The programme accelerated my professional growth.",
    programme: "Creative Computing L4",
    outcome: "Strong Portfolio",
  },
  {
    id: 4,
    name: "James Wilson",
    level: "EDUQUAL Level 5 Graduate",
    company: "Dubai Healthcare",
    rating: 5,
    text:
      "The academic structure prepared me perfectly for postgraduate studies. Theory and application were balanced exceptionally well.",
    programme: "Psychology L5",
    outcome: "Progressed to Masters",
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentIndex((i) => (i + 1) % TESTIMONIALS.length),
      6000
    );
    return () => clearInterval(t);
  }, []);

  const next = () =>
    setCurrentIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () =>
    setCurrentIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative py-28 bg-black overflow-hidden">
      {/* Cinematic background */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black via-red-950/10 to-black" />
      <div className="absolute inset-0 opacity-[0.06] [background-image:radial-gradient(rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:32px_32px]" /> */}
 <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_30%_40%,rgba(239,68,68,0.45),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_70%,rgba(168,85,247,0.25),transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_70%_30%,rgba(59,130,246,0.35),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2  px-5 py-2 backdrop-blur-xl mb-6">
            <Sparkles className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold text-white/90">
              SUCCESS STORIES
            </span>
          </div>

          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white">
            What Our Students Say
          </h2>
          <p className="mt-4 text-white/60 max-w-2xl mx-auto">
            Real experiences from learners who achieved meaningful career outcomes.
          </p>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-10 sm:p-14">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.id}
                initial={false}
                animate={{
                  opacity: i === currentIndex ? 1 : 0,
                  y: i === currentIndex ? 0 : 30,
                }}
                transition={{ duration: 0.6 }}
                className={
                  i === currentIndex
                    ? "relative"
                    : "absolute inset-0 pointer-events-none"
                }
              >
                {/* Avatar */}
         
<div className="flex items-center gap-5 mb-8">
  <div className="relative">
    {t.image ? (
      <>
        {/* Image Avatar */}
        <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-red-500/40">
          <Image
            src={t.image}
            alt={t.name}
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>

        {/* Soft glow */}
        <div className="absolute inset-0 rounded-full bg-red-500/25 blur-xl -z-10" />
      </>
    ) : (
      <>
        {/* Initials Avatar (fallback) */}
        <div className="flex h-16 w-16 items-center justify-center rounded-full 
          bg-gradient-to-br from-red-600 to-red-500 
          text-xl font-extrabold text-white shadow-lg">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-red-500/30 blur-xl -z-10" />
      </>
    )}
  </div>

  {/* Name & role (optional but recommended) */}
  <div>
    <p className="text-lg font-bold text-white">{t.name}</p>
    <p className="text-sm text-white/60">{t.level}</p>
  </div>
</div>

                {/* Quote */}
                <Quote className="h-10 w-10 text-red-400/30 mb-6" />

                <p className="text-xl sm:text-2xl text-white leading-relaxed mb-8">
                  “{t.text}”
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-3 mb-8">
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/90">
                    <Award className="h-4 w-4 text-red-400" />
                    {t.programme}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                    <TrendingUp className="h-4 w-4" />
                    {t.outcome}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                  <span className="ml-2 text-sm text-white/70">
                    {t.rating}.0 rating
                  </span>
                </div>
              </motion.div>
            ))}

            {/* Navigation */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 backdrop-blur-xl hover:bg-black/80 transition"
            >
              <ChevronLeft className="h-5 w-5 text-white" />
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-black/60 backdrop-blur-xl hover:bg-black/80 transition"
            >
              <ChevronRight className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}




