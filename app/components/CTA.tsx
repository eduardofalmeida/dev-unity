"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, ArrowRight, Zap } from "lucide-react";

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-28 bg-[#060D1A] relative overflow-hidden">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#60a5fa]/25 to-transparent" />

      {/* BG blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] bg-[#2563EB]/6 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(11,31,58,0.9) 0%, rgba(17,44,80,0.8) 50%, rgba(37,99,235,0.1) 100%)",
            border: "1px solid rgba(37,99,235,0.2)",
          }}
        >
          {/* Inner glow border */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{ boxShadow: "0 0 80px rgba(37,99,235,0.15) inset" }}
          />

          {/* Grid pattern inside card */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />

          {/* Animated blobs inside card */}
          <motion.div
            className="absolute -top-20 -right-20 w-72 h-72 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(37,99,235,0.25), transparent)" }}
            animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(34,197,94,0.18), transparent)" }}
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          />

          <div className="relative z-10 text-center px-8 py-16 md:py-20 md:px-16">
            {/* Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-7"
              style={{ background: "linear-gradient(135deg, #2563EB, #1d4ed8)", boxShadow: "0 0 30px rgba(37,99,235,0.4)" }}
            >
              <Zap size={26} className="text-white" fill="white" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-[clamp(1.75rem,4vw,3.25rem)] font-black text-white leading-[1.08] tracking-tight mb-5"
            >
              Pronto para escalar seu{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]">
                time de tecnologia?
              </span>
            </motion.h2>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.42 }}
              className="text-slate-400 text-lg leading-relaxed max-w-xl mx-auto mb-10 font-light"
            >
              Converse com nossos especialistas e descubra como a Codity pode
              acelerar seus projetos com os melhores talentos de engenharia.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
            >
              <a
                href="mailto:contato@codity.com.br"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-2.5 text-white font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #2563EB, #1d4ed8)", boxShadow: "0 4px 24px rgba(37,99,235,0.35)" }}
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <Calendar size={16} />
                Agendar uma reunião
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 text-slate-200 font-semibold text-sm px-8 py-4 rounded-xl transition-all duration-200 hover:bg-white/[0.07] hover:-translate-y-0.5 border border-white/10 hover:border-white/20 bg-white/[0.03] backdrop-blur-sm"
              >
                Falar pelo WhatsApp
              </a>
            </motion.div>

            {/* Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap justify-center gap-5 pt-8 border-t border-white/[0.07]"
            >
              {["Sem compromisso inicial", "Resposta em até 24h", "Primeira conversa gratuita"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-slate-500 text-sm">
                  <span className="w-4 h-4 rounded-full flex items-center justify-center" style={{ background: "rgba(34,197,94,0.15)" }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                  </span>
                  {item}
                </span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
