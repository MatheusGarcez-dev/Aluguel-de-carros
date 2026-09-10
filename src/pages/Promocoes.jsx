import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import { PROMOS, PROMO_EXCLUDED, whatsappLink } from '../data/site'

export default function Promocoes() {
  return (
    <>
      <PageHero
        eyebrow="Promoções"
        title="Diárias menores em locações mais longas"
        lead="Condições especiais para grupos A e B. Valores sob consulta e sujeitos a disponibilidade."
      />

      <section className="section promo-page">
        <div className="container">
          <div className="promo-page__intro">
            <p className="empresa-kicker">Planos promocionais</p>
            <h2>Quanto mais tempo, melhor o valor</h2>
            <p>
              Valores por diária nos grupos A e B. Confirme o período no WhatsApp antes
              de fechar — a promoção não vale em todos os meses.
            </p>
          </div>

          <div className="promo-page__plans">
            {PROMOS.map((promo, index) => {
              const featured = index === PROMOS.length - 1
              return (
                <article
                  key={promo.id}
                  className={`promo-page__card${featured ? ' is-featured' : ''}`}
                >
                  {featured ? <span className="promo-page__badge">Melhor custo</span> : null}

                  <header className="promo-page__head">
                    <h3>{promo.title}</h3>
                    <p>{promo.subtitle}</p>
                  </header>

                  <ul className="promo-page__rates">
                    {promo.rates.map((rate) => (
                      <li key={rate.group}>
                        <span>{rate.group}</span>
                        <strong>
                          <small>R$</small>
                          {rate.price}
                          <em>/dia</em>
                        </strong>
                      </li>
                    ))}
                  </ul>

                  <a
                    className={featured ? 'btn' : 'btn btn--ghost'}
                    href={whatsappLink(
                      `Olá! Quero consultar a promoção ${promo.title} (${promo.subtitle}).`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Consultar
                  </a>
                </article>
              )
            })}
          </div>

          <aside className="promo-page__note">
            <p>*{PROMO_EXCLUDED}</p>
          </aside>

          <div className="promo-page__footer">
            <div>
              <h3>Quer validar para o seu período?</h3>
              <p>Envie datas e cidade — confirmamos se a promoção se aplica.</p>
            </div>
            <div className="promo-page__actions">
              <a
                className="btn"
                href={whatsappLink(
                  'Olá! Quero consultar as promoções vigentes para aluguel de carro.'
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                Validar no WhatsApp
              </a>
              <Link className="btn btn--ghost" to="/frota">
                Ver frota
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
