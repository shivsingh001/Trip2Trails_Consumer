import { useState } from 'react'
import testimonials from '../../data/testimonials'
import { SectionHeader } from '../shared'
import styles from './Testimonials.module.css'

/** Number of cards visible at one time */
const VISIBLE = 3

/* ── Sub-component: single review card ────────── */
function ReviewCard({ name, trip, rating, avatar, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.stars} aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <i key={i} className="fa-solid fa-star" aria-hidden="true" />
        ))}
      </div>
      <p className={styles.text}>"{text}"</p>
      <div className={styles.author}>
        <div className={styles.avatar} aria-hidden="true">{avatar}</div>
        <div>
          <strong>{name}</strong>
          <span>{trip}</span>
        </div>
      </div>
      <i className={`fa-solid fa-quote-right ${styles.quoteIcon}`} aria-hidden="true" />
    </div>
  )
}

/* ── Main component ────────────────────────────── */
export default function Testimonials() {
  const [start, setStart] = useState(0)
  const maxStart = testimonials.length - VISIBLE

  const prev = () => setStart((s) => Math.max(s - 1, 0))
  const next = () => setStart((s) => Math.min(s + 1, maxStart))

  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeader
          tag="Happy Travellers"
          title="What Our Clients Say"
          description="Real stories from real adventurers who explored with us"
        />

        {/* ── Slider ───────────────────────────── */}
        <div className={styles.slider} aria-live="polite">
          <div
            className={styles.track}
            style={{ transform: `translateX(-${start * (100 / VISIBLE)}%)` }}
          >
            {testimonials.map((r) => (
              <ReviewCard key={r.name} {...r} />
            ))}
          </div>
        </div>

        {/* ── Controls ─────────────────────────── */}
        <div className={styles.controls}>
          <button
            className={styles.arrow}
            onClick={prev}
            disabled={start === 0}
            aria-label="Previous reviews"
          >
            <i className="fa-solid fa-chevron-left" />
          </button>

          <div className={styles.dots}>
            {Array.from({ length: maxStart + 1 }).map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === start ? styles.dotActive : ''}`}
                onClick={() => setStart(i)}
                aria-label={`Go to page ${i + 1}`}
              />
            ))}
          </div>

          <button
            className={styles.arrow}
            onClick={next}
            disabled={start >= maxStart}
            aria-label="Next reviews"
          >
            <i className="fa-solid fa-chevron-right" />
          </button>
        </div>

      </div>
    </section>
  )
}
