"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const technologies = [
  { name: "Java", category: "Backend", emoji: "☕" },
  { name: "Spring Boot", category: "Backend", emoji: "🍃" },
  { name: "Node.js", category: "Backend", emoji: "⬡" },
  { name: "React", category: "Frontend", emoji: "⚛" },
  { name: "Angular", category: "Frontend", emoji: "🅰" },
  { name: "Next.js", category: "Frontend", emoji: "▲" },
  { name: "Kafka", category: "Dados", emoji: "⚡" },
  { name: "AWS", category: "Cloud", emoji: "☁" },
  { name: "Docker", category: "DevOps", emoji: "🐳" },
  { name: "Kubernetes", category: "DevOps", emoji: "☸" },
  { name: "MongoDB", category: "Banco", emoji: "🍃" },
  { name: "PostgreSQL", category: "Banco", emoji: "🐘" },
  { name: "Terraform", category: "DevOps", emoji: "◈" },
  { name: "TypeScript", category: "Frontend", emoji: "𝐓𝐒" },
  { name: "Python", category: "Backend", emoji: "🐍" },
  { name: "Redis", category: "Banco", emoji: "⬤" },
];

const categoryColor: Record<string, string> = {
  Backend: "#60a5fa",
  Frontend: "#34d399",
  Cloud: "#fbbf24",
  DevOps: "#a78bfa",
  Dados: "#f87171",
  Banco: "#38bdf8",
};

// Duplicate for infinite scroll
const row1 = [...technologies.slice(0, 8), ...technologies.slice(0, 8)];
const row2 = [...technologies.slice(8), ...technologies.slice(8)];

function TechPill({ tech }: { tech: (typeof technologies)[0] }) {
  const color = categoryColor[tech.category] ?? "#94a3b8";

  return (
    <div
      className="group flex-shrink-0 flex items-center gap-3 px-5 py-3 rounded-2xl transition-all duration-300 cursor-default mx-2"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <span className="text-xl w-7 text-center select-none leading-none">{tech.emoji}</span>
      <div>
        <p className="text-white font-semibold text-sm leading-none mb-0.5">{tech.name}</p>
        <p className="text-xs font-medium" style={{ color }}>{tech.category}</p>
      </div>
    </div>
  );
}

export default function Technologies() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="technologies" className="py-28 bg-[#06111E] relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#fbbf24]/20 to-transparent" />

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#2563EB]/4 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center gap-2 text-[#fbbf24] font-medium text-xs tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-[#fbbf24]" />
            Stack Tecnológico
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-4">
            Tecnologias que{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] to-[#f87171]">
              dominamos
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Nossos especialistas cobrem um amplo espectro tecnológico — do
            backend ao cloud, dados e plataforma.
          </p>
        </motion.div>
      </div>

      {/* Marquee rows */}
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#06111E] to-transparent z-10 pointer-events-none" />
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#06111E] to-transparent z-10 pointer-events-none" />

        {/* Row 1 — left to right */}
        <div className="overflow-hidden mb-4">
          <motion.div
            className="flex w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {row1.map((tech, i) => (
              <TechPill key={`r1-${i}`} tech={tech} />
            ))}
          </motion.div>
        </div>

        {/* Row 2 — right to left */}
        <div className="overflow-hidden">
          <motion.div
            className="flex w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
          >
            {row2.map((tech, i) => (
              <TechPill key={`r2-${i}`} tech={tech} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="text-center text-slate-600 text-sm mt-12 max-w-7xl mx-auto px-4"
      >
        E muito mais — nossos profissionais trabalham com o stack do seu produto.
      </motion.p>
    </section>
  );
}
