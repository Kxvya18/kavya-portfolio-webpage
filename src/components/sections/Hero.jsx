import React, { Suspense, lazy, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { heroData, contact } from "../../mock";
import { useDeviceProfile, useIdleReady, useInView } from "../../lib/device";
import { AREAS } from "../three/areas";

// Three.js is split into its own chunk and loaded after the text has painted
const ProjectConstellation = lazy(() => import("../three/ProjectConstellation"));

/** Static stand-in shown before WebGL is ready, and permanently on devices without WebGL. */
function StaticConstellation() {
  return (
    <svg viewBox="0 0 400 400" className="absolute inset-0 w-full h-full opacity-50" preserveAspectRatio="xMidYMid meet" aria-hidden>
      {AREAS.map((a, i) => {
        const ang = (i / AREAS.length) * Math.PI * 2;
        const cx = 200 + Math.cos(ang) * 110, cy = 200 + Math.sin(ang) * 110;
        return (
          <g key={a.key}>
            <line x1="200" y1="200" x2={cx} y2={cy} stroke="#3a3220" />
            {[0, 1, 2, 3].map((k) => (
              <circle key={k} cx={cx + Math.cos(k * 1.7) * 24} cy={cy + Math.sin(k * 1.7) * 24} r={k === 0 ? 5 : 3.5} fill={a.color} opacity="0.8" />
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function Scene({ profile }) {
  const box = useRef(null);
  const inView = useInView(box, "0px");
  const idle = useIdleReady(700);
  const [ready, setReady] = useState(false);
  const webgl = profile.tier !== "none";
  return (
    <div ref={box} className="absolute inset-0">
      <div className={`absolute inset-0 transition-opacity duration-700 ${ready ? "opacity-0" : "opacity-100"}`}>
        <StaticConstellation />
      </div>
      {webgl && idle && (
        <Suspense fallback={null}>
          <div className={`absolute inset-0 transition-opacity duration-1000 ${ready ? "opacity-100" : "opacity-0"}`}>
            <ProjectConstellation profile={profile} inView={inView} onReady={() => setReady(true)} />
          </div>
        </Suspense>
      )}
    </div>
  );
}

const fade = (delay) => ({ initial: { opacity: 0, y: 12 }, animate: { opacity: 1, y: 0 }, transition: { delay, duration: 0.6 } });

export default function Hero() {
  const navigate = useNavigate();
  const profile = useDeviceProfile();
  const { portrait, shortLandscape } = profile;

  const Legend = (
    <ul className="flex flex-wrap gap-x-5 gap-y-2" aria-label="Research areas in the 3D project map">
      {AREAS.map((a) => (
        <li key={a.key} className="flex items-center gap-2 text-[#8a7c5c] text-[11px] tracking-wider uppercase">
          <span className="w-2 h-2 rounded-full" style={{ background: a.color }} />
          {a.label}
        </li>
      ))}
    </ul>
  );

  return (
    <section id="top" className={`relative w-full overflow-hidden bg-[#0e0c08] ${portrait ? "" : "min-h-[100svh]"}`}>
      {/* Landscape / desktop: the 3D map fills the right side; text sits on a readable gradient on the left */}
      {!portrait && (
        <div className="absolute inset-y-0 right-0 w-[62%] xl:w-[58%]">
          <Scene profile={profile} />
        </div>
      )}
      {!portrait && (
        <div className="absolute inset-y-0 left-0 w-[70%] pointer-events-none bg-gradient-to-r from-[#0e0c08] via-[#0e0c08]/85 to-transparent" />
      )}

      <div
        className={`relative z-10 max-w-[1400px] mx-auto px-5 sm:px-8 pointer-events-none ${
          shortLandscape ? "pt-20 pb-8" : portrait ? "pt-28 pb-6" : "pt-36 pb-20 min-h-[100svh] flex flex-col justify-center"
        }`}
      >
        <div className={portrait ? "" : "max-w-[46rem] lg:max-w-[40rem] xl:max-w-[44rem]"}>
          <motion.p {...fade(0)} className="text-[#a89b7a] text-[11px] sm:text-xs tracking-[0.3em] uppercase mb-5 sm:mb-8">
            {heroData.eyebrow}
          </motion.p>

          <motion.h1
            {...fade(0.05)}
            className="font-serif text-[#f5efe0] leading-[1.03] tracking-tight"
            style={{ fontSize: shortLandscape ? "clamp(1.9rem, 5vw, 3rem)" : "clamp(2.35rem, 6.4vw, 5.6rem)" }}
          >
            {heroData.headline}
          </motion.h1>

          <motion.p {...fade(0.12)} className="mt-6 sm:mt-8 max-w-2xl text-[#b8ac8c] text-[15px] sm:text-base md:text-lg leading-relaxed">
            {heroData.summary}
          </motion.p>

          <motion.div {...fade(0.2)} className="mt-7 sm:mt-10 flex flex-wrap gap-3 pointer-events-auto">
            <button
              onClick={() => navigate("/work")}
              className="group inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full bg-[#c9a961] text-[#0e0c08] hover:bg-[#e6d9a8] transition-colors text-sm font-medium"
            >
              Explore Work
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
            </button>
            <a href={contact.github} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-[#3a3220] text-[#e6e1d6] hover:border-[#c9a961] hover:text-[#e6d9a8] transition-colors text-sm font-medium">
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] rounded-full border border-[#3a3220] text-[#e6e1d6] hover:border-[#c9a961] hover:text-[#e6d9a8] transition-colors text-sm font-medium">
              <Linkedin className="w-4 h-4" /> LinkedIn
            </a>
          </motion.div>

          {!portrait && !shortLandscape && (
            <motion.div {...fade(0.35)} className="mt-12">
              <p className="text-[#5a5340] text-[10px] tracking-[0.3em] uppercase mb-3">
                Project map · hover a node, click to open
              </p>
              {Legend}
            </motion.div>
          )}
        </div>
      </div>

      {/* Portrait phones / tablets: the 3D map gets its own block below the text, never behind it */}
      {portrait && (
        <div className="relative z-0 px-5 pb-10">
          <div className="relative w-full mx-auto max-w-[560px]" style={{ height: "min(82vw, 48svh)" }}>
            <Scene profile={profile} />
          </div>
          <p className="text-[#5a5340] text-[10px] tracking-[0.3em] uppercase mt-4 mb-3">Project map · tap a node</p>
          {Legend}
        </div>
      )}

      {!portrait && !shortLandscape && !profile.reducedMotion && (
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 text-[#8a7c5c] text-[10px] tracking-[0.3em] uppercase"
        >
          Scroll
        </motion.div>
      )}
    </section>
  );
}
