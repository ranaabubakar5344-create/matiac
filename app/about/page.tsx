// app/about/page.tsx
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
  Zap,
  TrendingUp,
  Building2,
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
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* PREMIUM HERO */}
      <motion.section 
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative overflow-hidden pt-28 pb-20 lg:pt-40 lg:pb-28"
      >
        {/* Cinematic Background */}
        <div className="absolute inset-0">
          <Image
            src="/metaverse-bg.jpg"
            alt="About Us"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-30"
          />
          
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/95 to-red-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
          
          {/* Animated orbs */}
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
          
          <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-gradient-to-r from-white/10 to-white/5 px-6 py-3 backdrop-blur-2xl mb-8"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="h-5 w-5 text-red-400" />
              </motion.div>
              <span className="text-sm font-bold text-white/95 tracking-wide">
                ABOUT METAVERSE AGE
              </span>
            </motion.div>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
              A Modern Institute Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400">
                Real Outcomes
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-white/70 leading-relaxed max-w-4xl mx-auto mb-12">
              We deliver structured EDUQUAL pathways designed for working professionals — 
              practical learning, clear assessments, and end-to-end support from admissions to completion.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
              <Link
                href="/programmes"
                className="group inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-10 py-5 text-lg font-bold text-white overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_20px_60px_rgba(220,38,38,0.4)]"
              >
                <span className="relative flex items-center gap-3">
                  Browse Programmes
                  <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:bg-white/20 hover:border-white/50 hover:scale-105"
              >
                Contact Us
              </Link>
            </div>

            {/* Trust Pills */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <TrustPill icon={BadgeCheck} text="KHDA Approved" />
              <TrustPill icon={GraduationCap} text="EDUQUAL Levels 3/4/5" />
              <TrustPill icon={ShieldCheck} text="Quality Assured" />
              <TrustPill icon={MapPin} text="Dubai, UAE" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS SECTION - Floating Cards */}
      <section className="relative -mt-16 pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { icon: Users, value: "4,500+", label: "Students Enrolled" },
              { icon: Award, value: "98%", label: "Success Rate" },
              { icon: TrendingUp, value: "85%", label: "Career Growth" },
              { icon: Building2, value: "10+", label: "Years Experience" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-8 backdrop-blur-3xl"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-red-600/20 blur-3xl" />
                <stat.icon className="h-8 w-8 text-red-400 mb-4" />
                <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm text-white/60 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE - Split Layout */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Story */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl mb-6">
                <Sparkles className="h-4 w-4 text-red-400" />
                <span className="text-sm font-semibold text-white/90">Our Story</span>
              </div>

              <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
                Built to Make Learning{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                  Premium & Structured
                </span>
              </h2>

              <p className="text-lg text-white/70 leading-relaxed mb-6">
                Metaverse Age Training Institute is an approved and permitted institution by 
                Knowledge Human Development Authority Dubai - United Arab Emirates.
              </p>

              <p className="text-lg text-white/70 leading-relaxed mb-8">
                We are a training institute that aims to reshape the typical and conventional 
                learning in response to the current needs of the modern world.
              </p>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 backdrop-blur-xl">
                <MapPin className="h-5 w-5 text-red-400" />
                <span className="text-white/90 font-medium">Dubai, United Arab Emirates</span>
              </div>
            </motion.div>

            {/* Right - Values Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid gap-6"
            >
              {[
                {
                  icon: Zap,
                  title: "Credibility First",
                  desc: "Programmes aligned with quality standards and clear learning outcomes.",
                  color: "from-yellow-600/20 to-yellow-600/5",
                },
                {
                  icon: Target,
                  title: "Career Relevance",
                  desc: "Practical learning designed to connect to real roles and skills.",
                  color: "from-blue-600/20 to-blue-600/5",
                },
                {
                  icon: TrendingUp,
                  title: "Progression Pathways",
                  desc: "Clear progression across levels with structured modules and support.",
                  color: "from-purple-600/20 to-purple-600/5",
                },
                {
                  icon: Users,
                  title: "Student Support",
                  desc: "Responsive help from enrollment to completion and beyond.",
                  color: "from-red-600/20 to-red-600/5",
                },
              ].map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-8 backdrop-blur-3xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
                  
                  <div className="relative">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br ${value.color}`}>
                        <value.icon className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{value.title}</h3>
                    </div>
                    <p className="text-white/70 leading-relaxed">{value.desc}</p>
                  </div>
                </motion.div>
              ))}

              {/* CTA Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-3xl border border-white/15 bg-gradient-to-br from-red-600/20 to-red-600/5 p-8 backdrop-blur-3xl"
              >
                <p className="text-white/90 font-medium mb-4">Want a recommendation?</p>
                <p className="text-white/70 mb-6">We'll help you choose the right EDUQUAL level.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-red-600 px-6 py-3 text-sm font-bold text-white hover:bg-red-500 transition"
                >
                  Contact Admissions
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* VISION & MISSION - Side by Side Cards */}
      <section className="relative py-24 bg-gradient-to-b from-black to-red-950/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl mb-6">
              <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-sm font-semibold text-white/90">Purpose</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Vision & Mission
            </h2>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              A clear direction that drives structured learning and real outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="relative overflow-hidden rounded-[40px] border border-white/15 bg-gradient-to-br from-white/[0.15] to-white/[0.05] p-10 lg:p-12 backdrop-blur-3xl"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-[100px]" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-blue-600/20 to-blue-600/5">
                    <Eye className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">VISION</h3>
                </div>

                <p className="text-lg text-white/80 leading-relaxed">
                  Metaverse Age Training Institute envisions to be a world-class institute for 
                  skills-based training, innovation, and social impact where students can make 
                  significant contributions to their chosen industries.
                </p>
              </div>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -8 }}
              className="relative overflow-hidden rounded-[40px] border border-white/15 bg-gradient-to-br from-white/[0.15] to-white/[0.05] p-10 lg:p-12 backdrop-blur-3xl"
            >
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-red-600/20 blur-[100px]" />
              
              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br from-red-600/20 to-red-600/5">
                    <Target className="h-8 w-8 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">MISSION</h3>
                </div>

                <p className="text-lg text-white/80 leading-relaxed">
                  Our mission is to provide high-quality skills-based training to students from 
                  diverse backgrounds, preparing them to be leaders in their chosen industries.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ACCREDITATION - Premium Layout */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(220,38,38,0.08),transparent_70%)]" />
        
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 backdrop-blur-xl mb-6">
              <BadgeCheck className="h-4 w-4 text-red-400" />
              <span className="text-sm font-semibold text-white/90">Accreditation</span>
            </div>

            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Recognised. Approved.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
                Trusted.
              </span>
            </h2>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Our programmes are recognised through approvals and quality frameworks that support credible outcomes.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* KHDA */}
            <AccreditationCard
              icon={BadgeCheck}
              title="KHDA"
              subtitle="Knowledge and Human Development Authority (Dubai)"
              content="Knowledge and Human Development Authority (KHDA) is a leading educational regulatory authority in Dubai, dedicated to fostering excellence in education and human development. Metaverse Age Training Institute is a KHDA approved institute committed to delivering outstanding educational opportunities."
              color="from-red-600/20 to-red-600/5"
            />

            {/* EDUQUAL */}
            <AccreditationCard
              icon={ShieldCheck}
              title="EDUQUAL"
              subtitle="Awarding organisation (UK)"
              content="EduQual UK LTD is a globally recognized awarding organization specializing in high-quality vocational and technical education. Metaverse Age Training Institute is an approved institute by EduQual UK, ensuring learners can trust the quality and international recognition of their qualifications."
              color="from-purple-600/20 to-purple-600/5"
            />
          </div>

          {/* Permits Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-10 backdrop-blur-3xl"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-white mb-3">KHDA Permits</h3>
              <p className="text-white/60">Official approvals for our programmes</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <PermitCard src="/permit-1.jpg" label="KHDA Permit 1" />
              <PermitCard src="/permit-2.jpg" label="KHDA Permit 2" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[48px] border border-white/15 bg-gradient-to-br from-white/[0.15] to-white/[0.05] p-12 lg:p-16 backdrop-blur-3xl"
          >
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-red-600/30 blur-[120px]" />
            
            <div className="relative text-center max-w-3xl mx-auto">
              <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Start Your Pathway?
              </h3>
              <p className="text-xl text-white/70 mb-10">
                Apply now or speak to an advisor for entry requirements and intake guidance.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/apply-now"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-10 py-5 text-lg font-bold text-white hover:bg-red-500 transition hover:scale-105"
                >
                  Apply Now
                  <ArrowUpRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center rounded-full border-2 border-white/30 bg-white/10 px-10 py-5 text-lg font-semibold text-white backdrop-blur-xl hover:bg-white/20 transition hover:scale-105"
                >
                  View Programmes
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

function TrustPill({ icon: Icon, text }: { icon: any; text: string }) {
  return (
    <motion.span
      whileHover={{ scale: 1.05 }}
      className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur-xl"
    >
      <Icon className="h-4 w-4 text-red-400" />
      {text}
    </motion.span>
  );
}

function AccreditationCard({
  icon: Icon,
  title,
  subtitle,
  content,
  color,
}: {
  icon: any;
  title: string;
  subtitle: string;
  content: string;
  color: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02, y: -4 }}
      className="relative overflow-hidden rounded-[32px] border border-white/15 bg-gradient-to-br from-white/[0.12] to-white/[0.04] p-8 lg:p-10 backdrop-blur-3xl"
    >
      <div className={`absolute -right-20 -top-20 h-56 w-56 rounded-full bg-gradient-to-br ${color} blur-[80px]`} />
      
      <div className="relative">
        <div className="flex items-center gap-4 mb-6">
          <div className={`flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-br ${color}`}>
            <Icon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">{title}</h3>
            <p className="text-xs text-white/60">{subtitle}</p>
          </div>
        </div>

        <p className="text-white/75 leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
}

function PermitCard({ src, label }: { src: string; label: string }) {
  return (
    <motion.a
      href={src}
      target="_blank"
      rel="noreferrer"
      whileHover={{ scale: 1.02, y: -4 }}
      className="group relative overflow-hidden rounded-3xl border border-white/15 bg-black/40 backdrop-blur-xl"
    >
      <div className="relative h-[520px] sm:h-[640px]">
        <Image
          src={src}
          alt={label}
          fill
          sizes="(max-width: 640px) 100vw, 50vw"
          className="object-contain p-4"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-sm font-bold text-white mb-1">{label}</p>
          <p className="text-xs text-white/60">Click to view full size</p>
        </div>
      </div>
    </motion.a>
  );
}