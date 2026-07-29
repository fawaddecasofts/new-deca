"use client";
import { useState } from "react";
import Link from "next/link";

const RED = "#bf2227";
const DARK = "#080809";
const WHITE = "#ffffff";

const courses = [
  {
    n: "01",
    icon: "</>",
    accent: RED,
    title: "Web Development",
    desc: "Kickstart your journey in Web Development — build responsive, modern sites from scratch.",
    tag: "8-Week Course",
    href: "/courses/web-development",
  },
  {
    n: "02",
    icon: "📣",
    accent: "#d4a017",
    title: "Social Media Marketing",
    desc: "Grow your own or your clients' pages and turn followers into paying customers.",
    tag: "6-Week Course",
    href: "/courses/social-media-marketing",
  },
  {
    n: "03",
    icon: "🔍",
    accent: "#2a9d8f",
    title: "SEO (Search Engine Optimization)",
    desc: "Ideal for anyone who wants to rank websites and drive consistent organic traffic.",
    tag: "4-Week Course",
    href: "/courses/seo",
  },
  {
    n: "04",
    icon: "🎨",
    accent: "#7c3aed",
    title: "Graphic Designing",
    desc: "Unlock your creative potential with a complete guide to mastering visual design.",
    tag: "6-Week Course",
    href: "/courses/graphic-designing",
  },
  {
    n: "05",
    icon: "📈",
    accent: "#2563eb",
    title: "Digital Marketing",
    desc: "Unlock the skills to drive online success and grow brands across channels.",
    tag: "8-Week Course",
    href: "/courses/digital-marketing",
  },
  {
    n: "06",
    icon: "🎬",
    accent: "#ea580c",
    title: "Video Editing",
    desc: "Capture your story with professional editing that creates engaging, high-quality visuals.",
    tag: "4-Week Course",
    href: "/courses/video-editing",
  },
];

const reviews = [
  { initials: "AR", name: "Ahmed Raza", role: "Content Creator", stars: 5, date: "Jul 18, 2026", quote: "Web Development course ka pura A to Z seekha. Pehli hi mahine job mil gayi!" },
  { initials: "SI", name: "Sana Iqbal", role: "Page Manager", stars: 5, date: "Jul 15, 2026", quote: "Social Media Marketing se page ke views 10x ho gaye. Trainers bohat helpful the." },
  { initials: "BH", name: "Bilal Hussain", role: "Digital Marketer", stars: 5, date: "Jul 12, 2026", quote: "SEO strategy se organic traffic double ho gaya. Highly recommended." },
  { initials: "HK", name: "Hira Khan", role: "Student", stars: 5, date: "Jul 09, 2026", quote: "Step by step practical sessions the. Ab khud website manage kar leti hun." },
  { initials: "HF", name: "Hareem Fatima", role: "Designer", stars: 5, date: "Jun 15, 2026", quote: "Graphic Designing course se apna freelance business start kiya." },
  { initials: "WA", name: "Wajahat Ali", role: "Educator", stars: 4, date: "Jun 12, 2026", quote: "Apne lectures mein web dev concepts use kar raha hun. Students bohat khush hain." },
  { initials: "MS", name: "Maira Saleem", role: "Content Creator", stars: 5, date: "Jun 09, 2026", quote: "Digital Marketing ke hooks aur captions ne reach badha di." },
  { initials: "SK", name: "Shaheer Khan", role: "Tech Enthusiast", stars: 5, date: "Jun 06, 2026", quote: "Cutting-edge tools ka practical use seekha. 10/10 course." },
];

const faqs = [
  { q: "What courses does DecaSofts offer?", a: "We offer Web Development, Social Media Marketing, SEO, Graphic Designing, Digital Marketing, and Video Editing — all taught by our in-house team who also build real client projects." },
  { q: "Where are the classes held?", a: "Classes are held at our Faisalabad studio, with remote/online options available for students joining from Dubai, Canada, or elsewhere." },
  { q: "Do I need any prior experience to join?", a: "No — every track is designed to take complete beginners from zero to job-ready, with hands-on projects at every stage." },
  { q: "How long is each training program?", a: "Program length varies by track, from 4-Week intensives (SEO, Video Editing) to 8-Week deep-dives (Web Development, Digital Marketing)." },
  { q: "Will I get a certificate after completion?", a: "Yes, every student who completes their course and final project receives a DecaSofts certificate of completion." },
  { q: "What is the fee structure?", a: "Fees vary by course and are billed per program in easy installments. Reach out to our team on WhatsApp or via the contact form for current pricing." },
  { q: "How do I register for a batch?", a: "Pick a course, click Enroll Now, and our team will reach out within hours to confirm your batch and schedule." },
  { q: "Do you offer refunds?", a: "We offer a refund window in the first week of any program if the course isn't the right fit for you — details are shared at enrollment." },
];

export default function Page() {
  // const [openFaq, setOpenFaq] = useState(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  return (
    <>
      <style>{`
        .cp * { box-sizing: border-box; }
        .cp-inner { max-width: 80rem; margin: 0 auto; padding: 0 1.5rem; }

        /* Pill badge — reused across sections */
        .cp-pill {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(191,34,39,0.12);
          border: 1px solid rgba(191,34,39,0.22);
          color: ${RED};
          font-size: 0.72rem; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 7px 16px; border-radius: 50px;
          margin-bottom: 1.2rem;
        }
        .cp-pill--dark { background: rgba(255,255,255,0.07); border-color: rgba(255,255,255,0.18); color: ${WHITE}; }

        /* Hero — dark, Monetix style */
        .cp-hero {
          position: relative;
          background: radial-gradient(ellipse at top, #1a0d0e 0%, ${DARK} 60%);
          padding: 6rem 1.5rem 4.5rem;
          text-align: center;
          overflow: hidden;
        }
        .cp-hero::after {
          content: '';
          position: absolute; inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(191,34,39,0.18) 0%, transparent 55%);
          pointer-events: none;
        }
        .cp-hero-content { position: relative; z-index: 1; max-width: 720px; margin: 0 auto; }
        .cp-hero-content h1 {
          font-size: clamp(2.1rem, 5vw, 3.2rem); font-weight: 900; color: ${WHITE};
          line-height: 1.15; margin: 0 0 1rem;
        }
        .cp-hero-content h1 span { color: ${RED}; }
        .cp-hero-content p {
          font-size: 0.95rem; line-height: 1.8; color: #b8b8c0; max-width: 560px; margin: 0 auto 2rem;
        }

        /* Hero CTAs */
        .cp-hero-ctas {
          position: relative; z-index: 1;
          display: flex; justify-content: center; gap: 0.9rem; flex-wrap: wrap;
        }
        .cp-hero-btn-primary {
          background: ${RED}; color: ${WHITE};
          padding: 0.85rem 2.1rem; border-radius: 50px; font-weight: 700; font-size: 0.85rem;
          text-decoration: none; letter-spacing: 0.3px; transition: opacity 0.2s, transform 0.2s;
          box-shadow: 0 8px 24px rgba(191,34,39,0.35);
        }
        .cp-hero-btn-primary:hover { opacity: 0.9; transform: translateY(-2px); }
        .cp-hero-btn-outline {
          background: transparent; color: ${WHITE};
          border: 1px solid rgba(255,255,255,0.25);
          padding: 0.85rem 2.1rem; border-radius: 50px; font-weight: 700; font-size: 0.85rem;
          text-decoration: none; letter-spacing: 0.3px; transition: background 0.2s, border-color 0.2s;
        }
        .cp-hero-btn-outline:hover { background: rgba(255,255,255,0.06); border-color: rgba(255,255,255,0.4); }

        /* Hero service cards — horizontal scroll, Monetix pattern */
        .cp-hero-cards-wrap {
          position: relative; z-index: 1;
          margin-top: 3.2rem;
        }
        .cp-hero-cards {
          display: flex; gap: 1.2rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          padding: 0.3rem 1.5rem 1rem;
          margin: 0 -1.5rem;
          text-align: left;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,255,255,0.25) transparent;
        }
        .cp-hero-cards::-webkit-scrollbar { height: 6px; }
        .cp-hero-cards::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
        .cp-hero-cards::-webkit-scrollbar-track { background: transparent; }
        .cp-hero-card {
          position: relative;
          flex: 0 0 260px;
          scroll-snap-align: start;
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 16px;
          padding: 1.5rem;
          backdrop-filter: blur(6px);
          transition: background 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .cp-hero-card:hover {
          background: rgba(255,255,255,0.075);
          border-color: rgba(255,255,255,0.16);
          transform: translateY(-4px);
        }
        .cp-hero-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.1rem; }
        .cp-hero-card-icon {
          width: 44px; height: 44px; border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 1.1rem; font-weight: 800; color: ${WHITE};
          flex-shrink: 0;
        }
        .cp-hero-card-num { font-size: 0.72rem; font-weight: 700; color: rgba(255,255,255,0.35); }
        .cp-hero-card h3 { font-size: 1rem; font-weight: 800; color: ${WHITE}; margin: 0 0 6px; line-height: 1.3; }
        .cp-hero-card p { font-size: 0.82rem; color: #a8a8b2; line-height: 1.6; margin: 0 0 1.2rem; }
        .cp-hero-card-footer { display: flex; align-items: center; justify-content: space-between; gap: 8px; }
        .cp-hero-card-tag {
          font-size: 0.68rem; font-weight: 700; color: ${WHITE};
          background: rgba(255,255,255,0.1); padding: 4px 11px; border-radius: 50px; white-space: nowrap;
        }
        .cp-hero-card-link {
          font-size: 0.8rem; font-weight: 700; color: ${WHITE}; text-decoration: none;
          display: inline-flex; align-items: center; gap: 4px; transition: gap 0.2s ease, opacity 0.2s ease;
        }
        .cp-hero-card-link:hover { gap: 7px; opacity: 0.85; }
        .cp-hero-scroll-hint {
          display: flex; align-items: center; justify-content: center; gap: 6px;
          font-size: 0.7rem; color: rgba(255,255,255,0.4); margin-top: 0.6rem;
        }

        @media (max-width: 600px) {
          .cp-hero-card { flex-basis: 230px; }
        }

        /* About section — Monetix pattern: wordmark left, content+stats right */
        .cp-about { background: #f9f9f9; padding: 5.5rem 0; }
        .cp-about-inner {
          display: flex; align-items: center; gap: 3.5rem; flex-wrap: wrap;
        }
        .cp-about-left {
          flex: 1 1 320px;
          display: flex; align-items: center; justify-content: center;
          min-height: 220px;
        }
        .cp-about-wordmark {
          font-size: clamp(3rem, 7vw, 5.5rem);
          font-weight: 900; font-style: italic;
          color: ${DARK}; opacity: 0.08;
          letter-spacing: -2px; line-height: 1; white-space: nowrap;
          font-family: Georgia, 'Times New Roman', serif;
        }
        .cp-about-right { flex: 1 1 420px; }
        .cp-about-right h2 {
          font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 900; color: ${DARK};
          line-height: 1.25; margin: 0 0 1rem;
        }
        .cp-about-right h2 span { color: ${RED}; }
        .cp-about-right p {
          font-size: 0.92rem; color: #666; line-height: 1.8; margin: 0 0 2rem; max-width: 540px;
        }
        .cp-about-stats { display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 2rem; }
        .cp-about-stat {
          background: ${WHITE}; border: 1px solid #ececec; border-radius: 12px;
          padding: 1rem 1.4rem; text-align: center; flex: 1 1 130px; max-width: 160px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        }
        .cp-about-stat strong { display: block; font-size: 1.4rem; font-weight: 900; color: ${DARK}; }
        .cp-about-stat span { font-size: 0.72rem; color: #888; }
        .cp-about-ctas { display: flex; gap: 0.9rem; flex-wrap: wrap; }
        .cp-about-btn-outline {
          display: inline-block; border: 2px solid ${RED}; color: ${RED}; background: transparent;
          padding: 0.75rem 1.9rem; border-radius: 50px; font-weight: 700; text-decoration: none;
          font-size: 0.85rem; transition: all 0.2s;
        }
        .cp-about-btn-outline:hover { background: ${RED}; color: ${WHITE}; }
        .cp-about-btn-solid {
          display: inline-block; background: ${RED}; color: ${WHITE};
          padding: 0.75rem 1.9rem; border-radius: 50px; font-weight: 700; text-decoration: none;
          font-size: 0.85rem; transition: opacity 0.2s;
        }
        .cp-about-btn-solid:hover { opacity: 0.85; }
        @media (max-width: 700px) {
          .cp-about-left { min-height: 120px; order: 2; }
          .cp-about-right { order: 1; }
        }

        /* Reviews — marquee rows, opposite directions, Monetix pattern */
        .cp-reviews { background: #f9f9f9; padding: 0.5rem 0; overflow: hidden; }
        .cp-reviews-head { text-align: center; margin-bottom: 3rem; padding: 0 1.5rem; }
        .cp-reviews-head h2 { font-size: clamp(1.5rem, 2.5vw, 2rem); font-weight: 900; color: ${DARK}; margin: 0 0 0.6rem; }
        .cp-reviews-head p { font-size: 0.9rem; color: #777; }

        .cp-marquee { overflow: hidden; position: relative; margin-bottom: 1.4rem; }
        .cp-marquee::before, .cp-marquee::after {
          content: ''; position: absolute; top: 0; bottom: 0; width: 60px; z-index: 2; pointer-events: none;
        }
        .cp-marquee::before { left: 0; background: linear-gradient(90deg, #f9f9f9 0%, transparent 100%); }
        .cp-marquee::after { right: 0; background: linear-gradient(270deg, #f9f9f9 0%, transparent 100%); }
        .cp-marquee-track {
          display: flex; gap: 1.2rem; width: max-content;
        }
        .cp-marquee-track--left { animation: cpScrollLeft 38s linear infinite; }
        .cp-marquee-track--right { animation: cpScrollRight 38s linear infinite; }
        .cp-marquee:hover .cp-marquee-track { animation-play-state: paused; }

        @keyframes cpScrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes cpScrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .cp-review-card {
          flex: 0 0 320px;
          background: ${WHITE};
          border: 1px solid #ececec;
          border-radius: 14px;
          padding: 1.4rem 1.5rem;
          box-shadow: 0 2px 10px rgba(0,0,0,0.03);
        }
        .cp-review-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.9rem; }
        .cp-review-stars { color: #bf2227; font-size: 0.85rem; letter-spacing: 2px; }
        .cp-review-date { font-size: 0.7rem; color: #999; background: #f3f3f3; padding: 3px 10px; border-radius: 50px; white-space: nowrap; }
        .cp-review-quote { font-size: 0.87rem; color: #444; font-style: italic; line-height: 1.65; margin: 0 0 1.3rem; min-height: 62px; }
        .cp-review-person { display: flex; align-items: center; gap: 10px; }
        .cp-review-avatar {
          width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
          background: ${DARK}; color: ${WHITE}; font-size: 0.75rem; font-weight: 800;
          display: flex; align-items: center; justify-content: center;
        }
        .cp-review-person h4 { font-size: 0.85rem; font-weight: 800; color: ${DARK}; margin: 0; }
        .cp-review-person span { font-size: 0.75rem; color: #888; }

        .cp-reviews-ctas { display: flex; justify-content: center; gap: 0.9rem; flex-wrap: wrap; margin-top: 1rem; }

        /* FAQ — accordion, Monetix pattern */
        .cp-faq { background: ${WHITE}; padding: 5.5rem 0; }
        .cp-faq-head { text-align: center; margin-bottom: 2.8rem; }
        .cp-faq-head h2 { font-size: clamp(1.6rem, 3vw, 2.3rem); font-weight: 900; color: ${DARK}; margin: 0 0 0.6rem; }
        .cp-faq-head h2 span { color: #bf2227; }
        .cp-faq-head p { font-size: 0.9rem; color: #777; }
        .cp-faq-list { max-width: 760px; margin: 0 auto; display: flex; flex-direction: column; gap: 0.9rem; }
        .cp-faq-item {
          border: 1px solid #e5e5e5; border-radius: 12px; overflow: hidden;
          transition: border-color 0.2s ease;
        }
        .cp-faq-item[data-open="true"] { border-color: ${DARK}; }
        .cp-faq-q {
          width: 100%; background: none; border: none; cursor: pointer;
          display: flex; align-items: center; justify-content: space-between; gap: 1rem;
          padding: 1.1rem 1.4rem; text-align: left;
          font-size: 0.92rem; font-weight: 700; color: ${DARK}; font-family: inherit;
        }
        .cp-faq-chevron { flex-shrink: 0; transition: transform 0.25s ease; color: ${DARK}; }
        .cp-faq-item[data-open="true"] .cp-faq-chevron { transform: rotate(180deg); }
        .cp-faq-a-wrap { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.25s ease; }
        .cp-faq-item[data-open="true"] .cp-faq-a-wrap { grid-template-rows: 1fr; }
        .cp-faq-a-inner { overflow: hidden; }
        .cp-faq-a { padding: 0 1.4rem 1.2rem; font-size: 0.85rem; color: #666; line-height: 1.75; margin: 0; }
      `}</style>

      <div className="cp" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO — dark, pill badge, scrollable course cards ══ */}
        <section className="cp-hero">
          <div className="cp-hero-content">
            <span className="cp-pill cp-pill--dark">Explore Our Tracks</span>
            <h1>Courses That <span>Build</span> Careers.</h1>
            <p>
              At <strong style={{ color: WHITE }}>DecaSofts</strong>, we provide industry-focused courses in technology, development, and digital
              innovation. Whether you&apos;re a beginner or a pro, our expert-led training offers hands-on learning
              with real-world applications.
            </p>
            <div className="cp-hero-ctas">
              <Link href="/contact-us" className="cp-hero-btn-primary">Enroll Now</Link>
              <Link href="/contact-us" className="cp-hero-btn-outline">Talk to Us</Link>
            </div>
          </div>

          <div className="cp-hero-cards-wrap">
            <div className="cp-hero-cards">
              {courses.map((c) => (
                <Link key={c.title} href={c.href} className="cp-hero-card" style={{ textDecoration: "none", display: "block" }}>
                  <div className="cp-hero-card-top">
                    <div className="cp-hero-card-icon" style={{ background: c.accent }}>{c.icon}</div>
                    <span className="cp-hero-card-num">{c.n}</span>
                  </div>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <div className="cp-hero-card-footer">
                    <span className="cp-hero-card-tag">{c.tag}</span>
                    <span className="cp-hero-card-link">View →</span>
                  </div>
                </Link>
              ))}
            </div>
            <div className="cp-hero-scroll-hint">← swipe to see all courses →</div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section className="cp-about">
          <div className="cp-inner cp-about-inner">
            <div className="cp-about-left">
              <span className="cp-about-wordmark">DecaSoft</span>
            </div>
            <div className="cp-about-right">
              <span className="cp-pill">About DecaSoft</span>
              <h2>Building career-ready <span>digital talent</span> through practical training.</h2>
              <p>
                DecaSofts is a digital agency and training studio helping students, freelancers and
                business owners turn modern digital skills into real careers — through hands-on
                courses in web development, marketing, design, and content creation, taught by
                the same team that builds real client projects.
              </p>
              <div className="cp-about-stats">
                <div className="cp-about-stat">
                  <strong>6</strong>
                  <span>Course Tracks</span>
                </div>
                <div className="cp-about-stat">
                  <strong>100%</strong>
                  <span>Hands-On</span>
                </div>
                <div className="cp-about-stat">
                  <strong>3</strong>
                  <span>Global Offices</span>
                </div>
              </div>
              <div className="cp-about-ctas">
                <Link href="/contact-us" className="cp-about-btn-solid">Enroll Now →</Link>
                <Link href="/contact" className="cp-about-btn-outline">Contact Us</Link>
              </div>
            </div>
          </div>
        </section>

        {/* ══ REVIEWS — marquee, row 1 scrolls left, row 2 scrolls right ══ */}
        <section className="cp-reviews">
          <div className="cp-reviews-head">
            <span className="cp-pill">Student Reviews</span>
            <h2>Reviews From Students</h2>
            <p>Real feedback from students who completed our DecaSofts training programs.</p>
          </div>

          <div className="cp-marquee">
            <div className="cp-marquee-track cp-marquee-track--left">
              {[...reviews, ...reviews].map((r, i) => (
                <div key={`${r.name}-a-${i}`} className="cp-review-card">
                  <div className="cp-review-top">
                    <span className="cp-review-stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</span>
                    <span className="cp-review-date">{r.date}</span>
                  </div>
                  <p className="cp-review-quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="cp-review-person">
                    <div className="cp-review-avatar">{r.initials}</div>
                    <div>
                      <h4>{r.name}</h4>
                      <span>{r.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cp-marquee">
            <div className="cp-marquee-track cp-marquee-track--right">
              {[...reviews.slice().reverse(), ...reviews.slice().reverse()].map((r, i) => (
                <div key={`${r.name}-b-${i}`} className="cp-review-card">
                  <div className="cp-review-top">
                    <span className="cp-review-stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</span>
                    <span className="cp-review-date">{r.date}</span>
                  </div>
                  <p className="cp-review-quote">&ldquo;{r.quote}&rdquo;</p>
                  <div className="cp-review-person">
                    <div className="cp-review-avatar">{r.initials}</div>
                    <div>
                      <h4>{r.name}</h4>
                      <span>{r.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cp-reviews-ctas">
            <Link href="/reviews" className="cp-about-btn-outline">View All Reviews →</Link>
            <Link href="/contact-us" className="cp-about-btn-solid">Write a Review ★</Link>
          </div>
        </section>

        {/* ══ FAQ ══ */}
        <section className="cp-faq">
          <div className="cp-inner">
            <div className="cp-faq-head">
              <h2>Frequently Asked <span>Questions</span></h2>
              <p>Everything you need to know about DecaSofts training.</p>
            </div>
            <div className="cp-faq-list">
              {faqs.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={f.q} className="cp-faq-item" data-open={isOpen}>
                    <button
                      type="button"
                      className="cp-faq-q"
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      aria-expanded={isOpen}
                    >
                      <span>{f.q}</span>
                      <svg className="cp-faq-chevron" width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                    <div className="cp-faq-a-wrap">
                      <div className="cp-faq-a-inner">
                        <p className="cp-faq-a">{f.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}