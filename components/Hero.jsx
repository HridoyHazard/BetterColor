'use client'

export default function Hero() {
  return (
    <section
      id="about"
      className="relative pt-32 pb-20 px-6 text-center overflow-hidden"
    >
      {/* Decorative orbs */}
      <div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse, rgba(240,180,41,0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute top-32 left-[20%] w-24 h-24 rounded-full animate-float pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(240,180,41,0.15), transparent)',
          animationDelay: '0s',
        }}
      />
      <div
        className="absolute top-24 right-[22%] w-16 h-16 rounded-full animate-float pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(27,253,156,0.12), transparent)',
          animationDelay: '2s',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#f0b429]/20 bg-[#f0b429]/8 mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[#f0b429] animate-pulse" />
          <span
            className="text-xs font-medium text-[#f0b429] tracking-widest uppercase"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            WCAG 2.0 Compliant Checker
          </span>
        </div>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl font-800 leading-none tracking-tighter mb-6 animate-fade-up stagger-1"
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800 }}
        >
          Pick Colors That{' '}
          <span className="shimmer-gold">Actually Work</span>
        </h1>

        {/* Subhead */}
        <p
          className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-up stagger-2"
          style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
        >
          Real-time WCAG contrast checking, live preview, and instant color code
          export. No guessing — just great readability.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up stagger-3">
          <a
            href="#tool"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-[#07090f] bg-[#f0b429] hover:bg-[#fcd34d] transition-all duration-200 shadow-xl shadow-[#f0b429]/20 hover:shadow-[#f0b429]/35 hover:-translate-y-0.5 active:translate-y-0"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            Start Checking Colors
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="mt-px"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a
            href="https://github.com/HridoyHazard/BetterColor"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl font-medium text-white/70 border border-white/10 hover:border-white/20 hover:text-white hover:bg-white/5 transition-all duration-200"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            View Source
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 pt-10 border-t border-white/6 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up stagger-4">
          {[
            { num: '4.5:1', label: 'AA Standard' },
            { num: '7:1', label: 'AAA Standard' },
            { num: '∞', label: 'Color Combos' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl font-700 text-[#f0b429] mb-1"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                {stat.num}
              </div>
              <div
                className="text-xs text-white/40 uppercase tracking-widest"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
