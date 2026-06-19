'use client'

import AnimatedSection from '@/components/ui/AnimatedSection'
import Button from '@/components/ui/Button'
import Particles from '@/components/ui/Particles'
import Image from 'next/image'
import React, { ChangeEvent, useState } from 'react'

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null)
  const [focused, setFocused] = useState<string | null>(null)



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://formspree.io/f/xgoppvny', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      if (response.ok) {
        setLoading(false)
        setToast({ message: "Message sent successfully! We'll respond within 24 hours.", type: 'success' })
        setForm({ firstName: '', lastName: '', phone: '', email: '', message: '' })
        setTimeout(() => setToast(null), 3000)
      } else {
        setLoading(false)
        setToast({ message: 'Failed to send message. Please try again.', type: 'error' })
        setTimeout(() => setToast(null), 5000)
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setLoading(false)
      setToast({ message: 'Error sending message. Please try again.', type: 'error' })
      setTimeout(() => setToast(null), 5000)
    }
  }

  const isFloating = (field: string) => focused === field || form[field as keyof typeof form] !== ''

  return (
    <div className="bg-[#030712] min-h-screen text-white pt-[72px] overflow-x-hidden">
      {/* ── Hero ── */}
      <section className="relative flex min-h-[40vh] sm:min-h-[50vh] lg:min-h-[60vh] items-center justify-center overflow-hidden border-b border-white/5">
        <Image
          src="https://images.unsplash.com/photo-1520607162600-c00c5eefffa5?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          className="object-cover opacity-[0.18] filter brightness-[0.45]"
        />
        <Particles className="absolute inset-0 z-0" count={40} />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            opacity: 0.04,
            backgroundImage:
              'linear-gradient(rgba(125,211,252,1) 1px, transparent 1px), linear-gradient(90deg, rgba(125,211,252,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="pointer-events-none absolute inset-0 z-[2]"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 50% 40%, rgba(125,211,252,0.1) 0%, transparent 75%)',
          }}
        />

        <div className="w-full max-w-5xl mx-auto relative z-10 px-4 sm:px-6 py-16 sm:py-20 lg:py-28 text-center">
          <AnimatedSection>
            <p className="text-accent font-bold text-xs uppercase tracking-[0.3em] mb-6 flex items-center justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Contact Us
            </p>
            <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight mx-auto max-w-4xl">
              Get in{' '}
              <span className="text-accent underline underline-offset-8 decoration-accent/20">
                Touch
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-2xl mb-12 leading-relaxed mx-auto">
              Have a question or ready to get started? We&apos;d love to hear from you.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Form Section ── */}
      <section className="py-12 sm:py-16 lg:py-24 relative">
        {/* Ambient glow blobs */}
        <div
          className="pointer-events-none absolute top-32 left-1/4 w-[500px] h-[500px] rounded-full opacity-[0.04] blur-[120px]"
          style={{ background: 'radial-gradient(circle, #7dd3fc, transparent)' }}
        />
        <div
          className="pointer-events-none absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-[0.05] blur-[100px]"
          style={{ background: 'radial-gradient(circle, #f97316, transparent)' }}
        />

        {/* KEY FIX: w-full + overflow-hidden on the container */}
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6">
          {/* KEY FIX: w-full on grid, items-start so sidebar doesn't stretch */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 w-full items-start">

            {/* ── FORM CARD ── KEY FIX: min-w-0 prevents grid blowout on mobile */}
            <div className="lg:col-span-2 w-full min-w-0" id="message-form">
              <AnimatedSection delay={1}>
                <div
                  className="p-5 sm:p-8 lg:p-10 bg-[#07101f]/90 border border-white/[0.07] rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden w-full"
                  style={{
                    boxShadow: '0 0 0 1px rgba(125,211,252,0.06), 0 32px 64px -16px rgba(0,0,0,0.5)',
                  }}
                >
                  {/* Top gradient accent line */}
                  <div
                    className="absolute top-0 left-12 right-12 h-px"
                    style={{
                      background:
                        'linear-gradient(90deg, transparent, rgba(125,211,252,0.4), transparent)',
                    }}
                  />

                  {/* Toast Notification */}
                  {toast && (
                    <div
                      className={`mb-6 p-4 rounded-lg border flex items-center gap-3 animate-in fade-in slide-in-from-top-2 ${
                        toast.type === 'success'
                          ? 'bg-green-500/10 border-green-500/30 text-green-400'
                          : 'bg-red-500/10 border-red-500/30 text-red-400'
                      }`}
                    >
                      {toast.type === 'success' ? (
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                      <span className="text-sm font-medium">{toast.message}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">

                    {/* Row: First Name + Last Name */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {(['firstName', 'lastName'] as const).map((field) => (
                        <div key={field} className="relative group">
                          <label
                            className={`absolute left-5 transition-all duration-200 pointer-events-none z-10 font-semibold
                              ${isFloating(field)
                                ? 'top-2.5 text-[10px] uppercase tracking-widest text-accent'
                                : 'top-[50%] -translate-y-1/2 text-sm text-white/30'
                              }`}
                          >
                            {field === 'firstName' ? <>First Name <span className="text-accent">*</span></> : 'Last Name'}
                          </label>
                          <input
                            required={field === 'firstName'}
                            type="text"
                            name={field}
                            value={form[field]}
                            onChange={handleChange}
                            onFocus={() => setFocused(field)}
                            onBlur={() => setFocused(null)}
                            className="w-full pt-7 pb-3 px-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base sm:text-sm
                              focus:outline-none focus:border-accent/50 focus:bg-white/[0.05]
                              group-hover:border-white/[0.15] transition-all duration-200"
                          />
                          <span
                            className={`absolute bottom-0 left-5 right-5 h-[1.5px] rounded-full bg-gradient-to-r from-accent to-sky-400
                              transition-transform duration-300 origin-left ${focused === field ? 'scale-x-100' : 'scale-x-0'}`}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Phone + Email */}
                    {(['phone', 'email'] as const).map((field) => (
                      <div key={field} className="relative group">
                        <label
                          className={`absolute left-5 transition-all duration-200 pointer-events-none z-10 font-semibold
                            ${isFloating(field)
                              ? 'top-2.5 text-[10px] uppercase tracking-widest text-accent'
                              : 'top-[50%] -translate-y-1/2 text-sm text-white/30'
                            }`}
                        >
                          {field === 'email' ? <>Email <span className="text-accent">*</span></> : 'Phone'}
                        </label>
                        <input
                          required={field === 'email'}
                          type={field === 'email' ? 'email' : 'tel'}
                          name={field}
                          value={form[field]}
                          onChange={handleChange}
                          onFocus={() => setFocused(field)}
                          onBlur={() => setFocused(null)}
                          className="w-full pt-7 pb-3 px-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base sm:text-sm
                            focus:outline-none focus:border-accent/50 focus:bg-white/[0.05]
                            group-hover:border-white/[0.15] transition-all duration-200"
                        />
                        <span
                          className={`absolute bottom-0 left-5 right-5 h-[1.5px] rounded-full bg-gradient-to-r from-accent to-sky-400
                            transition-transform duration-300 origin-left ${focused === field ? 'scale-x-100' : 'scale-x-0'}`}
                        />
                      </div>
                    ))}

                    {/* Message */}
                    <div className="relative group">
                      <label
                        className={`absolute left-5 transition-all duration-200 pointer-events-none z-10 font-semibold
                          ${isFloating('message')
                            ? 'top-3 text-[10px] uppercase tracking-widest text-accent'
                            : 'top-5 text-sm text-white/30'
                          }`}
                      >
                        Write a message
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused(null)}
                        rows={5}
                        /* KEY FIX: text-base (16px) prevents iOS auto-zoom */
                        className="w-full pt-8 pb-4 px-5 bg-white/[0.03] border border-white/[0.08] rounded-2xl text-white text-base sm:text-sm
                          focus:outline-none focus:border-accent/50 focus:bg-white/[0.05]
                          group-hover:border-white/[0.15] transition-all duration-200 resize-none"
                      />
                      <span
                        className={`absolute bottom-0 left-5 right-5 h-[1.5px] rounded-full bg-gradient-to-r from-accent to-sky-400
                          transition-transform duration-300 origin-left ${focused === 'message' ? 'scale-x-100' : 'scale-x-0'}`}
                      />
                      <span className="absolute bottom-4 right-5 text-[10px] text-white/20 tabular-nums select-none">
                        {form.message.length}
                      </span>
                    </div>

                    {/* Submit */}
                    <div className="space-y-4 pt-1">
                      <button
                        type="submit"
                        disabled={loading}
                        className="relative w-full py-[18px] rounded-2xl font-bold text-sm tracking-wide overflow-hidden group transition-all duration-300 disabled:opacity-60"
                        style={{
                          background: 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 50%, #0ea5e9 100%)',
                          color: '#030712',
                        }}
                      >
                        {/* Shimmer sweep */}
                        <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12 pointer-events-none" />
                        <span className="relative flex items-center justify-center gap-2.5">
                          {loading ? (
                            <>
                              <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              Send Enquiry
                              <svg
                                className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                              </svg>
                            </>
                          )}
                        </span>
                      </button>

                      <p className="text-xs text-slate-500 text-center">
                        By submitting, you agree to our{' '}
                        <a href="/privacy" className="text-accent hover:underline underline-offset-4 transition-colors">
                          Privacy
                        </a>{' '}
                        <a href="/terms" className="text-accent hover:underline underline-offset-4 transition-colors">
                          Policy
                        </a>
                        .
                      </p>
                    </div>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* ── SIDEBAR ── KEY FIX: w-full min-w-0 so it doesn't overflow on mobile */}
            <div className="lg:col-span-1 w-full min-w-0 border border-[#f97316]/30 p-5 sm:p-8 rounded-[1.5rem] sm:rounded-[2rem] bg-[#0b1120]/50 space-y-8 lg:space-y-12 h-fit">
              <AnimatedSection delay={2}>
                <div className="space-y-10">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Prefer to talk?</h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      If you&apos;re ready to discuss your project in detail, book a free consultation with our team.
                    </p>
                    <Button
                      variant="primary"
                      className="w-full py-4 text-center justify-center font-bold"
                      href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1"
                    >
                      Book a Consultation
                    </Button>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white mb-4">Email us directly</h4>
                    <a
                      href="mailto:contact@impackta.ai"
                      className="text-accent hover:underline text-sm break-all font-medium transition-colors block"
                    >
                      contact@impackta.ai
                    </a>
                  </div>

                  <div className="px-4 py-3 rounded-xl border border-white/10 bg-white/5">
                    <p className="text-[10px] font-medium whitespace-nowrap">
                      <span className="text-[#10b981]">Response time:</span> We typically respond within 24 hours.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}