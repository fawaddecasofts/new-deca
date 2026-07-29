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
  { title: "Logo 1",  img: "/logos/1.png" },
  { title: "Logo 2",  img: "/logos/2.png" },
  { title: "Logo 3",  img: "/logos/3.png" },
  { title: "Logo 4",  img: "/logos/4.png" },
  { title: "Logo 5",  img: "/logos/5.png" },
  { title: "Logo 6",  img: "/logos/6.png" },
  { title: "Logo 7",  img: "/logos/7.png" },
  { title: "Logo 8",  img: "/logos/8.png" },
  { title: "Logo 9",  img: "/logos/9.png" },
  { title: "Logo 10", img: "/logos/10.png" },
  { title: "Logo 11", img: "/logos/11.png" },
  { title: "Logo 12", img: "/logos/12.png" },
  { title: "Logo 13", img: "/logos/13.png" },
  { title: "Logo 14", img: "/logos/14.png" },
  { title: "Logo 15", img: "/logos/15.png" },
  { title: "Logo 16", img: "/logos/16.png" },
  { title: "Logo 17", img: "/logos/17.png" },
  { title: "Logo 18", img: "/logos/18.png" },
  { title: "Logo 19", img: "/logos/19.png" },
  { title: "Logo 20", img: "/logos/20.png" },
  { title: "Logo 21", img: "/logos/21.jpg" },
  { title: "Logo 22", img: "/logos/22.jpg" },
  { title: "Logo 23", img: "/logos/23.png" },
  { title: "Logo 24", img: "/logos/24.png" },
  { title: "Logo 25", img: "/logos/25.png" },
  { title: "Logo 26", img: "/logos/26.png" },
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
        .ld * { box-sizing: border-box; }
        .ld-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .ld-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .ld-card {
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
        .ld-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(191,34,39,0.3); }
        .ld-card-body { padding: 0.75rem 1rem; }
        .ld-card-body h3 { font-size: 0.88rem; font-weight: 800; margin: 0; }
        .ld-card-img-wrap {
          position: relative;
          overflow: hidden;
          background: ${BG_RED};
          display: flex;
          align-items: center;
          justify-content: center;
          height: 130px;
        }
        .ld-card img { width: 70%; height: 70%; object-fit: contain; object-position: center; display: block; transition: transform 0.3s; }
        .ld-card:hover img { transform: scale(1.08); }
        .ld-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.45);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .ld-card:hover .ld-card-overlay { opacity: 1; }
        .ld-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* Pagination */
        .ld-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .ld-page-btn {
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
        .ld-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .ld-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .ld-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .ld-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        /* Collab */
        .ld-collab { background: linear-gradient(135deg, ${BG_RED} 0%, #7a1518 100%); padding: 4rem 0; }
        .ld-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .ld-collab-btn { background: ${WHITE}; color: ${BG_RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }

        /* MODAL */
        .ld-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: ldFadeIn 0.2s ease;
        }
        @keyframes ldFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes ldSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .ld-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: ldSlideUp 0.25s ease;
        }
        .ld-modal-close {
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
        .ld-modal-close:hover { background: ${BG_RED}; }
        .ld-modal-img-wrap {
          width: 100%; height: 400px;
          background: ${BG_RED};
          display: flex; align-items: center; justify-content: center;
          border-radius: 16px 16px 0 0;
        }
        .ld-modal-img-wrap img {
          max-width: 70%; max-height: 70%;
          object-fit: contain;
          display: block;
        }
        .ld-modal-body { padding: 1.5rem 2rem 2rem; text-align: center; }
        .ld-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 1.2rem; }
        .ld-modal-cta {
          display: inline-block;
          background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px;
          font-weight: 700; text-decoration: none; font-size: 0.85rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .ld-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 800px) { .ld-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) {
          .ld-grid { grid-template-columns: 1fr; }
          .ld-collab-inner { flex-direction: column; text-align: center; }
          .ld-modal-img-wrap { height: 260px; }
        }
      `}</style>

      <div className="ld" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* HERO */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="ld-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Logo Design <span style={{ color: BG_RED }}>Portfolio</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Explore our logo design work — from wordmarks and emblems to abstract marks that
              capture a brand&apos;s identity in a single icon. Click any project to see the full case study.
            </p>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="ld-inner">
            <div className="ld-grid">
              {projects.map((p) => (
                <button key={p.title} className="ld-card" onClick={() => setSelected(p)}>
                  <div className="ld-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="ld-card-overlay"><span>View</span></div>
                  </div>
                  <div className="ld-card-body">
                    <h3>{p.title}</h3>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="ld-pagination">
              <button className="ld-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`ld-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="ld-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="ld-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* COLLABORATE */}
        <section className="ld-collab">
          <div className="ld-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Ready for a logo that stands out?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in crafting memorable logos that capture your brand&apos;s
                essence. Let&apos;s design an identity you&apos;ll be proud of.
              </p>
            </div>
            <Link href="/contact" className="ld-collab-btn">Contact Us</Link>
          </div>
        </section>

        {/* MODAL */}
        {selected && (
          <div className="ld-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="ld-modal" onClick={(e) => e.stopPropagation()}>
              <button className="ld-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <div className="ld-modal-img-wrap">
                <img src={selected.img} alt={selected.title} />
              </div>
              <div className="ld-modal-body">
                <h2>{selected.title}</h2>
                <Link href="/contact-us" className="ld-modal-cta">Start a Similar Project</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}