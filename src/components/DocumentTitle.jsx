import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { BRAND } from '../data/site'

const PAGE_TITLES = {
  '/': `${BRAND} (Brasil) | Aluguel de carros com cotação no WhatsApp`,
  '/frota': `Frota & Tarifas | ${BRAND} (Brasil)`,
  '/empresa': `A Empresa | ${BRAND} (Brasil)`,
  '/terceirizacao': `Terceirização de Frota | ${BRAND} (Brasil)`,
  '/promocoes': `Promoções | ${BRAND} (Brasil)`,
  '/contato': `Contato | ${BRAND} (Brasil)`,
}

export default function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] || `${BRAND} (Brasil)`
  }, [pathname])

  return null
}
