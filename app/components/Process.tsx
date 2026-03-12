"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Search, SlidersHorizontal, Plug2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Entendemos suas necessidades",
    description:
      "Mergulhamos fundo nas suas necessidades técnicas e de negócio para mapear o perfil ideal de cada profissional.",
    color: "#60a5fa",
  },
  {
    number: "02",
    icon: SlidersHorizontal,
    title: "Selecionamos os melhores",
    description:
      "Selecionamos engenheiros altamente qualificados da nossa rede, validados tecnicamente e com histórico comprovado.",
    color: "#34d399",
  },
  {
    number: "03",
    icon: Plug2,
    title: "Integramos ao seu time",
    description:
      "Onboarding estruturado com suporte contínuo para garantir uma integração fluida e rápida ao fluxo de trabalho.",
    color: "#a78bfa",
  },
  {
    number: "04",
    icon: Rocket,
    title: "Escalamos seu desenvolvimento",
    description:
      "Alta performance desde o primeiro sprint com acompanhamento e iteração contínua de qualidade e resultado.",
    color: "#fbbf24",
  },
];

export default function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="py-28 bg-[#060D1A] relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#a78bfa]/25 to-transparent" />

      {/* BG decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#2563EB]/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="inline-flex items-center gap-2 text-[#a78bfa] font-medium text-xs tracking-widest uppercase mb-4">
            <span className="w-6 h-px bg-[#a78bfa]" />
            Nosso Processo
          </span>
          <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-black text-white leading-[1.06] tracking-tight mb-4">
            Como a Codity{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a78bfa] to-[#60a5fa]">
              funciona
            </span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed font-light">
            Um processo ágil e estruturado, do briefing à primeira entrega — em
            média{" "}
            <span className="text-white font-medium">48 horas</span> para
            apresentação dos candidatos.
          </p>
        </motion.div>

        {/* Steps — horizontal timeline on desktop */}
        <div className="relative">
          {/* Connector */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(12.5%-12px)] right-[calc(12.5%-12px)] h-px">
            <motion.div
              className="h-full bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#fbbf24]"
              initial={{ scaleX: 0, originX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center lg:items-start text-center lg:text-left group"
                >
                  {/* Icon + number */}
                  <div className="relative mb-6 flex-shrink-0">
                    {/* Outer glow ring */}
                    <div
                      className="w-[104px] h-[104px] rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{
                        background: `radial-gradient(circle, ${step.color}12 0%, transparent 70%)`,
                        border: `1px solid ${step.color}20`,
                      }}
                    >
                      <motion.div
                        className="w-16 h-16 rounded-full flex items-center justify-center"
                        style={{ background: `${step.color}15`, border: `2px solid ${step.color}30` }}
                        whileHover={{ rotate: 10 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Icon size={26} style={{ color: step.color }} strokeWidth={1.75} />
                      </motion.div>
                    </div>

                    {/* Number badge */}
                    <motion.div
                      className="absolute -top-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-lg"
                      style={{ background: `linear-gradient(135deg, ${step.color}, ${step.color}cc)` }}
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.15 }}
                    >
                      {index + 1}
                    </motion.div>
                  </div>

                  {/* Text */}
                  <h3 className="text-white font-bold text-base mb-2.5 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
