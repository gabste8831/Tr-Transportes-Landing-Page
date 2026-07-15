import { Mail, MessageCircle, Camera, Briefcase } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <img
              src="/images/logo_tr.svg"
              alt="Vicente Transportes"
              className={styles.logo}
            />
            <p className={styles.brandText}>
              Soluções logísticas inteligentes e seguras para conectar o seu
              negócio ao futuro.
            </p>
            <div className={styles.socials}>
              <a href="#" className={styles.socialLink}>
                <Camera size={18} />
              </a>
              <a href="#" className={styles.socialLink}>
                <Briefcase size={18} />
              </a>
            </div>
          </div>

          <div className={styles.navCol}>
            <h4 className={styles.colTitle}>Navegação</h4>
            <ul className={styles.linkList}>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#servicos">Serviços</a></li>
              <li><a href="#diferenciais">Diferenciais</a></li>
              <li><a href="#cobertura">Cobertura</a></li>
            </ul>
          </div>

          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contato</h4>
            <ul className={styles.linkList}>
              <li>
                <a className={styles.contactLink} href="mailto:contato@vicentetransportes.com.br">
                  <Mail size={16} className={styles.contactIcon} /> contato@vicentetransportes.com.br
                </a>
              </li>
              <li>
                <a className={styles.contactLink} href="https://wa.me/5547999990000">
                  <MessageCircle size={16} className={styles.contactIcon} /> (47) 99999-0000
                </a>
              </li>
            </ul>
          </div>

          <div className={styles.locationCol}>
            <h4 className={styles.colTitle}>Localização</h4>
            <p className={styles.address}>
              Rio do Sul - SC
              <br />
              Distrito Industrial
              <br />
              Alto Vale do Itajaí
            </p>
          </div>
        </div>

        <div className={styles.bottom}>
          <div>
            <p className={styles.copy}>
              © {new Date().getFullYear()} Vicente Transportes. Todos os direitos reservados.
            </p>
            <p className={styles.tagline}>Excelência em Logística Regional</p>
          </div>
        </div>
      </div>
    </footer>
  );
}