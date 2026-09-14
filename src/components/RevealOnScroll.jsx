import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import gsap from 'gsap'

const REVEAL_SELECTOR = [
  'main .page-hero__inner > *',
  'main .section__header',
  'main .features__grid > *',
  'main .fleet-grid > *',
  'main .fleet-filters',
  'main .fleet-catalog__toolbar > *',
  'main .fleet-contact__header',
  'main .fleet-contact__grid > *',
  'main .fleet-catalog__disclaimer',
  'main .promo-page__intro',
  'main .promo-page__plans > *',
  'main .promo-page__note',
  'main .promo-page__footer',
  'main .empresa-intro__grid > *',
  'main .empresa-split__grid > *',
  'main .outsource-intro__grid > *',
  'main .outsource-transfer__grid > *',
  'main .outsource-benefits > *',
  'main .outsource-steps__head',
  'main .outsource-steps__list > *',
  'main .outsource-fit__grid > *',
  'main .outsource-cta__inner > *',
  'main .promo-teaser__header > *',
  'main .promo-plans > *',
  'main .promo-note',
  'main .fleet-home__intro > *',
  'main .cta-final__panel',
  'main .contact-grid > *',
  'main .grid-2 > *',
  'main .benefit-grid > *',
  'main .check-list',
  'footer .site-footer__cta',
  'footer .site-footer__main > *',
  'footer .site-footer__bottom',
].join(', ')

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function collectTargets() {
  const nodes = Array.from(document.querySelectorAll(REVEAL_SELECTOR))
  return nodes.filter((el, index, list) => {
    if (!(el instanceof HTMLElement)) return false
    if (el.closest('.site-header, .whatsapp-float, .hero-carousel, .about-home'))
      return false
    // avoid nested duplicates (parent already targeted)
    return !list.some(
      (other, otherIndex) =>
        otherIndex !== index &&
        other instanceof HTMLElement &&
        other.contains(el) &&
        !el.contains(other)
    )
  })
}

export default function RevealOnScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (prefersReducedMotion()) return undefined

    const targets = collectTargets()
    if (!targets.length) return undefined

    const cleanups = []
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          if (!(el instanceof HTMLElement)) return
          if (el.dataset.revealed === '1') return

          el.dataset.revealed = '1'
          observer.unobserve(el)

          const siblings = el.parentElement
            ? Array.from(el.parentElement.children).filter((child) =>
                targets.includes(child)
              )
            : []
          const siblingIndex = Math.max(0, siblings.indexOf(el))
          const delay = Math.min(siblingIndex, 5) * 0.08

          gsap.fromTo(
            el,
            {
              opacity: 0,
              y: 28,
              filter: 'blur(12px)',
              scale: 0.985,
            },
            {
              opacity: 1,
              y: 0,
              filter: 'blur(0px)',
              scale: 1,
              duration: 0.9,
              delay,
              ease: 'power2.out',
              clearProps: 'filter,transform',
              onComplete: () => {
                el.classList.add('is-revealed')
              },
            }
          )
        })
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -6% 0px',
      }
    )

    targets.forEach((el) => {
      el.classList.add('reveal-target')
      el.style.opacity = '0'
      observer.observe(el)
    })

    cleanups.push(() => {
      observer.disconnect()
      targets.forEach((el) => {
        gsap.killTweensOf(el)
        el.classList.remove('reveal-target', 'is-revealed')
        el.style.opacity = ''
        delete el.dataset.revealed
      })
    })

    return () => {
      cleanups.forEach((fn) => fn())
    }
  }, [pathname])

  return null
}
