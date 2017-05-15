const isArray = require("./isArray")

function isObject(target) {
  return !isArray(target) && typeof target === "object" && target !== null
}

module.exports = isObject
