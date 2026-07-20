import ContactForm from '../components/ContactForm';

export const metadata = {
  title: 'Contact Us | Rockwell Security Networks Toronto',
  description:
    'Get in touch with Rockwell Security Networks for security camera installation, structured cabling, access control, and network solutions across Toronto and the GTA.',
  keywords:
    'contact Rockwell Security, security installation Toronto, GTA security company, network cabling quote Toronto',
  openGraph: {
    title: 'Contact Rockwell Security Networks | Toronto & GTA',
    description:
      'Reach out for a free quote on security systems, structured cabling, and network solutions across Toronto and the GTA.',
    url: 'https://www.rockwellsecurity.ca/contact',
    siteName: 'Rockwell Security Networks',
    images: [{ url: '/CameraPhoto.jpeg', alt: 'Rockwell Security Networks Toronto' }],
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.rockwellsecurity.ca/contact',
  },
};

export default function ContactPage() {
  return <ContactForm />;
}