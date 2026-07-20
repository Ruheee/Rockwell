import Link from "next/link";
import Image from "next/image";
import styles from "../footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site Footer">
      <div className={styles.container}>

        {/* Logo & About */}
        <div className={styles.brand}>
          <Image
            src="/logo.png"
            alt="Rockwell Security Networks Inc. - Toronto Security and Cabling"
            width={160}
            height={50}
            className={styles.logo}
          />
          <p className={styles.brandText}>
            Providing top-of-the-line data, security, and network cabling solutions
            across Toronto and the GTA. Serving commercial and residential clients
            with fast, reliable, and professional installations.
          </p>
        </div>

        {/* Quick Links */}
        <nav className={styles.column} aria-label="Footer quick links">
          <h4 className={styles.columnTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            <li><Link href="/" className={styles.link}>Home</Link></li>
            <li><Link href="/about" className={styles.link}>About Us</Link></li>
            <li><Link href="/services" className={styles.link}>Services</Link></li>
            <li><Link href="/projects" className={styles.link}>Projects</Link></li>
            <li><Link href="/contact" className={styles.link}>Contact</Link></li>
          </ul>
        </nav>

        {/* Services */}
        <nav className={styles.column} aria-label="Footer services links">
          <h4 className={styles.columnTitle}>Services</h4>
          <ul className={styles.linkList}>
            <li><Link href="/services" className={styles.link}>Security Camera Installation</Link></li>
            <li><Link href="/services" className={styles.link}>Commercial Security Systems</Link></li>
            <li><Link href="/services" className={styles.link}>Access Control</Link></li>
            <li><Link href="/services" className={styles.link}>Network Cabling</Link></li>
            <li><Link href="/services" className={styles.link}>System Maintenance</Link></li>
          </ul>
        </nav>

        {/* Contact */}
        <address className={styles.column}>
          <h4 className={styles.columnTitle}>Contact Us</h4>
          <ul className={styles.contactList}>
            <li>
              📞 <a href="tel:6479450520" className={styles.link} aria-label="Call Rockwell Security at 647-945-0520">647-945-0520</a>
            </li>
            <li>
              ✉️ <a href="mailto:info@rockwellsecuritynetworks.ca" className={styles.link} aria-label="Email Rockwell Security Networks">info@rockwellsecuritynetworks.ca</a>
            </li>
            <li>📍 Toronto, Ontario, Canada</li>
            <li>🕐 Mon – Fri: 8:00am – 6:00pm</li>
            <li>🚨 24/7 Emergency Service Available</li>
          </ul>
        </address>

      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Rockwell Security Networks Inc. All rights reserved. | Toronto, Ontario, Canada
        </p>
        <div className={styles.bottomLinks}>
          <Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
          <Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}