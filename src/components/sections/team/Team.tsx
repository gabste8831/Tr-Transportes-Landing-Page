"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Team.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  {
    name: "Julia Mendes2",
    role: "Relacionamento Corporativo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXVLapT6j00CCbZOVS1iq9SM2F5jYy-D1obWJFtw2-gC3XlWbQu1aM4ngK2p7cLyiA8eRJ5T-1jyQLWRK1DagL5lMOP1zeqpEh0eElNUXFXn5wECCLlACR9YHYagURuun-rfK0OwQOxJQNoZIXOVjj2i60YTvKNdTNE49jVbyYJpSmrnSE5eDQkVXq3wo822PkQZhpo9gG88ASZu6y9Y4kGogSqASJk2K5tfwXiJ2CFqY7Aw11Jrg7BnlNQM98xbuIb1P7YwjKoRI",
  },
  {
    name: "fábio Vicente",
    role: "Relacionamento Corporativo",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCXVLapT6j00CCbZOVS1iq9SM2F5jYy-D1obWJFtw2-gC3XlWbQu1aM4ngK2p7cLyiA8eRJ5T-1jyQLWRK1DagL5lMOP1zeqpEh0eElNUXFXn5wECCLlACR9YHYagURuun-rfK0OwQOxJQNoZIXOVjj2i60YTvKNdTNE49jVbyYJpSmrnSE5eDQkVXq3wo822PkQZhpo9gG88ASZu6y9Y4kGogSqASJk2K5tfwXiJ2CFqY7Aw11Jrg7BnlNQM98xbuIb1P7YwjKoRI",
  },
];

const AUTOPLAY_MS = 8000;

/** 1 card on phones, 2 on tablets, 4 from desktop up — matches the breakpoints
 *  already used elsewhere in the design (640px / 1024px). */
function useVisibleCount() {
  const [visible, setVisible] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisible(1);
      else if (w < 1024) setVisible(2);
      else setVisible(4);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visible;
}

export default function Team() {
  const visible = useVisibleCount();
  const count = TEAM.length;
  const maxIndex = Math.max(0, count - visible);
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // keep index in range if the breakpoint changes and shrinks maxIndex
  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex));
  }, [maxIndex]);

  const stopAutoplay = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    if (maxIndex === 0) return; // nothing to slide to
    timerRef.current = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [maxIndex]);

  const goTo = (nextIndex: number) => {
    const span = maxIndex + 1;
    setIndex(((nextIndex % span) + span) % span);
  };

  const handleNav = (nextIndex: number) => {
    goTo(nextIndex);
    startAutoplay(); // manual navigation resets the 8s timer
  };

  const trackWidthPercent = (count / visible) * 100;
  const translatePercent = (index * 100) / count;
  const cardBasisPercent = 100 / count;

  return (
    <section className={styles.section} id="equipe">
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <span className={styles.eyebrow}>Nossa Equipe</span>
            <h2 className={styles.title}>Capital Humano</h2>
            <p className={styles.subtitle}>
              Especialistas comprometidos com a excelência do seu frete.
            </p>
          </div>

          {maxIndex > 0 && (
            <div className={`${styles.controls} ${styles.controlsDesktop}`}>
              <button
                type="button"
                aria-label="Depoimento anterior"
                onClick={() => handleNav(index - 1)}
                className={styles.controlButton}
              >
                <ChevronLeft size={20} strokeWidth={1.5} />
              </button>
              <button
                type="button"
                aria-label="Próximo depoimento"
                onClick={() => handleNav(index + 1)}
                className={styles.controlButton}
              >
                <ChevronRight size={20} strokeWidth={1.5} />
              </button>
            </div>
          )}
        </div>

        <div
          className={styles.viewport}
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
          role="region"
          aria-label="Carrossel da equipe"
        >
          <div
            className={styles.track}
            style={{
              width: `${trackWidthPercent}%`,
              transform: `translateX(-${translatePercent}%)`,
            }}
          >
            {TEAM.map((person) => (
              <div
                key={person.name}
                className={styles.card}
                style={{ flexBasis: `${cardBasisPercent}%` }}
              >
                <div className={styles.imageFrame}>
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className={styles.image}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <h4 className={styles.name}>{person.name}</h4>
                <p className={styles.role}>{person.role}</p>
              </div>
            ))}
          </div>
        </div>

        {maxIndex > 0 && (
          <div className={`${styles.controls} ${styles.controlsMobile}`}>
            <button
              type="button"
              aria-label="Depoimento anterior"
              onClick={() => handleNav(index - 1)}
              className={styles.controlButton}
            >
              <ChevronLeft size={20} strokeWidth={1.5} />
            </button>
            <button
              type="button"
              aria-label="Próximo depoimento"
              onClick={() => handleNav(index + 1)}
              className={styles.controlButton}
            >
              <ChevronRight size={20} strokeWidth={1.5} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}