'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from "next/link";
import styles from "../nav.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>
        <Link href="/">
          <img src="/logo.png" className={styles.logoImg} />
        </Link>
      </div>

      {/* Hamburger */}
      <button
        className={styles.hamburger}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <span />
        <span />
        <span />
      </button>

      {/* Nav Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.open : ''}`}>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${pathname === '/' ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={`${styles.link} ${pathname.startsWith('/services') ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className={`${styles.link} ${pathname.startsWith('/projects') ? styles.active : ''}`}
            onClick={() => setIsOpen(false)}
          >
            Projects
          </Link>
        </li>
      </ul>

      {/* Right Side */}
      <div className={`${styles.navRight} ${isOpen ? styles.open : ''}`}>
        <span className={styles.phone}>647-821-2998</span>
        <Link href="/contact" className={styles.quoteBtn} onClick={() => setIsOpen(false)}>
          Get a quote
        </Link>
      </div>
    </nav>
  );
}