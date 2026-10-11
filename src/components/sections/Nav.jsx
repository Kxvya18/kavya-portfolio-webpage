import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { heroData } from "../../mock";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import { Command, Menu, X } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Work", to: "/work" },
  { label: "Lab", to: "/lab" },
  { label: "Skills", to: "/skills" },
  { label: "Resume", to: "/resume" },
  { label: "Contact", to: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  // close the mobile menu on navigation; lock page scroll while it is open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openPalette = () => {
    const event = new KeyboardEvent("keydown", {
      key: "k",
      code: "KeyK",
      metaKey: true,
      ctrlKey: true,
      bubbles: true,
    });
    document.dispatchEvent(event);
  };

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
        scrolled || pathname !== "/"
          ? "bg-[#0e0c08]/80 backdrop-blur-xl border-b border-[#2a2416]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-4 sm:py-5 flex items-center justify-between gap-4">
        <Link to="/" className="font-serif text-[#e6e1d6] text-lg tracking-wide">
          {heroData.name}
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              className={`text-sm tracking-wide transition-colors relative group ${
                pathname === n.to
                  ? "text-[#e6d9a8]"
                  : "text-[#a89b7a] hover:text-[#e6d9a8]"
              }`}
            >
              {n.label}
              <span
                className={`absolute left-0 -bottom-1 h-px bg-[#c9a961] transition-all duration-300 ${
                  pathname === n.to ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button
            onClick={openPalette}
            aria-label="Command palette"
            className="hidden md:inline-flex items-center gap-2 px-3 h-9 rounded-full border border-[#3a3220] text-[#a89b7a] hover:border-[#c9a961] hover:text-[#e6d9a8] text-xs transition-colors"
          >
            <Command className="w-3.5 h-3.5" />
            <span className="font-mono">K</span>
          </button>
          <ThemeToggle />
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-full border border-[#3a3220] text-[#e6e1d6]"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {createPortal(<AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-x-0 top-[68px] bottom-0 z-[60] bg-[#0e0c08]/97 backdrop-blur-xl border-t border-[#2a2416] px-6 pt-6 pb-10 overflow-y-auto"
          >
            {[{ label: "Home", to: "/" }, ...navItems].map((n, i) => (
              <motion.div key={n.label} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.03 * i }}>
                <Link
                  to={n.to}
                  className={`block py-4 border-b border-[#2a2416] font-serif text-3xl ${
                    pathname === n.to ? "text-[#e6d9a8]" : "text-[#e6e1d6]"
                  }`}
                >
                  {n.label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>, document.body)}
    </motion.header>
  );
}
