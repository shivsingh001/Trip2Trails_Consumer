import { useState } from 'react'
import useScrolled from '../../hooks/useScrolled'
import { BrandLogo } from '../shared'
import { SITE_CONFIG } from '../../config/siteConfig'
import styles from './Navbar.module.css'

export default function Navbar() {
  const scrolled = useScrolled(50)
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>

        {/* ── Brand ─────────────────────────────── */}
        <BrandLogo href="#" className={styles.logo} theme="light" />

        {/* ── Desktop nav ───────────────────────── */}
        <nav
          className={`${styles.links} ${menuOpen ? styles.linksOpen : ''}`}
          aria-label="Main navigation"
        >
          <a href="#categories" onClick={closeMenu}>Tour Categories</a>
          <a href="#destinations" onClick={closeMenu}>Destinations</a>
          <a href="#tours" onClick={closeMenu}>Popular Tours</a>
          <a href="#about" onClick={closeMenu}>About Us</a>
          <a href="#blog" onClick={closeMenu}>Blog</a>
        </nav>

        {/* ── Actions ───────────────────────────── */}
        <div className={styles.actions}>
          <a href={`tel:${SITE_CONFIG.contact.phoneE164}`} className={styles.phone}>
            <i className="fa-solid fa-phone" />
            {SITE_CONFIG.contact.phoneDisplay}
          </a>
          <a href="#tours" className="btn btn-primary" onClick={closeMenu}>
            Book Now
          </a>
        </div>

        {/* ── Hamburger ─────────────────────────── */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(o => !o)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <i className={menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'} />
        </button>

      </div>
    </header>
  )
}
