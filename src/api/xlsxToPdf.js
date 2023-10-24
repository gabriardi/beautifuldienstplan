const xlsxToPdf = async formattedXlsx => {
  const urlToFile = async (url, filename, mimeType = "text/plain") => {
    const res = await fetch(url)
    const buf = await res.arrayBuffer()
    return new File([buf], filename, { type: mimeType })
  }

  const myFile = await urlToFile(formattedXlsx, "temp.xlsx")

  const data = new FormData()
  data.append("inputFile", myFile, "temp.xlsx")

  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.withCredentials = false

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        if (this.status === 200) {
          const responseType = this.getResponseHeader("content-type")
          const responseArrayBuffer = this.response

          if (responseType.startsWith("application/pdf")) {
            // Assuming the response is a PDF file
            const blob = new Blob([responseArrayBuffer], { type: responseType })
            const pdfUrl = URL.createObjectURL(blob)
            resolve(pdfUrl)
          } else {
            // Handle other binary responses here
            // For example, you could save the binary data to a file
            // or process it as needed.
          }
        } else {
          reject(new Error(`XHR request failed with status ${this.status}`))
        }
      }
    })

    xhr.open("POST", "https://api.cloudmersive.com/convert/xlsx/to/pdf")

    xhr.setRequestHeader("Apikey", process.env.GATSBY_CLOUDMERSIVE_API_KEY)

    // Set the response type to "arraybuffer" to receive binary data
    xhr.responseType = "arraybuffer"

    xhr.send(data)
  })
}

export default xlsxToPdf
