"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const HERO_IMG   = "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80";
const CAMERA_IMG = "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80";
const REVIEW_IMG = "/Group-9392.png";

// ── Google Material Icons SVGs ─────────────────────────────────────
const IconEvent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"/>
  </svg>
);
const IconVideo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/>
  </svg>
);
const IconPackage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"/>
  </svg>
);
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const IconBulb = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z"/>
  </svg>
);
const IconTarget = () => (
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
      <span style={{ display: "block", fontSize: "clamp(36px, 8vw, 64px)", fontWeight: 800, color: RED, lineHeight: 1 }}>{count}{suffix}</span>
      <span style={{ display: "block", fontSize: 14, color: GRAY_TEXT, marginTop: 8 }}>{label}</span>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────
export default function VideographyPage() {
  const counterRef = useRef<HTMLDivElement>(null);
  const [counterStarted, setCounterStarted] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setCounterStarted(true); obs.disconnect(); } }, { threshold: 0.4 });
    if (counterRef.current) obs.observe(counterRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{`
        .vg * { box-sizing: border-box; }
        .vg { overflow-x: hidden; }

        .vg-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        /* Section padding (desktop defaults) */
        .vg-sec-xl { padding: 5rem 0 4rem; }
        .vg-sec-lg { padding: 5rem 0; }
        .vg-sec-md { padding: 4rem 0; }

        /* 50/50 split rows */
        .vg-row-50 { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; }
        .vg-col50 { flex: 1 1 420px; min-width: 0; }
        .vg-col50 img { max-width: 100%; }

        /* Feature cards */
        .vg-features { display: flex; flex-wrap: wrap; gap: 2rem; }
        .vg-feat-card { flex: 1 1 260px; display: flex; flex-direction: column; gap: 12px; }
        .vg-feat-card h3 { font-size: 1rem; font-weight: 800; color: ${DARK}; }
        .vg-feat-card p  { font-size: 0.88rem; line-height: 1.7; color: ${GRAY_TEXT}; }

        /* Process */
        .vg-process { display: flex; flex-wrap: wrap; gap: 3rem; align-items: start; }
        .vg-proc-intro { flex: 1 1 260px; }
        .vg-proc-cards { flex: 2 1 500px; display: flex; flex-wrap: wrap; gap: 1.2rem; }
        .vg-proc-card { flex: 1 1 220px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.4rem; background: ${WHITE}; }
        .vg-proc-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: ${DARK}; }
        .vg-proc-card p  { font-size: 0.82rem; line-height: 1.6; color: ${GRAY_TEXT}; }

        /* Checklist */
        .vg-checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 1rem; }
        .vg-checklist li { font-size: 0.88rem; color: #444; display: flex; align-items: center; gap: 10px; }
        .vg-checklist li::before { content: "✓"; color: ${RED}; font-weight: 700; font-size: 15px; }

        /* Testimonials */
        .vg-testi-grid { display: grid; grid-template-columns: minmax(160px, 200px) repeat(3, minmax(0, 1fr)); gap: 1.2rem; align-items: start; }
        .vg-testi-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.2rem; min-width: 0; }
        .vg-avatar { width: 36px; height: 36px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
        .vg-stars { color: #f39c12; font-size: 16px; margin: 4px 0 8px; }

        /* CTA full width */
        .vg-cta-banner { background: ${RED}; width: 100%; padding: 3rem 0; position: relative; overflow: hidden; }
        .vg-cta-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; position: relative; z-index: 1; }
        .vg-cta-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-decoration: none; transition: all 0.2s; text-transform: uppercase; white-space: nowrap; text-align: center; }
        .vg-cta-btn:hover { background: ${WHITE}; color: ${RED}; }

        /* Collab full width */
        .vg-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); width: 100%; padding: 4rem 0; }
        .vg-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .vg-collab-text { flex: 1 1 340px; max-width: 580px; color: ${WHITE}; }
        .vg-collab-btn { display: inline-block; background: ${WHITE}; color: ${RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); text-align: center; }

        /* Icon box */
        .icon-box { width: 48px; height: 48px; background: #fff0ee; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1024px) {
          .vg-testi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 768px) {
          .vg-sec-xl { padding: 3.5rem 0 2.5rem; }
          .vg-sec-lg { padding: 3.5rem 0; }
          .vg-sec-md { padding: 2.75rem 0; }
          .vg-cta-banner { padding: 2.25rem 0; }
          .vg-collab { padding: 2.75rem 0; }
          .vg-row-50 { gap: 2rem; }
          .vg-process { gap: 2rem; }
        }

        @media (max-width: 640px) {
          .vg-inner, .vg-cta-inner, .vg-collab-inner { padding: 0 1.25rem; }
          .vg-testi-grid { grid-template-columns: 1fr; }
          .vg-cta-inner { flex-direction: column; text-align: center; }
          .vg-cta-btn { width: 100%; }
          .vg-collab-inner { flex-direction: column; text-align: center; }
          .vg-collab-btn { width: 100%; }
          .vg-col50 { flex-basis: 100%; }
          .vg-proc-card { flex: 1 1 100%; }
        }

        @media (max-width: 400px) {
          .vg-inner, .vg-cta-inner, .vg-collab-inner { padding: 0 1rem; }
        }
      `}</style>

      <div className="vg" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO — 50/50 ══ */}
        <section className="vg-sec-xl" style={{ background: LIGHT_BG }}>
          <div className="vg-inner">
            <div className="vg-row-50">
              <div className="vg-col50">
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: RED, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                  Videography Services
                </p>
                <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.8rem", color: DARK }}>
                  Experts in Videography and Visual Storytelling Services in Canada
                </h1>
                <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
                  Based in Canada, the UAE, and Pakistan, Decasoft is an innovative and award-winning media production and videography firm. From social media videos and cinematic storytelling to branded content and event coverage, we use compelling visual narratives to realize your vision.
                </p>
                <Link href="/contact" style={{ display: "inline-block", background: RED, color: WHITE, padding: "0.8rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, border: `2px solid ${RED}` }}>
                  Book a Free Consultation
                </Link>
              </div>
              <div className="vg-col50">
                <img src={HERO_IMG} alt="Videography" style={{ width: "100%", borderRadius: 16, objectFit: "cover", maxHeight: 380, display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURE CARDS ══ */}
        <section className="vg-sec-lg" style={{ background: WHITE }}>
          <div className="vg-inner">
            <div className="vg-features">
              {[
                { icon: <IconEvent />, title: "Event & Corporate Videography", desc: "Our videographers capture the passion, attention to detail, and emotion of every moment — whether it's a business event, wedding, conference, or product launch." },
                { icon: <IconVideo />, title: "What We Do", desc: "From planning, directing, and filming to editing and post-production, we manage every step. Drone footage, product showcases, training videos, interviews, and more." },
                { icon: <IconPackage />, title: "Scalable Videography Solutions", desc: "We provide customizable videography packages whether you're a startup or an established brand — from short-form reels to long-form brand documentaries." },
              ].map((f) => (
                <div key={f.title} className="vg-feat-card">
                  <div className="icon-box">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ IMPACT — 50/50 ══ */}
        <section className="vg-sec-md" style={{ background: LIGHT_BG }}>
          <div className="vg-inner">
            <div className="vg-row-50">
              <div className="vg-col50">
                <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 900, color: DARK, marginBottom: "1rem", lineHeight: 1.2 }}>
                  Videography Tailored for Maximum Visual Impact
                </h2>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT, marginBottom: "1.5rem" }}>
                  The goal of Decasoft's videography is to enthrall your viewers. We maximize every frame, from lighting and camera angles to background music and color grading, to inspire strong feelings in viewers and increase their engagement.
                </p>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: DARK, marginBottom: "0.8rem" }}>Video Content That Converts</h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT }}>
                  Not only do we produce excellent videos, but we also make sure they work. Our team uses analytics and viewer retention data to ensure content performs well on websites, YouTube, Instagram, and other platforms.
                </p>
              </div>
              <div className="vg-col50">
                <img src={CAMERA_IMG} alt="Professional camera setup" style={{ width: "100%", borderRadius: 12, objectFit: "cover", maxHeight: 380, display: "block" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ COUNTERS ══ */}
        <section className="vg-sec-md" style={{ background: WHITE }} ref={counterRef}>
          <div className="vg-inner">
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
              <CounterItem value={150} suffix="+" label="Delivered Successful Projects" started={counterStarted} />
              <CounterItem value={4}   suffix="+" label="Years of Experience"           started={counterStarted} />
              <CounterItem value={11}  suffix="+" label="Team Members"                  started={counterStarted} />
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section className="vg-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="vg-inner">
            <div className="vg-process">
              <div className="vg-proc-intro">
                <h2 style={{ fontSize: "clamp(1.15rem, 3.5vw, 1.6rem)", fontWeight: 900, color: DARK, lineHeight: 1.3, marginBottom: "1rem" }}>
                  Your website is the most visible and valuable asset of your company
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT }}>
                  We use strategy and storytelling to make professional visuals that inspire, teach, and convert.
                </p>
              </div>
              <div className="vg-proc-cards">
                {[
                  { icon: <IconSearch />, title: "Identifying Challenges", desc: "We begin with strategy, collaborating closely with you to identify the key business objectives your website needs to achieve." },
                  { icon: <IconBulb />,   title: "Understanding Problems", desc: "Our team works with you to determine what the business goals your website is going to support." },
                  { icon: <IconTarget />, title: "Defining Key Issues",    desc: "Our approach starts by defining your business goals, ensuring your website is designed to effectively support and drive those objectives." },
                ].map((p) => (
                  <div key={p.title} className="vg-proc-card">
                    <div className="icon-box" style={{ marginBottom: 12 }}>{p.icon}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="vg-cta-banner">
          <div className="vg-cta-inner">
            <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.2rem, 4vw, 1.9rem)", margin: 0, maxWidth: 560 }}>
              Request A Free Complete Analysis Of Your Website
            </h2>
            <Link href="/contact" className="vg-cta-btn">Book a Free Consultation</Link>
          </div>
        </section>

        {/* ══ REVIEW — 50/50 ══ */}
        <section className="vg-sec-lg" style={{ background: WHITE }}>
          <div className="vg-inner">
            <div className="vg-row-50">
              <div className="vg-col50">
                <img src={REVIEW_IMG} alt="Review illustration" style={{ width: "100%", display: "block" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
              </div>
              <div className="vg-col50">
                <h2 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 900, color: DARK, marginBottom: "1rem" }}>
                  Here is what we will review:
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT, marginBottom: "1rem" }}>
                  We develop experiences that engage, educate, and convert using a psychology-based approach. Our team delivers consistent experiences to the right target at the right time.
                </p>
                <ul className="vg-checklist">
                  {["Website Framework","Website Technology","Google Optimize Test","Navigation","Speed Test","Security Analysis","UI/UX Analysis","Conversion Rate","Responsiveness"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="vg-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="vg-inner">
            <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.9rem)", fontWeight: 900, color: DARK, marginBottom: "2rem" }}>
              Work Speak For Itself
            </h2>
            <div className="vg-testi-grid">
              <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 4 }}>Decasofts</div>
                <div className="vg-stars">★★★★★</div>
                <div style={{ fontSize: 12, color: GRAY_TEXT }}>29 Google reviews</div>
                <a href="#" style={{ display: "block", marginTop: 14, padding: "8px 14px", border: `1px solid ${BORDER}`, borderRadius: 4, fontSize: 12, textAlign: "center", color: DARK, textDecoration: "none" }}>Write a review</a>
              </div>
              {[
                { name: "Alex Hales",      time: "8 months ago", initial: "A", text: "Best Company in Pakistan for Social Media Service… I increased my store sales with shahzaib team" },
                { name: "OFF PRICE",       time: "6 months ago", initial: "O", text: "At Decasofts, we transform and link each department delivering consistent experiences to the right target at the right time, delivering exceptional results across multiple platforms." },
                { name: "ayesha.decasoft", time: "7 months ago", initial: "A", text: "Deca Soft delivers excellent service with professional teamwork, reliable solutions, and quick support. Highly recommended for quality IT work." },
              ].map((t) => (
                <div key={t.name} className="vg-testi-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div className="vg-avatar">{t.initial}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: GRAY_TEXT }}>{t.time}</div>
                    </div>
                  </div>
                  <div className="vg-stars">★★★★★</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: GRAY_TEXT }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="vg-collab">
          <div className="vg-collab-inner">
            <div className="vg-collab-text">
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>Collaboration</p>
              <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Did you get stuck in something?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in solving all your digital challenges. With the expertise of our UI/UX consultants, we're here to elevate your business and enhance user experiences.
              </p>
            </div>
            <Link href="/contact" className="vg-collab-btn">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}