// components/WhyChooseUsA.tsx
"use client";

import Link from "next/link";
import {
  BadgeCheck,
  CalendarClock,
  Briefcase,
  Users,
  Headphones,
  BookOpenCheck,
} from "lucide-react";
import ParticlesLayer from "./ParticlesLayer";

const items = [
  {
    title: "KHDA Approved & Trusted",
    desc: "Programmes aligned with quality standards and recognised learning outcomes.",
    Icon: BadgeCheck,
  },
  {
    title: "Flexible Schedules",
    desc: "Evening and weekend options designed for working professionals.",
    Icon: CalendarClock,
  },
  {
    title: "Career-Oriented Curriculum",
    desc: "Practical learning with outcomes that connect to real roles and skills.",
    Icon: Briefcase,
  },
  {
    title: "Experienced Faculty",
    desc: "Qualified instructors and mentors who guide you through each level.",
    Icon: Users,
  },
  {
    title: "Structured Pathways",
    desc: "Clear progression across levels with structured modules and support.",
    Icon: BookOpenCheck,
  },
  {
    title: "Student Support",
    desc: "Responsive help from enrollment to completion and beyond.",
    Icon: Headphones,
  },
];

export default function WhyChooseUsA() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* ✅ Particles (base layer) */}
  <ParticlesLayer className="pointer-events-none absolute inset-0 z-0" />

      {/* ✅ Overlays (keep slightly transparent so particles remain visible) */}
    <div className="absolute inset-0 bg-[radial-gradient(700px_circle_at_30%_40%,rgba(239,68,68,0.45),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(500px_circle_at_50%_70%,rgba(168,85,247,0.25),transparent_65%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_70%_30%,rgba(59,130,246,0.35),transparent_60%)]" />


      {/* ✅ Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* Left */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2  px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              WHY METAVERSE
            </div>

            <h2 className="mt-5 font-bold text-5xl sm:text-5xl leading-[1] leading-tight">
             
              Study with confidence.
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed text-base sm:text-lg">
              A professional learning experience built on credibility, structure,
              and practical outcomes.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <Link
                href="/programmes"
                className="rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
              >
                View Programmes
              </Link>
              <Link
                href="/contact"
                className="rounded-full bg-red-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-red-500 transition"
              >
                Speak to an Advisor
              </Link>
            </div>

            {/* Small stats */}
            <div className="mt-10 grid grid-cols-3 gap-3">
              {[
                { k: "Approved", v: "KHDA" },
                { k: "Levels", v: "3/4/5" },
                { k: "Support", v: "End-to-end" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                >
                  <div className="text-sm font-semibold text-white">{s.v}</div>
                  <div className="mt-1 text-xs text-white/60">{s.k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
              <div className="px-6 py-5 border-b border-white/10">
                <p className="text-sm text-white/70">
                  What makes our programmes different
                </p>
              </div>

              <div className="divide-y divide-white/10">
                {items.map(({ title, desc, Icon }, idx) => (
                  <details
                    key={title}
                    className="group px-6 py-5 open:bg-white/[0.03]"
                    open={idx === 0}
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl border border-white/10 bg-black/30 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-red-400" />
                        </div>
                        <div className="font-semibold text-white">{title}</div>
                      </div>

                      <span className="text-white/60 transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="mt-3 pl-14 text-sm leading-relaxed text-white/70">
                      {desc}
                    </p>
                  </details>
                ))}
              </div>
            </div>

           
          </div>
        </div>
      </div>
      
          </section>
  
  );
}
