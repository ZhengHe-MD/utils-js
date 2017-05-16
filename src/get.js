function get(target, path, def) {
  const length = path.length
  // return target when given empty path
  if (length === 0) return target
  // can also use a reduce here, details see
  // https://github.com/tannerlinsley/react-form/blob/master/src/utils.js#L32
  let index = 0

  while (target != null && index < length) {
    target = target[path[index++]]
  }

  if (!index || index < length) {
    return def
  } else {
    return target
  }
}

module.exports = get
