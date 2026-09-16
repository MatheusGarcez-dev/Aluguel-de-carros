import PageHero from '../components/PageHero'
import BorderGlow from '../components/BorderGlow'
import ReviewsCarousel from '../components/ReviewsCarousel'
import WhatsAppCta from '../components/WhatsAppCta'
import { whatsappLink } from '../data/site'
import logo3d from '../assets/logo-3d.png'
import aboutImage from '../assets/sobre.png'

function IconSearch() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="8.5" stroke="currentColor" strokeWidth="2" />
      <path d="M24.5 24.5L31 31" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconChat() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M10 13.5c0-1.9 1.6-3.5 3.5-3.5h13c1.9 0 3.5 1.6 3.5 3.5v9c0 1.9-1.6 3.5-3.5 3.5H18l-5.5 4v-4H13.5c-1.9 0-3.5-1.6-3.5-3.5v-9z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M15 17h10M15 21h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="8" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <path
        d="M14.5 20.5l4 4 7.5-8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

const METRICS = [
  { value: '2018', label: 'No mercado' },
  { value: '22', label: 'Grupos de frota' },
  { value: 'BR', label: 'Cobertura nacional' },
]

const PILLARS = [
  {
    title: 'Consulta em um só lugar',
    text: 'Informe as datas e o que precisa. Nós consultamos opções e tarifas com parceiros em todo o Brasil.',
    icon: IconSearch,
  },
  {
    title: 'Atendimento humanizado',
    text: 'Suporte pelo WhatsApp para ajudar você a encontrar a opção mais adequada à sua viagem.',
    icon: IconChat,
  },
  {
    title: 'Reserva mais simples e segura',
    text: 'Unimos tecnologia, eficiência e atendimento personalizado desde o primeiro contato.',
    icon: IconCheck,
  },
]

export default function Empresa() {
  return (
    <>
      <PageHero
        eyebrow="A Empresa"
        title="Aluguel de carro com atendimento humanizado"
        lead="Desde 2018 unimos tecnologia, eficiência e atendimento personalizado para tornar o processo de aluguel de carros mais simples e seguro."
      />

      <section className="section empresa-intro">
        <div className="container empresa-intro__grid">
          <div className="empresa-intro__copy">
            <h2 className="empresa-intro__title">
              Sobre a AlugueldeCarros.org
            </h2>
            <p>
              A AlugueldeCarros.org atua no mercado de locação de veículos
              oferecendo aos clientes uma forma prática de consultar opções de
              carros, disponibilidade e tarifas para sua viagem. Nosso
              atendimento é realizado de forma humanizada, com suporte pelo
              WhatsApp para ajudar você a encontrar a opção mais adequada para
              sua necessidade.
            </p>
            <p>
              A nível Brasil, trabalhamos com parceiros do setor de locação de
              veículos, possibilitando consultar diferentes opções de veículos e
              condições de aluguel. Dessa forma, você conta com a praticidade de
              resolver sua locação através de um único atendimento, sem precisar
              perder tempo procurando diferentes alternativas.
            </p>
            <p>
              Nossa atuação no mercado começou em 2018 e, desde então, buscamos
              unir tecnologia, eficiência e atendimento personalizado para tornar
              o processo de aluguel de carros mais simples e seguro.
            </p>

            <dl className="empresa-metrics">
              {METRICS.map((item) => (
                <div key={item.label} className="empresa-metrics__item">
                  <dt>{item.value}</dt>
                  <dd>{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="empresa-intro__figure">
            <img
              src={aboutImage}
              alt="Aluguel de Carros Brasil"
              width={1200}
              height={1200}
              loading="eager"
            />
          </figure>
        </div>
      </section>

      <section className="empresa-split">
        <div className="container empresa-split__grid">
          <figure className="empresa-split__media empresa-split__media--logo">
            <img
              src={logo3d}
              alt="Aluguel de Carros Brasil"
              width={640}
              height={640}
              loading="lazy"
            />
          </figure>

          <div className="empresa-split__copy">
            <p className="empresa-kicker">Por que alugar conosco</p>
            <h2>Por que alugar um carro com a AlugueldeCarros.org?</h2>
            <p>
              Nossa proposta é facilitar sua reserva desde o primeiro contato.
              Você informa as datas da locação e suas necessidades, e nossa
              equipe auxilia na consulta das opções disponíveis.
            </p>
            <p>
              Se você está procurando aluguel de carros em qualquer estado do
              Brasil, fale com nossa equipe e consulte as opções disponíveis
              para o período da sua viagem.
            </p>
            <p>
              Solicite sua cotação e encontre a melhor opção para sua viagem.
            </p>
            <WhatsAppCta
              href={whatsappLink(
                'Olá! Quero solicitar uma cotação de aluguel de carro.'
              )}
            >
              Solicitar cotação
            </WhatsAppCta>
          </div>
        </div>
      </section>

      <section className="section features-section empresa-pillars">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">O que nos diferencia</span>
            <h2 className="section__title">Praticidade, cobertura e atendimento</h2>
          </div>

          <div className="features__grid">
            {PILLARS.map((item) => {
              const Icon = item.icon
              return (
                <BorderGlow key={item.title} className="feature-card" animated={false}>
                  <article className="feature">
                    <Icon />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </article>
                </BorderGlow>
              )
            })}
          </div>
        </div>
      </section>

      <ReviewsCarousel />
    </>
  )
}
