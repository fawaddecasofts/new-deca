"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RED      = "#c0392b";
const DARK     = "#1a1a2e";
const WHITE    = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG  = "#f9f9f9";
const BORDER    = "#e0e0e0";

const HERO_IMG    = "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&q=80";
const SECTION_IMG = "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80";
const REVIEW_IMG  = "/Group-9392.png";

// ── Icons ──────────────────────────────────────────────────────────
const IconUI = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
);
const IconUX = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
  </svg>
);
const IconProto = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);
const IconDiscover = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const IconDesign = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
  </svg>
);
const IconDeliver = () => (
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

function CounterItem({
  value,
  suffix,
  label,
  started,
}: {
  value: number;
  suffix: string;
  label: string;
  started: boolean;
}) {
  const count = useCounter(value, 2000, started);
  return (
    <div style={{ textAlign: "center" }}>
      <span
        style={{
          display: "block",
          fontSize: "clamp(36px, 8vw, 64px)",
          fontWeight: 800,
          color: RED,
          lineHeight: 1,
        }}
      >
        {count}
        {suffix}
      </span>
      <span style={{ display: "block", fontSize: 14, color: GRAY_TEXT, marginTop: 8 }}>
        {label}
      </span>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function UIUXPage() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setCounterStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    if (counterRef.current) obs.observe(counterRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .ux * { box-sizing: border-box; }
        .ux { overflow-x: hidden; }

        .ux-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        /* Section padding (desktop defaults) */
        .ux-sec-xl { padding: 5rem 0 4rem; }
        .ux-sec-lg { padding: 5rem 0; }
        .ux-sec-md { padding: 4rem 0; }

        /* 50/50 split rows */
        .ux-row-50 { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; }
        .ux-col50 { flex: 1 1 420px; min-width: 0; }
        .ux-col50 img { max-width: 100%; }

        /* Feature cards */
        .ux-features { display: flex; flex-wrap: wrap; gap: 2rem; }
        .ux-feat-card { flex: 1 1 260px; display: flex; flex-direction: column; gap: 10px; }
        .ux-feat-card h3 { font-size: 1rem; font-weight: 800; color: ${DARK}; margin: 0; }
        .ux-feat-card p  { font-size: 0.88rem; line-height: 1.7; color: ${GRAY_TEXT}; margin: 0; }

        /* Process */
        .ux-process { display: flex; flex-wrap: wrap; gap: 3rem; align-items: start; }
        .ux-proc-intro { flex: 1 1 260px; }
        .ux-proc-cards { flex: 2 1 500px; display: flex; flex-wrap: wrap; gap: 1.2rem; }
        .ux-proc-card { flex: 1 1 220px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.4rem; background: ${WHITE}; }
        .ux-proc-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: ${DARK}; }
        .ux-proc-card p  { font-size: 0.82rem; line-height: 1.6; color: ${GRAY_TEXT}; margin: 0; }

        /* Checklist */
        .ux-checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 1rem; }
        .ux-checklist li { font-size: 0.88rem; color: #444; display: flex; align-items: center; gap: 10px; }
        .ux-checklist li::before { content: "✓"; color: ${RED}; font-weight: 700; font-size: 15px; }

        /* Testimonials */
        .ux-testi-grid { display: grid; grid-template-columns: minmax(160px, 200px) repeat(3, minmax(0, 1fr)); gap: 1.2rem; align-items: start; }
        .ux-testi-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.2rem; min-width: 0; }
        .ux-avatar { width: 36px; height: 36px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
        .ux-stars { color: #f39c12; font-size: 16px; margin: 4px 0 8px; }

        /* CTA */
        .ux-cta-banner { background: ${RED}; width: 100%; padding: 3rem 0; }
        .ux-cta-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .ux-cta-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-decoration: none; transition: all 0.2s; text-transform: uppercase; white-space: nowrap; text-align: center; }
        .ux-cta-btn:hover { background: ${WHITE}; color: ${RED}; }

        /* Collab */
        .ux-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); width: 100%; padding: 4rem 0; }
        .ux-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .ux-collab-text { flex: 1 1 340px; max-width: 580px; color: ${WHITE}; }
        .ux-collab-btn { display: inline-block; background: ${WHITE}; color: ${RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); text-align: center; }

        .ux-icon-box { width: 48px; height: 48px; background: #fff0ee; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1024px) {
          .ux-testi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 768px) {
          .ux-sec-xl { padding: 3.5rem 0 2.5rem; }
          .ux-sec-lg { padding: 3.5rem 0; }
          .ux-sec-md { padding: 2.75rem 0; }
          .ux-cta-banner { padding: 2.25rem 0; }
          .ux-collab { padding: 2.75rem 0; }
          .ux-row-50 { gap: 2rem; }
          .ux-process { gap: 2rem; }
        }

        @media (max-width: 640px) {
          .ux-inner, .ux-cta-inner, .ux-collab-inner { padding: 0 1.25rem; }
          .ux-testi-grid { grid-template-columns: 1fr; }
          .ux-cta-inner { flex-direction: column; text-align: center; }
          .ux-cta-btn { width: 100%; }
          .ux-collab-inner { flex-direction: column; text-align: center; }
          .ux-collab-btn { width: 100%; }
          .ux-col50 { flex-basis: 100%; }
          .ux-proc-card { flex: 1 1 100%; }
        }

        @media (max-width: 400px) {
          .ux-inner, .ux-cta-inner, .ux-collab-inner { padding: 0 1rem; }
        }
      `}</style>

      <div className="ux" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO — 50/50 ══ */}
        <section className="ux-sec-xl" style={{ background: LIGHT_BG }}>
          <div className="ux-inner">
            <div className="ux-row-50">
              <div className="ux-col50">
                <p
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: RED,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    marginBottom: 12,
                  }}
                >
                  UI/UX Design Services
                </p>
                <h1
                  style={{
                    fontSize: "clamp(1.6rem, 5vw, 2.6rem)",
                    fontWeight: 900,
                    lineHeight: 1.2,
                    marginBottom: "0.8rem",
                    color: DARK,
                  }}
                >
                  Creative UI/UX Design That Converts Visitors Into Customers
                </h1>
                <p
                  style={{
                    color: GRAY_TEXT,
                    lineHeight: 1.8,
                    fontSize: "0.93rem",
                    marginBottom: "2rem",
                  }}
                >
                  <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> delivers
                  intuitive, user-centered design experiences that delight users and drive business
                  results. From wireframes to high-fidelity prototypes, we craft digital products
                  that are both beautiful and functional — across Pakistan, UAE, and Canada.
                </p>
                <Link
                  href="/contact"
                  style={{
                    display: "inline-block",
                    background: "transparent",
                    color: RED,
                    padding: "0.75rem 2rem",
                    borderRadius: 50,
                    fontWeight: 700,
                    textDecoration: "none",
                    fontSize: "0.85rem",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    border: `2px solid ${RED}`,
                  }}
                >
                  Book a Free Consultation
                </Link>
              </div>
              <div className="ux-col50">
                <img
                  src={HERO_IMG}
                  alt="UI/UX Design Services"
                  style={{
                    width: "100%",
                    borderRadius: 16,
                    objectFit: "cover",
                    maxHeight: 380,
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURE CARDS ══ */}
        <section className="ux-sec-lg" style={{ background: WHITE }}>
          <div className="ux-inner">
            <div className="ux-features">
              {[
                {
                  icon: <IconUI />,
                  title: "User Interface Design",
                  desc: "We create visually stunning interfaces that align with your brand identity. Every pixel is intentional — from color palette and typography to spacing and iconography — ensuring a cohesive, professional look across all screens and devices.",
                },
                {
                  icon: <IconUX />,
                  title: "User Experience Research",
                  desc: "We conduct in-depth user research, persona development, journey mapping, and usability testing to understand how your target audience thinks and behaves — so every design decision is backed by real data, not guesswork.",
                },
                {
                  icon: <IconProto />,
                  title: "Prototyping & Wireframing",
                  desc: "From low-fidelity wireframes to interactive clickable prototypes, we validate ideas before a single line of code is written. This saves time, reduces rework, and ensures stakeholders and developers are perfectly aligned from day one.",
                },
              ].map((f) => (
                <div key={f.title} className="ux-feat-card">
                  <div className="ux-icon-box">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ IMPACT — 50/50 ══ */}
        <section className="ux-sec-md" style={{ background: LIGHT_BG }}>
          <div className="ux-inner">
            <div className="ux-row-50">
              <div className="ux-col50">
                <h2
                  style={{
                    fontSize: "clamp(1.4rem, 4vw, 2rem)",
                    fontWeight: 900,
                    color: DARK,
                    marginBottom: "1rem",
                    lineHeight: 1.2,
                  }}
                >
                  Design Optimized for Engagement & Conversion
                </h2>
                <p
                  style={{
                    fontSize: "0.93rem",
                    lineHeight: 1.8,
                    color: GRAY_TEXT,
                    marginBottom: "1.5rem",
                  }}
                >
                  <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> specializes in
                  designing digital experiences that are not only beautiful but strategically built
                  to guide users toward conversion. We combine aesthetic design with behavioral
                  psychology, accessibility best practices, and data-driven insights.
                </p>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: DARK, marginBottom: "0.8rem" }}>
                  Accessibility & Responsiveness
                </h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT }}>
                  Every design we produce meets WCAG accessibility guidelines and is fully
                  responsive — working flawlessly across mobile, tablet, and desktop. We test
                  across real devices to ensure a consistent, delightful experience for all users.
                </p>
              </div>
              <div className="ux-col50">
                <img
                  src={SECTION_IMG}
                  alt="UI/UX Design Process"
                  style={{
                    width: "100%",
                    borderRadius: 12,
                    objectFit: "cover",
                    maxHeight: 400,
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ COUNTERS ══ */}
        <section className="ux-sec-md" style={{ background: WHITE }} ref={counterRef}>
          <div className="ux-inner">
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
              <CounterItem value={20} suffix="+" label="UI/UX Projects Delivered" started={counterStarted} />
              <CounterItem value={18} suffix="+" label="Satisfied Clients"        started={counterStarted} />
              <CounterItem value={3}  suffix="+" label="Years of Experience"      started={counterStarted} />
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section className="ux-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="ux-inner">
            <div className="ux-process">
              <div className="ux-proc-intro">
                <h2
                  style={{
                    fontSize: "clamp(1.15rem, 3.5vw, 1.6rem)",
                    fontWeight: 900,
                    color: DARK,
                    lineHeight: 1.3,
                    marginBottom: "1rem",
                  }}
                >
                  Our design process puts users first at every single step.
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT }}>
                  We follow a structured, collaborative design process that ensures every project is
                  aligned with your business goals and your users' needs — from discovery and
                  research all the way through to final developer handoff. At Decasofts, great
                  design is never an accident.
                </p>
              </div>
              <div className="ux-proc-cards">
                {[
                  {
                    icon: <IconDiscover />,
                    title: "Discovery & Research",
                    desc: "We audit your current product, study competitors, and interview users to uncover real pain points and opportunities.",
                  },
                  {
                    icon: <IconProto />,
                    title: "Wireframe & Prototype",
                    desc: "We build low-fi wireframes to high-fi interactive prototypes so you can see and test the flow before development starts.",
                  },
                  {
                    icon: <IconDesign />,
                    title: "Visual Design",
                    desc: "We craft a polished design system with typography, color, spacing, and components that perfectly reflect your brand.",
                  },
                  {
                    icon: <IconDeliver />,
                    title: "Testing & Handoff",
                    desc: "Usability testing ensures everything works. We deliver developer-ready Figma files with full design specs and assets.",
                  },
                ].map((p) => (
                  <div key={p.title} className="ux-proc-card">
                    <div className="ux-icon-box" style={{ marginBottom: 12 }}>{p.icon}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="ux-cta-banner">
          <div className="ux-cta-inner">
            <h2
              style={{
                color: WHITE,
                fontWeight: 800,
                fontSize: "clamp(1.2rem, 4vw, 1.9rem)",
                margin: 0,
                maxWidth: 560,
              }}
            >
              Get a Free UI/UX Audit of Your Current Product
            </h2>
            <Link href="/contact" className="ux-cta-btn">
              Book a Free Consultation
            </Link>
          </div>
        </section>

        {/* ══ REVIEW — 50/50 ══ */}
        <section className="ux-sec-lg" style={{ background: WHITE }}>
          <div className="ux-inner">
            <div className="ux-row-50">
              <div className="ux-col50">
                <img
                  src={REVIEW_IMG}
                  alt="Review illustration"
                  style={{ width: "100%", display: "block" }}
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>
              <div className="ux-col50">
                <h2
                  style={{
                    fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)",
                    fontWeight: 900,
                    color: DARK,
                    marginBottom: "1rem",
                  }}
                >
                  Here is what our UI/UX audit covers:
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT, marginBottom: "1rem" }}>
                  Our expert team reviews every aspect of your digital product to identify friction
                  points and opportunities that will improve user satisfaction and boost conversions.
                  At <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span>, we leave no
                  screen unexamined.
                </p>
                <ul className="ux-checklist">
                  {[
                    "Information Architecture",
                    "Navigation & User Flow",
                    "Visual Hierarchy Review",
                    "Mobile Responsiveness",
                    "Accessibility (WCAG) Check",
                    "CTA Placement & Conversion",
                    "Typography & Color Audit",
                    "Load Time & Performance",
                    "Competitor Benchmarking",
                  ].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="ux-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="ux-inner">
            <h2
              style={{
                fontSize: "clamp(1.3rem, 4vw, 1.9rem)",
                fontWeight: 900,
                color: DARK,
                marginBottom: "2rem",
              }}
            >
              Work Speaks For Itself
            </h2>
            <div className="ux-testi-grid">
              <div
                style={{
                  background: WHITE,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 10,
                  padding: "1.2rem",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 4 }}>
                  Decasofts
                </div>
                <div className="ux-stars">★★★★★</div>
                <div style={{ fontSize: 12, color: GRAY_TEXT }}>29 Google reviews</div>
                <a
                  href="#"
                  style={{
                    display: "block",
                    marginTop: 14,
                    padding: "8px 14px",
                    border: `1px solid ${BORDER}`,
                    borderRadius: 4,
                    fontSize: 12,
                    textAlign: "center",
                    color: DARK,
                    textDecoration: "none",
                  }}
                >
                  Write a review
                </a>
              </div>
              {[
                {
                  name: "Sara K.",
                  time: "3 months ago",
                  initial: "S",
                  text: "The UI/UX team at Decasofts transformed our app completely. User engagement went up by 40% within weeks of launch. Absolutely professional.",
                },
                {
                  name: "Raza Ahmed",
                  time: "5 months ago",
                  initial: "R",
                  text: "Incredible attention to detail. They understood our brand and delivered a product design that truly represents us. Highly recommend their UX team.",
                },
                {
                  name: "Maria T.",
                  time: "2 months ago",
                  initial: "M",
                  text: "Fast turnaround, great communication, and a stunning final design. Our clients love the new interface — couldn't be happier with the outcome.",
                },
              ].map((t) => (
                <div key={t.name} className="ux-testi-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div className="ux-avatar">{t.initial}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: GRAY_TEXT }}>{t.time}</div>
                    </div>
                  </div>
                  <div className="ux-stars">★★★★★</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: GRAY_TEXT }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="ux-collab">
          <div className="ux-collab-inner">
            <div className="ux-collab-text">
              <p
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: 2.5,
                  opacity: 0.8,
                  marginBottom: "0.5rem",
                }}
              >
                Collaboration
              </p>
              <h2
                style={{
                  fontSize: "clamp(1.3rem, 4vw, 2rem)",
                  fontWeight: 800,
                  lineHeight: 1.3,
                  marginBottom: "1rem",
                }}
              >
                Need a design partner?
                <br />
                Let&apos;s Build Something Great Together.
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our UI/UX consultants are ready to elevate your product, reduce churn, and create
                experiences your users will love and keep coming back to — across every platform.
              </p>
            </div>
            <Link href="/contact" className="ux-collab-btn">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}