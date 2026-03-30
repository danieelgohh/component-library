import { useContext } from "react";
import { BannerContext } from "./Banner";

export default function BannerDescription({ children }) {

  const { status } = useContext(BannerContext)

  return (
    <p className={`${status}-banner-description`}>{children}</p>
  )
}