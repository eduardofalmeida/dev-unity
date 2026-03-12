"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star, Zap, Building2, GitBranch, Award, ShieldCheck } from "lucide-react";

/* Bento grid items */
const bentoItems = [
  {
    icon: Star,
    title: "Talentos de Nível Sênior",
    description: "Rigoroso processo seletivo técnico — aprovamos apenas o top 5% dos candidatos.",
    stat: "Top 5%",
    color: "#60a5fa",
    colSpan: "lg:col-span-2",
    featured: true,
  },
  {
    icon: Zap,
    title: "Escala Rápida",
    description: "Dimensione seu time em dias, não meses.",
    stat: "48h",
    color: "#34d399",
    colSpan: "lg:col-span-1",
    featured: false,
  },
  {
    icon: Building2,
    title: "Visão Arquitetural",
    description: "Profissionais que pensam além do código, com decisões técnicas estratégicas.",
    stat: "100%",
    color: "#a78bfa",
    colSpan: "lg:col-span-1",
    featured: false,
  },
  {
    icon: GitBranch,
    title: "Metodologias Ágeis",
    description: "Sólida experiência em Scrum, Kanban e práticas DevOps para times de alta performance.",
    stat: "Agile",
    color: "#fbbf24",
    colSpan: "lg:col-span-1",
    featured: false,
  },
  {
    icon: Award,
    title: "Profissionais Experientes",
    description: "7+ anos de experiência média em projetos complexos de empresas líderes.",
    stat: "7+ anos",
    color: "#f87171",
    colSpan: "lg:col-span-2",
    featured: true,
  },
  {
    icon: ShieldCheck,
    title: "Suporte Contínuo",
    description: "Acompanhamento dedicado em todo o ciclo de alocação.",
    stat: "24/7",
    color: "#38bdf8",
    colSpan: "lg:col-span-1",
    featured: false,
  },
];

function BentoCard({ item, index }: { item: (typeof bentoItems)[0]; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, scale: 1.01 }}
      className={`group relative rounded-2xl p-6 overflow-hidden transition-all duration-300 cursor-default ${item.colSpan}`}
      style={{
        background: item.featured
          ? `linear-gradient(135deg, ${item.color}10, ${item.color}05)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${item.featured ? item.color + "20" : "rgba(255,255,255,0.07)"}`,
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 0 1px ${item.color}25, 0 20px 50px ${item.color}10` }}
      />

      {/* Corner decoration */}
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at top right, ${item.color}08, transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col h-full">
        {/* Stat — large number */}
        <div className="flex items-start justify-between mb-4">
          <div
            className="w-11 h-11 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${item.color}12`, border: `1px solid ${item.color}20` }}
          >
            <Icon size={20} style={{ color: item.color }} strokeWidth={1.75} />
          </div>
          <span className="text-3xl font-black tabular-nums leading-none" style={{ color: item.color }}>
            {item.stat}
          </span>
        </div>

        <h3 className="text-white font-bold text-base mb-2 leading-snug">{item.title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
}

export default function Advantages() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="advantages" className="py-28 bg-[#060D1A] relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#34d399]/20 to-transparent" />

      {/* BG */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/3 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#22C55E]/3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-flex items-center gap-2 text-[#34d399] font-medium text-xs tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-[#34d399]" />
            Por que DevUnity
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-4">
            A diferença está na{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-[#60a5fa]">
              qualidade
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Não somos apenas um fornecedor de talentos. Somos parceiros
            estratégicos que entendem profundamente os desafios de engenharia.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bentoItems.map((item, i) => (
            <BentoCard key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["Contrato flexível", "SLA garantido", "NPS 9.2", "Primeira conversa gratuita", "Onboarding suportado"].map((badge) => (
            <span
              key={badge}
              className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 bg-white/[0.03] border border-white/[0.07] rounded-full px-4 py-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#34d399]" />
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
