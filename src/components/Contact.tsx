"use client";

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
    gtag?: (...args: any[]) => void;
  }
}

import { motion } from "framer-motion";
import { toast } from "sonner";
import { useState } from "react";

export default function Contact() {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        toast.success("Contato enviado com sucesso!");
        form.reset();

        // 🔥 Facebook Pixel - Evento Lead
        if (typeof window !== "undefined" && typeof window.fbq === "function") {
          window.fbq("track", "Lead");
        }

        // 📊 Google Analytics 4 - Evento de conversão
        if (
          typeof window !== "undefined" &&
          typeof window.gtag === "function"
        ) {
          window.gtag("event", "generate_lead", {
            event_category: "Formulário",
            event_label: "Contato enviado",
            value: 1,
          });
        }
      } else {
        toast.error("Erro ao enviar o contato.");
      }
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
      toast.error("Erro de conexão. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

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
        onSubmit={handleSubmit}
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
          {loading ? "Enviando..." : "Enviar contato"}
        </button>
      </form>
    </section>
  );
}
