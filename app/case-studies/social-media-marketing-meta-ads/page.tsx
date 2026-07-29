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
    title: "Glow Beauty Co.",
    category: "Meta Ads",
    desc: "Ran a full-funnel Facebook & Instagram ad campaign that generated a 4.2x ROAS and grew followers by 60% in 90 days.",
    fullDesc: "Glow Beauty Co. came to us looking to scale their online presence and drive consistent, profitable sales through paid social. We built a full-funnel Meta advertising strategy spanning awareness, retargeting, and conversion campaigns across Facebook and Instagram. Creative testing, audience segmentation, and continuous optimization led to a 4.2x return on ad spend and a 60% growth in their organic follower base within 90 days.",
    tags: ["Meta Ads", "Instagram", "Creative"],
    img: "/ads-ss/1.jpeg",
    stats: [
      { label: "ROAS", value: "4.2x" },
      { label: "Follower Growth", value: "60%" },
      { label: "Duration", value: "90 days" },
    ],
  },
  {
    title: "UrbanFit Apparel",
    category: "Social Media Portfolio",
    desc: "Designed and managed a content calendar across Instagram & TikTok, driving a 3x increase in organic reach.",
    fullDesc: "UrbanFit Apparel needed a consistent brand voice and visual identity across their social channels. We developed a content calendar covering Instagram and TikTok, mixing product showcases, behind-the-scenes content, and trend-driven reels. The result was a 3x increase in organic reach and a noticeably stronger, more recognizable brand presence.",
    tags: ["Content Strategy", "TikTok", "Instagram"],
    img: "/ads-ss/2.jpeg",
    stats: [
      { label: "Organic Reach", value: "+3x" },
      { label: "Platforms", value: "2" },
      { label: "Content Pieces", value: "120+" },
    ],
  },
  {
    title: "Bloom Cafe",
    category: "Meta Ads",
    desc: "Localized Meta ad campaign targeting nearby customers, resulting in a 38% increase in foot traffic.",
    fullDesc: "Bloom Cafe wanted to drive more local foot traffic and online orders. We ran a hyper-local Meta ad campaign using geo-targeting and dynamic creative tailored to nearby audiences. This resulted in a 38% increase in foot traffic and a measurable lift in online order volume within the first six weeks.",
    tags: ["Meta Ads", "Local Targeting", "Facebook"],
    img: "/ads-ss/3.jpeg",
    stats: [
      { label: "Foot Traffic", value: "+38%" },
      { label: "Radius", value: "5km" },
      { label: "Campaign Length", value: "6 weeks" },
    ],
  },
  {
    title: "TechNest Gadgets",
    category: "Social Media Portfolio",
    desc: "Built brand presence from scratch across Instagram and Facebook with reels and influencer collaborations.",
    fullDesc: "TechNest Gadgets launched with zero social presence. We built their brand from the ground up — visual identity, content pillars, reels strategy, and influencer partnerships across Instagram and Facebook. Within four months they had an engaged community and consistent product launch buzz.",
    tags: ["Branding", "Reels", "Influencer"],
    img: "/ads-ss/4.jpeg",
    stats: [
      { label: "Followers Gained", value: "15K+" },
      { label: "Influencers", value: "12" },
      { label: "Timeline", value: "4 months" },
    ],
  },
  {
    title: "FitZone Gym",
    category: "Meta Ads",
    desc: "Lead-generation ad funnel for gym membership sign-ups, achieving a 45% reduction in cost-per-lead.",
    fullDesc: "FitZone Gym needed a reliable system for filling membership sign-ups. We designed a lead-generation ad funnel on Meta with optimized creative and landing pages, cutting their cost-per-lead by 45% while increasing total lead volume month over month.",
    tags: ["Meta Ads", "Lead Gen", "Conversion"],
    img: "/ads-ss/5.jpeg",
    stats: [
      { label: "Cost Per Lead", value: "-45%" },
      { label: "Leads/Month", value: "300+" },
      { label: "Conversion Rate", value: "12%" },
    ],
  },
  {
    title: "PureSkin Cosmetics",
    category: "Social Media Portfolio",
    desc: "Full social media management including content creation and influencer outreach across 3 platforms.",
    fullDesc: "PureSkin Cosmetics partnered with us for end-to-end social media management — content creation, community engagement, and influencer outreach across Instagram, TikTok, and Facebook. The result was a stronger brand community and steady month-over-month engagement growth.",
    tags: ["Community", "Content", "Strategy"],
    img: "/ads-ss/6.jpeg",
    stats: [
      { label: "Platforms", value: "3" },
      { label: "Engagement", value: "+85%" },
      { label: "Posts/Month", value: "40+" },
    ],
  },
  {
    title: "NovaTech Solutions",
    category: "Meta Ads",
    desc: "B2B lead generation campaign on LinkedIn & Meta, driving 200+ qualified leads in the first quarter.",
    fullDesc: "NovaTech Solutions needed qualified B2B leads for their SaaS product. We built a coordinated lead-gen campaign across LinkedIn and Meta with tailored messaging for each platform's audience, generating over 200 qualified leads in the first quarter alone.",
    tags: ["Meta Ads", "B2B", "Lead Gen"],
    img: "/ads-ss/1.jpeg",
    stats: [
      { label: "Qualified Leads", value: "200+" },
      { label: "Platforms", value: "2" },
      { label: "Quarter", value: "Q1" },
    ],
  },
  {
    title: "Spice Route Restaurant",
    category: "Social Media Portfolio",
    desc: "Food photography and Instagram reels strategy that boosted reservations by 30% in two months.",
    fullDesc: "Spice Route Restaurant wanted their food to do the talking online. We produced professional food photography and a reels-first content strategy for Instagram, which boosted online reservations by 30% within two months of launch.",
    tags: ["Food Photography", "Reels", "Instagram"],
    img: "/ads-ss/2.jpeg",
    stats: [
      { label: "Reservations", value: "+30%" },
      { label: "Reels Produced", value: "25" },
      { label: "Timeline", value: "2 months" },
    ],
  },
  {
    title: "Luxe Interiors",
    category: "Meta Ads",
    desc: "Visual-first Meta ad campaign for a furniture brand, increasing online store conversions by 52%.",
    fullDesc: "Luxe Interiors needed to turn social browsers into online buyers. We ran a visual-first Meta ad campaign showcasing their furniture collections with dynamic product ads, increasing online store conversions by 52% over the campaign period.",
    tags: ["Meta Ads", "E-commerce", "Visual"],
    img: "/ads-ss/3.jpeg",
    stats: [
      { label: "Conversions", value: "+52%" },
      { label: "Ad Sets", value: "8" },
      { label: "ROAS", value: "3.6x" },
    ],
  },
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

  // Lock body scroll + close on Escape when modal is open
  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
        .smp * { box-sizing: border-box; }
        .smp-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        .smp-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .smp-card {
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
        .smp-card:hover { transform: translateY(-3px); box-shadow: 0 12px 28px rgba(191,34,39,0.3); }
        .smp-card-body { padding: 1rem 1.1rem; }
        .smp-card-tag {
          display: inline-block;
          background: rgba(255,255,255,0.18);
          font-size: 0.6rem;
          font-weight: 700;
          padding: 3px 9px;
          border-radius: 4px;
          margin-bottom: 0.55rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .smp-card-body h3 { font-size: 0.88rem; font-weight: 800; margin-bottom: 0.45rem; }
        .smp-card-body p { font-size: 0.74rem; line-height: 1.5; opacity: 0.92; margin-bottom: 0.7rem; }
        .smp-tags { display: flex; flex-wrap: wrap; gap: 5px; }
        .smp-tags span {
          background: rgba(255,255,255,0.15);
          font-size: 0.6rem;
          padding: 3px 7px;
          border-radius: 4px;
          font-weight: 600;
        }
        .smp-card-img-wrap { position: relative; overflow: hidden; }
        .smp-card img { width: 100%; height: 130px; object-fit: fill; object-position: center; display: block; transition: transform 0.3s; }
        .smp-card:hover img { transform: scale(1.06); }
        .smp-card-overlay {
          position: absolute; inset: 0;
          background: rgba(0,0,0,0.35);
          display: flex; align-items: center; justify-content: center;
          opacity: 0; transition: opacity 0.2s;
        }
        .smp-card:hover .smp-card-overlay { opacity: 1; }
        .smp-card-overlay span {
          background: ${WHITE}; color: ${BG_RED};
          font-size: 0.7rem; font-weight: 700;
          padding: 6px 14px; border-radius: 20px;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        /* Pagination */
        .smp-pagination { display: flex; align-items: center; justify-content: center; gap: 8px; margin-top: 3rem; }
        .smp-page-btn {
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
        .smp-page-btn:hover:not(:disabled) { border-color: ${BG_RED}; color: ${BG_RED}; }
        .smp-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
        .smp-page-btn.active { background: ${BG_RED}; border-color: ${BG_RED}; color: ${WHITE}; }
        .smp-page-info { text-align: center; margin-top: 0.8rem; font-size: 0.8rem; color: ${GRAY_TEXT}; }

        /* Collab */
        .smp-collab { background: linear-gradient(135deg, ${BG_RED} 0%, #7a1518 100%); padding: 4rem 0; }
        .smp-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .smp-collab-btn { background: ${WHITE}; color: ${BG_RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); }

        /* ══ MODAL ══ */
        .smp-modal-backdrop {
          position: fixed; inset: 0;
          background: rgba(20,5,5,0.7);
          backdrop-filter: blur(3px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
          animation: smpFadeIn 0.2s ease;
        }
        @keyframes smpFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes smpSlideUp { from { opacity: 0; transform: translateY(20px) scale(0.97); } to { opacity: 1; transform: translateY(0) scale(1); } }

        .smp-modal {
          background: ${WHITE};
          border-radius: 16px;
          max-width: 720px;
          width: 100%;
          max-height: 88vh;
          overflow-y: auto;
          position: relative;
          animation: smpSlideUp 0.25s ease;
        }
        .smp-modal-close {
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
        .smp-modal-close:hover { background: ${BG_RED}; }
        .smp-modal img {
          width: 100%; height: 280px;
          object-fit: fill; object-position: center;
          display: block;
          border-radius: 16px 16px 0 0;
        }
        .smp-modal-body { padding: 1.8rem 2rem 2.2rem; }
        .smp-modal-tag {
          display: inline-block;
          background: ${BG_RED};
          color: ${WHITE};
          font-size: 0.68rem;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 4px;
          margin-bottom: 0.8rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .smp-modal-body h2 { font-size: 1.4rem; font-weight: 900; color: ${DARK}; margin-bottom: 0.9rem; }
        .smp-modal-body p.desc { font-size: 0.9rem; line-height: 1.8; color: ${GRAY_TEXT}; margin-bottom: 1.5rem; }

        .smp-modal-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.8rem;
          margin-bottom: 1.5rem;
          padding: 1rem;
          background: ${LIGHT_BG};
          border-radius: 10px;
        }
        .smp-modal-stats .stat { text-align: center; }
        .smp-modal-stats .stat .val { font-size: 1.2rem; font-weight: 900; color: ${BG_RED}; display: block; }
        .smp-modal-stats .stat .lbl { font-size: 0.68rem; color: ${GRAY_TEXT}; text-transform: uppercase; letter-spacing: 0.5px; }

        .smp-modal-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 1.6rem; }
        .smp-modal-tags span {
          background: #fdeceb; color: ${BG_RED};
          font-size: 0.74rem; font-weight: 700;
          padding: 5px 12px; border-radius: 20px;
        }
        .smp-modal-cta {
          display: inline-block;
          background: ${BG_RED}; color: ${WHITE};
          padding: 0.75rem 1.8rem; border-radius: 6px;
          font-weight: 700; text-decoration: none; font-size: 0.85rem;
          text-transform: uppercase; letter-spacing: 0.5px;
        }

        @media (max-width: 1100px) { .smp-grid { grid-template-columns: repeat(3, 1fr); } }
        @media (max-width: 800px) { .smp-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 500px) {
          .smp-grid { grid-template-columns: 1fr; }
          .smp-collab-inner { flex-direction: column; text-align: center; }
          .smp-modal img { height: 200px; }
          .smp-modal-stats { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

      <div className="smp" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO ══ */}
        <section style={{ background: LIGHT_BG, padding: "4rem 0 3rem" }}>
          <div className="smp-inner">
            <p style={{ color: BG_RED, fontWeight: 700, fontSize: "0.78rem", letterSpacing: 1, textTransform: "uppercase", marginBottom: "0.6rem" }}>
              Learn How We Can Make A Real Impact
            </p>
            <h1 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 900, marginBottom: "1rem", color: DARK }}>
              Social Media Portfolio &amp; <span style={{ color: BG_RED }}>Meta Ads</span>
            </h1>
            <p style={{ color: GRAY_TEXT, fontSize: "0.92rem", maxWidth: 600, lineHeight: 1.8 }}>
              Explore our results-driven social media campaigns and Meta advertising work — from
              brand-building content strategies to high-performing ad funnels that deliver real ROI.
              Click any project to see the full case study.
            </p>
          </div>
        </section>

        {/* ══ PROJECTS GRID ══ */}
        <section style={{ background: WHITE, padding: "4rem 0 3rem" }}>
          <div className="smp-inner">
            <div className="smp-grid">
              {projects.map((p) => (
                <button key={p.title} className="smp-card" onClick={() => setSelected(p)}>
                  <div className="smp-card-img-wrap">
                    <img src={p.img} alt={p.title} />
                    <div className="smp-card-overlay"><span>View Case Study</span></div>
                  </div>
                  <div className="smp-card-body">
                    <span className="smp-card-tag">{p.category}</span>
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                    <div className="smp-tags">
                      {p.tags.map((t) => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Pagination */}
            <div className="smp-pagination">
              <button className="smp-page-btn" onClick={() => goToPage(page - 1)} disabled={page === 1}>‹</button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button key={p} className={`smp-page-btn${p === page ? " active" : ""}`} onClick={() => goToPage(p)}>
                  {p}
                </button>
              ))}
              <button className="smp-page-btn" onClick={() => goToPage(page + 1)} disabled={page === totalPages}>›</button>
            </div>
            <p className="smp-page-info">
              Showing {start + 1}–{Math.min(start + PER_PAGE, allProjects.length)} of {allProjects.length} projects
            </p>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="smp-collab">
          <div className="smp-collab-inner">
            <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
              <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
                Collaboration
              </p>
              <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
                Ready to grow your brand on social?<br />Lets Collaborate &amp; Conquer :
              </h2>
              <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
                Our creative team specializes in building high-performing social media and Meta ad
                campaigns. Let&apos;s craft a strategy that gets results for your brand.
              </p>
            </div>
            <Link href="/contact" className="smp-collab-btn">Contact Us</Link>
          </div>
        </section>

        {/* ══ MODAL ══ */}
        {selected && (
          <div className="smp-modal-backdrop" onClick={() => setSelected(null)}>
            <div className="smp-modal" onClick={(e) => e.stopPropagation()}>
              <button className="smp-modal-close" onClick={() => setSelected(null)} aria-label="Close">✕</button>
              <img src={selected.img} alt={selected.title} />
              <div className="smp-modal-body">
                <span className="smp-modal-tag">{selected.category}</span>
                <h2>{selected.title}</h2>
                <p className="desc">{selected.fullDesc}</p>

                <div className="smp-modal-stats">
                  {selected.stats.map((s) => (
                    <div key={s.label} className="stat">
                      <span className="val">{s.value}</span>
                      <span className="lbl">{s.label}</span>
                    </div>
                  ))}
                </div>

                <div className="smp-modal-tags">
                  {selected.tags.map((t) => <span key={t}>{t}</span>)}
                </div>

                <Link href="/contact-us" className="smp-modal-cta">Start a Similar Project</Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </>
  );
}