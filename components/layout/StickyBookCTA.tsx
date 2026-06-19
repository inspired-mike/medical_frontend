'use client'

import { useEffect, useState } from 'react'

export default function StickyBookCTA() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    // Keep the button always visible
  }, [])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: 32,
        right: 24,
        zIndex: 9998,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-accent rounded-full blur opacity-40 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        
        <div 
          className="relative px-4 py-2.5 rounded-full bg-[#0b1120] border border-blue-500/30 text-white shadow-2xl flex items-center gap-2 hover:border-blue-400 transition-all cursor-pointer group"
          onClick={() => window.location.href = '/consultation'}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></span>
          <span className="font-bold text-xs uppercase tracking-tight">Book a Free Call</span>
        </div>
      </div>
    </div>
  )
}
