import PageHero from '../components/PageHero'
import BorderGlow from '../components/BorderGlow'
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
  { value: '14', label: 'Grupos de frota' },
  { value: 'BR', label: 'Cobertura nacional' },
]

const PILLARS = [
  {
    title: 'Consulta em um só lugar',
    text: 'Você descreve o período e o destino. Nós verificamos disponibilidade e condições com a rede de parceiros.',
    icon: IconSearch,
  },
  {
    title: 'Atendimento humano',
    text: 'Sem chatbot no meio do caminho. A conversa acontece no WhatsApp, com resposta objetiva sobre o que dá para reservar.',
    icon: IconChat,
  },
  {
    title: 'Condições antes do fechamento',
    text: 'Diária, quilometragem, extras e restrições de período ficam claros antes de você confirmar a reserva.',
    icon: IconCheck,
  },
]

export default function Empresa() {
  return (
    <>
      <PageHero
        eyebrow="A Empresa"
        title="Aluguel de carro com atendimento direto"
        lead="Desde 2018 a AlugueldeCarros.org organiza consultas de frota e tarifas para pessoas e empresas em todo o Brasil."
      />

      <section className="section empresa-intro">
        <div className="container empresa-intro__grid">
          <div className="empresa-intro__copy">
            <h2 className="empresa-intro__title">
              Menos busca. Mais opções na mesa.
            </h2>
            <p>
              Em vez de ligar para várias locadoras, você fala com a gente uma vez.
              Informamos o que está disponível para o seu período, com modelos
              equivalentes por grupo e valores sob consulta.
            </p>
            <p>
              O foco é prático: datas, cidade de retirada, perfil do veículo e
              eventuais extras — GPS, cadeira infantil ou devolução em outra praça.
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
            <p className="empresa-kicker">Como funciona</p>
            <h2>Do pedido à reserva, sem rodeio</h2>
            <ol className="empresa-process">
              <li>
                <strong>Você envia o pedido</strong>
                <span>Período, local e tipo de veículo no WhatsApp.</span>
              </li>
              <li>
                <strong>Consultamos a disponibilidade</strong>
                <span>Grupos e condições alinhados ao que você precisa.</span>
              </li>
              <li>
                <strong>Você escolhe e confirma</strong>
                <span>Com as regras da diária e do período já esclarecidas.</span>
              </li>
            </ol>
            <a
              className="btn"
              href={whatsappLink(
                'Olá! Quero conhecer melhor o atendimento da AlugueldeCarros.org.'
              )}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com a equipe
            </a>
          </div>
        </div>
      </section>

      <section className="section features-section empresa-pillars">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">O que nos diferencia</span>
            <h2 className="section__title">Operação enxuta, conversa objetiva</h2>
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
    </>
  )
}
