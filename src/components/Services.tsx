import { Handshake, Package, Truck, RotateCcw } from "lucide-react";

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
    <section className="bg-primary py-20 md:py-24" id="servicos">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-white/80 font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
            Soluções Logísticas
          </span>
          <h2 className="text-white text-4xl font-light mb-6">Serviços Oferecidos</h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
          <p className="text-white/60 max-w-xl mx-auto font-light">
            Especialização técnica e compromisso para garantir que sua mercadoria
            chegue ao destino com integridade total.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="bg-transparent p-8 border border-white/10 rounded-sm hover:bg-white/5 transition-all duration-500 flex flex-col h-full group"
            >
              <div className="mb-8">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
                  <Icon size={22} className="text-white" strokeWidth={1.5} />
                </div>
              </div>
              <h3 className="text-white text-xl font-normal mb-4">{title}</h3>
              <p className="text-white/70 font-light text-sm leading-relaxed mb-6">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
