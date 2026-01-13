export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden">

      {/* Ambient glow */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[520px] w-[520px]
                        -translate-x-1/2 -translate-y-1/2
                        rounded-full bg-red-600/20 blur-[160px]" />
        <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px]
                        -translate-x-1/2 -translate-y-1/2
                        rounded-full bg-purple-600/20 blur-[140px]" />
      </div>

      {/* Loader */}
      <div className="relative flex flex-col items-center gap-6">

        {/* Spinner ring */}
        <div className="relative h-24 w-24">
          <div className="absolute inset-0 rounded-full border-4 border-white/10" />
          <div className="absolute inset-0 rounded-full border-t-red-500 border-4 animate-spin" />

          {/* Center logo */}
          <div className="absolute inset-3 rounded-full
                          bg-black border border-white/15
                          flex items-center justify-center
                          text-white font-extrabold text-xl tracking-widest">
            Metaverse Age 
          </div>
        </div>

        {/* Text */}
        <p className="text-white/70 text-xs tracking-[0.4em] uppercase">
          Loading
        </p>

        {/* Progress bar */}
        <div className="h-1 w-48 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-red-500 to-purple-500
                          animate-loader" />
        </div>
      </div>
    </div>
  );
}
