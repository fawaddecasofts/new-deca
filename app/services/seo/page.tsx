// "use client";

// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";

// const RED = "#c0392b";
// const DARK = "#1a1a2e";
// const WHITE = "#ffffff";
// const GRAY_TEXT = "#666";
// const LIGHT_BG = "#f9f9f9";
// const BORDER = "#e0e0e0";

// const HERO_IMG    = "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80";
// const SECTION_IMG = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80";
// const REVIEW_IMG  = "/Group-9392.png";

// // ── Icons ──────────────────────────────────────────────────────────
// const IconAnalyze = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
//     <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
//   </svg>
// );
// const IconOnPage = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
//     <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//   </svg>
// );
// const IconOffPage = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
//     <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
//   </svg>
// );
// const IconSearch = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
//     <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
//   </svg>
// );
// const IconBrand = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
//     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//   </svg>
// );
// const IconResponsive = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24" viewBox="0 0 24 24" fill={RED}>
//     <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
//   </svg>
// );

// // ── Counter ────────────────────────────────────────────────────────
// function useCounter(target: number, duration = 2000, start = false) {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     if (!start) return;
//     let startTime: number | null = null;
//     const step = (ts: number) => {
//       if (!startTime) startTime = ts;
//       const p = Math.min((ts - startTime) / duration, 1);
//       setCount(Math.floor(p * target));
//       if (p < 1) requestAnimationFrame(step);
//     };
//     requestAnimationFrame(step);
//   }, [target, duration, start]);
//   return count;
// }

// function CounterItem({ value, suffix, label, started }: { value: number; suffix: string; label: string; started: boolean }) {
//   const count = useCounter(value, 2000, started);
//   return (
//     <div style={{ textAlign: "center" }}>
//       <span style={{ display: "block", fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 800, color: RED, lineHeight: 1 }}>
//         {count}{suffix}
//       </span>
//       <span style={{ display: "block", fontSize: 14, color: GRAY_TEXT, marginTop: 8 }}>{label}</span>
//     </div>
//   );
// }

// // ── Page ───────────────────────────────────────────────────────────
// export default function SEOPage() {
//   const counterRef = useRef<HTMLDivElement>(null);
//   const [counterStarted, setCounterStarted] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) { setCounterStarted(true); obs.disconnect(); } },
//       { threshold: 0.4 }
//     );
//     if (counterRef.current) obs.observe(counterRef.current);
//     return () => obs.disconnect();
//   }, []);

//   const inner: React.CSSProperties = { maxWidth: "80rem", margin: "0 auto", padding: "0 1.5rem" };
//   const col50: React.CSSProperties = { flex: "0 0 calc(50% - 1.5rem)", minWidth: 280 };

//   return (
//     <>
//       <style>{`
//         .seo * { box-sizing: border-box; }

//         /* Feature cards */
//         .seo-features { display: flex; flex-wrap: wrap; gap: 2rem; }
//         .seo-feat-card { flex: 1 1 260px; display: flex; flex-direction: column; gap: 12px; }
//         .seo-feat-card h3 { font-size: 1rem; font-weight: 800; color: ${DARK}; }
//         .seo-feat-card p  { font-size: 0.88rem; line-height: 1.7; color: ${GRAY_TEXT}; }

//         /* Process */
//         .seo-process { display: flex; flex-wrap: wrap; gap: 3rem; align-items: start; }
//         .seo-proc-cards { flex: 2 1 500px; display: flex; flex-wrap: wrap; gap: 1.2rem; }
//         .seo-proc-card { flex: 1 1 140px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.4rem; background: ${WHITE}; }
//         .seo-proc-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: ${DARK}; }
//         .seo-proc-card p  { font-size: 0.82rem; line-height: 1.6; color: ${GRAY_TEXT}; }

//         /* Checklist */
//         .seo-checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 1rem; }
//         .seo-checklist li { font-size: 0.88rem; color: #444; display: flex; align-items: center; gap: 10px; }
//         .seo-checklist li::before { content: "✓"; color: ${RED}; font-weight: 700; font-size: 15px; }

//         /* Testimonials */
//         .seo-testi-grid { display: grid; grid-template-columns: 200px 1fr 1fr 1fr; gap: 1.2rem; align-items: start; }
//         .seo-testi-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.2rem; }
//         .seo-avatar { width: 36px; height: 36px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
//         .seo-stars { color: #f39c12; font-size: 16px; margin: 4px 0 8px; }

//         /* CTA */
//         .seo-cta-banner { background: ${RED}; width: 100%; padding: 3rem 0; }
//         .seo-cta-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
//         .seo-cta-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-decoration: none; transition: all 0.2s; text-transform: uppercase; white-space: nowrap; }
//         .seo-cta-btn:hover { background: ${WHITE}; color: ${RED}; }

//         /* Collab */
//         .seo-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); width: 100%; padding: 4rem 0; }
//         .seo-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }

//         /* Icon box */
//         .seo-icon-box { width: 48px; height: 48px; background: #fff0ee; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

//         @media (max-width: 900px) {
//           .seo-testi-grid { grid-template-columns: 1fr 1fr; }
//         }
//         @media (max-width: 600px) {
//           .seo-testi-grid { grid-template-columns: 1fr; }
//           .seo-cta-inner { flex-direction: column; text-align: center; }
//           .seo-collab-inner { flex-direction: column; }
//         }
//       `}</style>

//       <div className="seo" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

//         {/* ══ HERO — 50/50 ══ */}
//         <section style={{ background: LIGHT_BG, padding: "5rem 0 4rem" }}>
//           <div style={inner}>
//             <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
//               <div style={col50}>
//                 <p style={{ fontSize: "0.72rem", fontWeight: 700, color: RED, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
//                   SEO Services
//                 </p>
//                 <h1 style={{ fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.8rem", color: DARK }}>
//                   Search Engine Optimization
//                 </h1>
//                 <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
//                   A website's visibility to users and the amount of traffic it receives increase with its position on the search results page. Enhancing this visibility is largely dependent on Search Engine Optimization (SEO). Numerous search types, such as image, local, video, academic, news, and industry specific vertical search engines, can be targeted by SEO strategies. SEO helps websites reach the right audience and generate steady organic growth by optimizing their structure and content.
//                 </p>
//                 <Link
//                   href="/contact"
//                   style={{ display: "inline-block", background: "transparent", color: RED, padding: "0.75rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, border: `2px solid ${RED}` }}
//                 >
//                   Book a Free Consultation
//                 </Link>
//               </div>
//               <div style={col50}>
//                 <img
//                   src={HERO_IMG}
//                   alt="Search Engine Optimization"
//                   style={{ width: "100%", borderRadius: 16, objectFit: "cover", maxHeight: 380, display: "block" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ══ FEATURE CARDS ══ */}
//         <section style={{ background: WHITE, padding: "5rem 0" }}>
//           <div style={inner}>
//             <div className="seo-features">
//               {[
//                 {
//                   icon: <IconAnalyze />,
//                   title: "Analyze a web site",
//                   desc: "After a website analysis, we create a detailed plan to improve the website's ability to convey keywords to search engines. Our ultimate objective is to increase our clients' traffic and lead and sales conversion rates.",
//                 },
//                 {
//                   icon: <IconOnPage />,
//                   title: "On-Page Optimization",
//                   desc: "Creating a theme that is consistent with your targeted keywords is the aim of both on-page and off-page optimization. The search engine is not a human; it is a robot. Therefore, in order to teach the robot to display your website when your potential clients search for particular business-related keywords, you must adhere to our tried-and-true method.",
//                 },
//                 {
//                   icon: <IconOffPage />,
//                   title: "Off-Page Optimization",
//                   desc: "By aligning with specific keywords, off-page SEO aims to increase the authority and credibility of your website on the internet. Search engines use algorithms, not human judgment, so it's critical to stick to a tried-and-true approach that conveys relevance and trust. We help search engine bots see your website as a valuable resource by obtaining high-quality backlinks, sharing content, and developing a strong online presence. This increases the visibility of your website when potential customers search for keywords related to your business.",
//                 },
//               ].map((f) => (
//                 <div key={f.title} className="seo-feat-card">
//                   <div className="seo-icon-box">{f.icon}</div>
//                   <h3>{f.title}</h3>
//                   <p>{f.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ══ IMPACT — 50/50 ══ */}
//         <section style={{ background: LIGHT_BG, padding: "4rem 0" }}>
//           <div style={inner}>
//             <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
//               <div style={col50}>
//                 <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 900, color: DARK, marginBottom: "1rem", lineHeight: 1.2 }}>
//                   Web Design Optimized for User Experience
//                 </h2>
//                 <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT, marginBottom: "1.5rem" }}>
//                   <span style={{ color: RED, fontWeight: 600 }}>Decasofts</span> specializes in website design and development in Pakistan, the United Arab Emirates, and Canada. Our area of expertise is search engine optimization, usability, and speed optimization. A smooth, user-friendly experience is also offered on desktop, tablet, and mobile platforms. Visitors will be enticed to provide you with helpful information so that you can satisfy their needs by using Conrads's website optimization tools.
//                 </p>
//                 <h3 style={{ fontSize: "1.1rem", fontWeight: 800, color: DARK, marginBottom: "0.8rem" }}>
//                   Performance Enhancement
//                 </h3>
//                 <p style={{ fontSize: "0.93rem", lineHeight: 1.8, color: GRAY_TEXT }}>
//                   Naturally, making sure your website is operating correctly is essential for your company. Whether your website is generating leads or sales, we use analytics to ensure that it is converting towards your objectives.
//                 </p>
//               </div>
//               <div style={col50}>
//                 <img
//                   src={SECTION_IMG}
//                   alt="Local SEO Optimization"
//                   style={{ width: "100%", borderRadius: 12, objectFit: "cover", maxHeight: 380, display: "block" }}
//                 />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ══ COUNTERS ══ */}
//         <section style={{ background: WHITE, padding: "4rem 0" }} ref={counterRef}>
//           <div style={inner}>
//             <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
//               <CounterItem value={16}  suffix="+" label="Delivered Successful Projects" started={counterStarted} />
//               <CounterItem value={1}   suffix="+"  label="Years of Experience"           started={counterStarted} />
//               <CounterItem value={4}   suffix="+"  label="Team Members"                  started={counterStarted} />
//             </div>
//           </div>
//         </section>

//         {/* ══ PROCESS ══ */}
//         <section style={{ background: LIGHT_BG, padding: "5rem 0" }}>
//           <div style={inner}>
//             <div className="seo-process">
//               <div style={{ flex: "1 1 260px" }}>
//                 <h2 style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)", fontWeight: 900, color: DARK, lineHeight: 1.3, marginBottom: "1rem" }}>
//                   Your website is the most visible and valuable asset of your company.
//                 </h2>
//                 <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT }}>
//                   Decasofts creates thorough SEO roadmaps by coordinating all facets of your online presence, from technical infrastructure to content. Our tactics make sure the right people see your platform when they are looking for your services. In highly competitive markets like Canada, Pakistan, and the United Arab Emirates, this offers you a substantial advantage in SEO and website design and development. We assist you in controlling search engine rankings and gaining a long-term competitive edge.
//                 </p>
//               </div>
//               <div className="seo-proc-cards">
//                 {[
//                   {
//                     icon: <IconSearch />,
//                     title: "Understanding Problems",
//                     desc: "Our process starts with strategy. Our team works with you to determine what the business goals your website is going to support.",
//                   },
//                   {
//                     icon: <IconBrand />,
//                     title: "Brand Identity & UI Design",
//                     desc: "Our team will design a unique user experience which will be aligned with your brand guidelines to maximize results.",
//                   },
//                   {
//                     icon: <IconResponsive />,
//                     title: "Responsive Web Design Toronto",
//                     desc: "We are mobile-first designers. Create a flawless user experience on the devices that your audience will love.",
//                   },
//                 ].map((p) => (
//                   <div key={p.title} className="seo-proc-card">
//                     <div className="seo-icon-box" style={{ marginBottom: 12 }}>{p.icon}</div>
//                     <h4>{p.title}</h4>
//                     <p>{p.desc}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ══ CTA BANNER ══ */}
//         <section className="seo-cta-banner">
//           <div className="seo-cta-inner">
//             <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)", margin: 0, maxWidth: 560 }}>
//               Request A Free Complete Analysis Of Your Website
//             </h2>
//             <Link href="/contact" className="seo-cta-btn">Book a Free Consultation</Link>
//           </div>
//         </section>

//         {/* ══ REVIEW — 50/50 ══ */}
//         <section style={{ background: WHITE, padding: "5rem 0" }}>
//           <div style={inner}>
//             <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem" }}>
//               <div style={col50}>
//                 <img
//                   src={REVIEW_IMG}
//                   alt="Review illustration"
//                   style={{ width: "100%", display: "block" }}
//                   onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
//                 />
//               </div>
//               <div style={col50}>
//                 <h2 style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)", fontWeight: 900, color: DARK, marginBottom: "1rem" }}>
//                   Here is what we will review:
//                 </h2>
//                 <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT, marginBottom: "1rem" }}>
//                   We develop experiences that engage, educate, and convert using a psychology-based approach to platform design. At Decasofts, we transform and link each department and develop roadmaps and platforms that deliver consistent experiences to the right target at the right time. This gives you a competitive advantage in all areas, Website Design and Development in Canada.
//                 </p>
//                 <ul className="seo-checklist">
//                   {["Website Framework", "Website Technology", "Google Optimize Test", "Navigation", "Speed Test", "Security Analysis", "UI/UX Analysis", "Conversion Rate", "Responsiveness"].map((item) => (
//                     <li key={item}>{item}</li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* ══ TESTIMONIALS ══ */}
//         <section style={{ background: LIGHT_BG, padding: "5rem 0" }}>
//           <div style={inner}>
//             <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 900, color: DARK, marginBottom: "2rem" }}>
//               Work Speak For Itself
//             </h2>
//             <div className="seo-testi-grid">
//               <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem", textAlign: "center" }}>
//                 <div style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 4 }}>Decasofts</div>
//                 <div className="seo-stars">★★★★★</div>
//                 <div style={{ fontSize: 12, color: GRAY_TEXT }}>29 Google reviews</div>
//                 <a href="#" style={{ display: "block", marginTop: 14, padding: "8px 14px", border: `1px solid ${BORDER}`, borderRadius: 4, fontSize: 12, textAlign: "center", color: DARK, textDecoration: "none" }}>
//                   Write a review
//                 </a>
//               </div>
//               {[
//                 { name: "Ahmed Hussain",  time: "5 months ago", initial: "A", text: "Excellent experience overall. The team was professional, responsive, and made everything simple and hassle-free. Highly recommended." },
//                 { name: "Alex Hales",     time: "8 months ago", initial: "A", text: "Best Company in Pakistan for Social Media Service… I increased my store sales with Shahzaib's team." },
//                 { name: "OFF PRICE",      time: "6 months ago", initial: "O", text: "Decasoft is a highly professional and reliable digital agency in the Dubai market, delivering exceptional results across multiple platforms." },
//               ].map((t) => (
//                 <div key={t.name} className="seo-testi-card">
//                   <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
//                     <div className="seo-avatar">{t.initial}</div>
//                     <div>
//                       <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{t.name}</div>
//                       <div style={{ fontSize: 12, color: GRAY_TEXT }}>{t.time}</div>
//                     </div>
//                   </div>
//                   <div className="seo-stars">★★★★★</div>
//                   <p style={{ fontSize: 13, lineHeight: 1.6, color: GRAY_TEXT }}>{t.text}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* ══ COLLABORATE ══ */}
//         <section className="seo-collab">
//           <div className="seo-collab-inner">
//             <div style={{ flex: "1 1 340px", maxWidth: 580, color: WHITE }}>
//               <p style={{ fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: 2.5, opacity: 0.8, marginBottom: "0.5rem" }}>
//                 Collaboration
//               </p>
//               <h2 style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem" }}>
//                 Did you get stuck in something?<br />Lets Collaborate &amp; Conquer :
//               </h2>
//               <p style={{ opacity: 0.88, fontSize: "0.88rem", lineHeight: 1.75, maxWidth: 480 }}>
//                 Our creative team specializes in solving all your digital challenges. With the expertise of our UI/UX consultants, we're here to elevate your business and enhance user experiences.
//               </p>
//             </div>
//             <Link
//               href="/contact"
//               style={{ display: "inline-block", background: WHITE, color: RED, padding: "0.85rem 2.4rem", borderRadius: 4, fontWeight: 800, textDecoration: "none", fontSize: "0.9rem", textTransform: "uppercase", letterSpacing: 0.5, flexShrink: 0, boxShadow: "0 4px 20px rgba(0,0,0,0.2)" }}
//             >
//               Contact Us
//             </Link>
//           </div>
//         </section>

//       </div>
//     </>
//   );
// }

//Fix responsive

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const LIGHT_BG = "#f9f9f9";
const BORDER = "#e0e0e0";

const HERO_IMG    = "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80";
const SECTION_IMG = "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80";
const REVIEW_IMG  = "/Group-9392.png";

// ── Icons ──────────────────────────────────────────────────────────
const IconAnalyze = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"/>
  </svg>
);
const IconOnPage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
  </svg>
);
const IconOffPage = () => (
  <svg xmlns="http://www.w3.org/2000/svg" height="26" width="26" viewBox="0 0 24 24" fill={RED}>
    <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
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
export default function SEOPage() {
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
        .seo * { box-sizing: border-box; }
        .seo { overflow-x: hidden; }

        .seo-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        /* Section padding (desktop defaults) */
        .seo-sec-xl { padding: 5rem 0 4rem; }
        .seo-sec-lg { padding: 5rem 0; }
        .seo-sec-md { padding: 4rem 0; }

        /* 50/50 split rows */
        .seo-row-50 { display: flex; flex-wrap: wrap; align-items: center; gap: 3rem; }
        .seo-col50 { flex: 1 1 420px; min-width: 0; }
        .seo-col50 img { max-width: 100%; }

        /* Feature cards */
        .seo-features { display: flex; flex-wrap: wrap; gap: 2rem; }
        .seo-feat-card { flex: 1 1 260px; display: flex; flex-direction: column; gap: 12px; }
        .seo-feat-card h3 { font-size: 1rem; font-weight: 800; color: ${DARK}; }
        .seo-feat-card p  { font-size: 0.88rem; line-height: 1.7; color: ${GRAY_TEXT}; }

        /* Process */
        .seo-process { display: flex; flex-wrap: wrap; gap: 3rem; align-items: start; }
        .seo-proc-intro { flex: 1 1 260px; }
        .seo-proc-cards { flex: 2 1 500px; display: flex; flex-wrap: wrap; gap: 1.2rem; }
        .seo-proc-card { flex: 1 1 220px; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.4rem; background: ${WHITE}; }
        .seo-proc-card h4 { font-size: 0.9rem; font-weight: 800; margin-bottom: 8px; color: ${DARK}; }
        .seo-proc-card p  { font-size: 0.82rem; line-height: 1.6; color: ${GRAY_TEXT}; }

        /* Checklist */
        .seo-checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 10px; margin-top: 1rem; }
        .seo-checklist li { font-size: 0.88rem; color: #444; display: flex; align-items: center; gap: 10px; }
        .seo-checklist li::before { content: "✓"; color: ${RED}; font-weight: 700; font-size: 15px; }

        /* Testimonials */
        .seo-testi-grid { display: grid; grid-template-columns: minmax(160px, 200px) repeat(3, minmax(0, 1fr)); gap: 1.2rem; align-items: start; }
        .seo-testi-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 10px; padding: 1.2rem; min-width: 0; }
        .seo-avatar { width: 36px; height: 36px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; font-size: 14px; font-weight: 700; flex-shrink: 0; }
        .seo-stars { color: #f39c12; font-size: 16px; margin: 4px 0 8px; }

        /* CTA */
        .seo-cta-banner { background: ${RED}; width: 100%; padding: 3rem 0; }
        .seo-cta-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1.5rem; }
        .seo-cta-btn { border: 2px solid ${WHITE}; color: ${WHITE}; background: transparent; padding: 0.8rem 2rem; border-radius: 4px; font-weight: 700; font-size: 0.85rem; letter-spacing: 1px; text-decoration: none; transition: all 0.2s; text-transform: uppercase; white-space: nowrap; text-align: center; }
        .seo-cta-btn:hover { background: ${WHITE}; color: ${RED}; }

        /* Collab */
        .seo-collab { background: linear-gradient(135deg, ${RED} 0%, #8b0000 100%); width: 100%; padding: 4rem 0; }
        .seo-collab-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 2rem; }
        .seo-collab-text { flex: 1 1 340px; max-width: 580px; color: ${WHITE}; }
        .seo-collab-btn { display: inline-block; background: ${WHITE}; color: ${RED}; padding: 0.85rem 2.4rem; border-radius: 4px; font-weight: 800; text-decoration: none; font-size: 0.9rem; text-transform: uppercase; letter-spacing: 0.5px; flex-shrink: 0; box-shadow: 0 4px 20px rgba(0,0,0,0.2); text-align: center; }

        /* Icon box */
        .seo-icon-box { width: 48px; height: 48px; background: #fff0ee; border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }

        /* ── Responsive breakpoints ── */
        @media (max-width: 1024px) {
          .seo-testi-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }

        @media (max-width: 768px) {
          .seo-sec-xl { padding: 3.5rem 0 2.5rem; }
          .seo-sec-lg { padding: 3.5rem 0; }
          .seo-sec-md { padding: 2.75rem 0; }
          .seo-cta-banner { padding: 2.25rem 0; }
          .seo-collab { padding: 2.75rem 0; }
          .seo-row-50 { gap: 2rem; }
          .seo-process { gap: 2rem; }
        }

        @media (max-width: 640px) {
          .seo-inner, .seo-cta-inner, .seo-collab-inner { padding: 0 1.25rem; }
          .seo-testi-grid { grid-template-columns: 1fr; }
          .seo-cta-inner { flex-direction: column; text-align: center; }
          .seo-cta-btn { width: 100%; }
          .seo-collab-inner { flex-direction: column; text-align: center; }
          .seo-collab-btn { width: 100%; }
          .seo-col50 { flex-basis: 100%; }
          .seo-proc-card { flex: 1 1 100%; }
        }

        @media (max-width: 400px) {
          .seo-inner, .seo-cta-inner, .seo-collab-inner { padding: 0 1rem; }
        }
      `}</style>

      <div className="seo" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO — 50/50 ══ */}
        <section className="seo-sec-xl" style={{ background: LIGHT_BG }}>
          <div className="seo-inner">
            <div className="seo-row-50">
              <div className="seo-col50">
                <p style={{ fontSize: "0.72rem", fontWeight: 700, color: RED, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                  SEO Services
                </p>
                <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 2.6rem)", fontWeight: 900, lineHeight: 1.2, marginBottom: "0.8rem", color: DARK }}>
                  Search Engine Optimization
                </h1>
                <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
                  A website's visibility to users and the amount of traffic it receives increase with its position on the search results page. Enhancing this visibility is largely dependent on Search Engine Optimization (SEO). Numerous search types, such as image, local, video, academic, news, and industry specific vertical search engines, can be targeted by SEO strategies. SEO helps websites reach the right audience and generate steady organic growth by optimizing their structure and content.
                </p>
                <Link
                  href="/contact"
                  style={{ display: "inline-block", background: "transparent", color: RED, padding: "0.75rem 2rem", borderRadius: 50, fontWeight: 700, textDecoration: "none", fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: 1, border: `2px solid ${RED}` }}
                >
                  Book a Free Consultation
                </Link>
              </div>
              <div className="seo-col50">
                <img
                  src={HERO_IMG}
                  alt="Search Engine Optimization"
                  style={{ width: "100%", borderRadius: 16, objectFit: "cover", maxHeight: 380, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ FEATURE CARDS ══ */}
        <section className="seo-sec-lg" style={{ background: WHITE }}>
          <div className="seo-inner">
            <div className="seo-features">
              {[
                {
                  icon: <IconAnalyze />,
                  title: "Analyze a web site",
                  desc: "After a website analysis, we create a detailed plan to improve the website's ability to convey keywords to search engines. Our ultimate objective is to increase our clients' traffic and lead and sales conversion rates.",
                },
                {
                  icon: <IconOnPage />,
                  title: "On-Page Optimization",
                  desc: "Creating a theme that is consistent with your targeted keywords is the aim of both on-page and off-page optimization. The search engine is not a human; it is a robot. Therefore, in order to teach the robot to display your website when your potential clients search for particular business-related keywords, you must adhere to our tried-and-true method.",
                },
                {
                  icon: <IconOffPage />,
                  title: "Off-Page Optimization",
                  desc: "By aligning with specific keywords, off-page SEO aims to increase the authority and credibility of your website on the internet. Search engines use algorithms, not human judgment, so it's critical to stick to a tried-and-true approach that conveys relevance and trust. We help search engine bots see your website as a valuable resource by obtaining high-quality backlinks, sharing content, and developing a strong online presence. This increases the visibility of your website when potential customers search for keywords related to your business.",
                },
              ].map((f) => (
                <div key={f.title} className="seo-feat-card">
                  <div className="seo-icon-box">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ IMPACT — 50/50 ══ */}
        <section className="seo-sec-md" style={{ background: LIGHT_BG }}>
          <div className="seo-inner">
            <div className="seo-row-50">
              <div className="seo-col50">
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
              <div className="seo-col50">
                <img
                  src={SECTION_IMG}
                  alt="Local SEO Optimization"
                  style={{ width: "100%", borderRadius: 12, objectFit: "cover", maxHeight: 380, display: "block" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ══ COUNTERS ══ */}
        <section className="seo-sec-md" style={{ background: WHITE }} ref={counterRef}>
          <div className="seo-inner">
            <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: 32 }}>
              <CounterItem value={16} suffix="+" label="Delivered Successful Projects" started={counterStarted} />
              <CounterItem value={1}  suffix="+" label="Years of Experience"           started={counterStarted} />
              <CounterItem value={4}  suffix="+" label="Team Members"                  started={counterStarted} />
            </div>
          </div>
        </section>

        {/* ══ PROCESS ══ */}
        <section className="seo-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="seo-inner">
            <div className="seo-process">
              <div className="seo-proc-intro">
                <h2 style={{ fontSize: "clamp(1.15rem, 3.5vw, 1.6rem)", fontWeight: 900, color: DARK, lineHeight: 1.3, marginBottom: "1rem" }}>
                  Your website is the most visible and valuable asset of your company.
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT }}>
                  Decasofts creates thorough SEO roadmaps by coordinating all facets of your online presence, from technical infrastructure to content. Our tactics make sure the right people see your platform when they are looking for your services. In highly competitive markets like Canada, Pakistan, and the United Arab Emirates, this offers you a substantial advantage in SEO and website design and development. We assist you in controlling search engine rankings and gaining a long-term competitive edge.
                </p>
              </div>
              <div className="seo-proc-cards">
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
                  <div key={p.title} className="seo-proc-card">
                    <div className="seo-icon-box" style={{ marginBottom: 12 }}>{p.icon}</div>
                    <h4>{p.title}</h4>
                    <p>{p.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA BANNER ══ */}
        <section className="seo-cta-banner">
          <div className="seo-cta-inner">
            <h2 style={{ color: WHITE, fontWeight: 800, fontSize: "clamp(1.2rem, 4vw, 1.9rem)", margin: 0, maxWidth: 560 }}>
              Request A Free Complete Analysis Of Your Website
            </h2>
            <Link href="/contact" className="seo-cta-btn">Book a Free Consultation</Link>
          </div>
        </section>

        {/* ══ REVIEW — 50/50 ══ */}
        <section className="seo-sec-lg" style={{ background: WHITE }}>
          <div className="seo-inner">
            <div className="seo-row-50">
              <div className="seo-col50">
                <img
                  src={REVIEW_IMG}
                  alt="Review illustration"
                  style={{ width: "100%", display: "block" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
              </div>
              <div className="seo-col50">
                <h2 style={{ fontSize: "clamp(1.2rem, 3.5vw, 1.7rem)", fontWeight: 900, color: DARK, marginBottom: "1rem" }}>
                  Here is what we will review:
                </h2>
                <p style={{ fontSize: "0.88rem", lineHeight: 1.75, color: GRAY_TEXT, marginBottom: "1rem" }}>
                  We develop experiences that engage, educate, and convert using a psychology-based approach to platform design. At Decasofts, we transform and link each department and develop roadmaps and platforms that deliver consistent experiences to the right target at the right time. This gives you a competitive advantage in all areas, Website Design and Development in Canada.
                </p>
                <ul className="seo-checklist">
                  {["Website Framework", "Website Technology", "Google Optimize Test", "Navigation", "Speed Test", "Security Analysis", "UI/UX Analysis", "Conversion Rate", "Responsiveness"].map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ══ */}
        <section className="seo-sec-lg" style={{ background: LIGHT_BG }}>
          <div className="seo-inner">
            <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 1.9rem)", fontWeight: 900, color: DARK, marginBottom: "2rem" }}>
              Work Speak For Itself
            </h2>
            <div className="seo-testi-grid">
              <div style={{ background: WHITE, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "1.2rem", textAlign: "center" }}>
                <div style={{ fontSize: 18, fontWeight: 800, color: DARK, marginBottom: 4 }}>Decasofts</div>
                <div className="seo-stars">★★★★★</div>
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
                <div key={t.name} className="seo-testi-card">
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                    <div className="seo-avatar">{t.initial}</div>
                    <div>
                      <div style={{ fontSize: 14, fontWeight: 700, color: DARK }}>{t.name}</div>
                      <div style={{ fontSize: 12, color: GRAY_TEXT }}>{t.time}</div>
                    </div>
                  </div>
                  <div className="seo-stars">★★★★★</div>
                  <p style={{ fontSize: 13, lineHeight: 1.6, color: GRAY_TEXT }}>{t.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ COLLABORATE ══ */}
        <section className="seo-collab">
          <div className="seo-collab-inner">
            <div className="seo-collab-text">
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
            <Link href="/contact" className="seo-collab-btn">
              Contact Us
            </Link>
          </div>
        </section>

      </div>
    </>
  );
}