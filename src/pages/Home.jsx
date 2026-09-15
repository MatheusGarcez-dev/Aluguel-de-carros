import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import Hero from '../components/Hero'
import CarDrive from '../components/CarDrive'
import BorderGlow from '../components/BorderGlow'
import { PROMOS, PROMO_EXCLUDED, whatsappLink } from '../data/site'
import aboutImage from '../assets/sobre.png'
import logoMark from '../assets/logo-aluguel.png'
import logo3d from '../assets/logo-3d.png'

gsap.registerPlugin(useGSAP, ScrollTrigger)

function IconCalendar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5" width="17" height="15" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.5 10h17M8 3.5v3M16 3.5v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconPin() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s6.5-5.2 6.5-10.2A6.5 6.5 0 0012 4.3a6.5 6.5 0 00-6.5 6.5C5.5 15.8 12 21 12 21z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <circle cx="12" cy="10.8" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function IconUser() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="8" r="3.25" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M5.5 19.2c1.4-2.8 3.6-4.2 6.5-4.2s5.1 1.4 6.5 4.2"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M13 3L5.5 13.5H11L10 21l8.5-12H13L13 3z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconGps() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="2" />
      <path d="M20 6v4M20 30v4M6 20h4M30 20h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="20" r="2" fill="currentColor" />
    </svg>
  )
}

function IconSeat() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M12 28v-6a6 6 0 0112 0v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M10 28h16M14 32h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M18 10c2 0 4 1.5 4 4v2h-8v-2c0-2.5 2-4 4-4z" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function IconRoute() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M12 24s5.5-4.5 5.5-9A5.5 5.5 0 0012 9.5a5.5 5.5 0 00-5.5 5.5c0 4.5 5.5 9 5.5 9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="15" r="1.8" fill="currentColor" />
      <path
        d="M28 31s5.5-4.5 5.5-9A5.5 5.5 0 0028 16.5a5.5 5.5 0 00-5.5 5.5c0 4.5 5.5 9 5.5 9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <circle cx="28" cy="22" r="1.8" fill="currentColor" />
      <path
        d="M16.5 18.5c3 1.5 5.5 3 8 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="2.8 3.2"
      />
    </svg>
  )
}

const TRUST_ITEMS = [
  { icon: IconCalendar, value: '2018', label: 'No mercado brasileiro' },
  { icon: IconPin, value: 'Brasil', label: 'Cobertura nacional' },
  { icon: IconUser, value: 'Humano', label: 'Atendimento personalizado' },
  { icon: IconBolt, value: 'Rápido', label: 'Cotação no WhatsApp' },
]

const OUTSOURCE_POINTS = [
  'Licenciamento, IPVA e seguro',
  'Manutenção preventiva e reparos',
  'Renovação da frota',
  'Frota flexível conforme a demanda',
]

const ABOUT_MARQUEE = [
  'Desde 2018 no mercado',
  'Cobertura nacional',
  'Atendimento humanizado',
  'Cotação no WhatsApp',
  'Consulta centralizada',
  'Parceiros em todo o Brasil',
  'Sem burocracia',
  'Frota para cada necessidade',
  'Suporte rápido',
  'Locação simples',
]

export default function Home() {
  const root = useRef(null)
  const wipeRef = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      const frame = root.current?.querySelector('.trust__frame')
      const items = root.current?.querySelectorAll('.trust__item')
      if (!frame || !items?.length) return

      gsap.set(frame, { opacity: 0, y: 28, filter: 'blur(16px)' })
      gsap.set(items, { opacity: 0, y: 24, filter: 'blur(14px)' })

      const tl = gsap.timeline({ delay: 0.95 })
      tl.to(frame, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power3.out',
        clearProps: 'filter',
      }).to(
        items,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.85,
          stagger: 0.12,
          ease: 'power3.out',
          clearProps: 'filter,transform',
        },
        '-=0.55'
      )
    },
    { scope: root, dependencies: [] }
  )

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      const section = root.current?.querySelector('.about-home')
      if (!section) return

      const contentBits = section.querySelectorAll(
        '.about-home__content > .section__eyebrow, .about-home__content > .section__title, .about-home__content > .section__lead, .about-marquee, .about-home__actions'
      )
      const media = section.querySelector('.about-home__media')
      const targets = [...contentBits, media].filter(Boolean)
      if (!targets.length) return

      gsap.set(targets, {
        opacity: 0,
        y: 36,
        filter: 'blur(14px)',
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top 78%',
          once: true,
        },
      })

      tl.to(contentBits, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.95,
        stagger: 0.12,
        ease: 'power3.out',
        clearProps: 'filter,transform,opacity',
      })

      if (media) {
        tl.to(
          media,
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.05,
            ease: 'power3.out',
            clearProps: 'filter,transform,opacity',
          },
          0.2
        )
      }
    },
    { scope: root, dependencies: [] }
  )

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const wipe = wipeRef.current
      if (!wipe || reduce) return

      const veil = wipe.querySelector('.home-wipe__veil')
      const core = wipe.querySelector('.home-wipe__core')
      const logo = wipe.querySelector('.home-wipe__logo')
      const rings = wipe.querySelectorAll('.home-wipe__ring')
      const hint = wipe.querySelector('.home-wipe__hint')
      if (!veil || !core) return

      gsap.set(veil, { clipPath: 'circle(0% at 50% 50%)' })
      gsap.set(core, { scale: 0.72, opacity: 0 })
      if (logo) gsap.set(logo, { opacity: 0, scale: 0.88, filter: 'blur(10px)' })
      if (rings.length) gsap.set(rings, { scale: 0.55, opacity: 0 })
      if (hint) gsap.set(hint, { opacity: 0, y: 16 })

      const tl = gsap.timeline({
        defaults: { ease: 'sine.inOut' },
        scrollTrigger: {
          trigger: wipe,
          start: 'top top',
          end: '+=220%',
          pin: true,
          scrub: 1.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      })

      tl.to(
        core,
        {
          scale: 1,
          opacity: 1,
          duration: 0.32,
          ease: 'power3.out',
        },
        0
      )

      if (logo) {
        tl.to(
          logo,
          {
            opacity: 1,
            scale: 1,
            filter: 'blur(0px)',
            duration: 0.4,
            ease: 'power2.out',
          },
          0.04
        )
      }

      if (rings.length) {
        tl.to(
          rings,
          {
            scale: 1,
            opacity: 1,
            duration: 0.45,
            stagger: 0.08,
            ease: 'power2.out',
          },
          0.1
        )
      }

      if (hint) {
        tl.to(
          hint,
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            ease: 'power2.out',
          },
          0.12
        )
      }

      tl.to(
        veil,
        {
          clipPath: 'circle(16% at 50% 50%)',
          duration: 0.4,
          ease: 'sine.out',
        },
        0.28
      )

      if (rings.length) {
        tl.to(
          rings,
          {
            scale: (i) => 1.35 + i * 0.45,
            opacity: 0,
            duration: 0.7,
            stagger: 0.06,
            ease: 'power1.out',
          },
          0.45
        )
      }

      tl.to(
        veil,
        {
          clipPath: 'circle(72% at 50% 50%)',
          duration: 0.55,
          ease: 'sine.inOut',
        },
        0.6
      )

      tl.to(
        veil,
        {
          clipPath: 'circle(160% at 50% 50%)',
          duration: 0.5,
          ease: 'power2.inOut',
        },
        1.1
      )

      if (hint) {
        tl.to(
          hint,
          {
            opacity: 0,
            y: -8,
            duration: 0.35,
            ease: 'sine.in',
          },
          0.9
        )
      }

      if (logo) {
        tl.to(
          logo,
          {
            opacity: 0,
            scale: 1.12,
            filter: 'blur(8px)',
            duration: 0.4,
            ease: 'sine.in',
          },
          0.95
        )
      }

      tl.to(
        core,
        {
          opacity: 0,
          scale: 1.06,
          duration: 0.35,
          ease: 'sine.in',
        },
        1.05
      )

      ScrollTrigger.refresh()
    },
    { scope: root, dependencies: [] }
  )

  return (
    <div ref={root} className="home">
      <div className="home__light">
        <Hero />

        <section className="trust" aria-label="Diferenciais">
          <div className="trust__frame">
            <ul className="trust__list">
              {TRUST_ITEMS.map((item) => {
                const Icon = item.icon
                return (
                  <li key={item.value} className="trust__item">
                    <span className="trust__icon">
                      <Icon />
                    </span>
                    <span className="trust__copy">
                      <strong className="trust__value">{item.value}</strong>
                      <span className="trust__label">{item.label}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>
        </section>

        <section className="wa-strip wa-strip--light" aria-label="Cotação rápida">
          <div className="container wa-strip__inner">
            <p className="wa-strip__text">
              Precisa de um carro? Cotação rápida no WhatsApp.
            </p>
            <a
              className="btn"
              href={whatsappLink('Olá! Quero receber uma cotação de aluguel de carro.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Receber cotação agora
            </a>
          </div>
        </section>

        <section className="section features-section">
          <div className="container">
            <CarDrive />
            <div className="section__header">
              <span className="section__eyebrow">Extras</span>
              <h2 className="section__title">O essencial para a sua viagem</h2>
            </div>
            <div className="features__grid">
              <BorderGlow className="feature-card" animated={false}>
                <article className="feature">
                  <IconGps />
                  <h3>GPS</h3>
                  <p>Navegação prática para qualquer destino.</p>
                </article>
              </BorderGlow>
              <BorderGlow className="feature-card" animated={false}>
                <article className="feature">
                  <IconSeat />
                  <h3>Cadeira para bebê</h3>
                  <p>Segurança para viajar com crianças, sob consulta.</p>
                </article>
              </BorderGlow>
              <BorderGlow className="feature-card" animated={false}>
                <article className="feature">
                  <IconRoute />
                  <h3>Devolução flexível</h3>
                  <p>Devolução em outras cidades ou estados, sob consulta.</p>
                </article>
              </BorderGlow>
            </div>
            <div className="features-section__cta">
              <a
                className="btn"
                href={whatsappLink(
                  'Olá! Quero consultar extras (GPS, cadeira para bebê ou devolução flexível).'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Consultar extras no WhatsApp
              </a>
            </div>
          </div>
        </section>

        <section className="section about-home">
          <div className="container about-home__grid">
            <div className="about-home__content">
              <span className="section__eyebrow">A Empresa</span>
              <h2 className="section__title">Locação simples, atendimento de verdade</h2>
              <p className="section__lead">
                Desde 2018 conectamos você a opções de frota em todo o Brasil — com consulta
                centralizada e suporte humanizado pelo WhatsApp.
              </p>

              <div className="about-marquee" aria-label="Diferenciais da empresa">
                <div className="about-marquee__viewport">
                  <div className="about-marquee__track">
                    {[0, 1].map((copy) => (
                      <ul
                        key={copy}
                        className="about-marquee__list"
                        aria-hidden={copy === 1 ? true : undefined}
                      >
                        {ABOUT_MARQUEE.map((item) => (
                          <li key={`${copy}-${item}`} className="about-marquee__item">
                            <span className="about-marquee__dot" aria-hidden="true" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </div>
                </div>
              </div>

              <div className="about-home__actions">
                <a
                  className="btn"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
                <Link className="btn btn--ghost" to="/empresa">
                  Conhecer a empresa
                </Link>
              </div>
            </div>

            <div className="about-home__media">
              <img
                src={aboutImage}
                alt="Showroom Aluguel de Carros Brasil"
                width={1200}
                height={1200}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>
        </section>
      </div>

      <section
        ref={wipeRef}
        className="home-wipe"
        aria-hidden="true"
      >
        <div className="home-wipe__stage">
          <div className="home-wipe__veil" />
          <div className="home-wipe__core">
            <span className="home-wipe__ring" />
            <span className="home-wipe__ring" />
            <span className="home-wipe__ring" />
            <div className="home-wipe__disc">
              <img
                className="home-wipe__logo"
                src={logoMark}
                alt=""
                width={160}
                height={40}
                decoding="async"
              />
            </div>
          </div>
          <p className="home-wipe__hint">Promoções e frota corporativa</p>
        </div>
      </section>

      <div className="home__dark">
        <section className="section promo-teaser">
          <div className="container">
            <div className="promo-teaser__header">
              <div className="promo-teaser__copy">
                <span className="section__eyebrow">Promoções</span>
                <h2 className="section__title">Quanto mais tempo, melhor o valor</h2>
                <p className="section__lead">
                  Condições especiais para locações longas nos grupos A e B.
                </p>
              </div>
              <div className="promo-teaser__actions">
                <a
                  className="btn"
                  href={whatsappLink('Olá! Quero consultar as promoções vigentes.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cotar no WhatsApp
                </a>
                <Link className="btn btn--dark-ghost" to="/promocoes">
                  Ver condições
                </Link>
              </div>
            </div>

            <div className="promo-plans">
              {PROMOS.map((promo, i) => (
                <article
                  key={promo.id}
                  className={`promo-plan${i === PROMOS.length - 1 ? ' promo-plan--featured' : ''}`}
                >
                  <header className="promo-plan__head">
                    <span className="promo-plan__label">{promo.title}</span>
                    <span className="promo-plan__duration">{promo.subtitle}</span>
                  </header>

                  <div className="promo-plan__rates">
                    {promo.rates.map((rate) => (
                      <div key={rate.group} className="promo-plan__rate">
                        <span className="promo-plan__group">{rate.group}</span>
                        <strong className="promo-plan__price">
                          R$ {rate.price}
                          <span>/dia</span>
                        </strong>
                      </div>
                    ))}
                  </div>

                  <a
                    className="promo-plan__cta"
                    href={whatsappLink(
                      `Olá! Tenho interesse na promoção ${promo.title.toLowerCase()} (${promo.subtitle}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Reservar no WhatsApp
                  </a>
                </article>
              ))}
            </div>

            <p className="promo-note">*{PROMO_EXCLUDED}</p>
          </div>
        </section>

        <section className="wa-strip wa-strip--dark" aria-label="Falar com atendimento">
          <div className="container wa-strip__inner">
            <p className="wa-strip__text">
              Atendimento humano, direto no WhatsApp.
            </p>
            <a
              className="btn"
              href={whatsappLink('Olá! Quero falar com o atendimento.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chamar no WhatsApp
            </a>
          </div>
        </section>

        <section className="section fleet-home">
          <div className="container">
            <div className="fleet-home__intro">
              <div className="fleet-home__media">
                <img
                  src={logo3d}
                  alt="Aluguel de Carros Brasil"
                  width={640}
                  height={360}
                  loading="lazy"
                />
              </div>

              <div className="fleet-home__intro-content">
                <span className="section__eyebrow">Terceirização de Frota</span>
                <h2 className="section__title">Frota corporativa sem o peso operacional</h2>
                <p className="section__lead">
                  Reduza custos e libere capital — a gestão dos veículos fica sob nossa
                  responsabilidade.
                </p>
                <ul className="fleet-home__list fleet-home__list--inline">
                  {OUTSOURCE_POINTS.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="fleet-home__intro-actions">
                  <a
                    className="btn"
                    href={whatsappLink(
                      'Olá! Tenho interesse em terceirização de frota para minha empresa.'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Solicitar proposta
                  </a>
                  <Link className="btn btn--ghost" to="/terceirizacao">
                    Saiba mais
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-final">
          <div className="container">
            <div className="cta-final__panel cta-final__panel--compact">
              <div className="cta-final__copy">
                <h2 className="cta-final__title">Pronto para cotar?</h2>
                <p className="cta-final__text">
                  Envie datas e destino no WhatsApp. Retornamos com opções disponíveis.
                </p>
              </div>
              <div className="cta-final__actions">
                <a
                  className="cta-final__btn cta-final__btn--primary"
                  href={whatsappLink('Olá! Quero iniciar uma cotação de aluguel agora.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Receber cotação agora
                </a>
                <a
                  className="cta-final__btn cta-final__btn--ghost"
                  href={whatsappLink('Olá! Tenho uma dúvida sobre aluguel de carro.')}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tirar dúvida no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
