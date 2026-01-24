"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


import {
  ArrowUpRight,
  Sparkles,
  MapPin,
  Target,
  BadgeCheck,
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
  TrendingUp,
  Building2,
  Eye,
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

      {/* AMBIENT GLOWS */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-red-600/30 blur-[200px]" />
        <div className="absolute top-40 -right-40 h-[650px] w-[650px] rounded-full bg-purple-600/25 blur-[220px]" />
        <div className="absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[220px]" />
      </div>

      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{ opacity, scale }}
        className="relative pt-32 pb-32 z-10"
      >
        <div className="absolute inset-0">
          <Image
            src="/metaverse-bg.jpg"
            alt="About Metaverse Age"
            fill
            priority
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-red-950/60" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-red-500/40 bg-red-600/90 px-6 py-3 mb-8 shadow-[0_0_40px_rgba(220,38,38,0.5)]">
              <Sparkles className="h-5 w-5" />
              <span className="text-sm font-bold tracking-wide">
                ABOUT METAVERSE AGE
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-7xl font-bold mb-8">
              Education Built for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-white">
                Real Outcomes
              </span>
            </h1>

            <p className="max-w-3xl mx-auto text-xl text-white mb-14">
              A KHDA approved institute delivering structured Eduqual pathways
              designed for clarity, credibility, and career progression.
            </p>

            <Link
              href="/programmes"
              className="inline-flex items-center gap-3 rounded-full bg-red-600 px-10 py-5 text-lg font-bold hover:bg-red-500 transition shadow-[0_0_40px_rgba(220,38,38,0.45)]"
            >
              Browse Programmes
              <ArrowUpRight className="h-5 w-5" />
            </Link>

            <div className="mt-14 flex flex-wrap justify-center gap-4">
              <TrustPill icon={BadgeCheck} text="KHDA Approved" />
              <TrustPill icon={GraduationCap} text="Eduqual Levels 3–5" />
              <TrustPill icon={ShieldCheck} text="Quality Assured" />
              <TrustPill icon={MapPin} text="Dubai, UAE" />
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* STATS */}
      <section className="relative z-10 -mt-20 pb-28">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Users, value: "1,000+", label: "Students Enrolled" },
            { icon: Award, value: "98%", label: "Success Rate" },
            { icon: TrendingUp, value: "85%", label: "Career Growth" },
            { icon: Building2, value: "10+", label: "Years Experience" },
          ].map((stat, i) => (
            <div
              key={i}
              className="rounded-3xl border border-white/20 bg-white/10 p-8 text-center backdrop-blur-xl shadow-[0_0_40px_rgba(220,38,38,0.25)]"
            >
              <stat.icon className="h-8 w-8 text-red-400 mx-auto mb-4" />
              <p className="text-4xl font-bold">{stat.value}</p>
              <p className="text-sm text-white">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="relative z-10 py-28">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-serif text-5xl font-bold mb-6">
              Why <span className="text-red-400">Metaverse Age Training Institute</span>
            </h2>
            <p className="text-lg text-white/90 mb-10">
              Metaverse Age Training Institute is an approved and permitted institution by Knowledge Human Development Authority Dubai - United Arab Emirates. It is a training institute that aims to reshape the typical and the conventional learning in response to the current needs of the modern world.


            </p>

            <ul className="space-y-4">
              {[
                "KHDA approved training institute",
                "UK awarded Eduqual qualifications",
                "Clear academic progression",
                "Dedicated learner support",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {[
              { icon: ShieldCheck, title: "Trusted & Approved" },
              { icon: Target, title: "Career Focused" },
              { icon: TrendingUp, title: "Clear Progression" },
              { icon: Users, title: "Student Support" },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-3xl border border-white/15 bg-gradient-to-br from-white/15 to-white/5 p-8 backdrop-blur-xl hover:-translate-y-2 transition"
              >
                <item.icon className="h-9 w-9 text-red-400 mb-4" />
                <h3 className="text-xl font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="relative z-10 py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14">
          <div className="rounded-[36px] border border-white/15 bg-white/10 p-12 backdrop-blur-3xl">
            <Eye className="h-10 w-10 text-red-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
            <p className="text-lg text-white">
              Metaverse Age Training Institute envisions to be a world-class institute for skills-based training, innovation, and social impact where students can make significant contributions to their chosen industries.

.
            </p>
          </div>

          <div className="rounded-[36px] border border-white/15 bg-white/10 p-12 backdrop-blur-3xl">
            <Target className="h-10 w-10 text-red-400 mb-6" />
            <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
            <p className="text-lg text-white">
       Our mission is to provide high-quality skills-based training to students from diverse backgrounds, preparing them to be leaders in their chosen industries.


            </p>
          </div>
        </div>
      </section>

      {/* ACCREDITATION */}
<section className="relative z-10  bg-gradient-to-b from-black to-red-950/10">
  <div className="mx-auto max-w-7xl px-6">

    {/* Heading */}
    <div className="text-center mb-24">
      <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
        Accreditation &{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-red-400">
          Recognition
        </span>
      </h2>
      <p className="max-w-3xl mx-auto text-lg text-white">
        Our institutional approvals and awarding body partnerships reflect
        our commitment to quality, credibility, and internationally
        recognised education.
      </p>
    </div>

    {/* Accreditation Cards */}
    <div className="grid lg:grid-cols-2 gap-12">

      {/* KHDA */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-white/[0.14] to-white/[0.05] p-12 backdrop-blur-3xl">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-600/25 blur-[120px]" />

        <h3 className="text-2xl font-bold mb-2">
          Knowledge and Human Development Authority (KHDA)
        </h3>

        <p className="text-sm uppercase tracking-wide text-red-400 mb-6">
          Dubai – United Arab Emirates
        </p>

        <div className="space-y-5 text-white leading-relaxed">
          <p>
            Knowledge and Human Development Authority (KHDA) is the
            educational regulatory authority of Dubai, responsible for
            ensuring excellence in education and human development across
            the Emirate.
          </p>

          <p>
            KHDA plays a pivotal role in shaping Dubai’s educational
            ecosystem by enforcing quality standards, promoting innovation,
            and supporting lifelong learning through structured evaluation
            and accreditation processes.
          </p>

          <p>
            <strong>Metaverse Age Training Institute</strong> is a
            <strong> KHDA approved institute</strong>, committed to delivering
            high-quality technical and vocational education aligned with
            regulatory requirements and industry needs in the UAE.
          </p>
        </div>
      </div>

      {/* EDUQUAL */}
      <div className="relative overflow-hidden rounded-[36px] border border-white/15 bg-gradient-to-br from-white/[0.14] to-white/[0.05] p-12 backdrop-blur-3xl">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-purple-600/25 blur-[120px]" />

        <h3 className="text-2xl font-bold mb-2">
           Eduqual UK LTD
        </h3>

        <p className="text-sm uppercase tracking-wide text-red-400 mb-6">
          UK Awarding Organisation
        </p>

        <div className="space-y-5 text-white leading-relaxed">
          <p>
            Eduqual UK LTD is a globally recognised awarding organisation
            specialising in vocational and technical education, committed
            to maintaining rigorous academic standards and excellence.
          </p>

          <p>
             Eduqual is a regulated awarding body, approved by
            <strong> SQA Accreditation</strong>, the UK’s national
            qualifications regulator, and is a full member of the
            <strong> Federation of Awarding Bodies (FAB)</strong>.
          </p>

          <p>
            Metaverse Age Training Institute is an
            <strong> approved centre of  Eduqual UK</strong>. This approval
            reflects the Institute’s adherence to Eduqual’s quality
            assurance processes, assessment standards, and educational
            benchmarks.
          </p>

          <p>
            Learners enrolled in Eduqual-approved programmes can trust
            the international recognition, credibility, and academic
            value of their qualifications.
          </p>
        </div>
      </div>

    </div>
  </div>
</section>


      {/* KHDA PERMITS */}
      <section className="relative z-10 py-28 bg-gradient-to-b from-black to-red-950/10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
              KHDA <span className="text-red-400">Permits</span>
            </h2>
            <p className="text-white">
              Official approvals issued by Knowledge and Human Development Authority.
              
            </p>
          </div>

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
                    <p className="text-xs text-white/80">
                      Click to view full size
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
      

    </main>
  );
}

function TrustPill({ icon: Icon, text }: any) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm backdrop-blur-xl">
      <Icon className="h-4 w-4 text-red-400" />
      {text}
    </span>
  );
}
