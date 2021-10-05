import axios from "axios"

const xlsxFormat = async xlsxBase64 => {
  const apiUrl = process.env.APIURL
  const apiPath = "/api/format"
  const parameters = { xlsxBase64: xlsxBase64, apikey: process.env.APIKEY }
  const response = await axios.post(apiUrl + apiPath, parameters)
  return response.data
}

export default xlsxFormat
