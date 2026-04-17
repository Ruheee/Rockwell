import styles from "../comingsoon.module.css";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div className={styles.page}>
      <div className={styles.imageWrapper}>
        {/* Replace with your preferred background image */}
        <div className={styles.overlay} />
        <div className={styles.card}>
          <p className={styles.label}>Rockwell Security</p>
          <h1 className={styles.heading}>COMING<br />SOON</h1>
          <div className={styles.divider} />
          <p className={styles.subtext}>
            We're working on something great.<br />
            Check back shortly.
          </p>
          <Link href="/" className={styles.btn}>Back to Home</Link>
        </div>
      </div>
    </div>
  );
}