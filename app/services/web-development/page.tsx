"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const HERO_IMG    = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80";
const SECTION_IMG = "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80";
const REVIEW_IMG  = "/Group-9392.png";

// ── Icons ──────────────────────────────────────────────────────────
const IconCustom = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/>
  </svg>
);
const IconWordPress = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
  </svg>
);
const IconLaravel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);
const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const IconBrand = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
  </svg>
);
const IconResponsive = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
    <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
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
export default function WebDevelopmentPage() {
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
        .wd * { box-sizing: border-box; }
        .wd { overflow-x: hidden; }

        .wd-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        /* Section padding (desktop defaults) */
        .wd-sec-xl { padding: 5rem 0 4rem; }
        .wd-sec-lg { padding: 5rem 0; }
        .wd-sec-md { padding: 4rem 0; }

        /* 50/50 split rows */
        .wd-row-50 { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; }
        .wd-col50 { flex: 1 1 420px; min-width: 0; }
        .wd-col50 img { max-width: 100%; }

        /* Feature cards */
        .wd-features { display: flex; flex-wrap: wrap; gap: 2rem; }
        .wd-feat-card { flex: 1 1 260px; display: flex; flex-direction: column; gap: 10px; }
        .wd-feat-card h3 { font-size: 1rem; font-weight: 800; color: ${DARK}; margin: 0; }
        .wd-feat-card > p { font-size: 0.88rem; line-height: 1.7; color: ${GRAY_TEXT}; margin: 0; }
        .wd-feat-card ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 5px; }
        .wd-feat-card ul li { font-size: 0.82rem; color: #444; display: flex; align-items: flex-start; gap: 8px; line-height: 1.5; }
        .wd-feat-card ul li::before { content: "•"; color: ${RED}; font-weight: 700; font-size: 16px; flex-shrink: 0; }

        /* Process */
        .wd-process { display: flex; flex-wrap: wrap; gap: 3rem; align-items: start; }
        .wd-proc-intro { flex: 1 1 260px; }
        .wd-proc-cards { flex: 2 1 500px; display: flex; flex-wrap: wrap; gap: 1.2rem; }
        .wd-proc-card { flex: 1 1 220px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.4rem; background: ${WHITE}; }
        .wd-proc-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: ${DARK}; }
        .wd-proc-card p  { font-size: 0.82rem; line-height: 1.6; color: ${GRAY_TEXT}; margin: 0; }

        /* Checklist */
        .wd-checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 1rem; }
        .wd-checklist li { font-size: 0.88rem; color: #444; display: flex; align-items: center; gap: 10px; }
        .wd-checklist li::before { content: "✓"; color: ${RED}; font-weight: 700; font-size: 15px; }

        /* Testimonials */
        .wd-testi-grid { display: grid; grid-template-columns: minmax(160px, 200px) repeat(3, minmax(0, 1fr)); gap: 1.2rem; align-items: start; }
        .wd-testi-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.2rem; min-width: 0; }
        .wd-avatar { width: 36px; height: 36px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
        .wd-stars { color: #f39c12; font-size: 16px; margin: 4px 0 8px; }

        /* CTA */
        .wd-cta-banner { background: ${RED}; width: 100%; padding: 3rem 0; }
        .wd-cta-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .wd-cta-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-decoration: none; transition: all 0.2s; text-transform: uppercase; white-space: nowrap; text-align: center; }
        .wd-cta-btn:hover { background: ${WHITE}; color: ${RED}; }

        /* Collab */
        .wd-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); width: 100%; padding: 4rem 0; }
        .wd-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .wd-collab-text { flex: 1 1 340px; max-width: 580px; color: ${WHITE}; }
        .wd-collab-btn { display: inline-block; background: ${WHITE}; color: ${RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); text-align: center; }

        .wd-icon-box { width: 48px; height: 48px; background: #fff0ee; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1024px) {
          .wd-testi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 768px) {
          .wd-sec-xl { padding: 3.5rem 0 2.5rem; }
          .wd-sec-lg { padding: 3.5rem 0; }
          .wd-sec-md { padding: 2.75rem 0; }
          .wd-cta-banner { padding: 2.25rem 0; }
          .wd-collab { padding: 2.75rem 0; }
          .wd-row-50 { gap: 2rem; }
          .wd-process { gap: 2rem; }
        }

        @media (max-width: 640px) {
          .wd-inner, .wd-cta-inner, .wd-collab-inner { padding: 0 1.25rem; }
          .wd-testi-grid { grid-template-columns: 1fr; }
          .wd-cta-inner { flex-direction: column; text-align: center; }
          .wd-cta-btn { width: 100%; }
          .wd-collab-inner { flex-direction: column; text-align: center; }
          .wd-collab-btn { width: 100%; }
          .wd-col50 { flex-basis: 100%; }
          .wd-proc-card { flex: 1 1 100%; }
        }

        @media (max-width: 400px) {
          .wd-inner, .wd-cta-inner, .wd-collab-inner { padding: 0 1rem; }
        }
      `}</style>

      <div className="wd" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO — 50/50 ══ */}
        <section className="wd-sec-xl" style={{ background: LIGHT_BG }}>
          <div className="wd-inner">
            <div className="wd-row-50">
              <div className="wd-col50">
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: RED, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                  Web Development Services
                </p>
                <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.8rem", color: DARK }}>
                  Innovative Web Development Solutions to Elevate Your Business
                </h1>
                <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
                  <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> is a web development company based in Dubai and Faisalabad, Pakistan. We develop digital solutions and high-performing websites. Our group creates responsive designs, e-commerce sites, and custom websites. Do you require a web application or a custom website? We provide state-of-the-art technology with intuitive designs. For excellent web development services, collaborate with us.
                </p>
                <Link
                  href="/contact"
                  style={{ display: "inline-block", background: "transparent", color: RED, padding: "0.75rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, border: `2px solid ${RED}` }}
                >
                  Book a Free Consultation
                </Link>
              </div>
              <div className="wd-col50">
                <img
                  src={HERO_IMG}
                  alt="Web Development"
                  style={{ width: "100%", borderRadius: 16, objectFit: "cover", maxHeight: 380, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURE CARDS ══ */}
        <section className="wd-sec-lg" style={{ background: WHITE }}>
          <div className="wd-inner">
            <div className="wd-features">
              {[
                {
                  icon: <IconCustom />,
                  title: "Custom Website Design",
                  intro: (
                    <p>
                      <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> believes that any business that wishes to be successful needs to have a website with the best website design and development in Canada.
                    </p>
                  ),
                  bullets: [
                    "A one-of-a-kind look",
                    "Seamless User Experience",
                    "Custom UX/UI Design",
                    "Colored User-interface",
                  ],
                },
                {
                  icon: <IconWordPress />,
                  title: "WordPress Design",
                  intro: <p>Excellent all-around solution for the majority of companies seeking a top-notch website that effectively communicates their brand online!</p>,
                  bullets: [
                    "100% Responsive Design",
                    "Advanced Security Plugin",
                    "Fast-loading Sites",
                    "Built with Elementor Pro or Divi",
                  ],
                },
                {
                  icon: <IconLaravel />,
                  title: "Laravel Development",
                  intro: <p>Excellent all-around solution for companies looking for a scalable, reliable web application that demonstrates their brand clearly and offers high performance and security!</p>,
                  bullets: [
                    "Fully Responsive Architecture",
                    "Enhanced Security Features",
                    "Optimized for Speed and Scalability",
                    "Built with Laravel Framework",
                  ],
                },
              ].map((f) => (
                <div key={f.title} className="wd-feat-card">
                  <div className="wd-icon-box">{f.icon}</div>
                  <h3>{f.title}</h3>
                  {f.intro}
                  <ul>
                    {f.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ IMPACT — 50/50 ══ */}
        <section className="wd-sec-md" style={{ background: LIGHT_BG }}>
          <div className="wd-inner">
            <div className="wd-row-50">
              <div className="wd-col50">
                <h2 style={{ fontSize: "clamp(1.4rem, 4vw, 2rem)", fontWeight: 900, color: DARK, marginBottom: "1rem", lineHeight: 1.2 }}>
                  Web Design Optimized for User Experience
                </h2>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT, marginBottom: "1.5rem" }}>
                  <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> specializes in website design and development in Pakistan, the United Arab Emirates, and Canada. Our area of expertise is search engine optimization, usability, and speed optimization. A smooth, user-friendly experience is also offered on desktop, tablet, and mobile platforms. Visitors will be enticed to provide you with helpful information so that you can satisfy their needs by using Conrads's website optimization tools.
                </p>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: DARK, marginBottom: "0.8rem" }}>
                  Performance Enhancement
                </h3>
                <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT }}>
                  Naturally, making sure your website is operating correctly is essential for your company. Whether your website is generating leads or sales, we use analytics to ensure that it is converting towards your objectives.
                </p>
              </div>
              <div className="wd-col50">
                <img
                  src={SECTION_IMG}
                  alt="Web Development Services"
                  style={{ width: "100%", borderRadius: 12, objectFit: "cover", maxHeight: 400, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ COUNTERS ══ */}
        <section className="wd-sec-md" style={{ background: WHITE }} ref={counterRef}>
          <div className="wd-inner">
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
              <CounterItem value={16} suffix="+" label="Delivered Successful Projects" started={counterStarted} />
              <CounterItem value={1}  suffix="+" label="Years of Experience"           started={counterStarted} />
              <CounterItem value={4}  suffix="+" label="Team Members"                  started={counterStarted} />
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section className="wd-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="wd-inner">
            <div className="wd-process">
              <div className="wd-proc-intro">
                <h2 style={{ fontSize: "clamp(1.15rem, 3.5vw, 1.6rem)", fontWeight: 900, color: DARK, lineHeight: 1.3, marginBottom: "1rem" }}>
                  Your website is the most visible and valuable asset of your company.
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT }}>
                  We use a psychology-based approach to platform design to create experiences that captivate, inform, and convert. At Decasofts, we transform and link each department and develop roadmaps and platforms that deliver consistent experiences to the right target at the right time. This offers you a competitive edge in every field, including Canadian website design and development.
                </p>
              </div>
              <div className="wd-proc-cards">
                {[
                  {
                    icon: <IconSearch />,
                    title: "Understanding Problems",
                    desc: "Our process starts with strategy. Our team works with you to determine what the business goals your website is going to support.",
                  },
                  {
                    icon: <IconBrand />,
                    title: "Brand Identity & UI Design",
                    desc: "Our team will design a unique user experience which will be aligned with your brand guidelines to maximize results.",
                  },
                  {
                    icon: <IconResponsive />,
                    title: "Responsive Web Design Toronto",
                    desc: "We are mobile-first designers. Create a flawless user experience on the devices that your audience will love.",
                  },
                ].map((p) => (
                  <div key={p.title} className="wd-proc-card">
                    <div className="wd-icon-box" style={{ marginBottom: 12 }}>{p.icon}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="wd-cta-banner">
          <div className="wd-cta-inner">
            <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.2rem, 4vw, 1.9rem)", margin: 0, maxWidth: 560 }}>
              Request A Free Complete Analysis Of Your Website
            </h2>
            <Link href="/contact" className="wd-cta-btn">Book a Free Consultation</Link>
          </div>
        </section>

        {/* ══ REVIEW — 50/50 ══ */}
        <section className="wd-sec-lg" style={{ background: WHITE }}>
          <div className="wd-inner">
            <div className="wd-row-50">
              <div className="wd-col50">
                <img
                  src={REVIEW_IMG}
                  alt="Review illustration"
                  style={{ width: "100%", display: "block" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div className="wd-col50">
                <h2 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 900, color: DARK, marginBottom: "1rem" }}>
                  Here is what we will review:
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT, marginBottom: "1rem" }}>
                  We develop experiences that engage, educate, and convert using a psychology-based approach to platform design. At <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span>, we transform and link each department and develop roadmaps and platforms that deliver consistent experiences to the right target at the right time. This gives you a competitive advantage in all areas, Website Design and Development in Canada.
                </p>
                <ul className="wd-checklist">
                  {["Website Framework", "Website Technology", "Google Optimize Test", "Navigation", "Speed Test", "Security Analysis", "UI/UX Analysis", "Conversion Rate", "Responsiveness"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="wd-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="wd-inner">
            <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.9rem)", fontWeight: 900, color: DARK, marginBottom: "2rem" }}>
              Work Speak For Itself
            </h2>
            <div className="wd-testi-grid">
              <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 4 }}>Decasofts</div>
                <div className="wd-stars">★★★★★</div>
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
                <div key={t.name} className="wd-testi-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div className="wd-avatar">{t.initial}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: GRAY_TEXT }}>{t.time}</div>
                    </div>
                  </div>
                  <div className="wd-stars">★★★★★</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: GRAY_TEXT }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="wd-collab">
          <div className="wd-collab-inner">
            <div className="wd-collab-text">
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
            <Link href="/contact" className="wd-collab-btn">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}