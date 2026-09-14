import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function PageIntro() {
  const veilRef = useRef(null)

  useEffect(() => {
    const veil = veilRef.current
    if (!veil) return undefined

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      veil.remove()
      return undefined
    }

    const tl = gsap.timeline({
      defaults: { ease: 'power3.inOut' },
      onComplete: () => {
        veil.remove()
      },
    })

    gsap.set(veil, { autoAlpha: 1 })

    tl.to(veil, {
      autoAlpha: 0,
      duration: 1.15,
      delay: 0.12,
    }).to(
      veil,
      {
        filter: 'blur(18px)',
        scale: 1.04,
        duration: 1.15,
      },
      0.12
    )

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div
      ref={veilRef}
      className="page-intro"
      aria-hidden="true"
    />
  )
}
