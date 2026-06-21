import Link from "next/link";
import styles from "../hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Dark overlay */}
      <div className={styles.overlay}></div>

      {/* Content */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Rock Solid Security, <br /> Well Built Networks.
        </h1>

        <p className={styles.subtext}>
          Offering end-to-end securtity, networking <br />
          and structured cabeling solutions for businesses, offices and commercial spaces.
        </p>

        <div className={styles.buttons}>
          <Link href="/contact">
            <button className={styles.contactBtn}>Contact</button>
          </Link>

          <Link href="/projects">
            <button className={styles.projectsBtn}>Projects</button>
          </Link>
        </div>
      </div>
    </section>
  );
}