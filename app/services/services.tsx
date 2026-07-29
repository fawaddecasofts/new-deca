"use client";

import { link } from "fs";
import React, { useState } from "react";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

// ─── Data ─────────────────────────────────────────────────────────────────────
const heroServices = [
  "Ecommerce Websites",
  "Web Development",
  "Digital Marketing",
  "SEO Services",
  "Mobile Apps",
  "Graphic Design",
];

const services = [
  {
    title: "Videography",
    items: ["Manage Delivery Model", "Enterprise Software Development", "Startups Software Development"],
    link: "services/videography",
  },
  
  {
    title: "Video Editing",
    link: "services/services/videography",
    items: ["Manage Delivery Model", "Enterprise Software Development", "Startups Software Development"],
  },
  {
    title: "Graphic Designing",
    items: ["Manage Delivery Model", "Enterprise Software Development", "Startups Software Development"],
    link: "services/uiux",
  },
  {
    title: "Digital Marketing",
    items: ["Manage Delivery Model", "Enterprise Software Development", "Startups Software Development"],
    link: "services/digital-marketing",
  },
  {
    title: "Web Development",
    items: ["Manage Delivery Model", "Enterprise Software Development", "Startups Software Development"],
    link: "services/e-commerce",
  },
  {
    title: "SEO Services",
    items: ["Manage Delivery Model", "Enterprise Software Development", "Startups Software Development"],
    link: "services/seo",
  },
];

const heroTitles = heroServices;
let currentIndex = 0;

// ─── Service Icon SVG ─────────────────────────────────────────────────────────
const ServiceIcon = () => (
  <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
    <rect width="48" height="48" rx="8" fill="#fff0ee"/>
    <rect x="8" y="10" width="32" height="22" rx="3" fill="none" stroke={RED} strokeWidth="2"/>
    <rect x="13" y="15" width="10" height="8" rx="1" fill={RED} opacity="0.15"/>
    <rect x="13" y="15" width="10" height="8" rx="1" stroke={RED} strokeWidth="1.5"/>
    <line x1="26" y1="17" x2="34" y2="17" stroke={RED} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="26" y1="20" x2="34" y2="20" stroke={RED} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="26" y1="23" x2="30" y2="23" stroke={RED} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="13" y1="27" x2="35" y2="27" stroke={RED} strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M20 32 L24 36 L28 32" stroke={RED} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
);

// ─── Main Component ───────────────────────────────────────────────────────────
export default function ServicesPage() {
  const [heroTitle, setHeroTitle] = useState(heroServices[0]);

  // Auto rotate hero title
  React.useEffect(() => {
    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % heroTitles.length;
      setHeroTitle(heroTitles[currentIndex]);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style>{`
        .srv-wrap * { box-sizing: border-box; }

        /* ── HERO ── */
        .hero-srv { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; max-width: 1200px; margin: 0 auto; }
        .hero-srv-text { flex: 1 1 360px; }
        .hero-srv-img  { flex: 0 0 420px; }

        /* ── SERVICES GRID ── */
        .srv-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem; max-width: 1200px; margin: 0 auto; }
        .srv-card { border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.5rem; background: ${WHITE}; transition: box-shadow 0.2s, transform 0.2s; cursor: pointer; }
        .srv-card:hover { box-shadow: 0 8px 30px rgba(192,57,43,0.12); transform: translateY(-3px); }
        .srv-card ul { padding-left: 1.2rem; margin: 0.8rem 0; }
        .srv-card ul li { font-size: 0.82rem; color: ${GRAY_TEXT}; margin-bottom: 0.3rem; line-height: 1.5; }
        .read-more { font-size: 0.82rem; color: ${DARK}; font-weight: 700; text-decoration: none; display: inline-flex; align-items: center; gap: 0.3rem; margin-top: 0.5rem; transition: color 0.2s; }
        .read-more:hover { color: ${RED}; }

        /* ── SCROLL SECTION ── */
        .scroll-track { display: flex; gap: 1.2rem; overflow-x: auto; padding-bottom: 1rem; scroll-snap-type: x mandatory; -webkit-overflow-scrolling: touch; }
        .scroll-track::-webkit-scrollbar { height: 6px; }
        .scroll-track::-webkit-scrollbar-track { background: #f0f0f0; border-radius: 3px; }
        .scroll-track::-webkit-scrollbar-thumb { background: ${RED}; border-radius: 3px; }
        .scroll-card { flex: 0 0 280px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.5rem; background: ${WHITE}; scroll-snap-align: start; transition: box-shadow 0.2s; }
        .scroll-card:hover { box-shadow: 0 8px 24px rgba(192,57,43,0.1); }

        /* ── CTA BANNER ── */
        .cta-banner { background: ${RED}; padding: 3rem 6%; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; position: relative; overflow: hidden; }
        .cta-btn-outline { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 50px; font-weight: 700; font-size: 0.88rem; letter-spacing: 1px; cursor: pointer; text-decoration: none; transition: all 0.2s; text-transform: uppercase; }
        .cta-btn-outline:hover { background: ${WHITE}; color: ${RED}; }

        /* ── COLLAB ── */
        .collab-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; position: relative; z-index: 1; }

        /* ════ RESPONSIVE ════ */
        @media (max-width: 1024px) { .srv-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 900px) {
          .hero-srv { flex-direction: column; }
          .hero-srv-img { flex: 0 0 100%; width: 100%; }
          .srv-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .srv-grid { grid-template-columns: 1fr; }
          .cta-banner { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="srv-wrap" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO ══ */}
        <section style={{ background: LIGHT_BG, padding: "5rem 6% 4rem" }}>
          <div className="hero-srv">
            {/* Left */}
            <div className="hero-srv-text">
              <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.5rem", color: DARK }}>
                The Ultimate Destination For All Your Services Needs:
              </h1>
              <h2 style={{ fontSize: "clamp(1.3rem, 2vw, 1.8rem)", fontWeight: 800, color: RED, marginBottom: "1.2rem" }}>
                {heroTitle}
              </h2>
              <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem", maxWidth: 480 }}>
                DecaSofts is a cutting-edge digital center that produces excellent websites and services. We are at the forefront of the industry thanks to our team of highly qualified professionals and excellent solutions.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <a href="https://calendly.com/decasofts-appointment/meeting" style={{ display: "inline-block", border: `2px solid ${RED}`, color: RED, background: "transparent", padding: "0.75rem 1.6rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.82rem", letterSpacing: 1, textTransform: "uppercase", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.color = WHITE; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = RED; }}>
                  Book Appointment Know More
                </a>
                <a href="/contact" style={{ display: "inline-block", border: `2px solid ${DARK}`, color: DARK, background: "transparent", padding: "0.75rem 1.6rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.82rem", letterSpacing: 1, textTransform: "uppercase", transition: "all 0.2s" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = DARK; e.currentTarget.style.color = WHITE; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = DARK; }}>
                  Get In Touch
                </a>
              </div>
            </div>

            {/* Right illustration */}
            <div className="hero-srv-img">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
                alt="Services"
                style={{ width: "100%", borderRadius: 16, objectFit: "cover", maxHeight: 340 }}
              />
            </div>
          </div>
        </section>

        {/* ══ TRANSFORM SECTION ══ */}
        <section style={{ background: WHITE, padding: "5rem 6%" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.1rem)", fontWeight: 900, color: DARK, marginBottom: "0.8rem" }}>
              Let Us Transform Your World With Flawless Digital Solutions.
            </h2>
            <p style={{ color: GRAY_TEXT, fontSize: "0.93rem", maxWidth: 680, margin: "0 auto" }}>
              DecaSofts offers premier services that efficiently solve your digital challenges. Explore our smart solutions and take a step toward excellence.
            </p>
          </div>

          {/* Services — horizontal scroll all services */}
          <div className="scroll-track">
            {services.map((s) => (
              <div key={s.title} className="scroll-card">
                <div style={{ marginBottom: "1rem" }}><ServiceIcon /></div>
                <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.8rem", color: DARK }}>{s.title}</h3>
                <ul style={{ paddingLeft: "1.2rem", margin: "0 0 1rem 0" }}>
                  {s.items.map((item) => (
                    <li key={item} style={{ fontSize: "0.82rem", color: GRAY_TEXT, marginBottom: "0.3rem", lineHeight: 1.5 }}>{item}</li>
                  ))}
                </ul>
                <a href={s.link} className="read-more">Read More →</a>
              </div>
            ))}
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="cta-banner">
          {/* BG circuit pattern */}
          <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=60" alt="" aria-hidden
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.12 }} />
          <div style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", margin: 0 }}>
              Have a Blasting Tech start-up Idea?
            </h2>
          </div>
          <a href="/contact" className="cta-btn-outline" style={{ position: "relative", zIndex: 1 }}>
            Get In Touch
          </a>
        </section>

        {/* ══ CTA DISCOVER ══ */}
        <section style={{ background: WHITE, padding: "5rem 6%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
            <div style={{ flex: "1 1 360px" }}>
              <p style={{ color: DARK, fontWeight: 800, fontSize: "0.75rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.8rem" }}>
                Discover How We Can Create A True Impact
              </p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, color: DARK, marginBottom: "2rem" }}>
                Searching For A Reliable Digital Agency To Elevate Your Business?
              </h2>
              <a href="https://calendly.com/decasofts-appointment/meeting" style={{ display: "inline-block", border: `2px solid ${RED}`, color: RED, background: "transparent", padding: "0.8rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.color = WHITE; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = RED; }}>
                Book A Free Consultation
              </a>
            </div>
            <div style={{ flex: "0 0 auto", width: 380 }}>
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-dashboard-illustration-download-in-svg-png-gif-file-formats--analytics-business-report-finance-pack-illustrations-3723849.png"
                alt="Dashboard"
                style={{ width: "100%", objectFit: "contain" }}
                onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
              />
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section style={{ background: `linear-gradient(135deg, ${RED} 0%, #8b0000 100%)`, padding: "4rem 6%", color: WHITE, position: "relative", overflow: "hidden" }}>
          <img src="/collaborate-bg.jpg" alt="" aria-hidden
            style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "35%", objectFit: "cover", opacity: 0.25 }}
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")} />
          <div className="collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580 }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>Collaboration</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Did you get stuck in something?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in solving all your digital challenges. With the expertise of our UI/UX consultants, we&apos;re here to elevate your business and enhance user experiences.
              </p>
            </div>
            <a href="/contact" style={{ display: "inline-block", background: WHITE, color: RED, padding: "0.85rem 2.4rem", borderRadius: 4, fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 0.5, flexShrink: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}>
              Contact Us
            </a>
          </div>
        </section>

      </div>
    </>
  );
}

// ─── Service Card ─────────────────────────────────────────────────────────────
function ServiceCard({ service }: { service: { title: string; items: string[] } }) {
  return (
    <div className="srv-card">
      <div style={{ marginBottom: "1rem" }}><ServiceIcon /></div>
      <h3 style={{ fontWeight: 800, fontSize: "1rem", marginBottom: "0.8rem", color: DARK }}>{service.title}</h3>
      <ul>
        {service.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <a href="#" className="read-more">Read More →</a>
    </div>
  );
}