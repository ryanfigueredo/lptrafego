"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function ContatoPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget as HTMLFormElement;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement)
        .value,
    };

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Mensagem enviada com sucesso!");
        form.reset();
      } else {
        toast.error("Erro ao enviar. Tente novamente.");
      }
    } catch {
      toast.error("Erro de conexão.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#f5f8ef] py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-[#3A5311] mb-4">
            Fale com a KL Facilities
          </h1>
          <p className="text-gray-700 mb-6">
            Entre em contato com nossa equipe comercial para solicitar
            propostas, tirar dúvidas ou agendar uma visita técnica.
          </p>

          <ul className="text-[#3A5311] space-y-3 text-lg">
            <li>📞 (41) 98402-2907</li>
            <li>✉️ contato@klfacilities.com.br</li>
            <li>📍 Curitiba - PR | Atendimento nacional</li>
          </ul>

          <div className="mt-10 rounded-xl overflow-hidden shadow-lg">
            {/* Substituir por mapa 3D se quiser */}
            <img
              src="/brasil-map.png"
              alt="Mapa do Brasil"
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white p-6 rounded-xl shadow-lg space-y-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="text"
            name="name"
            placeholder="Nome completo"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email corporativo"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="WhatsApp para contato"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
            required
          />
          <textarea
            name="message"
            placeholder="Descreva sua necessidade..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#3A5311] text-white font-semibold py-3 rounded-lg hover:bg-[#2c3d0d] transition disabled:opacity-50"
          >
            {loading ? "Enviando..." : "Enviar mensagem"}
          </button>
        </motion.form>
      </div>
    </section>
  );
}
