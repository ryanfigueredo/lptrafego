"use client";

import { motion } from "framer-motion";

export default function NossaHistoria() {
  return (
    <section className="px-6 py-16 md:py-24 bg-[#f5f8ef] text-[#3A5311]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Uma Jornada de Excelência
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 text-lg md:text-xl text-gray-700"
        >
          Dos humildes começos ao reconhecimento nacional
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-8 text-gray-600 max-w-3xl mx-auto"
        >
          Enfrentamos desafios significativos nos primeiros anos: concorrência
          acirrada, poucos recursos e a necessidade constante de provar nosso
          valor. Mas com resiliência e excelência, crescemos e conquistamos
          contratos de peso em todo o Brasil.
        </motion.p>
      </div>

      {/* Linha do tempo */}
      <div className="mt-16 max-w-4xl mx-auto space-y-12 relative before:absolute before:left-4 before:top-0 before:bottom-0 before:w-1 before:bg-[#3A5311]/20">
        {[
          {
            title: "Fundação da KL Facilities",
            description:
              "Tudo começou com uma ideia ousada e um propósito claro: transformar o setor de limpeza e apoio operacional.",
            year: "2015",
          },
          {
            title: "1º Grande Contrato",
            description:
              "Conquistamos a confiança do nosso primeiro cliente de grande porte, marcando um salto estratégico.",
            year: "2018",
          },
          {
            title: "Expansão Nacional",
            description:
              "Com presença nas 5 regiões do Brasil, expandimos nossa estrutura e atuação em grandes centros comerciais.",
            year: "2022",
          },
          {
            title: "+1000 Colaboradores",
            description:
              "Hoje contamos com uma equipe ampla, capacitada e comprometida com a excelência.",
            year: "2024",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative pl-12"
          >
            <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#3A5311] rounded-full" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <span className="text-sm text-gray-500">{item.year}</span>
            <p className="mt-1 text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
