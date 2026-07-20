'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Image from 'next/image';
import styles from '../contact.module.css';

export default function ContactForm() {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.sendForm(
        'service_hboi48j',
        'template_kdq4osh',
        form.current,
        'arf-Oa_lc-bX5uylp'
      );
      setStatus('success');
      form.current.reset();
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <main className={styles.page}>

      {/* Hero Banner */}
      <section className={styles.hero} aria-label="Contact Rockwell Security Networks">
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroTag}>Get In Touch</p>
          <h1 className={styles.heroHeading}>Contact Us</h1>
        </div>
      </section>

      {/* Main Content */}
      <section className={styles.content} aria-label="Contact information and form">

        {/* Left — Info Cards */}
        <address className={styles.infoCol}>
          <h2 className={styles.infoHeading}>We'd love to hear from you</h2>
          <p className={styles.infoText}>
            Whether you're looking to secure your home or business in Toronto or anywhere
            across the GTA, our team is ready to help. Reach out and we'll get back to
            you as soon as possible.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Image src="/phone.png" alt="Call Rockwell Security Networks" width={32} height={32} className={styles.infoIconImg} />
              </div>
              <div>
                <p className={styles.infoCardTitle}>Phone</p>
                <a href="tel:6479450520" className={styles.infoCardValue}>647-945-0520</a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Image src="/email.png" alt="Email Rockwell Security Networks" width={32} height={32} className={styles.infoIconImg} />
              </div>
              <div>
                <p className={styles.infoCardTitle}>Email</p>
                <a href="mailto:info@rockwellsecuritynetworks.ca" className={styles.infoCardValue}>
                  info@rockwellsecuritynetworks.ca
                </a>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <Image src="/flag.png" alt="Rockwell Security service area Greater Toronto Area" width={32} height={32} className={styles.infoIconImg} />
              </div>
              <div>
                <p className={styles.infoCardTitle}>Service Area</p>
                <p className={styles.infoCardValue}>Greater Toronto Area, ON</p>
              </div>
            </div>
          </div>
        </address>

        {/* Right — Form */}
        <div className={styles.formCol}>
          <form
            ref={form}
            onSubmit={sendEmail}
            className={styles.form}
            aria-label="Contact form for Rockwell Security Networks"
          >
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="first_name" className={styles.label}>First Name</label>
                <input id="first_name" type="text" name="first_name" required placeholder="John" className={styles.input} autoComplete="given-name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="last_name" className={styles.label}>Last Name</label>
                <input id="last_name" type="text" name="last_name" required placeholder="Doe" className={styles.input} autoComplete="family-name" />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="from_email" className={styles.label}>Email</label>
              <input id="from_email" type="email" name="from_email" required placeholder="john@example.com" className={styles.input} autoComplete="email" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone" className={styles.label}>Phone Number</label>
              <input id="phone" type="tel" name="phone" placeholder="647-000-0000" className={styles.input} autoComplete="tel" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="service" className={styles.label}>Service Needed</label>
              <select id="service" name="service" className={styles.input}>
                <option value="">Select a service</option>
                <option value="Security Alarm Systems">Security Alarm Systems</option>
                <option value="Camera Systems">Camera &amp; Surveillance Systems</option>
                <option value="Access Control">Access Control</option>
                <option value="Networking">Internet &amp; Networking Infrastructure</option>
                <option value="Structured Cabling">Structured Cabling</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea id="message" name="message" required rows={5} placeholder="Tell us about your project..." className={styles.textarea} />
            </div>

            <button type="submit" className={styles.submitBtn} disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg} role="alert">
                ✓ Message sent! We'll be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg} role="alert">
                Something went wrong. Please try again or call us at 647-945-0520.
              </p>
            )}
          </form>
        </div>

      </section>
    </main>
  );
}