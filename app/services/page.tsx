import AnimatedBeam from '@/components/ui/AnimatedBeam'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import TierCard from '@/components/ui/TierCard'

const tiers = [
  {
    tag: 'Tier 1',
    badge: 'Quick Wins',
    title: 'Lightweight AI',
    tagline: 'Quick wins that deliver immediate efficiency gains.',
    href: '/services/lightweight-ai-service',
    items: [
      '24/7 Virtual Receptionist',
      'Client Intake & Conflict Screening',
      'Enquiry Capture & Routing',
      'Smart Appointment Coordination',
    ],
    bestFor: 'Businesses seeking immediate efficiency improvements.',
    featured: false,
    cta: 'Get Started →',
  },
  {
    tag: 'Tier 2',
    badge:'Integration',
    title: 'Heavyweight AI',
    tagline: 'Strategic AI implementations that transform operations.',
    href: '/services/heavyweight-ai-service',
    items: [
      'CRM Integration & Automation',
      'End-to-End Workflow Automation',
      'Audit Trails and Compliance Logging',
      'Multi-Department Sync',
    ],
    bestFor: 'Businesses ready to scale operations with automation.',
    featured: false,
    cta: 'Get Started →',
  },
  {
    tag: 'Tier 3',
    badge: 'Enterprise',
    title: 'Custom AI',
    tagline: 'Fully bespoke AI solutions built around the organisation.',
    href: '/services/custom-weight-ai-service',
    items: [
      'Institutional Knowledge & Precedent Retrieval',
      'Custom AI Models & Logic',
      'White Glove Support',
      'Secure Private Infrastructure',
    ],
    bestFor: 'Businesses pursuing long-term operational transformation.',
    featured: false,
    cta: "Let's Talk →",
  },
]

export default function ServicesPage() {
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
        {/* Hero background image — modern architecture, full colour */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/hero/service.png"
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
        {/* Gradient: text-side dark, image-side visible */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(90deg, rgba(11,17,32,0.92) 0%, rgba(11,17,32,0.7) 45%, rgba(11,17,32,0.22) 100%)',
          }}
        />

        <div className="container relative" style={{ zIndex: 1 }}>
          {/* Drop-from-above animation on each hero element with staggered delays */}
          <p
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#7dd3fc', animation: 'drop-from-above 0.45s ease 0.15s both' }}
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
            Services
          </p>
          <h1
            className="font-extrabold text-white leading-tight max-w-3xl mb-5"
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              animation: 'drop-from-above 0.5s ease 0.3s both',
            }}
          >
            Choose the right level of{' '}
            <span style={{ color: '#7dd3fc' }}>AI transformation.</span>
          </h1>
          <p
            style={{
              fontSize: 18,
              color: '#94a3b8',
              lineHeight: 1.75,
              maxWidth: 600,
              animation: 'drop-from-above 0.45s ease 0.45s both',
            }}
          >
            From targeted automation fixes to complete operational overhauls — our three service
            tiers match where your business is and where you want to go.
          </p>
        </div>
      </section>

      {/* ── Service Tiers ── */}
      <section className="section">
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
                Service Tiers
              </p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff' }}>
                Three tiers.{' '}
                <span style={{ color: '#7dd3fc' }}>One goal.</span>
              </h2>
              <p style={{ fontSize: 16, color: '#94a3b8', maxWidth: 520, margin: '12px auto 0' }}>
                Every tier is designed to deliver measurable ROI. We recommend starting with a free
                consultation to identify the right fit.
              </p>
            </div>
          </AnimatedSection>

          {/* Tier cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 24,
              alignItems: 'start',
            }}
          >
            {tiers.map((tier, i) => (
              <AnimatedSection key={tier.title} delay={(((i % 3) + 1) as 1 | 2 | 3)}>
                <TierCard {...tier} featured={tier.tag === 'Tier 2'} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── Animated Beam Integration Viz ── */}
      <section className="section section--alt">
        <div className="container">
          <AnimatedSection>
            <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
                Integrations
              </p>
              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)', fontWeight: 800, color: '#ffffff', marginBottom: 12 }}>
                How AI connects your tools
              </h2>
              <p style={{ fontSize: 16, color: '#94a3b8', maxWidth: 500, margin: '0 auto' }}>
                IMPACKTA AI sits at the centre of your operations, connecting and automating the
                tools you already use.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={1}>
            <AnimatedBeam />
          </AnimatedSection>

          <AnimatedSection delay={2}>
            <div style={{ textAlign: 'center', marginTop: 56 }}>
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
