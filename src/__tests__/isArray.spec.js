import test from "ava"
import isArray from "../isArray"

test("isArray should return true given an valid array", t => {
  t.plan(1)
  const arr = [1, 2, 3]
  t.true(isArray(arr))
})

test("isArray should return false given data other than array", t => {
  t.plan(7)
  const obj = {}
  const str = "123"
  const bool = true
  const nul = null
  const udf = undefined
  const num = 123
  const sbl = Symbol("s")

  t.false(isArray(obj))
  t.false(isArray(str))
  t.false(isArray(bool))
  t.false(isArray(nul))
  t.false(isArray(udf))
  t.false(isArray(num))
  t.false(isArray(sbl))
})
