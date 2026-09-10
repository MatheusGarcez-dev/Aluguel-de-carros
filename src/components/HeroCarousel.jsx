import { useCallback, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import banner1Desktop from '../assets/banners-hero/banner-1-desktop.png'
import banner1Mobile from '../assets/banners-hero/banner-1-mobile.png'
import banner2Desktop from '../assets/banners-hero/banner-2-desktop.png'
import banner2Mobile from '../assets/banners-hero/banner-2-mobile.png'
import banner3Desktop from '../assets/banners-hero/banner-3-desktop.png'
import banner3Mobile from '../assets/banners-hero/banner-3-mobile.png'
import banner4Desktop from '../assets/banners-hero/banner-4-desktop.png'
import banner4Mobile from '../assets/banners-hero/banner-4-mobile.png'
import { whatsappLink } from '../data/site'

gsap.registerPlugin(useGSAP)

export const HERO_SLIDES = [
  {
    id: 'reserva',
    title: 'Aluguel de carros sem burocracia.',
    text: 'Consulte frota, tarifas e disponibilidade em todo o Brasil — com atendimento direto no WhatsApp.',
    desktop: banner1Desktop,
    mobile: banner1Mobile,
    cta: {
      label: 'Falar no WhatsApp',
      href: whatsappLink('Olá! Quero consultar valores para aluguel de carro.'),
      external: true,
    },
    secondary: { label: 'Ver frota', to: '/frota' },
  },
  {
    id: 'promocoes',
    title: 'Diárias a partir de R$ 59,99.',
    text: 'Promoções semanal, quinzenal e mensal para grupos A e B. Confirme o período e garanta o melhor valor.',
    desktop: banner2Desktop,
    mobile: banner2Mobile,
    cta: { label: 'Ver promoções', to: '/promocoes' },
    secondary: {
      label: 'Cotação rápida',
      href: whatsappLink('Olá! Quero consultar as promoções vigentes.'),
      external: true,
    },
  },
  {
    id: 'brasil',
    title: 'Cobertura em todo o Brasil.',
    text: 'Um atendimento, várias opções de locadoras parceiras. Ideal para viagens, trabalho e períodos longos.',
    desktop: banner3Desktop,
    mobile: banner3Mobile,
    cta: { label: 'Solicitar cotação', href: whatsappLink(), external: true },
    secondary: { label: 'Conheça a empresa', to: '/empresa' },
  },
  {
    id: 'frota-corp',
    title: 'Terceirização de frota corporativa.',
    text: 'Reduza custos operacionais e libere capital. Licenciamento, manutenção e renovação sob gestão especializada.',
    desktop: banner4Desktop,
    mobile: banner4Mobile,
    cta: {
      label: 'Falar com comercial',
      href: whatsappLink('Olá! Tenho interesse em terceirização de frota.'),
      external: true,
    },
    secondary: { label: 'Saiba mais', to: '/terceirizacao' },
  },
]

const AUTOPLAY_MS = 6500

export default function HeroCarousel() {
  const root = useRef(null)
  const [index, setIndex] = useState(0)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = useCallback((next) => {
    setIndex((current) => {
      const total = HERO_SLIDES.length
      if (typeof next === 'number') return ((next % total) + total) % total
      return current
    })
  }, [])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (reduceMotion.current) return undefined
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [index])

  useGSAP(
    () => {
      if (reduceMotion.current) return

      const active = root.current?.querySelector('.hero-slide.is-active')
      if (!active) return

      const media = active.querySelector('.hero-slide__media img')
      const content = active.querySelectorAll(
        '.hero__title, .hero__text, .hero__actions > *'
      )

      gsap.fromTo(
        media,
        { scale: 1.04 },
        { scale: 1, duration: 1.35, ease: 'power2.out' }
      )
      gsap.fromTo(
        content,
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, duration: 0.65, stagger: 0.08, ease: 'power3.out' }
      )
    },
    { scope: root, dependencies: [index], revertOnUpdate: true }
  )

  const slide = HERO_SLIDES[index]

  return (
    <section
      className="hero hero--carousel"
      ref={root}
      aria-roledescription="carrossel"
      aria-label="Destaques"
    >
      <div className="hero-carousel">
        {HERO_SLIDES.map((item, i) => (
          <article
            key={item.id}
            className={`hero-slide${i === index ? ' is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <div className="hero-slide__media" aria-hidden="true">
              <picture>
                <source media="(min-width: 768px)" srcSet={item.desktop} />
                <img
                  src={item.mobile}
                  alt=""
                  width={1920}
                  height={800}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  fetchPriority={i === 0 ? 'high' : 'auto'}
                />
              </picture>
            </div>
          </article>
        ))}

        <div className="hero-slide__overlay" aria-hidden="true" />

        <div className="hero__content">
          <h1 className="hero__title" id={`hero-title-${slide.id}`}>
            {slide.title}
          </h1>
          <p className="hero__text">{slide.text}</p>
          <div className="hero__actions">
            {slide.cta.external ? (
              <a
                className="btn"
                href={slide.cta.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {slide.cta.label}
              </a>
            ) : (
              <Link className="btn" to={slide.cta.to}>
                {slide.cta.label}
              </Link>
            )}
            {slide.secondary?.external ? (
              <a
                className="btn btn--dark-ghost"
                href={slide.secondary.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {slide.secondary.label}
              </a>
            ) : slide.secondary ? (
              <Link className="btn btn--dark-ghost" to={slide.secondary.to}>
                {slide.secondary.label}
              </Link>
            ) : null}
          </div>
        </div>

        <div className="hero-carousel__controls">
          <button
            type="button"
            className="hero-carousel__nav"
            onClick={prev}
            aria-label="Banner anterior"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="hero-carousel__dots" role="tablist" aria-label="Slides">
            {HERO_SLIDES.map((item, i) => (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Ir para banner ${i + 1}`}
                className={`hero-carousel__dot${i === index ? ' is-active' : ''}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>

          <button
            type="button"
            className="hero-carousel__nav"
            onClick={next}
            aria-label="Próximo banner"
          >
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="hero-carousel__progress" aria-hidden="true">
          <span
            key={index}
            className={`hero-carousel__progress-bar${reduceMotion.current ? ' is-paused' : ''}`}
            style={{ animationDuration: `${AUTOPLAY_MS}ms` }}
          />
        </div>
      </div>
    </section>
  )
}
