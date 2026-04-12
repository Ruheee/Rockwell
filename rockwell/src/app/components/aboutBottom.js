import Link from "next/link";
import styles from "../aboutBottom.module.css";
export default function AboutBottom() {
    
return (
<section className={styles.container}>
<div className={styles.card}>
<h2 className={styles.heading}>
Built on Trust, Honesty, and Commitment
</h2>
<p className={styles.paragraph}>
Our story begins with a hands-on approach and a dedication to doing the job right the first
time. Andrea built Rockwell Security on the principles of trust, honesty, and commitment, values that
guide every project we take on.
</p>
<p className={styles.paragraph}>
From small repairs to large-scale commercial, we treat each job like our own.
That means clear communication, fair pricing, and work that stands the test of time.
</p>
<Link href="/contact">
<button className={styles.contactBtn}>Contact</button>
</Link>
</div>
</section>
);
}