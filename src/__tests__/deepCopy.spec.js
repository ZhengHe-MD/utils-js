import test from "ava"
import { jsonDeepCopy } from "../deepCopy"

test("should be able to copy normal json object deep", t => {
  t.plan(6)
  const target = {
    arr: [1, 2, 3],
    obj: {
      num: 1,
      arr: [1, 2, 3]
    },
    str: "hello world"
  }
  const copy = jsonDeepCopy(target)
  t.not(target, copy)
  t.not(target.arr, copy.arr)
  t.not(target.obj, copy.obj)
  t.not(target.obj.arr, copy.obj.arr)
  t.is(target.str, copy.str)
  t.is(target.obj.num, copy.obj.num)
})

test("should be able to copy normal json array deep", t => {
  t.plan(4)
  const target = [1, "hello", { a: 1 }]

  const copy = jsonDeepCopy(target)
  t.not(target, copy)
  t.is(target[0], copy[0])
  t.is(target[1], copy[1])
  t.not(target[2], copy[2])
})
