// components/OutcomesCareerRoles.tsx
import Link from "next/link";
import {
  Briefcase,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
  ArrowRight,
  GraduationCap,
  ClipboardList,
  Users2,
} from "lucide-react";

const outcomes = [
  "Job-ready skills with practical tasks and real scenarios",
  "Clear learning pathway (levels + structured modules)",
  "Portfolio / evidence of learning (projects, case tasks)",
  "Guidance from faculty + support until completion",
  "Recognised certificate upon successful completion",
];

const roles = [
  {
    title: "Administrative Assistant",
    desc: "Office coordination, documentation, scheduling, and communication.",
    Icon: ClipboardList,
    tags: ["Operations", "MS Office", "Communication"],
  },
  {
    title: "HR Assistant",
    desc: "Hiring support, onboarding, attendance and basic HR documentation.",
    Icon: Users2,
    tags: ["Recruitment", "HR Ops", "People"],
  },
  {
    title: "Customer Service Executive",
    desc: "Client handling, ticketing, service quality and conflict resolution.",
    Icon: Briefcase,
    tags: ["Support", "CRM", "Service"],
  },
  {
    title: "Sales Coordinator",
    desc: "Lead follow-ups, reporting, coordination between sales and ops.",
    Icon: TrendingUp,
    tags: ["Sales", "Reporting", "Coordination"],
  },
  {
    title: "Team Supervisor (Entry-level)",
    desc: "Basic leadership, task allocation, daily reporting and team support.",
    Icon: Target,
    tags: ["Leadership", "KPIs", "Teamwork"],
  },
  {
    title: "Training / Learning Assistant",
    desc: "Support sessions, learning schedules, assessments and tracking.",
    Icon: GraduationCap,
    tags: ["Training", "Tracking", "Support"],
  },
];

const pathway = [
  {
    k: "Learn",
    v: "Concepts + guided lessons",
  },
  {
    k: "Practice",
    v: "Tasks, mini-projects & case scenarios",
  },
  {
    k: "Prove",
    v: "Assessment + certificate outcome",
  },
];

export default function OutcomesCareerRoles() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      {/* subtle premium background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_18%_10%,rgba(255,255,255,0.10),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_85%_15%,rgba(239,68,68,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          {/* LEFT */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80">
              <span className="h-2 w-2 rounded-full bg-red-500" />
              Outcomes & Career Roles
            </div>

            <h2 className="mt-5 font-serif text-4xl sm:text-5xl tracking-tight">
              Learn skills that map to real jobs.
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed text-base sm:text-lg">
              Clear outcomes, structured practice, and a pathway designed to
              move you from learning to workplace readiness.
            </p>

            {/* outcomes list */}
            <ul className="mt-7 space-y-3">
              {outcomes.map((t) => (
                <li key={t} className="flex gap-3 text-sm sm:text-base text-white/80">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-400 shrink-0" />
                  <span className="leading-relaxed">{t}</span>
                </li>
              ))}
            </ul>

            {/* mini pathway */}
            <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-red-400" />
                <p className="text-sm font-semibold">Structured Journey</p>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-3">
                {pathway.map((p) => (
                  <div
                    key={p.k}
                    className="rounded-2xl border border-white/10 bg-black/30 p-4"
                  >
                    <div className="text-sm font-semibold text-white">{p.k}</div>
                    <div className="mt-1 text-xs text-white/60">{p.v}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/programmes"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold hover:bg-white/10 transition"
                >
                  Explore Programmes <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-red-600 px-5 py-3 text-sm font-extrabold text-white hover:bg-red-500 transition"
                >
                  Career Guidance
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-white/[0.04] overflow-hidden">
              <div className="px-6 py-5 border-b border-white/10 flex items-center justify-between gap-4">
                <p className="text-sm text-white/70">
                  Roles our learners commonly progress towards
                </p>
                <span className="text-xs text-white/50">
                  (Examples — depends on experience)
                </span>
              </div>

              <div className="p-6 grid gap-4 sm:grid-cols-2">
                {roles.map(({ title, desc, Icon, tags }) => (
                  <div
                    key={title}
                    className="group rounded-2xl border border-white/10 bg-black/30 p-5 hover:bg-white/[0.03] transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="h-11 w-11 rounded-2xl border border-white/10 bg-black/40 flex items-center justify-center">
                        <Icon className="h-5 w-5 text-red-400" />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold text-white">{title}</div>
                        <p className="mt-1 text-sm text-white/70 leading-relaxed">
                          {desc}
                        </p>

                        <div className="mt-4 flex flex-wrap gap-2">
                          {tags.map((t) => (
                            <span
                              key={t}
                              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-white/70"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="px-6 pb-6">
                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm font-semibold">Not sure which role fits you?</p>
                      <p className="mt-1 text-sm text-white/70">
                        Tell us your background — we’ll recommend the right pathway.
                      </p>
                    </div>
                    <Link
                      href="/contact"
                      className="shrink-0 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black hover:bg-white/90 transition"
                    >
                      Speak to Advisor
                    </Link>
                  </div>
                </div>
              </div>
            </div>

          
          </div>
        </div>
      </div>
    </section>
  );
}
