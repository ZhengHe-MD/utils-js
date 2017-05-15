// @flow

type Input = Array<mixed> | Object

module.exports = function(target: Input): Input {
  var copy

  if (isArray(target)) {
    var len = target.length
    copy = new Array(len)
    for (var i = 0; i < len; i++) {
      copy[i] = target[i]
    }
  } else {
    var keys = objectKeys(target)
    var len = keys.length
    copy = {}

    for (var i = 0; i < len; i++) {
      var key = keys[i]
      // $FlowFixMe
      copy[key] = target[key]
    }
  }
  return copy
}

var toString = Object.prototype.toString
var hasOwnProperty = Object.prototype.hasOwnProperty

var isArray =
  Array.isArray ||
  function(xs) {
    return toString.call(xs) === "[object Array]"
  }

var objectKeys =
  Object.keys ||
  function(obj) {
    var keys = []
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        keys.push(key)
      }
    }
    return keys
  }
