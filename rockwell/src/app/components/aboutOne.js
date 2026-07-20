import Image from "next/image";
import styles from "../abouttop.module.css";

export default function AboutTop() {
  return (
    <section className={styles.container} aria-label="About Rockwell Security Networks">

      {/* Left Image */}
      <div className={styles.leftImage}>
        <Image
          src="/Construction.png"
          alt="Rockwell Security Networks technician installing commercial security system in Toronto"
          width={600}
          height={700}
          className={styles.mainImage}
          priority
        />
      </div>

      {/* Right Content */}
      <div className={styles.rightContent}>
        <p className={styles.tagline}>Someone you can trust</p>
        <h2 className={styles.heading}>
          About Rockwell Security Networks Inc.
        </h2>
        <p className={styles.paragraph}>
          Rockwell Security Networks is built on the belief that strong protection
          starts with strong relationships. We focus on delivering dependable security
          and data solutions while maintaining honesty, transparency, and long-term
          trust with every client we work with across Toronto and the GTA.
        </p>
        <p className={styles.paragraph}>
          Led by founder Andrea Paolucci, our team brings a hands-on, modern approach
          to every project. We handle everything from quick service calls and system
          upgrades to full-scale commercial security installations, structured cabling,
          and network infrastructure — always aiming for clean execution and lasting results.
        </p>
        <p className={styles.paragraph}>
          Based in Toronto, we work with a wide range of local businesses including
          retail stores, clinics, offices, and large commercial properties across
          Mississauga, Brampton, Scarborough, and North York. No matter the size of
          the job, we approach every site with the same level of care, professionalism,
          and attention to detail.
        </p>
      </div>

    </section>
  );
}