import Image from "next/image";
import { MapPin, Circle, Clock } from "lucide-react";

const ITEMS = [
  { icon: MapPin, label: "Base Estratégica em Rio do Sul" },
  { icon: Circle, label: "Cobertura total num raio de 150km" },
  { icon: Clock, label: "Prazos diferenciados para o Alto Vale" },
];

export default function Coverage() {
  return (
    <section className="bg-white overflow-hidden py-20 md:py-[100px]" id="cobertura">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-secondary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
              Presença Regional
            </span>
            <h2 className="text-primary text-4xl font-light mb-8">
              Área de Atuação e Cobertura
            </h2>
            <p className="text-on-surface/60 font-light text-lg mb-8 leading-relaxed">
              Atendimento especializado em todo o{" "}
              <span className="font-normal text-primary">Alto Vale do Itajaí</span>,
              com um raio de atuação de{" "}
              <span className="font-normal text-primary">
                150km a partir de Rio do Sul - SC
              </span>
              .
            </p>
            <div className="space-y-4">
              {ITEMS.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 py-4 border-b border-outline-variant last:border-b-0"
                >
                  <Icon size={18} className="text-secondary" strokeWidth={1.75} />
                  <span className="text-sm font-light">{label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="overflow-hidden aspect-square relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7mV8c4rKIdl0UBpcJ2BK38xkr6tpnRw0wm8HQ1wMbixb5TGzafAPIfybTfWyPKkkjC33LjRsRRHMK8YlTnvlqTafqcn1DkHoIZFCUvebxMSUA3doyw1tLm84MI0gJH2kZAxhiEIUdKDm_yYq-Dtpe_Ad-yWzM-Mj3q0KD4S4rYaPYtraXKW_-rn2aPKRfFsgrGIFRsRH2JVZUP9XLbC8htcDwdQGrj0ujJUUy0gYpXoztrmIkyUbwhj-GVk1INecKV69gylz7gi4"
                alt="Mapa de Atuação Vicente Transportes"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
