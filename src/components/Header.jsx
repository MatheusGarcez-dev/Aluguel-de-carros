import { NavLink, Link, useLocation } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import logo from '../assets/logo-aluguel.png'
import { NAV_LINKS, whatsappLink } from '../data/site'
import { useSmoothScroll } from './SmoothScroll'

gsap.registerPlugin(useGSAP)

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19.05 4.91A9.82 9.82 0 0012.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 004.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zm-7.01 15.24h-.01a8.21 8.21 0 01-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 015.83 2.41 8.18 8.18 0 012.41 5.83c0 4.54-3.7 8.24-8.25 8.24zm4.52-6.16c-.25-.12-1.47-.72-1.7-.8-.23-.09-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.76-1.84-.2-.49-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.88 2.4 1 2.56.12.17 1.75 2.67 4.23 3.74 1.77.76 2.24.83 2.7.76.46-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.17-.47-.29z" />
    </svg>
  )
}

export default function Header() {
  const { pathname } = useLocation()
  const headerRef = useRef(null)
  const lenisRef = useSmoothScroll()
  const lastScroll = useRef(0)
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)

  const close = () => setOpen(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    close()
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    document.body.classList.toggle('is-nav-open', open)
    const lenis = lenisRef?.current
    if (lenis) {
      if (open) lenis.stop()
      else lenis.start()
    }
    return () => {
      document.body.style.overflow = ''
      document.body.classList.remove('is-nav-open')
      lenis?.start()
    }
  }, [open, lenisRef])

  useGSAP(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const el = headerRef.current?.querySelector('.site-header__shell')
    if (!el || reduce) return

    gsap.fromTo(
      el,
      { y: -28, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power3.out',
        delay: 0.08,
        clearProps: 'transform,opacity',
      }
    )
  }, [])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      const delta = y - lastScroll.current

      setScrolled(y > 20)

      if (open) {
        setHidden(false)
        lastScroll.current = y
        return
      }

      if (y < 56) {
        setHidden(false)
      } else if (delta > 10) {
        setHidden(true)
      } else if (delta < -10) {
        setHidden(false)
      }

      lastScroll.current = y
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const headerClass = [
    'site-header',
    scrolled ? 'is-scrolled' : '',
    open ? 'is-menu-open' : '',
    hidden && !open ? 'is-hidden' : '',
  ]
    .filter(Boolean)
    .join(' ')

  const navRoot =
    typeof document !== 'undefined'
      ? document.getElementById('mobile-nav-root') || document.body
      : null

  const mobileMenu =
    mounted &&
    navRoot &&
    createPortal(
      <div
        className={`site-nav-layer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className="site-header__backdrop"
          aria-label="Fechar menu"
          tabIndex={open ? 0 : -1}
          onClick={close}
        />

        <div id="site-header-panel" className="site-header__panel">
          <div className="site-header__panel-inner">
            <nav className="site-header__panel-nav" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `site-header__panel-link${isActive ? ' is-active' : ''}`
                  }
                  onClick={close}
                  tabIndex={open ? 0 : -1}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="site-header__panel-footer">
              <a
                className="btn btn--full"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={close}
                tabIndex={open ? 0 : -1}
              >
                Solicitar cotação
              </a>
            </div>
          </div>
        </div>
      </div>,
      navRoot
    )

  return (
    <>
      <header ref={headerRef} className={headerClass}>
        <div className="site-header__shell">
          <div className="site-header__inner">
            <Link
              to="/"
              className="site-header__logo"
              onClick={close}
              aria-label="Página inicial — Aluguel de Carros"
            >
              <img src={logo} alt="Aluguel de Carros (Brasil)" width="168" height="40" />
            </Link>

            <nav className="site-header__nav" aria-label="Principal">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `site-header__link${isActive ? ' is-active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="site-header__actions">
              <a
                className="btn site-header__cta"
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconWhatsApp />
                Solicitar cotação
              </a>
            </div>

            <button
              type="button"
              className={`site-header__toggle${open ? ' is-open' : ''}`}
              aria-expanded={open}
              aria-controls="site-header-panel"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {mobileMenu}
    </>
  )
}
