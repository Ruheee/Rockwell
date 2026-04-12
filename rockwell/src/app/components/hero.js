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
          SOLVING ALL YOUR <br /> NEEDS TO FEEL SECURE
        </h1>

        <p className={styles.subtext}>
          Offering top of the line data and security solutions. We deliver <br />
          reliable, trustworthy, and top of the line craftsmanship.
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