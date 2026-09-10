import { Link } from 'react-router-dom'
import logo from '../assets/logo-aluguel.png'
import {
  EMAIL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from '../data/site'

const INSTITUCIONAL = [
  { to: '/', label: 'Início' },
  { to: '/empresa', label: 'A Empresa' },
  { to: '/contato', label: 'Contato' },
]

const SERVICOS = [
  { to: '/frota', label: 'Frota & Tarifas' },
  { to: '/promocoes', label: 'Promoções' },
  { to: '/terceirizacao', label: 'Terceirização de Frota' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="site-footer__curve" aria-hidden="true">
        <svg viewBox="0 0 1440 96" preserveAspectRatio="none">
          <path d="M0 96V48c160 36 320 48 480 36s320-48 480-48 320 36 480 48v60H0Z" />
        </svg>
      </div>

      <div className="container site-footer__inner">
        <div className="site-footer__cta">
          <div className="site-footer__cta-copy">
            <p className="site-footer__cta-eyebrow">Cotação rápida</p>
            <h2 className="site-footer__cta-title">
              Precisa de um carro? Fale com a gente agora.
            </h2>
          </div>
          <a
            className="site-footer__cta-btn"
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp {WHATSAPP_DISPLAY}
          </a>
        </div>

        <div className="site-footer__main">
          <div className="site-footer__brand">
            <Link to="/" className="site-footer__logo" aria-label="Página inicial">
              <img src={logo} alt="Aluguel de Carros (Brasil)" />
            </Link>
            <p>
              Locação de veículos em todo o Brasil, com atendimento humanizado
              pelo WhatsApp desde 2018.
            </p>
          </div>

          <nav className="site-footer__col" aria-label="Institucional">
            <h3>Institucional</h3>
            <ul>
              {INSTITUCIONAL.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Serviços">
            <h3>Serviços</h3>
            <ul>
              {SERVICOS.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col site-footer__contact">
            <h3>Contato</h3>
            <div className="site-footer__contact-item">
              <span>WhatsApp / Plantão</span>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                {WHATSAPP_DISPLAY}
              </a>
            </div>
            <div className="site-footer__contact-item">
              <span>E-mail</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p>© {year} AlugueldeCarros.org. Todos os direitos reservados.</p>
          <p>Atendimento nacional via WhatsApp</p>
        </div>
      </div>
    </footer>
  )
}
