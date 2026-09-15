import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/globals.scss'
import './styles/buttons.scss'
import './styles/header.scss'
import './styles/footer.scss'
import './styles/border-glow.scss'
import './styles/pages.scss'
import './styles/reveal.scss'
import './styles/car-drive.scss'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
