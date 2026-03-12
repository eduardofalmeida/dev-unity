"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Calendar, ChevronDown, Sparkles } from "lucide-react";

/* ── Animated dot-grid canvas ─────────────────────────────── */
function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const SPACING = 38;
    let frame = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 1;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const x = c * SPACING;
          const y = r * SPACING;
          const wave = Math.sin(frame * 0.015 + c * 0.3 + r * 0.25);
          const opacity = 0.05 + wave * 0.06;
          const radius = 1 + wave * 0.5;
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0.3, radius), 0, Math.PI * 2);
          ctx.fillStyle = `rgba(96, 165, 250, ${Math.max(0, opacity)})`;
          ctx.fill();
        }
      }
      frame++;
      requestAnimationFrame(animate);
    };

    const raf = requestAnimationFrame(animate);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  );
}

/* ── Spotlight that follows mouse ─────────────────────────── */
function Spotlight() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20 });
  const springY = useSpring(y, { stiffness: 60, damping: 20 });

  const bgX = useTransform(springX, (v) => `${v}px`);
  const bgY = useTransform(springY, (v) => `${v}px`);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-20 transition duration-300"
      style={{
        background: useTransform(
          [springX, springY],
          ([mx, my]: number[]) =>
            `radial-gradient(700px circle at ${mx}px ${my}px, rgba(37,99,235,0.07), transparent 60%)`
        ),
      }}
    />
  );
}

/* ── Word-by-word reveal ──────────────────────────────────── */
const HEADLINE_WORDS = [
  "Escale", "seu", "time", "de", "engenharia", "com",
  "desenvolvedores", "de", "alto", "nível."
];

const ACCENT_WORDS = new Set(["alto", "nível."]);

/* ── Main Hero ────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#060D1A]">
      <Spotlight />

      {/* Dot-grid background */}
      <DotGrid />

      {/* Mesh gradient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute rounded-full blur-[120px]"
          style={{ width: 700, height: 700, top: "-20%", right: "-10%", background: "radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.1, 1], opacity: [0.8, 1, 0.8] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute rounded-full blur-[100px]"
          style={{ width: 500, height: 500, bottom: "5%", left: "-5%", background: "radial-gradient(circle, rgba(34,197,94,0.12) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.08, 1], opacity: [0.6, 0.9, 0.6] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full blur-[80px]"
          style={{ width: 300, height: 300, top: "40%", left: "45%", background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)" }}
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Beam sweep */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 bottom-0 w-32 opacity-5"
          style={{ background: "linear-gradient(90deg, transparent, rgba(99,179,237,0.8), transparent)", skewX: "-15deg" }}
          animate={{ x: ["-100%", "150vw"] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 6, ease: "easeInOut" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 w-full">
        <div className="max-w-5xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.08] rounded-full px-4 py-2 backdrop-blur-sm">
              <Sparkles size={13} className="text-[#60a5fa]" />
              <span className="text-slate-300 text-xs font-medium tracking-wide">
                Consultoria & Outsourcing em Tecnologia
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
            </div>
          </motion.div>

          {/* Headline — word-by-word */}
          <h1 className="text-[clamp(2.8rem,7vw,6.5rem)] font-black leading-[1.02] tracking-[-0.03em] mb-6">
            {HEADLINE_WORDS.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className={`inline-block mr-[0.22em] ${
                  ACCENT_WORDS.has(word)
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]"
                    : "text-white"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10 font-light"
          >
            A Codity conecta empresas a{" "}
            <span className="text-slate-200 font-medium">engenheiros experientes</span>{" "}
            prontos para acelerar projetos de tecnologia.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="flex flex-col sm:flex-row gap-3 mb-20"
          >
            {/* Primary CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl px-7 py-4 text-sm font-semibold text-white transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #1d4ed8 0%, #2563EB 60%, #3b82f6 100%)" }}
            >
              {/* Shimmer */}
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
              <Calendar size={16} />
              Agendar uma conversa
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </a>

            {/* Secondary CTA */}
            <a
              href="#contact"
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-xl px-7 py-4 text-sm font-semibold text-slate-200 transition-all duration-200 border border-white/10 hover:border-white/20 bg-white/[0.03] hover:bg-white/[0.06] backdrop-blur-sm"
            >
              Falar com um especialista
              <ArrowRight size={14} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </a>
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-slate-600" />
        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060D1A] to-transparent pointer-events-none" />
    </section>
  );
}
