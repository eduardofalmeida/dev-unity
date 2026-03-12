"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Target, Eye, Heart, ArrowRight } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Missão",
    text: "Conectar empresas a talentos de engenharia de software de alto nível.",
    color: "#60a5fa",
  },
  {
    icon: Eye,
    title: "Visão",
    text: "Ser a principal parceira de outsourcing de tecnologia na América Latina.",
    color: "#34d399",
  },
  {
    icon: Heart,
    title: "Valores",
    text: "Excelência técnica, parceria genuína e inovação contínua.",
    color: "#a78bfa",
  },
];

const statsRow = [
  { value: "5+", label: "Anos de mercado" },
  { value: "200+", label: "Especialistas alocados" },
  { value: "50+", label: "Empresas parceiras" },
  { value: "15+", label: "Países atendidos" },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-28 bg-[#06111E] relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/20 to-transparent" />

      {/* BG decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-[#2563EB]/4 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#22C55E]/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top content area */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-flex items-center gap-2 text-[#a78bfa] font-medium text-xs tracking-widest uppercase mb-4">
              <span className="w-6 h-px bg-[#a78bfa]" />
              Sobre a Codity
            </span>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-6">
              Construindo o futuro{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
                da engenharia
              </span>
            </h2>

            <div className="space-y-5 mb-8">
              {[
                "A Codity nasceu com a missão de conectar empresas a talentos de engenharia de software de alto nível.",
                "Acreditamos que grandes soluções tecnológicas são construídas por equipes fortes, arquitetura moderna e inovação contínua.",
                "Nosso objetivo é ajudar empresas a acelerar sua transformação digital com as pessoas certas e a tecnologia certa.",
              ].map((paragraph, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.12 }}
                  className="text-slate-400 text-base leading-relaxed font-light"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="border-l-2 border-[#a78bfa]/50 pl-5 mb-8"
            >
              <p className="text-slate-200 font-medium text-lg italic leading-snug">
                "Codity Tecnologia — Talentos de engenharia unidos à sua visão."
              </p>
            </motion.div>

            <motion.a
              href="#contact"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="group inline-flex items-center gap-2 text-[#60a5fa] font-semibold text-sm hover:gap-3 transition-all duration-200"
            >
              Conheça nossa história
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </motion.a>
          </motion.div>

          {/* Right — Pillars */}
          <div className="flex flex-col gap-4">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ x: 6 }}
                  className="group flex items-start gap-5 rounded-2xl p-6 transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${pillar.color}12`, border: `1px solid ${pillar.color}20` }}
                  >
                    <Icon size={20} style={{ color: pillar.color }} strokeWidth={1.75} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base mb-1">{pillar.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{pillar.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {statsRow.map((stat) => (
            <div
              key={stat.label}
              className="text-center rounded-2xl py-7 px-4"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div className="text-3xl md:text-4xl font-black text-white tracking-tight mb-1">
                {stat.value}
              </div>
              <div className="text-slate-500 text-xs tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
