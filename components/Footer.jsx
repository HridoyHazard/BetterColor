'use client'

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from 'react-icons/ai'

const socials = [
  { icon: AiFillGithub, href: 'https://github.com/HridoyHazard/BetterColor', label: 'GitHub' },
  { icon: AiFillTwitterSquare, href: '#', label: 'Twitter' },
  { icon: AiFillLinkedin, href: '#', label: 'LinkedIn' },
  { icon: AiFillFacebook, href: '#', label: 'Facebook' },
]

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tool', href: '#tool' },
  { label: 'WCAG Guide', href: '#wcag' },
  {
    label: 'Source Code',
    href: 'https://github.com/HridoyHazard/BetterColor',
  },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Glow line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px"
        style={{
          background:
            'linear-gradient(90deg, transparent, rgba(240,180,41,0.4), transparent)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-14">
        {/* Top row */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 mb-10">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#f0b429] to-[#d97706] flex items-center justify-center">
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <circle cx="5" cy="5" r="3.5" fill="white" fillOpacity="0.9" />
                  <circle cx="11" cy="5" r="3.5" fill="white" fillOpacity="0.6" />
                  <circle cx="8" cy="10" r="3.5" fill="white" fillOpacity="0.4" />
                </svg>
              </div>
              <span
                className="font-700 text-white"
                style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              >
                BetterColor
              </span>
            </div>
            <p
              className="text-sm text-white/35 leading-relaxed"
              style={{ fontFamily: 'DM Sans, sans-serif', fontWeight: 300 }}
            >
              A free tool for checking color contrast and readability. Built for
              designers, developers, and accessibility advocates.
            </p>
          </div>

          {/* Nav links */}
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white transition-colors duration-200"
                    style={{ fontFamily: 'DM Sans, sans-serif' }}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={
                      link.href.startsWith('http')
                        ? 'noopener noreferrer'
                        : undefined
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="sep mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <p
            className="text-xs text-white/25 text-center sm:text-left"
            style={{ fontFamily: 'DM Sans, sans-serif' }}
          >
            © {new Date().getFullYear()} BetterColor. Open source under the MIT
            License.{' '}
            <a
              href="https://github.com/HridoyHazard/BetterColor"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#f0b429] transition-colors"
            >
              HridoyHazard/BetterColor
            </a>
          </p>

          {/* Socials */}
          <div className="flex items-center gap-2">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={
                  href.startsWith('http') ? 'noopener noreferrer' : undefined
                }
                className="w-8 h-8 rounded-lg flex items-center justify-center text-white/30 hover:text-[#f0b429] hover:bg-[#f0b429]/8 border border-white/6 hover:border-[#f0b429]/20 transition-all duration-200"
              >
                <Icon className="text-base" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
