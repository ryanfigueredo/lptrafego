"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "Redução de custos e burocracias",
  "Limpeza, manutenção e apoio em um só contrato",
  "Equipe treinada e supervisionada",
  "Atendimento ágil e personalizado",
  "Relatórios digitais mensais",
];

export default function Benefits() {
  return (
    <section className="py-16 px-6 bg-[#f5f8ef] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#3A5311]"
      >
        Vantagens de ser cliente KL Facilities
      </motion.h2>

      <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto text-left">
        {benefits.map((benefit, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-center gap-4"
          >
            <CheckCircle className="text-[#3A5311] w-6 h-6" />
            <p className="text-gray-800">{benefit}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
