"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import styles from "../hero.module.css";

const images = [
  { src: "/CameraPhoto.jpeg", alt: "Commercial security camera installation by Rockwell Security in the GTA" },
  { src: "/IMG_4062.jpeg", alt: "Network cabling solutions for businesses in Toronto" },
  { src: "/IMG_5950.jpeg", alt: "Residential and commercial security systems by Rockwell Security" },
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
    <>
      <Head>
        <title>Rockwell Security | Commercial & Residential Security, Data & Network Solutions in the GTA</title>
        <meta
          name="description"
          content="Rockwell Security offers end-to-end security systems, structured cabling, and network solutions for commercial and residential clients across the Greater Toronto Area."
        />
        <meta name="keywords" content="security systems GTA, commercial security Toronto, structured cabling, network solutions, residential security, CCTV installation Toronto" />
        <meta property="og:title" content="Rockwell Security | GTA Security & Network Solutions" />
        <meta property="og:description" content="End-to-end security, data, and internet solutions for businesses and homes across the GTA." />
        <meta property="og:image" content="/CameraPhoto.jpeg" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://www.rockwellsecurity.ca" />
      </Head>

      <section className={styles.hero} aria-label="Rockwell Security Hero">
        {/* Left: Text */}
        <div className={styles.content}>
          <h1 className={styles.heading}>
            Serious Security. <br /> Solid Networks.
          </h1>
          <p className={styles.subtext}>
            Offering end-to-end security, networking, and structured cabling
            solutions for businesses, offices, and commercial spaces across the GTA.
          </p>
          <div className={styles.buttons}>
            <Link href="/contact" aria-label="Contact Rockwell Security">
              <button className={styles.contactBtn}>Contact</button>
            </Link>
            <Link href="/projects" aria-label="View Rockwell Security Projects">
              <button className={styles.projectsBtn}>Projects</button>
            </Link>
          </div>
        </div>

        {/* Right: Alternating Image */}
        <div className={styles.imageContainer} role="img" aria-label="Rockwell Security project photos">
          {images.map((image, index) => (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              className={`${styles.slideImage} ${index === currentImage ? styles.active : ""}`}
              priority={index === 0}
              sizes="50vw"
            />
          ))}
        </div>
      </section>
    </>
  );
}