const isValidXlsx = xlsxBase64 => {
  if (
    !xlsxBase64.includes(
      "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,"
    )
  )
    return false

  return true
}

export default isValidXlsx
