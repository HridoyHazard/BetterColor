import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import ColorTool from '@/components/ColorTool'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="relative min-h-screen grid-bg">
      <div className="hero-glow" />
      <Navbar />
      <Hero />
      <ColorTool />
      <Footer />
    </main>
  )
}
