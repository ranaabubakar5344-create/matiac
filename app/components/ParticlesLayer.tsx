"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { IOptions, RecursivePartial } from "@tsparticles/engine";

export default function ParticlesLayer({ className = "" }: { className?: string }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  const options: RecursivePartial<IOptions> = useMemo(
    () => ({
      fullScreen: { enable: false },
      fpsLimit: 30,
      detectRetina: true,
      background: { color: { value: "transparent" } },

    particles: {
  number: { value: 55, density: { enable: true, area: 900 } },
  color: { value: ["#ffffffff", "#ef4444"] },

  links: {
    enable: true,
    distance: 200,
    color: "#ffffffff",
    opacity: 0.42,   // ✅ brighter lines
    width: 1,
  },

  move: { enable: true, speed: 0.45, outModes: { default: "out" } },

  opacity: { value: { min: 0.45, max: 0.95 } }, // ✅ brighter dots
  size: { value: { min: 1.5, max: 3.5 } },      // ✅ slightly bigger
  shape: { type: "circle" },
},

      interactivity: {
        events: {
          onHover: { enable: true, mode: "grab" },
          resize: { enable: true, delay: 0 },
        },
        modes: {
          grab: { distance: 220, links: { opacity: 0.35 } },
        },
      },
    }),
    []
  );

  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden="true">
      {ready ? (
        <Particles
          id="why-choose-us-particles"
          options={options}
          className="absolute inset-0 h-full w-full opacity-100 mix-blend-screen
                     drop-shadow-[0_0_10px_rgba(239,68,68,0.35)]"
          style={{ width: "100%", height: "100%" }}
        />
      ) : null}
    </div>
  );
}
