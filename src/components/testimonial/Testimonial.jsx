import testimonialSrc from "./placeholder.jpg"
import testimonialLogo from "./placeholder-logo.png"

import { createContext } from "react"

const ImageContext = createContext()

export default function Testimonial({ children, withImage }) {

  const imageSrc = withImage ? testimonialSrc : testimonialLogo

  return (
    <ImageContext.Provider value={withImage}>
      <div className={`testimonial ${withImage ? "testimonial-img" : ""}`}>
        {children(withImage, imageSrc)}
      </div>
    </ImageContext.Provider>
  )
}

export {ImageContext}