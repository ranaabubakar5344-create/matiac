// app/(whatever)/page.tsx  (or components/PermitBar.tsx)

export default function Page() {
  return (
    <section className="relative overflow-hidden bg-[#0b0d12] text-white">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_15%_-10%,rgba(239,68,68,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(900px_circle_at_90%_10%,rgba(99,102,241,0.14),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0d12] via-[#0b0d12] to-[#0b0d12]/90" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="rounded-[32px] border border-white/10 bg-white/[0.06] px-6 py-7 sm:px-10 sm:py-8 backdrop-blur-xl shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

            {/* LEFT */}
            <div>
             
              <h2 className="mt-4 font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight">
                Pioneering innovations shaping tomorrow’s{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-red-200 to-red-400">
                 Learning Landscape
                </span>
              </h2>

              <p className="mt-3 text-sm sm:text-base text-white/75 max-w-2xl leading-relaxed">
                Credible programmes, structured pathways, and real-world outcomes
                designed for working professionals.
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex items-start md:items-center gap-4">
              <div className="rounded-2xl border border-red-500/30 bg-gradient-to-br from-red-500 to-red-500 px-6 py-4 shadow-lg shadow-red-600/30">
                <p className="text-[11px] text-white/90 uppercase tracking-wider">
                  KHDA Permit
                </p>
                <p className="mt-1 text-xl font-extrabold tracking-tight">
                  630465
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
