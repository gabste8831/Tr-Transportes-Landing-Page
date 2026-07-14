"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#equipe", label: "Equipe" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant h-20">
      <nav className="max-w-screen-2xl mx-auto px-6 md:px-10 flex justify-between items-center w-full h-full">
        <a href="#home" className="text-primary text-xl md:text-2xl font-medium tracking-widest uppercase whitespace-nowrap">
          VICENTE <span className="font-light">TRANSPORTES</span>
        </a>

        <div className="hidden md:flex items-center gap-10 ml-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface/70 hover:text-primary transition-colors text-sm font-medium tracking-wide first:text-secondary first:border-b-2 first:border-secondary first:pb-1"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          className="md:hidden text-primary"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-surface border-b border-outline-variant px-6 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-on-surface/80 hover:text-primary transition-colors text-sm font-medium tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
