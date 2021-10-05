import React from "react"

import { spinner, loader } from "./Spinner.module.scss"

const Spinner = () => {
  return (
    <div className={spinner}>
      <div className={loader}>Loading...</div>
    </div>
  )
}

export default Spinner
