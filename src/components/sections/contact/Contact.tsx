"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, Camera, Briefcase } from "lucide-react";
import styles from "./Contact.module.css";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xojgvnro";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className={styles.section} id="contato">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Contact Info */}
          <div className={styles.info}>
            <div>
              <span className={styles.eyebrow}>Contato</span>
              <h3 className={styles.title}>Vamos conversar sobre sua logística?</h3>
              <p className={styles.lead}>
                Nossa equipe está pronta para oferecer soluções personalizadas
                para o seu negócio no Alto Vale.
              </p>
            </div>
            <div className={styles.detailsList}>
              <div className={styles.detailRow}>
                <MapPin size={20} className={styles.detailIcon} strokeWidth={1.5} />
                <div>
                  <p className={styles.detailLabel}>Escritório Central</p>
                  <p className={styles.detailText}>
                    Rua Principal, 1234 - Distrito Industrial
                    <br />
                    Rio do Sul - SC, 89160-000
                  </p>
                </div>
              </div>
              <div className={styles.detailRow}>
                <Phone size={20} className={styles.detailIcon} strokeWidth={1.5} />
                <div>
                  <p className={styles.detailLabel}>Telefones</p>
                  <p className={styles.detailText}>
                    (47) 3521-0000 | (47) 99999-0000
                  </p>
                </div>
              </div>
              <div className={styles.detailRow}>
                <Mail size={20} className={styles.detailIcon} strokeWidth={1.5} />
                <div>
                  <p className={styles.detailLabel}>E-mail</p>
                  <p className={styles.detailText}>
                    contato@vicentetransportes.com.br
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.socialRow}>
              <a aria-label="WhatsApp" href="https://wa.me/5547999990000" className={styles.socialCircle}>
                <MessageCircle size={18} />
              </a>
              <a aria-label="Instagram" href="#" className={styles.socialCircle}>
                <Camera size={18} />
              </a>
              <a aria-label="E-mail" href="mailto:contato@vicentetransportes.com.br" className={styles.socialCircle}>
                <Mail size={18} />
              </a>
              <a href="#" className={styles.workWithUs}>
                <Briefcase size={16} className={styles.workWithUsIcon} />
                <span className={styles.workWithUsLabel}>Trabalhe conosco</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className={styles.formWrap}>
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formRow}>
                <div className={styles.field}>
                  <label htmlFor="name" className={styles.label}>
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className={styles.input}
                    placeholder="Seu nome"
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email" className={styles.label}>
                    E-mail Corporativo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className={styles.input}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="subject" className={styles.label}>
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue="Solicitar Orçamento"
                  className={styles.select}
                >
                  <option>Solicitar Orçamento</option>
                  <option>Suporte Técnico</option>
                  <option>Trabalhe Conosco</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className={styles.field}>
                <label htmlFor="message" className={styles.label}>
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={styles.textarea}
                  placeholder="Descreva sua necessidade"
                />
              </div>

              <div className={styles.submitWrap}>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={styles.submitButton}
                >
                  {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {status === "success" && (
                  <p className={styles.statusMessage} role="status">
                    Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
                  </p>
                )}
                {status === "error" && (
                  <p className={styles.statusMessage} role="alert">
                    Não foi possível enviar sua mensagem. Tente novamente ou fale com a gente pelo WhatsApp.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
