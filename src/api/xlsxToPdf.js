import axios from "axios"

const xlsxToPdf = async formattedXlsx => {
  const urlToFile = async (url, filename, mimeType = "text/plain") => {
    const res = await fetch(url)
    const buf = await res.arrayBuffer()
    return new File([buf], filename, { type: mimeType })
  }

  const myFile = await urlToFile(formattedXlsx, "temp.xlsx")
  const data = new FormData()
  data.append("inputFile", myFile, "temp.xlsx")

  const apiUrl = "https://api.cloudmersive.com"
  const apiPath = "/convert/xls/to/pdf"
  const headers = {
    "Content-Type": "multipart/form-data",
    Apikey: process.env.GATSBY_CLOUDMERSIVE_API_KEY,
  }

  const response = await axios.post(apiUrl + apiPath, data, {
    headers,
    responseType: "blob",
  })

  const pdfUrl = URL.createObjectURL(response.data)

  return pdfUrl
}

export default xlsxToPdf
