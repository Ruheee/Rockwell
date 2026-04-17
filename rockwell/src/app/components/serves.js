import styles from "../services.module.css";

export const metadata = {
  title:
    "Security & Network Cabling Services in Toronto | Rockwell Security Networks",
  description:
    "Professional security camera installation, network cabling, access control, and commercial security systems across Toronto and the GTA. Licensed and trusted.",
};

const services = [
  {
    image: "/Install.png",
    alt: "Cabling infrastructure design for commercial spaces in Toronto",
    title: "Structured Cabling design and installation",
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
    image: "/Internet.png",
    alt: "Professional network cabling installation in retail store Toronto",
    title: "Internet Networking Infrastructure",
    description:
      "Our field technicians are trained in multiple cabling formats, including Cat6, Cat6a, and fiberoptic cabling. We handle:",
    bullets: [
      "Network design & planning",
      "Router and switch installation",
      "Wired (Ethernet) and wireless (Wi-Fi) setup",
      "Network monitoring and maintenance",
    ],
  },
  {
    image: "/access.jpg",
    alt: "Cable management and certification services Toronto",
    title: "Access Control",
    description:
      "We provide complete rack, cabinet, and cable management systems to keep your infrastructure neat and accessible. All installations are tested, certified, and documented for compliance and future reference.",
    bullets: [
      "Keycard and fob entry systems",
      "Door controller installation and programming",
      "User permission management",
      "Remote access monitoring and control",
    ],
  },
  {
    image: "/future.png",
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
        <h1 className={styles.heading}>
          Commercial and Residential Data and Security Services
        </h1>
        <p className={styles.subtext}>
          Your business runs on reliable connectivity. Without the right cabling
          infrastructure, every system you rely on — internet, POS, security,
          communication — slows down or shuts down. At Rockwell Security
          Networks Inc., we provide professional services for everything from
          residential to commercial. We do malls, retail, commercial properties,
          and homes across Toronto and the GTA.
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
