export const WHATSAPP_NUMBER = '5511956940669'
export const WHATSAPP_DISPLAY = '(11) 95694-0669'
export const EMAIL = 'contato@alugueldecarros.org'
export const BRAND = 'Aluguel de Carros'
export const BRAND_FULL = 'AlugueldeCarros.org'

export function whatsappLink(message = 'Olá! Gostaria de consultar opções de aluguel de carro.') {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const NAV_LINKS = [
  { to: '/', label: 'Início' },
  { to: '/frota', label: 'Frota & Tarifas' },
  { to: '/empresa', label: 'A Empresa' },
  { to: '/terceirizacao', label: 'Terceirização' },
  { to: '/promocoes', label: 'Promoções' },
  { to: '/contato', label: 'Contato' },
]

export const PROMO_EXCLUDED =
  'Promoção não válida para os seguintes meses: janeiro, fevereiro, junho, julho e dezembro.'

export const PROMOS = [
  {
    id: 'semanal',
    title: 'Semanal',
    subtitle: 'A partir de 7 dias',
    rates: [
      { group: 'Grupo A', price: '79,99' },
      { group: 'Grupo B', price: '84,99' },
    ],
  },
  {
    id: 'quinzenal',
    title: 'Quinzenal',
    subtitle: 'A partir de 15 dias',
    rates: [
      { group: 'Grupo A', price: '69,99' },
      { group: 'Grupo B', price: '79,99' },
    ],
  },
  {
    id: 'mensal',
    title: 'Mensal',
    subtitle: 'A partir de 30 dias',
    rates: [
      { group: 'Grupo A', price: '59,99' },
      { group: 'Grupo B', price: '69,99' },
    ],
  },
]

export const FLEET_DAILY = 'KM livre (mínimo 3 dias)'

export const FLEET_CATEGORIES = [
  { id: 'all', label: 'Todos' },
  { id: 'economico', label: 'Econômico' },
  { id: 'intermediario', label: 'Intermediário' },
  { id: 'suv', label: 'SUV / Família' },
  { id: 'utilitario', label: 'Utilitário' },
  { id: 'premium', label: 'Premium' },
]

/** Dados alinhados ao catálogo do site antigo (grupos A–P). */
export const FLEET_GROUPS = [
  {
    group: 'A',
    category: 'economico',
    models: 'Mobi, Kwid ou similar',
    description: 'Básico sem ar',
  },
  {
    group: 'B',
    category: 'economico',
    models: 'Mobi, Kwid ou similar',
    description: '2 portas com ar',
  },
  {
    group: 'C',
    category: 'economico',
    models: 'Gol, Onix ou similar',
    description: '4 portas completo',
  },
  {
    group: 'D',
    category: 'intermediario',
    models: 'Ford Ka Sedan, Voyage ou similar',
    description: '4 portas completo',
  },
  {
    group: 'E',
    category: 'intermediario',
    models: 'Ford Ka Sedan 1.5, Voyage 1.6 ou similar',
    description: '4 portas completo',
  },
  {
    group: 'F',
    category: 'intermediario',
    models: 'Onix, Argo, C3 ou similar',
    description: '4 portas completo automático',
  },
  {
    group: 'G',
    category: 'suv',
    models: 'T-Cross, Pulse, Creta ou similar',
    description: 'SUV 4 portas completo automático',
  },
  {
    group: 'H',
    category: 'suv',
    models: 'Spin 1.8, Doblo 1.8 ou similar',
    description: '07 lugares automáticos',
  },
  {
    group: 'I',
    category: 'premium',
    models: 'Audi A3, Corolla ou similar',
    description: 'Sedan completo automático',
  },
  {
    group: 'J',
    category: 'utilitario',
    models: 'Amarok, L200 Triton, Frontier ou similar',
    description: '4x4 manual',
  },
  {
    group: 'K',
    category: 'utilitario',
    models: 'Amarok, L200 Triton, Frontier ou similar',
    description: 'Automático',
  },
  {
    group: 'L',
    category: 'premium',
    models: 'Range Rover Sport ou similar',
    description: null,
  },
  {
    group: 'M',
    category: 'premium',
    models: 'Porsche 718 Boxster ou similar',
    description: null,
  },
  {
    group: 'N',
    category: 'utilitario',
    models: 'Peugeot Expert',
    description: 'Mini van 8 lugares',
  },
  {
    group: 'O',
    category: 'utilitario',
    models: 'Strada, Saveiro ou similar',
    description: 'Picape compacta',
  },
  {
    group: 'P',
    category: 'utilitario',
    models: 'Fiorino, Kangoo ou similar',
    description: 'Furgão compacto',
  },
]
