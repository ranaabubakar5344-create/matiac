"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Sparkles, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // simulate API call
    await new Promise((r) => setTimeout(r, 1200));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* ================= HERO ================= */}
      <section className="relative pt-32 pb-24">
        <div className="absolute inset-0 bg-gradient-to-br from-red-600/20 via-black to-black" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 backdrop-blur-xl mb-6">
            <Sparkles className="h-4 w-4 text-red-400" />
            <span className="text-sm font-semibold">CONTACT US</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Let’s Talk About Your{" "}
            <span className="bg-gradient-to-r from-red-400 to-red-500 bg-clip-text text-transparent">
              Future
            </span>
          </h1>

          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Speak with our admissions team for guidance on programmes and intakes.
          </p>
        </div>
      </section>

      {/* ================= CONTACT INFO ================= */}
      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-3">
          <ContactCard icon={<Phone />} title="Call Us" value="+971 55 460 2947" />
          <ContactCard icon={<Mail />} title="Email" value="admissions@metaverseage.ae" />
          <ContactCard icon={<MapPin />} title="Visit Us" value="Dubai, United Arab Emirates" />
        </div>
      </section>

      {/* ================= FORM ================= */}
      <section className="pb-32">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-[32px] border border-white/15 bg-white/5 backdrop-blur-xl p-8 sm:p-12">

            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Send Us a Message
            </h2>

            {!submitted ? (
              <form onSubmit={onSubmit} className="grid gap-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <Input placeholder="Your Name" />
                  <Input placeholder="Your Email" />
                </div>

                <Input placeholder="Phone Number" />

                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-500 px-8 py-4 font-bold text-white transition shadow-lg shadow-red-600/30 w-fit disabled:opacity-60"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </button>
              </form>
            ) : (
              /* ✅ SUCCESS MESSAGE */
              <div className="flex flex-col items-center text-center py-16">
                <CheckCircle className="h-16 w-16 text-green-400 mb-6" />
                <h3 className="text-2xl font-bold mb-2">
                  Message Sent Successfully
                </h3>
                <p className="text-white/70 max-w-md">
                  Thank you for contacting us. Our admissions team will get back
                  to you shortly.
                </p>
              </div>
            )}

          </div>
        </div>
      </section>
    </main>
  );
}

/* ================= COMPONENTS ================= */

function ContactCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-xl p-8 text-center">
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-black/40 text-red-400">
        {icon}
      </div>
      <p className="text-lg font-bold mb-1">{title}</p>
      <p className="text-white/70">{value}</p>
    </div>
  );
}

function Input({ placeholder }: { placeholder: string }) {
  return (
    <input
      placeholder={placeholder}
      className="w-full rounded-2xl border border-white/15 bg-black/40 px-5 py-4 text-white placeholder:text-white/40 outline-none focus:border-white/30 transition"
    />
  );
}
