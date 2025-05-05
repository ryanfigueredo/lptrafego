"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Síndico João Carlos",
    text: "A KL Facilities revolucionou a gestão do nosso condomínio. Equipe ágil, custo sob controle e zero dor de cabeça.",
  },
  {
    name: "Síndica Maria Luiza",
    text: "Serviço de limpeza impecável, equipe bem treinada e atendimento sempre rápido. Recomendo para qualquer condomínio.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#3A5311]"
      >
        O que dizem nossos clientes
      </motion.h2>

      <div className="mt-10 grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            className="bg-[#f5f8ef] p-6 rounded-xl shadow-md"
          >
            <p className="text-gray-700 italic">“{item.text}”</p>
            <p className="mt-4 font-semibold text-[#3A5311]">— {item.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
