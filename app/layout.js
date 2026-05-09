import './globals.css'

export const metadata = {
  title: 'BetterColor — Color Contrast & Readability Tool',
  description:
    'Find the perfect color combinations for readability. Check WCAG contrast ratios, preview text on backgrounds, and export color codes.',
  keywords: 'color contrast, WCAG, accessibility, readability, color picker',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="noise">{children}</body>
    </html>
  )
}
