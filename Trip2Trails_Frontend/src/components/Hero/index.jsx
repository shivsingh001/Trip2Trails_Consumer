import useAutoSlide from '../../hooks/useAutoSlide'
import heroSlides from '../../data/heroSlides'
import styles from './Hero.module.css'

/* ── Sub-component: slide dots ─────────────────── */
function SlideDots({ total, current, onSelect }) {
  return (
    <div className={styles.dots} aria-label="Slide navigation">
      {Array.from({ length: total }).map((_, i) => (
        <button
          key={i}
          className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
          onClick={() => onSelect(i)}
          aria-label={`Go to slide ${i + 1}`}
          aria-current={i === current ? 'true' : undefined}
        />
      ))}
    </div>
  )
}

/* ── Sub-component: stats strip ───────────────── */
const STATS = [
  { value: '6,000+', label: 'Happy Travellers' },
  { value: '500+',   label: '5-Star Reviews'   },
  { value: '100+',   label: 'Destinations'      },
  { value: '400+',   label: 'Trips Completed'   },
]

function StatsStrip() {
  return (
    <div className={styles.statsStrip}>
      {STATS.map((s, i) => (
        <div key={s.label} className={styles.statGroup}>
          <div className={styles.stat}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
          {i < STATS.length - 1 && <div className={styles.statDivider} />}
        </div>
      ))}
    </div>
  )
}

/* ── Main component ────────────────────────────── */
export default function Hero() {
  const [current, goTo] = useAutoSlide(heroSlides.length, 5000)

  return (
    <section className={styles.hero}>

      {/* Background slides */}
      {heroSlides.map((slide, i) => (
        <div
          key={i}
          className={`${styles.slide} ${i === current ? styles.slideActive : ''}`}
          style={{ backgroundImage: `url('${slide.bg}')` }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay gradient */}
      <div className={styles.overlay} />

      {/* Content */}
      <div className={styles.content}>
        <span className={styles.label}>{heroSlides[current].label}</span>

        <h1 className={styles.heading}>
          Explore the World with<br />
          <span>Trip2Trails</span>
        </h1>

        <p className={styles.subheading}>
          Create stories worth sharing — unforgettable group treks,
          weekend getaways &amp; Himalayan expeditions from Delhi.
        </p>

        <SlideDots total={heroSlides.length} current={current} onSelect={goTo} />
      </div>

      <StatsStrip />
    </section>
  )
}
