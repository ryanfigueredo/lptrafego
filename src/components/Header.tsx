"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <header className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo-kl.svg"
            alt="KL Facilities"
            width={140}
            height={40}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700 relative">
          <Link href="/" className="hover:text-[#3A5311]">
            Início
          </Link>

          <div className="relative">
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="flex items-center gap-1 hover:text-[#3A5311] focus:outline-none"
            >
              A holding
              <ChevronDown size={14} />
            </button>
            {openDropdown && (
              <div className="absolute left-0 top-full mt-2 bg-white shadow-lg z-10 rounded-md w-48">
                <Link
                  href="/o-grupo/sobre"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Sobre nós
                </Link>

                <Link
                  href="/o-grupo/historia"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Nossa História
                </Link>
                <Link
                  href="/o-grupo/responsabilidade"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setOpenDropdown(false)}
                >
                  Responsabilidade Social
                </Link>
              </div>
            )}
          </div>

          <Link href="/servicos" className="hover:text-[#3A5311]">
            Serviços
          </Link>
          <Link href="/contato" className="hover:text-[#3A5311]">
            Contato
          </Link>
        </nav>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-[#3A5311]" />
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-6 text-[#3A5311]">
              <SheetHeader>
                <VisuallyHidden>
                  <SheetTitle>Menu mobile</SheetTitle>
                </VisuallyHidden>
              </SheetHeader>

              <div className="flex flex-col gap-4 text-lg mt-6">
                <Link href="/" className="hover:text-[#2c3d0d]">
                  Início
                </Link>
                <Link href="/o-grupo/sobre" className="hover:text-[#2c3d0d]">
                  Sobre nós
                </Link>
                <Link
                  href="/o-grupo/responsabilidade"
                  className="hover:text-[#2c3d0d]"
                >
                  Responsabilidade Social
                </Link>
                <Link href="/servicos" className="hover:text-[#2c3d0d]">
                  Serviços
                </Link>
                <Link href="/contato" className="hover:text-[#2c3d0d]">
                  Contato
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
