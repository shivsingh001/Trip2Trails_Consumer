export default function SectionHeader({ tag, title, description, className = '' }) {
  return (
    <div className={`section-header ${className}`.trim()}>
      {tag ? <span className="section-tag">{tag}</span> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
