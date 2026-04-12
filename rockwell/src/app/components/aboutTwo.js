import Link from "next/link";
import styles from "../aboutBottom.module.css";
export default function AboutBottom() {
  return (
    <section className={styles.container}>

      <div className={styles.card}>
        <h2 className={styles.heading}>
          Focused on Hardwork, Honesty, and Commitment to getting the job done
        </h2>
        <p className={styles.paragraph}>
          Rockwell Security has built a reputation on getting the job done right the first time. With years of hands-on experience, we take a straightforward approach to every project — showing up, doing the work, and delivering results you can count on.

        </p>
        <p className={styles.paragraph}>
          We offer a full range of services including security systems, data, and internet solutions for both commercial and residential clients. Whether you're outfitting a large-scale commercial property or protecting your home, we bring the same level of care and expertise to every job. That means clear communication, fair pricing, and work that stands the test of time.
        </p>

      </div>
      <img
          src="/Construction.png"
          alt="Construction site"
          className={styles.imageEdit}
          
        />
    </section>
  );
}
