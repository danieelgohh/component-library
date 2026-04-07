import classNames from 'classnames'
import { useContext } from 'react'
import { ImageContext } from './Testimonial'

export default function TestimonialImage({ src }) {
  const isImage = useContext(ImageContext)

  return (
    <div className={isImage ? 'img-container' : ""}>
      <img src={src} alt={isImage ? "Profile picture of testimonial author" : "Logo of company"} 
      className={classNames({"testimonial-potrait": isImage, "testimonial-logo": !isImage})} />
    </div>
  )
}