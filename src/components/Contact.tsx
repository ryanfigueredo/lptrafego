"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contato" className="py-20 px-6 bg-[#f5f8ef] text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-[#3A5311]"
      >
        Solicite um orçamento agora mesmo
      </motion.h2>

      <form
        className="mt-10 max-w-xl mx-auto bg-white p-6 rounded-xl shadow-lg text-left space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Formulário enviado!");
        }}
      >
        <input
          type="text"
          placeholder="Nome completo"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
          required
        />
        <input
          type="email"
          placeholder="Email corporativo"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
          required
        />
        <input
          type="tel"
          placeholder="WhatsApp para contato"
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
          required
        />
        <textarea
          placeholder="Descreva sua necessidade..."
          rows={4}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />
        <button
          type="submit"
          className="w-full bg-[#3A5311] text-white font-semibold py-3 rounded-lg hover:bg-[#2c3d0d]"
        >
          Enviar contato
        </button>
      </form>
    </section>
  );
}
