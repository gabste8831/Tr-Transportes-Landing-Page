import { ShieldCheck, Timer, Truck } from "lucide-react";
import styles from "./Differentiators.module.css";

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Seguro Total",
    description: (
      <>
        Sua tranquilidade é nossa prioridade. Oferecemos cobertura integral com
        apólices de <strong>RCTR-C e RCF-DC</strong> em todos os embarques.
      </>
    ),
  },
  {
    icon: Timer,
    title: "Pontualidade",
    description: (
      <>
        Eficiência medida em números:{" "}
        <strong>99% das nossas entregas</strong> são realizadas rigorosamente
        dentro do prazo acordado.
      </>
    ),
  },
  {
    icon: Truck,
    title: "Frota Própria",
    description: (
      <>
        Controle total da operação com{" "}
        <strong>veículos diversificados e modernos</strong>, adequados para
        cada especificidade de carga e volume.
      </>
    ),
  },
];

export default function Differentiators() {
  return (
    <section className={styles.section} id="diferenciais">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Compromisso</span>
          <h2 className={styles.title}>Nossos Diferenciais</h2>
          <div className={styles.divider} />
        </div>
        <div className={styles.grid}>
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.card}>
              <div className={styles.iconCircle}>
                <Icon size={34} className={styles.icon} strokeWidth={1.5} />
              </div>
              <h4 className={styles.cardTitle}>{title}</h4>
              <p className={styles.cardText}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
