// src/app/o-grupo/sobre/page.tsx
"use client";

import { motion } from "framer-motion";

export default function SobrePage() {
  return (
    <section className="bg-[#f5f8ef] min-h-screen py-16 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8 md:p-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#3A5311] mb-6"
        >
          Sobre a KL Facilities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-700 text-base md:text-lg leading-relaxed mb-8"
        >
          A KL Facilities oferece soluções completas em limpeza profissional,
          apoio operacional e serviços de manutenção. Atendemos academias, redes
          de varejo, escritórios, condomínios e muito mais com equipes treinadas
          e supervisão ativa.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-[#3A5311] mb-2">
              Nossa Missão
            </h2>
            <p className="text-gray-700">
              Garantir ambientes limpos, seguros e organizados, promovendo
              bem-estar, produtividade e tranquilidade para os nossos clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h2 className="text-xl font-semibold text-[#3A5311] mb-2">
              Nossos Valores
            </h2>
            <ul className="list-disc pl-5 text-gray-700 space-y-1">
              <li>Excelência no atendimento</li>
              <li>Transparência e ética</li>
              <li>Comprometimento com resultados</li>
              <li>Valorização das pessoas</li>
              <li>Sustentabilidade</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
