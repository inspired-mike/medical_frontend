'use client'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import FaqSection from '@/components/ui/FaqSection'
import LiveCounter from '@/components/ui/LiveCounter'
import Particles from '@/components/ui/Particles'
import ProblemRow from '@/components/ui/ProblemRow'
import SectionHeading from '@/components/ui/SectionHeading'
import StepItem from '@/components/ui/StepItem'
import Link from 'next/link'
import { useRef } from 'react'

const problemRows = [
  {
    problem: 'Missed calls and lost enquiries',
    solution: 'AI Receptionist answers 24/7 — zero missed leads, instant response',
  },
  {
    problem: 'Repetitive admin work consuming your team',
    solution: 'AI Admin Assistant handles the repetitive work so your team focuses on what actually matters',
  },
  {
    problem: 'No visibility into what\'s working',
    solution: 'AI reporting gives you real-time insight into performance across your business',
  },
  {
    problem: 'Disconnected software systems creating silos',
    solution: 'Connected AI systems sync your tools and data automatically.',
  },
  {
    problem: 'Constant manual follow-ups falling through cracks',
    solution: 'Automated follow-up sequences, fully personalised at scale',
  },
  {
    problem: 'Scaling requires hiring more people',
    solution: 'AI systems scale your capacity without increasing your headcount',
  },
]

const servicesRaw = [
  {
    tag: 'Tier 1',
    badge: 'Rapid Deployment',
    title: 'Lightweight AI',
    href: '/services/lightweight-ai-service',
    tagline:
      'Quick wins that deliver immediate efficiency gains. We identify and automate your bottlenecks fast.',
    icon: '⚡',
    stats: [
      { value: '24/7', label: 'Availability' },
      { value: 'Always', label: 'Handled' },
      { value: 'Instant', label: 'Response' },
    ],
    features: [
      '24/7 Virtual Receptionist',
      'Client Intake & Conflict Screening',
      'Enquiry Capture & Routing',
      'Smart Appointment Coordination'
    ],
    featured: false,
    img: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Tier 2',
    title: 'Heavyweight AI',
    href: '/services/heavyweight-ai-service',
    tagline: 'Intelligent systems built to scale with your business and streamline how it operates',
    icon: '◈',
    stats: [
      { value: 'Scalable', label: 'Output' },
      { value: 'Process', label: 'Orchestration' },
      { value: 'Unified', label: 'Systems' },
    ],
    features: [
      'CRM Integration & Automation',
      'Touchless Workflows',
      'Audit Trails and Compliance Logging',
      'Multi-Department Sync'
    ],
    featured: true,
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Tier 3',
    badge: 'Enterprise',
    title: 'Custom AI',
    tagline: 'Fully bespoke AI solutions built around your organisation.',
    icon: '◎',
    stats: [
      { value: '100%', label: 'Bespoke' },
      { value: 'Full', label: 'Integration' },
      { value: 'Always', label: 'Supported' },
    ],
    features: [
      'Institutional Knowledge & Precedent Retrieval',
      'Custom AI Models & Logic',
      'White Glove Support',
      'Secure Private Infrastructure'
    ],
    featured: false,
    href: '/services/custom-weight-ai-service',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
  },
]

const services = servicesRaw.map(s => ({
  ...s,
  href: s.href || `/services/${s.title.toLowerCase().replace(/\s+/g, '-')}`
}))

const whoItsFor = [
  {
    title: 'Founders & Independent Professionals',
    description: 'Built for those running lean. We automate repetitive admin and day-to-day tasks so you can focus on high-value work that drives your business forward.',
    image: '/images/founders.png'
  },
  {
    title: 'High-Growth Ventures',
    description: 'For businesses outgrowing their processes. We replace manual bottlenecks with intelligent systems that allow your team to scale output without increasing workload or burnout.',
    image: '/images/ventures.png'
  },
  {
    title: 'Established Firms & Corporate Teams',
    description: 'For organisations that need more than basic tools. We design secure, private AI systems that protect your data while modernising how your operations run at scale.',
    image: '/images/corporate.png'
  }
]

const steps = [
  {
    num: '01',
    title: 'Discovery & AI Audit',
    body: 'We review your workflows, identify inefficiencies, and pinpoint the highest-impact automation opportunities.',
  },
  {
    num: '02',
    title: 'Solution Design',
    body: 'We design a tailored AI system aligned to your processes, tools, and business goals.',
  },
  {
    num: '03',
    title: 'System Access and Setup',
    body: 'We securely connect to your existing systems and gather everything needed to build effectively.',
  },
  {
    num: '04',
    title: 'Build & Integration',
    body: 'Your system is built and integrated into your existing workflows with minimal disruption.',
  },
  {
    num: '05',
    title: 'Validation & Launch',
    body: 'Your system is rigorously tested and only deployed into your live environment once it meets our performance standards.',
  },
  {
    num: '06',
    title: 'Optimisation & Scaling',
    body: 'We monitor performance and refine your system as required to support your business as it evolves.',
  },
]

export default function HomePage() {
  const magnetRef = useRef<HTMLDivElement>(null)

  function handleMagnet(e: React.MouseEvent<HTMLDivElement>) {
    const el = magnetRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const dx = (e.clientX - (rect.left + rect.width / 2)) * 0.3
    const dy = (e.clientY - (rect.top + rect.height / 2)) * 0.3
    el.style.transform = `translate(${dx}px, ${dy}px)`
  }

  function resetMagnet() {
    if (magnetRef.current) magnetRef.current.style.transform = 'translate(0, 0)'
  }

  return (
    <>
      {/* ── Hero ── */}
      <section
        className="relative flex min-h-screen items-center justify-center overflow-hidden"
        style={{ background: '#020617' }}
      >
        {/* Hero background — luxury real estate property, matches AI-for-RE theme */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/home.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            opacity: 0.22,
            filter: 'brightness(0.45)',
          }}
        />

        {/* Particles */}
        <Particles className="absolute inset-0 z-0" count={75} />

        {/* Grid overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(rgba(125,211,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow */}
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 50% 40%, rgba(125,211,252,0.11) 0%, transparent 70%)',
          }}
        />

        {/* Fluid gradient overlay — slow-moving abstract background */}
        <div
          className="pointer-events-none absolute inset-0 z-[3]"
          style={{
            background:
              'linear-gradient(135deg, rgba(125,211,252,0.06) 0%, rgba(56,189,248,0.04) 25%, transparent 50%, rgba(14,165,233,0.05) 75%, rgba(125,211,252,0.05) 100%)',
            backgroundSize: '400% 400%',
            animation: 'fluid-bg 18s ease infinite',
          }}
        />

        <div className="container relative z-10 py-36 text-center">
          {/* Industry cycling label */}
         
          {/* Main headline — word-by-word staggered slide-in */}
          <h1
            className="mx-auto max-w-4xl font-extrabold leading-tight text-white mb-6"
            style={{ fontSize: 'clamp(2.4rem, 6vw, 4.5rem)' }}
          >
            {(['AI', 'systems', 'that'] as const).map((word, i) => (
              <span
                key={word}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  animation: `word-slide-in 0.5s ease ${0.3 + i * 0.1}s forwards`,
                  marginRight: '0.28em',
                }}
              >
                {word}
              </span>
            ))}
            <span
              className="text-accent"
              style={{
                display: 'inline-block',
                opacity: 0,
                animation: 'word-slide-in 0.5s ease 0.6s forwards, glitch 0.45s ease 2.1s 1',
                marginRight: '0.28em',
              }}
            >
              eliminate
            </span>
            {(['repetitive', 'work.'] as const).map((word, i) => (
              <span
                key={word}
                style={{
                  display: 'inline-block',
                  opacity: 0,
                  animation: `word-slide-in 0.5s ease ${0.7 + i * 0.1}s forwards`,
                  marginRight: i === 1 ? 0 : '0.28em',
                }}
              >
                {word}
              </span>
            ))}
          </h1>

          {/* Sub */}
          <AnimatedSection delay={2}>
            <p
              className="mx-auto max-w-2xl leading-relaxed mb-10"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: '#94a3b8' }}
            >
              We design and deploy intelligent automation systems that remove manual admin,
              reduce operational costs, and allow your business to scale without increasing
              headcount.
            </p>
          </AnimatedSection>

          {/* CTAs */}
          <AnimatedSection delay={3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Magnetic hover button */}
              <div
                ref={magnetRef}
                onMouseMove={handleMagnet}
                onMouseLeave={resetMagnet}
                style={{ display: 'inline-block', transition: 'transform 0.2s ease' }}
              >
                <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1&background_color=0b1120&text_color=ffffff&primary_color=2563eb" variant="primary" size="lg" className="btn-shimmer">
                  Book a Free AI Consultation
                </Button>
              </div>
              <Button href="/services" variant="outline" size="lg">
                View Services →
              </Button>
            </div>
          </AnimatedSection>

          {/* Live counter */}
          <AnimatedSection delay={4}>
            <div className="mt-14 flex justify-center">
              <LiveCounter />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Problems (interactive) ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="The Problem"
              title={`Most growing businesses struggle with:`}
              subtitle="Hover each row to reveal the AI solution — every problem below has been solved for businesses just like yours."
              center
            />
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <div
              style={{
                maxWidth: 760,
                margin: '0 auto',
                borderTop: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {problemRows.map((row, i) => (
                <ProblemRow
                  key={i}
                  index={i}
                  problem={row.problem}
                  solution={row.solution}
                />
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <p
              className="text-center mt-10"
              style={{ color: '#94a3b8', fontSize: 14 }}
            >
              Our AI systems automate these processes so your team can focus on higher-value work.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services Overview ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Our Services"
              title={`Three tiers of <span class="text-accent">AI transformation</span>`}
              subtitle="Whether you need quick wins or a full operational overhaul, we have a service tier designed to match your ambition."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <Link
                  href={s.href}
                  style={{
                    textDecoration: 'none',
                    position: 'relative',
                    borderRadius: 20,
                    overflow: 'hidden',
                    minHeight: 520,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    border: s.featured
                      ? '1px solid rgba(125,211,252,0.4)'
                      : '1px solid rgba(255,255,255,0.1)',
                    boxShadow: s.featured ? '0 0 48px rgba(125,211,252,0.15)' : 'none',
                    transition: 'box-shadow 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement
                    const img = el.querySelector('img') as HTMLImageElement | null
                    if (img) img.style.transform = 'scale(1.07)'
                    el.style.boxShadow = '0 20px 56px rgba(125,211,252,0.22)'
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement
                    const img = el.querySelector('img') as HTMLImageElement | null
                    if (img) img.style.transform = 'scale(1)'
                    el.style.boxShadow = s.featured ? '0 0 48px rgba(125,211,252,0.15)' : 'none'
                  }}
                >
                  {/* Full-bleed background image */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.img}
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
                  {/* Dark gradient overlay — stronger at bottom */}
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background:
                        'linear-gradient(180deg, rgba(2,6,23,0.28) 0%, rgba(2,6,23,0.72) 50%, rgba(2,6,23,0.97) 100%)',
                      zIndex: 1,
                    }}
                  />

                  {/* Top row: icon + badge/arrow */}
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
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
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
                        {s.icon}
                      </span>
                      {s.featured && s.badge && (
                        <span
                          style={{
                            display: 'inline-block',
                            background: '#7dd3fc',
                            color: '#020617',
                            fontSize: 9,
                            fontWeight: 800,
                            letterSpacing: '0.1em',
                            textTransform: 'uppercase',
                            padding: '3px 10px',
                            borderRadius: 999,
                            animation: 'pulse-glow 2.5s ease-in-out infinite',
                            whiteSpace: 'nowrap',
                          }}
                        >
                          {s.badge}
                        </span>
                      )}
                    </div>
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        background: 'rgba(2,6,23,0.6)',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 16,
                        color: '#ffffff',
                        textDecoration: 'none',
                        flexShrink: 0,
                      }}
                    >
                      ↗
                    </div>
                  </div>

                  {/* Bottom content */}
                  <div style={{ position: 'relative', zIndex: 2, padding: '0 24px 20px' }}>
                    <p
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: '#7dd3fc',
                        marginBottom: 8,
                      }}
                    >
                      {s.tag}
                    </p>
                    <h3
                      style={{
                        fontSize: 'clamp(1.4rem, 2.5vw, 1.8rem)',
                        fontWeight: 800,
                        color: '#ffffff',
                        lineHeight: 1.2,
                        marginBottom: 8,
                        minHeight: 64,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      style={{
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.6)',
                        lineHeight: 1.6,
                        marginBottom: 16,
                        minHeight: 64,
                      }}
                    >
                      {s.tagline}
                    </p>
                    {/* Features List */}
                    <ul style={{ padding: 0, margin: '0 0 16px 0', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                      {(s as any).features?.map((f: string, i: number) => (
                        <li key={i} className="flex items-center gap-3 text-sm" style={{ color: 'rgba(255,255,255,0.85)' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#7dd3fc" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    {/* Stats row */}
                    <div
                      style={{
                        display: 'flex',
                        borderTop: '1px solid rgba(255,255,255,0.12)',
                        paddingTop: 16,
                      }}
                    >
                      {s.stats.map((stat: { value: string; label?: string }, si) => (
                        <div
                          key={stat.label ?? stat.value}
                          style={{
                            flex: 1,
                            textAlign: 'center',
                            borderRight:
                              si < s.stats.length - 1
                                ? '1px solid rgba(255,255,255,0.1)'
                                : 'none',
                            paddingRight: si < s.stats.length - 1 ? 10 : 0,
                            paddingLeft: si > 0 ? 10 : 0,
                          }}
                        >
                          <p
                            style={{
                              fontSize: 15,
                              fontWeight: 800,
                              color: '#ffffff',
                              lineHeight: 1.2,
                            }}
                          >
                            {stat.value}
                          </p>
                          {stat.label && (
                            <p
                              style={{
                                fontSize: 9,
                                fontWeight: 600,
                                letterSpacing: '0.08em',
                                textTransform: 'uppercase',
                                color: '#7dd3fc',
                                marginTop: 3,
                              }}
                            >
                              {stat.label}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Who It's For ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="Who It's For"
              title={`Built to support <span class="text-accent">every stage</span>`}
              subtitle="From solo founders to corporate teams — we tailor AI solutions to your stage, your workflow, and your ambitions."
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            {whoItsFor.map((w, i) => (
              <AnimatedSection key={w.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <div className="flex flex-col h-full rounded-[24px] overflow-hidden bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 group">
                  <div className="overflow-hidden relative h-48 sm:h-56 w-full">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617] to-transparent opacity-80 z-10" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={w.image} alt={w.title} className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow bg-[#050914]/40 backdrop-blur-md relative z-20">
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">{w.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed font-medium flex-grow">{w.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works (scroll-driven timeline) ── */}
      <section className="section">
        <div className="container">
          <AnimatedSection>
            <SectionHeading
              label="How It Works"
              title={`From first call to <span class="text-accent">live system</span> in weeks`}
              subtitle="Our process is clear, low-friction, and built for speed — so you see results as fast as possible."
              center
            />
          </AnimatedSection>

          <div className="max-w-xl mx-auto mt-2">
            {steps.map((s, i) => (
              <StepItem
                key={s.num}
                num={s.num}
                title={s.title}
                body={s.body}
                isLast={i === steps.length - 1}
              />
            ))}
          </div>

          <AnimatedSection>
            <div className="text-center mt-4">
              <Button href="https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── FAQs ── */}
      <FaqSection />
    </>
  )
}
