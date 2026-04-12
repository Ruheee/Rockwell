import styles from "../aboutthree.module.css";
export default function AboutThree() {
  return (
    <section className={styles.container}>
      <div className={styles.card}>
        <img src="/store.png" className={styles.cardImage} />
        <div className={styles.cardText}>
          <h1 className={styles.heading}>
            Residential, Commercial <br />
            Experience
          </h1>
          <p className={styles.paragraph}>
            Experienced commercial and residential sata and ecutiy contractor in
            the GTA
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img src="/delivery.png" className={styles.cardImage} />
        <div className={styles.cardText}>
          <h1 className={styles.heading}>
            Delivering top <br /> results
          </h1>
          <p className={styles.paragraph}>
            Fast turnaround, lasting results — we work efficiently so you're never left waiting.
          </p>
        </div>
      </div>
      <div className={styles.card}>
        <img src="/medal.png" className={styles.cardImage} />
        <div className={styles.cardText}>
          <h1 className={styles.heading}>Job Well Done</h1>
          <p className={styles.paragraph}>
            Experienced commercial and residential sata and ecutiy <br />contractor in
            the GTA.
          </p>
        </div>
      </div>
    </section>
  );
}
