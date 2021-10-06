import React, { useState, useEffect } from "react"
import { navigate } from "gatsby-link"

import { GrDocumentExcel, GrDocumentPdf } from "react-icons/gr"

import xlsxFormat from "../api/xlsxFormat"
import isApiServerAwake from "../api/isApiServerAwake"
import getFileNameNoExtension from "../utils/getFileNameNoExtension"
import isValidXlsx from "../utils/isValidXlsx"

import Layout from "../components/Layout"
import Uploader from "../components/Uploader"
import Spinner from "../components/Spinner"
import WrongFile from "../components/WrongFile"
import ButtonDownload from "../components/ButtonDownload"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [pdfBase64, setPdfBase64] = useState(null)
  const [xlsxBase64, setXlsxBase64] = useState(null)
  const [fileName, setFileName] = useState(null)
  const [showXlsxValidityAlert, setShowXlsxValidityAlert] = useState(false)

  useEffect(() => {
    isApiServerAwake().then(
      res => {
        if (res.data === "i am awake") setIsLoading(false)
      },
      err => {
        console.log(err)
        navigate("/error")
      }
    )
  }, [])

  const fileUpload = (file, cb) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function () {
      cb(null, reader.result)
    }
    reader.onerror = function (error) {
      cb(error, null)
    }
  }

  const onUploadFileChange = ({ target }) => {
    setPdfBase64(null)
    setXlsxBase64(null)
    setFileName(null)
    if (target.files < 1 || !target.validity.valid) {
      return
    }
    fileUpload(target.files[0], (err, result) => {
      if (result) {
        setIsLoading(true)
        if (!isValidXlsx(result)) {
          setIsLoading(false)
          setShowXlsxValidityAlert(true)
          return
        }
        setShowXlsxValidityAlert(false)
        xlsxFormat(result).then(
          res => {
            setIsLoading(false)
            setPdfBase64(res.pdfBase64)
            setXlsxBase64(res.xlsxBase64)
            setFileName(getFileNameNoExtension(target.files[0].name))
          },
          err => console.log(err)
        )
      }
    })
  }

  return (
    <>
      <Helmet title="Beautiful Dienstplan" defer={false} />
      <Layout>
        {isLoading === true ? (
          <Spinner />
        ) : (
          <Uploader onUploadFileChange={onUploadFileChange} />
        )}
        {showXlsxValidityAlert && <WrongFile />}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <ButtonDownload downloadName={`${fileName}.xlsx`} href={xlsxBase64}>
            <GrDocumentExcel />
            Get Excel
          </ButtonDownload>
          <ButtonDownload downloadName={`${fileName}.pdf`} href={pdfBase64}>
            <GrDocumentPdf />
            Get PDF
          </ButtonDownload>
        </div>
      </Layout>
    </>
  )
}

export default IndexPage
