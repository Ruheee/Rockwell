import styles from "../abouttop.module.css";
export default function AboutTop() {
return (
<section className={styles.container}>
    {/* Left Image */}
        <div className={styles.leftImage}>
        <img src="/about-camera.png" alt="Security Camera" className={styles.mainImage} />
        </div>
    {/* Right Content */}
        <div className={styles.rightContent}>
        <p className={styles.tagline}>Someone you can trust</p>
        <h1 className={styles.heading}>
        About Rockwell Security Networks Inc.
        </h1>
        <p className={styles.paragraph}>
        Rockwell Security is built on the belief that strong protection starts with strong relationships. We focus on delivering dependable security solutions while maintaining honesty, transparency, and long-term trust with every client we work with.
        </p>
        <p className={styles.paragraph}>
        Led by founder Andrea Paolucci, our team brings a hands-on, modern approach to every project. We handle everything from quick service calls and system upgrades to full-scale commercial security installations, always aiming for clean execution and lasting results.
        </p>
        <p className={styles.paragraph}>
        Based in Toronto, we work with a range of local businesses including retail stores, clinics, and commercial properties. No matter the size of the job, we approach each site with the same level of care, professionalism, and attention to detail.
        </p>
        </div>
</section>
);
}
