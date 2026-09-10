import { useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import HeroCarousel from '../components/HeroCarousel'
import BorderGlow from '../components/BorderGlow'
import { PROMOS, PROMO_EXCLUDED, whatsappLink, WHATSAPP_DISPLAY } from '../data/site'
import aboutImage from '../assets/sobre.png'
import midBanner from '../assets/banner-meio.png'
import logo3d from '../assets/logo-3d.png'

gsap.registerPlugin(useGSAP)

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

function IconSend() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4.5 11.2L19.2 4.4c.7-.3 1.4.4 1.1 1.1L13.5 20.2c-.3.7-1.3.6-1.5-.2l-1.5-5.4a1 1 0 00-.6-.6l-5.4-1.5c-.8-.2-.9-1.2-.2-1.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10.2 13.8L19.8 5.4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
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

const HOW_IT_WORKS = [
  {
    title: 'Envie sua necessidade',
    text: 'Datas, local de retirada e tipo de veículo — tudo pelo WhatsApp.',
    icon: IconSend,
  },
  {
    title: 'Receba opções',
    text: 'Comparamos disponibilidade e tarifas com parceiros em todo o país.',
    icon: IconBolt,
  },
  {
    title: 'Reserve com tranquilidade',
    text: 'Escolha a melhor oferta e finalize com suporte dedicado.',
    icon: IconPin,
  },
]

const TRUST_ITEMS = [
  { icon: IconCalendar, value: '2018', label: 'No mercado brasileiro' },
  { icon: IconPin, value: 'Brasil', label: 'Cobertura nacional' },
  { icon: IconUser, value: 'Humano', label: 'Atendimento personalizado' },
  { icon: IconBolt, value: 'Rápido', label: 'Cotação no WhatsApp' },
]

const FLEET_OUTSOURCE = {
  responsibilities: [
    'Licenciamento',
    'IPVA e seguro obrigatório',
    'Manutenção preventiva e reparos',
    'Renovação da frota',
  ],
  benefits: [
    {
      title: 'Disponibilidade 24/7',
      text: 'Veículos disponíveis o ano inteiro, alinhados à operação da empresa.',
    },
    {
      title: 'Frota flexível',
      text: 'Aumente ou reduza a quantidade conforme a demanda do momento.',
    },
    {
      title: 'Zero manutenção',
      text: 'Veículos revisados e atualizados — sem custo operacional para você.',
    },
    {
      title: 'Sem custo de renovação',
      text: 'A responsabilidade de renovar a frota fica com a terceirizadora.',
    },
  ],
}

export default function Home() {
  const root = useRef(null)

  useGSAP(
    () => {
      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      if (reduce) return

      const frame = root.current?.querySelector('.trust__frame')
      const items = root.current?.querySelectorAll('.trust__item')
      if (!frame || !items?.length) return

      gsap.set(frame, { opacity: 0, y: 20, filter: 'blur(12px)' })
      gsap.set(items, { opacity: 0, y: 18, filter: 'blur(10px)' })

      const tl = gsap.timeline({ delay: 0.2 })
      tl.to(frame, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        duration: 0.8,
        ease: 'power2.out',
        clearProps: 'filter',
      }).to(
        items,
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          clearProps: 'filter,transform',
        },
        '-=0.4'
      )
    },
    { scope: root, dependencies: [] }
  )

  return (
    <div ref={root}>
      <HeroCarousel />

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

      <section className="section about-home">
        <div className="container about-home__grid">
          <div className="about-home__content">
            <span className="section__eyebrow">A Empresa</span>
            <h2 className="section__title">Locação simples, atendimento de verdade</h2>
            <p className="section__lead">
              Desde 2018 a AlugueldeCarros.org conecta você a opções de frota em todo o
              Brasil — com consulta centralizada e suporte humanizado pelo WhatsApp.
            </p>
            <p className="about-home__text">
              Você informa datas e necessidades; nossa equipe compara disponibilidade e
              tarifas com parceiros do setor para encontrar a condição mais adequada à
              sua viagem.
            </p>
            <div className="about-home__actions">
              <Link className="btn" to="/empresa">
                Conhecer a empresa
              </Link>
              <a
                className="btn btn--ghost"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar no WhatsApp
              </a>
            </div>
          </div>

          <div className="about-home__media">
            <img
              src={aboutImage}
              alt="Showroom Aluguel de Carros Brasil"
              width={1200}
              height={800}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Extras</span>
            <h2 className="section__title">O essencial para a sua viagem</h2>
            <p className="section__lead">
              Além do veículo, você pode incluir itens que fazem diferença no dia a dia.
            </p>
          </div>
          <div className="features__grid">
            <BorderGlow className="feature-card" animated={false}>
              <article className="feature">
                <IconGps />
                <h3>GPS</h3>
                <p>Navegação prática para qualquer destino, sem depender só do celular.</p>
              </article>
            </BorderGlow>
            <BorderGlow className="feature-card" animated={false}>
              <article className="feature">
                <IconSeat />
                <h3>Cadeira para bebê</h3>
                <p>Segurança e conforto para viajar com crianças, sob consulta.</p>
              </article>
            </BorderGlow>
            <BorderGlow className="feature-card" animated={false}>
              <article className="feature">
                <IconRoute />
                <h3>Devolução flexível</h3>
                <p>
                  Possibilidade de devolução em outras cidades ou estados. Consulte condições.
                </p>
              </article>
            </BorderGlow>
          </div>
        </div>
      </section>

      <section className="section section--dark promo-teaser">
        <div className="container">
          <div className="promo-teaser__header">
            <div className="promo-teaser__copy">
              <span className="section__eyebrow">Promoções</span>
              <h2 className="section__title">Quanto mais tempo, melhor o valor</h2>
              <p className="section__lead">
                Condições especiais para locações longas nos grupos A e B. Valores por diária,
                sujeitos a disponibilidade.
              </p>
            </div>
            <Link className="btn btn--dark-ghost promo-teaser__cta" to="/promocoes">
              Ver condições completas
            </Link>
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
              </article>
            ))}
          </div>

          <p className="promo-note">*{PROMO_EXCLUDED}</p>
        </div>
      </section>

      <section className="mid-banner" aria-label="Reservar agora">
        <a
          className="mid-banner__link"
          href={whatsappLink('Olá! Quero reservar um carro agora.')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={midBanner}
            alt="Encontre o carro ideal para cada destino. Aluguel prático, seguro e com cobertura em todo o Brasil. Reservar agora."
            width={1920}
            height={640}
            loading="lazy"
          />
        </a>
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
                Uma forma inteligente de reduzir custos e liberar capital para a atividade
                principal da empresa — enquanto a gestão dos veículos fica sob nossa
                responsabilidade.
              </p>
              <div className="fleet-home__intro-actions">
                <Link className="btn" to="/terceirizacao">
                  Saiba mais
                </Link>
                <a
                  className="btn btn--ghost"
                  href={whatsappLink(
                    'Olá! Tenho interesse em terceirização de frota para minha empresa.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar proposta
                </a>
              </div>
            </div>
          </div>

          <div className="fleet-home__panels">
            <div className="fleet-home__panel">
              <h3 className="fleet-home__panel-title">Responsabilidades transferidas</h3>
              <p className="fleet-home__panel-lead">
                A empresa terceirizadora assume a complexidade operacional da frota.
              </p>
              <ul className="fleet-home__list">
                {FLEET_OUTSOURCE.responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="fleet-home__panel fleet-home__panel--benefits">
              <h3 className="fleet-home__panel-title">Vantagens do modelo</h3>
              <p className="fleet-home__panel-lead">
                Mais previsibilidade, flexibilidade e foco no core business.
              </p>
              <div className="fleet-home__benefits">
                {FLEET_OUTSOURCE.benefits.map((item) => (
                  <article key={item.title} className="fleet-home__benefit">
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-home">
        <div className="container">
          <div className="process-home__header">
            <span className="section__eyebrow">Como funciona</span>
            <h2 className="section__title">Três passos. Reserva resolvida.</h2>
            <p className="section__lead">
              Um atendimento centralizado, várias opções de frota. Você fala conosco —
              nós encontramos as melhores condições disponíveis.
            </p>
          </div>

          <ol className="process-home__track">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = step.icon
              return (
                <li key={step.title} className="process-home__step">
                  <div className="process-home__marker">
                    <span className="process-home__icon">
                      <Icon />
                    </span>
                    <span className="process-home__index">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </li>
              )
            })}
          </ol>

          <div className="process-home__footer">
            <a
              className="btn"
              href={whatsappLink('Olá! Quero iniciar uma cotação de aluguel.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Começar agora no WhatsApp
            </a>
            <span className="process-home__hint">Resposta rápida · Sem formulários longos</span>
          </div>
        </div>
      </section>

      <section className="section cta-final">
        <div className="container">
          <div className="cta-final__panel">
            <div className="cta-final__top">
              <div className="cta-final__copy">
                <div className="cta-final__meta">
                  <span className="section__eyebrow">Atendimento</span>
                  <span className="cta-final__status">Online agora</span>
                </div>
                <h2 className="cta-final__title">Pronto para cotar sua locação?</h2>
                <p className="cta-final__text">
                  Envie datas e destino no WhatsApp. Nossa equipe retorna com opções
                  disponíveis — sem formulários longos.
                </p>
              </div>

              <div className="cta-final__actions">
                <a
                  className="cta-final__btn cta-final__btn--primary"
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Falar no WhatsApp
                </a>
                <Link className="cta-final__btn cta-final__btn--ghost" to="/contato">
                  Outros contatos
                </Link>
              </div>
            </div>

            <div className="cta-final__bottom">
              <span>Central</span>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
