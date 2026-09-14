import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import SmoothScroll, { useSmoothScroll } from './SmoothScroll'
import RevealOnScroll from './RevealOnScroll'
import DocumentTitle from './DocumentTitle'
import PageIntro from './PageIntro'

function ScrollToTop() {
  const { pathname, search, hash } = useLocation()
  const lenisRef = useSmoothScroll()

  useEffect(() => {
    if (hash) return undefined

    const goTop = () => {
      const lenis = lenisRef?.current
      if (lenis) {
        lenis.scrollTo(0, { immediate: true, force: true })
      }
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    goTop()
    const frame = requestAnimationFrame(goTop)
    const timer = window.setTimeout(goTop, 0)

    return () => {
      cancelAnimationFrame(frame)
      window.clearTimeout(timer)
    }
  }, [pathname, search, hash, lenisRef])

  return null
}

export default function Layout() {
  return (
    <SmoothScroll>
      <PageIntro />
      <ScrollToTop />
      <DocumentTitle />
      <RevealOnScroll />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloat />
    </SmoothScroll>
  )
}
