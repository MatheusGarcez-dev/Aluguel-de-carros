import { REVIEWS } from '../data/site'

function Stars({ rating }) {
  return (
    <div className="review-card__stars" aria-label={`${rating} de 5 estrelas`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`review-card__star${i < rating ? ' is-on' : ''}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

function ReviewCard({ review }) {
  const initial = review.name.trim().charAt(0).toUpperCase()

  return (
    <article className="review-card">
      <header className="review-card__head">
        <span className="review-card__avatar" aria-hidden="true">
          {initial}
        </span>
        <div className="review-card__meta">
          <strong className="review-card__name">{review.name}</strong>
          <span className="review-card__info">
            {review.country}
            <span aria-hidden="true"> · </span>
            {review.date}
          </span>
        </div>
      </header>

      <Stars rating={review.rating} />
      <h3 className="review-card__title">{review.title}</h3>
      <p className="review-card__text">{review.text}</p>
    </article>
  )
}

export default function ReviewsCarousel() {
  return (
    <section className="section reviews" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section__header reviews__header">
          <span className="section__eyebrow">Avaliações</span>
          <h2 id="reviews-title" className="section__title">
            O que nossos clientes dizem
          </h2>
          <p className="section__lead">
            Feedback real de quem já alugou com a gente — atendimento, rapidez e
            confiança no processo.
          </p>
        </div>
      </div>

      <div className="reviews__marquee" aria-label="Carrossel de avaliações">
        <div className="reviews__viewport">
          <div className="reviews__track">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                className="reviews__list"
                aria-hidden={copy === 1 ? true : undefined}
              >
                {REVIEWS.map((review) => (
                  <li key={`${copy}-${review.id}`} className="reviews__item">
                    <ReviewCard review={review} />
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
