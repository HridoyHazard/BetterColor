'use client'

import { useState, useCallback, useRef } from 'react'
import colorContrast from 'color-contrast'
import {
  AiOutlineCopy,
  AiOutlineCheck,
  AiOutlineSwap,
} from 'react-icons/ai'

/* ─── Color utilities ─────────────────────────────────── */
function hexToRgb(hex) {
  const clean = hex.replace('#', '')
  const full =
    clean.length === 3
      ? clean
          .split('')
          .map((c) => c + c)
          .join('')
      : clean
  const n = parseInt(full, 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

function rgbToHsl(r, g, b) {
  r /= 255; g /= 255; b /= 255
  const max = Math.max(r, g, b), min = Math.min(r, g, b)
  let h, s, l = (max + min) / 2
  if (max === min) { h = s = 0 }
  else {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / d + 2) / 6; break
      case b: h = ((r - g) / d + 4) / 6; break
    }
  }
  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  }
}

function formatColor(hex, format) {
  try {
    const { r, g, b } = hexToRgb(hex)
    if (format === 'rgb') return `rgb(${r}, ${g}, ${b})`
    if (format === 'hsl') {
      const { h, s, l } = rgbToHsl(r, g, b)
      return `hsl(${h}, ${s}%, ${l}%)`
    }
    return hex.toUpperCase()
  } catch {
    return hex
  }
}

function getContrastLevel(ratio) {
  if (ratio >= 7) return { label: 'AAA', color: '#1bfd9c', badge: 'badge-green' }
  if (ratio >= 4.5) return { label: 'AA', color: '#1bfd9c', badge: 'badge-green' }
  if (ratio >= 3) return { label: 'AA Large', color: '#f0b429', badge: 'badge-yellow' }
  return { label: 'Fail', color: '#f87171', badge: 'badge-red' }
}

function getGaugeWidth(ratio) {
  // Max meaningful ratio is 21 (black on white)
  return Math.min((ratio / 21) * 100, 100)
}

/* ─── CopyButton ──────────────────────────────────────── */
function CopyButton({ text, className = '' }) {
  const [copied, setCopied] = useState(false)
  const timer = useRef(null)

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setCopied(false), 2000)
    } catch {
      /* fallback: do nothing */
    }
  }, [text])

  return (
    <button
      onClick={handleCopy}
      aria-label="Copy color code"
      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
        copied
          ? 'bg-[#1bfd9c]/15 text-[#1bfd9c] border border-[#1bfd9c]/30'
          : 'bg-white/6 text-white/50 border border-white/8 hover:bg-white/10 hover:text-white hover:border-white/15'
      } ${className}`}
      style={{ fontFamily: 'JetBrains Mono, monospace' }}
    >
      {copied ? (
        <AiOutlineCheck className="text-sm flex-shrink-0" />
      ) : (
        <AiOutlineCopy className="text-sm flex-shrink-0" />
      )}
      {copied ? 'Copied!' : 'Copy'}
    </button>
  )
}

/* ─── ColorPicker Card ───────────────────────────────── */
function ColorPickerCard({ label, color, onChange, format }) {
  const display = formatColor(color, format)
  const { r, g, b } = hexToRgb(color)
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b

  return (
    <div className="glass glass-hover card-lift rounded-2xl overflow-hidden flex flex-col">
      {/* Color swatch preview */}
      <div
        className="relative h-32 sm:h-40 transition-colors duration-300"
        style={{ backgroundColor: color }}
      >
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background:
              'radial-gradient(circle at center, rgba(0,0,0,0.08) 0%, transparent 70%)',
          }}
        >
          <span
            className="text-4xl font-bold select-none"
            style={{
              color: luminance > 128 ? 'rgba(0,0,0,0.25)' : 'rgba(255,255,255,0.2)',
              fontFamily: 'Syne, sans-serif',
              fontWeight: 800,
              letterSpacing: '-0.05em',
            }}
          >
            Aa
          </span>
        </div>

        {/* Pick trigger */}
        <label
          htmlFor={`picker-${label}`}
          className="absolute bottom-3 right-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium cursor-pointer transition-all duration-200 select-none"
          style={{
            background:
              luminance > 128 ? 'rgba(0,0,0,0.3)' : 'rgba(255,255,255,0.2)',
            color: luminance > 128 ? '#000' : '#fff',
            backdropFilter: 'blur(8px)',
            fontFamily: 'DM Sans, sans-serif',
          }}
        >
          <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
            <path
              d="M13 3L10 6l-7 7H1v-2l7-7 3-3 2 2zM10 6l2-2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Change
          <input
            id={`picker-${label}`}
            type="color"
            value={color}
            onChange={(e) => onChange(e.target.value)}
            className="sr-only"
            aria-label={`Pick ${label} color`}
          />
        </label>
      </div>

      {/* Card body */}
      <div className="p-5 flex-1 flex flex-col gap-4">
        <div>
          <p
            className="text-xs text-white/40 uppercase tracking-widest mb-1"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            {label}
          </p>
          <div
            className="text-lg font-500 text-white/90 truncate"
            style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 500 }}
          >
            {display}
          </div>
        </div>

        {/* RGB breakdown */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'R', value: hexToRgb(color).r, color: '#f87171' },
            { label: 'G', value: hexToRgb(color).g, color: '#4ade80' },
            { label: 'B', value: hexToRgb(color).b, color: '#60a5fa' },
          ].map((ch) => (
            <div
              key={ch.label}
              className="flex flex-col items-center p-2 rounded-lg"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              <span
                className="text-xs mb-0.5"
                style={{ color: ch.color, fontFamily: 'JetBrains Mono, monospace' }}
              >
                {ch.label}
              </span>
              <span
                className="text-sm font-medium text-white/80"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {ch.value}
              </span>
            </div>
          ))}
        </div>

        <CopyButton text={display} className="w-full justify-center" />
      </div>
    </div>
  )
}

/* ─── Contrast Gauge ─────────────────────────────────── */
function ContrastGauge({ ratio }) {
  const level = getContrastLevel(ratio)
  const width = getGaugeWidth(ratio)

  return (
    <div className="flex flex-col gap-3">
      {/* Track */}
      <div className="relative h-3 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="gauge-track h-full rounded-full transition-all duration-700 ease-out"
          style={{ width: `${width}%` }}
        />
        {/* AA marker at 4.5/21 ≈ 21.4% */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/40"
          style={{ left: `${(4.5 / 21) * 100}%` }}
        />
        {/* AAA marker at 7/21 ≈ 33.3% */}
        <div
          className="absolute top-0 bottom-0 w-px bg-white/40"
          style={{ left: `${(7 / 21) * 100}%` }}
        />
      </div>

      {/* Markers */}
      <div className="relative text-xs" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
        <span
          className="absolute text-white/30"
          style={{ left: `${(4.5 / 21) * 100}%`, transform: 'translateX(-50%)' }}
        >
          AA
        </span>
        <span
          className="absolute text-white/30"
          style={{ left: `${(7 / 21) * 100}%`, transform: 'translateX(-50%)' }}
        >
          AAA
        </span>
      </div>
    </div>
  )
}

/* ─── WCAG Requirements Table ────────────────────────── */
function WcagTable({ ratio }) {
  const checks = [
    { label: 'Normal Text (AA)', req: 4.5, desc: '< 18pt / 14pt bold' },
    { label: 'Large Text (AA)', req: 3, desc: '≥ 18pt / 14pt bold' },
    { label: 'Normal Text (AAA)', req: 7, desc: '< 18pt / 14pt bold' },
    { label: 'Large Text (AAA)', req: 4.5, desc: '≥ 18pt / 14pt bold' },
    { label: 'UI Components', req: 3, desc: 'Buttons, inputs, icons' },
  ]

  return (
    <div className="overflow-hidden rounded-xl border border-white/6">
      <table className="w-full text-sm">
        <thead>
          <tr style={{ background: 'rgba(255,255,255,0.03)' }}>
            {['Requirement', 'Min Ratio', 'Your Ratio', 'Status'].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs text-white/40 font-medium"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {checks.map((check, i) => {
            const passes = ratio >= check.req
            return (
              <tr
                key={check.label}
                className="border-t border-white/4 transition-colors duration-150 hover:bg-white/2"
              >
                <td className="px-4 py-3">
                  <div
                    className="text-white/80 text-sm"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {check.label}
                  </div>
                  <div
                    className="text-white/35 text-xs mt-0.5"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    {check.desc}
                  </div>
                </td>
                <td
                  className="px-4 py-3 text-white/50"
                  style={{ fontFamily: 'JetBrains Mono, monospace' }}
                >
                  {check.req}:1
                </td>
                <td
                  className="px-4 py-3"
                  style={{
                    color: passes ? '#1bfd9c' : '#f87171',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                >
                  {ratio}:1
                </td>
                <td className="px-4 py-3">
                  <span
                    className={`badge ${passes ? 'badge-green' : 'badge-red'}`}
                  >
                    {passes ? '✓ Pass' : '✗ Fail'}
                  </span>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

/* ─── Main Component ─────────────────────────────────── */
export default function ColorTool() {
  const [textColor, setTextColor] = useState('#d7dce0')
  const [bgColor, setBgColor] = useState('#111827')
  const [format, setFormat] = useState('hex')

  const ratio = parseFloat(colorContrast(textColor, bgColor).toFixed(2))
  const level = getContrastLevel(ratio)

  const handleSwap = () => {
    setTextColor(bgColor)
    setBgColor(textColor)
  }

  const sampleText = `When you work for peace or any other aspect of social change,
there are often hardships to overcome. You must believe deeply that
what you are doing is right, or else you may become discouraged and
give up.`

  const formats = ['hex', 'rgb', 'hsl']

  return (
    <section id="tool" className="relative px-4 sm:px-6 pb-24">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <p
            className="text-xs text-[#f0b429]/70 tracking-widest uppercase mb-3"
            style={{ fontFamily: 'JetBrains Mono, monospace' }}
          >
            — Color Tool —
          </p>
          <h2
            className="text-3xl sm:text-4xl font-700 text-white mb-4"
            style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
          >
            Check Your Combination
          </h2>
          <p
            className="text-white/40 max-w-md mx-auto"
            style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
          >
            Pick colors, see the live preview, check WCAG compliance, then copy
            your codes.
          </p>
        </div>

        {/* ── Format toggle + Swap ── */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-1 p-1 rounded-xl" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.06)' }}>
            {formats.map((f) => (
              <button
                key={f}
                onClick={() => setFormat(f)}
                className={`px-4 py-1.5 rounded-lg text-xs font-medium uppercase tracking-widest transition-all duration-200 ${
                  format === f
                    ? 'bg-[#f0b429] text-[#07090f]'
                    : 'text-white/40 hover:text-white/70'
                }`}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                {f}
              </button>
            ))}
          </div>

          <button
            onClick={handleSwap}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white/60 border border-white/8 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
            aria-label="Swap text and background colors"
          >
            <AiOutlineSwap className="text-base" />
            Swap Colors
          </button>
        </div>

        {/* ── Main grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">

          {/* Color pickers — left column */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <ColorPickerCard
              label="Text Color"
              color={textColor}
              onChange={setTextColor}
              format={format}
            />
            <ColorPickerCard
              label="Background Color"
              color={bgColor}
              onChange={setBgColor}
              format={format}
            />
          </div>

          {/* Preview + Ratio — right column */}
          <div className="lg:col-span-3 flex flex-col gap-5">

            {/* Live preview card */}
            <div
              className="glass glass-hover rounded-2xl overflow-hidden flex-1 min-h-[240px]"
              style={{
                backgroundColor: bgColor,
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Preview header bar */}
              <div
                className="flex items-center gap-2 px-5 py-3 border-b"
                style={{
                  background: 'rgba(0,0,0,0.25)',
                  borderColor: 'rgba(255,255,255,0.06)',
                }}
              >
                <div className="flex gap-1.5">
                  {['#ff5f57', '#febc2e', '#28c840'].map((c, i) => (
                    <div key={i} className="w-3 h-3 rounded-full" style={{ background: c }} />
                  ))}
                </div>
                <span
                  className="text-xs ml-2"
                  style={{
                    fontFamily: 'JetBrains Mono, monospace',
                    color: 'rgba(255,255,255,0.25)',
                  }}
                >
                  preview.txt
                </span>
              </div>

              {/* Text content */}
              <div className="p-6 sm:p-8">
                <h3
                  className="text-xl sm:text-2xl font-600 mb-4 leading-tight"
                  style={{
                    color: textColor,
                    fontFamily: 'Syne, sans-serif',
                    fontWeight: 600,
                    transition: 'color 0.15s ease',
                  }}
                >
                  Read This Message
                </h3>
                <p
                  className="leading-relaxed text-sm sm:text-base"
                  style={{
                    color: textColor,
                    fontFamily: 'DM Sans, sans-serif',
                    fontWeight: 300,
                    whiteSpace: 'pre-line',
                    transition: 'color 0.15s ease',
                    lineHeight: 1.8,
                  }}
                >
                  {sampleText}
                </p>
              </div>
            </div>

            {/* Contrast ratio card */}
            <div className="glass glass-hover rounded-2xl p-6 flex flex-col gap-5">
              {/* Ratio display */}
              <div className="flex items-start justify-between flex-wrap gap-4">
                <div>
                  <p
                    className="text-xs text-white/40 uppercase tracking-widest mb-2"
                    style={{ fontFamily: 'JetBrains Mono, monospace' }}
                  >
                    Contrast Ratio
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-4xl sm:text-5xl font-800 transition-colors duration-300"
                      style={{
                        fontFamily: 'Syne, sans-serif',
                        fontWeight: 800,
                        color: level.color,
                      }}
                    >
                      {ratio}
                    </span>
                    <span
                      className="text-xl text-white/30"
                      style={{ fontFamily: 'Syne, sans-serif' }}
                    >
                      :1
                    </span>
                  </div>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <span className={`badge ${level.badge}`}>
                    WCAG {level.label}
                  </span>
                  <span
                    className="text-xs text-white/30"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                  >
                    of 21:1 max
                  </span>
                </div>
              </div>

              {/* Gauge */}
              <ContrastGauge ratio={ratio} />

              {/* Context tip */}
              <p
                className="text-xs text-white/35 leading-relaxed"
                style={{ fontFamily: 'DM Sans, sans-serif' }}
              >
                {ratio >= 7
                  ? '✨ Excellent! This combination passes all WCAG AAA requirements.'
                  : ratio >= 4.5
                  ? '✅ Good. Passes WCAG AA for normal text and large text.'
                  : ratio >= 3
                  ? '⚠️ Marginal. Only passes for large text (AA). Avoid for body copy.'
                  : '❌ Fails WCAG standards. Try increasing the contrast between colors.'}
              </p>
            </div>
          </div>
        </div>

        {/* ── WCAG Table ── */}
        <div id="wcag" className="mt-8">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
              <h3
                className="text-lg font-600 text-white"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 600 }}
              >
                WCAG 2.0 Compliance Breakdown
              </h3>
              <span
                className={`badge ${level.badge}`}
              >
                Current level: {level.label}
              </span>
            </div>
            <WcagTable ratio={ratio} />
          </div>
        </div>

        {/* ── Export strip ── */}
        <div className="mt-5 glass rounded-2xl p-5 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p
              className="text-sm font-medium text-white/80 mb-1"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Export These Colors
            </p>
            <p
              className="text-xs text-white/35"
              style={{ fontFamily: 'DM Sans, sans-serif' }}
            >
              Copy individual values or the combined CSS snippet below
            </p>
          </div>
          <div className="flex flex-wrap gap-2 items-center">
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'JetBrains Mono, monospace',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <span className="w-3 h-3 rounded-sm inline-block border border-white/10" style={{ backgroundColor: textColor }} />
              color: {formatColor(textColor, format)};
            </div>
            <div
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.06)',
                fontFamily: 'JetBrains Mono, monospace',
                color: 'rgba(255,255,255,0.5)',
              }}
            >
              <span className="w-3 h-3 rounded-sm inline-block border border-white/10" style={{ backgroundColor: bgColor }} />
              background: {formatColor(bgColor, format)};
            </div>
            <CopyButton
              text={`color: ${formatColor(textColor, format)};\nbackground-color: ${formatColor(bgColor, format)};`}
              className="px-4 py-2"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
