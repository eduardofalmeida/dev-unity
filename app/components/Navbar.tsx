"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Zap } from "lucide-react";

const navLinks = [
  { label: "Serviços", href: "#services" },
  { label: "Especialistas", href: "#specialists" },
  { label: "Processo", href: "#process" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Sobre", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/60 to-transparent" />

      {/* Nav container */}
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "bg-[#060D1A]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-2xl shadow-black/40"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-[70px]">

            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#22C55E] opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300" />
                <div className="relative w-8 h-8 rounded-lg bg-gradient-to-br from-[#2563EB] to-[#22C55E] flex items-center justify-center">
                  <Zap size={15} className="text-white" fill="white" />
                </div>
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Dev<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">Unity</span>
              </span>
            </a>

            {/* Desktop Nav — pill style */}
            <nav className="hidden md:flex items-center">
              <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${scrolled ? "bg-white/[0.04] border border-white/[0.07]" : ""}`}>
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setActiveLink(link.href)}
                    className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                      activeLink === link.href
                        ? "text-white bg-white/10"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.06]"
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </nav>

            {/* CTA */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="#contact"
                className="group relative overflow-hidden inline-flex items-center gap-2 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#2563EB]/25"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                Falar com especialista
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-slate-300 hover:text-white p-2 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden bg-[#060D1A]/98 backdrop-blur-2xl border-b border-white/[0.06]"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-slate-300 hover:text-white font-medium py-3 px-3 rounded-xl text-sm transition-all duration-200 hover:bg-white/[0.04]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-3 bg-[#2563EB] text-white font-semibold py-3 px-4 rounded-xl text-sm text-center"
              >
                Falar com especialista
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
