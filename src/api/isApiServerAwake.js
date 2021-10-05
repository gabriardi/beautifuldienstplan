import axios from "axios"
import axiosRetry from "axios-retry"

const isApiServerAwake = async () => {
  axiosRetry(axios, { retries: 9, retryDelay: axiosRetry.exponentialDelay })
  const apiUrl = process.env.APIURL
  const apiPath = "/"
  const response = await axios.get(apiUrl + apiPath)
  return response
}

export default isApiServerAwake
