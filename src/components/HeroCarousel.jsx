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

const AUTOPLAY_MS = 7200

export default function HeroCarousel() {
  const root = useRef(null)
  const prevIndex = useRef(0)
  const direction = useRef(1)
  const firstRun = useRef(true)
  const timeline = useRef(null)
  const [index, setIndex] = useState(0)
  const reduceMotion = useRef(false)

  useEffect(() => {
    reduceMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }, [])

  const goTo = useCallback((next) => {
    setIndex((current) => {
      const total = HERO_SLIDES.length
      const target = ((next % total) + total) % total
      if (target === current) return current
      const forward = (target - current + total) % total
      const backward = (current - target + total) % total
      direction.current = forward <= backward ? 1 : -1
      return target
    })
  }, [])

  const prev = useCallback(() => {
    direction.current = -1
    setIndex((i) => (i - 1 + HERO_SLIDES.length) % HERO_SLIDES.length)
  }, [])

  const next = useCallback(() => {
    direction.current = 1
    setIndex((i) => (i + 1) % HERO_SLIDES.length)
  }, [])

  useEffect(() => {
    if (reduceMotion.current) return undefined
    const id = window.setInterval(() => {
      direction.current = 1
      setIndex((i) => (i + 1) % HERO_SLIDES.length)
    }, AUTOPLAY_MS)
    return () => window.clearInterval(id)
  }, [index])

  useGSAP(
    () => {
      const carousel = root.current
      if (!carousel) return

      const slides = gsap.utils.toArray('.hero-slide', carousel)
      const active = slides[index]
      const previous = slides[prevIndex.current]
      const flash = carousel.querySelector('.hero-carousel__flash')
      const content = carousel.querySelectorAll(
        '.hero__title, .hero__text, .hero__actions > *'
      )
      const reduce = reduceMotion.current

      if (!active) return

      timeline.current?.kill()

      const activeImg = active.querySelector('.hero-slide__media img')

      if (reduce) {
        slides.forEach((slide, i) => {
          gsap.set(slide, {
            autoAlpha: i === index ? 1 : 0,
            zIndex: i === index ? 1 : 0,
          })
        })
        gsap.set(content, { clearProps: 'all' })
        if (activeImg) gsap.set(activeImg, { clearProps: 'transform,filter' })
        prevIndex.current = index
        firstRun.current = false
        return
      }

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          slides.forEach((slide, i) => {
            if (i !== index) gsap.set(slide, { autoAlpha: 0, zIndex: 0 })
          })
          // z-index no máximo 1 — overlay (z-index 2) precisa ficar sempre por cima da sombra
          gsap.set(active, { autoAlpha: 1, zIndex: 1 })
        },
      })
      timeline.current = tl

      if (firstRun.current) {
        const controls = carousel.querySelector('.hero-carousel__controls')
        const progress = carousel.querySelector('.hero-carousel__progress')

        carousel.classList.add('is-booting')

        slides.forEach((slide, i) => {
          gsap.set(slide, {
            autoAlpha: i === 0 ? 1 : 0,
            zIndex: i === 0 ? 1 : 0,
          })
        })

        // Sem filter no container/imagem: isso fazia a sombra da esquerda “aparecer depois”
        gsap.set(carousel, { autoAlpha: 0 })
        if (activeImg) gsap.set(activeImg, { scale: 1.18, clearProps: 'filter' })
        gsap.set(content, { autoAlpha: 0, y: 40, filter: 'blur(16px)' })
        if (controls) gsap.set(controls, { autoAlpha: 0, y: 14 })
        if (progress) gsap.set(progress, { autoAlpha: 0 })

        tl.to(
          carousel,
          {
            autoAlpha: 1,
            duration: 1.2,
            ease: 'power2.out',
          },
          0.15
        )

        if (activeImg) {
          tl.to(
            activeImg,
            {
              scale: 1.06,
              duration: 1.9,
              ease: 'power3.out',
            },
            0.15
          )
        }

        tl.to(
          content,
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1,
            stagger: 0.12,
            ease: 'power3.out',
            clearProps: 'filter',
          },
          0.4
        )

        if (controls) {
          tl.to(
            controls,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
            },
            0.85
          )
        }

        if (progress) {
          tl.to(
            progress,
            {
              autoAlpha: 1,
              duration: 0.55,
              ease: 'power2.out',
            },
            0.95
          )
        }

        tl.add(() => {
          carousel.classList.remove('is-booting')
        })

        firstRun.current = false
        prevIndex.current = index
        return
      }

      if (previous && previous !== active) {
        const prevImg = previous.querySelector('.hero-slide__media img')

        gsap.set(active, { autoAlpha: 0, zIndex: 1 })
        gsap.set(previous, { autoAlpha: 1, zIndex: 0 })
        if (activeImg) gsap.set(activeImg, { scale: 1.12, clearProps: 'filter' })
        if (prevImg) gsap.set(prevImg, { clearProps: 'filter' })
        gsap.set(content, { autoAlpha: 0, y: 22, filter: 'blur(8px)' })

        if (flash) {
          tl.fromTo(
            flash,
            { autoAlpha: 0 },
            {
              autoAlpha: 0.14,
              duration: 0.2,
              yoyo: true,
              repeat: 1,
              ease: 'sine.inOut',
            },
            0
          )
        }

        tl.to(
          active,
          {
            autoAlpha: 1,
            duration: 0.95,
            ease: 'power2.inOut',
          },
          0
        )

        if (activeImg) {
          tl.to(
            activeImg,
            {
              scale: 1.06,
              duration: 1.25,
              ease: 'power3.out',
            },
            0
          )
        }

        tl.to(
          previous,
          {
            autoAlpha: 0,
            duration: 0.85,
            ease: 'power2.inOut',
          },
          0.12
        )

        if (prevImg) {
          tl.to(
            prevImg,
            {
              scale: 1.1,
              duration: 0.95,
              ease: 'power2.inOut',
            },
            0
          )
        }

        tl.to(
          content,
          {
            autoAlpha: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 0.8,
            stagger: 0.09,
            ease: 'power3.out',
            clearProps: 'filter',
          },
          0.28
        )
      }

      prevIndex.current = index
    },
    { scope: root, dependencies: [index], revertOnUpdate: false }
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
        <div className="hero-carousel__flash" aria-hidden="true" />

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
