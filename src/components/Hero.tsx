import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative h-[92vh] min-h-[640px] w-full flex items-end overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Frota da TR Transportes carregando entregas no Alto Vale do Itajaí"
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />

      {/* Blue gradient overlay, same tone as --color-primary */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/10 to-transparent" />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-8 pb-24 md:pb-32">
        <div className="max-w-3xl">
          <span className="flex items-center gap-2 text-white/80 font-medium tracking-[0.2em] text-xs uppercase mb-6">
            <MapPin size={14} className="text-secondary" />
            Rio do Sul — SC · Alto Vale do Itajaí
          </span>
          <h1 className="text-white text-4xl md:text-6xl font-light leading-[1.1] mb-8">
            Cada carga é um compromisso.
            <br />
            Cada rota, uma <span className="font-normal">entrega precisa</span>.
          </h1>
          <p className="text-white/70 font-light text-lg max-w-xl mb-10 leading-relaxed">
            Há mais de 5 anos movendo a economia do Alto Vale com frota própria,
            segurança total e pontualidade que se mede em números — não em promessas.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contato"
              className="inline-flex items-center gap-2 bg-secondary text-white font-medium tracking-widest text-xs uppercase px-8 py-4 hover:bg-secondary/90 transition-all duration-300 active:scale-95"
            >
              Solicitar Orçamento
              <ArrowRight size={16} />
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-medium tracking-widest text-xs uppercase px-8 py-4 hover:bg-white/10 transition-all duration-300 active:scale-95"
            >
              Conhecer Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
