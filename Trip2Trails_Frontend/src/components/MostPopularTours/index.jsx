import { useState } from 'react'
import tours, { TOUR_FILTERS } from '../../data/tours'
import { SectionHeader } from '../shared'
import TourCard from './TourCard'
import styles from './MostPopularTours.module.css'

/**
 * MostPopularTours
 * Orchestrates filter state and delegates rendering to TourCard.
 * Adding a new filter tag only requires updating TOUR_FILTERS in data/tours.js.
 */
export default function MostPopularTours() {
  const [activeFilter, setActiveFilter] = useState('All')

  const visibleTours =
    activeFilter === 'All'
      ? tours
      : tours.filter((t) => t.tag === activeFilter)

  return (
    <section className={styles.section} id="tours">
      <div className="container">

        <SectionHeader
          tag="Curated Packages"
          title="Most Popular Tours"
          description="Discover tours crafted for unforgettable experiences — from quick weekends to week-long expeditions"
        />

        {/* ── Filter tabs ──────────────────────── */}
        <div className={styles.filters} role="group" aria-label="Filter tours">
          {TOUR_FILTERS.map((f) => (
            <button
              key={f}
              className={`${styles.filterBtn} ${activeFilter === f ? styles.filterActive : ''}`}
              onClick={() => setActiveFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* ── Tour grid ────────────────────────── */}
        <div className={styles.grid}>
          {visibleTours.map((tour) => (
            <TourCard key={tour.title} tour={tour} />
          ))}
        </div>

      </div>
    </section>
  )
}
