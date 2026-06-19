import styles from './PlanYourTrip.module.css'

/* ── Static features data (local — not re-used elsewhere) ── */
const FEATURES = [
  {
    icon: 'fa-route',
    title: 'Exclusive Trips',
    desc: "Unique journeys made just for you, with experiences you won't find anywhere else.",
  },
  {
    icon: 'fa-user-tie',
    title: 'Professional Guides',
    desc: 'Friendly local experts who make every trip more exciting, personal, and stress-free.',
  },
  {
    icon: 'fa-shield-halved',
    title: 'Safety First, Always',
    desc: 'Our team tracks every trip live, monitoring routes and weather so you can enjoy the journey.',
  },
  {
    icon: 'fa-people-group',
    title: 'Like-Minded People',
    desc: 'Smart matching connects you with compatible companions for a more enjoyable experience.',
  },
]

/* ── Sub-component: single feature row ────────── */
function FeatureItem({ icon, title, desc }) {
  return (
    <div className={styles.feature}>
      <div className={styles.featureIcon} aria-hidden="true">
        <i className={`fa-solid ${icon}`} />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
    </div>
  )
}

/* ── Main component ────────────────────────────── */
export default function PlanYourTrip() {
  return (
    <section className={styles.section} id="about">
      <div className="container">
        <div className={styles.inner}>

          {/* ── Image collage ─────────────────── */}
          <div className={styles.images} aria-hidden="true">
            <img
              className={styles.imgMain}
              src="https://images.unsplash.com/photo-1501555088652-021faa106b9b?w=700&q=80"
              alt="Group adventure travel"
              loading="lazy"
            />
            <img
              className={styles.imgAccent}
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=400&q=80"
              alt="Mountain campsite"
              loading="lazy"
            />
            <div className={styles.badge}>
              <strong>10+</strong>
              <span>Years Experience</span>
            </div>
          </div>

          {/* ── Text content ──────────────────── */}
          <div className={styles.content}>
            <span className="section-tag">Let's Go Together</span>
            <h2>Plan Your Trip With Us</h2>
            <p className={styles.lead}>
              Start your adventure with Trip2Trails — fun, easy, and full of unforgettable memories.
              Comfortable stays, expert drivers, friendly guides, and a stress-free setup.
            </p>

            <div className={styles.features}>
              {FEATURES.map((f) => (
                <FeatureItem key={f.title} {...f} />
              ))}
            </div>

            <a href="#tours" className="btn btn-primary">Explore Packages</a>
          </div>

        </div>
      </div>
    </section>
  )
}
