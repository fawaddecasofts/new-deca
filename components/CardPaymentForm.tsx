"use client";

// ============================================================
// CardPaymentForm.tsx — OPTIMIZED
// ✅ Removed framer-motion (was imported just for success animation)
//    Saves ~30KB JS — same animation done with CSS keyframes
// ✅ Styles moved to className where possible
// ============================================================

import { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";

const RED = "#c0392b";
const DARK = "#1a1a2e";
const WHITE = "#ffffff";
const GRAY_TEXT = "#666";
const BORDER = "#e0e0e0";

export default function CardPaymentForm({ amount }: { amount: number }) {
  const stripe = useStripe();
  const elements = useElements();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [succeeded, setSucceeded] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!stripe || !elements) return;
    setSubmitting(true);
    setError(null);

    const { error: confirmError } = await stripe.confirmPayment({
      elements,
      confirmParams: { return_url: `${window.location.origin}/payment/success` },
      redirect: "if_required",
    });

    if (confirmError) {
      setError(confirmError.message || "Payment failed. Please try again.");
      setSubmitting(false);
      return;
    }

    setSucceeded(true);
    setSubmitting(false);
  }

  if (succeeded) {
    return (
      <>
        <style>{`
          /* ✅ CSS animation instead of framer-motion — zero extra JS */
          @keyframes cpf-pop {
            0%   { transform: scale(0); opacity: 0; }
            70%  { transform: scale(1.15); }
            100% { transform: scale(1); opacity: 1; }
          }
          .cpf-success-icon { animation: cpf-pop 0.5s cubic-bezier(0.34,1.56,0.64,1) forwards; }
        `}</style>
        <div style={{ textAlign: "center", padding: "2rem 0" }}>
          <div className="cpf-success-icon" style={{ display: "inline-block", marginBottom: "0.5rem" }}>
            <svg
              width="40" height="40" viewBox="0 0 24 24"
              fill="none" stroke="#bf2227" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round"
              style={{ display: "block" }}
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <h3 style={{ color: DARK, fontWeight: 800, marginBottom: "0.4rem" }}>Payment Successful</h3>
          <p style={{ color: GRAY_TEXT, fontSize: "0.88rem" }}>Thank you! We&apos;ll be in touch shortly.</p>
        </div>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <style>{`
        .cpf-element-wrap { border: 1px solid ${BORDER}; border-radius: 8px; padding: 1rem; margin-bottom: 1.2rem; transition: border-color 0.2s, box-shadow 0.2s; }
        .cpf-element-wrap:focus-within { border-color: ${RED}; box-shadow: 0 0 0 3px rgba(192,57,43,0.1); }
        .cpf-error { color: ${RED}; font-size: 0.8rem; margin-bottom: 0.8rem; background: #fff0ee; padding: 0.6rem 0.8rem; border-radius: 6px; }
        .cpf-total-row { display: flex; align-items: center; justify-content: space-between; margin: 0 0 1.2rem; padding-top: 1rem; border-top: 1px dashed ${BORDER}; }
        .cpf-total-row .label { font-size: 0.85rem; color: ${GRAY_TEXT}; font-weight: 500; }
        .cpf-total-row .amount { font-size: 1.2rem; font-weight: 800; color: ${RED}; }
        .cpf-pay-btn { width: 100%; background: linear-gradient(135deg, ${RED} 0%, #8b2418 100%); color: ${WHITE}; border: none; padding: 0.95rem; border-radius: 10px; font-size: 0.95rem; font-weight: 700; cursor: pointer; transition: transform 0.15s, box-shadow 0.2s; box-shadow: 0 8px 20px rgba(192,57,43,0.3); }
        .cpf-pay-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(192,57,43,0.4); }
        .cpf-pay-btn:disabled { opacity: 0.6; cursor: not-allowed; }
      `}</style>

      <div className="cpf-element-wrap">
        <PaymentElement options={{ layout: "tabs" }} />
      </div>

      {error && <div className="cpf-error" role="alert">{error}</div>}

      <div className="cpf-total-row">
        <span className="label">Total Amount:</span>
        <span className="amount">{amount.toFixed(2)} AED</span>
      </div>

      <button type="submit" className="cpf-pay-btn" disabled={!stripe || submitting}>
        {submitting ? "Processing…" : `Pay ${amount.toFixed(2)} AED`}
      </button>
    </form>
  );
}
