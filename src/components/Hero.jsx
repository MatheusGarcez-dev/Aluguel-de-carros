import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import heroBg from '../assets/hero-bg.png'
import heroBgMobile from '../assets/hero-bg-mobile.png'
import { whatsappLink } from '../data/site'
import WhatsAppCta from './WhatsAppCta'

gsap.registerPlugin(useGSAP)

function IconFleet() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3.5 15.2h17l-1.15-4A2.4 2.4 0 0017.05 9.5H6.95a2.4 2.4 0 00-2.3 1.7L3.5 15.2z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <path
        d="M6.2 15.2v1.7c0 .7.55 1.25 1.25 1.25h1a1.25 1.25 0 001.25-1.25v-.2m5.1 0v.2c0 .7.55 1.25 1.25 1.25h1c.7 0 1.25-.55 1.25-1.25v-1.7"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinecap="round"
      />
      <circle cx="8.1" cy="15.2" r="1.05" fill="currentColor" />
      <circle cx="15.9" cy="15.2" r="1.05" fill="currentColor" />
      <path
        d="M8.2 9.5V8.1c0-.7.55-1.25 1.25-1.25h5.1c.7 0 1.25.55 1.25 1.25V9.5"
        stroke="currentColor"
        strokeWidth="1.55"
      />
      <path d="M10.2 6.2h3.6" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.2-5 6.2-10A6.2 6.2 0 0012 4.8 6.2 6.2 0 005.8 11c0 5 6.2 10 6.2 10z"
        stroke="currentColor"
        strokeWidth="1.55"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10.8" r="2.1" stroke="currentColor" strokeWidth="1.55" />
    </svg>
  )
}

const HERO_CARDS = [
  {
    to: '/frota',
    kicker: 'Frota & tarifas',
    label: 'Escolha o grupo ideal',
    detail: 'Econômico, intermediário e SUV com valores atualizados.',
    Icon: IconFleet,
    external: false,
  },
  {
    href: whatsappLink('Olá! Quero uma cotação rápida de aluguel.'),
    kicker: 'Cobertura nacional',
    label: 'Reserve pelo WhatsApp',
    detail: 'Atendimento humano, cotação rápida e confirmação direta.',
    Icon: IconPin,
    external: true,
  },
]

function HeroCard({ card }) {
  const { Icon, kicker, label, detail } = card
  const body = (
    <>
      <span className="hero__card-top">
        <span className="hero__card-icon">
          <Icon />
        </span>
        <span className="hero__card-kicker">{kicker}</span>
      </span>
      <strong className="hero__card-title">{label}</strong>
      <span className="hero__card-detail">{detail}</span>
    </>
  )

  if (card.external) {
    return (
      <a
        className="hero__card"
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {body}
      </a>
    )
  }

  return (
    <Link className="hero__card" to={card.to}>
      {body}
    </Link>
  )
}

export default function Hero() {
  const root = useRef(null)

  useGSAP(
    () => {
      const el = root.current
      if (!el) return

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const bg = el.querySelector('.hero__bg img')
      const bits = el.querySelectorAll(
        '.hero__eyebrow, .hero__title, .hero__text, .hero__actions > *, .hero__cards > *'
      )

      if (reduce) {
        gsap.set([bg, bits], { clearProps: 'all' })
        return
      }

      if (bg) gsap.set(bg, { scale: 1.03 })
      gsap.set(bits, { autoAlpha: 0, y: 20 })

      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (bg) {
        tl.to(bg, { scale: 1, duration: 1.5 }, 0)
      }

      tl.to(
        bits,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          stagger: 0.08,
          clearProps: 'transform',
        },
        0.15
      )
    },
    { scope: root, dependencies: [] }
  )

  return (
    <section ref={root} className="hero" aria-label="Destaque">
      <div className="hero__bg" aria-hidden="true">
        <picture>
          <source media="(min-width: 768px)" srcSet={heroBg} width={1672} height={941} />
          <img
            src={heroBgMobile}
            alt=""
            width={941}
            height={1672}
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>

      <div className="container hero__layout">
        <div className="hero__container">
          <p className="hero__eyebrow">Aluguel de Carros · Brasil</p>
          <h1 className="hero__title">Aluguel de carros sem burocracia.</h1>
          <p className="hero__text">
            Consulte frota, tarifas e disponibilidade em todo o Brasil — com atendimento
            direto no WhatsApp.
          </p>
          <div className="hero__actions">
            <WhatsAppCta
              href={whatsappLink('Olá! Quero consultar valores para aluguel de carro.')}
            >
              Falar no WhatsApp
            </WhatsAppCta>
            <Link className="btn btn--ghost" to="/frota">
              Ver frota
            </Link>
          </div>

          <div className="hero__cards">
            {HERO_CARDS.map((card) => (
              <HeroCard key={card.label} card={card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
