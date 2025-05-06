"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function SistemaGestaoQualidade() {
  return (
    <section className="bg-[#f5f8ef] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#3A5311] text-center mb-12"
        >
          Sistema de Gestão da Qualidade
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              A KL Facilities possui um Sistema de Gestão da Qualidade baseado
              em processos, indicadores e melhoria contínua. Nosso foco é
              garantir a entrega com excelência e previsibilidade em todas as
              etapas da operação.
            </p>
            <ul className="mt-6 list-disc list-inside text-[#3A5311]">
              <li>Procedimentos padronizados por tipo de serviço</li>
              <li>Auditorias internas periódicas</li>
              <li>Capacitação e reciclagem constante das equipes</li>
              <li>Relatórios de desempenho e satisfação do cliente</li>
              <li>Acompanhamento por SLA (Service Level Agreement)</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/qualidade.jpg"
              width={600}
              height={400}
              alt="Sistema de Gestão da Qualidade"
              className="rounded-xl shadow-md"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold text-[#3A5311] mb-3">
            Qualidade é o que sustenta o nosso crescimento.
          </h2>
          <p className="text-gray-600">
            Processos bem definidos = Menos erros + Clientes mais satisfeitos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
