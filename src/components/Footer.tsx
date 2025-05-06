// src/components/Footer.tsx

import { Mail, Phone, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#f5f8ef] text-[#3A5311] text-sm pt-20 border-t border-[#d6e0c2]">
      {/* Topo: Logo + Redes + Contato */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          <Link href="/" className="block">
            <Image
              src="/logo-kl.svg" // ou .png, conforme estiver salvo em /public
              alt="KL Facilities"
              width={150}
              height={40}
            />
          </Link>
          <div className="flex gap-4 text-[#3A5311]">
            <FaPhoneAlt size={16} />
            <FaEnvelope size={16} />
            <FaWhatsapp size={18} />
            <FaFacebookF size={18} />
            <FaInstagram size={18} />
            <FaYoutube size={18} />
            <FaLinkedinIn size={18} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6">
          <div className="flex items-center gap-2 bg-[#3A5311] text-white px-4 py-2 rounded-md">
            <Phone size={16} />
            41 98402-2907
          </div>
          <div className="flex items-center gap-2 bg-[#3A5311] text-white px-4 py-2 rounded-md">
            <Mail size={16} />
            contato@klfacilities.com.br
          </div>
        </div>
      </div>

      {/* Linha divisória */}
      <div className="border-t border-[#a4bf67] w-full" />

      {/* Chamada e botão */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">
        <div>
          <p className="text-2xl font-semibold text-[#1f3d0d] mb-4">
            Facilities inteligentes para empresas que valorizam eficiência.
          </p>
          <Link
            href="https://wa.me/5541984022907"
            target="_blank"
            className="inline-flex items-center gap-2 bg-[#3A5311] text-white font-medium px-5 py-3 rounded-lg"
          >
            <MessageCircle size={18} /> Fale com o comercial
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-8 text-sm">
          <div>
            <h4 className="font-semibold text-[#1f3d0d] mb-3">Institucional</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre">Sobre o Grupo</Link>
              </li>
              <li>
                <Link href="/responsabilidade-social">
                  Responsabilidade Social
                </Link>
              </li>
              <li>
                <Link href="/servicos">Serviços</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-[#1f3d0d] mb-3">Contato</h4>
            <ul className="space-y-2">
              <li>
                <Phone size={14} className="inline mr-2" />
                41 98402-2907
              </li>
              <li>
                <Mail size={14} className="inline mr-2" />
                contato@klfacilities.com.br
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Rodapé final */}
      <div className="text-center text-xs py-4 border-t border-[#d6e0c2]">
        © 2025 KL Facilities • Todos os direitos reservados.
      </div>
    </footer>
  );
}
