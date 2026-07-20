'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
import styles from "../nav.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Rockwell Security logo"
            width={160}
            height={50}
            className={styles.logoImg}
            priority
          />
        </Link>
      </div>

      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link href="/" className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} onClick={() => setIsOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} onClick={() => setIsOpen(false)}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/services" className={`${styles.link} ${pathname.startsWith('/services') ? styles.active : ''}`} onClick={() => setIsOpen(false)}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/projects" className={`${styles.link} ${pathname.startsWith('/projects') ? styles.active : ''}`} onClick={() => setIsOpen(false)}>
            Projects
          </Link>
        </li>
      </ul>

      <div className={`${styles.navRight} ${isOpen ? styles.open : ''}`}>
        <a href="tel:6479450520" className={styles.phone}>
          📞 647-945-0520
        </a>
        <Link href="/contact" className={styles.quoteBtn} onClick={() => setIsOpen(false)}>
          Contact Us
        </Link>
      </div>
    </nav>
  );
}