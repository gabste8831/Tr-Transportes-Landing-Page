import { ShieldCheck, Timer, Truck } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: ShieldCheck,
    title: "Seguro Total",
    description: (
      <>
        Sua tranquilidade é nossa prioridade. Oferecemos cobertura integral com
        apólices de <strong className="text-white">RCTR-C e RCF-DC</strong> em
        todos os embarques.
      </>
    ),
  },
  {
    icon: Timer,
    title: "Pontualidade",
    description: (
      <>
        Eficiência medida em números:{" "}
        <strong className="text-white">99% das nossas entregas</strong> são
        realizadas rigorosamente dentro do prazo acordado.
      </>
    ),
  },
  {
    icon: Truck,
    title: "Frota Própria",
    description: (
      <>
        Controle total da operação com{" "}
        <strong className="text-white">veículos diversificados e modernos</strong>,
        adequados para cada especificidade de carga e volume.
      </>
    ),
  },
];

export default function Differentiators() {
  return (
    <section className="bg-primary py-20" id="diferenciais">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16">
          <span className="text-white/80 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Compromisso
          </span>
          <h2 className="text-white text-4xl font-light mb-6">Nossos Diferenciais</h2>
          <div className="w-16 h-1 bg-secondary mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {DIFFERENTIATORS.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center p-8 border border-white/10 rounded-sm"
            >
              <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-8">
                <Icon size={34} className="text-white" strokeWidth={1.5} />
              </div>
              <h4 className="text-white text-xl font-normal mb-4">{title}</h4>
              <p className="text-white/70 font-light text-sm leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
