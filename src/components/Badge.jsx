import classNames from 'classnames'

export default function Badge({ children, type, variant }) {
  return (
    <div className={classNames('badge', type, variant)}>{children}</div>
  )
}