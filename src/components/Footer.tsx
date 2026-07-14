import { Mail, MessageCircle, Camera, Briefcase } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white border-t border-white/10">
      <div className="max-w-[1280px] mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          <div className="md:col-span-4 space-y-8">
            <div className="text-white text-2xl font-medium tracking-widest uppercase whitespace-nowrap">
              VICENTE <span className="font-light">TRANSPORTES</span>
            </div>
            <p className="text-white/60 text-sm font-light leading-relaxed max-w-xs">
              Soluções logísticas inteligentes e seguras para conectar o seu
              negócio ao futuro.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
              >
                <Camera size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-all"
              >
                <Briefcase size={18} />
              </a>
            </div>
          </div>

          <div className="md:col-span-2">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">
              Navegação
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li><a className="hover:text-secondary transition-colors" href="#sobre">Sobre Nós</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#servicos">Serviços</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#diferenciais">Diferenciais</a></li>
              <li><a className="hover:text-secondary transition-colors" href="#cobertura">Cobertura</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">
              Contato
            </h4>
            <ul className="space-y-4 text-sm font-light">
              <li>
                <a className="flex items-center gap-3 hover:text-secondary transition-colors" href="mailto:contato@vicentetransportes.com.br">
                  <Mail size={16} className="text-white/40" /> contato@vicentetransportes.com.br
                </a>
              </li>
              <li>
                <a className="flex items-center gap-3 hover:text-secondary transition-colors" href="https://wa.me/5547999990000">
                  <MessageCircle size={16} className="text-white/40" /> (47) 99999-0000
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-xs uppercase tracking-[0.2em] font-semibold mb-8 text-white/40">
              Localização
            </h4>
            <p className="text-sm font-light text-white/60 leading-relaxed">
              Rio do Sul - SC
              <br />
              Distrito Industrial
              <br />
              Alto Vale do Itajaí
            </p>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="space-y-1 text-center md:text-left">
            <p className="text-white/40 text-[10px] uppercase tracking-widest">
              © {new Date().getFullYear()} Vicente Transportes. Todos os direitos reservados.
            </p>
            <p className="text-white/60 text-xs italic">Excelência em Logística Regional</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
