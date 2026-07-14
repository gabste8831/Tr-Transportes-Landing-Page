"use client";

import { useState, FormEvent } from "react";
import { MapPin, Phone, Mail, MessageCircle, Camera, Briefcase } from "lucide-react";

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
    <section className="bg-surface-container-low py-20" id="contato">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <div>
              <span className="text-secondary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
                Contato
              </span>
              <h3 className="text-primary text-4xl font-light mb-8">
                Vamos conversar sobre sua logística?
              </h3>
              <p className="text-on-surface/60 font-light text-lg leading-relaxed">
                Nossa equipe está pronta para oferecer soluções personalizadas
                para o seu negócio no Alto Vale.
              </p>
            </div>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <MapPin size={20} className="text-primary/40 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-primary font-medium mb-1">Escritório Central</p>
                  <p className="text-on-surface/50 font-light text-sm leading-relaxed">
                    Rua Principal, 1234 - Distrito Industrial
                    <br />
                    Rio do Sul - SC, 89160-000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Phone size={20} className="text-primary/40 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-primary font-medium mb-1">Telefones</p>
                  <p className="text-on-surface/50 font-light text-sm">
                    (47) 3521-0000 | (47) 99999-0000
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <Mail size={20} className="text-primary/40 mt-1" strokeWidth={1.5} />
                <div>
                  <p className="text-primary font-medium mb-1">E-mail</p>
                  <p className="text-on-surface/50 font-light text-sm">
                    contato@vicentetransportes.com.br
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-4 pt-8 border-t border-outline-variant">
              <a
                aria-label="WhatsApp"
                href="https://wa.me/5547999990000"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-outline-variant hover:bg-primary transition-all duration-300 active:scale-95"
              >
                <MessageCircle size={18} className="text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                aria-label="Instagram"
                href="#"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-outline-variant hover:bg-primary transition-all duration-300 active:scale-95"
              >
                <Camera size={18} className="text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                aria-label="E-mail"
                href="mailto:contato@vicentetransportes.com.br"
                className="group flex items-center justify-center w-12 h-12 rounded-full border border-outline-variant hover:bg-primary transition-all duration-300 active:scale-95"
              >
                <Mail size={18} className="text-primary group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="group flex items-center justify-center px-6 h-12 rounded-full border border-outline-variant hover:bg-primary transition-all duration-300 active:scale-95"
              >
                <Briefcase size={16} className="text-primary group-hover:text-white transition-colors mr-2" />
                <span className="text-primary group-hover:text-white transition-colors text-xs uppercase font-medium tracking-widest">
                  Trabalhe conosco
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="rounded-sm mx-auto w-full">
            <form
              onSubmit={handleSubmit}
              className="bg-white shadow-sm border border-outline-variant/30 w-full space-y-4 mx-auto max-w-xl p-8 md:p-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1 border-b border-outline-variant/50 py-4">
                  <label htmlFor="name" className="block font-medium uppercase tracking-widest text-on-surface/40 text-xs">
                    Nome Completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full bg-transparent border-none p-0 h-8 focus:ring-0 font-light text-on-surface placeholder:text-on-surface/20 text-base outline-none"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-1 border-b border-outline-variant/50 py-4">
                  <label htmlFor="email" className="block font-medium uppercase tracking-widest text-on-surface/40 text-xs">
                    E-mail Corporativo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full bg-transparent border-none p-0 h-8 focus:ring-0 font-light text-on-surface placeholder:text-on-surface/20 text-base outline-none"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="space-y-1 border-b border-outline-variant/50 py-4">
                <label htmlFor="subject" className="block font-medium uppercase tracking-widest text-on-surface/40 text-xs">
                  Assunto
                </label>
                <select
                  id="subject"
                  name="subject"
                  defaultValue="Solicitar Orçamento"
                  className="w-full bg-transparent border-none p-0 h-8 focus:ring-0 font-light text-on-surface appearance-none text-base outline-none"
                >
                  <option>Solicitar Orçamento</option>
                  <option>Suporte Técnico</option>
                  <option>Trabalhe Conosco</option>
                  <option>Outros</option>
                </select>
              </div>

              <div className="space-y-1 border-b border-outline-variant/50 py-4">
                <label htmlFor="message" className="block font-medium uppercase tracking-widest text-on-surface/40 text-xs">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-none p-0 focus:ring-0 font-light text-on-surface placeholder:text-on-surface/20 resize-none min-h-32 text-base outline-none"
                  placeholder="Descreva sua necessidade"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full border border-outline-variant py-4 text-primary font-medium tracking-widest text-xs uppercase hover:bg-primary hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "sending" ? "Enviando..." : "Enviar Mensagem"}
                </button>

                {status === "success" && (
                  <p className="text-secondary text-sm font-light mt-4" role="status">
                    Mensagem enviada com sucesso! Nossa equipe entrará em contato em breve.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-secondary text-sm font-light mt-4" role="alert">
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
