import Link from "next/link";
import styles from "../nav.module.css";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" className={styles.logoImg} />
        </Link>
      </div>

      {/* Nav Links */}
      <ul className={styles.navLinks}>
        <li>
          <Link href="/" className={styles.link}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={styles.link}>About us</Link>
        </li>
        <li>
          <Link href="/services" className={styles.link}>Services</Link>
        </li>
        <li>
          <Link href="/projects" className={styles.link}>Projects</Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className={styles.navRight}>
        <span className={styles.phone}>647-821-2998</span>

        <Link href="/contact" className={styles.quoteBtn}>
          Get a quote
        </Link>
      </div>
    </nav>
  );
}