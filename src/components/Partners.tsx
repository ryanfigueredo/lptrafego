"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const partners = [
  "assai.png",
  "atacadao.png",
  "spani.png",
  "magalu.png",
  "grupo-mateus.png",
  "grupo-pereira.png",
];

export default function Partners() {
  return (
    <section className="py-16 px-6 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#3A5311]"
      >
        Parceiros que confiam na KL Facilities
      </motion.h2>

      <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto items-center">
        {partners.map((logo, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-[#f5f8ef] p-4 rounded-xl shadow-sm"
          >
            <Image
              src={`/logos/${logo}`}
              alt={`Logo ${logo}`}
              width={120}
              height={60}
              className="mx-auto object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
