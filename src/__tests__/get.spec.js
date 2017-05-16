import test from "ava"
import get from "../get"

test("should be able to get the value in given path of given object", t => {
  t.plan(1)
  const target = {
    a: {
      b: {
        c: 1
      }
    }
  }
  const value = get(target, ["a", "b", "c"])
  t.deepEqual(value, 1)
})

test("should be able to get the value in given path with array index", t => {
  t.plan(1)
  const target = {
    a: {
      b: [1, 2, 3]
    }
  }
  const path = ["a", "b", "0"]
  t.deepEqual(get(target, path), 1)
})

test("should return undefined when given target is null or undefined", t => {
  t.plan(2)
  const nulTarget = null
  const udfTarget = undefined
  t.is(get(nulTarget, ["a"]), undefined)
  t.is(get(udfTarget, ["a"]), undefined)
})

test("should return undefined when given path is not valid", t => {
  t.plan(1)
  const target = {
    a: {
      b: {
        c: 1
      }
    }
  }
  const invalidPath = ["a", "c", "b"]
  t.is(get(target, invalidPath), undefined)
})

test("should return default value when given path is not valid", t => {
  t.plan(1)
  const target = {
    a: {
      b: {
        c: 1
      }
    }
  }
  const invalidPath = ["a", "c", "b"]
  t.is(get(target, invalidPath, 1), 1)
})
