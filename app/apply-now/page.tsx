"use client";

import { useState } from "react";

export default function ApplyNowPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section className="relative min-h-screen overflow-hidden
      bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a] text-white">

      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute inset-0
        bg-[radial-gradient(700px_circle_at_20%_15%,rgba(239,68,68,0.22),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0
        bg-[radial-gradient(600px_circle_at_80%_10%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0
        bg-gradient-to-b from-black/60 via-transparent to-black/80" />

      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* HEADER */}
        <div className="max-w-3xl mb-20">
          <span className="inline-flex items-center gap-3
            rounded-full bg-red-600/15 px-6 py-2
            text-sm font-semibold text-red-400 ring-1 ring-red-500/30">
            Admissions Open
          </span>

          <h1 className="mt-6 text-5xl sm:text-6xl font-extrabold leading-tight">
            Apply for Your <br />
            <span className="text-transparent bg-clip-text
              bg-gradient-to-r from-red-500 to-red-700">
              Next Career Move
            </span>
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-xl">
            Industry-focused programmes designed to elevate your skills,
            confidence, and future.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* LEFT INFO */}
          <div className="space-y-10">
            <div className="rounded-3xl bg-[#151515]
              border border-white/10 p-8 shadow-xl">
              <h3 className="text-2xl font-bold">
                Why Apply With Us?
              </h3>
              <p className="mt-3 text-white/70">
                Real-world learning with real career outcomes.
              </p>

              <ul className="mt-8 space-y-5">
                {[
                  "KHDA Approved & Recognised",
                  "Career-Oriented Programmes",
                  "Hands-on Practical Learning",
                  "Expert Faculty & Mentors",
                  "Globally Valued Certificates",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-red-500" />
                    <span className="text-white/85 text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-gradient-to-r
              from-red-600/15 to-red-700/5
              border border-red-600/30 p-6">
              <p className="text-lg font-semibold">
                Limited Seats Available
              </p>
              <p className="mt-2 text-white/70">
                Apply early to secure your place.
              </p>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="relative">
            <div className="absolute -inset-2 rounded-[32px]
              bg-gradient-to-br from-red-600/40 via-red-600/10 to-transparent
              blur-2xl" />

            <div className="relative rounded-[28px]
              bg-[#141414]
              border border-white/10
              shadow-2xl p-8 sm:p-10">

              {/* CONDITIONAL CONTENT */}
              {submitted ? (
                /* SUCCESS MESSAGE */
                <div className="flex flex-col items-center text-center py-16 px-6">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center
                    rounded-full bg-red-600/20 ring-2 ring-red-500/40">
                    <span className="text-3xl">✓</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold">
                    Application Submitted
                  </h3>

                  <p className="mt-4 max-w-md text-white/70 text-lg">
                    Thank you for applying. Our team will contact you shortly
                    to guide you through the next steps.
                  </p>

                  <a
                    href="/"
                    className="mt-8 inline-flex items-center gap-3
                      rounded-full px-8 py-4
                      bg-gradient-to-r from-red-600 to-red-700
                      text-white font-semibold
                      shadow-xl hover:scale-105 transition"
                  >
                    Back to Home →
                  </a>
                </div>
              ) : (
                /* FORM */
                <>
                  <h3 className="text-2xl font-bold mb-8">
                    Application Form
                  </h3>

                  <form onSubmit={onSubmit} className="space-y-6">
                    <input
                      required
                      placeholder="Full Name"
                      className="w-full rounded-xl bg-black/60
                        border border-white/15 px-5 py-4
                        text-white placeholder-white/40
                        focus:outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <input
                      required
                      type="email"
                      placeholder="Email Address"
                      className="w-full rounded-xl bg-black/60
                        border border-white/15 px-5 py-4
                        text-white placeholder-white/40
                        focus:outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <input
                      required
                      placeholder="Phone Number"
                      className="w-full rounded-xl bg-black/60
                        border border-white/15 px-5 py-4
                        text-white placeholder-white/40
                        focus:outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <select
                      required
                      className="w-full rounded-xl bg-black/60
                        border border-white/15 px-5 py-4
                        text-white focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                      <option value="">Select Programme</option>
                      <option>AI & Machine Learning</option>
                      <option>Cyber Security</option>
                      <option>Digital Marketing</option>
                      <option>Business Management</option>
                      <option>Psychology</option>
                    </select>

                    <textarea
                      rows={4}
                      placeholder="Your Message (optional)"
                      className="w-full rounded-xl bg-black/60
                        border border-white/15 px-5 py-4
                        text-white placeholder-white/40
                        focus:outline-none focus:ring-2 focus:ring-red-600"
                    />

                    <button
                      disabled={loading}
                      className="w-full rounded-full
                        bg-gradient-to-r from-red-600 to-red-700
                        py-4 text-lg font-bold
                        shadow-[0_0_35px_rgba(239,68,68,0.45)]
                        hover:scale-[1.03] transition-transform
                        disabled:opacity-60"
                    >
                      {loading ? "Submitting..." : "Apply Now"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
 
     </section>
  );
}
