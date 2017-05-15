import test from "ava"
import isObject from "../isObject"

test("isObject should return true given valid object", t => {
  t.plan(1)
  const target = { a: 1 }
  t.true(isObject(target))
})

test("isObject should return false given data other than plain object", t => {
  t.plan(7)

  const num = 1
  const str = "1"
  const bool = true
  const udf = undefined
  const nul = null
  const arr = [1, 2, 3]
  const sbl = Symbol("1")

  t.false(isObject(num))
  t.false(isObject(str))
  t.false(isObject(bool))
  t.false(isObject(udf))
  t.false(isObject(nul))
  t.false(isObject(arr))
  t.false(isObject(sbl))
})
