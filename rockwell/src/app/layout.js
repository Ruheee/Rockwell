import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
});

export const metadata = {
  metadataBase: new URL("https://www.rockwellsecurity.ca"),
  title: {
    default: "Rockwell Security Networks | Commercial & Residential Security and Cabling in Toronto",
    template: "%s | Rockwell Security Networks",
  },
  description:
    "Rockwell Security Networks provides professional security camera installation, structured cabling, access control, and network solutions for commercial and residential clients across Toronto and the GTA.",
  keywords:
    "security camera installation Toronto, commercial security GTA, structured cabling Toronto, network cabling, access control systems, residential security Toronto, CCTV installation GTA",
  openGraph: {
    title: "Rockwell Security Networks | Toronto Security & Cabling",
    description:
      "Professional security, data, and network cabling solutions for businesses and homes across Toronto and the GTA.",
    url: "https://www.rockwellsecurity.ca",
    siteName: "Rockwell Security Networks",
    images: [
      {
        url: "/CameraPhoto.jpeg",
        width: 1200,
        height: 630,
        alt: "Rockwell Security Networks - Toronto Commercial Security Installation",
      },
    ],
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rockwell Security Networks | Toronto Security & Cabling",
    description:
      "Professional security, data, and network cabling solutions across Toronto and the GTA.",
    images: ["/CameraPhoto.jpeg"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: "https://www.rockwellsecurity.ca",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

// Local Business Schema
const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Rockwell Security Networks Inc.",
  url: "https://www.rockwellsecurity.ca",
  telephone: "+1-647-945-0520",
  email: "info@rockwellsecuritynetworks.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  areaServed: ["Toronto", "Mississauga", "Brampton", "Scarborough", "North York", "GTA"],
  serviceType: [
    "Security Camera Installation",
    "Structured Cabling",
    "Access Control Systems",
    "Network Infrastructure",
    "Fiber Optic Cabling",
    "Commercial Security Systems",
  ],
  openingHours: "Mo-Fr 08:00-18:00",
  priceRange: "$$",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={archivo.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}