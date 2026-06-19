'use client'

import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import { useEffect } from 'react'
import { openCalendlyPopup } from '@/components/ui/calendly'

export default function ConsultationPage() {
  useEffect(() => {
    // Open the Calendly popup automatically on arrival. The popup renders the
    // real hosted page (correctly themed dark), unlike the inline embed which
    // cannot theme its input fields.
    const t = setTimeout(() => openCalendlyPopup(), 400)
    return () => clearTimeout(t)
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

      {/* Booking CTA Section */}
      <section style={{ background: '#0b1120', paddingBottom: '6rem', overflow: 'hidden' }}>
        <div className="container">
          <AnimatedSection>
            <div
              style={{
                maxWidth: 640,
                margin: '0 auto',
                textAlign: 'center',
                background: '#0e1730',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 16,
                padding: '3rem 2rem',
              }}
            >
              <h2
                style={{
                  color: '#f1f5f9',
                  fontSize: 'clamp(1.4rem, 3vw, 2rem)',
                  fontWeight: 800,
                  marginBottom: '0.75rem',
                }}
              >
                Book your AI Discovery Call
              </h2>
              <p
                style={{
                  color: '#94a3b8',
                  fontSize: 16,
                  lineHeight: 1.7,
                  maxWidth: 460,
                  margin: '0 auto 2rem',
                }}
              >
                A free 30-minute call to map where AI automation can save you the most time. Pick a
                slot that works for you.
              </p>
              <button
                onClick={() => openCalendlyPopup()}
                style={{
                  background: '#2563eb',
                  color: '#fff',
                  fontSize: 16,
                  fontWeight: 600,
                  border: 'none',
                  borderRadius: 10,
                  padding: '0.95rem 2.25rem',
                  cursor: 'pointer',
                }}
              >
                Choose a time
              </button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
