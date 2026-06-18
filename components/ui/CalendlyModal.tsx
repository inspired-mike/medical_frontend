'use client'

import React, { useEffect, useRef, useState } from 'react'

const CALENDLY_URL =
  'https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1'
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_SCRIPT_ID = 'calendly-script'

// ── Inner widget — only mounted when modal is open ─────────────────────────
function CalendlyWidget() {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Init inline widget once this component mounts (modal is open & in DOM)
  useEffect(() => {
    const init = () => {
      if (!targetRef.current) return
      ;(window as any).Calendly.initInlineWidget({
        url: CALENDLY_URL,
        parentElement: targetRef.current,
        prefill: {},
        utm: {},
      })
    }

    const existing = document.getElementById(CALENDLY_SCRIPT_ID) as HTMLScriptElement | null
    if (existing) {
      if (typeof (window as any).Calendly !== 'undefined') init()
      else existing.addEventListener('load', init, { once: true })
      return
    }

    const script = document.createElement('script')
    script.id = CALENDLY_SCRIPT_ID
    script.src = CALENDLY_SCRIPT_SRC
    script.async = true
    script.addEventListener('load', init, { once: true })
    script.addEventListener('error', () => setIsLoading(false))
    document.body.appendChild(script)
  }, [])

  // postMessage → resize iframe exactly, no gap, no scroll
  useEffect(() => {
    const onMsg = (e: MessageEvent) => {
      if (!e.data || typeof e.data !== 'object') return
      if (e.data.event !== 'calendly.page_height') return

      const h: number = e.data.payload?.height
      if (h && h > 100) {
        const buffered = h + 40
        const iframe = targetRef.current?.querySelector('iframe') as HTMLIFrameElement | null
        if (iframe) {
          iframe.style.height = `${buffered}px`
          iframe.style.minHeight = `${buffered}px`
        }
        if (targetRef.current) {
          targetRef.current.style.height = `${buffered}px`
          targetRef.current.style.minHeight = 'unset'
        }
      }
      setIsLoading(false)
    }
    window.addEventListener('message', onMsg)
    return () => window.removeEventListener('message', onMsg)
  }, [])

  // MutationObserver fallback skeleton dismiss
  useEffect(() => {
    const obs = new MutationObserver(() => {
      const iframe = targetRef.current?.querySelector('iframe')
      if (!iframe) return
      obs.disconnect()
      iframe.addEventListener('load', () => setTimeout(() => setIsLoading(false), 800), { once: true })
      setTimeout(() => setIsLoading(false), 4000)
    })
    if (targetRef.current) obs.observe(targetRef.current, { childList: true, subtree: true })
    return () => obs.disconnect()
  }, [])

  return (
    <div style={{ position: 'relative', background: '#0b1120' }}>
      {isLoading && (
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 10,
            background: '#0b1120', padding: '2.25rem 1.75rem',
            display: 'flex', flexDirection: 'column', alignItems: 'center',
            pointerEvents: 'none', minHeight: 420,
          }}
        >
          <div className="skel" style={{ width: 52, height: 52, borderRadius: '50%', marginBottom: 14 }} />
          <div className="skel" style={{ width: 120, height: 14, borderRadius: 6, marginBottom: 10 }} />
          <div className="skel" style={{ width: 260, height: 10, borderRadius: 6, marginBottom: 6 }} />
          <div className="skel" style={{ width: 220, height: 10, borderRadius: 6, marginBottom: 6 }} />
          <div className="skel" style={{ width: 170, height: 10, borderRadius: 6, marginBottom: 24 }} />
          <div style={{ width: '100%', height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 20 }} />
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, width: '100%', marginBottom: 20 }}>
            <div className="skel" style={{ width: 42, height: 42, borderRadius: '50%', flexShrink: 0 }} />
            <div className="skel" style={{ flex: 1, height: 14, borderRadius: 6, maxWidth: 170 }} />
            <div className="skel" style={{ width: 20, height: 20, borderRadius: '50%', flexShrink: 0 }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, width: '100%' }}>
            {[75, 88, 62, 48].map((w, i) => (
              <div key={i} className="skel" style={{ width: `${w}%`, height: 10, borderRadius: 6 }} />
            ))}
          </div>
        </div>
      )}
      <div ref={targetRef} style={{ width: '100%', minHeight: 420, transition: 'height 0.3s ease' }} />
    </div>
  )
}

// ── Outer shell — handles open/close state only ────────────────────────────
export default function CalendlyModal(): React.ReactElement {
  const [open, setOpen] = useState(false)

  // open-calendly event + ESC
  useEffect(() => {
    const onOpen = () => setOpen(true)
    window.addEventListener('open-calendly', onOpen)
    return () => window.removeEventListener('open-calendly', onOpen)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!open) return <></>

  return (
    <>
      <div
        style={{
          position: 'fixed', inset: 0, zIndex: 99999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 16, background: 'rgba(2,6,23,0.92)',
          backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)',
        }}
        onClick={(e) => { if (e.target === e.currentTarget) setOpen(false) }}
      >
        <div
          style={{
            position: 'relative', width: '100%', maxWidth: 620,
            background: '#0b1120', borderRadius: 20,
            border: '1px solid rgba(255,255,255,0.1)',
            boxShadow: '0 32px 80px rgba(0,0,0,0.7)',
            overflow: 'hidden',
          }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            style={{
              position: 'absolute', top: 12, right: 12, zIndex: 20,
              width: 34, height: 34, borderRadius: '50%',
              border: '1px solid rgba(255,255,255,0.2)',
              background: 'rgba(11,17,32,0.8)',
              backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer', color: 'rgba(255,255,255,0.65)',
              transition: 'background 0.15s, color 0.15s, border-color 0.15s',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.15)'
              e.currentTarget.style.color = '#fff'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(11,17,32,0.8)'
              e.currentTarget.style.color = 'rgba(255,255,255,0.65)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
            }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
              stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              <path d="M1 1l10 10M11 1L1 11" />
            </svg>
          </button>

          {/* Calendly widget — only mounts when modal is open */}
          <CalendlyWidget />
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position:  400px 0; }
        }
        .skel {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 0px,
            rgba(125,211,252,0.09) 60px,
            rgba(255,255,255,0.04) 120px
          );
          background-size: 400px 100%;
          animation: shimmer 1.4s infinite linear;
        }
        /* ── Hide the floating Calendly badge widget ── */
        .calendly-badge-widget {
          display: none !important;
        }
        .calendly-inline-widget,
        .calendly-inline-widget > div,
        .calendly-inline-widget > div > div {
          background: #0b1120 !important;
          border: none !important;
          box-shadow: none !important;
          overflow: hidden !important;
        }
        .calendly-inline-widget iframe {
          background: #0b1120 !important;
          border: none !important;
          display: block !important;
          width: 100% !important;
          transition: height 0.3s ease;
        }
      `}</style>
    </>
  )
}