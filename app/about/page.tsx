'use client';

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  Eye,
  Target,
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
  TrendingUp,
  Building2,
  Zap,
} from "lucide-react";

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">

      {/* GLOBAL AMBIENT GLOW */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-red-600/30 blur-[200px]" />
        <div className="absolute top-40 -right-40 h-[650px] w-[650px] rounded-full bg-purple-600/25 blur-[220px]" />
        <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[220px]" />
      </div>

      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative z-10 pt-32 pb-28"
      >
        <div className="absolute inset-0">
          <Image
            src="/metaverse-bg.jpg"
            alt="About Us"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-red-950/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600/90 px-6 py-3 shadow-[0_0_40px_rgba(220,38,38,0.5)] mb-8">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-bold tracking-wide">
                ABOUT METAVERSE AGE
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-8xl font-bold leading-tight mb-8">
              A Modern Institute Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-white to-red-500">
                Real Outcomes
              </span>
            </h1>

            <p className="max-w-4xl mx-auto text-xl text-white mb-14">
              We deliver structured EDUQUAL pathways designed for professionals,
              combining practical learning, clear assessments, and complete
              academic support.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
              <Link
                href="/programmes"
                className="group inline-flex items-center gap-3 rounded-full bg-red-600 px-10 py-5 text-lg font-bold shadow-[0_0_40px_rgba(220,38,38,0.45)] hover:bg-red-500 transition"
              >
                Browse Programmes
                <ArrowUpRight className="h-5 w-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </Link>

              {/* <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 py-5 text-lg backdrop-blur-xl hover:bg-white/20 transition"
              >
                Contact Us
              </Link> */}
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap justify-center gap-4">
              <TrustPill icon={BadgeCheck} text="KHDA Approved" />
              <TrustPill icon={GraduationCap} text="EDUQUAL Levels 3/4/5" />
              <TrustPill icon={ShieldCheck} text="Quality Assured" />
              <TrustPill icon={MapPin} text="Dubai, UAE" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
    <section className="relative z-10 -mt-20 pb-24">
  <motion.div
    className="mx-auto text-center max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      show: {
        transition: {
          staggerChildren: 0.15,
        },
      },
    }}
  >
    {[
      { icon: Users, value: "4,500+", label: "Students Enrolled" },
      { icon: Award, value: "98%", label: "Success Rate" },
      { icon: TrendingUp, value: "85%", label: "Career Growth" },
      { icon: Building2, value: "10+", label: "Years Experience" },
    ].map((stat, i) => (
      <motion.div
        key={i}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
          },
        }}
        whileHover={{ y: -6 }}
        className="relative rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl shadow-[0_0_50px_rgba(220,38,38,0.25)]"
      >
        {/* Icon */}
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <stat.icon className="h-8 w-8 text-red-400 mb-4 mx-auto" />
        </motion.div>

        {/* Value */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="text-4xl font-bold"
        >
          {stat.value}
        </motion.p>

        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          className="text-sm text-white"
        >
          {stat.label}
        </motion.p>
      </motion.div>
    ))}
  </motion.div>
</section>


      {/* VALUES */}
    <motion.section
  className="relative z-10 py-24"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>

        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="font-serif text-5xl font-bold mb-6">
              Why Choose{" "}
              <span className="text-red-400">Metaverse Age</span>
            </h2>
            <p className="text-white text-lg">
             Metaverse Age Training Institute is an approved and permitted institution by Knowledge Human Development Authority Dubai - United Arab Emirates.

We are a training institute that aims to reshape the typical and conventional learning in response to the current needs of the modern world.


            </p>
          </div>

          <div className="grid gap-6">
            {[
              { icon: Zap, title: "Credibility First", desc: "Programmes aligned with quality standards and clear learning outcomes." },
              { icon: Target, title: "Career Focused", desc: "Practical learning designed to connect to real roles and skills." },
              { icon: TrendingUp, title: "Clear Progression", desc: "Clear progression across levels with structured modules and support." },
              { icon: Users, title: "Student Support", desc: "Responsive help from enrollment to completion and beyond." },
            ].map((v, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/15 to-white/5 p-8 backdrop-blur-xl shadow-[0_0_40px_rgba(220,38,38,0.25)]"
              >
                <div className="flex items-center gap-4 mb-3">
                  <v.icon className="h-8 w-8 text-red-400" />
                  <h3 className="text-xl font-bold">{v.title}</h3>
                </div>
                <p className="text-white">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
{/* PURPOSE / VISION / MISSION */}
<motion.section
  className="relative z-10 py-24"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>

  {/* Glow */}
  <div className="absolute inset-0">
    <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-red-600/25 blur-[180px]" />
    <div className="absolute right-1/4 bottom-0 h-[400px] w-[400px] rounded-full bg-purple-600/20 blur-[180px]" />
  </div>

  <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Heading */}
    <div className="text-center mb-20">
     

      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        Vision & Mission
      </h2>

      <p className="text-lg text-white max-w-2xl mx-auto">
        A clear direction that drives structured learning and real outcomes.
      </p>
    </div>

    {/* Cards */}
    <div className="grid lg:grid-cols-2 gap-10">
      {/* VISION */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-white/[0.14] to-white/[0.05] p-10 backdrop-blur-3xl">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-600/25 blur-[120px]" />

        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 border border-white/15">
            🧿
          </span>
          VISION
        </h3>

        <p className="text-white leading-relaxed text-lg">
          Metaverse Age Training Institute envisions to be a world-class institute
          for skills-based training, innovation, and social impact where students
          can make significant contributions to their chosen industries.
        </p>
      </div>

      {/* MISSION */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-white/[0.14] to-white/[0.05] p-10 backdrop-blur-3xl">
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-red-600/25 blur-[120px]" />

        <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
          <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-600/20 border border-white/15">
            🎗️
          </span>
          MISSION
        </h3>

        <p className="text-white leading-relaxed text-lg">
          Our mission is to provide high-quality skills-based training to students
          from diverse backgrounds, preparing them to be leaders in their chosen
          industries.
        </p>
      </div>
    </div>
  </div>
</motion.section>

{/* ACCREDITATION */}
<section className="relative py-28 bg-gradient-to-b from-black to-red-950/10">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-20">
      {/* <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black- px-5 py-2.5 backdrop-blur-xl mb-6">
        <span className="text-sm font-semibold text-white/90">
          Accreditation
        </span>
      </div> */}

      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
        Recognised. Approved.{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
          Trusted.
        </span>
      </h2>

      <p className="text-lg text-white max-w-3xl mx-auto">
        Our programmes are recognised through approvals and quality frameworks
        that support credible outcomes.
      </p>
    </div>

    {/* Accreditation Cards */}
    <div className="grid lg:grid-cols-2 gap-10 mb-16">
      {/* KHDA */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/[0.14] to-white/[0.05] p-10 backdrop-blur-3xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/25 blur-[100px]" />

        <h3 className="text-xl font-bold mb-2">KHDA</h3>
        <p className="text-sm text-white mb-4">
          Knowledge and Human Development Authority (Dubai)
        </p>

        <p className="text-white leading-relaxed">
          Knowledge and Human Development Authority (KHDA) is a leading educational
          regulatory authority in Dubai, dedicated to fostering excellence in
          education and human development. Metaverse Age Training Institute is a
          KHDA approved institute committed to delivering outstanding educational
          opportunities.
        </p>
      </div>

      {/* EDUQUAL */}
      <div className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/[0.14] to-white/[0.05] p-10 backdrop-blur-3xl">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-purple-600/25 blur-[100px]" />

        <h3 className="text-xl font-bold mb-2">EDUQUAL</h3>
        <p className="text-sm text-white mb-4">
          Awarding organisation (UK)
        </p>

        <p className="text-white leading-relaxed">
          EduQual UK LTD is a globally recognized awarding organization
          specializing in high-quality vocational and technical education.
          Metaverse Age Training Institute is an approved institute by EduQual UK,
          ensuring learners can trust the quality and international recognition of
          their qualifications.
        </p>
      </div>
    </div>

    {/* KHDA Permits */}
    <div className="rounded-[36px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-10 backdrop-blur-3xl">
      <h3 className="text-3xl font-bold mb-2">KHDA Permits</h3>
      <p className="text-white mb-10">
        Official approvals for our programmes
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {["/permit-1.jpg", "/permit-2.jpg"].map((src, i) => (
          <a
            key={i}
            href={src}
            target="_blank"
            rel="noreferrer"
            className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl"
          >
            <div className="relative h-[420px]">
              <Image
                src={src}
                alt={`KHDA Permit ${i + 1}`}
                fill
                className="object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm font-bold text-white">
                  KHDA Permit {i + 1}
                </p>
                <p className="text-xs text-white">
                  Click to view full size
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</section>

      {/* FINAL CTA */}

 
    </main>
  );
}

function TrustPill({ icon: Icon, text }: any) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm backdrop-blur-xl shadow-[0_0_30px_rgba(220,38,38,0.35)]">
      <Icon className="h-4 w-4 text-red-400" />
      {text}
    </span>
  );
}
