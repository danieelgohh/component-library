import { createContext } from 'react';
import classNames from 'classnames'
import { FaCircleCheck } from "react-icons/fa6";
import { FaExclamationTriangle } from "react-icons/fa";
import { FaCircleXmark } from "react-icons/fa6";
import { BsInfoCircleFill } from "react-icons/bs";

const BannerContext = createContext()

export default function Banner({ children, status = "neutral", ...rest }) {

  const iconObj = {
    success: <FaCircleCheck />,
    warning: <FaExclamationTriangle />,
    error: <FaCircleXmark />,
    neutral: <BsInfoCircleFill />
  }

  const stylesClasses = classNames('banner', `${status}-banner`)

  return (
    <BannerContext.Provider value={{status}}>
      <div className={stylesClasses} {...rest}>
        {iconObj[status]}
        <div className={"banner-content"}>
          {children}
        </div>
      </div>
    </BannerContext.Provider>
  )
}

export { BannerContext }