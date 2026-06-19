import { BrandLogo } from '../shared'
import { CONTACT_ITEMS, QUICK_LINKS, SOCIAL_LINKS, TRIP_LINKS } from '../../data/footerData'
import styles from './Footer.module.css'

/* ── Sub-components ────────────────────────────── */
function LinkColumn({ title, links }) {
  return (
    <div className={styles.col}>
      <h4>{title}</h4>
      <ul>
        {links.map((l) => (
          <li key={l.label}><a href={l.href}>{l.label}</a></li>
        ))}
      </ul>
    </div>
  )
}

/* ── Main component ────────────────────────────── */
export default function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Newsletter band ──────────────────── */}
      <div className={styles.newsletter}>
        <div className={`container ${styles.newsletterInner}`}>
          <div>
            <h3>Get Updated — Subscribe to Our Newsletter</h3>
            <p>Be the first to know about new trips, deals &amp; travel stories</p>
          </div>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input type="email" placeholder="Enter your email address" aria-label="Email address" required />
            <button type="submit" className="btn btn-primary">
              Subscribe <i className="fa-solid fa-paper-plane" aria-hidden="true" />
            </button>
          </form>
        </div>
      </div>

      {/* ── Main grid ────────────────────────── */}
      <div className={styles.main}>
        <div className={`container ${styles.grid}`}>

          {/* Brand */}
          <div className={styles.brand}>
            <BrandLogo href="#" className={styles.brandLogo} theme="light" />
            <p>
              Specialized in organizing group trips, family trips &amp; corporate trips from
              Delhi &amp; NCR. Quality facilities at the best possible prices.
            </p>
            <div className={styles.social}>
              {SOCIAL_LINKS.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} rel="noreferrer" target="_blank">
                  <i className={`fa-brands ${s.icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <LinkColumn title="Quick Links" links={QUICK_LINKS} />
          <LinkColumn title="Trips"       links={TRIP_LINKS}  />

          {/* Contact */}
          <div className={styles.col}>
            <h4>Contact Us</h4>
            <ul className={styles.contactList}>
              {CONTACT_ITEMS.map((item) => (
                <li key={item.icon + item.text}>
                  <i className={`fa-solid ${item.icon}`} />
                  {item.kind === 'link' ? (
                    <a href={item.href}>{item.text}</a>
                  ) : (
                    <span>{item.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* ── Bottom bar ───────────────────────── */}
      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© 2026 Trip2Trails. All Rights Reserved.</p>
          <p>Made with <i className="fa-solid fa-heart" style={{ color: '#f97316' }} /> for Adventurers</p>
        </div>
      </div>

    </footer>
  )
}
