'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from '../contact.module.css';

export default function ContactPage() {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.sendForm(
        'service_hboi48j',   // replace with your EmailJS Service ID
        'template_kdq4osh',  // replace with your EmailJS Template ID
        form.current,
        'arf-Oa_lc-bX5uylp'    // replace with your EmailJS Public Key
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

      {/* ── Hero Banner ── */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <p className={styles.heroTag}>Get In Touch</p>
          <h1 className={styles.heroHeading}>Contact Us</h1>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className={styles.content}>

        {/* Left — Info Cards */}
        <div className={styles.infoCol}>
          <h2 className={styles.infoHeading}>We'd love to hear from you</h2>
          <p className={styles.infoText}>
            Whether you're looking to secure your home or business, our team is ready to help.
            Reach out and we'll get back to you as soon as possible.
          </p>

          <div className={styles.infoCards}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <img src="/phone.png" alt="Phone" className={styles.infoIconImg} />
              </div>
              <div>
                <p className={styles.infoCardTitle}>Phone</p>
                <p className={styles.infoCardValue}>647-821-2998</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <img src="/email.png" alt="Email" className={styles.infoIconImg} />
              </div>
              <div>
                <p className={styles.infoCardTitle}>Email</p>
                <p className={styles.infoCardValue}>info@rockwellsecurity.ca</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <img src="/flag.png" alt="Location" className={styles.infoIconImg} />
              </div>
              <div>
                <p className={styles.infoCardTitle}>Service Area</p>
                <p className={styles.infoCardValue}>Greater Toronto Area, ON</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Form */}
        <div className={styles.formCol}>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label className={styles.label}>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  required
                  placeholder="John"
                  className={styles.input}
                />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  required
                  placeholder="Doe"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Email</label>
              <input
                type="email"
                name="from_email"
                required
                placeholder="john@example.com"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Phone Number</label>
              <input
                type="tel"
                name="phone"
                placeholder="647-000-0000"
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Service Needed</label>
              <select name="service" className={styles.input}>
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
              <label className={styles.label}>Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell us about your project..."
                className={styles.textarea}
              />
            </div>

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className={styles.successMsg}>
                ✓ Message sent! We'll be in touch shortly.
              </p>
            )}
            {status === 'error' && (
              <p className={styles.errorMsg}>
                Something went wrong. Please try again or call us directly.
              </p>
            )}
          </form>
        </div>

      </section>
    </main>
  );
}