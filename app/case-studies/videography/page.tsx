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
  { title: "AGM Saffari",      img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126825/1_ptr6xc.mp4" },
  { title: "Cherish Sports",   img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126834/2_zndyfk.mp4" },
  { title: "Eastech",          img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126822/3_jh0bjz.mp4" },
  { title: "Green Wood",       img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126832/4_u5d87x.mp4" },
  { title: "KBRE 1",           img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126818/5_cjaqop.mp4" },
  { title: "Legend Autos",     img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126816/6_ecplre.mp4" },
  { title: "Off Price Fashion", img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126808/7_myvuoz.mp4" },
  { title: "Service Zone",     img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126802/8_wkaxxc.mp4" },
  { title: "VS Tecnical",      img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126828/9_conlcw.mp4" },
  { title: "ZM Performance",   img: "https://res.cloudinary.com/do2147b3j/video/upload/q_auto/f_auto/v1782126825/10_nhpqaf.mp4" },
];

const PER_PAGE = 8;

function isVideo(src: string) {
  return /\.(mp4|webm|ogg|mov)$/i.test(src);
}

function MediaThumb({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        muted
        loop
        playsInline
        style={{ width: "100%", height: 160, objectFit: "cover", display: "block", transition: "transform 0.3s" }}
        onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
        onMouseLeave={(e) => {
          const v = e.currentTarget as HTMLVideoElement;
          v.pause();
          v.currentTime = 0;
        }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: 160, objectFit: "cover", objectPosition: "center", display: "block", transition: "transform 0.3s" }}
    />
  );
}

function MediaHero({ src, alt }: { src: string; alt: string }) {
  if (isVideo(src)) {
    return (
      <video
        src={src}
        controls
        autoPlay
        muted
        loop
        playsInline
        style={{ width: "100%", height: "auto", maxHeight: "60vh", objectFit: "contain", display: "block", background: "#000", borderRadius: "16px 16px 0 0" }}
      />
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: "100%", height: 280, objectFit: "cover", display: "block", borderRadius: "16px 16px 0 0" }}
    />
  );
}

export default function Page() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<(typeof allProjects)[0] | null>(null);

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
        .vp * { box-sizing: border-box; }
        .vp-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .vp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .vp-card {
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
        .vp-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(191,34,39,0.3); }
        .vp-card-body { padding: 0.75rem 1rem; }
        .vp-card-body h3 { font-size: 0.88rem; font-weight: 800; margin: 0; }
        .vp-card-img-wrap { position: relative; overflow: hidden; }
        .vp-card:hover .vp-card-img-wrap img,
        .vp-card:hover .vp-card-img-wrap video { transform: scale(1.06); }
        .vp-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
          pointer-events: none;
        }
        .vp-card:hover .vp-card-overlay { opacity: 1; }
        .vp-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
          display: flex; align-items: center; gap: 6px;
        }
        .vp-play-icon {
          width: 0; height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
          border-left: 8px solid ${BG_RED};
        }

        .vp-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .vp-page-btn {
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
        .vp-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .vp-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .vp-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .vp-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        .vp-collab { background: linear-gradient(135deg, ${BG_RED} 0%, #7a1518 100%); padding: 4rem 0; }
        .vp-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .vp-collab-btn { background: ${WHITE}; color: ${BG_RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }

        .vp-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex; align-items: center; justify-content: center;
          padding: 1.5rem;
          animation: vpFadeIn 0.2s ease;
        }
        @keyframes vpFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes vpSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .vp-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: vpSlideUp 0.25s ease;
        }
        .vp-modal-close {
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
        .vp-modal-close:hover { background: ${BG_RED}; }
        .vp-modal-body { padding: 1.5rem 2rem 2rem; text-align: center; }
        .vp-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 1.2rem; }
        .vp-modal-cta {
          display: inline-block;
          background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px;
          font-weight: 700; text-decoration: none; font-size: 0.85rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .vp-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 800px) { .vp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) {
          .vp-grid { grid-template-columns: 1fr; }
          .vp-collab-inner { flex-direction: column; text-align: center; }
        }
      `}</style>

      <div className="vp" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* HERO */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="vp-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Videography <span style={{ color: BG_RED }}>Portfolio</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Explore our cinematic storytelling — from event coverage and brand films to product
              videography that brings ideas to life. Click any project to watch the video.
            </p>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="vp-inner">
            <div className="vp-grid">
              {projects.map((p) => (
                <button key={p.title} className="vp-card" onClick={() => setSelected(p)}>
                  <div className="vp-card-img-wrap">
                    <MediaThumb src={p.img} alt={p.title} />
                    <div className="vp-card-overlay">
                      <span>
                        <span className="vp-play-icon" />
                        Watch Video
                      </span>
                    </div>
                  </div>
                  <div className="vp-card-body">
                    <h3>{p.title}</h3>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="vp-pagination">
              <button className="vp-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`vp-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="vp-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="vp-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* COLLABORATE */}
        <section className="vp-collab">
          <div className="vp-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Ready to tell your brand&apos;s story?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in cinematic videography that captures attention and
                drives results. Let&apos;s bring your vision to the screen.
              </p>
            </div>
            <Link href="/contact-us" className="vp-collab-btn">Contact Us</Link>
          </div>
        </section>

        {/* MODAL */}
        {selected && (
          <div className="vp-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="vp-modal" onClick={(e) => e.stopPropagation()}>
              <button className="vp-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <MediaHero src={selected.img} alt={selected.title} />
              <div className="vp-modal-body">
                <h2>{selected.title}</h2>
                <Link href="/contact-us" className="vp-modal-cta">Start a Similar Project</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}