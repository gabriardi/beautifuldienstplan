import React from "react"
import MyLogo from "../../../assets/logo.svg"

import { myLogo } from "./Logo.module.scss"

const Logo = () => {
  return (
    <div className={myLogo}>
      <MyLogo />
    </div>
  )
}

export default Logo
