"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, ArrowRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Serviços: [
    { label: "Staff Augmentation", href: "#services" },
    { label: "Times Dedicados", href: "#services" },
    { label: "Consultoria em Tecnologia", href: "#services" },
    { label: "Cloud & Plataforma", href: "#services" },
  ],
  Empresa: [
    { label: "Sobre a Codity", href: "#about" },
    { label: "Como Funciona", href: "#process" },
    { label: "Especialistas", href: "#specialists" },
    { label: "Tecnologias", href: "#technologies" },
  ],
  Contato: [
    { label: "contato@codity.com.br", href: "mailto:contato@codity.com.br", icon: Mail },
    { label: "+55 (11) 9 9999-9999", href: "tel:+5511999999999", icon: Phone },
    { label: "LinkedIn", href: "https://linkedin.com/company/codity", icon: Linkedin },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#030810] border-t border-white/[0.04] relative overflow-hidden">
      {/* Top gradient bar */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563EB]/30 to-transparent" />

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-[#2563EB]/3 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="relative w-9 h-9 group-hover:scale-105 transition-transform duration-300">
                <Image src="/logo.png" alt="Codity Tecnologia" width={36} height={36} className="object-contain" />
              </div>
              <span className="text-white font-bold text-lg tracking-tight">
                Codity<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60a5fa] to-[#34d399]"> Tecnologia</span>
              </span>
            </a>

            <p className="text-slate-500 text-sm leading-relaxed mb-5">
              Conectamos empresas a talentos de engenharia de alto nível para
              acelerar a transformação digital.
            </p>

            <p className="text-slate-600 text-xs italic">
              "Talentos de engenharia unidos à sua visão."
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-slate-300 font-semibold text-xs tracking-widest uppercase mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const Icon = "icon" in link ? link.icon : null;
                  return (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        target={link.href.startsWith("http") ? "_blank" : undefined}
                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="group flex items-center gap-2 text-slate-500 hover:text-slate-200 text-sm transition-all duration-200"
                      >
                        {Icon && <Icon size={13} className="flex-shrink-0 opacity-60" />}
                        <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                          {link.label}
                        </span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="py-8 border-t border-white/[0.05]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <p className="text-slate-200 font-semibold text-sm mb-1">
                Fique por dentro
              </p>
              <p className="text-slate-500 text-xs">
                Insights de engenharia e tecnologia diretamente no seu e-mail.
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Seu e-mail corporativo"
                className="flex-1 md:w-64 bg-white/[0.04] border border-white/[0.08] rounded-xl px-4 py-2.5 text-white placeholder:text-slate-600 text-sm focus:outline-none focus:border-[#2563EB]/40 transition-colors duration-200"
              />
              <button className="group flex items-center gap-1.5 bg-[#2563EB] hover:bg-[#1d4ed8] text-white font-semibold text-sm px-4 py-2.5 rounded-xl transition-all duration-200 flex-shrink-0">
                Assinar
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform duration-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs">
            © {new Date().getFullYear()} Codity Tecnologia Ltda. Todos os direitos reservados.
          </p>
          <div className="flex gap-5">
            {["Política de Privacidade", "Termos de Uso", "LGPD"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-slate-600 hover:text-slate-400 text-xs transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
