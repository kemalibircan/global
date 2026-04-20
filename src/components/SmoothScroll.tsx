'use client'

import { useEffect, useRef } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<{ raf: (time: number) => void; destroy: () => void } | null>(null)

  useEffect(() => {
    const initLenis = async () => {
      const Lenis = (await import('@studio-freight/lenis')).default
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      })
      lenisRef.current = lenis

      function raf(time: number) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }
      requestAnimationFrame(raf)
    }

    // Only run on desktop (skip on mobile where native scroll feels better)
    if (window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      initLenis()
    }

    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return <>{children}</>
}
