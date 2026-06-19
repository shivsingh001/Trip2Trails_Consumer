/**
 * useScrolled
 * Returns true once the page has scrolled past `threshold` pixels.
 * Used by Navbar to switch between transparent and solid backgrounds.
 */
import { useState, useEffect } from 'react'

export default function useScrolled(threshold = 50) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > threshold)

    // Set initial value in case page loads mid-scroll (e.g. browser restore)
    handleScroll()

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [threshold])

  return scrolled
}
