import Image from "next/image";

const TEAM = [
  {
    name: "Ricardo Vicente",
    role: "Diretor Executivo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDeJ4p-H0UnL4I9HsLShF8qdDtOuV3Z9PsMWWm9ZPNpHaWSEe1CMeNnbmGGW0he6TvN1cFVG7fLMIyii779tCptNnrjhYQMuefPJgvnDI4t3EvwEAeC8ee2DKBzuMw1mWkn49tBW6jxKjREAUKr7qgh855K9_Y57TXdnws_W6yM2kX5P6ThMWz42LOfwnNqF576qA0wVVPmPm-0mQi7PPsK6I3yB40U5bJ4d1wjMlsY0yGkPLlzM9Sy4zw0erAHz3nLpkt7Ubgjr24",
  },
  {
    name: "Ana Clara Silva",
    role: "Gerente de Operações",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVgZ-z0vW8s0G9wsXIEGhHqH6EYtAsEfZBi-15_V2yyFz7OwVthd-mue8ujlkGVx7ODPr7-U08ukRUYR3l-spxe5AQdJ3XSybwYDhLER_eIOmb5apUikNoYlzIwNt1MDjFh3JE6ZtFDLyyQRuEb69VKpgZDIPb0Inhkj3h2ADzB6aGX5WDZ7_55SDTvEvKHI-YoBFfRQha1i5H6mxJInb6ecj3qHAtBWG-QacJY1ZsGDkiAKbWYBFkmFDO5CDrc8-Ssp2Ed4uxISg",
  },
  {
    name: "Marcos Oliveira",
    role: "Coordenador de Frota",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAG-grbL7IwEi8JjLn1ucodgtHl783vvjOnOXZif1TS4w7MufUxKeDgFA96u9I-lBALDXS2_N67zyCOwRufPg_iNF00a_yAQc8aiMVhz3hrnjKWkznuhnhaglgi_ZWdCzCdtzBRSM7gMI2_im__aoImBExYl8bqFhu5SgYe2TWuu14O_NUavumRRdqCOXly110ov2vhvmq3snk4miauJSQHUTWqJyep2KHzWJXpaNy2tbIVF4JpG5GUXTUCckUE3cpecKcIc9QED0g",
  },
  {
    name: "Julia Mendes",
    role: "Relacionamento Corporativo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXVLapT6j00CCbZOVS1iq9SM2F5jYy-D1obWJFtw2-gC3XlWbQu1aM4ngK2p7cLyiA8eRJ5T-1jyQLWRK1DagL5lMOP1zeqpEh0eElNUXFXn5wECCLlACR9YHYagURuun-rfK0OwQOxJQNoZIXOVjj2i60YTvKNdTNE49jVbyYJpSmrnSE5eDQkVXq3wo822PkQZhpo9gG88ASZu6y9Y4kGogSqASJk2K5tfwXiJ2CFqY7Aw11Jrg7BnlNQM98xbuIb1P7YwjKoRI",
  },
];

export default function Team() {
  return (
    <section className="py-20 bg-white" id="equipe">
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-10">
          <div>
            <span className="text-secondary font-medium tracking-[0.2em] text-xs uppercase mb-4 block">
              Nossa Equipe
            </span>
            <h2 className="text-primary text-4xl font-light">Capital Humano</h2>
            <p className="text-on-surface/50 font-light mt-4">
              Especialistas comprometidos com a excelência do seu frete.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {TEAM.map((person) => (
            <div key={person.name} className="group">
              <div className="aspect-[3/4] overflow-hidden transition-all duration-700 mb-8 border border-outline-variant relative">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h4 className="text-primary text-lg font-normal">{person.name}</h4>
              <p className="text-on-surface/40 text-[10px] uppercase tracking-widest mt-2">
                {person.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
