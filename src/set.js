const isObject = require("./isObject")
const isArray = require("./isArray")
const isStringValidNumber = require("./isStringValidNumber")

function set(target, path, value) {
  let key
  let cursor = target

  let index = 0

  while ((key = path[index++]) && index < path.length) {
    if (isStringValidNumber(key) && !isArray(cursor)) {
      cursor = []
    }
    if (!isStringValidNumber(key) && !isObject(cursor)) {
      cursor = {}
    }
    cursor = cursor[key]
  }
  cursor[key] = value
  return target
}

module.exports = set
