"use client";

import React from "react";

// ─── Design Tokens ────────────────────────────────────────────────────────────
const RED = "#c0392b";
const DARK = "#1a1a2e";
const LIGHT_BG = "#f9f9f9";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";

// ─── Data ─────────────────────────────────────────────────────────────────────
const commitments = [
  {
    title: "Quality",
    desc: "We ensure every project or product meets client expectations. Using SDLC software as a guideline, we maintain balance in terms of time, budget, and quality. Our approach guarantees confidence in delivering results. We smartly handle every aspect with precision and trust.",
  },
  {
    title: "Collaborative Approach",
    desc: "We focus on working closely and collaboratively with our clients. Our team of experts and designers put in great effort to solve every challenge in software solutions and web development. We believe in teamwork to achieve a shared goal.",
  },
  {
    title: "Customer Satisfaction",
    desc: "Our ultimate goal is to fulfil the client's needs. We prioritize customer satisfaction above everything else. We ensure your happiness by delivering the best results through hard work and creativity.",
  },
  {
    title: "Strong DevOps and Data Security",
    desc: "Security is not a luxury, but a necessity. Our top priority is ensuring security. We follow the best security practices throughout web development. By focusing on secure coding, timely patches, and staying informed about threats, we create a safer environment for users.",
  },
  {
    title: "Fast Turnaround Time with Software Stability",
    desc: "We ensure stability through software quality and reliability. We work to minimize bugs and errors in our solutions. Our goal is to provide customers with a dependable experience. Another key mission is delivering services and software on time, because time matters.",
  },
];

const solutions = [
  "Enterprise Applications","ERP System","CRM","Salon Management",
  "Inventory Management","Asset Management","Marketplace Software","MVP Development",
  "Web Portals","Payments Software","Finance Software","Event Management",
  "Health Care","HR Management System","E-Commerce Development","Construction Software",
];

const reviews = [
  { name: "Decasofts", subtext: "29 Google reviews", rating: 4, text: "The team was amazing, offering simple and professional solutions, highly recommended.", platform: "Google", isCompany: true },
  { name: "Alex Hales", rating: 5, text: "Best Company in Pakistan for Social Media Services. I increased my store sales with Decasoft team.", platform: "Google" },
  { name: "OFF PRICE", rating: 5, text: "Decasoft is a highly professional and reliable digital agency in the Dubai market, delivering exceptional results across multiple projects.", platform: "Google" },
  { name: "ayesha.dec", rating: 5, text: "Deca Soft delivers professional solutions, and quick recommended for all.", platform: "Google" },
];

const industriesData = [
  { label: "Healthcare",     img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg> },
  { label: "Manufacturing",  img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg> },
  { label: "Retail",         img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { label: "Education",      img: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg> },
  { label: "Logistics",      img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg> },
  { label: "Startups",       img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg> },
  { label: "Marketing",      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg> },
  { label: "Blockchain",     img: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="6" height="6" rx="1"/><rect x="16" y="7" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><rect x="9" y="16" width="6" height="6" rx="1"/><line x1="8" y1="10" x2="9" y2="10"/><line x1="15" y1="10" x2="16" y2="10"/><line x1="12" y1="8" x2="12" y2="9"/><line x1="12" y1="15" x2="12" y2="16"/></svg> },
  { label: "Property",       img: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg> },
  { label: "School",         img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    icon: <svg viewBox="0 0 24 24" fill="none" width="32" height="32" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg> },
];

// ─── SVG Icons for Assure Cards ───────────────────────────────────────────────
const assureIcons: Record<string, React.ReactNode> = {
  Quality: <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  "Collaborative Approach": <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  "Customer Satisfaction": <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>,
  "Strong DevOps and Data Security": <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>,
  "Fast Turnaround Time with Software Stability": <svg viewBox="0 0 24 24" fill="none" width="24" height="24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
};

// ─── Sub-components ───────────────────────────────────────────────────────────
function Stars({ count, total = 5 }: { count: number; total?: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: total }).map((_, i) => (
        <span key={i} style={{ color: i < count ? "#f5a623" : "#ddd", fontSize: "0.9rem" }}>★</span>
      ))}
    </div>
  );
}

function AssureCard({ item }: { item: { title: string; desc: string } }) {
  return (
    <div className="assure-card">
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{ width: 56, height: 56, borderRadius: "50%", border: "1.5px solid rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {assureIcons[item.title]}
        </div>
        <h3 style={{ fontWeight: 800, fontSize: "1rem", lineHeight: 1.25, color: WHITE, margin: 0 }}>{item.title}</h3>
      </div>
      <p style={{ fontSize: "0.87rem", opacity: 0.9, lineHeight: 1.75, margin: 0, color: WHITE }}>{item.desc}</p>
    </div>
  );
}

function IndustryCard({ ind }: { ind: typeof industriesData[0] }) {
  return (
    <div className="ind-card">
      <img src={ind.img} alt={ind.label} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      <div className="ind-overlay">
        {ind.icon}
        <span style={{ fontWeight: 700, fontSize: "0.95rem", letterSpacing: 0.3 }}>{ind.label}</span>
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────
export default function AboutUs() {
  return (
    <>
      <style>{`
        /* ── Global reset for this page ── */
        .about-wrap * { box-sizing: border-box; }

        /* ── HERO ── */
        .hero-grid { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; max-width: 1200px; margin: 0 auto; }
        .hero-text  { flex: 1 1 340px; }
        .hero-card  { flex: 0 0 auto; width: 300px; background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); border-radius: 14px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 3.5rem 2.5rem; color: ${WHITE}; text-align: center; box-shadow: 0 20px 60px rgba(192,57,43,0.35); }

        /* ── COMMITMENT ── */
        .commit-grid { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; max-width: 1200px; margin: 0 auto; }
        .commit-img  { flex: 0 0 260px; border-radius: 14px; overflow: hidden; background: #e0e0e0; min-height: 240px; }
        .commit-text { flex: 1 1 320px; }

        /* ── ASSURE ── */
        .assure-row1 { display: grid; grid-template-columns: repeat(3,1fr); gap: 1.2rem; margin-bottom: 1.2rem; }
        .assure-row2 { display: grid; grid-template-columns: repeat(2,1fr); gap: 1.2rem; }
        .assure-card { background: rgba(0,0,0,0.18); border-radius: 16px; padding: 2rem 1.8rem; border: 1px solid rgba(255,255,255,0.12); color: white; transition: background 0.25s; }
        .assure-card:hover { background: rgba(0,0,0,0.30); }

        /* ── SOLUTIONS ── */
        .solutions-grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; }
        .sol-card { border: 1.5px solid rgba(255,255,255,0.35); border-radius: 10px; padding: 1rem; font-size: 0.88rem; font-weight: 600; color: ${WHITE}; cursor: pointer; text-align: center; transition: background 0.2s, border-color 0.2s, transform 0.2s; background: rgba(255,255,255,0.04); }
        .sol-card:hover { background: ${RED}; border-color: ${RED}; transform: translateY(-2px); }

        /* ── INDUSTRIES ── */
        .ind-row4     { display: grid; grid-template-columns: repeat(4,1fr); gap: 1rem; margin-bottom: 1rem; }
        .ind-row-last { display: flex; justify-content: center; gap: 1rem; margin-top: 1rem; }
        .ind-row-last .ind-card { flex: 0 0 calc(25% - 0.75rem); }
        .ind-card { position: relative; border-radius: 12px; overflow: hidden; height: 180px; cursor: pointer; background: #222; }
        .ind-overlay { position: absolute; inset: 0; background: rgba(0,0,0,0.45); transition: background 0.25s; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 0.5rem; color: ${WHITE}; }
        .ind-card:hover .ind-overlay { background: rgba(192,57,43,0.7); }

        /* ── CTA ── */
        .cta-grid { display: flex; flex-wrap: wrap; align-items: center; gap: 2rem; max-width: 1200px; margin: 0 auto; position: relative; z-index: 1; }
        .cta-text { flex: 1 1 360px; }
        .cta-img  { flex: 0 0 auto; width: 420px; display: flex; justify-content: center; }
        .cta-btn  { display: inline-block; background: transparent; color: ${RED}; border: 2px solid ${RED}; padding: 0.85rem 2.2rem; border-radius: 50px; font-weight: 800; text-decoration: none; font-size: 0.8rem; text-transform: uppercase; letter-spacing: 1.5px; transition: all 0.25s; }
        .cta-btn:hover { background: ${RED}; color: ${WHITE}; }

        /* ── REVIEWS ── */
        .reviews-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(220px,1fr)); gap: 1.2rem; max-width: 1100px; margin: 0 auto; }

        /* ── COLLABORATE ── */
        .collab-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; position: relative; z-index: 1; }

        /* ════════════════════════════════
           TABLET  ≤ 900px
        ════════════════════════════════ */
        @media (max-width: 900px) {
          .assure-row1 { grid-template-columns: repeat(2,1fr); }
          .assure-row2 { grid-template-columns: 1fr; }
          .solutions-grid { grid-template-columns: repeat(3,1fr); }
          .ind-row4 { grid-template-columns: repeat(2,1fr); }
          .ind-row-last .ind-card { flex: 0 0 calc(50% - 0.5rem); }
          .cta-img  { width: 100%; }
          .hero-card { width: 100%; max-width: 340px; margin: 0 auto; }
        }

        /* ════════════════════════════════
           MOBILE  ≤ 600px
        ════════════════════════════════ */
        @media (max-width: 600px) {
          .hero-grid  { gap: 2rem; }
          .hero-card  { width: 100%; padding: 2rem 1.5rem; }
          .commit-img { flex: 0 0 100%; min-height: 180px; }
          .commit-text { flex: 1 1 100%; }
          .assure-row1 { grid-template-columns: 1fr; }
          .assure-row2 { grid-template-columns: 1fr; }
          .assure-card { padding: 1.4rem 1.2rem; }
          .solutions-grid { grid-template-columns: repeat(2,1fr); }
          .ind-row4 { grid-template-columns: repeat(2,1fr); }
          .ind-row-last .ind-card { flex: 0 0 calc(50% - 0.5rem); }
          .ind-card { height: 130px; }
          .cta-img { display: none; }
          .cta-text { flex: 1 1 100%; }
          .collab-inner { flex-direction: column; align-items: flex-start; }
        }

        /* ════════════════════════════════
           SMALL MOBILE  ≤ 400px
        ════════════════════════════════ */
        @media (max-width: 400px) {
          .solutions-grid { grid-template-columns: 1fr; }
          .ind-row4 { grid-template-columns: 1fr; }
          .ind-row-last { flex-direction: column; }
          .ind-row-last .ind-card { flex: 0 0 auto; width: 100%; }
        }
      `}</style>

      <div className="about-wrap" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK, overflowX: "hidden" }}>

        {/* ══ HERO ══ */}
        <section style={{ background: WHITE, padding: "5rem 6% 4rem" }}>
          <div className="hero-grid">
            <div className="hero-text">
              <p style={{ color: RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.6rem" }}>About Us</p>
              <h1 style={{ fontSize: "clamp(1.7rem, 3vw, 2.6rem)", fontWeight: 800, lineHeight: 1.2, marginBottom: "1.2rem", color: DARK }}>
                Decasofts –The Best Marketing Agency For Your Business Growth
              </h1>
              <p style={{ color: GRAY_TEXT, lineHeight: 1.85, marginBottom: "0.8rem", fontSize: "0.95rem" }}>
                At Decasofts, we specialize in offering top-notch marketing solutions that contribute to businesses&apos; success. As the top marketing firm, we offer specialized tools for branding, SEO, digital marketing, and site development that are tailored to your success. Our innovative concepts and data-driven approach ensure optimal growth and brand awareness.
              </p>
              <p style={{ color: DARK, fontWeight: 600, marginBottom: "2rem", fontSize: "0.95rem" }}>
                Allow us to assist you in efficiently and easily navigating the digital world.
              </p>
              <a href="https://calendly.com/decasofts-appointment/meeting" className="cta-btn" style={{ borderRadius: 4, letterSpacing: 0.5 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.color = WHITE; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = RED; }}
              >Book Appointment</a>
            </div>
            <div className="hero-card">
              <div style={{ width: 80, height: 80, borderRadius: "50%", background: "rgba(255,255,255,0.15)", border: "2px solid rgba(255,255,255,0.3)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.2rem" }}>
                <span style={{ fontSize: "2rem", fontWeight: 900 }}>D</span>
              </div>
              <p style={{ fontSize: "1.8rem", fontWeight: 900, letterSpacing: 4, margin: 0, lineHeight: 1.2 }}>D&apos;ECA</p>
              <p style={{ fontSize: "1.8rem", fontWeight: 900, letterSpacing: 4, margin: 0, lineHeight: 1.2 }}>SOFT</p>
              <p style={{ fontSize: "0.7rem", letterSpacing: 3, opacity: 0.75, marginTop: "0.6rem", textTransform: "uppercase" }}>Digital Experience</p>
            </div>
          </div>
        </section>

        {/* ══ COMMITMENT ══ */}
        <section style={{ background: LIGHT_BG, padding: "5rem 6%" }}>
          <div className="commit-grid">
            <div className="commit-img">
              <img src="/about-img.png" alt="Illustration" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", minHeight: 240 }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
            </div>
            <div className="commit-text">
              <p style={{ color: RED, fontWeight: 700, fontSize: "0.75rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "0.5rem" }}>Our Commitment To Excellence</p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2.1rem)", fontWeight: 800, lineHeight: 1.25, marginBottom: "1rem", color: DARK }}>
                Decasofts – Innovative, Responsive, And Flexible Digital Solutions.
              </h2>
              <p style={{ color: GRAY_TEXT, lineHeight: 1.85, marginBottom: "1.5rem", fontSize: "0.93rem" }}>
                The Company was founded to provide web development and digital marketing services. Decasofts has built a strong reputation in the web industry and has four years of experience working with clients in Dubai. Our primary objective is to design beautiful, responsive websites that enhance user experience and promote business expansion. We offer competitive and reasonable pricing, having completed over 600 projects, including custom and e-commerce websites. Meeting the needs of our clients and making sure they succeed are our top priorities.
              </p>
              <a href="#services" style={{ display: "inline-block", background: "transparent", border: `2px solid ${RED}`, color: RED, padding: "0.6rem 1.5rem", borderRadius: 4, fontWeight: 700, textDecoration: "none", fontSize: "0.8rem", textTransform: "uppercase", letterSpacing: 0.5 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.color = WHITE; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = RED; }}
              >Our Services</a>
            </div>
          </div>
        </section>

        {/* ══ WHAT WE ASSURE ══ */}
        <section style={{ background: RED, padding: "5rem 6%", color: WHITE }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 800, textAlign: "center", marginBottom: "3rem" }}>
              What We Assure To Our Customers?
            </h2>
            <div className="assure-row1">
              {commitments.slice(0, 3).map((item) => <AssureCard key={item.title} item={item} />)}
            </div>
            <div className="assure-row2">
              {commitments.slice(3).map((item) => <AssureCard key={item.title} item={item} />)}
            </div>
          </div>
        </section>

        {/* ══ SOLUTIONS ══ */}
        <section style={{ background: DARK, padding: "5rem 6%", color: WHITE, position: "relative", overflow: "hidden" }}>
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80" alt="" aria-hidden
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 1 }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(26,26,46,0.55)" }} />
          <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 800, marginBottom: "3rem" }}>Solutions Decasofts Offer</h2>
            <div className="solutions-grid">
              {solutions.map((s) => (
                <div key={s} className="sol-card">{s}</div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ INDUSTRIES ══ */}
        <section style={{ background: WHITE, padding: "5rem 6%" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.6rem)", fontWeight: 800, marginBottom: "2.5rem", color: DARK }}>Industries We Cover</h2>
            <div className="ind-row4">
              {industriesData.slice(0, 4).map((ind) => <IndustryCard key={ind.label} ind={ind} />)}
            </div>
            <div className="ind-row4">
              {industriesData.slice(4, 8).map((ind) => <IndustryCard key={ind.label} ind={ind} />)}
            </div>
            <div className="ind-row-last">
              {industriesData.slice(8, 10).map((ind) => <IndustryCard key={ind.label} ind={ind} />)}
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section style={{ background: WHITE, padding: "5rem 6%", position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", right: 0, top: 0, width: "55%", height: "100%", backgroundImage: "radial-gradient(circle, #d0d0e8 1px, transparent 1px)", backgroundSize: "22px 22px", opacity: 0.4, pointerEvents: "none" }} />
          <div className="cta-grid">
            <div className="cta-text">
              <p style={{ color: DARK, fontWeight: 800, fontSize: "0.78rem", letterSpacing: 2, textTransform: "uppercase", marginBottom: "1rem" }}>
                Learn How We Can Make A Real Impact
              </p>
              <h2 style={{ fontSize: "clamp(1.6rem, 3vw, 2.8rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "2.5rem", color: DARK }}>
                Are You Looking For A Trustworthy Custom Software Development Company In Canada, Pakistan, UAE?
              </h2>
              <a href="#contact" className="cta-btn"
                onMouseEnter={(e) => { e.currentTarget.style.background = RED; e.currentTarget.style.color = WHITE; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = RED; }}
              >Book A Free Consultation</a>
            </div>
            <div className="cta-img">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/mobile-dashboard-illustration-download-in-svg-png-gif-file-formats--analytics-business-report-finance-pack-illustrations-3723849.png"
                alt="Dashboard illustration"
                style={{ width: "100%", maxWidth: 420, objectFit: "contain" }}
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
            </div>
          </div>
        </section>

        {/* ══ REVIEWS ══ */}
        <section style={{ background: WHITE, padding: "4rem 6%" }}>
          <div className="reviews-grid">
            {reviews.map((r) => (
              <div key={r.name} style={{ border: "1px solid #e8e8e8", borderRadius: 10, padding: "1.4rem", background: WHITE, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.5rem" }}>
                  <div style={{ width: 38, height: 38, borderRadius: "50%", background: (r as any).isCompany ? DARK : RED, color: WHITE, display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", flexShrink: 0 }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <p style={{ fontWeight: 700, fontSize: "0.85rem", margin: 0, color: DARK }}>{r.name}</p>
                    {(r as any).subtext && <p style={{ fontSize: "0.68rem", color: GRAY_TEXT, margin: 0 }}>{(r as any).subtext}</p>}
                  </div>
                  <div style={{ marginLeft: "auto" }}><span style={{ color: "#4285F4", fontWeight: 900, fontSize: "1rem" }}>G</span></div>
                </div>
                <Stars count={r.rating} />
                <p style={{ fontSize: "0.8rem", color: GRAY_TEXT, lineHeight: 1.65, marginTop: "0.6rem", marginBottom: 0 }}>{r.text}</p>
                <p style={{ fontSize: "0.75rem", color: RED, marginTop: "0.4rem", cursor: "pointer", fontWeight: 600 }}>Read More</p>
              </div>
            ))}
          </div>
        </section>
     
{/* <script src="https://elfsightcdn.com/platform.js" async></script>
<div class="elfsight-app-7a907c2b-baaa-46ba-bba0-e020d0e3464e" data-elfsight-app-lazy></div> */}

        {/* ══ COLLABORATE ══ */}
        <section id="contact" style={{ background: `linear-gradient(135deg, ${RED} 0%, #8b0000 100%)`, padding: "4rem 6%", color: WHITE, position: "relative", overflow: "hidden" }}>
          <img src="/collaborate-bg.jpg" alt="" aria-hidden
            style={{ position: "absolute", right: 0, top: 0, height: "100%", width: "35%", objectFit: "cover", opacity: 0.25 }}
            onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")} />
          <div className="collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580 }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>Collaboration</p>
              <h2 style={{ fontSize: "clamp(1.3rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Did you get stuck in something?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in solving all your digital challenges. With the expertise of our UI/UX consultants, we&apos;re here to elevate your business and enhance user experiences.
              </p>
            </div>
            <a href="#" style={{ display: "inline-block", background: WHITE, color: RED, padding: "0.85rem 2.4rem", borderRadius: 4, fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 0.5, flexShrink: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.2)", transition: "transform 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-2px)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
            >Contact Us</a>
          </div>
        </section>

      </div>
    </>
  );
}