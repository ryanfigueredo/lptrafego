"use client";

import { motion } from "framer-motion";

export default function GrupoPage() {
  return (
    <section className="bg-[#f5f8ef] py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#3A5311] mb-8"
        >
          Conheça a KL Facilities
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg text-gray-700 mb-6"
        >
          Somos uma empresa brasileira em constante expansão, comprometida com a
          excelência em terceirização de serviços. Atuamos com foco em
          resultados, sustentabilidade e inovação.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold text-[#3A5311] mb-2">
              Missão
            </h2>
            <p>
              Oferecer soluções personalizadas em limpeza, apoio e manutenção,
              com foco na eficiência e na satisfação dos nossos clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold text-[#3A5311] mb-2">Visão</h2>
            <p>
              Ser referência nacional em facilities, reconhecida pela qualidade,
              ética e inovação nos serviços prestados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white p-6 rounded-xl shadow"
          >
            <h2 className="text-xl font-semibold text-[#3A5311] mb-2">
              Valores
            </h2>
            <ul className="list-disc pl-5">
              <li>Compromisso com o cliente</li>
              <li>Inovação e tecnologia</li>
              <li>Respeito às pessoas</li>
              <li>Ética e transparência</li>
              <li>Sustentabilidade</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
