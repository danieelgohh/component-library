import brandIcon from './brand-icon.png'

export default function CardIcon({ icon = brandIcon }) {
  return (
    <img src={icon} alt="Card icon" className="card-icon" />
  )
}