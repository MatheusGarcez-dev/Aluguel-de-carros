import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import WhatsAppCta from '../components/WhatsAppCta'
import {
  EMAIL,
  FLEET_CATEGORIES,
  FLEET_DAILY,
  FLEET_GROUPS,
  PROMO_EXCLUDED,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from '../data/site'
import imgGrupoA from '../assets/carros/grupo-a.png'
import imgGrupoB from '../assets/carros/grupo-b.png'
import imgGrupoC from '../assets/carros/grupo-c.png'
import imgGrupoD from '../assets/carros/grupo-d.png'
import imgGrupoE from '../assets/carros/grupo-e.png'
import imgGrupoF from '../assets/carros/grupo-f.png'
import imgGrupoG from '../assets/carros/grupo-g.png'
import imgGrupoH from '../assets/carros/grupo-h.png'
import imgGrupoI from '../assets/carros/grupo-i.png'
import imgGrupoJ from '../assets/carros/grupo-j.png'
import imgGrupoK from '../assets/carros/grupo-k.png'
import imgGrupoL from '../assets/carros/grupo-l.png'
import imgGrupoM from '../assets/carros/grupo-m.png'
import imgGrupoN from '../assets/carros/grupo-n.png'
import imgGrupoO from '../assets/carros/grupo-o.png'
import imgGrupoP from '../assets/carros/grupo-p.png'

const FLEET_IMAGES = {
  A: imgGrupoA,
  B: imgGrupoB,
  C: imgGrupoC,
  D: imgGrupoD,
  E: imgGrupoE,
  F: imgGrupoF,
  G: imgGrupoG,
  H: imgGrupoH,
  I: imgGrupoI,
  J: imgGrupoJ,
  K: imgGrupoK,
  L: imgGrupoL,
  M: imgGrupoM,
  N: imgGrupoN,
  O: imgGrupoO,
  P: imgGrupoP,
}

function IconCar() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 16l1.4-4.2A2 2 0 018.3 10h7.4a2 2 0 011.9 1.8L19 16M5 16h14v2.5a1 1 0 01-1 1h-1.2a1.8 1.8 0 01-3.6 0H10.8a1.8 1.8 0 01-3.6 0H6a1 1 0 01-1-1V16z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M7.5 10l1.2-3.2A1.5 1.5 0 0110.1 5.8h3.8a1.5 1.5 0 011.4 1L16.5 10" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function IconList() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8 7h11M8 12h11M8 17h11M5 7h.01M5 12h.01M5 17h.01"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconArrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 12h12M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7.5l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M8.2 4.8c.4-.8 1.4-1.1 2.1-.6l1.8 1.2c.7.4.9 1.3.5 2l-.8 1.4a1.5 1.5 0 00.2 1.7l2.7 2.7c.5.5 1.2.6 1.7.2l1.4-.8c.7-.4 1.6-.2 2 .5l1.2 1.8c.5.7.2 1.7-.6 2.1a6.8 6.8 0 01-3.5.9C11.2 17.9 6.1 12.8 6.1 6.3c0-1.2.3-2.4.9-3.5z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function FleetCard({ item }) {
  const image = FLEET_IMAGES[item.group]

  return (
    <article className="fleet-card">
      <div className="fleet-card__media">
        <img
          src={image}
          alt={`Grupo ${item.group} — ${item.models}`}
          className="fleet-card__img"
          loading="lazy"
          decoding="async"
        />
      </div>

      <div className="fleet-card__body">
        <span className="fleet-card__badge">Grupo {item.group}</span>

        <h3 className="fleet-card__models">
          <span>Carros:</span> {item.models}
        </h3>

        <ul className="fleet-card__details">
          <li>
            <IconCar />
            <span>
              <strong>Diária:</strong> {FLEET_DAILY}
            </span>
          </li>
          {item.description ? (
            <li>
              <IconList />
              <span>
                <strong>Descrição:</strong> {item.description}
              </span>
            </li>
          ) : null}
          <li>
            <IconArrow />
            <span>
              <strong>Valor da diária:</strong>{' '}
              <em className="fleet-card__price">A consultar</em>
            </span>
          </li>
        </ul>

        <p className="fleet-card__note">*{PROMO_EXCLUDED}</p>

        <a
          className="btn fleet-card__cta"
          href={whatsappLink(
            `Olá! Quero reservar o Grupo ${item.group} (${item.models}).`
          )}
          target="_blank"
          rel="noopener noreferrer"
        >
          Reservar agora
        </a>
      </div>
    </article>
  )
}

export default function Frota() {
  const [filter, setFilter] = useState('all')

  const filtered = useMemo(() => {
    if (filter === 'all') return FLEET_GROUPS
    return FLEET_GROUPS.filter((item) => item.category === filter)
  }, [filter])

  return (
    <>
      <PageHero
        eyebrow="Frota & Tarifas"
        title="Escolha o grupo ideal para o seu trajeto"
        lead="Modelos equivalentes conforme disponibilidade. Filtre por categoria e reserve direto no WhatsApp."
      />

      <section className="section fleet-catalog">
        <div className="container">
          <WhatsAppCta
            className="fleet-catalog__cta"
            full
            href={whatsappLink('Olá! Quero consultar grupos disponíveis e tarifas.')}
          >
            Receber cotação agora
          </WhatsAppCta>

          <div className="fleet-catalog__toolbar">
            <div className="fleet-catalog__intro">
              <h2 className="section__title">Grupos disponíveis</h2>
              <p className="section__lead">
                O veículo entregue será do grupo escolhido ou similar — confirme o
                modelo na cotação.
              </p>
            </div>

            <div className="fleet-filters" role="tablist" aria-label="Filtrar por categoria">
              {FLEET_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat.id}
                  className={`fleet-filters__btn${filter === cat.id ? ' is-active' : ''}`}
                  onClick={() => setFilter(cat.id)}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="fleet-grid">
            {filtered.map((item) => (
              <FleetCard key={item.group} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--surface fleet-contact">
        <div className="container">
          <div className="section__header fleet-contact__header">
            <span className="section__eyebrow">Nosso contato</span>
            <h2 className="section__title">Fale direto com a equipe</h2>
            <p className="section__lead">
              Aqui você tem acesso rápido aos canais de atendimento para cotação e
              reserva.
            </p>
          </div>

          <div className="fleet-contact__grid">
            <a className="fleet-contact__card" href={`mailto:${EMAIL}`}>
              <span className="fleet-contact__icon">
                <IconMail />
              </span>
              <h3>E-mail</h3>
              <p>{EMAIL}</p>
            </a>

            <a
              className="fleet-contact__card"
              href={whatsappLink('Olá! Gostaria de consultar frota e tarifas.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="fleet-contact__icon">
                <IconPhone />
              </span>
              <h3>WhatsApp</h3>
              <p>{WHATSAPP_DISPLAY}</p>
            </a>

            <div className="fleet-contact__card fleet-contact__card--cta">
              <h3>Solicitar orçamento</h3>
              <p>Envie período, cidade e grupo desejado — retornamos com opções.</p>
              <div className="fleet-contact__actions">
                <a
                  className="btn"
                  href={whatsappLink(
                    'Olá! Quero receber um orçamento de aluguel de carro.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Receber orçamento
                </a>
                <Link className="btn btn--ghost" to="/promocoes">
                  Ver promoções
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
