import { useContext } from "react"
import { ImageContext } from "./Testimonial"

import quotationIcon from './quote-icon.png'

export default function TestimonialContent({ children }) {
  const isImage = useContext(ImageContext)

  return (
    <>
      {isImage ? <img src={quotationIcon} alt="Quotation mark icon" className="quote-mark" /> : null}
      <h2 className={`testimonial-text ${isImage ? "white-text" : "black-text"}`}>{children}</h2>
    </>
  )
}