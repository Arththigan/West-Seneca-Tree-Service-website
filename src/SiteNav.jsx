'use client'

import { useEffect, useState } from 'react'
import { Menu, Phone, X } from 'lucide-react'

const phone = '(716) 797-8733'

export default function SiteNav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 28)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])
  useEffect(() => {
    if (!open) return undefined
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', closeOnEscape)
    }
  }, [open])
  const navigate = (event) => {
    event.preventDefault()
    window.location.assign(event.currentTarget.getAttribute('href'))
  }

  return (
    <header className={scrolled ? 'site-header is-scrolled' : 'site-header'}>
      <a className="brand" href="/" onClick={navigate} aria-label="West Seneca Tree Service home">
        <img className="brand-logo" src="/west-seneca-tree-service-logo.png" alt="West Seneca Tree Service" width="1200" height="900" />
      </a>
      <button className="menu-button" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-navigation">
        {open ? <X /> : <Menu />}
      </button>
      <nav id="primary-navigation" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Primary navigation" onClick={() => setOpen(false)}>
        <a href="/" onClick={navigate}>Home</a>
        <a href="/services" onClick={navigate}>Services</a>
        <a href="/our-process" onClick={navigate}>Our process</a>
        <a href="/why-us" onClick={navigate}>Why us</a>
        <a href="/contact" onClick={navigate}>Contact us</a>
      </nav>
      <a className="nav-call" href="tel:+17167978733"><Phone size={17} /> {phone}</a>
    </header>
  )
}
