import axios from "axios"

const xlsxFormat = async xlsxBase64 => {
  const apiUrl = process.env.GATSBY_APIURL
  const apiPath = "/api/format"
  const parameters = {
    xlsxBase64: xlsxBase64,
    apikey: process.env.GATSBY_APIKEY,
  }
  const response = await axios.post(apiUrl + apiPath, parameters)
  return response.data
}

export default xlsxFormat
