import Benefits from "@/components/Benefits";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Segments from "@/components/Segments";
import Testimonials from "@/components/Testimonials";

export const metadata = {
  title: "KL Facilities | Soluções em Limpeza, Facilities e Apoio Operacional",
  description:
    "Reduza custos e aumente a eficiência com serviços profissionais para condomínios, escolas, academias e empresas. Atendimento em todo o Brasil.",
  openGraph: {
    title: "KL Facilities | Facilities sob medida para sua empresa",
    description:
      "Limpeza técnica, apoio operacional e manutenção para empresas que exigem excelência. Peça sua proposta!",
    url: "https://lp.klfacilities.com.br",
    siteName: "KL Facilities",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "KL Facilities",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Benefits />
      <Segments />
      <Partners />
      <Testimonials />
      <Contact />
    </div>
  );
}
