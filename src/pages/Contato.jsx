import { useState } from 'react'
import PageHero from '../components/PageHero'
import {
  EMAIL,
  WHATSAPP_DISPLAY,
  whatsappLink,
} from '../data/site'

export default function Contato() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const nome = data.get('nome')
    const telefone = data.get('telefone')
    const cidade = data.get('cidade')
    const periodo = data.get('periodo')
    const mensagem = data.get('mensagem')

    const text = [
      'Olá! Gostaria de um orçamento.',
      `Nome: ${nome}`,
      `Telefone: ${telefone}`,
      cidade ? `Cidade/UF: ${cidade}` : null,
      periodo ? `Período: ${periodo}` : null,
      mensagem ? `Detalhes: ${mensagem}` : null,
    ]
      .filter(Boolean)
      .join('\n')

    setSent(true)
    window.open(whatsappLink(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Fale com a gente"
        lead="Atendimento principal pelo WhatsApp. Resposta rápida para cotações e dúvidas sobre frota, tarifas e terceirização."
      />

      <section className="section">
        <div className="container contact-grid">
          <div>
            <span className="online-badge" style={{ marginBottom: '1.25rem' }}>
              Estamos online
            </span>
            <div className="contact-channels">
              <div className="contact-channel">
                <span>WhatsApp / Central</span>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {WHATSAPP_DISPLAY}
                </a>
                <p>Principal e plantão</p>
              </div>
              <div className="contact-channel">
                <span>E-mail</span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                <p>Para propostas e assuntos comerciais</p>
              </div>
              <div className="contact-channel">
                <span>Horário</span>
                <strong>Atendimento contínuo</strong>
                <p>Plantão disponível no mesmo número</p>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h2 style={{ fontSize: '1.35rem', marginBottom: '0.25rem' }}>
              Solicitar orçamento
            </h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '0.5rem' }}>
              Preencha e enviaremos a mensagem direto para o WhatsApp.
            </p>

            {sent && (
              <div className="form-success" role="status">
                Abrimos o WhatsApp com seus dados. Se a janela não abriu, use o botão flutuante.
              </div>
            )}

            <div className="form-row">
              <div className="field">
                <label htmlFor="nome">Nome</label>
                <input id="nome" name="nome" type="text" required autoComplete="name" />
              </div>
              <div className="field">
                <label htmlFor="telefone">Telefone</label>
                <input
                  id="telefone"
                  name="telefone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="(11) 90000-0000"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="cidade">Cidade / UF</label>
                <input id="cidade" name="cidade" type="text" placeholder="Ex.: São Paulo / SP" />
              </div>
              <div className="field">
                <label htmlFor="periodo">Período da locação</label>
                <input id="periodo" name="periodo" type="text" placeholder="Ex.: 10 a 17/04" />
              </div>
            </div>

            <div className="field">
              <label htmlFor="mensagem">Observações</label>
              <textarea
                id="mensagem"
                name="mensagem"
                placeholder="Tipo de veículo, extras (GPS, cadeira), devolução em outra cidade..."
              />
            </div>

            <button type="submit" className="btn btn--full">
              Enviar no WhatsApp
            </button>
          </form>
        </div>
      </section>
    </>
  )
}
