"use client";

declare global {
  interface Window {
    fbq?: (command: string, event: string, ...args: unknown[]) => void;
  }
}

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

export default function Hero() {
  return (
    <section className="bg-[#f8faf7] px-6 py-16 md:py-24 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-[#2f4e1c] leading-tight"
        >
          Excelência em Limpeza Profissional e Facilities Operacionais
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-6 text-lg md:text-xl text-[#374151]"
        >
          Mais de 60 contratos ativos. Atendimento em atacadistas e centros
          comerciais em todo o Brasil.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="#contato"
            className="bg-[#6c9b3b] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2f4e1c] transition"
          >
            Solicite uma Proposta
          </Link>
          <a
            href="https://wa.me/5541984022907"
            target="_blank"
            onClick={() => {
              if (
                typeof window !== "undefined" &&
                typeof window.fbq === "function"
              ) {
                window.fbq("track", "Contact");
              }
            }}
            className="border border-[#6c9b3b] text-[#2f4e1c] px-6 py-3 rounded-xl font-medium hover:bg-[#e9f0e3] transition"
          >
            Falar no WhatsApp
          </a>
        </motion.div>

        {/* Player do vídeo institucional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-24 aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          <ReactPlayer
            url="/videos/institucional-kl.mp4"
            width="100%"
            height="100%"
            playing={true}
            muted={true}
            controls={true}
            playsinline
            style={{ objectFit: "cover" }}
            config={{
              file: {
                attributes: {
                  style: {
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  },
                },
              },
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
