import classNames from 'classnames'

export default function Badge({ children, color = "gray", shape = "square", ...props }) {

  const stylesClasses = classNames('badge', color, shape)

  return (
    <div className={stylesClasses} {...props}>{children}</div>
  )
}