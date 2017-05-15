import test from "ava"
import shallowCopy from "../shallowCopy"

test("shallowCopy should be able to copy plain object", t => {
  t.plan(4)
  const target = {
    prop: "prop",
    arr: [1, 2, 3],
    func: function() {}
  }
  const copy = shallowCopy(target)
  t.not(target, copy)
  t.is(target.arr, copy.arr)
  t.is(target.func, copy.func)
  t.is(target.prop, copy.prop)
})

test("shallowCopy should be able to copy array", t => {
  t.plan(5)
  const target = [0, [1, 2], { a: 1 }, function() {}]
  const copy = shallowCopy(target)
  t.not(target, copy)
  t.is(target[0], copy[0])
  t.is(target[1], copy[1])
  t.is(target[2], copy[2])
  t.is(target[3], copy[3])
})
