import { useState } from 'react'
import categories from '../../data/categories'
import { SectionHeader } from '../shared'
import styles from './TourCategories.module.css'

/* ── Sub-component: single category card ──────── */
function CategoryCard({ title, img, icon, itinerary }) {
  const isComingSoon = !itinerary
  
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={img} alt={title} loading="lazy" />
        <div className={styles.imgOverlay} />
        {isComingSoon && (
          <div className={styles.comingSoonOverlay}>
            <span className={styles.comingSoonText}>Coming Soon</span>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <span className={styles.icon}>
          <i className={`fa-solid ${icon}`} aria-hidden="true" />
        </span>
        <h3>{title}</h3>
        {!isComingSoon && itinerary && (
          <a
            href={itinerary}
            download
            className={styles.downloadBtn}
            onClick={(e) => e.stopPropagation()}
          >
            <i className="fa-solid fa-download" aria-hidden="true" />
            Download Itinerary
          </a>
        )}
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────── */
export default function TourCategories() {
  const sortedCategories = [...categories].sort(
    (left, right) => Number(Boolean(right.itinerary)) - Number(Boolean(left.itinerary))
  )
  const [currentIndex, setCurrentIndex] = useState(0)
  const visibleCount = 3
  const maxIndex = Math.max(0, sortedCategories.length - visibleCount)
  const visibleCategories = sortedCategories.slice(currentIndex, currentIndex + visibleCount)

  const handlePrev = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex(prev => Math.min(maxIndex, prev + 1))
  }

  return (
    <section className={styles.section} id="categories">
      <div className="container">
        <SectionHeader
          tag="What We Offer"
          title="Tour Categories"
          description="Choose your adventure — from peaceful valley walks to high-altitude expeditions"
        />

        <div className={styles.carouselWrapper}>
          <button 
            className={`${styles.navBtn} ${styles.navBtnPrev}`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
            aria-label="Previous categories"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className={styles.carouselContainer}>
            <div className={styles.carouselTrack}>
              {visibleCategories.map((cat) => (
                <div key={cat.title} className={styles.carouselItem}>
                  <CategoryCard {...cat} />
                </div>
              ))}
            </div>
          </div>

          <button 
            className={`${styles.navBtn} ${styles.navBtnNext}`}
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            aria-label="Next categories"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>
      </div>
    </section>
  )
}
