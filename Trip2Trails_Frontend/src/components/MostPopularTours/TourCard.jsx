import styles from './MostPopularTours.module.css'
import { SITE_CONFIG } from '../../config/siteConfig'

/**
 * TourCard
 * Pure presentational component — receives one tour object as props,
 * renders the brochure card. No data fetching, no state.
 */
export default function TourCard({ tour }) {
  const { title, route, duration, price, dates, badge, img } = tour

  return (
    <article className={styles.card}>

      {/* ── Image ─────────────────────────────── */}
      <div className={styles.imgWrap}>
        <img src={img} alt={title} loading="lazy" />
        {badge && <span className={styles.badge}>{badge}</span>}
        <div className={styles.duration}>
          <i className="fa-regular fa-clock" aria-hidden="true" />
          {duration}
        </div>
      </div>

      {/* ── Body ──────────────────────────────── */}
      <div className={styles.body}>
        <p className={styles.route}>
          <i className="fa-solid fa-location-dot" aria-hidden="true" />
          {route}
        </p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.dates}>
          <i className="fa-regular fa-calendar" aria-hidden="true" />
          {dates}
        </p>

        {/* ── Footer ────────────────────────────── */}
        <div className={styles.footer}>
          <div className={styles.price}>
            <span className={styles.priceFrom}>From</span>
            <strong>{price}</strong>
            <span className={styles.pricePer}>/Person</span>
          </div>
          <div className={styles.actions}>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneE164}`}
              className={styles.callBtn}
              title="Call us"
              aria-label="Call Trip2Trails"
            >
              <i className="fa-solid fa-phone" />
            </a>
            <button className={`btn btn-primary ${styles.bookBtn}`}>Book Now</button>
          </div>
        </div>
      </div>

    </article>
  )
}
