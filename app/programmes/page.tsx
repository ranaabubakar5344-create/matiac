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
  Layers,
  Shield,
  Briefcase,
  Check,
  Zap,
  TrendingUp,
  Award,
  Clock,
  Users,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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

const PROGRAMMES: Programme[] = [
  {
    level: "EDUQUAL LEVEL 3",
    title: "Diploma in International Foundation Studies",
    href: "/programmes/international-foundation-studies-l3",
    image: "/happy-graduated-students.jpg",
    tag: "KHDA Approved",
    desc: "A structured bridge programme that strengthens academic skills and prepares you for higher-levels.",
    outcomes: ["Academic Skills", "Study Confidence", "Progression Ready"],
    duration: "12 months",
    students: "500+",
  },
  {
    level: "EDUQUAL LEVEL 4",
    title: "Certificate in Business and Management",
    href: "/programmes/business-management-l4",
    image: "/buisn.jpg",
    tag: "KHDA Approved",
    desc: "Business fundamentals designed for working professionals clear modules.",
    outcomes: ["Management Basics", "Planning", "Workplace Skills"],
    duration: "9 months",
    students: "800+",
  },
  {
    level: "EDUQUAL LEVEL 4",
    title: "Certificate in Creative Computing",
    href: "/programmes/creative-computing-l4",
    image: "/cre.jpg",
    tag: "KHDA Approved",
    desc: "Hands-on learning with structured tasks that build practical computing skills and confidence.",
    outcomes: ["Practical Projects", "Problem Solving", "Portfolio Start"],
    duration: "9 months",
    students: "650+",
  },
  {
    level: "EDUQUAL LEVEL 4",
    title: "Certificate in Psychology",
    href: "/programmes/psychology-l4",
    image: "/phy.jpg",
    tag: "KHDA Approved",
    desc: "Core psychology concepts delivered in a clear pathway with guidance and consistent progress.",
    outcomes: ["Core Concepts", "Structured Learning", "Assessment Clarity"],
    duration: "9 months",
    students: "420+",
  },
  {
    level: "EDUQUAL LEVEL 4",
    title: "Certificate in Cyber Security",
    href: "/programmes/cyber-security-l4",
    image: "/cyber.jpg",
    tag: "Popular",
    desc: "A strong foundation in cybersecurity with practical exercises aligned to real job roles.",
    outcomes: ["Security Basics", "Hands-on Tasks", "Career Aligned"],
    duration: "9 months",
    students: "920+",
  },
  {
    level: "EDUQUAL LEVEL 4",
    title: "Certificate in Creative Media",
    href: "/programmes/creative-media-l4",
    image: "/crea.jpg",
    tag: "New",
    desc: "Modern media learning with structured assignments and portfolio-focused improvement.",
    outcomes: ["Creative Projects", "Modern Media", "Portfolio Build"],
    duration: "9 months",
    students: "380+",
  },
  {
    level: "EDUQUAL LEVEL 5",
    title: "Diploma in Business Management",
    href: "/programmes/business-management-l5",
    image: "/bm.jpg",
    tag: "KHDA Approved",
    desc: "Advanced learning designed to improve leadership, decision-making, and business performance.",
    outcomes: ["Leadership", "Strategy", "Decision Making"],
    duration: "12 months",
    students: "700+",
  },
  {
    level: "EDUQUAL LEVEL 5",
    title: "Diploma in Creative Computing",
    href: "/programmes/creative-computing-l5",
    image: "/cre.jpg",
    tag: "KHDA Approved",
    desc: "Deeper skills, bigger projects, and clearer progression built for stronger portfolios.",
    outcomes: ["Advanced Projects", "Portfolio Strong", "Progression Path"],
    duration: "12 months",
    students: "540+",
  },
  {
    level: "EDUQUAL LEVEL 5",
    title: "Diploma in Psychology",
    href: "/programmes/psychology-l5",
    image: "/phys.webp",
    tag: "KHDA Approved",
    desc: "Higher-level psychology with a premium academic structure and supportive learning approach.",
    outcomes: ["Advanced Topics", "Academic Structure", "Tutor Support"],
    duration: "12 months",
    students: "360+",
  },
  {
    level: "EDUQUAL LEVEL 5",
    title: "Diploma in Cyber Security",
    href: "/programmes/cyber-security-l5",
    image: "/cyb.jpg",
    tag: "Popular",
    desc: "Career-oriented programme with deeper outcomes and more hands-on, role-aligned learning.",
    outcomes: ["Industry Ready", "Practical Labs", "Clear Outcomes"],
    duration: "12 months",
    students: "780+",
  },
];

function countBy(level: Level) {
  return PROGRAMMES.filter((p) => p.level === level).length;
}

export default function ProgrammesPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

 const filtered = PROGRAMMES;
const selectedLevel = "ALL";


  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      }
    },
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* ULTRA PREMIUM HERO */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-32"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <Image
            src="/metaverse-bg.jpg"
            alt="Programmes"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          
          {/* Multi-layer gradients */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(220,38,38,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/98 to-red-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
          
          {/* Animated mesh gradient */}
          <motion.div 
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.4) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(239, 68, 68, 0.3) 0%, transparent 50%),
                               radial-gradient(circle at 40% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 40%)`
            }}
          />
          
          {/* Premium grid with glow */}
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
          
          {/* Floating orbs */}
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-[10%] top-[20%] h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[140px]"
          />
          <motion.div
            animate={{
              y: [0, 40, 0],
              x: [0, -30, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute right-[5%] top-[10%] h-[600px] w-[600px] rounded-full bg-purple-600/15 blur-[130px]"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute left-1/2 -translate-x-1/2 top-[30%] h-[700px] w-[900px] rounded-full bg-white/5 blur-[120px]"
          />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-6xl mx-auto"
          >
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-6 py-3 backdrop-blur-2xl shadow-2xl shadow-red-600/10 mb-8"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative"
              >
                <div className="h-2.5 w-2.5 rounded-full bg-red-500" />
                <div className="absolute inset-0 h-2.5 w-2.5 rounded-full bg-red-500 animate-ping" />
              </motion.div>
              <span className="text-sm font-bold text-white/95 tracking-wide">
                KHDA APPROVED PROGRAMMES
              </span>
              <Award className="h-4 w-4 text-red-400" />
            </motion.div>

            {/* Hero heading with split text animation */}
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8"
            >
              <span className="block">Reshape Your Future</span>
              <span className="block mt-2">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400">
                  with Structured Pathways
                </span>
              </span>
            </motion.h1>

            {/* Description with fade in */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-xl sm:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto mb-12 font-light"
            >
              EDUQUAL Levels{" "}
              <span className="text-white font-semibold bg-white/10 px-2 py-0.5 rounded">
                3, 4 & 5
              </span>{" "}
              — expertly designed for working professionals. Crystal-clear modules, 
              transparent assessments, and real-world outcomes you can apply immediately.
            </motion.p>

            {/* Premium CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-5 justify-center mb-16"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-5 text-lg font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)]"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
                <span className="relative flex items-center gap-3">
                  Speak to an Advisor
                  <motion.div
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </motion.div>
                </span>
              </Link>

              <Link
                href="/apply-now"
                className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
              >
                Apply Now
                <Zap className="h-5 w-5 text-red-400 transition-transform group-hover:rotate-12" />
              </Link>
            </motion.div>

            {/* Trust indicators with animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TrustPill icon={BadgeCheck} text="KHDA Approved" highlight />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TrustPill icon={GraduationCap} text="EDUQUAL Levels 3/4/5" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <TrustPill icon={ShieldCheck} text="Quality Assured" />
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl">
                  <MapPin className="h-4 w-4 text-red-400" />
                  Dubai, UAE
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Level Explorer - Next Level Design */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mt-24 grid gap-6 sm:grid-cols-3"
          >
            {[
              {
                level: "EDUQUAL LEVEL 3" as Level,
                icon: Layers,
                desc: "Foundation pathway to build academic confidence and progression readiness.",
                href: "/programmes?level=3",
                color: "from-blue-600/20 to-blue-600/5",
                iconColor: "text-blue-400",
              },
              {
                level: "EDUQUAL LEVEL 4" as Level,
                icon: Briefcase,
                desc: "Career-focused certificates with structured learning and workplace relevance.",
                href: "/programmes?level=4",
                color: "from-purple-600/20 to-purple-600/5",
                iconColor: "text-purple-400",
              },
              {
                level: "EDUQUAL LEVEL 5" as Level,
                icon: Shield,
                desc: "Advanced diplomas with deeper outcomes for stronger career progression.",
                href: "/programmes?level=5",
                color: "from-red-600/20 to-red-600/5",
                iconColor: "text-red-400",
              },
            ].map((item, i) => (
              <motion.div key={i} variants={itemVariants}>
                <LevelExplorerCard {...item} count={countBy(item.level)} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* PROGRAMMES SECTION - Ultra Modern */}
      <section className="relative py-24 bg-black">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Filter Bar - Glassmorphic Design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-3xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
              {/* Animated gradient overlay */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-gradient-to-r from-red-600/10 via-transparent to-purple-600/10"
              />
              
              <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <TrendingUp className="h-6 w-6 text-red-400" />
                    <h2 className="text-3xl font-bold text-white">
                      Explore Programmes
                    </h2>
                  </div>
                  <p className="text-white/60 text-lg">
                    Showing{" "}
                    <span className="text-white font-bold text-2xl">
                      {filtered.length}
                    </span>{" "}
                    {filtered.length === 1 ? "programme" : "programmes"}
                    {selectedLevel !== "ALL" && (
                      <>
                        {" • "}
                        <span className="text-red-400 font-semibold">{selectedLevel}</span>
                      </>
                    )}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <FilterPill
                    href="/programmes"
                    label="All Levels"
                    active={selectedLevel === "ALL"}
                  />
                  {/* <FilterPill
                    href="/programmes?level=3"
                    label="Level 3"
                    active={selectedLevel === "EDUQUAL LEVEL 3"}
                  />
                  <FilterPill
                    href="/programmes?level=4"
                    label="Level 4"
                    active={selectedLevel === "EDUQUAL LEVEL 4"}
                  />
                  <FilterPill
                    href="/programmes?level=5"
                    label="Level 5"
                    active={selectedLevel === "EDUQUAL LEVEL 5"}
                  /> */}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Programme Cards Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {filtered.map((p) => (
              <motion.div key={p.href} variants={itemVariants}>
                <ProgrammeCard p={p} />
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA - Cinema Grade */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24"
          >
            <div className="relative overflow-hidden rounded-[48px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-12 sm:p-16 lg:p-20 backdrop-blur-3xl shadow-2xl">
              {/* Animated background effects */}
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-48 -top-48 h-96 w-96 rounded-full bg-red-600/30 blur-[140px]"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute -left-48 -bottom-48 h-96 w-96 rounded-full bg-purple-600/20 blur-[140px]"
              />
              
              <div className="relative flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
                <div className="max-w-2xl">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl mb-6"
                  >
                    <Sparkles className="h-5 w-5 text-red-400" />
                    NEXT STEP
                  </motion.span>
                  <h3 className="text-5xl sm:text-6xl font-bold leading-[1.1] mb-6 text-white">
                    Not sure which level{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                      fits you?
                    </span>
                  </h3>
                  <p className="text-xl text-white/70 leading-relaxed">
                    Our expert admissions team will guide you through entry requirements, 
                    flexible schedules, and help you choose the perfect programme aligned 
                    with your career aspirations.
                  </p>
                </div>

                <div className="flex flex-col gap-5 lg:shrink-0">
                  <Link
                    href="/contact"
                    className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-5 text-lg font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(220,38,38,0.5)]"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-400"
                      initial={{ x: "100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                    <span className="relative flex items-center gap-3">
                      Contact Admissions
                      <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </Link>
                  <Link
                    href="/apply-now"
                    className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
                  >
                    Apply Now
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

/* ---------- PREMIUM COMPONENTS ---------- */

function TrustPill({ icon: Icon, text, highlight }: { icon: any; text: string; highlight?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 rounded-full border px-6 py-3 text-sm font-semibold backdrop-blur-xl transition-all duration-300 ${
      highlight 
        ? "border-red-500/50 bg-gradient-to-r from-red-600/20 to-red-600/10 text-white shadow-lg shadow-red-600/20" 
        : "border-white/20 bg-white/10 text-white/90 hover:bg-white/15 hover:border-white/30"
    }`}>
      <Icon className={`h-4 w-4 ${highlight ? "text-red-400" : "text-white/70"}`} />
      {text}
    </span>
  );
}

function LevelExplorerCard({
  level,
  count,
  icon: Icon,
  desc,
  href,
  color,
  iconColor,
}: {
  level: Level;
  count: number;
  icon: any;
  desc: string;
  href: string;
  color: string;
  iconColor: string;
}) {
  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-8 backdrop-blur-3xl transition-all duration-500 hover:scale-[1.03] hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.3)]"
    >
      {/* Animated gradient on hover */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
      />
      
      {/* Glow effect */}
      <div className="absolute -right-20 -bottom-20 h-48 w-48 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-3xl opacity-0 transition-all duration-700 group-hover:opacity-100" />
      
      <div className="relative">
        <div className="flex items-center gap-5 mb-6">
          <motion.div
            whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
            className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br ${color} backdrop-blur-xl transition-all duration-500 group-hover:border-white/30 group-hover:shadow-lg`}
          >
            <Icon className={`h-8 w-8 ${iconColor}`} />
          </motion.div>
          <div>
            <p className="text-lg font-bold text-white mb-1">{level}</p>
            <p className="text-sm text-white/60 font-medium">
              {count} programme{count !== 1 ? 's' : ''} available
            </p>
          </div>
        </div>

        <p className="text-white/70 leading-relaxed mb-8">{desc}</p>

        <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-xl transition-all duration-300 group-hover:bg-white/20 group-hover:border-white/30 group-hover:shadow-lg">
          Explore Level {level.split(" ").pop()}
          <motion.div
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowUpRight className={`h-4 w-4 ${iconColor}`} />
          </motion.div>
        </div>
      </div>
    </Link>
  );
}

function FilterPill({
  href,
  label,
  active,
}: {
  href: string;
  label: string;
  active: boolean;
}) {
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Link
        href={href}
        className={`inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-sm font-bold transition-all duration-300 ${
          active
            ? "bg-gradient-to-r from-red-600 to-red-500 text-white shadow-lg shadow-red-600/40 border-2 border-red-500/50"
            : "border-2 border-white/20 bg-white/10 text-white/80 hover:bg-white/15 hover:border-white/30 hover:text-white backdrop-blur-xl"
        }`}
      >
        {active && <Check className="h-4 w-4" />}
        {label}
      </Link>
    </motion.div>
  );
}

function ProgrammeCard({ p }: { p: Programme }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
    >
      <Link
        href={p.href}
        className="group relative block overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] backdrop-blur-3xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
      >
        {/* Image Container - Enhanced */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={p.image}
            alt={p.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
          />
          
          {/* Multi-layer gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-br from-red-600/0 via-transparent to-red-600/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Tags - Premium positioning */}
          <div className="absolute left-6 top-6 flex flex-wrap gap-2.5">
            <span className="rounded-full border border-white/30 bg-black/70 px-4 py-2 text-xs font-bold text-white backdrop-blur-2xl shadow-lg">
              {p.level}
            </span>
            {p.tag && (
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="rounded-full bg-gradient-to-r from-red-600 to-red-500 px-4 py-2 text-xs font-bold text-white shadow-lg shadow-red-600/40"
              >
                {p.tag}
              </motion.span>
            )}
          </div>

          {/* Stats overlay */}
          {(p.duration || p.students) && (
            <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4">
              {p.duration && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-xl">
                  <Clock className="h-3.5 w-3.5 text-white/70" />
                  <span className="text-xs font-semibold text-white">{p.duration}</span>
                </div>
              )}
              {p.students && (
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/60 px-4 py-2 backdrop-blur-xl">
                  <Users className="h-3.5 w-3.5 text-white/70" />
                  <span className="text-xs font-semibold text-white">{p.students}</span>
                </div>
              )}
            </div>
          )}

          {/* Hover arrow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-white/30 bg-white/20 backdrop-blur-xl opacity-0 transition-all duration-500 group-hover:opacity-100"
          >
            <ArrowUpRight className="h-5 w-5 text-white" />
          </motion.div>
        </div>

        {/* Content - Premium spacing */}
        <div className="p-8">
          <h3 className="text-2xl font-bold leading-tight text-white mb-4 group-hover:text-red-400 transition-colors duration-300">
            {p.title}
          </h3>

          <p className="text-white/70 leading-relaxed mb-6">{p.desc}</p>

          {/* Outcomes - Refined chips */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {p.outcomes.map((outcome) => (
              <motion.span
                key={outcome}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/15 hover:border-white/25"
              >
                <Check className="h-3.5 w-3.5 text-red-400" />
                {outcome}
              </motion.span>
            ))}
          </div>

          {/* CTA Button - Premium design */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-red-600/30 transition-all duration-300 group-hover:shadow-xl group-hover:shadow-red-600/50"
          >
            View Programme
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </motion.div>
        </div>

        {/* Hover Glow Effects - Multiple layers */}
        <div className="pointer-events-none absolute -right-32 -bottom-32 h-72 w-72 rounded-full bg-red-600/0 blur-[100px] transition-all duration-700 group-hover:bg-red-600/30" />
        <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-purple-600/0 blur-[80px] transition-all duration-700 group-hover:bg-purple-600/20" />
      </Link>
    </motion.div>
  );
}