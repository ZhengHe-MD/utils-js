import test from "ava"
import isStringValidNumber from "../isStringValidNumber"

test("should return true when the string can be casted into a valid number", t => {
  t.plan(5)

  const emptyStr = "" // casted to 0
  const onlySpaceStr = "   " // casted to 0
  const numStr = "37"
  const norStr = "hello world"
  const dateStr = new Date()

  t.true(isStringValidNumber(emptyStr))
  t.true(isStringValidNumber(onlySpaceStr))
  t.true(isStringValidNumber(numStr))
  t.false(isStringValidNumber(norStr))
  t.true(isStringValidNumber(dateStr))
})
