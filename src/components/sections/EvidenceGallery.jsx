import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, CheckCircle2 } from "lucide-react";
import { evidence } from "../../mock";

/** Real snapshots of public GitHub pages: CI runs, results tables and audits (captured from the live repos). */
export default function EvidenceGallery() {
  const [open, setOpen] = useState(null);
  useEffect(() => {
    if (open === null) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section className="relative bg-[#0e0c08] py-24 md:py-32 border-t border-[#2a2416]">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-[#8a7c5c] text-xs tracking-[0.3em] uppercase mb-4">Evidence</p>
          <h2 className="font-serif text-[#f5efe0] text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Straight from the repositories
          </h2>
          <p className="mt-5 text-[#b8ac8c] text-sm md:text-base leading-relaxed">
            Unedited snapshots of public GitHub pages: passing CI pipelines, result tables and audit outputs.
            Every card links to the live page so the numbers can be checked.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {evidence.map((e, i) => (
            <motion.article
              key={e.img}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.5 }}
              className="flex flex-col rounded-xl border border-[#2a2416] bg-[#141009] overflow-hidden hover:border-[#c9a961]/50 transition-colors"
            >
              <header className="flex items-center gap-2 px-4 py-3 border-b border-[#2a2416] font-mono text-[12px] text-[#a89b7a] min-w-0">
                <Github className="w-4 h-4 shrink-0" />
                <span className="truncate">Kxvya18 / <span className="text-[#e6e1d6]">{e.repo}</span></span>
                <span className="ml-auto shrink-0 inline-flex items-center gap-1 rounded-full border border-[#3a3220] px-2 py-0.5 text-[10px] uppercase tracking-wider">
                  {e.kind === "ci" && <CheckCircle2 className="w-3 h-3 text-[#7fb8a4]" />}
                  {e.kindLabel}
                </span>
              </header>

              <button
                type="button"
                onClick={() => setOpen(i)}
                className="block bg-[#0e0c08] border-b border-[#2a2416] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#c9a961]"
                aria-label={`Enlarge snapshot: ${e.title}`}
              >
                <img src={e.img} alt={e.alt} loading="lazy" className="w-full aspect-[16/10] object-cover object-top" />
              </button>

              <div className="flex flex-col gap-3 p-5 flex-1">
                <h3 className="font-serif text-[#f5efe0] text-lg leading-snug">{e.title}</h3>
                <p className="text-[#a89b7a] text-sm leading-relaxed">{e.caption}</p>
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {e.stats.map((s) => (
                    <span key={s} className="rounded-md border border-[#3a3220] px-2 py-1 font-mono text-[11px] text-[#e6d9a8]">{s}</span>
                  ))}
                </div>
                <a href={e.url} target="_blank" rel="noopener noreferrer"
                   className="inline-flex items-center gap-1.5 text-[#c9a961] text-xs hover:text-[#e6d9a8] w-fit">
                  View on GitHub <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[120] bg-[#0e0c08]/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-8"
            onClick={() => setOpen(null)}
            role="dialog" aria-modal="true" aria-label={evidence[open].title}
          >
            <button type="button" onClick={() => setOpen(null)} aria-label="Close"
              className="absolute top-4 right-4 w-11 h-11 rounded-full border border-[#3a3220] bg-[#141009] text-[#e6e1d6] flex items-center justify-center">
              <X className="w-5 h-5" />
            </button>
            <figure className="max-w-6xl w-full" onClick={(ev) => ev.stopPropagation()}>
              <img src={evidence[open].img} alt={evidence[open].alt} className="w-full max-h-[80svh] object-contain rounded-lg border border-[#2a2416]" />
              <figcaption className="mt-3 text-[#b8ac8c] text-sm">
                {evidence[open].title} ·{" "}
                <a className="text-[#c9a961] underline" href={evidence[open].url} target="_blank" rel="noopener noreferrer">open on GitHub</a>
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
