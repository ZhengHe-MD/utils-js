function get(target, path, def) {
  let index = 0
  const length = path.length

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
