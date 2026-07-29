export default function OurWorkPage() {
  return (
    <>
      <style>{`
        .cs-btn:hover { opacity: 0.85; }
      `}</style>

      <main style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f9f9f9', fontFamily: "'Segoe UI', Arial, sans-serif" }}>
        <div style={{ textAlign: 'center', padding: '2rem' }}>

          {/* Icon */}
          <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="11" stroke="#c0392b" strokeWidth="1.5" />
              <path d="M12 6v6l4 2" stroke="#c0392b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Badge */}
          <span style={{ display: 'inline-block', background: '#fff0ee', color: '#c0392b', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '6px 16px', borderRadius: '50px', marginBottom: '1rem' }}>
            Coming Soon
          </span>

          {/* Heading */}
          <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 900, color: '#1a1a2e', lineHeight: 1.2, marginBottom: '1rem' }}>
            Our Work Is On<br />Its Way
          </h1>

          {/* Subtext */}
          <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.8, maxWidth: '460px', margin: '0 auto 2rem' }}>
            We&apos;re putting together our portfolio to showcase the amazing projects we&apos;ve built. Check back soon — great things are coming!
          </p>

          {/* Back home button */}
          <a
            href="/"
            className="cs-btn"
            style={{ display: 'inline-block', background: '#c0392b', color: '#fff', padding: '0.75rem 2rem', borderRadius: '50px', fontWeight: 700, textDecoration: 'none', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', transition: 'opacity 0.2s' }}
          >
            Back to Home
          </a>

        </div>
      </main>
    </>
  )
}