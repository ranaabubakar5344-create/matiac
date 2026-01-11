"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  q: string;
  a: string;
};

const FAQS: FAQ[] = [
  {
    q: "Are your programmes KHDA approved?",
    a: "Yes. Metaverse Age Training Institute is approved and permitted by KHDA Dubai, ensuring compliance with local education regulations.",
  },
  {
    q: "What is EDUQUAL and is it recognised?",
    a: "EDUQUAL is a UK-based awarding organisation. Our programmes follow EDUQUAL frameworks and are recognised internationally.",
  },
  {
    q: "Can I study while working full-time?",
    a: "Absolutely. Our programmes are designed for working professionals with flexible schedules and structured delivery.",
  },
  {
    q: "What are the entry requirements?",
    a: "Entry requirements depend on the level of study. Our admissions team will guide you based on your qualifications and experience.",
  },
  {
    q: "Do you offer progression after Level 4?",
    a: "Yes. Learners can progress from Level 3 to Level 4 and further to Level 5 depending on eligibility.",
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative py-28 bg-black">
      {/* background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(239,68,68,0.15),transparent_65%)]" />

      <div className="relative mx-auto max-w-4xl px-6">
        {/* heading */}
        <div className="text-center mb-16">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm text-white/80 backdrop-blur">
            Help Center
          </p>

           <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
    Frequently Asked{" "}
    <span className="relative text-red-400">
      Questions
      <span className="absolute left-0 -bottom-2 h-[3px] w-full bg-red-500 rounded-full" />
    </span>
  </h2>

          <p className="mt-4 text-white/65 text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* accordion */}
        <div className="space-y-4">
          {FAQS.map((item, i) => {
            const isOpen = open === i;

            return (
              <div
                key={i}
                className={[
                  "group relative overflow-hidden rounded-3xl border transition-all",
                  isOpen
                    ? "border-red-500/40 bg-gradient-to-br from-red-600/10 to-white/[0.03]"
                    : "border-white/10 bg-white/[0.04]",
                ].join(" ")}
              >
                {/* glow */}
                {isOpen && (
                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-red-500/30 blur-[120px]" />
                )}

                {/* header */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="relative flex w-full items-center justify-between gap-4 px-6 py-6 text-left"
                >
                  <span className="text-lg font-semibold text-white">
                    {item.q}
                  </span>

                  <ChevronDown
                    className={[
                      "h-6 w-6 shrink-0 transition-transform duration-300",
                      isOpen ? "rotate-180 text-red-400" : "text-white/70",
                    ].join(" ")}
                  />
                </button>

                {/* content */}
                <div
                  className={[
                    "grid transition-all duration-500 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-white/70 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* bottom note */}
        <div className="mt-14 text-center">
          <p className="text-white/60 mb-4">
            Still have questions?
          </p>
          <a
            href="/contact"
            className="inline-flex rounded-full bg-red-600 px-8 py-3 text-sm font-bold text-white hover:bg-red-500 transition"
          >
            Talk to an Advisor
          </a>
        </div>
      </div>
    </section>
  );
}
