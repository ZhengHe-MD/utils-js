import test from "ava"
import set from "../set"
import get from "../get"

test("should set given path of given object with given value", t => {
  t.plan(1)
  const target = { a: { b: {} } }
  const path = ["a", "b", "c"]
  const value = 1
  set(target, path, value)
  t.is(get(target, path), value)
})

test("should support array index in path", t => {
  t.plan(1)
  const target = { a: { b: [1, 2, 3] } }
  const path = ["a", "b", "2"]
  const value = 4
  set(target, path, value)
  t.is(get(target, path), value)
})

test("should support object inside array", t => {
  t.plan(1)
  const target = { a: [1, 2, { b: 3 }] }
  const path = ["a", "2", "b"]
  const value = 4
  set(target, path, value)
  t.is(get(target, path), value)
})
