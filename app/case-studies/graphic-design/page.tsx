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
  { title: "Bloom Beauty",      img: "/posters/1.jpeg" },
  { title: "Velocity Motors",   img: "/posters/2.jpeg" },
  { title: "NovaTech Solutions", img: "/posters/3.jpeg" },
  { title: "Spice Route",       img: "/posters/4.jpeg" },
  { title: "Apex Fitness",      img: "/posters/5.jpeg" },
  { title: "Luxe Interiors",    img: "/posters/6.jpeg" },
  { title: "GreenLeaf Organics", img: "/posters/7.jpeg" },
  { title: "Horizon Films",     img: "/posters/8.jpeg" },
  { title: "Poster 9",          img: "/posters/9.jpeg" },
  { title: "Poster 10",         img: "/posters/10.jpeg" },
  { title: "Poster 11",         img: "/posters/11.jpeg" },
  { title: "Poster 12",         img: "/posters/12.jpeg" },
  { title: "Poster 13",         img: "/posters/13.jpeg" },
  { title: "Poster 14",         img: "/posters/14.jpeg" },
  { title: "Poster 15",         img: "/posters/15.jpeg" },
  { title: "Poster 16",         img: "/posters/16.jpeg" },
  { title: "Poster 17",         img: "/posters/17.jpeg" },
  { title: "Poster 18",         img: "/posters/18.jpeg" },
  { title: "Poster 19",         img: "/posters/19.jpeg" },
  { title: "Poster 20",         img: "/posters/20.jpeg" },
];

const PER_PAGE = 8;

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
        .gd * { box-sizing: border-box; }
        .gd-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .gd-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .gd-card {
          background: ${BG_RED};
          border-radius: 10px;
          overflow: hidden;
          color: ${WHITE};
          box-shadow: 0 6px 18px rgba(191,34,39,0.2);
          transition: transform 0.2s, box-shadow 0.2s;
          cursor: pointer;
          border: none;
          text-align: left;
          font-family: inherit;
          display: block;
          width: 100%;
        }
        .gd-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(191,34,39,0.3); }
        .gd-card-body { padding: 0.75rem 1rem; }
        .gd-card-body h3 { font-size: 0.88rem; font-weight: 800; margin: 0; }
        .gd-card-img-wrap { position: relative; overflow: hidden; }
        .gd-card img { width: 100%; height: 160px; object-fit: cover; object-position: center; display: block; transition: transform 0.3s; }
        .gd-card:hover img { transform: scale(1.06); }
        .gd-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .gd-card:hover .gd-card-overlay { opacity: 1; }
        .gd-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* Pagination */
        .gd-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .gd-page-btn {
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
        .gd-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .gd-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .gd-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .gd-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        /* Collab */
        .gd-collab { background: linear-gradient(135deg, ${BG_RED} 0%, #7a1518 100%); padding: 4rem 0; }
        .gd-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .gd-collab-btn { background: ${WHITE}; color: ${BG_RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }

        /* MODAL */
        .gd-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          animation: gdFadeIn 0.2s ease;
        }
        @keyframes gdFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes gdSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .gd-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: gdSlideUp 0.25s ease;
        }
        .gd-modal-close {
          position: absolute;
          top: 14px; right: 14px;
          width: 36px; height: 36px;
          border-radius: 50%;
          background: rgba(0,0,0,0.5);
          color: ${WHITE};
          border: none;
          font-size: 1.1rem;
          cursor: pointer;
          z-index: 10;
          display: flex; align-items: center; justify-content: center;
          transition: background 0.2s;
        }
        .gd-modal-close:hover { background: ${BG_RED}; }
        .gd-modal-img {
          width: 100%;
          height: auto;
          max-height: 70vh;
          object-fit: fill;
          display: block;
          border-radius: 16px 16px 0 0;
        }
        .gd-modal-body { padding: 1.5rem 2rem 2rem; text-align: center; }
        .gd-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 1.2rem; }
        .gd-modal-cta {
          display: inline-block;
          background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px;
          font-weight: 700; text-decoration: none; font-size: 0.85rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .gd-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 800px) { .gd-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) {
          .gd-grid { grid-template-columns: 1fr; }
          .gd-collab-inner { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="gd" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* HERO */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="gd-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Graphic Design <span style={{ color: BG_RED }}>Portfolio</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Explore our creative design work — from brand identities and packaging to UI/UX and
              print collateral that brings ideas to life. Click any project to view it.
            </p>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="gd-inner">
            <div className="gd-grid">
              {projects.map((p) => (
                <button key={p.img} className="gd-card" onClick={() => setSelected(p)}>
                  <div className="gd-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="gd-card-overlay"><span>View</span></div>
                  </div>
                  <div className="gd-card-body">
                    <h3>{p.title}</h3>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="gd-pagination">
              <button className="gd-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`gd-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="gd-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="gd-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* COLLABORATE */}
        <section className="gd-collab">
          <div className="gd-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Ready to bring your brand to life?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in striking visual design that makes your brand
                unforgettable. Let&apos;s craft something great together.
              </p>
            </div>
            <Link href="/contact" className="gd-collab-btn">Contact Us</Link>
          </div>
        </section>

        {/* MODAL */}
        {selected && (
          <div className="gd-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="gd-modal" onClick={(e) => e.stopPropagation()}>
              <button className="gd-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <img className="gd-modal-img" src={selected.img} alt={selected.title} />
              <div className="gd-modal-body">
                <h2>{selected.title}</h2>
                <Link href="/contact-us" className="gd-modal-cta">Start a Similar Project</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}