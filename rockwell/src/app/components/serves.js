import styles from "../services.module.css";

export const metadata = {
  title:
    "Security & Network Cabling Services in Toronto | Rockwell Security Networks",
  description:
    "Professional security camera installation, network cabling, access control, and commercial security systems across Toronto and the GTA. Licensed and trusted.",
};

const services = [
  {
    image: "/images/services-cabling-design.jpg",
    alt: "Cabling infrastructure design for commercial spaces in Toronto",
    title: "Cabling Infrastructure Design",
    description: "Our team creates detailed cabling layouts that include:",
    bullets: [
      "Structured floor space and cabinet layouts",
      "Capacity planning for bandwidth and future expansion",
      "Physical cabling infrastructure drawings",
      "Inventory of existing equipment to relocate",
      "Electrical circuit and cooling capacity design",
    ],
  },
  {
    image: "/images/services-installation.jpg",
    alt: "Professional network cabling installation in retail store Toronto",
    title: "Installation & Implementation",
    description:
      "Our field technicians are trained in multiple cabling formats, including Cat6, Cat6a, and fiberoptic cabling. We handle:",
    bullets: [
      "Data and voice cabling",
      "Fiber backbone installation (single and multimode)",
      "Wireless point-to-point and in-building RF distribution",
      "Boardroom cabling and AV integration",
    ],
  },
  {
    image: "/images/services-cable-management.jpg",
    alt: "Cable management and certification services Toronto",
    title: "Cable Management & Certification",
    description:
      "We provide complete rack, cabinet, and cable management systems to keep your infrastructure neat and accessible. All installations are tested, certified, and documented for compliance and future reference.",
    bullets: [],
  },
  {
    image: "/images/services-future-ready.jpg",
    alt: "Future-ready security solutions for businesses in Toronto",
    title: "Future-Ready Solutions",
    description:
      "Our installations are designed to scale with your business, ensuring your cabling infrastructure won't need constant replacement as technology evolves.",
    bullets: [],
  },
];

export default function Services() {
  return (
    <main className={styles.main}>
      {/* SEO Header Section */}
      <section className={styles.header}>
        <h1 className={styles.heading}>Network Cabling Services in Toronto</h1>
        <p className={styles.subtext}>
          Your business runs on reliable connectivity. Without the right cabling
          infrastructure, every system you rely on — internet, POS, security,
          communication — slows down or shuts down. At Rockwell Security
          Networks Inc., we provide professional network cabling services for
          malls, retail, and commercial properties across Toronto and the GTA.
        </p>
      </section>
      {/* Service Cards Grid */}
      <section className={styles.grid} aria-label="Our Services">
        {services.map((service, index) => (
          <article key={index} className={styles.card}>
            <img
              src={service.image}
              alt={service.alt}
              className={styles.cardImage}
              loading="lazy"
            />
            <div className={styles.cardContent}>
              <h2 className={styles.cardTitle}>{service.title}</h2>
              <p className={styles.cardDescription}>{service.description}</p>
              {service.bullets.length > 0 && (
                <ul className={styles.bulletList}>
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className={styles.bulletItem}>
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}
