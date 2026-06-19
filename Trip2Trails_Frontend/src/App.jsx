/**
 * App.jsx — root component.
 *
 * Responsibility: compose page sections in order.
 * No data, no logic — each section is self-contained.
 *
 * Imports use the folder index convention so that renaming a
 * component file only requires changing one place (the folder's index.jsx).
 */
import {
  Navbar,
  Hero,
  TourCategories,
  MostPopularTours,
  PlanYourTrip,
  Testimonials,
  BlogSection,
  Footer,
} from './components'
import { SITE_CONFIG } from './config/siteConfig'
import styles from './App.module.css'

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TourCategories />
        <MostPopularTours />
        <PlanYourTrip />
        <Testimonials />
        <BlogSection />
      </main>

      <Footer />

      {/* Floating WhatsApp CTA */}
      <a
        className={styles.whatsappFloat}
        href={SITE_CONFIG.links.whatsappGroup}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp" aria-hidden="true" />
      </a>
    </>
  )
}
