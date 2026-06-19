'use client'

import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline'
  size?: 'default' | 'lg' | 'sm'
  to?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  loading?: boolean
}

export default function Button({
  children,
  variant = 'primary',
  size = 'default',
  to,
  href,
  onClick,
  type = 'button',
  className = '',
  loading = false,
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 font-semibold rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer'

  const variants = {
    primary:
      'bg-accent text-primary border border-accent hover:bg-sky-200 hover:shadow-[0_0_24px_rgba(125,211,252,0.4)] hover:-translate-y-px',
    outline:
      'bg-transparent text-accent border border-accent-border hover:bg-accent-glow hover:border-accent',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    default: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  }

  const cls = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) return <Link href={to} className={cls}>{children}</Link>
  if (href) {
    const isInternal = href.startsWith('/') || href.startsWith('#')

    if (isInternal) {
      return <Link href={href} className={cls}>{children}</Link>
    }

    const isCalendly = href.includes('calendly.com')
    return (
      <a 
        href={href} 
        className={cls} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={isCalendly ? (e) => {
          e.preventDefault()
          window.location.href = '/consultation'
        } : undefined}
      >
        {children}
      </a>
    )
  }
  return (
    <button 
      type={type} 
      className={cls} 
      onClick={onClick}
      disabled={loading}
    >
      {loading ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </>
      ) : children}
    </button>
  )
}
