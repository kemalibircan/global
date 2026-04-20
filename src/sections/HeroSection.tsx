'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const rotatingWords = [
  'Dijital Deneyimler',
  'Akıllı Sistemler',
  'Global Markalar',
  'Futuristik Ürünler',
]

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [wordIndex, setWordIndex] = useState(0)
  const animFrameRef = useRef<number>()

  // Three.js animated background
  useEffect(() => {
    let scene: any, camera: any, renderer: any
    let particles: any, material: any

    const init = async () => {
      const THREE = await import('three')
      const canvas = canvasRef.current
      if (!canvas) return

      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000)
      camera.position.z = 5

      renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })
      renderer.setSize(window.innerWidth, window.innerHeight)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)

      // Create particle system
      const count = 2000
      const positions = new Float32Array(count * 3)
      const colors = new Float32Array(count * 3)

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20
        positions[i * 3 + 2] = (Math.random() - 0.5) * 10

        // Mix between blue and violet
        const t = Math.random()
        colors[i * 3] = t * 0 + (1 - t) * 0.48       // R
        colors[i * 3 + 1] = t * 0.83 + (1 - t) * 0.18  // G
        colors[i * 3 + 2] = t * 1 + (1 - t) * 0.75    // B
      }

      const geometry = new THREE.BufferGeometry()
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

      material = new THREE.PointsMaterial({
        size: 0.02,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
        sizeAttenuation: true,
      })

      particles = new THREE.Points(geometry, material)
      scene.add(particles)

      // Add glowing orbs
      const addOrb = (x: number, y: number, z: number, color: number, intensity: number) => {
        const light = new THREE.PointLight(color, intensity, 10)
        light.position.set(x, y, z)
        scene.add(light)
      }
      addOrb(-3, 2, 2, 0x00D4FF, 2)
      addOrb(3, -2, 1, 0x7B2FBE, 2)

      let mouseX = 0
      let mouseY = 0

      const handleMouse = (e: MouseEvent) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2
        mouseY = -(e.clientY / window.innerHeight - 0.5) * 2
      }
      window.addEventListener('mousemove', handleMouse)

      const animate = () => {
        animFrameRef.current = requestAnimationFrame(animate)

        particles.rotation.y += 0.0005
        particles.rotation.x += 0.0002

        camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.02
        camera.position.y += (mouseY * 0.5 - camera.position.y) * 0.02
        camera.lookAt(scene.position)

        renderer.render(scene, camera)
      }
      animate()

      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
      }
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('mousemove', handleMouse)
        window.removeEventListener('resize', handleResize)
      }
    }

    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      init()
    }

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current)
    }
  }, [])

  // Word rotator
  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

  // Magnetic button effect
  const handleMagneticMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = e.currentTarget
    const rect = btn.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`
  }
  const handleMagneticLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.style.transform = 'translate(0,0)'
    e.currentTarget.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)'
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark" id="hero">
      {/* Three.js canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ opacity: 0.7 }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-dark/20 via-transparent to-dark" />

      {/* Glowing orb decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-violet/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-blue/10 blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-neon-blue/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          <span className="text-neon-blue text-xs font-medium tracking-widest uppercase">World-Class Digital Agency</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.8 }}
          className="font-display font-bold text-white mb-4"
        >
          We Build{' '}
          <span className="gradient-text text-glow-blue">Digital Futures</span>
        </motion.h1>

        {/* Word rotator */}
        <div className="flex items-center justify-center gap-3 mb-10 h-14 overflow-hidden">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
            className="text-white/40 font-display text-xl md:text-2xl"
          >
            We craft
          </motion.span>
          <div className="relative h-14 overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
              <motion.span
                key={wordIndex}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
                className="gradient-text font-display font-semibold text-xl md:text-2xl whitespace-nowrap block"
              >
                {rotatingWords[wordIndex]}
              </motion.span>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 3.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a
            href="#portfolio"
            className="group relative px-8 py-4 rounded-full text-dark font-semibold text-sm overflow-hidden transition-all duration-300"
            style={{ background: 'linear-gradient(135deg, #00D4FF, #7B2FBE)', transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)' }}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            data-cursor-hover
          >
            <span className="relative z-10">View Our Work</span>
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full text-white font-semibold text-sm border border-white/20 hover:border-neon-blue/50 hover:bg-neon-blue/5 transition-all duration-300"
            style={{ transition: 'transform 0.5s cubic-bezier(0.23,1,0.32,1)' }}
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            data-cursor-hover
          >
            Start a Project →
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 3.5 }}
          className="flex items-center justify-center gap-8 mt-16 text-center"
        >
          {[['150+', 'Projects'], ['8+', 'Years'], ['40+', 'Clients'], ['12', 'Countries']].map(([num, label]) => (
            <div key={label} className="flex flex-col">
              <span className="text-2xl font-bold font-display gradient-text">{num}</span>
              <span className="text-white/40 text-xs tracking-widest uppercase mt-1">{label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neon-blue/60 to-transparent scroll-bounce" />
      </motion.div>
    </section>
  )
}
