import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import BorderGlow from '../components/BorderGlow'
import { whatsappLink } from '../data/site'
import logo3d from '../assets/logo-3d.png'
import carG from '../assets/carros/grupo-g.png'
import carJ from '../assets/carros/grupo-j.png'

function IconCalendar() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="9" y="11" width="22" height="20" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M9 17h22M15 8v5M25 8v5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconScale() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M12 28h16M14 28V14a6 6 0 0112 0v14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M10 20h6M24 20h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function IconWrench() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path
        d="M26.5 10.5a5.5 5.5 0 00-7.4 6.4L11 25l4 4 8.1-8.1a5.5 5.5 0 003.4-10.4z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconWallet() {
  return (
    <svg className="feature__icon" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="8" y="12" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <path d="M8 17h24M26 22h3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

const RESPONSIBILITIES = [
  'Licenciamento',
  'IPVA e seguro obrigatório',
  'Manutenção preventiva e reparos',
  'Renovação e gestão da frota',
]

const BENEFITS = [
  {
    title: 'Disponibilidade contínua',
    text: 'Veículos alinhados à rotina da empresa, com reposição quando necessário.',
    icon: IconCalendar,
  },
  {
    title: 'Frota sob demanda',
    text: 'Ajuste o tamanho da frota conforme a demanda — sem comprar ou vender ativos.',
    icon: IconScale,
  },
  {
    title: 'Sem custo de manutenção',
    text: 'Revisão, reparos e atualização ficam com a operação terceirizada.',
    icon: IconWrench,
  },
  {
    title: 'Capital liberado',
    text: 'Recursos deixam de ficar imobilizados em veículos e vão para o negócio.',
    icon: IconWallet,
  },
]

const STEPS = [
  {
    title: 'Conte o perfil da operação',
    text: 'Quantidade de veículos, cidades, uso (equipe, entregas, substituição) e prazo.',
  },
  {
    title: 'Receba as opções viáveis',
    text: 'Montamos uma orientação com grupos adequados e condições sob consulta.',
  },
  {
    title: 'Avance com a proposta',
    text: 'Com o escopo alinhado, seguimos para formalização e início da operação.',
  },
]

const FIT = [
  'Equipes em campo com necessidade recorrente de veículo',
  'Empresas que querem reduzir custo fixo de frota própria',
  'Operações que precisam aumentar ou reduzir frota com agilidade',
  'Negócios que preferem previsibilidade em vez de imobilizar capital',
]

export default function Terceirizacao() {
  return (
    <>
      <PageHero
        eyebrow="Terceirização de Frota"
        title="Frota corporativa sem o peso operacional"
        lead="Documentação, manutenção e renovação ficam conosco. Sua empresa mantém o foco no que gera resultado."
      />

      <section className="section outsource-intro">
        <div className="container outsource-intro__grid">
          <figure className="outsource-intro__media">
            <img
              src={logo3d}
              alt="Aluguel de Carros Brasil"
              width={640}
              height={640}
              loading="eager"
            />
          </figure>

          <div className="outsource-intro__copy">
            <p className="empresa-kicker">O modelo</p>
            <h2>Terceirizar é transferir a complexidade</h2>
            <p>
              Em vez de manter frota própria — com licenciamento, impostos, oficina e
              renovação — a empresa contrata o uso dos veículos sob gestão especializada.
            </p>
            <p>
              O atendimento continua humano e direto no WhatsApp: você descreve a
              necessidade, nós avaliamos o que cabe na operação.
            </p>
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
          </div>
        </div>
      </section>

      <section className="outsource-transfer">
        <div className="container outsource-transfer__grid">
          <div className="outsource-transfer__copy">
            <p className="empresa-kicker">Responsabilidades transferidas</p>
            <h2>O que sai da sua operação</h2>
            <p>
              A terceirizadora assume a rotina administrativa e técnica da frota.
              Sua equipe deixa de acompanhar documentação e manutenção veículo a veículo.
            </p>
            <ul className="outsource-transfer__list">
              {RESPONSIBILITIES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="outsource-transfer__photos">
            <img
              src={carJ}
              alt="Pickup para uso utilitário e corporativo"
              width={800}
              height={500}
              loading="lazy"
            />
            <img
              src={carG}
              alt="SUV para uso corporativo"
              width={800}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <div className="section__header">
            <span className="section__eyebrow">Vantagens</span>
            <h2 className="section__title">Mais previsibilidade para a operação</h2>
            <p className="section__lead">
              Flexibilidade de tamanho, menos custo oculto e frota alinhada ao ritmo do
              negócio.
            </p>
          </div>

          <div className="features__grid outsource-benefits">
            {BENEFITS.map((item) => {
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

      <section className="section section--surface outsource-steps">
        <div className="container">
          <div className="outsource-steps__head">
            <p className="empresa-kicker">Como avançar</p>
            <h2>Três conversas objetivas</h2>
          </div>

          <ol className="outsource-steps__list">
            {STEPS.map((step, index) => (
              <li key={step.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section outsource-fit">
        <div className="container outsource-fit__grid">
          <div>
            <p className="empresa-kicker">Para quem faz sentido</p>
            <h2>Quando a terceirização costuma valer a pena</h2>
          </div>
          <ul className="outsource-fit__list">
            {FIT.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section outsource-cta">
        <div className="container outsource-cta__inner">
          <div>
            <h2>Quer uma proposta para sua empresa?</h2>
            <p>
              Informe tamanho da frota, cidades e perfil de uso. Retornamos com uma
              orientação clara.
            </p>
          </div>
          <div className="outsource-cta__actions">
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
            <Link className="btn btn--ghost" to="/contato">
              Contato comercial
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
