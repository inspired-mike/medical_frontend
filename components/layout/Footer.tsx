'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-glass-border pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <p className="text-xl font-extrabold mb-4">
              IMPACKTA <span className="text-accent">AI</span>
            </p>
            <p className="text-sm text-muted leading-relaxed max-w-xs">
              AI automation systems that eliminate repetitive work and allow businesses to scale without increasing headcount.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Navigation</p>
            <ul className="flex flex-col gap-3">
              {[['About', '/about'], ['Services', '/services'], ['Case Studies', '/case-studies'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-muted hover:text-accent transition-colors">{label}</Link>
                </li>
              ))}
             
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="mailto:contact@impackta.ai" className="text-sm text-muted hover:text-accent transition-colors">
                  contact@impackta.ai
                </a>
              </li>
              <li>
                <a href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1&background_color=0b1120&text_color=ffffff&primary_color=2563eb" target="_blank" rel="noopener noreferrer" className="text-sm text-muted hover:text-accent transition-colors cursor-pointer">
                  Book a consultation
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-glass-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
          <p>© {new Date().getFullYear()} IMPACKTA AI. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a
              href="https://www.instagram.com/impackta.ai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <Link href="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
