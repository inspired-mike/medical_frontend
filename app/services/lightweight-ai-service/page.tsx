'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import Particles from '@/components/ui/Particles'
import SectionHeading from '@/components/ui/SectionHeading'
import Image from 'next/image'

export default function AIAutomationsPage() {
  const features = [
    { 
      title: 'AI Receptionist & Virtual Front Desk', 
      desc: 'A 24/7 digital front office that handles inbound enquiries and ensures every interaction is captured and responded to instantly.',
      core: [
        'Answers inbound calls and messages using natural voice AI',
        'Captures and screens enquiry details at first contact',
        'Builds a pre-consultation brief so your team arrives prepared',
        'Books consultations directly into your calendar'
      ],
      impact: [
        'No enquiry goes unanswered, regardless of time or volume',
        'Every enquiry is instantly captured, logged, and routed to the right person',
        'Clients experience a professional first impression from first contact',
        'Your team focuses on delivery, not fielding calls and messages'
      ],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
    },
    { 
      title: 'AI Admin Assistant', 
      desc: 'A private productivity agent that handles the repetitive admin keeping your team from their most important work.',
      core: [
        'Manages your inbox and drafts contextual responses for your review',
        'Flags overdue tasks and pending items before they become problems',
        'Automates invoice creation, sending, and follow-up',
        'Generates internal summaries via your preferred channel'
      ],
      impact: [
        'Standardises how routine work is handled across your business',
        'Eliminates the admin overhead that quietly costs your business every day',
        'Inbox stays managed, records stay current, invoices go out on time',
        'Your team can focus on billable, high-value work'
      ],
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a10 10 0 1 0 10 10H12V2z"></path><path d="M12 12L2.1 12.1"></path><path d="M12 12l9.9-0.1"></path><path d="M12 12l0 10"></path></svg>
    }
  ]

  return (
    <div className="bg-[#030712] min-h-screen text-white">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden border-b border-white/5">
        {/* Background Image */}
        <Image
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1920&q=80"
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
              Tier 1: <span className="text-accent">Lightweight AI Services</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto">
              Designed to eliminate repetitive, time-consuming tasks that slow you down. These solutions help you operate more efficiently, present more professionally, and focus on the work that matters most.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold backdrop-blur-sm">
                <span>
                  <span className="text-white">Day-One </span>
                  <span className="text-accent">Impact</span>
                </span>
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
              label="Capabilities"
              title="What's included in Tier 1"
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
              <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 blur-[120px] -mr-48 -mt-48" />
              
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Reclaim your time.</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Automate repetitive work and start seeing results fast. Let&apos;s find your quick wins.
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
