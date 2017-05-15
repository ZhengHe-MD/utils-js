function jsonDeepCopy(target) {
  // return JSON.parse(JSON.stringify(target, (key, value) => {
  //   if (typeof value === 'function') {
  //     return value.toString()
  //   } else {
  //     return value
  //   }
  // }))
  return JSON.parse(JSON.stringify(target))
}

module.exports = {
  jsonDeepCopy
}
