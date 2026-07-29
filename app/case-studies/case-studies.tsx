"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const BG_RED = "#bf2227";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const allProjects = [
  {
    title: "Green Wood Vacation Rentals",
    category: "Web Development",
    desc: "Green Wood Vacation Homes Rental LLC brings a fresh, sophisticated edge to short-term rentals and holiday homes in Dubai.",
    fullDesc: "Green Wood Vacation Homes Rental LLC brings a fresh, sophisticated edge to short-term rentals and holiday homes in Dubai. We offer a carefully curated portfolio of properties that combine luxury, comfort, and local flavor.Whether you’re staying for a week or a month, Green Wood delivers seamless hospitality, blending the best of hotel service with the intimacy of a private home.",
    tags: ["Web Development", "Vue", "JavaScript"],
    img: "/web/greenwood.png",
    projectUrl: "https://gwvacationhomes.ae/",
    stats: [
      { label: "Load Time", value: "1.2s" },
      { label: "Conversion", value: "+34%" },
      { label: "Timeline", value: "6 weeks" },
    ],
  },
  {
    title: "KBRE",
    category: "Web Development",
    desc: "Khalifa Bakhit Real Estate LLC is a premier real estate company headquartered in Dubai, UAE.",
    fullDesc: "Khalifa Bakhit Real Estate LLC, established in 1998 is a premier real estate company headquartered in Dubai, UAE, built on a legacy of trust, innovation, and excellence. We specialize in property development, sales, leasing, and real estate investment consultancy, offering a full suite of services to clients across residential, commercial, and luxury sectors.",
    tags: ["Web Development", "Wordpress"],
    img: "/web/kbre.png",
    projectUrl: "https://kbre.ae/",
    stats: [
      { label: "Processing Time", value: "-40%" },
      { label: "Departments", value: "12" },
      { label: "Users Served", value: "10K+" },
    ],
  },
  {
    title: "Al Zahra Curtains",
    category: "e-Commerce",
    desc: "Al Zahra Curtains is a leading provider of high-quality window treatments and home decor solutions in the UAE.",
    fullDesc: "Al Zahra Curtains needed a modern, responsive e-commerce platform to showcase their extensive range of products and improve the customer shopping experience. We developed a sleek, user-friendly website using Shopify and JavaScript enhancements.",
    tags: ["e-Commerce", "Wordpress", "JavaScript"],
    img: "/web/alzahracurtain.png",
    projectUrl: "http://alzaharahcurtains.com/",
    stats: [
      { label: "Conversion Rate", value: "4.8%" },
      { label: "Countries Shipped", value: "30+" },
      { label: "Page Speed", value: "92/100" },
    ],
  },
  {
    title: "MH ALBADAR",
    category: "UI/UX Design",
    desc: "MH-Albadar, based in Pakistan, provides exceptional tours and travel services, specializing in Hajj and Umrah packages.",
    fullDesc: "MH-Albadar is a premier tours and travel company based in Pakistan, dedicated to providing exceptional travel experiences. We specialize in offering comprehensive Hajj and Umrah packages, ensuring a spiritually fulfilling journey for our clients. Our commitment to quality service and customer satisfaction makes us a trusted choice for travelers. Whether you are embarking on a pilgrimage or exploring new destinations, MH-Albadar is here to make your travel dreams come true with our expertly crafted services and personalized care.",
    tags: ["UI/UX", "Figma", "Wordpress"],
    img: "/web/mhlbadar.png",
    projectUrl: "https://mhalbadar.com.pk/",
    stats: [
      { label: "Engagement", value: "+40%" },
      { label: "Churn Reduced", value: "-25%" },
      { label: "User Flows", value: "8" },
    ],
  },
  {
    title: "NayiZameen",
    category: "Web Design & Development",
    desc: "Best Property marketing place in PAKISTAN",
    fullDesc: " Nayi Zameen we combine contemporary design thinking with respect for local architecture and community needs. From residential homes to commercial developments, our team focuses on quality, transparency and long-term value. We guide clients through every step — market research, property selection, financing options and after-sales support — so you get the right property with total confidence.",
    tags: ["SEO", "Analytics", "Content"],
    img: "/web/nayizameen.png",
    projectUrl: "https://www.nayizameen.com",
    stats: [
      { label: "Organic Traffic", value: "+200%" },
      { label: "Keywords Ranked", value: "180+" },
      { label: "Timeline", value: "6 months" },
    ],
  },
  {
    title: "Al Aweer Technical Services",
    category: "Digital Marketing Web Development",
    desc: "Noor Al Aweer Technical Services, we specialize in delivering innovative, high-quality glass and aluminum solutions tailored to meet the dynamic needs of modern architecture.",
    fullDesc: "At Noor Al Aweer Technical Services, we specialize in delivering innovative, high-quality glass and aluminum solutions tailored to meet the dynamic needs of modern architecture. We provide services to residential, commercial, and industrial customers all over the United Arab Emirates with a strong commitment to craftsmanship, durability, and design excellence. Our skilled team is ready to bring your vision to life with precision and professionalism, whether you need sleek glass facades, bespoke aluminum frames, or complete structural glazing systems.",
    tags: ["Marketing", "Social Media", "Ads"],
    img: "/web/nooralaweer.png",
    projectUrl: "https://nooralaweertechnicalservices.ae/",
    stats: [
      { label: "Revenue Growth", value: "+65%" },
      { label: "Channels", value: "5" },
      { label: "Email Open Rate", value: "38%" },
    ],
  },
  {
    title: "Out Loud Fashion",
    category: "Landing Page",
    desc: "Out Loud Fashion delivers modern, trend-driven styles that empower self-expression. Designed for fashion-forward audiences, the brand combines creativity, confidence, elegance, and individuality.",
    fullDesc: "Out Loud Fashion is a modern fashion brand focused on bold style, creativity, and self-expression. The landing page showcases trendy designs, helping fashion enthusiasts discover inspiring looks that make a statement with confidence and individuality.",
    tags: ["Web Development", "WordPress"],
    img: "/web/outloud.png",
    projectUrl: "https://outloudfashion.com/",
    stats: [
      { label: "Doctors Listed", value: "500+" },
      { label: "Bookings/Month", value: "2K+" },
      { label: "Uptime", value: "99.9%" },
    ],
  },
];

const PER_PAGE = 9;

export default function Page() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<typeof allProjects[0] | null>(null);

  const totalPages = Math.ceil(allProjects.length / PER_PAGE);
  const start = (page - 1) * PER_PAGE;
  const projects = allProjects.slice(start, start + PER_PAGE);

  function goToPage(p: number) {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    document.body.style.overflow = selected ? "hidden" : "";
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setSelected(null);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [selected]);

  return (
    <>
      <style>{`
        .cs * { box-sizing: border-box; }
        .cs-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .cs-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.4rem; }
        .cs-card {
          background: ${BG_RED};
          border-radius: 12px;
          overflow: hidden;
          color: ${WHITE};
          box-shadow: 0 8px 24px rgba(191,34,39,0.22);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          border: none;
          text-align: left;
          font-family: inherit;
          display: block;
          width: 100%;
          padding: 1.4rem 1.4rem 1.2rem;
        }
        .cs-card:hover { transform: translateY(-4px); box-shadow: 0 14px 34px rgba(191,34,39,0.32); }
        .cs-card h3 { font-size: 1.05rem; font-weight: 800; margin-bottom: 0.7rem; }
        .cs-card-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          font-size: 0.7rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 0.8rem;
        }
        .cs-card p { font-size: 0.82rem; line-height: 1.65; opacity: 0.92; margin-bottom: 1rem; }
        .cs-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1rem; }
        .cs-tags span {
          background: rgba(255,255,255,0.15);
          font-size: 0.7rem;
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
        }
        .cs-card-img-wrap { position: relative; overflow: hidden; border-radius: 10px; }
        .cs-card img { width: 100%; height: 160px; object-fit: cover; object-position: center; display: block; transition: transform 0.3s; }
        .cs-card:hover img { transform: scale(1.06); }
        .cs-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .cs-card:hover .cs-card-overlay { opacity: 1; }
        .cs-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* Pagination */
        .cs-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .cs-page-btn {
          width: 36px; height: 36px;
          border-radius: 50%;
          border: 1px solid ${BORDER};
          background: ${WHITE};
          color: ${DARK};
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          transition: all 0.2s;
        }
        .cs-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .cs-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .cs-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .cs-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        /* ══ MODAL ══ */
        .cs-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          animation: csFadeIn 0.2s ease;
        }
        @keyframes csFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes csSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .cs-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: csSlideUp 0.25s ease;
        }
        .cs-modal-close {
          position: absolute; top: 14px; right: 14px;
          width: 36px; height: 36px; border-radius: 50%;
          background: rgba(0,0,0,0.5); color: ${WHITE};
          border: none; font-size: 1.1rem; cursor: pointer; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .cs-modal-close:hover { background: ${BG_RED}; }
        .cs-modal img { width: 100%; height: 280px; object-fit: cover; object-position: center; display: block; border-radius: 16px 16px 0 0; }
        .cs-modal-body { padding: 1.8rem 2rem 2.2rem; }
        .cs-modal-tag {
          display: inline-block; background: ${BG_RED}; color: ${WHITE};
          font-size: 0.68rem; font-weight: 700; padding: 4px 12px;
          border-radius: 4px; margin-bottom: 0.8rem; text-transform: uppercase; letter-spacing: 0.5px;
        }
        .cs-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 0.9rem; }
        .cs-modal-body p.desc { font-size: 0.9rem; line-height: 1.8; color: ${GRAY_TEXT}; margin-bottom: 1.5rem; }
        .cs-modal-stats {
          display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.8rem;
          margin-bottom: 1.5rem; padding: 1rem; background: ${LIGHT_BG}; border-radius: 10px;
        }
        .cs-modal-stats .stat { text-align: center; }
        .cs-modal-stats .stat .val { font-size: 1.2rem; font-weight: 900; color: ${BG_RED}; display: block; }
        .cs-modal-stats .stat .lbl { font-size: 0.68rem; color: ${GRAY_TEXT}; text-transform: uppercase; letter-spacing: 0.5px; }
        .cs-modal-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.6rem; }
        .cs-modal-tags span { background: #fdeceb; color: ${BG_RED}; font-size: 0.74rem; font-weight: 700; padding: 5px 12px; border-radius: 20px; }
        .cs-modal-cta {
          display: inline-block; background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px; font-weight: 700;
          text-decoration: none; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .cs-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 650px) {
          .cs-grid { grid-template-columns: 1fr; }
          .cs-modal img { height: 200px; }
          .cs-modal-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="cs" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO ══ */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="cs-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Our <span style={{ color: BG_RED }}>Case Studies</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Check out some of the impactful work we&apos;ve done for our clients across various
              industries. Click any project to read the full case study.
            </p>
          </div>
        </section>

        {/* ══ PROJECTS GRID ══ */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="cs-inner">
            <div className="cs-grid">
              {projects.map((p) => (
                <button key={p.title} className="cs-card" onClick={() => setSelected(p)}>
                  <h3>{p.title}</h3>
                  <span className="cs-card-tag">{p.category}</span>
                  <p>{p.desc}</p>
                  <div className="cs-tags">
                    {p.tags.map((t) => <span key={t}>{t}</span>)}
                  </div>
                  <div className="cs-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="cs-card-overlay"><span>View Case Study</span></div>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="cs-pagination">
              <button className="cs-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`cs-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="cs-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="cs-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* ══ MODAL ══ */}
        {selected && (
          <div className="cs-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
              <button className="cs-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <img src={selected.img} alt={selected.title} />
              <div className="cs-modal-body">
                <span className="cs-modal-tag">{selected.category}</span>
                <h2>{selected.title}</h2>
                <p className="desc">{selected.fullDesc}</p>

                <div className="cs-modal-stats">
                  {selected.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <span className="val">{s.value}</span>
                      <span className="lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="cs-modal-tags">
                  {selected.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                  <a
                    href={selected.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cs-modal-cta"
                    style={{ background: "transparent", color: BG_RED, border: `2px solid ${BG_RED}` }}
                  >
                    Visit {selected.title} ↗
                  </a>
                  <Link href="/contact-us" className="cs-modal-cta">Start a Similar Project</Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}