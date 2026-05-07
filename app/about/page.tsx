'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import { useEffect, useRef, useState } from 'react'

const pillars = [
  {
    label: 'Mission',
    title: 'Why we exist',
    body: 'We believe many businesses spend too much time on repetitive tasks that slow growth and drain productivity. Our goal is to replace these manual processes with intelligent automation systems that allow teams to focus on higher-value work.',
    icon: '◎',
    // Mission — freeing teams from manual work: circuit board (tech foundation replacing old processes)
    img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Approach',
    title: 'How we work',
    body: 'At IMPACKTA AI we focus on practical automation that delivers measurable results. Rather than introducing unnecessary complexity, we design systems that integrate seamlessly with your existing tools and workflows.',
    icon: '⟳',
    // Approach — integration & connected systems: monitor with code/colourful tech screen
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'Founder Perspective',
    title: 'Built from experience',
    body: 'With firsthand experience in operations-heavy environments, we understand the real challenges businesses face when managing workflows, communication, and internal processes.',
    icon: '◈',
    // Founder — operations infrastructure experience: server rack with blue lighting, no humans
    img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
  },
  {
    label: 'What We Do',
    title: 'Our focus',
    body: 'IMPACKTA AI is an automation consultancy focused on helping businesses eliminate repetitive work and operate more efficiently through intelligent systems and AI-driven automation.',
    icon: '◉',
    // Focus — AI-driven automation: futuristic AI concept with light beams
    img: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=600&q=80',
  },
]

const values = [
  'Practical', 'Measurable', 'Seamless', 'Intelligent', 'Scalable',
  'Efficient', 'Transformative', 'Results-Driven', 'Practical', 'Measurable',
  'Seamless', 'Intelligent', 'Scalable', 'Efficient', 'Transformative', 'Results-Driven',
]

export default function AboutPage() {
  return (
    <>
      {/* ── Page Hero ── */}
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
        {/* Hero background image — full colour, visible */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/about.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.55,
            filter: 'brightness(0.7)',
          }}
        />
        {/* Gradient: dark on the left (text side) → transparent on the right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.75) 45%, rgba(11,17,32,0.3) 100%)',
          }}
        />

        <div className="container relative" style={{ zIndex: 1 }}>
          <AnimatedSection>
            <p
              className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#7dd3fc' }}
            >
              <span
                className="dot-blink"
                style={{
                  display: 'inline-block',
                  width: 6,
                  height: 6,
                  borderRadius: '50%',
                  background: '#7dd3fc',
                }}
              />
              About IMPACKTA AI
            </p>
            <h1
              className="font-extrabold text-white leading-tight max-w-3xl mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              We help businesses work{' '}
              <span style={{ color: '#7dd3fc' }}>smarter</span>, not harder.
            </h1>
            <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.75, maxWidth: 640 }}>
              IMPACKTA AI is an automation consultancy that designs and deploys intelligent systems
              to remove manual work, reduce costs, and help teams operate at full capacity.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Pillars ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <div style={{ marginBottom: 48 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#7dd3fc',
                  marginBottom: 12,
                }}
              >
                <span
                  className="dot-blink"
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#7dd3fc',
                    marginRight: 8,
                    verticalAlign: 'middle',
                  }}
                />
                Who We Are
              </p>
              <h2
                style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}
              >
                The principles behind{' '}
                <span style={{ color: '#7dd3fc' }}>everything we build</span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.label} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div
                  style={{
                    position: 'relative',
                    borderRadius: 20,
                    overflow: 'hidden',
                    minHeight: 380,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    const imgEl = el.querySelector('img') as HTMLImageElement | null
                    if (imgEl) imgEl.style.transform = 'scale(1.07)'
                    el.style.boxShadow = '0 20px 56px rgba(125,211,252,0.18)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    const imgEl = el.querySelector('img') as HTMLImageElement | null
                    if (imgEl) imgEl.style.transform = 'scale(1)'
                    el.style.boxShadow = 'none'
                  }}
                >
                  {/* Full-bleed background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt=""
                    aria-hidden="true"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      zIndex: 0,
                      transition: 'transform 0.5s ease',
                    }}
                  />
                  {/* Dark gradient overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(2,6,23,0.28) 0%, rgba(2,6,23,0.65) 45%, rgba(2,6,23,0.97) 100%)',
                      zIndex: 1,
                    }}
                  />

                  {/* Top row: icon badge + label */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 20,
                      left: 20,
                      right: 20,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      zIndex: 2,
                    }}
                  >
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        background: 'rgba(2,6,23,0.72)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(125,211,252,0.3)',
                        fontSize: 20,
                        color: '#7dd3fc',
                      }}
                    >
                      {p.icon}
                    </span>
                    <span
                      style={{
                        fontSize: 9,
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#7dd3fc',
                        background: 'rgba(2,6,23,0.7)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(125,211,252,0.25)',
                        borderRadius: 999,
                        padding: '5px 12px',
                      }}
                    >
                      {p.label}
                    </span>
                  </div>

                  {/* Bottom content */}
                  <div style={{ position: 'relative', zIndex: 2, padding: '0 24px 24px' }}>
                    <h3
                      style={{
                        fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        marginBottom: 10,
                      }}
                    >
                      {p.title}
                    </h3>
                    <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values Marquee ── */}
      <section
        style={{
          background: '#0b1120',
          padding: '40px 0',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          borderBottom: '1px solid rgba(255,255,255,0.06)',
          overflow: 'hidden',
        }}
      >
        <div className="marquee-track" aria-hidden="true">
          {values.map((v, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 28,
                paddingRight: 28,
                fontSize: 15,
                fontWeight: 700,
                color: i % 2 === 0 ? '#7dd3fc' : 'rgba(255,255,255,0.3)',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
              }}
            >
              {v}
              <svg width="6" height="6" viewBox="0 0 6 6" style={{ flexShrink: 0 }}>
                <polygon points="3,0 6,3 3,6 0,3" fill="rgba(125,211,252,0.4)" />
              </svg>
            </span>
          ))}
        </div>
      </section>

      {/* ── Vision Block ── */}
      <section style={{ paddingTop: '5rem', paddingBottom: 0, overflow: 'hidden' }}>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 items-stretch"
          style={{
            maxWidth: 1200,
            marginLeft: 'auto',
            marginRight: 'auto',
            paddingLeft: '1.5rem',
          }}
        >
          {/* Col 1 — Vision content */}
          <AnimatedSection delay={1}>
            <div
              className="flex flex-col items-start justify-center h-full"
              style={{
                paddingRight: 'clamp(0rem, 3vw, 3rem)',
                paddingBottom: '5rem',
                paddingTop: '1rem',
              }}
            >
              {/* Label — start */}
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#7dd3fc',
                  marginBottom: 20,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  textAlign: 'left',
                }}
              >
                <span
                  className="dot-blink"
                  style={{
                    display: 'inline-block',
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#7dd3fc',
                  }}
                />
                Our Vision
              </p>

              {/* Headline — centre */}
              <h2
                style={{
                  fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  marginBottom: 20,
                  textAlign: 'center',
                  alignSelf: 'center',
                }}
              >
                Helping businesses unlock the full potential of AI by transforming everyday operations
                into{' '}
                <span style={{ color: '#7dd3fc' }}>intelligent systems that scale efficiently.</span>
              </h2>

              {/* Body — start */}
              <p style={{ fontSize: 16, color: '#94a3b8', lineHeight: 1.8, marginBottom: 36, textAlign: 'left' }}>
                We are building a future where no team member wastes their talent on a task a machine
                can handle — freeing people to do the work that actually matters.
              </p>
              <Button href="https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Start the Conversation
              </Button>
            </div>
          </AnimatedSection>

          {/* Col 2 — image */}
          <AnimatedSection delay={2}>
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: '24px 0 0 0',
                height: '100%',
                minHeight: 360,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=900&q=85"
                alt="Vision — intelligent systems scaling the future"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                  filter: 'brightness(0.85)',
                }}
              />
              {/* Left-edge fade so image blends into the content column */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, rgba(2,6,23,0.55) 0%, transparent 35%)',
                  pointerEvents: 'none',
                }}
              />
              {/* Bottom-edge fade */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '35%',
                  background: 'linear-gradient(transparent, rgba(2,6,23,0.5))',
                  pointerEvents: 'none',
                }}
              />
              {/* Floating caption tag */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 24,
                  left: 24,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                  background: 'rgba(2,6,23,0.75)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(125,211,252,0.25)',
                  borderRadius: 999,
                  padding: '6px 14px',
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    background: '#7dd3fc',
                    flexShrink: 0,
                    animation: 'dot-blink 1.5s ease-in-out infinite',
                  }}
                />
                <span style={{ fontSize: 11, fontWeight: 600, color: '#7dd3fc', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Intelligent Future
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
