// app/programmes/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  GraduationCap,
  ShieldCheck,
  MapPin,
  Sparkles,
  Check,
  Zap,
  TrendingUp,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { motion } from "framer-motion";
import ParticlesLayer from "@/app/components/ParticlesLayer";

/* ================= TYPES ================= */

type Level = "EDUQUAL LEVEL 3" | "EDUQUAL LEVEL 4" | "EDUQUAL LEVEL 5";

type Programme = {
  level: Level;
  title: string;
  href: string;
  image: string;
  tag?: "KHDA Approved" | "Popular" | "New";
  desc: string;
  outcomes: string[];
  duration?: string;
  students?: string;
};

/* ================= DATA ================= */

const PROGRAMMES: Programme[] = [
  {
    level: "EDUQUAL LEVEL 3",
    title: "Diploma in International Foundation Studies",
    href: "/programmes/international-foundation-studies-l3",
    image: "/happy-graduated-students.jpg",
    tag: "KHDA Approved",
    desc: "A structured bridge programme that strengthens academic skills and prepares you for higher-levels.",
    outcomes: [],
    duration: "12 months",
    students: "500+",
  },
  {
    level: "EDUQUAL LEVEL 4",
    title: "Certificate in Business and Management",
    href: "/programmes/business-management-l4",
    image: "/buisn.jpg",
    tag: "KHDA Approved",
    desc: "Business fundamentals designed for working professionals.",
    outcomes: [],
    duration: "12 months",
    students: "800+",
  },
  {
    level: "EDUQUAL LEVEL 4",
    title: "Certificate in Creative Computing",
    href: "/programmes/creative-computing-l4",
    image: "/cre.jpg",
    tag: "KHDA Approved",
    desc: "Hands-on learning with structured tasks that build computing skills.",
    outcomes: [],
    duration: "12 months",
    students: "650+",
  },
  {
    level: "EDUQUAL LEVEL 5",
    title: "Diploma in Cyber Security",
    href: "/programmes/cyber-security-l5",
    image: "/cyb.jpg",
    tag: "Popular",
    desc: "Career-oriented cybersecurity programme with real-world focus.",
    outcomes: [],
    duration: "12 months",
    students: "780+",
  },
];

/* ================= PAGE ================= */

export default function ProgrammesPage() {
  const filtered = PROGRAMMES;

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* ================= HERO ================= */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32"
      >

        {/* ===== BACKGROUND LAYERS ===== */}
        <div className="absolute inset-0 z-0">

          {/* Particles (mobile + desktop, subtle on mobile) */}
          <div className="absolute inset-0 opacity-15 sm:opacity-60 pointer-events-none">
            <ParticlesLayer />
          </div>
          
  

          {/* Desktop background image only */}
          <Image
            src="/metaverse-bg.jpg"
            alt="Programmes"
            fill
            priority
            sizes="100vw"
            className="hidden sm:block object-cover opacity-30"
          />

          {/* Mobile: pure black background */}
          <div className="absolute inset-0 bg-black sm:hidden" />

          {/* Desktop glow only */}
          <motion.div
            animate={{ y: [0, -20, 0], scale: [1, 1.15, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            className="hidden sm:block absolute left-1/2 -translate-x-1/2 top-[30%]
                       h-[700px] w-[900px] rounded-full bg-white/5 blur-[120px]"
          />
        </div>

        {/* ===== HERO CONTENT ===== */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-6 py-3 backdrop-blur-xl mb-8">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-sm font-bold tracking-wide">
              KHDA APPROVED PROGRAMMES
            </span>
            <Award className="h-4 w-4 text-red-400" />
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-7xl lg:text-8xl leading-tight mb-6">
            Reshape Your Future
            <span className="block mt-2 text-white sm:text-transparent sm:bg-clip-text sm:bg-gradient-to-r sm:from-white sm:to-red-400">
              with Structured Pathways
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-2xl text-white/70 max-w-4xl mx-auto mb-12">
            EDUQUAL Levels <span className="font-semibold text-white">3, 4 & 5</span> —
            expertly designed for working professionals with real-world outcomes.
          </p>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-14">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full
                         bg-gradient-to-r from-red-600 to-red-500 px-10 py-5
                         font-bold hover:scale-105 transition"
            >
              Speak to an Advisor
              <ArrowUpRight />
            </Link>

            <Link
              href="/apply-now"
              className="inline-flex items-center justify-center gap-3 rounded-full
                         border border-white/30 bg-white/10 px-10 py-5
                         font-semibold hover:bg-white/20 transition"
            >
              Apply Now
              <Zap className="text-red-400" />
            </Link>
          </div>

          {/* Trust */}
          <div className="flex flex-wrap justify-center gap-4">
            <TrustPill icon={BadgeCheck} text="KHDA Approved" />
            <TrustPill icon={GraduationCap} text="EDUQUAL Levels 3/4/5" />
            <TrustPill icon={ShieldCheck} text="Quality Assured" />
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm">
              <MapPin className="h-4 w-4 text-red-400" /> Dubai, UAE
            </span>
          </div>
        </div>
      </motion.section>

      {/* ================= PROGRAMMES GRID ================= */}
      <section className="relative py-24 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <ProgrammeCard key={p.href} p={p} />
          ))}
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function TrustPill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm">
      <Icon className="h-4 w-4 text-red-400" />
      {text}
    </span>
  );
}

function ProgrammeCard({ p }: { p: Programme }) {
  return (
    <Link
      href={p.href}
      className="group overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur-xl hover:border-white/30 transition"
    >
      <div className="relative h-64">
        <Image
          src={p.image}
          alt={p.title}
          fill
          className="object-cover group-hover:scale-110 transition"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="p-8">
        <h3 className="text-xl font-bold mb-3">{p.title}</h3>
        <p className="text-white/70 mb-6">{p.desc}</p>

        <div className="flex items-center gap-4 text-xs text-white/80 mb-6">
          {p.duration && (
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> {p.duration}
            </span>
          )}
          {p.students && (
            <span className="flex items-center gap-2">
              <Users className="h-4 w-4" /> {p.students}
            </span>
          )}
        </div>

        <span className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold">
          View Programme <ArrowUpRight />
        </span>
      </div>
    </Link>
  );
}
