"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Server, Monitor, Cloud, Database, Cpu, Users } from "lucide-react";

const specialists = [
  {
    icon: Server,
    title: "Desenvolvedores Backend",
    description: "Java, Node.js, Python, Go, Spring Boot e microsserviços.",
    color: "#60a5fa",
    glow: "rgba(96, 165, 250, 0.15)",
    border: "rgba(96, 165, 250, 0.15)",
  },
  {
    icon: Monitor,
    title: "Desenvolvedores Frontend",
    description: "React, Angular, Next.js, Vue e arquitetura de UI moderna.",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.15)",
    border: "rgba(52, 211, 153, 0.15)",
  },
  {
    icon: Cloud,
    title: "Engenheiros DevOps",
    description: "AWS, Azure, GCP, Kubernetes, Terraform e CI/CD pipelines.",
    color: "#a78bfa",
    glow: "rgba(167, 139, 250, 0.15)",
    border: "rgba(167, 139, 250, 0.15)",
  },
  {
    icon: Database,
    title: "Engenheiros de Dados",
    description: "Pipelines, Kafka, Spark, dbt, BigQuery e Data Lakes.",
    color: "#fbbf24",
    glow: "rgba(251, 191, 36, 0.15)",
    border: "rgba(251, 191, 36, 0.15)",
  },
  {
    icon: Cpu,
    title: "Arquitetos de Software",
    description: "Arquitetura de sistemas, microsserviços, DDD e event-driven.",
    color: "#fb7185",
    glow: "rgba(251, 113, 133, 0.15)",
    border: "rgba(251, 113, 133, 0.15)",
  },
  {
    icon: Users,
    title: "Tech Leads",
    description: "Liderança técnica, mentoria de times e alinhamento estratégico.",
    color: "#38bdf8",
    glow: "rgba(56, 189, 248, 0.15)",
    border: "rgba(56, 189, 248, 0.15)",
  },
];

function SpecialistCard({ spec, index }: { spec: (typeof specialists)[0]; index: number }) {
  const Icon = spec.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative rounded-2xl p-6 overflow-hidden cursor-default transition-all duration-300"
      style={{
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Hover gradient fill */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at 30% 30%, ${spec.glow}, transparent 70%)` }}
      />

      {/* Hover border glow */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ boxShadow: `0 0 0 1px ${spec.border}, 0 8px 40px ${spec.glow}` }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon container */}
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
          style={{ background: `${spec.color}14`, border: `1px solid ${spec.color}25` }}
        >
          <Icon size={22} style={{ color: spec.color }} strokeWidth={1.75} />
        </div>

        {/* Title */}
        <h3 className="text-white font-semibold text-base mb-2 leading-snug">
          {spec.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-400 transition-colors duration-300">
          {spec.description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
          style={{ background: `linear-gradient(90deg, ${spec.color}, transparent)` }}
        />
      </div>
    </motion.div>
  );
}

export default function Specialists() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="specialists" className="py-28 bg-[#060D1A] relative overflow-hidden">
      {/* Section divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/20 to-transparent" />

      {/* Background subtle */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#2563EB]/3 rounded-full blur-3xl" />
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
          <span className="inline-flex items-center gap-2 text-[#60a5fa] font-medium text-xs tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-[#60a5fa]" />
            Nossos Especialistas
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-4">
            Talentos prontos para{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">
              o seu time
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Especialistas de alto nível em todas as disciplinas da engenharia
            moderna, validados tecnicamente e prontos para entregar.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {specialists.map((spec, i) => (
            <SpecialistCard key={spec.title} spec={spec} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
