'use client'

import { useState } from 'react'
import AnimatedSection from './AnimatedSection'
import Button from './Button'
import SectionHeading from './SectionHeading'

const faqs = [
  {
    q: "How fast can you deliver a custom AI system?",
    a: "Most projects are live within 2-4 weeks. For more complex builds, we can often have a proof of concept running in under a week, allowing you to see it in action before committing to the full rollout."
  },
  {
    q: "How does pricing work?",
    a: "It depends entirely on what you need. After our discovery call, we'll put together a custom pricing structure that fits your project scope and the specific outcomes you're looking for."
  },
  {
    q: "Do I need to change my current software or retrain my staff?",
    a: "No. We plug directly into your existing systems and workflows. Our goal is to reduce friction—not create more by forcing you to adopt new software."
  },
  {
    q: "What do you need from us to start building?",
    a: "We just need access to your tools, any existing training materials or SOPs, and ideally a few examples of how your best people currently handle the processes we are automating."
  },
  {
    q: "Do you provide ongoing support?",
    a: "Absolutely. That's what our managed service covers—fixing bugs, making adjustments, swapping tools, and ensuring everything runs smoothly 24/7. We are your long-term partner, not a one-and-done shop."
  },
  {
    q: "How do we know the AI is accurate?",
    a: "Every system we build includes a full, auditable data trail. You can see exactly where each piece of information came from without having to re-check the sources yourself."
  }
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="section">
      <div className="container max-w-4xl">
        <AnimatedSection>
          <SectionHeading
            label="FAQs"
            title={`Common <span class="text-accent">questions</span>`}
            subtitle="Everything you need to know about working with IMPACKTA AI."
            center
          />
        </AnimatedSection>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            return (
              <AnimatedSection key={i} delay={(((i % 4) + 1) as 1 | 2 | 3 | 4)}>
                <div 
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  style={{
                    background: 'rgba(255,255,255,0.02)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    borderRadius: 16,
                    padding: '24px 32px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: isOpen ? '0 8px 32px rgba(0,0,0,0.2)' : 'none',
                    borderColor: isOpen ? 'rgba(125,211,252,0.3)' : 'rgba(255,255,255,0.08)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16 }}>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: isOpen ? '#7dd3fc' : '#ffffff', margin: 0, transition: 'color 0.2s' }}>
                      {faq.q}
                    </h3>
                    <div 
                      style={{ 
                        color: isOpen ? '#7dd3fc' : '#94a3b8',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease, color 0.2s'
                      }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                        <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                  <div 
                    style={{
                      maxHeight: isOpen ? 500 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.4s ease',
                    }}
                  >
                    <p style={{ fontSize: 14, color: '#94a3b8', lineHeight: 1.7, marginTop: 16, marginBottom: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            )
          })}
        </div>

        <AnimatedSection>
          <div className="mt-16 text-center">
            <h3 style={{ fontSize: 20, fontWeight: 700, color: '#ffffff', marginBottom: 16 }}>
              Got more questions?
            </h3>
            <p style={{ fontSize: 15, color: '#94a3b8', marginBottom: 24 }}>
              Schedule a call with our Founders to clear any doubts.
            </p>
            <Button href="https://calendly.com/michael-impackta?background_color=0b1120&text_color=ffffff&primary_color=7dd3fc&hide_gdpr_banner=1" variant="primary" size="lg" className="btn-shimmer">
              Book a Free AI Consultation
            </Button>
            <p style={{ fontSize: 14, color: '#64748b', marginTop: 16 }}>
              Not ready for a call? <a href="/contact" style={{ color: '#7dd3fc', textDecoration: 'none' }}>Send us a message</a>
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
