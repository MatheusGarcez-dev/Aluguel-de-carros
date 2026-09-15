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

export const REVIEWS = [
  {
    id: 'ernandes-freire',
    name: 'Ernandes Freire',
    country: 'BR',
    date: '6 de ago. de 2026',
    rating: 5,
    title: 'Quero agradecer pelo o ótimo…',
    text: 'Quero agradecer pelo o ótimo atendimento e atenção comigo. Vocês são excelentes pessoas',
  },
  {
    id: 'jullio-cezar',
    name: 'Júllio Cézar',
    country: 'BR',
    date: '15 de jun. de 2026',
    rating: 5,
    title: 'Experiência nota 10',
    text: 'Experiência nota 10! Atendimento rápido desde o WhatsApp, reserva sem complicação e retirada do carro super ágil. A devolução também foi muito tranquila e rápida. Tudo foi simples, prático e bem organizado. Estão de parabéns! Com certeza conquistaram um cliente fiel. Recomendo demais!',
  },
  {
    id: 'adley-cacula',
    name: 'Adley Cacula',
    country: 'BR',
    date: '13 de jun. de 2026',
    rating: 5,
    title: 'Deu tudo certo, sem atrasos, sem burocracia',
    text: 'Deu tudo certo, sem atrasos, sem burocracia e sem surpresas. Recomendo a todos. Eu optei pela proteção completa. Alugarei mais vezes. Recomendo a todos',
  },
  {
    id: 'marcos-costa',
    name: 'Marcos Costa',
    country: 'PT',
    date: '16 de abr. de 2026',
    rating: 5,
    title: 'Ótimo atendimento',
    text: 'Ótimo atendimento, bem solicito com certeza eu indico!!',
  },
  {
    id: 'gabriel-gonzaga',
    name: 'Gabriel Gonzaga',
    country: 'BR',
    date: '9 de abr. de 2026',
    rating: 5,
    title: 'Um maravilhoso atendimento',
    text: 'Um maravilhoso atendimento. Sempre disponível para responder e solucionar problemas ou dúvidas',
  },
  {
    id: 'alicia-banks',
    name: 'Alicia Banks',
    country: 'BR',
    date: '31 de jan. de 2026',
    rating: 5,
    title: '5/5 estrelas para Foco Aluguel de Carros',
    text: 'Os funcionários da loja são sempre gentis, prestativos e muito profissionais. Aprecio especialmente o Pedro, que é excepcional e eficiente em me ajudar a fazer reservas e em responder a quaisquer perguntas que eu possa ter. Recomendo muito esta locadora!',
  },
  {
    id: 'helli-ferreira',
    name: 'Helli Ferreira',
    country: 'BR',
    date: '11 de jan. de 2026',
    rating: 5,
    title: 'Sem palavras meu atendimento foi…',
    text: 'Sem palavras meu atendimento foi impecável com uma riqueza de detalhes e assistência na minha localização a Lucélia me atendeu com muito cuidado e dedicação, obrigado pessoal já vou indicar com certeza, sou agente de viagens e vou deixar para todos os meus clientes.',
  },
  {
    id: 'ramiro-cordeiro',
    name: 'Ramiro Cordeiro',
    country: 'BR',
    date: '31 de dez. de 2025',
    rating: 5,
    title: 'Atendimento',
    text: 'Atendimento, preço, tratamento da locação do veículo, veículo em bom estado.',
  },
  {
    id: 'marcos-ribeiro',
    name: 'Marcos Ribeiro Pires',
    country: 'BR',
    date: '31 de out. de 2025',
    rating: 5,
    title: 'Ótimo atendimento em tudo nota 10',
    text: 'Ótimo atendimento em tudo nota 10',
  },
  {
    id: 'sandra-silva',
    name: 'Sandra Silva',
    country: 'BR',
    date: '27 de ago. de 2025',
    rating: 5,
    title: 'Rapidez e qualidade',
    text: 'Atendimento excelente, rapidez no atendimento, gentileza e bom carro.',
  },
  {
    id: 'jasmin-venegas',
    name: 'Jasmin Venegas',
    country: 'BR',
    date: '20 de ago. de 2025',
    rating: 5,
    title: 'Tudo foi perfeito..',
    text: 'Tudo foi perfeito... Desde a chegada no aeroporto e o transfer à locadora, o carro excelente, novo, econômico e preço justo, além da atenção dos atendentes, tanto na retirada quanto na entrega do carro, independente da hora!!!!',
  },
  {
    id: 'ramon-alves',
    name: 'Ramon Alves',
    country: 'BR',
    date: '3 de ago. de 2025',
    rating: 5,
    title: 'Carro impecável',
    text: 'Carro impecável, atendimento excelente, feedback muito bom sempre indicarei e retornarei tbm ! Experiência inesquecível',
  },
  {
    id: 'jose-aleh',
    name: 'Jose Aleh Nascimento',
    country: 'BR',
    date: '2 de ago. de 2025',
    rating: 5,
    title: 'Extraordinário!',
    text: 'Estou bastante satisfeito com o serviço que me ofereceu, o melhor do mercado, experiência própria! Indico e recomendo ALUGUEL DE CARROS SALVADOR, o melhor da BA e o melhor do Brasil! Próxima férias estaremos juntos',
  },
  {
    id: 'fabiano-souza',
    name: 'Fabiano Souza',
    country: 'BR',
    date: '27 de jun. de 2025',
    rating: 5,
    title: 'Atendimento de excelência é bem…',
    text: 'Atendimento de excelência é bem explicativo, passando confiança no trabalho, fiz a locação sem dor de cabeça !',
  },
  {
    id: 'israel-fernandes',
    name: 'Israel Fernandes',
    country: 'BR',
    date: '13 de jun. de 2025',
    rating: 5,
    title: 'Segunda vez locando',
    text: 'Segunda vez locando, turma top demais! Pessoal muito atencioso e os valores justos. Carros novos e bons.',
  },
  {
    id: 'beg-ferreira',
    name: 'Beg Ferreira',
    country: 'BR',
    date: '27 de mai. de 2025',
    rating: 5,
    title: 'Atendimento transparente com rapidez e…',
    text: 'Atendimento transparente com rapidez e preços justo',
  },
  {
    id: 'luis-cesar',
    name: 'Luis César',
    country: 'BR',
    date: '23 de abr. de 2025',
    rating: 5,
    title: 'Muito top de mas',
    text: 'Muito, rápido o atendimento. Sem burocracia gostei muito cliente fiel. Indicarei a meus amigos e familiares.',
  },
  {
    id: 'clara-paiva',
    name: 'Clara Paiva',
    country: 'BR',
    date: '25 de mar. de 2025',
    rating: 5,
    title: 'Aluguel em POA',
    text: 'Nós alugamos o carro pela primeira vez em Porto Alegre e foi bem prático, tanto o atendimento no whatsapp como na loja física. Muito claros, objetivos e rápidos! Indico de olhos fechados.',
  },
  {
    id: 'joeliton-diton',
    name: 'Joeliton Diton',
    country: 'BR',
    date: '11 de mar. de 2025',
    rating: 5,
    title: 'Atendente Pedro e as meninas do balcão',
    text: 'Atendente Pedro e as meninas do balcão, rapazes da vistoria.. enfim, atendimento excelente!!',
  },
  {
    id: 'jose-carlos',
    name: 'Jose Carlos Vasconcellos Junio',
    country: 'BR',
    date: '1 de mar. de 2025',
    rating: 5,
    title: 'Ótimo atendimento',
    text: 'Ótimo atendimento, ótimo carro e ótima experiência. Contratei os serviços dessa empresa mais vezes.',
  },
]

