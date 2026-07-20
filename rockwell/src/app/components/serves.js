import styles from "../services.module.css";
import Image from "next/image";

export const metadata = {
  title: "Security & Network Cabling Services in Toronto | Rockwell Security Networks",
  description:
    "Professional security camera installation, network cabling, access control, and commercial security systems across Toronto and the GTA. Licensed and trusted.",
  keywords:
    "security camera installation Toronto, network cabling GTA, structured cabling Toronto, access control systems, commercial security Toronto, Cat6 cabling, fiber optic installation",
  openGraph: {
    title: "Security & Network Cabling Services in Toronto | Rockwell Security Networks",
    description:
      "Professional security camera installation, network cabling, access control, and commercial security systems across Toronto and the GTA.",
    url: "https://www.rockwellsecurity.ca/services",
    siteName: "Rockwell Security Networks",
    images: [{ url: "/IMG_4062.jpeg", alt: "Security and cabling services in Toronto" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Security & Network Cabling Services in Toronto | Rockwell Security Networks",
    description:
      "Professional security camera installation, network cabling, and access control across Toronto and the GTA.",
    images: ["/IMG_4062.jpeg"],
  },
  alternates: {
    canonical: "https://www.rockwellsecurity.ca/services",
  },
};

const services = [
  {
    image: "/IMG_4062.jpeg",
    alt: "Structured cabling design and installation for commercial spaces in Toronto",
    title: "Structured Cabling Design and Installation",
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
    alt: "Professional network cabling and internet infrastructure installation in Toronto",
    title: "Internet Networking Infrastructure",
    description:
      "Our field technicians are trained in multiple cabling formats, including Cat6, Cat6a, and fiber optic cabling. We handle:",
    bullets: [
      "Network design & planning",
      "Router and switch installation",
      "Wired (Ethernet) and wireless (Wi-Fi) setup",
      "Network monitoring and maintenance",
    ],
  },
  {
    image: "/access.jpg",
    alt: "Access control system installation including keycard and fob entry in Toronto",
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
];

// Local Business Schema for Google
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rockwell Security Networks Inc.",
  description:
    "Professional security camera installation, network cabling, access control, and commercial security systems across Toronto and the GTA.",
  url: "https://www.rockwellsecurity.ca",
  telephone: "+1-647-945-0520",
  areaServed: ["Toronto", "GTA", "Mississauga", "Brampton", "Scarborough", "North York"],
  serviceType: [
    "Structured Cabling",
    "Security Camera Installation",
    "Access Control Systems",
    "Network Infrastructure",
    "Fiber Optic Cabling",
  ],
};

export default function Services() {
  return (
    <main className={styles.main}>

      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* SEO Header Section */}
      <section className={styles.header}>
        <h2 className={styles.heading}>
          Commercial and Residential Data and Security Services
        </h2>
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
            <Image
              src={service.image}
              alt={service.alt}
              width={600}
              height={400}
              className={styles.cardImage}
              loading={index === 0 ? "eager" : "lazy"}
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