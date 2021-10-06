import React from "react"
import { AiOutlineAlert } from "react-icons/ai"

import { wrongFile } from "./WrongFile.module.scss"

const WrongFile = () => {
  return (
    <div className={wrongFile}>
      <span>
        <AiOutlineAlert />
      </span>
      pick a valid document
      <span>
        <AiOutlineAlert />
      </span>
    </div>
  )
}

export default WrongFile
