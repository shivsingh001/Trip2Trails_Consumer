import { SITE_CONFIG } from '../../../config/siteConfig'
import styles from './BrandLogo.module.css'

export default function BrandLogo({
  href = '#',
  imageSrc = SITE_CONFIG.brand.logoSrc,
  className = '',
  theme = 'light',
  textVisible = true,
}) {
  const [part1, accentPart, part3] = SITE_CONFIG.brand.splitName

  return (
    <a href={href} className={`${styles.logo} ${styles[theme]} ${className}`.trim()} aria-label={SITE_CONFIG.brand.name}>
      {imageSrc ? (
        <img src={imageSrc} alt={SITE_CONFIG.brand.logoAlt} className={styles.image} />
      ) : (
        <i className={`fa-solid fa-mountain-sun ${styles.icon}`} aria-hidden="true" />
      )}

      {textVisible ? (
        <span className={styles.wordmark}>
          {part1}
          <em>{accentPart}</em>
          {part3}
        </span>
      ) : null}
    </a>
  )
}
