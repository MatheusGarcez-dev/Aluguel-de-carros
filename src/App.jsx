import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Frota from './pages/Frota'
import Empresa from './pages/Empresa'
import Terceirizacao from './pages/Terceirizacao'
import Promocoes from './pages/Promocoes'
import Contato from './pages/Contato'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="frota" element={<Frota />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="terceirizacao" element={<Terceirizacao />} />
          <Route path="promocoes" element={<Promocoes />} />
          <Route path="contato" element={<Contato />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
