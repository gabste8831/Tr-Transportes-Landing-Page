"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "A pontualidade e o cuidado com a carga são os diferenciais da Vicente Transportes. Desde que iniciamos a parceria, reduzimos nossas perdas logísticas em 15%.",
    name: "Carlos Eduardo Rocha",
    role: "Diretor de Logística, Agro-Corp",
  },
  {
    quote:
      "O atendimento personalizado e a transparência no rastreamento nos dão a segurança necessária para focar no crescimento do nosso varejo.",
    name: "Mariana Silveira",
    role: "Gerente de Operações, Rede Varejo",
  },
  {
    quote:
      "Uma empresa que entende as urgências do setor têxtil. Sempre prontos para atender demandas complexas com agilidade e precisão.",
    name: "Roberto Mendes",
    role: "CEO, Sul Têxtil",
  },
];

export default function Testimonials() {
  const [start, setStart] = useState(0);
  const visible = 3;

  const prev = () =>
    setStart((s) => (s - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setStart((s) => (s + 1) % TESTIMONIALS.length);

  const ordered = Array.from(
    { length: Math.min(visible, TESTIMONIALS.length) },
    (_, i) => TESTIMONIALS[(start + i) % TESTIMONIALS.length]
  );

  return (
    <section className="py-24 bg-white" id="depoimentos">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-secondary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Depoimentos
          </span>
          <h2 className="text-primary text-4xl font-light mb-6">
            O que nossos clientes dizem
          </h2>
          <div className="w-16 h-px bg-outline-variant mx-auto mb-6" />
          <p className="text-on-surface/50 max-w-xl mx-auto font-light">
            A confiança de quem move o Brasil conosco todos os dias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ordered.map((t) => (
            <div
              key={t.name}
              className="p-8 border border-outline-variant rounded-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className="text-secondary fill-secondary" />
                ))}
              </div>
              <p className="text-on-surface/70 font-light italic mb-8 leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-primary font-medium">{t.name}</p>
                <p className="text-on-surface/40 text-[10px] uppercase tracking-widest mt-1">
                  {t.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center gap-6 mt-12">
          <button
            aria-label="Depoimento anterior"
            onClick={prev}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Próximo depoimento"
            onClick={next}
            className="w-12 h-12 flex items-center justify-center rounded-full border border-primary/20 text-primary hover:bg-primary/5 transition-all active:scale-95"
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
