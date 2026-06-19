import blogPosts from '../../data/blogPosts'
import { SectionHeader } from '../shared'
import styles from './BlogSection.module.css'

/* ── Sub-component: single blog card ──────────── */
function BlogCard({ title, date, tag, img }) {
  return (
    <article className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={img} alt={title} loading="lazy" />
        <span className={styles.tag}>{tag}</span>
      </div>
      <div className={styles.body}>
        <time className={styles.date} dateTime={date}>
          <i className="fa-regular fa-calendar" aria-hidden="true" /> {date}
        </time>
        <h3>{title}</h3>
        <a href="#" className={styles.readMore}>
          Read More <i className="fa-solid fa-arrow-right" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}

/* ── Main component ────────────────────────────── */
export default function BlogSection() {
  return (
    <section className={styles.section} id="blog">
      <div className="container">
        <SectionHeader
          tag="News & Articles"
          title="From Our Blog"
          description="Tips, guides, and stories to inspire your next adventure"
        />

        <div className={styles.grid}>
          {blogPosts.map((post) => (
            <BlogCard key={post.title} {...post} />
          ))}
        </div>

        <div className={styles.seeMoreWrap}>
          <a href="#" className={`btn ${styles.outlineBtn}`}>See All Articles</a>
        </div>
      </div>
    </section>
  )
}
