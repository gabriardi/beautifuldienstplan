import React from "react"

import { buttonDownload } from "./ButtonDownload.module.scss"

const ButtonDownload = ({ children, href, downloadName }) => {
  return (
    <div>
      {href !== null && (
        <a href={href} download={downloadName} className={buttonDownload}>
          {children}
        </a>
      )}
    </div>
  )
}

export default ButtonDownload
