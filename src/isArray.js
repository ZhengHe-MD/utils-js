var toString = Object.prototype.toString

function isArray(target) {
  var _isArray =
    Array.isArray ||
    function(target) {
      return toString.call(target) === "[object Array]"
    }
  return _isArray(target)
}

module.exports = isArray
