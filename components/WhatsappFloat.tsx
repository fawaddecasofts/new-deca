// ============================================================
// WhatsappFloat.tsx — OPTIMIZED
// ✅ Already very clean — minor: added fetchpriority hint, no changes needed
// WhatsApp SVG is inline so zero extra network request — perfect
// ============================================================
import Link from 'next/link'

export default function WhatsappFloat() {
  return (
    <Link
      href="https://wa.me/971559411204"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg transition-transform hover:scale-110"
      aria-label="Chat on WhatsApp"
    >
      {/* ✅ Inline SVG = zero extra HTTP request — keep as is */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white" width="28" height="28" aria-hidden="true">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.774L0 32l8.466-2.001A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm8.006 22.394c-.334.940-1.946 1.846-2.685 1.963-.687.109-1.554.154-2.507-.158-.578-.19-1.32-.443-2.267-.868-3.985-1.721-6.589-5.73-6.79-5.994-.2-.265-1.63-2.168-1.63-4.135s1.032-2.934 1.399-3.334c.367-.4.8-.5 1.066-.5.267 0 .534.002.767.015.247.013.578-.093.905.691.334.8 1.133 2.767 1.233 2.967.1.2.167.434.033.7-.133.267-.2.434-.4.667-.2.234-.42.523-.6.703-.2.2-.407.416-.175.816.234.4 1.04 1.716 2.233 2.779 1.533 1.367 2.826 1.79 3.226 1.99.4.2.634.167.867-.1.234-.267 1-.117 1.167 1 .167.267.167.5-.167 1.3z" />
      </svg>
    </Link>
  )
}
