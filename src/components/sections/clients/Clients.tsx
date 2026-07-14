import Image from "next/image";
import styles from "./Clients.module.css";

const LOGOS = [
  {
    name: "VeloParts",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBC-A6Aw8kKgHjXOeBYeH16iTftgv_l9e3x-az0QcIpYNOpNMf5Z1-X5YDlj9TwyTtzbkILuPziXpFyDxehAp2s8cacoj-EUVbLItv6ujEhYRLouNQ7nRCt8h_B5kppihFUtfdCLsncj-PCaexS98lAQS7zbNWJyuOYyi3PInr9yZZS1m6cOj33vd09gEsw6cDbXq_Y6LU2XxYvUWBxJS30Zrs8mDheKMQ95-bw0gwidImC7pUbYircLokRRyFpWP-AmHPo8GwgVWo",
  },
  {
    name: "SmarTruck",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuAEf534bailBz98LzcRIpXTZ76qB-3YX9Crj4wma8_Pj_PERN0ylhalQfDYmc6WYRFclmxB4v2vL6bHTLXzf0whTOUQlyrao7FFMxRTTBDMsRdWJLoadIJeRS6cYCP0g1wLCUmYe_u0ELTNg5cWKd3tRt_cCoLNBkmKpJzMxmCpOAOU_xqLnURMishEGy2XOdPQIy61jGyD6FpLExlcfB0ezcd5EzHaFJl5KMeLTqiBE2XJnuJMnK9S_2enh0TPWunr-UebqiGck0Y",
  },
  {
    name: "PowerCore",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEO1SuZ3VGvAN9IarXQIkY3RtU0VRPQvloA-eNsdqQGUG62nzsTmVd4IpfPsnSQM5HslqQnBqu0_HSY6H1SekiD39XFtZkmAv49yyGDZHFwUstoJ_Z8kdQO0z3Y_1rBZa_wM3QTf-yOAJ4iPhdGgd2dmmRa9-cVvyFLchzopnEhkdZ1lGpwDQolseWqa3cm8dyfS2CQGl8KJPFHzaIkR_GuLHtyrmnqIX4vRJM4QJpshGp9dU8O5q92YuQ2PpiKGkht0zUhErXeQI",
  },
  {
    name: "NexFlow",
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCSAGk_Bh26rG28l3_ZkITwRbmtnFbs07_sS0gfMn7FVatVXgSQI80vmBOpL1RjjWYqYyZV6jylBdPdsNPPUHsp-UGzMSNVelZ3HNsSuzDv46mGmGtt1r0ueiGYS427jIus_R2XKCzGdDumYBpACboMnSRTucaNVinKmDGb2Q7z1iTlNhgChSqThmHu2NOFh-tefZhPnjDqbMNmVyNQ83io2kPTNjLfx9GCgdmyLxPNMnJdLJ4xyr1cJo5TuIz77wgqYy-Gi_4oiNI",
  },
];

// duplicate list so the marquee can loop seamlessly
const MARQUEE_LOGOS = [...LOGOS, ...LOGOS];

export default function Clients() {
  return (
    <section className={styles.section} id="clientes">
      <div className={styles.container}>
        <p className={styles.caption}>Empresas que confiam em nós</p>
      </div>
      <div className={styles.marqueeOuter}>
        <div className={`${styles.marqueeTrack} animate-marquee`}>
          {MARQUEE_LOGOS.map((logo, i) => (
            <div key={`${logo.name}-${i}`} className={styles.logoWrap}>
              <Image
                src={logo.src}
                alt={`${logo.name} Logo`}
                fill
                className={styles.logo}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
