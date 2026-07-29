"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const HERO_IMG    = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80";
const SECTION_IMG = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&q=80";
const REVIEW_IMG  = "/Group-9392.png";

// ── Icons ──────────────────────────────────────────────────────────
const IconEcom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96C5 16.1 6.1 17 7 17h11v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63H19c.75 0 1.41-.41 1.75-1.03l3.58-6.49A1 1 0 0023.25 4H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/>
  </svg>
);
const IconWhatWeDo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);
const IconScalable = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
  </svg>
);
const IconIdentify = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const IconUnderstand = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
  </svg>
);
const IconDefine = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
  </svg>
);

// ── Counter ────────────────────────────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (ts: number) => {
      if (!startTime) startTime = ts;
      const p = Math.min((ts - startTime) / duration, 1);
      setCount(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

function CounterItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
  const count = useCounter(value, 2000, started);
  return (
    <div style={{ textAlign: "center" }}>
      <span style={{ display: "block", fontSize: "clamp(36px, 8vw, 64px)", fontWeight: 800, color: RED, lineHeight: 1 }}>
        {count}{suffix}
      </span>
      <span style={{ display: "block", fontSize: 14, color: GRAY_TEXT, marginTop: 8 }}>{label}</span>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function EcommercePage() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setCounterStarted(true); obs.disconnect(); } },
      { threshold: 0.4 }
    );
    if (counterRef.current) obs.observe(counterRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ec * { box-sizing: border-box; }
        .ec { overflow-x: hidden; }

        .ec-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        /* Section padding (desktop defaults) */
        .ec-sec-xl { padding: 5rem 0 4rem; }
        .ec-sec-lg { padding: 5rem 0; }
        .ec-sec-md { padding: 4rem 0; }

        /* 50/50 split rows */
        .ec-row-50 { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; }
        .ec-col50 { flex: 1 1 420px; min-width: 0; }
        .ec-col50 img { max-width: 100%; }

        /* Feature cards */
        .ec-features { display: flex; flex-wrap: wrap; gap: 2rem; }
        .ec-feat-card { flex: 1 1 260px; display: flex; flex-direction: column; gap: 10px; }
        .ec-feat-card h3 { font-size: 1rem; font-weight: 800; color: ${DARK}; margin: 0; }
        .ec-feat-card p  { font-size: 0.88rem; line-height: 1.7; color: ${GRAY_TEXT}; margin: 0; }

        /* Process */
        .ec-process { display: flex; flex-wrap: wrap; gap: 3rem; align-items: start; }
        .ec-proc-intro { flex: 1 1 260px; }
        .ec-proc-cards { flex: 2 1 500px; display: flex; flex-wrap: wrap; gap: 1.2rem; }
        .ec-proc-card { flex: 1 1 220px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.4rem; background: ${WHITE}; }
        .ec-proc-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: ${DARK}; }
        .ec-proc-card p  { font-size: 0.82rem; line-height: 1.6; color: ${GRAY_TEXT}; margin: 0; }

        /* Checklist */
        .ec-checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 1rem; }
        .ec-checklist li { font-size: 0.88rem; color: #444; display: flex; align-items: center; gap: 10px; }
        .ec-checklist li::before { content: "✓"; color: ${RED}; font-weight: 700; font-size: 15px; }

        /* Testimonials */
        .ec-testi-grid { display: grid; grid-template-columns: minmax(160px, 200px) repeat(3, minmax(0, 1fr)); gap: 1.2rem; align-items: start; }
        .ec-testi-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.2rem; min-width: 0; }
        .ec-avatar { width: 36px; height: 36px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
        .ec-stars { color: #f39c12; font-size: 16px; margin: 4px 0 8px; }

        /* CTA */
        .ec-cta-banner { background: ${RED}; width: 100%; padding: 3rem 0; }
        .ec-cta-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .ec-cta-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-decoration: none; transition: all 0.2s; text-transform: uppercase; white-space: nowrap; text-align: center; }
        .ec-cta-btn:hover { background: ${WHITE}; color: ${RED}; }

        /* Collab */
        .ec-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); width: 100%; padding: 4rem 0; }
        .ec-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .ec-collab-text { flex: 1 1 340px; max-width: 580px; color: ${WHITE}; }
        .ec-collab-btn { display: inline-block; background: ${WHITE}; color: ${RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); text-align: center; }

        .ec-icon-box { width: 48px; height: 48px; background: #fff0ee; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1024px) {
          .ec-testi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 768px) {
          .ec-sec-xl { padding: 3.5rem 0 2.5rem; }
          .ec-sec-lg { padding: 3.5rem 0; }
          .ec-sec-md { padding: 2.75rem 0; }
          .ec-cta-banner { padding: 2.25rem 0; }
          .ec-collab { padding: 2.75rem 0; }
          .ec-row-50 { gap: 2rem; }
          .ec-process { gap: 2rem; }
        }

        @media (max-width: 640px) {
          .ec-inner, .ec-cta-inner, .ec-collab-inner { padding: 0 1.25rem; }
          .ec-testi-grid { grid-template-columns: 1fr; }
          .ec-cta-inner { flex-direction: column; text-align: center; }
          .ec-cta-btn { width: 100%; }
          .ec-collab-inner { flex-direction: column; text-align: center; }
          .ec-collab-btn { width: 100%; }
          .ec-col50 { flex-basis: 100%; }
          .ec-proc-card { flex: 1 1 100%; }
        }

        @media (max-width: 400px) {
          .ec-inner, .ec-cta-inner, .ec-collab-inner { padding: 0 1rem; }
        }
      `}</style>

      <div className="ec" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO — 50/50 ══ */}
        <section className="ec-sec-xl" style={{ background: LIGHT_BG }}>
          <div className="ec-inner">
            <div className="ec-row-50">
              <div className="ec-col50">
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: RED, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                  E-Commerce Services
                </p>
                <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.8rem", color: DARK }}>
                  Experts in Website Design and Development in Canada
                </h1>
                <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
                  <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> is a creative and award-winning website design and development company based in Pakistan, the United Arab Emirates, and Canada. Because quality is our top priority, your company will thrive with our exceptional service and affordable solutions.
                </p>
                <Link
                  href="/contact"
                  style={{ display: "inline-block", background: "transparent", color: RED, padding: "0.75rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, border: `2px solid ${RED}` }}
                >
                  Book a Free Consultation
                </Link>
              </div>
              <div className="ec-col50">
                <img
                  src={HERO_IMG}
                  alt="E-Commerce Development"
                  style={{ width: "100%", borderRadius: 16, objectFit: "cover", maxHeight: 380, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURE CARDS ══ */}
        <section className="ec-sec-lg" style={{ background: WHITE }}>
          <div className="ec-inner">
            <div className="ec-features">
              {[
                {
                  icon: <IconEcom />,
                  title: "E-Commerce",
                  desc: "Everyone is aware that retail establishments are profitable because there are always customers in the store who are interested in purchasing your goods or services, regardless of what you sell. However, a retail store is only as good as its location. The internet has no boundaries if you wish to expand internationally.",
                },
                {
                  icon: <IconWhatWeDo />,
                  title: "What We Do",
                  desc: "In order to manage high volume transactions, automate workflow, improve communication, manage user authentication and management, manage data and content, create shopping cart applications, and integrate payment gateways, we can assist you in designing and developing end-to-end e-commerce solutions.",
                },
                {
                  icon: <IconScalable />,
                  title: "Scalable E-Commerce Solutions",
                  desc: "We specialize in developing comprehensive e-commerce solutions that are customized to meet your company's needs, including scalable shopping cart systems, automated workflows, sophisticated product and content management, secure authentication systems, seamless user experiences, and seamless payment gateway integration. Allow us to assist you in creating a strong, conversion-oriented web store.",
                },
              ].map((f) => (
                <div key={f.title} className="ec-feat-card">
                  <div className="ec-icon-box">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ IMPACT — 50/50 ══ */}
        <section className="ec-sec-md" style={{ background: LIGHT_BG }}>
          <div className="ec-inner">
            <div className="ec-row-50">
              <div className="ec-col50">
                <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 900, color: DARK, marginBottom: "1rem", lineHeight: 1.2 }}>
                  Web Design Optimized for User Experience
                </h2>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT, marginBottom: "1.5rem" }}>
                  <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> is a website design and development company with locations in Pakistan, the United Arab Emirates, and Canada. Our area of expertise is search engine optimization, usability, and speed optimization. A smooth, user-friendly experience is also offered on desktop, tablet, and mobile platforms. Visitors will be enticed to provide you with helpful information so that you can satisfy their needs by using Conrads's website optimization tools.
                </p>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: DARK, marginBottom: "0.8rem" }}>
                  Performance Enhancement
                </h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT }}>
                  Naturally, making sure your website is operating correctly is essential for your company. Whether your website is generating leads or sales, we use analytics to ensure that It is converting towards your objectives.
                </p>
              </div>
              <div className="ec-col50">
                <img
                  src={SECTION_IMG}
                  alt="E-Commerce Solutions"
                  style={{ width: "100%", borderRadius: 12, objectFit: "cover", maxHeight: 400, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ COUNTERS ══ */}
        <section className="ec-sec-md" style={{ background: WHITE }} ref={counterRef}>
          <div className="ec-inner">
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
              <CounterItem value={15} suffix="+" label="Delivered Successful Projects" started={counterStarted} />
              <CounterItem value={1}  suffix="+" label="Years of Experience"           started={counterStarted} />
              <CounterItem value={3}  suffix="+" label="Team Members"                  started={counterStarted} />
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section className="ec-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="ec-inner">
            <div className="ec-process">
              <div className="ec-proc-intro">
                <h2 style={{ fontSize: "clamp(1.15rem, 3.5vw, 1.6rem)", fontWeight: 900, color: DARK, lineHeight: 1.3, marginBottom: "1rem" }}>
                  Your website is the most visible and valuable asset of your company.
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT }}>
                  We develop experiences that engage, educate, and convert using a psychology-based approach to platform design. At Decasofts, we transform and link each department and develop roadmaps and platforms that deliver consistent experiences to the right target at the right time. This gives you a competitive advantage in all areas, Website Design and Development in Canada, U.A.E, & Pakistan.
                </p>
              </div>
              <div className="ec-proc-cards">
                {[
                  {
                    icon: <IconIdentify />,
                    title: "Identifying Challenges",
                    desc: "We begin with strategy, collaborating closely with you to identify the key business objectives your website needs to achieve.",
                  },
                  {
                    icon: <IconUnderstand />,
                    title: "Understanding Problems",
                    desc: "Our process starts with strategy. Our team works with you to determine what the business goals your website is going to support.",
                  },
                  {
                    icon: <IconDefine />,
                    title: "Defining Key Issues",
                    desc: "Our approach starts by defining your business goals, ensuring your website is designed to effectively support and drive those objectives.",
                  },
                ].map((p) => (
                  <div key={p.title} className="ec-proc-card">
                    <div className="ec-icon-box" style={{ marginBottom: 12 }}>{p.icon}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="ec-cta-banner">
          <div className="ec-cta-inner">
            <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.2rem, 4vw, 1.9rem)", margin: 0, maxWidth: 560 }}>
              Request A Free Complete Analysis Of Your Website
            </h2>
            <Link href="/contact" className="ec-cta-btn">Book a Free Consultation</Link>
          </div>
        </section>

        {/* ══ REVIEW — 50/50 ══ */}
        <section className="ec-sec-lg" style={{ background: WHITE }}>
          <div className="ec-inner">
            <div className="ec-row-50">
              <div className="ec-col50">
                <img
                  src={REVIEW_IMG}
                  alt="Review illustration"
                  style={{ width: "100%", display: "block" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div className="ec-col50">
                <h2 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 900, color: DARK, marginBottom: "1rem" }}>
                  Here is what we will review:
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT, marginBottom: "1rem" }}>
                  We develop experiences that engage, educate, and convert using a psychology-based approach to platform design. At <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span>, we transform and link each department and develop roadmaps and platforms that deliver consistent experiences to the right target at the right time. This gives you a competitive advantage in all areas, Website Design and Development in Canada.
                </p>
                <ul className="ec-checklist">
                  {["Website Framework", "Website Technology", "Google Optimize Test", "Navigation", "Speed Test", "Security Analysis", "UI/UX Analysis", "Conversion Rate", "Responsiveness"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="ec-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="ec-inner">
            <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.9rem)", fontWeight: 900, color: DARK, marginBottom: "2rem" }}>
              Work Speak For Itself
            </h2>
            <div className="ec-testi-grid">
              <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 4 }}>Decasofts</div>
                <div className="ec-stars">★★★★★</div>
                <div style={{ fontSize: 12, color: GRAY_TEXT }}>29 Google reviews</div>
                <a href="#" style={{ display: "block", marginTop: 14, padding: "8px 14px", border: `1px solid ${BORDER}`, borderRadius: 4, fontSize: 12, textAlign: "center", color: DARK, textDecoration: "none" }}>
                  Write a review
                </a>
              </div>
              {[
                { name: "Ahmed Hussain", time: "5 months ago", initial: "A", text: "Excellent experience overall. The team was professional, responsive, and made everything simple and hassle-free. Highly recommended." },
                { name: "Alex Hales",    time: "8 months ago", initial: "A", text: "Best Company in Pakistan for Social Media Service… I increased my store sales with Shahzaib's team." },
                { name: "OFF PRICE",     time: "6 months ago", initial: "O", text: "Decasoft is a highly professional and reliable digital agency in the Dubai market, delivering exceptional results across multiple platforms." },
              ].map((t) => (
                <div key={t.name} className="ec-testi-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div className="ec-avatar">{t.initial}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: GRAY_TEXT }}>{t.time}</div>
                    </div>
                  </div>
                  <div className="ec-stars">★★★★★</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: GRAY_TEXT }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="ec-collab">
          <div className="ec-collab-inner">
            <div className="ec-collab-text">
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Did you get stuck in something?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in solving all your digital challenges. With the expertise of our UI/UX consultants, we're here to elevate your business and enhance user experiences.
              </p>
            </div>
            <Link href="/contact" className="ec-collab-btn">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}