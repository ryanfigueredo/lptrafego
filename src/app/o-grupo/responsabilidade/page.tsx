"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ResponsabilidadeSocial() {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-[#3A5311] text-center mb-12"
        >
          Responsabilidade Social
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Image
              src="/images/social1.jpg"
              width={600}
              height={400}
              alt="Ação Social KL Facilities"
              className="rounded-xl shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              Acreditamos que nosso papel vai além da prestação de serviços. A
              KL Facilities investe em ações sociais, programas de inclusão,
              capacitação de jovens em vulnerabilidade e projetos de
              sustentabilidade ambiental.
            </p>
            <ul className="mt-6 list-disc list-inside text-[#3A5311]">
              <li>Campanhas solidárias em comunidades locais</li>
              <li>Programas internos de reciclagem</li>
              <li>Parcerias com ONGs e instituições educacionais</li>
              <li>Capacitação de mão de obra local</li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl font-semibold text-[#3A5311] mb-4">
            + de 500 pessoas impactadas em nossos projetos sociais
          </h2>
          <p className="text-gray-600">
            Nosso compromisso é transformar ambientes e vidas.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
