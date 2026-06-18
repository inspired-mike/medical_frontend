'use client'

import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useEffect, useRef, useState } from 'react'

const CALENDLY_URL =
  'https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1'
const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js'
const CALENDLY_SCRIPT_ID = 'calendly-script'
const LOAD_TIMEOUT_MS = 10_000

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true)
  const widgetRef = useRef<HTMLDivElement>(null)
  const outerRef = useRef<HTMLDivElement>(null)
  const doneRef = useRef(false)

  useEffect(() => {
    const markLoaded = () => {
      if (doneRef.current) return
      doneRef.current = true
      setIsLoading(false)
    }

    const hardTimer = setTimeout(markLoaded, LOAD_TIMEOUT_MS)

    // ── postMessage: Calendly fires real rendered height on every view change ──
    const onMessage = (e: MessageEvent) => {
      if (
        e.data &&
        typeof e.data === 'object' &&
        e.data.event === 'calendly.page_height'
      ) {
        const h: number = e.data.payload?.height
        if (h && h > 100) {
          // Add 40px buffer so the iframe is always TALLER than its content.
          // This is the only way to kill the internal scrollbar — CSS on the
          // iframe element cannot reach inside a cross-origin document.
          const buffered = h + 40

          // Resize the iframe element itself (not just the wrapper)
          const iframe = widgetRef.current?.querySelector('iframe') as HTMLIFrameElement | null
          if (iframe) iframe.style.height = buffered + 'px'

          // Resize widget div and outer container to match
          if (widgetRef.current) widgetRef.current.style.height = buffered + 'px'
          if (outerRef.current) outerRef.current.style.height = buffered + 'px'
        }
        markLoaded()
      }
    }
    window.addEventListener('message', onMessage)

    // ── MutationObserver: fallback — detect iframe injection ──
    const observer = new MutationObserver(() => {
      const iframe = widgetRef.current?.querySelector('iframe')
      if (!iframe) return
      observer.disconnect()

      iframe.addEventListener('load', () => {
        setTimeout(markLoaded, 600)
      })
      // If load already fired
      setTimeout(markLoaded, 1500)
    })

    if (widgetRef.current) {
      observer.observe(widgetRef.current, { childList: true, subtree: true })
    }

    // ── Inject / reuse Calendly script ──
    const existing = document.getElementById(CALENDLY_SCRIPT_ID) as HTMLScriptElement | null
    if (existing) {
      if (typeof (window as any).Calendly !== 'undefined') {
        ;(window as any).Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: widgetRef.current,
        })
      }
    } else {
      const script = document.createElement('script')
      script.id = CALENDLY_SCRIPT_ID
      script.src = CALENDLY_SCRIPT_SRC
      script.async = true
      script.onerror = () => {
        console.error('[Calendly] Script failed to load')
        markLoaded()
      }
      document.body.appendChild(script)
    }

    return () => {
      clearTimeout(hardTimer)
      observer.disconnect()
      window.removeEventListener('message', onMessage)
    }
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          paddingTop: 'calc(72px + 5rem)',
          paddingBottom: '5rem',
          background: '#0b1120',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Image
          src="/hero/contact.png"
          alt=""
          aria-hidden="true"
          fill
          priority
          style={{ objectFit: 'cover', opacity: 0.55, filter: 'brightness(0.72)' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.7) 45%, rgba(11,17,32,0.2) 100%)',
          }}
        />
        <div className="container relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <p
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#7dd3fc' }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#7dd3fc',
                }}
              />
              Free Consultation
            </p>

            <h1
              className="font-extrabold leading-tight max-w-3xl mb-5"
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                background:
                  'linear-gradient(90deg, #ffffff 0%, #7dd3fc 30%, #38bdf8 55%, #93c5fd 75%, #ffffff 100%)',
                backgroundSize: '300% 100%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Ready to automate your growth?
            </h1>

            <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.75, maxWidth: 580 }}>
              Discover how AI automation can transform your business. No obligation, just practical
              insights.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Calendar Section */}
      <section style={{ background: '#0b1120', paddingBottom: '5rem', overflow: 'hidden' }}>
        <div className="container">
          <AnimatedSection>
            {/*
              outerRef — height auto-adjusts via postMessage from Calendly.
              Starts at 700px (desktop), shrinks to ~420px on mobile automatically.
            */}
            <div
              ref={outerRef}
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto',
                height: 700,
                transition: 'height 0.35s ease',
                background: '#0b1120',
              }}
            >
              {/* Skeleton overlay */}
              {isLoading && (
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    zIndex: 10,
                    background: '#0b1120',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '2.5rem 2rem',
                    pointerEvents: 'none',
                  }}
                >
                  <div
                    style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.25rem' }}
                  >
                    <div className="skel" style={{ width: 130, height: 18, borderRadius: 6 }} />
                  </div>
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '0.5rem',
                      marginBottom: '2rem',
                    }}
                  >
                    <div className="skel" style={{ width: 340, height: 13, borderRadius: 6 }} />
                    <div className="skel" style={{ width: 310, height: 13, borderRadius: 6 }} />
                    <div className="skel" style={{ width: 180, height: 13, borderRadius: 6 }} />
                  </div>
                  <div
                    style={{
                      height: 1,
                      background: 'rgba(255,255,255,0.08)',
                      marginBottom: '1.5rem',
                    }}
                  />
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.85rem',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      className="skel"
                      style={{ width: 44, height: 44, borderRadius: '50%', flexShrink: 0 }}
                    />
                    <div
                      className="skel"
                      style={{ flex: 1, height: 16, borderRadius: 6, maxWidth: 180 }}
                    />
                    <div
                      className="skel"
                      style={{ width: 22, height: 22, borderRadius: '50%', flexShrink: 0 }}
                    />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                    <div className="skel" style={{ width: '72%', height: 12, borderRadius: 6 }} />
                    <div className="skel" style={{ width: '85%', height: 12, borderRadius: 6 }} />
                    <div className="skel" style={{ width: '65%', height: 12, borderRadius: 6 }} />
                    <div className="skel" style={{ width: '40%', height: 12, borderRadius: 6 }} />
                  </div>
                </div>
              )}

              {/* Calendly widget */}
              <div
                ref={widgetRef}
                className="calendly-inline-widget"
                data-url={CALENDLY_URL}
                style={{ minWidth: '320px', height: '100%', width: '100%' }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      <style jsx global>{`
        @keyframes shimmer {
          0%   { background-position: -600px 0; }
          100% { background-position:  600px 0; }
        }
        .skel {
          background: linear-gradient(
            90deg,
            rgba(255,255,255,0.04) 0px,
            rgba(125,211,252,0.10) 80px,
            rgba(255,255,255,0.04) 160px
          );
          background-size: 600px 100%;
          animation: shimmer 1.6s infinite linear;
        }

        /* ── Nuke all white backgrounds Calendly injects ── */
        .calendly-inline-widget,
        .calendly-inline-widget > div,
        .calendly-inline-widget > div > div {
          background: #0b1120 !important;
          border: none !important;
          box-shadow: none !important;
          border-radius: 0 !important;
          overflow: hidden !important;
        }

        /* ── The iframe itself ── */
        .calendly-inline-widget iframe {
          background: #0b1120 !important;
          border: none !important;
          display: block !important;
          width: 100% !important;
          /*
           * overflow CSS cannot reach inside a cross-origin iframe — useless here.
           * The scrollbar is killed by JS: we make the iframe 40px taller than its
           * content via the postMessage listener (iframe.style.height set directly).
           * This means the iframe never needs to scroll internally.
           */
          min-height: 700px;
          transition: height 0.35s ease;
        }
      `}</style>
    </>
  )
}