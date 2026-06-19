'use client'

import { useEffect, useRef, useState } from 'react'

function useAnimatedNumber(target: number) {
  const [value, setValue] = useState(target)
  const prevRef = useRef(target)

  useEffect(() => {
    const start = prevRef.current
    const diff = target - start
    if (diff === 0) return
    let frame = 0
    const frames = 35
    const id = requestAnimationFrame(function step() {
      frame++
      const t = 1 - Math.pow(1 - frame / frames, 3)
      setValue(Math.round(start + diff * t))
      if (frame < frames) requestAnimationFrame(step)
      else prevRef.current = target
    })
    return () => cancelAnimationFrame(id)
  }, [target])

  return value
}

export default function ROICalculator() {
  const [teamSize, setTeamSize] = useState(10)
  const [adminHours, setAdminHours] = useState(15)

  const hoursSaved = Math.round(teamSize * adminHours * 0.7 * 4.3)
  const costSaved = Math.round(hoursSaved * 35)
  const roi = costSaved > 50000 ? 'Exceptional' : costSaved > 20000 ? 'Very High' : 'High'

  const animHours = useAnimatedNumber(hoursSaved)
  const animCost = useAnimatedNumber(costSaved)

  return (
    <div
      style={{
        background: 'rgba(11,17,32,0.85)',
        border: '1px solid rgba(125,211,252,0.2)',
        borderRadius: 24,
        backdropFilter: 'blur(16px)',
        padding: '40px 36px',
      }}
    >
      <div style={{ marginBottom: 32 }}>
        <p
          style={{
            fontSize: 11,
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#7dd3fc',
            marginBottom: 8,
          }}
        >
          ROI Calculator
        </p>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: '#ffffff', lineHeight: 1.2 }}>
          See your potential savings
        </h2>
        <p style={{ fontSize: 13, color: '#94a3b8', marginTop: 6 }}>
          Drag the sliders to estimate impact for your business
        </p>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: 40,
        }}
      >
        {/* Sliders */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          {/* Team size */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 12,
              }}
            >
              <label style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>
                Team Size
              </label>
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: '#7dd3fc',
                  lineHeight: 1,
                  fontFamily: 'ui-monospace, monospace',
                }}
              >
                {teamSize}
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={200}
              value={teamSize}
              onChange={e => setTeamSize(Number(e.target.value))}
              className="roi-slider"
              style={{ width: '100%' }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 11,
                color: '#64748b',
                marginTop: 4,
              }}
            >
              <span>1 person</span>
              <span>200 people</span>
            </div>
          </div>

          {/* Admin hours */}
          <div>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'baseline',
                marginBottom: 12,
              }}
            >
              <label style={{ fontSize: 13, fontWeight: 600, color: '#e2e8f0' }}>
                Admin Hours / Week per Person
              </label>
              <span
                style={{
                  fontSize: 26,
                  fontWeight: 800,
                  color: '#7dd3fc',
                  lineHeight: 1,
                  fontFamily: 'ui-monospace, monospace',
                }}
              >
                {adminHours}h
              </span>
            </div>
            <input
              type="range"
              min={1}
              max={40}
              value={adminHours}
              onChange={e => setAdminHours(Number(e.target.value))}
              className="roi-slider"
              style={{ width: '100%' }}
            />
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: 11,
                color: '#64748b',
                marginTop: 4,
              }}
            >
              <span>1 hr</span>
              <span>40 hrs</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div
            style={{
              background: 'rgba(125,211,252,0.05)',
              border: '1px solid rgba(125,211,252,0.15)',
              borderRadius: 16,
              padding: '20px 22px',
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748b', marginBottom: 6 }}>
              Hours Saved / Month
            </p>
            <p
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: '#ffffff',
                lineHeight: 1,
                fontFamily: 'ui-monospace, monospace',
              }}
            >
              {animHours.toLocaleString()}
            </p>
            <p style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>hours reclaimed per month</p>
          </div>

          <div
            style={{
              background: 'rgba(125,211,252,0.08)',
              border: '1px solid rgba(125,211,252,0.25)',
              borderRadius: 16,
              padding: '20px 22px',
            }}
          >
            <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748b', marginBottom: 6 }}>
              Estimated Monthly Saving
            </p>
            <p
              style={{
                fontSize: 40,
                fontWeight: 900,
                color: '#7dd3fc',
                lineHeight: 1,
                fontFamily: 'ui-monospace, monospace',
              }}
            >
              £{animCost.toLocaleString()}
            </p>
            <p style={{ fontSize: 11, color: '#64748b', marginTop: 4 }}>at £35/hr avg rate</p>
          </div>

          <div
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: '16px 22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#64748b', marginBottom: 4 }}>
                ROI Score
              </p>
              <p style={{ fontSize: 22, fontWeight: 800, color: '#ffffff' }}>{roi}</p>
            </div>
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'rgba(125,211,252,0.1)',
                border: '1px solid rgba(125,211,252,0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: 20,
                color: '#7dd3fc',
                animation: 'pulse-glow 2.5s ease-in-out infinite',
              }}
            >
              ↑
            </div>
          </div>

          <a href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1&background_color=0b1120&text_color=ffffff&primary_color=2563eb" target="_blank" rel="noopener noreferrer">
            <button
              style={{
                width: '100%',
                padding: '14px 24px',
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 14,
                background: '#7dd3fc',
                color: '#020617',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                marginTop: 4,
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => {
                ;(e.currentTarget as HTMLButtonElement).style.background = '#bae6fd'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow =
                  '0 0 28px rgba(125,211,252,0.4)'
              }}
              onMouseLeave={e => {
                ;(e.currentTarget as HTMLButtonElement).style.background = '#7dd3fc'
                ;(e.currentTarget as HTMLButtonElement).style.boxShadow = 'none'
              }}
            >
              Book a Free Strategy Call →
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}
