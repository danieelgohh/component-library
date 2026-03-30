import { useContext } from "react";
import { BannerContext } from "./Banner";

export default function BannerTitle({ children }) {

  const { status } = useContext(BannerContext)

  return (
    <h2 className={`${status}-banner-title`}>{children}</h2>
  )
}