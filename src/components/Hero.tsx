"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-[#f5f8ef] px-6 text-center">
      <div className="max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-[#3A5311]"
        >
          Seu condomínio merece mais do que “faxina”.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-gray-700"
        >
          Reduza custos e ganhe eficiência com serviços profissionais de
          limpeza, apoio operacional e manutenção. A KL Facilities cuida de tudo
          para você.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contato"
            className="bg-[#3A5311] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2c3d0d] transition"
          >
            Solicitar orçamento
          </Link>
          <Link
            href="https://wa.me/5541984022907"
            target="_blank"
            className="border border-[#3A5311] text-[#3A5311] px-6 py-3 rounded-xl font-medium hover:bg-[#e4ead8] transition"
          >
            Falar no WhatsApp
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
