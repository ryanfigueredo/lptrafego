"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const servicos = [
  {
    titulo: "Limpeza de Pisos e Tratamentos Técnicos",
    descricao:
      "Tratamento e conservação de pisos industriais, comerciais e hospitalares. Utilizamos técnicas específicas para cada tipo de piso.",
    cta: "Ver detalhes",
  },
  {
    titulo: "Facilities para Condomínios",
    descricao:
      "Portaria, manutenção, limpeza de áreas comuns, apoio administrativo e serviços gerais sob demanda com custo otimizado.",
    cta: "Solicitar proposta",
  },
  {
    titulo: "Controle de Acesso e Apoio Operacional",
    descricao:
      "Apoio a portarias, recepção e controle de fluxo com equipe treinada e confiável. Ideal para centros comerciais e edifícios.",
    cta: "Agendar reunião",
  },
  {
    titulo: "Limpeza Profissional para Academias",
    descricao:
      "Sanitização de equipamentos, manutenção e limpeza de vestiários com foco em saúde, segurança e bem-estar dos frequentadores.",
    cta: "Conhecer soluções",
  },
  {
    titulo: "Facilities Corporativo (Empresas e Escritórios)",
    descricao:
      "Serviços contínuos de limpeza, apoio, manutenção predial e relatórios periódicos com SLAs definidos em contrato.",
    cta: "Solicitar atendimento",
  },
];

export default function Servicos() {
  return (
    <section className="bg-[#f5f8ef] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#3A5311] text-center mb-12"
        >
          Nossos Serviços
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-[#3A5311]">
                {servico.titulo}
              </h2>
              <p className="mt-3 text-gray-700">{servico.descricao}</p>
              <Link
                href="#contato"
                className="inline-block mt-5 text-sm text-[#3A5311] font-medium underline hover:text-[#2c3d0d]"
              >
                {servico.cta}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
