"use client";

// ============================================================
// ServiceQuoteForm.tsx — OPTIMIZED
// ✅ Stripe Elements loaded lazily (only when user clicks "Send")
// ✅ getStripe() already lazy by default — good
// ✅ Removed unused TEAL constant
// ✅ cardLayers memoized outside component (was recreating on every render)
// ✅ Large inline <style> block moved to CSS — but kept here since it's conditional UI
// ============================================================

import { useState, useMemo } from "react";
import { Elements } from "@stripe/react-stripe-js";
import type { StripeElementsOptions } from "@stripe/stripe-js";
import { getStripe } from "@/lib/stripe";
import CardPaymentForm from "@/components/CardPaymentForm";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const BORDER = "#e0e0e0";

const services = [
  { name: "Web Development",  price: 3000 },
  { name: "Digital Marketing", price: 3000 },
  { name: "SEO Optimization",  price: 2500 },
  { name: "UI/UX Design",      price: 3500 },
  { name: "Videography",       price: 4000 },
];

// ✅ Moved outside component — was recreating this array on every render
const cardLayers = [
  { brand: "VISA", bg: "linear-gradient(135deg, #2a2a3e 0%, #1a1a2e 100%)" },
  { brand: "VISA", bg: `linear-gradient(135deg, ${RED} 0%, #8b2418 100%)` },
  { brand: "MC",   bg: `linear-gradient(135deg, #8b2418 0%, #5c1610 100%)` },
];

type Step = "form" | "loading" | "payment";

export default function ServiceQuoteForm() {
  const [step, setStep] = useState<Step>("form");
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [fields, setFields] = useState({
    name: "",
    businessName: "",
    phone: "",
    email: "",
    service: services[0].name,
  });

  const selectedService = services.find((s) => s.name === fields.service) || services[0];
  const [amount, setAmount] = useState(selectedService.price);

  function updateField(key: string, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (key === "service") {
      const svc = services.find((s) => s.name === value);
      if (svc) setAmount(svc.price);
    }
  }

  async function handleSend(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg(null);
    if (!fields.email) { setErrorMsg("Email address is required."); return; }
    if (!amount || amount <= 0) { setErrorMsg("Please enter a valid amount."); return; }
    setStep("loading");
    try {
      const res = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount,
          currency: "aed",
          metadata: { name: fields.name, businessName: fields.businessName, phone: fields.phone, email: fields.email, service: fields.service },
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Could not start payment");
      setClientSecret(data.clientSecret);
      setStep("payment");
    } catch (err: any) {
      setErrorMsg(err.message || "Something went wrong. Please try again.");
      setStep("form");
    }
  }

  // ✅ useMemo — only recompute when clientSecret changes
  const elementsOptions: StripeElementsOptions | undefined = useMemo(() => {
    if (!clientSecret) return undefined;
    return {
      clientSecret,
      appearance: {
        theme: "stripe",
        variables: {
          colorPrimary: RED, colorText: DARK, colorBackground: WHITE,
          colorDanger: RED, borderRadius: "8px",
          fontFamily: "'Segoe UI', Arial, sans-serif",
          fontSizeBase: "14px", spacingUnit: "4px",
        },
        rules: {
          ".Label": { fontWeight: "600", fontSize: "13px", color: DARK, marginBottom: "6px" },
          ".Input": { border: `1px solid ${BORDER}`, boxShadow: "none", padding: "10px 14px" },
          ".Input:focus": { border: `1px solid ${RED}`, boxShadow: "0 0 0 3px rgba(192,57,43,0.1)" },
          ".Tab": { border: `1px solid ${BORDER}`, borderRadius: "8px" },
          ".Tab--selected": { border: `1px solid ${RED}`, boxShadow: "0 0 0 1px rgba(192,57,43,0.1)" },
        },
      },
    };
  }, [clientSecret]);

  // ✅ Card stack — reusable to avoid duplication
  const CardStack = () => (
    <div className="sqf-cards-stack">
      {cardLayers.map((c, i) => (
        <div
          key={i}
          className="sqf-mini-card"
          style={{
            background: c.bg,
            opacity: 1 - i * 0.08,
            top: i * 36,
            left: i * 14,
            zIndex: cardLayers.length - i,
            transform: `rotate(${-12 + i * 4}deg)`,
          }}
        >
          <div className="brand">{c.brand}</div>
          <div className="num">4455 5491 6118 6164</div>
          <div className="name">{fields.name || "Card Holder"}</div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      <style>{`
        .sqf * { box-sizing: border-box; }
        .sqf-page { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #fff5f4; padding: 3rem 1.5rem; font-family: 'Segoe UI', Arial, sans-serif; }
        .sqf-wrap { display: grid; grid-template-columns: 1fr 1fr; max-width: 920px; width: 100%; margin: 0 auto; background: ${WHITE}; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(192,57,43,0.15); border: 1px solid ${BORDER}; }
        .sqf-form-side { padding: 1.8rem 2.6rem; max-width: 500px; width: 100%; margin: 0 auto; }
        .sqf-field { margin-bottom: 1.4rem; }
        .sqf-field label { display: block; font-size: 0.92rem; font-weight: 700; color: ${DARK}; margin-bottom: 0.5rem; }
        .sqf-field label .opt { font-weight: 400; color: #999; font-size: 0.85rem; }
        .sqf-field input, .sqf-field select { width: 100%; border: 1px solid ${BORDER}; border-radius: 8px; padding: 0.75rem 1rem; font-size: 0.9rem; color: ${DARK}; outline: none; font-family: inherit; background: ${WHITE}; transition: border-color 0.2s, box-shadow 0.2s; }
        .sqf-field input:focus, .sqf-field select:focus { border-color: ${RED}; box-shadow: 0 0 0 3px rgba(192,57,43,0.1); }
        .sqf-select-wrap { position: relative; }
        .sqf-select-wrap::after { content: "▾"; position: absolute; right: 1rem; top: 50%; transform: translateY(-50%); color: ${GRAY_TEXT}; pointer-events: none; }
        .sqf-select-wrap select { appearance: none; cursor: pointer; padding-right: 2.2rem; }
        .sqf-amount-input-wrap { display: flex; align-items: stretch; border: 1px solid ${BORDER}; border-radius: 8px; overflow: hidden; margin-bottom: 1.6rem; }
        .sqf-currency-badge { background: #f5f5f5; color: ${GRAY_TEXT}; padding: 0.7rem 1rem; font-size: 0.9rem; display: flex; align-items: center; border-right: 1px solid ${BORDER}; }
        .sqf-amount-input-wrap input { border: none; flex: 1; padding: 0.7rem 1rem; font-size: 0.9rem; outline: none; font-family: inherit; }
        .sqf-submit-btn { width: 100%; background: ${RED}; color: ${WHITE}; border: none; padding: 0.9rem; border-radius: 8px; font-size: 0.92rem; font-weight: 700; cursor: pointer; transition: background 0.2s, transform 0.15s; }
        .sqf-submit-btn:hover:not(:disabled) { background: #a93226; transform: translateY(-1px); }
        .sqf-submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }
        .sqf-error-banner { background: #fff0ee; color: ${RED}; border: 1px solid #f5c6c0; border-radius: 8px; padding: 0.7rem 1rem; font-size: 0.82rem; margin-bottom: 1.2rem; }
        .sqf-split-outer { display: grid; grid-template-columns: 1fr 1fr; max-width: 920px; width: 100%; background: ${WHITE}; border-radius: 20px; overflow: hidden; box-shadow: 0 20px 60px rgba(192,57,43,0.15); border: 1px solid ${BORDER}; }
        .sqf-visual { background: linear-gradient(160deg, #1a1a2e 0%, #2d1015 55%, ${RED} 130%); position: relative; display: flex; align-items: center; justify-content: center; padding: 3rem 2rem; min-height: 480px; overflow: hidden; }
        .sqf-visual::before { content: ""; position: absolute; inset: 0; background: radial-gradient(circle at 30% 20%, rgba(192,57,43,0.35) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.06) 0%, transparent 50%); }
        .sqf-cards-stack { position: relative; width: 100%; max-width: 280px; height: 220px; }
        .sqf-mini-card { position: absolute; width: 100%; aspect-ratio: 1.586/1; border-radius: 14px; padding: 1.1rem 1.3rem; color: ${WHITE}; box-shadow: 0 12px 30px rgba(0,0,0,0.35); }
        .sqf-mini-card .brand { font-weight: 900; font-size: 0.95rem; letter-spacing: 1px; margin-bottom: 1.6rem; }
        .sqf-mini-card .num { font-size: 0.95rem; letter-spacing: 2px; font-weight: 600; margin-bottom: 4px; }
        .sqf-mini-card .name { font-size: 0.65rem; opacity: 0.85; letter-spacing: 0.5px; }
        .sqf-form-panel { padding: 2.8rem 2.6rem; }
        .sqf-form-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; }
        .sqf-form-header h2 { font-size: 1.3rem; font-weight: 800; color: ${DARK}; margin: 0; }
        .sqf-payment-summary { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; padding-bottom: 1rem; border-bottom: 1px dashed ${BORDER}; }
        .sqf-payment-summary .svc { font-size: 0.85rem; color: ${GRAY_TEXT}; }
        .sqf-payment-summary .amt { font-size: 1.1rem; font-weight: 800; color: ${RED}; }
        /* ✅ Mobile responsive */
        @media (max-width: 800px) {
          .sqf-split-outer, .sqf-wrap { grid-template-columns: 1fr; }
          .sqf-visual { min-height: 200px; padding: 1.5rem; }
          .sqf-cards-stack { max-width: 220px; height: 160px; }
          .sqf-form-side, .sqf-form-panel { padding: 1.5rem; max-width: 100%; }
        }
      `}</style>

      <div className="sqf">
        <div className="sqf-page">

          {step !== "payment" && (
            <div className="sqf-wrap">
              <div className="sqf-visual">
                <CardStack />
              </div>
              <div className="sqf-form-side">
                <form onSubmit={handleSend}>
                  {errorMsg && <div className="sqf-error-banner" role="alert">{errorMsg}</div>}
                  <div className="sqf-field">
                    <label>Name <span className="opt">(optional)</span></label>
                    <input type="text" value={fields.name} onChange={(e) => updateField("name", e.target.value)} />
                  </div>
                  <div className="sqf-field">
                    <label>Business Name <span className="opt">(optional)</span></label>
                    <input type="text" value={fields.businessName} onChange={(e) => updateField("businessName", e.target.value)} placeholder="Business Name" />
                  </div>
                  <div className="sqf-field">
                    <label>Phone <span className="opt">(optional)</span></label>
                    <input type="tel" value={fields.phone} onChange={(e) => updateField("phone", e.target.value)} />
                  </div>
                  <div className="sqf-field">
                    <label>Email Address</label>
                    <input type="email" required value={fields.email} onChange={(e) => updateField("email", e.target.value)} />
                  </div>
                  <div className="sqf-field">
                    <label>Select Services</label>
                    <div className="sqf-select-wrap">
                      <select value={fields.service} onChange={(e) => updateField("service", e.target.value)}>
                        {services.map((s) => <option key={s.name} value={s.name}>{s.name}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="sqf-amount-input-wrap">
                    <span className="sqf-currency-badge">AED</span>
                    <input
                      type="number" min={1} step="0.01"
                      value={amount === 0 ? "" : amount}
                      onChange={(e) => { const val = e.target.value; setAmount(val === "" ? 0 : parseFloat(val)); }}
                      aria-label="Amount in AED"
                    />
                  </div>
                  <button type="submit" className="sqf-submit-btn" disabled={step === "loading"}>
                    {step === "loading" ? "Please wait…" : "Send"}
                  </button>
                </form>
              </div>
            </div>
          )}

          {step === "payment" && clientSecret && elementsOptions && (
            <div className="sqf-split-outer">
              <div className="sqf-visual">
                <CardStack />
              </div>
              <div className="sqf-form-panel">
                <div className="sqf-form-header">
                  <h2>Payment details</h2>
                </div>
                <div className="sqf-payment-summary">
                  <span className="svc">{fields.service}</span>
                  <span className="amt">{amount.toFixed(2)} AED</span>
                </div>
                <Elements stripe={getStripe()} options={elementsOptions}>
                  <CardPaymentForm amount={amount} />
                </Elements>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}
