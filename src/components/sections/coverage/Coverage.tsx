"use client";

import { useEffect, useRef } from "react";
import { MapPin, Circle, Clock } from "lucide-react";
import styles from "./Coverage.module.css";

const ITEMS = [
  { icon: MapPin, label: "Base Estratégica em Rio do Sul" },
  { icon: Circle, label: "Cobertura total num raio de 150km" },
  { icon: Clock, label: "Prazos diferenciados para o Alto Vale" },
];

const HEADER_HEIGHT = 50;
const DESKTOP_QUERY = "(min-width: 1024px)";

const FRAME_COUNT = 50;
const currentFrame = (index: number) =>
  `/coverage-frames/frame_${index.toString().padStart(4, "0")}.jpg`;

const CROP_EDGES = { x: 40, y: 40 };

export default function Coverage() {
  const pinWrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const wrapper = pinWrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    // Smooth interpolation variables (Lerp)
    let targetFrameIndex = 1;
    let currentFrameIndex = 1;
    let renderedFrameIndex = -1;
    let loopId: number | null = null;
    let isPreloading = true;

    const images: HTMLImageElement[] = [];

    const renderFrame = (index: number) => {
      if (index === renderedFrameIndex) return;
      renderedFrameIndex = index;

      const img = images[index - 1];
      if (img && img.complete && img.naturalWidth !== 0) {
        const cropX = CROP_EDGES.x;
        const cropY = CROP_EDGES.y;

        const cropW = img.naturalWidth - (cropX * 2);
        const cropH = img.naturalHeight - (cropY * 2);

        if (canvas.width !== cropW) {
          canvas.width = cropW;
          canvas.height = cropH;
        }

        context.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, canvas.width, canvas.height);
      }
    };

    // Calcula o progresso (0 a 1) e define o ALVO do frame.
    const scrub = () => {
      if (images.length === 0) return;

      const rect = wrapper.getBoundingClientRect();

      const startPos = window.innerHeight;
      const endPos = window.innerHeight * 0.35;

      const totalTravel = startPos - endPos;
      const currentTravel = startPos - rect.top;

      const progress = Math.min(Math.max(currentTravel / totalTravel, 0), 1);

      targetFrameIndex = Math.min(
        FRAME_COUNT,
        Math.max(1, Math.floor(progress * FRAME_COUNT) + 1)
      );
    };

    // Render loop para o scroll fluido (Lerp)
    const tick = () => {
      if (!isPreloading) {
        currentFrameIndex += (targetFrameIndex - currentFrameIndex) * 0.08;

        if (Math.abs(targetFrameIndex - currentFrameIndex) < 0.05) {
          currentFrameIndex = targetFrameIndex;
        }

        renderFrame(Math.round(currentFrameIndex));
      }
      loopId = requestAnimationFrame(tick);
    };

    // Preload das imagens
    let loadedCount = 0;
    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = currentFrame(i);
      img.onload = () => {
        loadedCount++;
        if (i === 1) {
          isPreloading = false;
          renderFrame(1);
          scrub(); // Garante que atualiza pro frame certo caso o usuário já tenha scrollado
        }
      };
      images.push(img);
    }

    const onScrollOrResize = () => {
      scrub();
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    // Inicia o loop de interpolação
    loopId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
      if (loopId !== null) cancelAnimationFrame(loopId);
    };
  }, []);

  return (
    <section className={styles.section} id="cobertura">
      <div ref={pinWrapperRef} className={styles.pinWrapper}>
        <div className={styles.pinInner}>
          <div className={styles.container}>
            <div className={styles.layout}>
              <div className={styles.left}>
                <span className={styles.eyebrow}>Presença Regional</span>
                <h2 className={styles.title}>Área de Atuação e Cobertura</h2>
                <p className={styles.text}>
                  Atendimento especializado em todo o{" "}
                  <span className={styles.highlight}>Alto Vale do Itajaí</span>,
                  com um raio de atuação de{" "}
                  <span className={styles.highlight}>
                    150km a partir de Rio do Sul - SC
                  </span>
                  .
                </p>
                <div className={styles.list}>
                  {ITEMS.map(({ icon: Icon, label }) => (
                    <div key={label} className={styles.listItem}>
                      <Icon size={18} className={styles.listIcon} strokeWidth={1.75} />
                      <span className={styles.listLabel}>{label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className={styles.videoWrap}>
                <canvas
                  ref={canvasRef}
                  className={styles.canvas}
                  aria-label="Mapa de Atuação Vicente Transportes"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}