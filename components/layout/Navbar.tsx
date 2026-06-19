'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Button from '../ui/Button'

const NAV_LINKS = [
  { label: 'About',        href: '/about' },
  { 
    label: 'Services',     
    href: '/services',
    subItems: [
      { label: 'Lightweight AI', href: '/services/lightweight-ai-service' },
      { label: 'Heavyweight AI', href: '/services/heavyweight-ai-service' },
      { label: 'Custom AI', href: '/services/custom-weight-ai-service' },
    ]
  },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Contact',      href: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[72px] bg-primary/75 backdrop-blur-md border-b border-glass-border">
      <div className="container h-full flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-xl font-extrabold tracking-tight text-white" onClick={() => setOpen(false)}>
          IMPACKTA <span className="text-accent">AI</span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(({ label, href, subItems }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            
            if (subItems) {
              return (
                <div key={label} className="relative group">
                  <Link
                    href={href}
                    className={`relative text-sm font-medium pb-0.5 transition-colors duration-200 after:absolute after:bottom-[-2px] after:h-px after:bg-accent after:transition-all after:duration-200 flex items-center gap-1
                      ${isActive
                        ? 'text-accent after:left-0 after:right-0'
                        : 'text-muted hover:text-accent after:left-1/2 after:right-1/2 hover:after:left-0 hover:after:right-0'
                      }`}
                  >
                    {label}
                    <svg className="w-3.5 h-3.5 transition-transform duration-200 group-hover:-rotate-180" viewBox="0 0 24 24" fill="none">
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                  <div className="absolute left-0 top-[100%] pt-4 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="bg-[#0b1120]/95 backdrop-blur-md border border-glass-border rounded-xl shadow-xl overflow-hidden py-1">
                      {subItems.map(subItem => (
                        <Link 
                          key={subItem.href} 
                          href={subItem.href}
                          className="block px-4 py-2.5 text-sm text-muted hover:text-accent hover:bg-white/5 transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            }

            return (
              <Link
                key={href}
                href={href}
                className={`relative text-sm font-medium pb-0.5 transition-colors duration-200 after:absolute after:bottom-[-2px] after:h-px after:bg-accent after:transition-all after:duration-200
                  ${isActive
                    ? 'text-accent after:left-0 after:right-0'
                    : 'text-muted hover:text-accent after:left-1/2 after:right-1/2 hover:after:left-0 hover:after:right-0'
                  }`}
              >
                {label}
              </Link>
            )
          })}
          <Button size="sm" href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1">
            Book Consultation
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-[5px] p-2"
          onClick={() => setOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'translate-y-[7px] rotate-45' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-200 ${open ? '-translate-y-[7px] -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden absolute left-0 right-0 top-[72px] overflow-hidden transition-all duration-300 ease-in-out h-screen"
        style={{
          maxHeight: open ? '800px' : '0px',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
          borderBottom: open ? '1px solid rgba(255,255,255,0.08)' : 'none',
          background: '#020617',
          zIndex: 50,
        }}
      >
        <div className="flex flex-col px-6 py-5 gap-1">
          {NAV_LINKS.map(({ label, href, subItems }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href)
            
            return (
              <div key={label} className="border-b border-white/5 last:border-0">
                <div className="flex items-center justify-between">
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className="py-3 text-sm font-medium transition-colors flex-1"
                    style={{ color: isActive ? '#7dd3fc' : '#94a3b8' }}
                  >
                    {label}
                  </Link>
                </div>
                {subItems && (
                  <div className="flex flex-col pl-4 pb-2 gap-2">
                    {subItems.map(subItem => {
                      const isSubActive = pathname === subItem.href
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setOpen(false)}
                          className="text-sm py-1.5 transition-colors"
                          style={{ color: isSubActive ? '#7dd3fc' : '#64748b' }}
                        >
                          {subItem.label}
                        </Link>
                      )
                    })}
                  </div>
                )}
              </div>
            )
          })}
          <div className="pt-4 pb-2">
            <Button 
              size="sm" 
              onClick={() => {
                setOpen(false)
                window.open(
                  'https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1',
                  '_blank',
                  'noopener,noreferrer'
                )
              }}
            >
              Book Consultation
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
