"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { UserPlus, Users, Lightbulb, CloudCog, ArrowRight } from "lucide-react";

const services = [
  {
    icon: UserPlus,
    number: "01",
    title: "Staff Augmentation",
    description:
      "Escalone seu time rapidamente com desenvolvedores experientes integrados ao seu fluxo de trabalho, metodologia e cultura.",
    tags: ["Integração ágil", "Perfil sênior", "Flexibilidade"],
    color: "#60a5fa",
    size: "large",
  },
  {
    icon: Users,
    number: "02",
    title: "Times Dedicados",
    description:
      "Times completos de engenharia trabalhando exclusivamente no seu produto com gestão técnica incluída.",
    tags: ["Time exclusivo", "Alta performance"],
    color: "#34d399",
    size: "small",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Consultoria em Tecnologia",
    description:
      "Apoio estratégico em arquitetura de software, escalabilidade, modernização e boas práticas de engenharia.",
    tags: ["Arquitetura", "Roadmap"],
    color: "#a78bfa",
    size: "small",
  },
  {
    icon: CloudCog,
    number: "04",
    title: "Cloud & Engenharia de Plataforma",
    description:
      "Criação e modernização de plataformas escaláveis na nuvem com infraestrutura como código e práticas SRE.",
    tags: ["AWS / Azure / GCP", "IaC", "SRE"],
    color: "#fbbf24",
    size: "large",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl p-7 overflow-hidden transition-all duration-300 cursor-default"
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      {/* Glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 0 1px ${service.color}20, 0 20px 60px ${service.color}10`,
          background: `radial-gradient(ellipse at 20% 20%, ${service.color}08, transparent 60%)`,
        }}
      />

      <div className="relative z-10">
        {/* Top row */}
        <div className="flex items-start justify-between mb-5">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
            style={{ background: `${service.color}12`, border: `1px solid ${service.color}20` }}
          >
            <Icon size={22} style={{ color: service.color }} strokeWidth={1.75} />
          </div>
          <span className="text-4xl font-black tabular-nums" style={{ color: `${service.color}18` }}>
            {service.number}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-white font-bold text-xl mb-2.5 leading-snug tracking-tight">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-slate-500 text-sm leading-relaxed mb-5 group-hover:text-slate-400 transition-colors duration-300">
          {service.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-full"
              style={{ background: `${service.color}10`, color: service.color, border: `1px solid ${service.color}20` }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA link */}
        <button
          className="flex items-center gap-1.5 text-xs font-semibold tracking-wide uppercase transition-all duration-200 group/cta"
          style={{ color: `${service.color}80` }}
        >
          <span className="group-hover/cta:text-white transition-colors duration-200" style={{ color: service.color }}>
            Saiba mais
          </span>
          <ArrowRight size={12} className="group-hover/cta:translate-x-1 transition-transform duration-200" style={{ color: service.color }} />
        </button>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-28 bg-[#06111E] relative overflow-hidden">
      {/* Section divider top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#22C55E]/20 to-transparent" />

      {/* Mesh bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#2563EB]/4 rounded-full blur-3xl" />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#22C55E]/3 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            O que oferecemos
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-4">
            Soluções de engenharia{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">
              sob medida
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Da alocação de talentos à consultoria estratégica — entregamos a
            capacidade técnica que sua empresa precisa para crescer.
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
