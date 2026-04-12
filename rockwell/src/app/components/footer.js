import Link from "next/link";
import styles from "../footer.module.css";

export default function Footer() {
return (
<footer className={styles.footer}>
<div className={styles.container}>

{/* Logo & About */}
<div className={styles.brand}>
<img src="/logo.png" alt="Rockwell Security Networks" className={styles.logo} />
<p className={styles.brandText}>
Providing top of the line data and security solutions across Toronto. Built on trust, honesty, and commitment.
</p>
</div>

{/* Quick Links */}
<div className={styles.column}>
<h4 className={styles.columnTitle}>Quick Links</h4>
<ul className={styles.linkList}>
<li><Link href="/" className={styles.link}>Home</Link></li>
<li><Link href="/about" className={styles.link}>About Us</Link></li>
<li><Link href="/services" className={styles.link}>Services</Link></li>
<li><Link href="/projects" className={styles.link}>Projects</Link></li>
<li><Link href="/contact" className={styles.link}>Contact</Link></li>
</ul>
</div>

{/* Services */}
<div className={styles.column}>
<h4 className={styles.columnTitle}>Services</h4>
<ul className={styles.linkList}>
<li><Link href="/services" className={styles.link}>Security Camera Installation</Link></li>
<li><Link href="/services" className={styles.link}>Commercial Security Systems</Link></li>
<li><Link href="/services" className={styles.link}>Access Control</Link></li>
<li><Link href="/services" className={styles.link}>Network Cabling</Link></li>
<li><Link href="/services" className={styles.link}>System Maintenance</Link></li>
</ul>
</div>

{/* Contact */}
<div className={styles.column}>
<h4 className={styles.columnTitle}>Contact Us</h4>
<ul className={styles.contactList}>
<li>📞 <a href="tel:6478212998" className={styles.link}>647-821-2998</a></li>
<li>✉️ <a href="mailto:info@rockwellsecurity.ca" className={styles.link}>info@rockwellsecurity.ca</a></li>
<li>📍 Toronto, Ontario, Canada</li>
<li>🕐 Mon - Fri: 8:00am - 6:00pm</li>
<li>🚨 24/7 Emergency Service</li>
</ul>
</div>

</div>

{/* Bottom Bar */}
<div className={styles.bottomBar}>
<p className={styles.copyright}>
© {new Date().getFullYear()} Rockwell Security Networks Inc. All rights reserved.
</p>
<div className={styles.bottomLinks}>
<Link href="/privacy" className={styles.bottomLink}>Privacy Policy</Link>
<Link href="/terms" className={styles.bottomLink}>Terms of Service</Link>
</div>
</div>
</footer>
);
}