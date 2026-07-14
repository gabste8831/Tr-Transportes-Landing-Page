"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./Testimonials.module.css";

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
    <section className={styles.section} id="depoimentos">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Depoimentos</span>
          <h2 className={styles.title}>O que nossos clientes dizem</h2>
          <div className={styles.divider} />
          <p className={styles.lead}>
            A confiança de quem move o Brasil conosco todos os dias.
          </p>
        </div>

        <div className={styles.grid}>
          {ordered.map((t) => (
            <div key={t.name} className={styles.card}>
              <div className={styles.stars}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} className={styles.star} />
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.footer}>
                <p className={styles.name}>{t.name}</p>
                <p className={styles.role}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.controls}>
          <button
            aria-label="Depoimento anterior"
            onClick={prev}
            className={styles.controlButton}
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Próximo depoimento"
            onClick={next}
            className={styles.controlButton}
          >
            <ChevronRight size={20} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </section>
  );
}
