// works only with ".xlsx"

const getFileNameNoExtension = fileName =>
  fileName.substring(0, fileName.length - 5)

export default getFileNameNoExtension
