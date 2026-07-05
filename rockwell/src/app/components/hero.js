"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../hero.module.css";

const images = [
  "/CameraPhoto.jpeg",
  "/IMG_4062.jpeg",  // replace with your actual image names
  "/IMG_5950.jpeg",
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Left: Text */}
      <div className={styles.content}>
        <h1 className={styles.heading}>
          Rock Solid Security <br /> Well Built Networks
        </h1>
        <p className={styles.subtext}>
          Offering end-to-end security, networking and structured cabling
          solutions for businesses, offices, and commercial spaces.
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

      {/* Right: Alternating Image */}
      <div className={styles.imageContainer}>
        {images.map((src, index) => (
          <img
            key={src}
            src={src}
            alt="Rockwell Security"
            className={`${styles.slideImage} ${index === currentImage ? styles.active : ""}`}
          />
        ))}
      </div>
    </section>
  );
}