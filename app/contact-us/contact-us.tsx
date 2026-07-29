// "use client";

// import React, { useState } from "react";

// const RED = "#c0392b";
// const DARK = "#1a1a2e";
// const WHITE = "#ffffff";
// const GRAY_TEXT = "#666";
// const BORDER = "#e0e0e0";

// export default function ContactPage() {
//   const [formData, setFormData] = useState({
//     name: "", email: "", phone: "", company: "",
//     service: "", budget: "", message: "", file: null as File | null,
//   });
//   const [loading, setLoading] = useState(false);
//   const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

  
//   const handleSubmit = async () => {
//     if (!formData.name || !formData.email || !formData.message) {
//       alert("Please fill in Name, Email and Message fields.");
//       return;
//     }
//     setLoading(true);
//     setStatus("idle");
//     try {
//       const fd = new FormData();
//       fd.append("name",    formData.name);
//       fd.append("email",   formData.email);
//       fd.append("phone",   formData.phone);
//       fd.append("company", formData.company);
//       fd.append("service", formData.service);
//       fd.append("budget",  formData.budget);
//       fd.append("message", formData.message);
//       if (formData.file) {
//         fd.append("file", formData.file);
//       }

//       // No Content-Type header — browser sets multipart/form-data automatically
//       const res = await fetch("/api/contact", {
//         method: "POST",
//         body: fd,
//       });

//       const data = await res.json();
//       if (data.success) {
//         setStatus("success");
//         setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "", file: null });
//       } else {
//         setStatus("error");
//       }
//     } catch {
//       setStatus("error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <style>{`
//         .contact-wrap * { box-sizing: border-box; }
//         .cf-input { width: 100%; border: 1px solid ${BORDER}; border-radius: 6px; padding: 0.7rem 1rem; font-size: 0.88rem; color: ${DARK}; outline: none; transition: border-color 0.2s; background: ${WHITE}; font-family: inherit; }
//         .cf-input:focus { border-color: ${RED}; }
//         .cf-input::placeholder { color: #aaa; }
//         .cf-label { font-size: 0.82rem; font-weight: 600; color: ${DARK}; margin-bottom: 0.35rem; display: block; }
//         .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
//         .form-full { margin-bottom: 1rem; }
//         .loc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-bottom: 1.5rem; }
//         .loc-card { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; padding: 1.5rem; }
//         .social-ring { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid ${BORDER}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: ${DARK}; text-decoration: none; }
//         .social-ring:hover { background: ${RED}; border-color: ${RED}; color: ${WHITE}; }
//         .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 1200px; margin: 0 auto; }
//         .send-btn { width: 100%; background: ${RED}; color: ${WHITE}; border: none; padding: 1rem; border-radius: 6px; font-size: 1rem; font-weight: 800; letter-spacing: 2px; cursor: pointer; transition: opacity 0.2s; text-transform: uppercase; }
//         .send-btn:hover { opacity: 0.88; }
//         @media (max-width: 900px) {
//           .hero-contact-grid { flex-direction: column !important; }
//           .services-grid { grid-template-columns: 1fr; gap: 2rem; }
//           .loc-grid { grid-template-columns: 1fr; }
//         }
//         @media (max-width: 600px) {
//           .form-row { grid-template-columns: 1fr; }
//           .hero-contact-grid { padding: 3rem 5% !important; }
//         }
//       `}</style>

//       <div className="contact-wrap" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

//         {/* ══ HERO + FORM ══ */}
//         <section style={{ background: WHITE, padding: "5rem 6% 4rem" }}>
//           <div className="hero-contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "4rem", alignItems: "flex-start" }}>

//             {/* LEFT */}
//             <div style={{ flex: "1 1 340px", paddingTop: "1rem" }}>
//               <p style={{ color: RED, fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.8rem" }}>Contact us</p>
//               <div style={{ borderLeft: `4px solid ${RED}`, paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
//                 <h1 style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, color: DARK, margin: 0 }}>
//                   Let us help you achieve your dreams. Contact us today!
//                 </h1>
//               </div>
//               <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
//                 We&apos;re dedicated to going above and beyond for you. Enhance your online performance and collaborate with our team, which genuinely supports your objectives and passion. Please get in touch with us. We can be followed on the aforementioned channels.
//               </p>
//               <div style={{ display: "flex", gap: "0.75rem" }}>
//                 <a href="https://www.facebook.com/decasofts" className="social-ring" aria-label="Facebook">
//                   <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
//                 </a>
//                 <a href="https://www.linkedin.com/company/deca-softs" className="social-ring" aria-label="LinkedIn">
//                   <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
//                 </a>
//                 <a href="https://www.instagram.com/dec.asofts/" className="social-ring" aria-label="Instagram">
//                   <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
//                 </a>
//                 <a href="https://www.tiktok.com/@decasoft.digital" className="social-ring" aria-label="TikTok">
//                   <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.84 4.84 0 0 1-1.01-.06z"/></svg>
//                 </a>
//               </div>
//             </div>

//             {/* RIGHT: Form */}
//             <div style={{ flex: "1 1 420px" }}>
//               <div className="form-row">
//                 <div><label className="cf-label">Your Name</label><input className="cf-input" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} /></div>
//                 <div><label className="cf-label">Email</label><input className="cf-input" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} /></div>
//               </div>
//               <div className="form-row">
//                 <div><label className="cf-label">Phone Number</label><input className="cf-input" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} /></div>
//                 <div><label className="cf-label">Company Name</label><input className="cf-input" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} /></div>
//               </div>
//               <div className="form-row">
//                 <div>
//                   <label className="cf-label">Select Your Service</label>
//                   <select className="cf-input" name="service" value={formData.service} onChange={handleChange} style={{ appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.8rem center", paddingRight: "2.2rem" }}>
//                     <option value="">Select</option>
//                     <option>Web Development</option>
//                     <option>Digital Marketing</option>
//                     <option>SEO</option>
//                     <option>E-Commerce</option>
//                     <option>Mobile App</option>
//                     <option>Branding</option>
//                   </select>
//                 </div>
//                 <div>
//                   <label className="cf-label">Select Your Budget</label>
//                   <select className="cf-input" name="budget" value={formData.budget} onChange={handleChange} style={{ appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.8rem center", paddingRight: "2.2rem" }}>
//                     <option value="">Select</option>
//                     <option>$500 - $1,000</option>
//                     <option>$1,000 - $5,000</option>
//                     <option>$5,000 - $10,000</option>
//                     <option>$10,000+</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="form-full">
//                 <label className="cf-label">Message</label>
//                 <textarea className="cf-input" name="message" placeholder="Message" rows={4} value={formData.message} onChange={handleChange} style={{ resize: "vertical", minHeight: 100 }} />
//               </div>
//               <div className="form-full">
//                 <label className="cf-label">File Upload ( txt or pdf )</label>
//                 <input type="file" accept=".txt,.pdf" style={{ fontSize: "0.82rem", color: GRAY_TEXT }}
//                   onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })} />
//               </div>
//               <div style={{ border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.8rem 1rem", marginBottom: "1rem", background: "#f9f9f9", display: "flex", alignItems: "center", gap: "0.6rem" }}>
//                 <input type="checkbox" id="robot" style={{ width: 18, height: 18, accentColor: RED }} />
//                 <label htmlFor="robot" style={{ fontSize: "0.85rem", color: GRAY_TEXT, cursor: "pointer" }}>I&apos;m not a robot</label>
//                 <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" style={{ width: 32, marginLeft: "auto", opacity: 0.6 }}
//                   onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")} />
//               </div>
//               {status === "success" && (
//                 <div style={{ background: "#e8f5e9", border: "1px solid #a5d6a7", borderRadius: 6, padding: "0.8rem 1rem", marginBottom: "1rem", color: "#2e7d32", fontSize: "0.88rem", fontWeight: 600 }}>
//                   ✅ Message sent successfully! We will get back to you soon.
//                 </div>
//               )}
//               {status === "error" && (
//                 <div style={{ background: "#ffebee", border: "1px solid #ef9a9a", borderRadius: 6, padding: "0.8rem 1rem", marginBottom: "1rem", color: "#c62828", fontSize: "0.88rem", fontWeight: 600 }}>
//                   ❌ Something went wrong. Please try again.
//                 </div>
//               )}
//               <button className="send-btn" onClick={handleSubmit} disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
//                 {loading ? "SENDING..." : "SEND"}
//               </button>
//             </div>
//           </div>
//         </section>

//         {/* ══ OUR LOCATIONS ══ */}
//         <section style={{ position: "relative", overflow: "hidden", padding: "5rem 6%", color: WHITE }}>
//           <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80" alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
//           <div style={{ position: "absolute", inset: 0, background: "rgba(140,20,20,0.82)" }} />
//           <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
//             <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, textAlign: "center", marginBottom: "2.5rem" }}>Our Locations</h2>
//             <div className="loc-grid">
//               <div className="loc-card">
//                 <LocationRow type="phone" label="Call Us" value="+923071116562" />
//                 <LocationRow type="email" label="Email" value="info@decasoft.test" />
//                 <LocationRow type="clock" label="Working Hour" value="Monday to Saturday 9 Am to 5 Pm" />
//                 <LocationRow type="location" label="Location" value="Block Z Madina Town, Faisalabad, 38000" />
//               </div>
//               <div className="loc-card">
//                 <LocationRow type="phone" label="Call Us" value="+971 55 9411204" />
//                 <LocationRow type="email" label="Email" value="ceodecasoft@gmail.com" />
//                 <LocationRow type="clock" label="Working Hour" value="Monday to Friday 10 Am to 7 Pm (GMT-4)" />
//                 <LocationRow type="location" label="Location" value="Dubai Municipality Building, Salah Al Din Street, Block A, 2nd floor, Office no 23, Al Muraqabat Deira, Dubai." />
//               </div>
//             </div>
//             <div style={{ borderRadius: 12, overflow: "hidden", width: "100%", height: 320 }}>
//               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d73.0751!3d31.4504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922693f3c000001%3A0x6e9b9b9b9b9b9b9b!2sMadina%20Town%2C%20Faisalabad!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
//                 width="100%" height="320" style={{ border: 0, display: "block" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Locations" />
//             </div>
//           </div>
//         </section>

//         {/* ══ SERVICES ══ */}
//         <section style={{ background: WHITE, padding: "5rem 6%" }}>
//           <div className="services-grid">
//             <div>
//               <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.25, marginBottom: "1.2rem", color: DARK }}>Results-Driven Digital Marketing Services</h2>
//               <p style={{ color: GRAY_TEXT, lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "2rem" }}>
//                 Your brand must have a strong online presence in order to stand out in the competitive online market of today. Our professional digital marketing services are intended to boost conversions, create leads, and increase traffic. We employ data-driven tactics to support the expansion of your company, from digital and social media marketing to PPC advertising and content production. Allow us to use creative and effective marketing solutions to elevate your brand to new heights. Get in touch with us now!
//               </p>
//               <a href="/services" style={{ display: "inline-block", background: RED, color: WHITE, padding: "0.8rem 1.8rem", borderRadius: 6, fontWeight: 700, textDecoration: "none", fontSize: "0.88rem" }}
//                 onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
//                 Explore our Services
//               </a>
//             </div>
//             <div style={{ borderRadius: 12, overflow: "hidden", height: 340 }}>
//               <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team working" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// }

// const PhoneIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>);
// const EmailIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>);
// const ClockIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>);
// const LocationIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>);

// function LocationRow({ type, label, value }: { type: "phone"|"email"|"clock"|"location"; label: string; value: string }) {
//   const icons = { phone: <PhoneIcon />, email: <EmailIcon />, clock: <ClockIcon />, location: <LocationIcon /> };
//   return (
//     <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.85rem" }}>
//       <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icons[type]}</div>
//       <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.92)" }}>
//         <span style={{ fontWeight: 700, color: "#fff", marginRight: "0.5rem" }}>{label}</span>{value}
//       </div>
//     </div>
//   );
// }

"use client";

import React, { useState } from "react";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const BORDER = "#e0e0e0";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "", file: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in Name, Email and Message fields.");
      return;
    }
    setLoading(true);
    setStatus("idle");
    try {
      const fd = new FormData();
      fd.append("name",    formData.name);
      fd.append("email",   formData.email);
      fd.append("phone",   formData.phone);
      fd.append("company", formData.company);
      fd.append("service", formData.service);
      fd.append("budget",  formData.budget);
      fd.append("message", formData.message);
      if (formData.file) {
        fd.append("file", formData.file);
      }

      // No Content-Type header — browser sets multipart/form-data automatically
      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "", file: null });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
        .contact-wrap * { box-sizing: border-box; }
        .cf-input { width: 100%; border: 1px solid ${BORDER}; border-radius: 6px; padding: 0.7rem 1rem; font-size: 0.88rem; color: ${DARK}; outline: none; transition: border-color 0.2s; background: ${WHITE}; font-family: inherit; }
        .cf-input:focus { border-color: ${RED}; }
        .cf-input::placeholder { color: #aaa; }
        .cf-label { font-size: 0.82rem; font-weight: 600; color: ${DARK}; margin-bottom: 0.35rem; display: block; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .form-full { margin-bottom: 1rem; }
        .loc-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; margin-bottom: 1.5rem; }
        .loc-card { background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; padding: 1.5rem; }
        .social-ring { width: 44px; height: 44px; border-radius: 50%; border: 1.5px solid ${BORDER}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: ${DARK}; text-decoration: none; flex-shrink: 0; }
        .social-ring:hover { background: ${RED}; border-color: ${RED}; color: ${WHITE}; }
        .social-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; max-width: 1200px; margin: 0 auto; }
        .services-img { border-radius: 12px; overflow: hidden; height: 340px; }
        .services-img img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .send-btn { width: 100%; background: ${RED}; color: ${WHITE}; border: none; padding: 1rem; border-radius: 6px; font-size: 1rem; font-weight: 800; letter-spacing: 2px; cursor: pointer; transition: opacity 0.2s; text-transform: uppercase; }
        .send-btn:hover { opacity: 0.88; }

        .hero-section { padding: 5rem 6% 4rem; }
        .locations-section { padding: 5rem 6%; }
        .services-section { padding: 5rem 6%; }
        .map-frame-wrap { border-radius: 12px; overflow: hidden; width: 100%; height: 320px; }
        .map-frame-wrap iframe { border: 0; display: block; }

        @media (max-width: 900px) {
          .hero-contact-grid { flex-direction: column !important; gap: 2.5rem !important; }
          .services-grid { grid-template-columns: 1fr; gap: 2rem; }
          .loc-grid { grid-template-columns: 1fr; }
          .services-img { height: 260px; }
        }

        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
          .hero-section { padding: 3rem 5% !important; }
          .locations-section { padding: 3.5rem 5% !important; }
          .services-section { padding: 3.5rem 5% !important; }
          .loc-card { padding: 1.1rem; }
          .map-frame-wrap, .map-frame-wrap iframe { height: 220px; }
          .services-img { height: 220px; }
        }

        @media (max-width: 400px) {
          .social-ring { width: 40px; height: 40px; }
          .send-btn { padding: 0.85rem; font-size: 0.9rem; }
          .loc-card { padding: 0.9rem; }
        }
      `}</style>

      <div className="contact-wrap" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO + FORM ══ */}
        <section className="hero-section" style={{ background: WHITE }}>
          <div className="hero-contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "4rem", alignItems: "flex-start" }}>

            {/* LEFT */}
            <div style={{ flex: "1 1 340px", paddingTop: "1rem" }}>
              <p style={{ color: RED, fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.8rem" }}>Contact us</p>
              <div style={{ borderLeft: `4px solid ${RED}`, paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)", fontWeight: 900, lineHeight: 1.2, color: DARK, margin: 0 }}>
                  Let us help you achieve your dreams. Contact us today!
                </h1>
              </div>
              <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "2rem" }}>
                We&apos;re dedicated to going above and beyond for you. Enhance your online performance and collaborate with our team, which genuinely supports your objectives and passion. Please get in touch with us. We can be followed on the aforementioned channels.
              </p>
              <div className="social-row">
                <a href="https://www.facebook.com/decasofts" className="social-ring" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/deca-softs" className="social-ring" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
                <a href="https://www.instagram.com/dec.asofts/" className="social-ring" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.tiktok.com/@decasoft.digital" className="social-ring" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.84 4.84 0 0 1-1.01-.06z"/></svg>
                </a>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div style={{ flex: "1 1 420px", minWidth: 0 }}>
              <div className="form-row">
                <div><label className="cf-label">Your Name</label><input className="cf-input" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} /></div>
                <div><label className="cf-label">Email</label><input className="cf-input" name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} /></div>
              </div>
              <div className="form-row">
                <div><label className="cf-label">Phone Number</label><input className="cf-input" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} /></div>
                <div><label className="cf-label">Company Name</label><input className="cf-input" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} /></div>
              </div>
              <div className="form-row">
                <div>
                  <label className="cf-label">Select Your Service</label>
                  <select className="cf-input" name="service" value={formData.service} onChange={handleChange} style={{ appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.8rem center", paddingRight: "2.2rem" }}>
                    <option value="">Select</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>SEO</option>
                    <option>E-Commerce</option>
                    <option>Mobile App</option>
                    <option>Branding</option>
                  </select>
                </div>
                <div>
                  <label className="cf-label">Select Your Budget</label>
                  <select className="cf-input" name="budget" value={formData.budget} onChange={handleChange} style={{ appearance: "none", backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.8rem center", paddingRight: "2.2rem" }}>
                    <option value="">Select</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-full">
                <label className="cf-label">Message</label>
                <textarea className="cf-input" name="message" placeholder="Message" rows={4} value={formData.message} onChange={handleChange} style={{ resize: "vertical", minHeight: 100 }} />
              </div>
              <div className="form-full">
                <label className="cf-label">File Upload ( txt or pdf )</label>
                <input type="file" accept=".txt,.pdf" style={{ fontSize: "0.82rem", color: GRAY_TEXT, maxWidth: "100%" }}
                  onChange={(e) => setFormData({ ...formData, file: e.target.files?.[0] || null })} />
              </div>
              <div style={{ border: `1px solid ${BORDER}`, borderRadius: 6, padding: "0.8rem 1rem", marginBottom: "1rem", background: "#f9f9f9", display: "flex", alignItems: "center", gap: "0.6rem", flexWrap: "wrap" }}>
                <input type="checkbox" id="robot" style={{ width: 18, height: 18, accentColor: RED }} />
                <label htmlFor="robot" style={{ fontSize: "0.85rem", color: GRAY_TEXT, cursor: "pointer" }}>I&apos;m not a robot</label>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="reCAPTCHA" style={{ width: 32, marginLeft: "auto", opacity: 0.6 }}
                  onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")} />
              </div>
              {status === "success" && (
                <div style={{ background: "#e8f5e9", border: "1px solid #a5d6a7", borderRadius: 6, padding: "0.8rem 1rem", marginBottom: "1rem", color: "#2e7d32", fontSize: "0.88rem", fontWeight: 600 }}>
                  ✅ Message sent successfully! We will get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div style={{ background: "#ffebee", border: "1px solid #ef9a9a", borderRadius: 6, padding: "0.8rem 1rem", marginBottom: "1rem", color: "#c62828", fontSize: "0.88rem", fontWeight: 600 }}>
                  ❌ Something went wrong. Please try again.
                </div>
              )}
              <button className="send-btn" onClick={handleSubmit} disabled={loading} style={{ opacity: loading ? 0.7 : 1, cursor: loading ? "not-allowed" : "pointer" }}>
                {loading ? "SENDING..." : "SEND"}
              </button>
            </div>
          </div>
        </section>

        {/* ══ OUR LOCATIONS ══ */}
        <section className="locations-section" style={{ position: "relative", overflow: "hidden", color: WHITE }}>
          <img src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80" alt="" aria-hidden style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(140,20,20,0.82)" }} />
          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, textAlign: "center", marginBottom: "2.5rem" }}>Our Locations</h2>
            <div className="loc-grid">
              <div className="loc-card">
                <LocationRow type="phone" label="Call Us" value="+923071116562" />
                <LocationRow type="email" label="Email" value="info@decasoft.test" />
                <LocationRow type="clock" label="Working Hour" value="Monday to Saturday 9 Am to 5 Pm" />
                <LocationRow type="location" label="Location" value="Block Z Madina Town, Faisalabad, 38000" />
              </div>
              <div className="loc-card">
                <LocationRow type="phone" label="Call Us" value="+971 55 9411204" />
                <LocationRow type="email" label="Email" value="ceodecasoft@gmail.com" />
                <LocationRow type="clock" label="Working Hour" value="Monday to Friday 10 Am to 7 Pm (GMT-4)" />
                <LocationRow type="location" label="Location" value="Dubai Municipality Building, Salah Al Din Street, Block A, 2nd floor, Office no 23, Al Muraqabat Deira, Dubai." />
              </div>
            </div>
            <div className="map-frame-wrap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.5!2d73.0751!3d31.4504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922693f3c000001%3A0x6e9b9b9b9b9b9b9b!2sMadina%20Town%2C%20Faisalabad!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%" height="100%" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Office Locations" />
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══ */}
        <section className="services-section" style={{ background: WHITE }}>
          <div className="services-grid">
            <div>
              <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.25, marginBottom: "1.2rem", color: DARK }}>Results-Driven Digital Marketing Services</h2>
              <p style={{ color: GRAY_TEXT, lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "2rem" }}>
                Your brand must have a strong online presence in order to stand out in the competitive online market of today. Our professional digital marketing services are intended to boost conversions, create leads, and increase traffic. We employ data-driven tactics to support the expansion of your company, from digital and social media marketing to PPC advertising and content production. Allow us to use creative and effective marketing solutions to elevate your brand to new heights. Get in touch with us now!
              </p>
              <a href="/services" style={{ display: "inline-block", background: RED, color: WHITE, padding: "0.8rem 1.8rem", borderRadius: 6, fontWeight: 700, textDecoration: "none", fontSize: "0.88rem" }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}>
                Explore our Services
              </a>
            </div>
            <div className="services-img">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team working" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

const PhoneIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>);
const EmailIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>);
const ClockIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>);
const LocationIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="white"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>);

function LocationRow({ type, label, value }: { type: "phone"|"email"|"clock"|"location"; label: string; value: string }) {
  const icons = { phone: <PhoneIcon />, email: <EmailIcon />, clock: <ClockIcon />, location: <LocationIcon /> };
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "0.85rem" }}>
      <div style={{ width: 36, height: 36, borderRadius: 8, background: "rgba(255,255,255,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{icons[type]}</div>
      <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.92)" }}>
        <span style={{ fontWeight: 700, color: "#fff", marginRight: "0.5rem" }}>{label}</span>{value}
      </div>
    </div>
  );
}