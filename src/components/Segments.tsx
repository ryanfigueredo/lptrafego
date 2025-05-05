"use client";

import { motion } from "framer-motion";
import { Briefcase, School, Dumbbell, Building2 } from "lucide-react";

const segments = [
  {
    title: "Academias e Clínicas",
    icon: <Dumbbell className="w-6 h-6" />,
    items: [
      "Limpeza de alto padrão",
      "Sanitização de equipamentos",
      "Apoio operacional em horários estendidos",
    ],
  },
  {
    title: "Colégios e Instituições de Ensino",
    icon: <School className="w-6 h-6" />,
    items: [
      "Limpeza técnica e sanitização",
      "Manutenção preventiva",
      "Apoio pós-eventos",
    ],
  },
  {
    title: "Escritórios e Corporativo",
    icon: <Briefcase className="w-6 h-6" />,
    items: [
      "Facilities B2B",
      "Limpeza profissional",
      "Relatórios mensais com SLA",
    ],
  },
  {
    title: "Condomínios",
    icon: <Building2 className="w-6 h-6" />,
    items: [
      "Portaria, manutenção, limpeza",
      "Equipe treinada e dedicada",
      "Atendimento sob demanda",
    ],
  },
];

export default function Segments() {
  return (
    <section className="py-20 bg-white" id="segments">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-2xl md:text-4xl font-bold text-center mb-12 text-[#1c3b0f]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Segmentos Atendidos
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {segments.map((seg, index) => (
            <motion.div
              key={index}
              className="bg-[#f6f9f1] rounded-lg p-6 shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
            >
              <div className="flex items-center gap-2 mb-4 text-[#1c3b0f] font-semibold">
                {seg.icon}
                {seg.title}
              </div>
              <ul className="text-sm text-gray-700 space-y-1">
                {seg.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
