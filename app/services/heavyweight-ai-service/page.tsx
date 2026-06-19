'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import Particles from '@/components/ui/Particles'
import SectionHeading from '@/components/ui/SectionHeading'
import Image from 'next/image'

export default function AISystemsPage() {
  const features = [
    { 
      title: 'AI Client Acquisition System', 
      desc: 'A fully automated system designed to generate, qualify, and convert high-value clients without manual follow-up.',
      core: [
        'Identifies ideal client profiles and key decision-makers',
        'Personalised outreach across professional channels (Email, LinkedIn)',
        'Behaviour-based follow-ups that adapt to engagement levels',
        'Automated qualification and booking of high-value consultations'
      ],
      impact: [
        'Creates a consistent, predictable lead pipeline that runs in the background.',
        'Reduces reliance on referrals, paid advertising, or manual outreach',
        'Increases conversion from enquiry to client through timely, personalised follow-up',
        'Frees your team from prospecting so they can focus on closing and delivering'
      ],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
    },
    {
      title: 'AI Operations System',
      desc: 'A unified system that connects your tools and workflows — so decisions, approvals, and data move with minimal human intervention.',
      core: [
        'Connects and automates workflows across multiple departments simultaneously',
        'Provides real-time visibility and control over operations across your business',
        'Ensures seamless data flow between departments and systems',
        'AI-assisted reporting and decision support for leadership'
      ],
      impact: [
        'Approvals move without chasing, data syncs without manual entry',
        'Teams operate with accurate, up-to-date information at all times',
        'Operational bottlenecks are resolved automatically',
        'Scales with your business without adding headcount or complexity'
      ],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 4 23 10 17 10"></polyline><polyline points="1 20 1 14 7 14"></polyline><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path></svg>
    },
  ]

  return (
    <div className="bg-[#030712] min-h-screen text-white">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.22] filter brightness-[0.45]"
          aria-hidden="true"
        />

        {/* Particles */}
        <Particles className="absolute inset-0 z-0" count={60} />

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

        <div className="container relative z-10 px-6 mx-auto py-32 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight mx-auto max-w-4xl">
              Tier 2: <span className="text-accent">Heavyweight AI Services</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto">
              Built to transform how your business acquires clients and operates day-to-day. We implement intelligent systems that remove bottlenecks, sharpen execution, and enable scalable growth without increasing overhead.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold backdrop-blur-sm">
                 End-to-End <span className="text-accent">Connectivity</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 relative">
        <div className="container px-6 mx-auto">
          <AnimatedSection>
            <SectionHeading 
              label="Architecture"
              title="What's included in Tier 2"
              center
            />
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
            {features.map((f, i) => (
              <AnimatedSection key={i} delay={((i % 3) + 1) as 1 | 2 | 3 | 4 | 5} className="h-full">
                <div
                  className="group p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-accent/30 hover:bg-white/[0.04] transition-all duration-500 h-full relative overflow-hidden"
                  style={{ display: 'grid', gridTemplateRows: 'auto auto auto auto auto 1fr' }}
                >
                  <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-all" />
                  <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 group-hover:scale-110 transition-transform duration-500">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{f.desc}</p>

                  <div className="text-left mb-6 min-h-[160px]">
                    <h4 className="text-white text-sm font-semibold mb-3">Core Capabilities:</h4>
                    <ul className="space-y-3">
                      {f.core.map((capability, idx) => (
                        <li key={idx} className="flex items-start text-sm text-slate-400">
                          <span className="text-accent mr-3 font-bold mt-0.5">✓</span>
                          <span className="leading-snug">{capability}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="text-left pt-6 border-t border-white/5">
                    <h4 className="text-white text-sm font-semibold mb-3">Impact:</h4>
                    <ul className="space-y-2">
                      {f.impact.map((point, idx) => (
                        <li key={idx} className="flex items-start text-sm text-blue-200">
                          <span className="bg-blue-400 mr-3 mt-2 block h-1.5 w-1.5 rounded-full shrink-0" />
                          <span className="leading-snug">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#050a18] relative overflow-hidden">
        <div className="container px-6 mx-auto">
          <AnimatedSection>
            <div className="p-12 md:p-24 rounded-[4rem] bg-[#0b1120] border border-white/10 text-center relative overflow-hidden shadow-2xl">
              {/* Immersive Background Image */}
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1920&q=80"
                alt=""
                fill
                className="object-cover opacity-10 filter grayscale brightness-[0.5]"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-accent/5" />
              <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] -ml-48 -mt-48" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Scale with confidence.</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Build the systems you need to scale without operational strain.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer px-12 py-5 text-lg">
                    Book a Free AI Consultation
                  </Button>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
