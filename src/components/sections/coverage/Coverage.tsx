import Image from "next/image";
import { MapPin, Circle, Clock } from "lucide-react";
import styles from "./Coverage.module.css";

const ITEMS = [
  { icon: MapPin, label: "Base Estratégica em Rio do Sul" },
  { icon: Circle, label: "Cobertura total num raio de 150km" },
  { icon: Clock, label: "Prazos diferenciados para o Alto Vale" },
];

export default function Coverage() {
  return (
    <section className={styles.section} id="cobertura">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.left}>
            <span className={styles.eyebrow}>Presença Regional</span>
            <h2 className={styles.title}>Área de Atuação e Cobertura</h2>
            <p className={styles.text}>
              Atendimento especializado em todo o{" "}
              <span className={styles.highlight}>Alto Vale do Itajaí</span>,
              com um raio de atuação de{" "}
              <span className={styles.highlight}>
                150km a partir de Rio do Sul - SC
              </span>
              .
            </p>
            <div className={styles.list}>
              {ITEMS.map(({ icon: Icon, label }) => (
                <div key={label} className={styles.listItem}>
                  <Icon size={18} className={styles.listIcon} strokeWidth={1.75} />
                  <span className={styles.listLabel}>{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.imageWrap}>
            <div className={styles.imageFrame}>
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7mV8c4rKIdl0UBpcJ2BK38xkr6tpnRw0wm8HQ1wMbixb5TGzafAPIfybTfWyPKkkjC33LjRsRRHMK8YlTnvlqTafqcn1DkHoIZFCUvebxMSUA3doyw1tLm84MI0gJH2kZAxhiEIUdKDm_yYq-Dtpe_Ad-yWzM-Mj3q0KD4S4rYaPYtraXKW_-rn2aPKRfFsgrGIFRsRH2JVZUP9XLbC8htcDwdQGrj0ujJUUy0gYpXoztrmIkyUbwhj-GVk1INecKV69gylz7gi4"
                alt="Mapa de Atuação Vicente Transportes"
                fill
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
