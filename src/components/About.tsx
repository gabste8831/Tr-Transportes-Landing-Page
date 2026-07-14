import Image from "next/image";

const STATS = [
  { value: "100k+", label: "Entregas Anuais" },
  { value: "500+", label: "Clientes Atendidos" },
  { value: "250+", label: "Veículos na Frota" },
];

export default function About() {
  return (
    <section className="py-24 md:py-[160px] bg-white" id="sobre">
      <div className="max-w-[1280px] mx-auto px-8 grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div className="relative">
          <div className="aspect-[4/3] rounded-sm overflow-hidden bg-surface-container shadow-sm border border-outline-variant relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYqt26P7FV-NBsI5o4zGV3tI9LGi4am7N7toj1rs7aIPKzL7ESK0C81cQIUehvCxC7n2v14b2XaUbyhTZV-3icQRfT7qd7Iytcis7EswqkYDTYwUhQ--fshqffWHW9jeKQEZK7ggBghwo_AltdYEk7yLnD9ik2KTWnRevLrocOzSyKZpiKIfx-Rutz9C_uoHfTgZkG2C0J28bS8N6GouGlDKgxzOB4grSUQmly9QEBQaqVVV42Om0tXhmmlPv4xpRpkxi-1PH_tFnIbg"
              alt="Sede Vicente Transportes"
              fill
              className="object-cover hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary p-8 flex-col justify-center hidden md:flex">
            <span className="text-white text-4xl font-light mb-1">5+</span>
            <span className="text-white/60 text-[10px] uppercase tracking-widest font-medium">
              Anos de História
            </span>
          </div>
        </div>
        <div>
          <span className="text-secondary font-medium tracking-[0.2em] text-xs uppercase mb-6 block">
            Nossa História
          </span>
          <h2 className="text-primary text-4xl md:text-5xl font-light mb-10 leading-tight">
            Tradição e Modernidade em Rio do Sul
          </h2>
          <p className="text-on-surface/60 font-light text-lg mb-10 leading-relaxed">
            Fundada no coração do Alto Vale, a Vicente Transportes consolidou-se
            como referência em soluções logísticas sob medida. Nossa trajetória é
            marcada pelo compromisso com a eficiência e a segurança, transformando
            desafios complexos em rotas de sucesso.
          </p>
          <div className="grid grid-cols-3 gap-6 md:gap-12 pt-8 border-t border-outline-variant">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <span className="text-primary text-2xl md:text-3xl font-light block mb-1">
                  {stat.value}
                </span>
                <span className="text-on-surface/40 text-[10px] uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
