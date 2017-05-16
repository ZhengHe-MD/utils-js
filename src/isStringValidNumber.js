function isStringValidNumber(str) {
  // or !isNaN(str)
  return !Number.isNaN(Number(str))
}

module.exports = isStringValidNumber
