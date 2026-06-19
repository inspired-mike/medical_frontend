'use client'

import React from 'react'
import Image from 'next/image'
import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import SectionHeading from '@/components/ui/SectionHeading'
import Particles from '@/components/ui/Particles'

export default function CustomAIPage() {
  const features = [
    { 
      title: 'AI Transformation Programme', 
      desc: 'A tailored AI transformation roadmap, delivered from strategy through to implementation.',
      core: [
        'Strategic Roadmap — A phased implementation plan aligned to your objectives, workflows, and regulatory requirements',
        'Custom Knowledge Systems — Secure, private AI trained on your internal documentation, SOPs, and operational data',
        'System Architecture & Integration — Design and deployment of a connected AI infrastructure that works with your existing tools',
        'Ongoing Support & Optimisation — Dedicated oversight to monitor performance, refine system logic, and drive continuous improvement'
      ],
      impact: [
        'Embeds AI into core business operations, not as a tool but as infrastructure.',
        'Institutional knowledge becomes a system asset, not a people dependency',
        'Improves speed, accuracy, and consistency across every area of the business',
        'Enables scalable growth without increasing operational complexity'
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
          src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80"
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
            <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Strategic Transformation | Bespoke Build | Long-Term Partnership
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight mx-auto max-w-4xl">
              Tier 3: <span className="text-accent">Custom AI Services</span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto">
              A fully bespoke programme built around your business. We map your operations, identify what is slowing you down, and implement secure, high-impact systems that improve efficiency, accuracy, and scalability across the board.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
                Book a Free AI Consultation
              </Button>
              <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-sm font-bold backdrop-blur-sm">
                 Bespoke <span className="text-accent">Engineering</span>
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
              label="Innovation"
              title="What's included in Tier 3"
             center
            />
          </AnimatedSection>

          <div className="max-w-4xl mx-auto mt-16">
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
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">{f.desc}</p>

                  <div className="text-left mb-6 min-h-[180px]">
                    <h4 className="text-white text-sm font-semibold mb-3">Core Components:</h4>
                    <ul className="space-y-3">
                      {f.core.map((capability, idx) => {
                        const colonIndex = capability.indexOf(':');
                        if (colonIndex > -1) {
                          const title = capability.substring(0, colonIndex);
                          const text = capability.substring(colonIndex + 1);
                          return (
                            <li key={idx} className="flex items-start text-sm text-slate-400">
                              <span className="text-accent mr-3 font-bold mt-0.5">✓</span>
                              <span className="leading-snug"><strong className="text-white">{title}:</strong>{text}</span>
                            </li>
                          );
                        }
                        return (
                          <li key={idx} className="flex items-start text-sm text-slate-400">
                            <span className="text-accent mr-3 font-bold mt-0.5">✓</span>
                            <span className="leading-snug">{capability}</span>
                          </li>
                        );
                      })}
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
                <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Build the future together.</h2>
                <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Built from the ground up around your business. No shortcuts, no generic tools — just systems that work.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-6">
                  <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer px-12 py-5 text-lg">
                    Start Your Transformation
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
