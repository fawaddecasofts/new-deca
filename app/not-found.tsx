'use client'

import { useEffect, useRef } from 'react'

export default function NotFound() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let W = (canvas.width = window.innerWidth)
    let H = (canvas.height = window.innerHeight)

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    type Particle = { x: number; y: number; r: number; dx: number; dy: number; alpha: number; red: boolean }
    const particles: Particle[] = Array.from({ length: 70 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.8 + 0.2,
      dx: (Math.random() - 0.5) * 0.35,
      dy: (Math.random() - 0.5) * 0.35,
      alpha: Math.random() * 0.45 + 0.05,
      red: Math.random() > 0.7,
    }))

    let tick = 0

    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Rare bg flash
      if (tick % 270 === 0) {
        ctx.fillStyle = 'rgba(191,34,39,0.04)'
        ctx.fillRect(0, 0, W, H)
      }

      // Glitch horizontal bars
      if (tick % 80 < 3) {
        for (let k = 0; k < 3; k++) {
          const gy = Math.random() * H
          ctx.fillStyle = `rgba(191,34,39,${Math.random() * 0.06 + 0.02})`
          ctx.fillRect(0, gy, W, Math.random() * 2 + 1)
        }
      }

      // Particles + connecting lines
      particles.forEach(p => {
        p.x = (p.x + p.dx + W) % W
        p.y = (p.y + p.dy + H) % H
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.red
          ? `rgba(191,34,39,${p.alpha})`
          : `rgba(245,245,245,${p.alpha * 0.4})`
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 100) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(191,34,39,${(1 - dist / 100) * 0.12})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      tick++
      animId = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Space+Mono:wght@700&display=swap');

        .nf-root {
          font-family: 'Space Grotesk', sans-serif;
          background: #080809;
          color: #f5f5f5;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        /* Grid overlay */
        .nf-grid {
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(191,34,39,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(191,34,39,0.04) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
          z-index: 0;
        }

        /* Scanlines */
        .nf-scanlines {
          position: fixed;
          inset: 0;
          background: repeating-linear-gradient(
            0deg, transparent, transparent 2px,
            rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 4px
          );
          pointer-events: none;
          z-index: 5;
          animation: scanFlicker 8s infinite;
        }
        @keyframes scanFlicker {
          0%,98%,100% { opacity: 1; }
          99% { opacity: 0.7; }
        }

        .nf-container {
          position: relative;
          z-index: 10;
          padding: 2rem;
          max-width: 680px;
          width: 100%;
        }

        /* Eyebrow */
        .nf-eyebrow {
          font-family: 'Space Mono', monospace;
          font-size: 0.65rem;
          letter-spacing: 0.2em;
          color: #bf2227;
          text-transform: uppercase;
          margin-bottom: 2rem;
          display: flex;
          align-items: center;
          gap: 12px;
          opacity: 0;
          animation: fadeUp 0.6s 0.1s ease forwards;
        }
        .nf-eyebrow::before {
          content: '';
          display: inline-block;
          width: 24px;
          height: 2px;
          background: #bf2227;
          flex-shrink: 0;
        }

        /* Glitch 404 */
        .nf-glitch-wrap {
          position: relative;
          display: inline-block;
          opacity: 0;
          animation: fadeUp 0.6s 0.2s ease forwards;
        }
        .nf-ghost {
          font-family: 'Space Mono', monospace;
          font-size: clamp(6rem, 20vw, 14rem);
          font-weight: 700;
          line-height: 0.9;
          color: transparent;
          -webkit-text-stroke: 1px rgba(191,34,39,0.18);
          position: absolute;
          top: 6px;
          left: 8px;
          pointer-events: none;
          user-select: none;
          z-index: -1;
        }
        .nf-num {
          font-family: 'Space Mono', monospace;
          font-size: clamp(6rem, 20vw, 14rem);
          font-weight: 700;
          line-height: 0.9;
          color: #f5f5f5;
          position: relative;
          display: inline-block;
        }
        .nf-num::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          color: #bf2227;
          animation: glitch-r 3s infinite steps(1);
          clip-path: polygon(0 18%, 100% 18%, 100% 38%, 0 38%);
        }
        .nf-num::after {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          color: #00c2ff;
          animation: glitch-l 3s 0.15s infinite steps(1);
          clip-path: polygon(0 58%, 100% 58%, 100% 74%, 0 74%);
        }
        @keyframes glitch-r {
          0%,85%,100% { transform: translateX(0); opacity: 0; }
          87% { transform: translateX(6px) skewX(-2deg); opacity: 1; }
          90% { transform: translateX(-5px) skewX(1deg); opacity: 1; }
          93% { transform: translateX(3px); opacity: 1; }
          96% { transform: translateX(0); opacity: 0; }
        }
        @keyframes glitch-l {
          0%,85%,100% { transform: translateX(0); opacity: 0; }
          87% { transform: translateX(-8px) skewX(3deg); opacity: 1; }
          91% { transform: translateX(4px); opacity: 1; }
          94% { transform: translateX(-2px); opacity: 1; }
          97% { transform: translateX(0); opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .nf-num::before, .nf-num::after { animation: none; opacity: 0; }
        }

        /* Red bar */
        .nf-bar {
          height: 3px;
          width: 0;
          background: linear-gradient(90deg, #bf2227, #ff4a4f);
          margin: 1.8rem 0;
          border-radius: 2px;
          box-shadow: 0 0 14px rgba(191,34,39,0.7);
          animation: growBar 0.8s 0.5s cubic-bezier(0.4,0,0.2,1) forwards;
        }
        @keyframes growBar { to { width: 80px; } }

        /* Heading */
        .nf-heading {
          font-size: clamp(1.4rem, 3.5vw, 2rem);
          font-weight: 700;
          line-height: 1.25;
          margin-bottom: 0.75rem;
          opacity: 0;
          animation: fadeUp 0.6s 0.55s ease forwards;
        }
        .nf-heading em {
          font-style: normal;
          color: #bf2227;
        }

        /* Sub */
        .nf-sub {
          color: rgba(245,245,245,0.45);
          font-size: 0.95rem;
          line-height: 1.75;
          max-width: 400px;
          opacity: 0;
          animation: fadeUp 0.6s 0.65s ease forwards;
        }

        /* Back button */
        .nf-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-top: 2.5rem;
          padding: 15px 36px;
          background: transparent;
          border: 2px solid #bf2227;
          color: #f5f5f5;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 700;
          font-size: 0.8rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: color 0.3s, box-shadow 0.3s;
          opacity: 0;
          animation: fadeUp 0.6s 0.75s ease forwards;
        }
        .nf-btn::after {
          content: '';
          position: absolute;
          inset: 0;
          background: #bf2227;
          transform: translateX(-101%);
          transition: transform 0.35s cubic-bezier(0.4,0,0.2,1);
          z-index: 0;
        }
        .nf-btn:hover::after { transform: translateX(0); }
        .nf-btn:hover { box-shadow: 0 0 28px rgba(191,34,39,0.55); }
        .nf-btn span, .nf-btn svg { position: relative; z-index: 1; }

        /* Status strip */
        .nf-status {
          margin-top: 3rem;
          display: flex;
          align-items: center;
          gap: 14px;
          opacity: 0;
          animation: fadeUp 0.6s 0.9s ease forwards;
        }
        .nf-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          background: #bf2227;
          box-shadow: 0 0 8px #bf2227;
          flex-shrink: 0;
          animation: pulseDot 2s infinite;
        }
        @keyframes pulseDot {
          0%,100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.5); opacity: 0.4; }
        }
        .nf-status-text {
          font-family: 'Space Mono', monospace;
          font-size: 0.6rem;
          letter-spacing: 0.14em;
          color: rgba(245,245,245,0.22);
          text-transform: uppercase;
        }

        /* Corner */
        .nf-corner {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          font-family: 'Space Mono', monospace;
          font-size: 0.58rem;
          letter-spacing: 0.14em;
          color: rgba(255,255,255,0.1);
          text-transform: uppercase;
          z-index: 10;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 480px) {
          .nf-container { padding: 1.5rem; }
          .nf-btn { width: 100%; justify-content: center; }
        }
      `}</style>

      <div className="nf-root">
        <canvas ref={canvasRef} style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }} aria-hidden="true" />
        <div className="nf-grid" aria-hidden="true" />
        <div className="nf-scanlines" aria-hidden="true" />

        <div className="nf-container">
          <div className="nf-eyebrow">Error &nbsp;/&nbsp; Page not found</div>

          <div className="nf-glitch-wrap">
            <div className="nf-ghost" aria-hidden="true">404</div>
            <div className="nf-num" data-text="404" aria-label="404">404</div>
          </div>

          <div className="nf-bar" />

          <h1 className="nf-heading">
            Lost in the <em>void.</em>
          </h1>
          <p className="nf-sub">
            The page you're looking for was moved, deleted, or never existed. Let's get you back on track.
          </p>

          <a href="/" className="nf-btn hvr-shutter-out-horizontal">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path d="M9 2.5L4 7.5L9 12.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>Go Home</span>
          </a>

          <div className="nf-status">
            <div className="nf-dot" />
            <span className="nf-status-text">All systems operational &nbsp;·&nbsp; decasoft.com &nbsp;·&nbsp; 404</span>
          </div>
        </div>

        <div className="nf-corner" aria-hidden="true">DecaSoft © {new Date().getFullYear()}</div>
      </div>
    </>
  )
}