import Image from "next/image";
import Link from "next/link";
import styles from "../aboutBottom.module.css";

export default function AboutBottom() {
  return (
    <section className={styles.container} aria-label="About Rockwell Security Networks">

      <div className={styles.card}>
        <h2 className={styles.heading}>
          Focused on Hard Work, Honesty, and Commitment to Getting the Job Done
        </h2>
        <p className={styles.paragraph}>
          Rockwell Security Networks has built a reputation on getting the job done right
          the first time. With years of hands-on experience serving Toronto and the GTA,
          we take a straightforward approach to every project — showing up, doing the work,
          and delivering results you can count on.
        </p>
        <p className={styles.paragraph}>
          We offer a full range of services including security camera installation, structured
          cabling, data, and internet solutions for both commercial and residential clients
          across Toronto, Mississauga, Brampton, and surrounding areas. Whether you're
          outfitting a large-scale commercial property or protecting your home, we bring the
          same level of care and expertise to every job — clear communication, fair pricing,
          and work that stands the test of time.
        </p>
        <Link href="/contact" className={styles.quoteBtn}>
          Get a Free Quote
        </Link>
      </div>

      <Image
        src="/IMG_6073.jpeg"
        alt="Rockwell Security Networks technician performing commercial security installation in Toronto"
        width={600}
        height={500}
        className={styles.imageEdit}
        loading="lazy"
      />

    </section>
  );
}