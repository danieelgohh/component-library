import { useContext } from "react"
import { ImageContext } from "./Testimonial"

export default function TestimonialAuthor({ name,  role }) {
  const isImage = useContext(ImageContext)
  return (
    <>
      {isImage ? null : <div className="author-details-bg"></div>}
      <div className={`${isImage ? "author-details-img" : "author-details"}`}>
        <h3 className={`author-name ${isImage ? "white-text" : "black-text"}`}>{name}</h3>
        <p className={`author-role ${isImage ? "white-text" : null}`}>{role}</p>
      </div>
    </>
  )
}