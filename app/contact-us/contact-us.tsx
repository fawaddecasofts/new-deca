"use client";

import React, { useState, useRef, useEffect } from "react";

const RED = "#bf2227";
const DARK = "#0b0b12";
const WHITE = "#ffffff";
const GRAY_TEXT = "#6b6b6b";
const BORDER = "#e4e4e4";
const LIGHT_BG = "#f7f7f8";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", company: "",
    service: "", budget: "", message: "", file: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [fileName, setFileName] = useState("");
  const mapRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initMap = () => {
      const L = (window as any).L;
      if (!L || !mapRef.current || mapInstanceRef.current) return;

      // Keep attribution required by OpenStreetMap/Esri license, but shrink it
      // into a tiny, unobtrusive corner instead of removing it entirely.
      const map = L.map(mapRef.current, {
        scrollWheelZoom: false,
        attributionControl: false,
      }).setView([28, 64], 4);

      L.control.attribution({ prefix: false, position: "bottomright" }).addTo(map);

      // --- Base layers ---
      // Esri World Imagery = satellite view (default)
      const satelliteLayer = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { attribution: "Tiles &copy; Esri", maxZoom: 18 }
      );

      // Esri reference layer adds place-name labels (in English) on top of satellite imagery
      const satelliteLabels = L.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/Reference/World_Boundaries_and_Places/MapServer/tile/{z}/{y}/{x}",
        { attribution: "", maxZoom: 18 }
      );

      const satelliteGroup = L.layerGroup([satelliteLayer, satelliteLabels]);

      // CartoDB Voyager = street/street-labels view, rendered with English place names
      const streetLayer = L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png",
        { attribution: "&copy; OpenStreetMap &copy; CARTO", maxZoom: 20, subdomains: "abcd" }
      );

      // Default to satellite view
      satelliteGroup.addTo(map);

      L.control
        .layers(
          { Satellite: satelliteGroup, Streets: streetLayer },
          {},
          { position: "topright" }
        )
        .addTo(map);

      L.marker([25.2048, 55.2708]).addTo(map).bindPopup("UAE Office");
      L.marker([31.4504, 73.0751]).addTo(map).bindPopup("Pakistan Office");

      mapInstanceRef.current = map;
    };

    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    if ((window as any).L) {
      initMap();
    } else {
      let script = document.getElementById("leaflet-js") as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = "leaflet-js";
        script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
        document.body.appendChild(script);
      }
      script.addEventListener("load", initMap);
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

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
      fd.append("name", formData.name);
      fd.append("email", formData.email);
      fd.append("phone", formData.phone);
      fd.append("company", formData.company);
      fd.append("service", formData.service);
      fd.append("budget", formData.budget);
      fd.append("message", formData.message);
      if (formData.file) {
        fd.append("file", formData.file);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "", file: null });
        setFileName("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const selectArrow = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23666' stroke-width='2'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`;

  return (
    <>
      <style>{`
        .contact-wrap * { box-sizing: border-box; }
        .cf-input { width: 100%; border: 1px solid ${BORDER}; border-radius: 8px; padding: 0.85rem 1rem 0.85rem 2.6rem; font-size: 0.88rem; color: ${DARK}; outline: none; transition: border-color 0.2s; background: ${WHITE}; font-family: inherit; }
        .cf-input:focus { border-color: ${RED}; }
        .cf-input::placeholder { color: #999; }
        .cf-field { position: relative; }
        .cf-icon { position: absolute; left: 0.9rem; top: 1rem; color: #999; pointer-events: none; }
        .cf-textarea-icon { top: 1rem; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1rem; }
        .form-full { margin-bottom: 1rem; }

        .contact-card { border: 1px solid ${BORDER}; border-radius: 12px; padding: 1.4rem; margin-bottom: 1.5rem; }
        .contact-row { display: flex; align-items: center; gap: 0.8rem; padding: 0.8rem 0; border-bottom: 1px solid ${BORDER}; }
        .contact-row:last-child { border-bottom: none; }
        .flag-box { width: 34px; height: 24px; border-radius: 4px; overflow: hidden; flex-shrink: 0; display: flex; align-items: center; justify-content: center; background: #eee; }
        .flag-box img { width: 100%; height: 100%; object-fit: cover; display: block; }
        .call-btn { width: 40px; height: 40px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; flex-shrink: 0; margin-left: auto; text-decoration: none; }
        .call-btn:hover { opacity: 0.88; }

        .social-ring { width: 42px; height: 42px; border-radius: 50%; border: 1.5px solid ${BORDER}; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: all 0.2s; color: ${DARK}; text-decoration: none; flex-shrink: 0; }
        .social-ring:hover { background: ${RED}; border-color: ${RED}; color: ${WHITE}; }
        .social-row { display: flex; gap: 0.75rem; flex-wrap: wrap; }

        .upload-box { border: 1px dashed ${BORDER}; border-radius: 8px; padding: 1rem 1.1rem; display: flex; align-items: center; gap: 0.9rem; cursor: pointer; background: ${WHITE}; }
        .upload-box input { display: none; }

        .send-btn { width: 100%; background: ${RED}; color: ${WHITE}; border: none; padding: 1rem; border-radius: 8px; font-size: 0.92rem; font-weight: 800; letter-spacing: 1.5px; cursor: pointer; transition: opacity 0.2s; text-transform: uppercase; }
        .send-btn:hover { opacity: 0.9; }

        .loc-grid { display: grid; grid-template-columns: 1fr 1fr 1.4fr; gap: 1.2rem; align-items: stretch; }
        .loc-office-card { background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 12px; padding: 1.4rem; }
        .loc-detail-row { display: flex; align-items: flex-start; gap: 0.6rem; margin-bottom: 0.7rem; font-size: 0.85rem; color: ${GRAY_TEXT}; line-height: 1.5; }
        .loc-detail-row svg { flex-shrink: 0; margin-top: 0.15rem; color: ${RED}; }
        .view-map-btn { display: inline-flex; align-items: center; gap: 0.4rem; background: rgba(191,34,39,0.08); color: ${RED}; border: none; padding: 0.6rem 1rem; border-radius: 6px; font-weight: 700; font-size: 0.82rem; cursor: pointer; text-decoration: none; margin-top: 0.5rem; }
        .view-map-btn:hover { background: rgba(191,34,39,0.15); }
        .map-frame-wrap { border-radius: 12px; overflow: hidden; width: 100%; height: 100%; min-height: 260px; position: relative; }
        .map-frame-wrap img { border: 0; display: block; width: 100%; height: 100%; }

        /* Shrink the required map attribution into a tiny, low-key corner mark */
        .map-frame-wrap .leaflet-control-attribution {
          font-size: 8px;
          padding: 0 3px;
          background: rgba(255,255,255,0.55);
          line-height: 1.2;
          opacity: 0.6;
        }
        .map-frame-wrap .leaflet-control-attribution a { color: #888; }
        .map-frame-wrap .leaflet-control-layers {
          font-size: 0.78rem;
          border-radius: 6px;
          overflow: hidden;
        }

        .services-card { max-width: 1200px; margin: 0 auto; background: ${WHITE}; border: 1px solid ${BORDER}; border-radius: 20px; padding: 2.2rem; box-shadow: 0 10px 30px rgba(0,0,0,0.04); }
        .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .services-img { border-radius: 12px; overflow: hidden; height: 340px; }
        .services-img img { width: 100%; height: 100%; object-fit: cover; display: block; }

        .services-text { padding-right: 100px; }
        .support-badge { position: absolute; top: -46px; right: -10px; width: 90px; height: 90px; }
        .support-badge-chat { position: absolute; top: -6px; right: -6px; width: 24px; height: 24px; border-radius: 50%; background: ${RED}; color: ${WHITE}; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 6px rgba(0,0,0,0.15); }

        .hero-section { padding: 5rem 6% 4rem; }
        .locations-section { padding: 5rem 6%; }
        .services-section { padding: 5rem 6%; }

        @media (max-width: 900px) {
          .hero-contact-grid { flex-direction: column !important; gap: 2.5rem !important; }
          .services-grid { grid-template-columns: 1fr; gap: 2rem; }
          .loc-grid { grid-template-columns: 1fr; }
          .services-img { height: 260px; }
          .services-text { padding-right: 0; }
          .support-badge { position: static; margin-bottom: 1.2rem; }
        }

        @media (max-width: 600px) {
          .form-row { grid-template-columns: 1fr; }
          .hero-section { padding: 3rem 5% !important; }
          .locations-section { padding: 3.5rem 5% !important; }
          .services-section { padding: 3.5rem 5% !important; }
          .loc-office-card { padding: 1.1rem; }
          .map-frame-wrap { min-height: 220px; }
          .services-img { height: 220px; }
          .services-card { padding: 1.2rem; border-radius: 14px; }
        }

        @media (max-width: 400px) {
          .social-ring { width: 38px; height: 38px; }
          .send-btn { padding: 0.85rem; font-size: 0.85rem; }
        }
      `}</style>

      <div className="contact-wrap" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", color: DARK }}>

        {/* ══ HERO + FORM ══ */}
        <section className="hero-section" style={{ background: WHITE }}>
          <div className="hero-contact-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: "4rem", alignItems: "flex-start" }}>

            {/* LEFT */}
            <div style={{ flex: "1 1 340px", paddingTop: "0.5rem" }}>
              <p style={{ color: RED, fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.8rem" }}>Contact us</p>
              <div style={{ borderLeft: `4px solid ${RED}`, paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
                <h1 style={{ fontSize: "clamp(1.8rem, 2.8vw, 2.5rem)", fontWeight: 900, lineHeight: 1.2, color: DARK, margin: 0 }}>
                  Let us help you achieve your dream project
                </h1>
              </div>
              <p style={{ color: GRAY_TEXT, lineHeight: 1.8, fontSize: "0.93rem", marginBottom: "1.8rem" }}>
                Have a project in mind or a question for our team? Fill out the form, and we&apos;ll get back to you as soon as possible.
              </p>

              <div className="contact-card">
                <p style={{ fontWeight: 800, fontSize: "0.92rem", marginBottom: "0.8rem" }}>Contact Details</p>

                <div className="contact-row">
                  <div className="flag-box"><img src="https://flagcdn.com/w80/ae.png" alt="UAE flag" /></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.86rem" }}>UAE</div>
                    <a href="tel:+971559411204" style={{ color: RED, fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}>+971 55 941 1204</a>
                    <div style={{ color: GRAY_TEXT, fontSize: "0.8rem" }}>marketing@decasofts.com</div>
                  </div>
                  <a href="tel:+971559411204" className="call-btn" aria-label="Call UAE office">
                    <PhoneIcon />
                  </a>
                </div>

                <div className="contact-row">
                  <div className="flag-box"><img src="https://flagcdn.com/w80/pk.png" alt="Pakistan flag" /></div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: "0.86rem" }}>Pakistan</div>
                    <a href="tel:+923071116562" style={{ color: RED, fontWeight: 700, fontSize: "0.85rem", textDecoration: "none" }}>+92 307 111 6562</a>
                    <div style={{ color: GRAY_TEXT, fontSize: "0.8rem" }}>info@decasoft.test</div>
                  </div>
                  <a href="tel:+923071116562" className="call-btn" aria-label="Call Pakistan office">
                    <PhoneIcon />
                  </a>
                </div>
              </div>

              <p style={{ fontWeight: 800, fontSize: "0.88rem", marginBottom: "0.8rem" }}>Follow Us</p>
              <div className="social-row">
                <a href="https://www.facebook.com/decasofts" className="social-ring" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="https://www.tiktok.com/@decasoft.digital" className="social-ring" aria-label="TikTok">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.84 4.84 0 0 1-1.01-.06z"/></svg>
                </a>
                <a href="https://www.instagram.com/dec.asofts/" className="social-ring" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/deca-softs" className="social-ring" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
                </a>
              </div>
            </div>

            {/* RIGHT: Form */}
            <div style={{ flex: "1 1 460px", minWidth: 0, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "2rem" }}>
              <div className="form-row">
                <div className="cf-field">
                  <span className="cf-icon"><UserIcon /></span>
                  <input className="cf-input" name="name" placeholder="Your Name *" value={formData.name} onChange={handleChange} />
                </div>
                <div className="cf-field">
                  <span className="cf-icon"><MailIcon /></span>
                  <input className="cf-input" name="email" type="email" placeholder="Your Email *" value={formData.email} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="cf-field">
                  <span className="cf-icon"><PhoneIconGray /></span>
                  <input className="cf-input" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="cf-field">
                  <span className="cf-icon"><BuildingIcon /></span>
                  <input className="cf-input" name="company" placeholder="Company Name" value={formData.company} onChange={handleChange} />
                </div>
              </div>
              <div className="form-row">
                <div className="cf-field">
                  <span className="cf-icon"><ServiceIcon /></span>
                  <select className="cf-input" name="service" value={formData.service} onChange={handleChange}
                    style={{ appearance: "none", backgroundImage: selectArrow, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.8rem center", color: formData.service ? DARK : "#999" }}>
                    <option value="">Select Service</option>
                    <option>Web Development</option>
                    <option>Digital Marketing</option>
                    <option>SEO</option>
                    <option>E-Commerce</option>
                    <option>Mobile App</option>
                    <option>Branding</option>
                  </select>
                </div>
                <div className="cf-field">
                  <span className="cf-icon"><BudgetIcon /></span>
                  <select className="cf-input" name="budget" value={formData.budget} onChange={handleChange}
                    style={{ appearance: "none", backgroundImage: selectArrow, backgroundRepeat: "no-repeat", backgroundPosition: "right 0.8rem center", color: formData.budget ? DARK : "#999" }}>
                    <option value="">Budget Range</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $5,000</option>
                    <option>$5,000 - $10,000</option>
                    <option>$10,000+</option>
                  </select>
                </div>
              </div>
              <div className="form-full cf-field">
                <span className="cf-icon cf-textarea-icon"><EditIcon /></span>
                <textarea className="cf-input" name="message" placeholder="Your Message *" rows={4} value={formData.message} onChange={handleChange} style={{ resize: "vertical", minHeight: 110 }} />
              </div>

              <div className="form-full">
                <label className="upload-box">
                  <span style={{ color: "#999" }}><PaperclipIcon /></span>
                  <span>
                    <span style={{ display: "block", fontWeight: 600, fontSize: "0.86rem", color: DARK }}>
                      {fileName || "Upload File (Optional)"}
                    </span>
                    <span style={{ fontSize: "0.76rem", color: GRAY_TEXT }}>PDF, DOC, JPG or PNG (Max. 5MB)</span>
                  </span>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                    onChange={(e) => {
                      const f = e.target.files?.[0] || null;
                      setFormData({ ...formData, file: f });
                      setFileName(f ? f.name : "");
                    }}
                  />
                </label>
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
                {loading ? "SENDING..." : "SEND MESSAGE"}
              </button>
            </div>
          </div>
        </section>

        {/* ══ OUR LOCATIONS ══ */}
        <section className="locations-section" style={{ background: LIGHT_BG }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <h2 style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 800, color: DARK, marginBottom: "0.6rem" }}>Our Locations</h2>
              <div style={{ width: 50, height: 3, background: RED, margin: "0 auto" }} />
            </div>

            <div className="loc-grid">
              <div className="loc-office-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                  <div className="flag-box"><img src="https://flagcdn.com/w80/ae.png" alt="UAE flag" /></div>
                  <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>UAE Office</span>
                </div>
                <div className="loc-detail-row"><LocationIcon /><span>Dubai Municipality Building, Salah Al Din Street, Block A, 2nd floor, Office no 23, Al Muraqabat, Deira, Dubai</span></div>
                <div className="loc-detail-row"><PhoneIconGray /><span>+971 55 941 1204</span></div>
                <div className="loc-detail-row"><MailIcon /><span>marketing@decasofts.com</span></div>
                <a
                  className="view-map-btn"
                  href="https://www.google.com/maps/search/?api=1&query=Dubai+Municipality+Building+Salah+Al+Din+Street+Deira+Dubai"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map <LocationIcon />
                </a>
              </div>

              <div className="loc-office-card">
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1rem" }}>
                  <div className="flag-box"><img src="https://flagcdn.com/w80/pk.png" alt="Pakistan flag" /></div>
                  <span style={{ fontWeight: 800, fontSize: "0.95rem" }}>Pakistan Office</span>
                </div>
                <div className="loc-detail-row"><LocationIcon /><span>Block Z, Madina Town, Faisalabad, 38000, Punjab, Pakistan</span></div>
                <div className="loc-detail-row"><PhoneIconGray /><span>+92 307 111 6562</span></div>
                <div className="loc-detail-row"><MailIcon /><span>info@decasoft.test</span></div>
                <a
                  className="view-map-btn"
                  href="https://www.google.com/maps/search/?api=1&query=Madina+Town+Faisalabad+Pakistan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Map <LocationIcon />
                </a>
              </div>

              <div className="map-frame-wrap">
                <div ref={mapRef} style={{ width: "100%", height: "100%", minHeight: 260, zIndex: "1" }} />
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES CTA ══ */}
        <section className="services-section" style={{ background: LIGHT_BG }}>
          <div className="services-card">
            <div className="services-grid">
              <div className="services-img">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team analyzing business data" />
              </div>
              <div className="services-text" style={{ position: "relative" }}>
                <p style={{ color: RED, fontWeight: 700, fontSize: "0.82rem", marginBottom: "0.6rem" }}>Our Services</p>
                <h2 style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 800, lineHeight: 1.25, marginBottom: "1rem", color: DARK }}>
                  We provide the best service for your business
                </h2>
                <p style={{ color: GRAY_TEXT, lineHeight: 1.85, fontSize: "0.93rem", marginBottom: "1.8rem" }}>
                  From web development to digital marketing, we offer a complete range of services to help your business grow.
                </p>
                <a href="/services" className="send-btn" style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem", width: "auto", padding: "0.85rem 1.6rem", textDecoration: "none" }}>
                  EXPLORE SERVICES <ArrowIcon />
                </a>

                <div className="support-badge">
                  <svg viewBox="0 0 100 100" width="100" height="100">
                    <circle cx="50" cy="50" r="46" fill="none" stroke={RED} strokeWidth="1.5" strokeDasharray="4 4" />
                    <g stroke={RED} strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="50" cy="42" r="11" />
                      <path d="M32 72c0-11 8-18 18-18s18 7 18 18" />
                      <path d="M30 46a20 20 0 0 1 40 0" />
                      <path d="M30 46v9a4 4 0 0 0 4 4h1a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3h-5z" />
                      <path d="M70 46v9a4 4 0 0 1-4 4h-1a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h5z" />
                      <path d="M62 55v3a6 6 0 0 1-6 6h-2" />
                    </g>
                    <g transform="translate(4,68)">
                      <circle r="12" cx="12" cy="12" fill={WHITE} stroke={RED} strokeWidth="1.5" />
                      <g stroke={RED} strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" transform="translate(12,12)">
                        <circle r="4.2" />
                        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
                          <line key={deg} x1="0" y1="-6.5" x2="0" y2="-8.5" transform={`rotate(${deg})`} />
                        ))}
                      </g>
                    </g>
                  </svg>
                  <div className="support-badge-chat">
                    <ChatIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

/* ══ ICONS ══ */
const PhoneIcon = () => (<svg viewBox="0 0 24 24" width="17" height="17" fill="white"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>);
const PhoneIconGray = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>);
const MailIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>);
const UserIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>);
const BuildingIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="2" width="16" height="20" rx="1"/><line x1="9" y1="7" x2="9" y2="7.01"/><line x1="15" y1="7" x2="15" y2="7.01"/><line x1="9" y1="11" x2="9" y2="11.01"/><line x1="15" y1="11" x2="15" y2="11.01"/><line x1="9" y1="15" x2="9" y2="15.01"/><line x1="15" y1="15" x2="15" y2="15.01"/></svg>);
const ServiceIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z"/><line x1="16" y1="8" x2="2" y2="22"/><line x1="17.5" y1="15" x2="9" y2="15"/></svg>);
const BudgetIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 3H8v4"/><circle cx="12" cy="14" r="3"/></svg>);
const EditIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>);
const PaperclipIcon = () => (<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05 12.25 20.24a5 5 0 0 1-7.07-7.07l9.19-9.19a3.5 3.5 0 0 1 4.95 4.95l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>);
const LocationIcon = () => (<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
const ArrowIcon = () => (<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
const HeadsetIcon = () => (<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>);
const ChatIcon = () => (<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>);
