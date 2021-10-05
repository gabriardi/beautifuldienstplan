import React from "react"

import { IoCloudUploadOutline } from "react-icons/io5"
// import { BsDownload } from "react-icons/bs"

import { uploader } from "./Uploader.module.scss"

const Uploader = ({ onUploadFileChange }) => {
  return (
    <div className={uploader}>
      <label htmlFor="fileUploader">
        <IoCloudUploadOutline />
      </label>
      <input
        id="fileUploader"
        type="file"
        name="xlsxBase64"
        onChange={onUploadFileChange}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      />
    </div>
  )
}

export default Uploader
