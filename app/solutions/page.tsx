'use client'

import { useState, useEffect } from 'react'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'

const DECODE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&!'

function DecodeTitle({ text, className, style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const [displayed, setDisplayed] = useState(
    () => text.split('').map(c => (c === ' ' ? ' ' : DECODE_CHARS[Math.floor(Math.random() * DECODE_CHARS.length)])).join('')
  )

  useEffect(() => {
    let iteration = 0
    const letters = text.split('')
    const interval = setInterval(() => {
      setDisplayed(
        letters.map((letter, idx) => {
          if (letter === ' ') return ' '
          if (idx < iteration) return letter
          return DECODE_CHARS[Math.floor(Math.random() * DECODE_CHARS.length)]
        }).join('')
      )
      iteration += 0.6
      if (iteration >= letters.length) clearInterval(interval)
    }, 38)
    return () => clearInterval(interval)
  }, [text])

  return <span className={className} style={style}>{displayed}</span>
}

const solutions = [
  {
    number: '01',
    title: 'AI Receptionist & Virtual Front Desk',
    subtitle: 'An AI receptionist that answers calls, messages, and website chats 24/7.',
    capabilities: [
      'Answers inbound calls using voice AI',
      'Qualifies enquiries automatically',
      'Books appointments directly into calendars',
      'Sends confirmations and reminders',
      'Routes urgent calls to humans',
    ],
    impact: [
      'Zero missed leads',
      'Faster response times',
      'Reduced front desk workload',
    ],
    accentColor: 'rgba(125,211,252,0.08)',
  },
  {
    number: '02',
    title: 'AI Admin Assistant',
    subtitle: 'An internal AI agent trained on company workflows to manage repetitive admin.',
    capabilities: [
      'Email triage and prioritisation',
      'CRM updates and data entry',
      'Invoice generation',
      'Document reminders',
      'Internal summaries and reporting',
    ],
    impact: [
      'Saves 10–25 hours per employee per week',
      'Reduces operational errors',
      'Improves internal communication',
    ],
    accentColor: 'rgba(56,189,248,0.06)',
  },
  {
    number: '03',
    title: 'AI Sales Support Agent',
    subtitle: 'An AI system that qualifies and nurtures leads before human involvement.',
    capabilities: [
      'Instant lead engagement',
      'Qualification questions and lead scoring',
      'Automated follow-up sequences',
      'Calendar booking for sales calls',
      'CRM integration and handoff',
    ],
    impact: [
      'Higher quality sales calls',
      'Improved close rates',
      'Reduced sales team workload',
    ],
    accentColor: 'rgba(125,211,252,0.08)',
  },
  {
    number: '04',
    title: 'Backend Operations Automation',
    subtitle: 'AI automation that connects and manages backend workflows.',
    capabilities: [
      'CRM automation and management',
      'Accounting integrations',
      'Order processing automation',
      'Automated approvals and notifications',
      'Data syncing between systems',
    ],
    impact: [
      'Reduced operational workload',
      'Faster execution across teams',
      'Improved visibility for management',
    ],
    accentColor: 'rgba(56,189,248,0.06)',
  },
]

export default function SolutionsPage() {
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
        {/* Hero background image — tech/circuit board, full colour */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/solution.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.5,
            filter: 'brightness(0.65)',
          }}
        />
        {/* Gradient: dark left for text, image shows on the right */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.93) 0%, rgba(11,17,32,0.72) 45%, rgba(11,17,32,0.25) 100%)',
          }}
        />

        {/* Floating property data fragments background */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
          {[
            { top: '12%', left: '4%',  text: 'PRICE: $485,000' },
            { top: '38%', left: '78%', text: 'BEDS: 4 | BATHS: 3' },
            { top: '65%', left: '3%',  text: 'AI_QUALIFY: true' },
            { top: '20%', left: '68%', text: 'LEAD_SCORE: 94' },
            { top: '80%', left: '72%', text: 'APPT: 2024-03-15' },
            { top: '52%', left: '5%',  text: 'AUTO_FOLLOWUP: ON' },
            { top: '70%', left: '40%', text: 'SQ_FT: 2,840' },
            { top: '28%', left: '45%', text: 'STATUS: HOT_LEAD' },
          ].map((f, i) => (
            <span
              key={i}
              style={{
                position: 'absolute',
                top: f.top,
                left: f.left,
                fontSize: 10,
                fontFamily: 'ui-monospace, monospace',
                color: 'rgba(125,211,252,0.13)',
                letterSpacing: '0.08em',
                animation: `float ${5.5 + i * 0.6}s ease-in-out infinite`,
                animationDelay: `${i * 0.4}s`,
                whiteSpace: 'nowrap',
              }}
            >
              {f.text}
            </span>
          ))}
        </div>

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
              Solutions
            </p>
            {/* Digital decode/typing effect on hero title */}
            <h1
              className="font-extrabold text-white leading-tight max-w-3xl mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontFamily: 'ui-monospace, monospace' }}
            >
              <DecodeTitle text="AI solutions built for real business problems." />
            </h1>
            <p style={{ fontSize: 18, color: '#94a3b8', lineHeight: 1.75, maxWidth: 600 }}>
              AI should solve operational problems, not create more complexity. We build automation
              systems that remove the most time-consuming tasks from your business.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Solution Cards ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 48 }}>
              <p
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#7dd3fc',
                  marginBottom: 10,
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
                Our Products
              </p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff' }}>
                Four core AI products
              </h2>
            </div>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {solutions.map((sol, i) => (
              <AnimatedSection key={sol.number} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div
                  style={{
                    background: sol.accentColor,
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 20,
                    padding: '32px 36px',
                    backdropFilter: 'blur(12px)',
                    transition: 'transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(-3px)'
                    el.style.boxShadow = '0 8px 36px rgba(125,211,252,0.1)'
                    el.style.borderColor = 'rgba(125,211,252,0.2)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.transform = 'translateY(0)'
                    el.style.boxShadow = 'none'
                    el.style.borderColor = 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, marginBottom: 24 }}>
                    <span
                      style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 900,
                        color: 'rgba(125,211,252,0.25)',
                        lineHeight: 1,
                        flexShrink: 0,
                        fontFamily: 'ui-monospace, monospace',
                      }}
                    >
                      {sol.number}
                    </span>
                    <div>
                      <h2
                        style={{
                          fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                          fontWeight: 800,
                          color: '#ffffff',
                          marginBottom: 6,
                        }}
                      >
                        {sol.title}
                      </h2>
                      <p style={{ fontSize: 14, fontWeight: 600, color: '#7dd3fc' }}>{sol.subtitle}</p>
                    </div>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                      gap: 32,
                    }}
                  >
                    {/* Capabilities */}
                    <div>
                      <h3
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#7dd3fc',
                          marginBottom: 14,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        <span style={{ flex: 1, height: 1, background: 'rgba(125,211,252,0.2)' }} />
                        Capabilities
                        <span style={{ flex: 1, height: 1, background: 'rgba(125,211,252,0.2)' }} />
                      </h3>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {sol.capabilities.map(cap => (
                          <li
                            key={cap}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 10,
                              fontSize: 13,
                              color: '#94a3b8',
                              lineHeight: 1.6,
                            }}
                          >
                            <span
                              style={{
                                flexShrink: 0,
                                marginTop: 5,
                                width: 5,
                                height: 5,
                                borderRadius: '50%',
                                background: '#7dd3fc',
                              }}
                            />
                            {cap}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Impact */}
                    <div>
                      <h3
                        style={{
                          fontSize: 10,
                          fontWeight: 700,
                          letterSpacing: '0.12em',
                          textTransform: 'uppercase',
                          color: '#7dd3fc',
                          marginBottom: 14,
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                      >
                        <span style={{ flex: 1, height: 1, background: 'rgba(125,211,252,0.2)' }} />
                        Impact
                        <span style={{ flex: 1, height: 1, background: 'rgba(125,211,252,0.2)' }} />
                      </h3>
                      <ul style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {sol.impact.map(imp => (
                          <li
                            key={imp}
                            style={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              gap: 10,
                              fontSize: 13,
                              fontWeight: 600,
                              color: '#ffffff',
                              lineHeight: 1.6,
                            }}
                          >
                            <span
                              style={{
                                flexShrink: 0,
                                marginTop: 5,
                                width: 5,
                                height: 5,
                                borderRadius: '50%',
                                background: '#7dd3fc',
                              }}
                            />
                            {imp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection>
            <div style={{ textAlign: 'center', marginTop: 56 }}>
              <p style={{ color: '#94a3b8', marginBottom: 20, fontSize: 15 }}>
                Not sure which solution is right for you? Book a free consultation and we will
                identify the highest-impact opportunities for your business.
              </p>
                <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}
