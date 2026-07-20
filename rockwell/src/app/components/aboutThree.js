import Image from "next/image";
import styles from "../aboutthree.module.css";

export default function AboutThree() {
  return (
    <section className={styles.container} aria-label="Why Choose Rockwell Security Networks">

      <div className={styles.card}>
        <Image
          src="/store.png"
          alt="Commercial and residential security installation in the GTA"
          width={200}
          height={200}
          className={styles.cardImage}
          loading="lazy"
        />
        <div className={styles.cardText}>
          <h2 className={styles.heading}>
            Residential and Commercial <br /> Experience
          </h2>
          <p className={styles.paragraph}>
            Experienced data and security contractor serving both commercial and
            residential clients across the GTA.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <Image
          src="/delivery.png"
          alt="Fast and reliable security and network installation services Toronto"
          width={200}
          height={200}
          className={styles.cardImage}
          loading="lazy"
        />
        <div className={styles.cardText}>
          <h2 className={styles.heading}>
            Delivering Top <br /> Results
          </h2>
          <p className={styles.paragraph}>
            Fast turnaround, lasting results — we work efficiently so you're never left waiting.
          </p>
        </div>
      </div>

      <div className={styles.card}>
        <Image
          src="/medal.png"
          alt="Award winning security and cabling contractor in Toronto"
          width={200}
          height={200}
          className={styles.cardImage}
          loading="lazy"
        />
        <div className={styles.cardText}>
          <h2 className={styles.heading}>Job Well Done</h2>
          <p className={styles.paragraph}>
            Every project is completed to the highest standard — from structured
            cabling to full security system installations across Toronto and the GTA.
          </p>
        </div>
      </div>

    </section>
  );
}