import Button from '@/components/ui/Button'
import Image from 'next/image'

export default function CaseStudiesPage() {
  return (
    <section
      style={{
        paddingTop: 'calc(72px + 5rem)',
        paddingBottom: '5rem',
        background: '#0b1120',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <style>{`
        @keyframes drop-from-above {
          from { opacity: 0; transform: translateY(-18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-up {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes slow-zoom {
          from { transform: scale(1); }
          to   { transform: scale(1.08); }
        }
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes pulse-ring {
          0%   { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(125,211,252,0.35); }
          70%  { transform: scale(1);    box-shadow: 0 0 0 12px rgba(125,211,252,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(125,211,252,0); }
        }
        @keyframes shimmer-line {
          0%   { left: -60%; }
          100% { left: 130%; }
        }
        @keyframes grain {
          0%,100% { transform: translate(0,0) }
          10%  { transform: translate(-2%,-3%) }
          20%  { transform: translate(3%, 1%) }
          30%  { transform: translate(-1%, 4%) }
          40%  { transform: translate(4%,-1%) }
          50%  { transform: translate(-3%, 2%) }
          60%  { transform: translate(2%, 3%) }
          70%  { transform: translate(-4%, 0%) }
          80%  { transform: translate(1%,-4%) }
          90%  { transform: translate(3%, 2%) }
        }
      `}</style>

      {/* ── Background image with slow Ken Burns zoom ── */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1920&q=80"
          alt=""
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
            opacity: 0.13,
            animation: 'slow-zoom 18s ease-in-out infinite alternate',
            transformOrigin: 'center center',
          }}
        />
      </div>

      {/* ── Film grain overlay ── */}
      <div
        style={{
          position: 'absolute',
          inset: '-50%',
          zIndex: 1,
          width: '200%',
          height: '200%',
          opacity: 0.025,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '180px',
          animation: 'grain 0.4s steps(1) infinite',
          pointerEvents: 'none',
        }}
      />

      {/* ── Radial gradient vignette ── */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 2,
          background:
            'radial-gradient(70% 60% at 50% 30%, rgba(125,211,252,0.10) 0%, rgba(11,17,32,0.0) 60%), radial-gradient(ellipse at bottom, rgba(11,17,32,0.95) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Horizontal shimmer lines ── */}
      {[18, 52, 80].map((top, i) => (
        <div
          key={i}
          style={{
            position: 'absolute',
            top: `${top}%`,
            left: 0,
            right: 0,
            height: '1px',
            zIndex: 2,
            overflow: 'hidden',
            opacity: 0.12,
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: 0,
              width: '60%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(125,211,252,0.8), transparent)',
              animation: `shimmer-line ${7 + i * 3}s linear ${i * 2.5}s infinite`,
            }}
          />
        </div>
      ))}

      {/* ── Floating orb ── */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: 180,
          height: 180,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(125,211,252,0.12) 0%, transparent 70%)',
          filter: 'blur(30px)',
          zIndex: 2,
          animation: 'float-badge 6s ease-in-out infinite',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '15%',
          left: '6%',
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, transparent 70%)',
          filter: 'blur(24px)',
          zIndex: 2,
          animation: 'float-badge 8s ease-in-out 2s infinite',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <div className="container relative" style={{ zIndex: 10, textAlign: 'center' }}>

        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 16px',
            borderRadius: 999,
            border: '1px solid rgba(125,211,252,0.25)',
            background: 'rgba(125,211,252,0.06)',
            backdropFilter: 'blur(8px)',
            marginBottom: 28,
            animation: 'drop-from-above 0.45s ease 0.15s both',
          }}
        >
          {/* Pulsing dot */}
          <span style={{ position: 'relative', display: 'inline-flex', width: 8, height: 8 }}>
            <span
              style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '50%',
                background: '#7dd3fc',
                animation: 'pulse-ring 2s ease infinite',
              }}
            />
            <span
              style={{
                position: 'relative',
                display: 'block',
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: '#7dd3fc',
              }}
            />
          </span>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#7dd3fc',
            }}
          >
            In Progress
          </span>
        </div>

        {/* Heading */}
        <h1
          className="mx-auto font-extrabold text-white leading-tight max-w-3xl"
          style={{
            fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
            marginBottom: 24,
            animation: 'drop-from-above 0.5s ease 0.3s both',
            letterSpacing: '-0.02em',
          }}
        >
          Case{' '}
          <span
            style={{
              background: 'linear-gradient(135deg, #7dd3fc 0%, #38bdf8 50%, #bae6fd 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Studies
          </span>
        </h1>

        {/* Divider */}
        <div
          style={{
            width: 60,
            height: 2,
            background: 'linear-gradient(90deg, transparent, #7dd3fc, transparent)',
            margin: '0 auto 28px',
            animation: 'fade-up 0.4s ease 0.5s both',
            borderRadius: 99,
          }}
        />

        {/* Body */}
        <p
          className="mx-auto"
          style={{
            fontSize: 18,
            color: '#94a3b8',
            lineHeight: 1.75,
            maxWidth: 640,
            animation: 'fade-up 0.45s ease 0.55s both',
          }}
        >
          Case studies are currently in progress. In the meantime, book a call to discuss your specific requirements.
        </p>

        {/* CTA */}
        <div style={{ marginTop: 40, animation: 'fade-up 0.45s ease 0.7s both' }}>
          <Button href="https://calendly.com/michael-impackta/ai-discovery-call?hide_gdpr_banner=1" size="lg">
            Book Consultation
          </Button>
        </div>

        {/* Ghost cards row */}
        <div
          style={{
            display: 'flex',
            gap: 16,
            justifyContent: 'center',
            marginTop: 60,
            animation: 'fade-up 0.5s ease 0.85s both',
          }}
        >
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 220,
                height: 130,
                borderRadius: 20,
                border: '1px solid rgba(255,255,255,0.06)',
                background: 'rgba(255,255,255,0.025)',
                backdropFilter: 'blur(6px)',
                position: 'relative',
                overflow: 'hidden',
                animationDelay: `${0.9 + i * 0.12}s`,
              }}
            >
              {/* Skeleton shimmer */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(90deg, transparent 0%, rgba(125,211,252,0.04) 50%, transparent 100%)',
                  animation: `shimmer-line ${3 + i}s linear ${i * 0.8}s infinite`,
                }}
              />
              <div style={{ padding: '20px 20px 0' }}>
                <div style={{ width: '60%', height: 10, borderRadius: 6, background: 'rgba(255,255,255,0.07)', marginBottom: 10 }} />
                <div style={{ width: '85%', height: 8, borderRadius: 6, background: 'rgba(255,255,255,0.04)', marginBottom: 8 }} />
                <div style={{ width: '70%', height: 8, borderRadius: 6, background: 'rgba(255,255,255,0.04)' }} />
              </div>
              {/* Coming soon chip */}
              <div style={{
                position: 'absolute',
                bottom: 14,
                right: 14,
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(125,211,252,0.5)',
                border: '1px solid rgba(125,211,252,0.15)',
                borderRadius: 99,
                padding: '3px 8px',
              }}>
                Soon
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}