import { Handshake, Package, Truck, RotateCcw } from "lucide-react";
import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: Handshake,
    title: "Parcerias de Longo Prazo",
    description:
      "Contratos estratégicos com gestão dedicada, integração de ERP e tabelas fixas para planejamento de longo curso.",
  },
  {
    icon: Package,
    title: "Cargas Fracionadas",
    description:
      "Ideal para pequenos volumes. Coleta e entrega eficiente compartilhando espaço, reduzindo custos sem perder a agilidade.",
  },
  {
    icon: Truck,
    title: "Cargas Completas",
    description:
      "Veículo exclusivo para sua mercadoria. Máxima segurança, rapidez no trânsito e zero manipulação intermediária.",
  },
  {
    icon: RotateCcw,
    title: "Logística Reversa",
    description:
      "Retorno planejado de embalagens, paletes ou devoluções. Sustentabilidade e controle total do ciclo de vida da carga.",
  },
];

export default function Services() {
  return (
    <section className={styles.section} id="servicos">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Soluções Logísticas</span>
          <h2 className={styles.title}>Serviços Oferecidos</h2>
          <div className={styles.divider} />
          <p className={styles.lead}>
            Especialização técnica e compromisso para garantir que sua mercadoria
            chegue ao destino com integridade total.
          </p>
        </div>
        <div className={styles.grid}>
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div key={title} className={styles.card}>
              <div className={styles.iconWrap}>
                <div className={styles.iconCircle}>
                  <Icon size={22} className={styles.icon} strokeWidth={1.5} />
                </div>
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardText}>{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
