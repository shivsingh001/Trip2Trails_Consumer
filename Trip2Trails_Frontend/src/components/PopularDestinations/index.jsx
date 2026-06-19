import destinations from '../../data/destinations'
import { SectionHeader } from '../shared'
import styles from './PopularDestinations.module.css'

/* ── Sub-component: single destination card ───── */
function DestinationCard({ name, packages, img }) {
  const label = `${packages} Package${packages !== 1 ? 's' : ''}`

  return (
    <div className={styles.card}>
      <img src={img} alt={name} loading="lazy" />
      <div className={styles.overlay} />
      <div className={styles.body}>
        <h4>{name}</h4>
        <span>{label}</span>
        <a href="#tours" className={styles.viewBtn}>View All</a>
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────── */
export default function PopularDestinations() {
  return (
    <section className={styles.section} id="destinations">
      <div className="container">
        <SectionHeader
          tag="Top Picks"
          title="Popular Destinations"
          description="Handpicked places loved by thousands of travellers"
        />

        <div className={styles.grid}>
          {destinations.map((d) => (
            <DestinationCard key={d.name} {...d} />
          ))}
        </div>
      </div>
    </section>
  )
}
