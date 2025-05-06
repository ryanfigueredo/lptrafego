"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function Header() {
  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-[#3A5311]">
          KL Facilities
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-[#3A5311]">
            Início
          </Link>
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[#3A5311]">
              O Grupo
              <ChevronDown size={14} />
            </button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg mt-2 z-10 text-sm">
              <Link href="/sobre" className="block px-4 py-2 hover:bg-gray-100">
                Sobre nós
              </Link>
              <Link
                href="/responsabilidade-social"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Responsabilidade Social
              </Link>
            </div>
          </div>
          <Link href="/servicos" className="hover:text-[#3A5311]">
            Serviços
          </Link>
          <Link href="/contato" className="hover:text-[#3A5311]">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
