import test from "ava";
import shallowCopy from "../shallowCopy";

test("shallowCopy should be able to copy plain object", t => {
  t.plan(4);
  const oldObj = {
    prop: "prop",
    arr: [1, 2, 3],
    func: function() {}
  };
  const newObj = shallowCopy(oldObj);
  t.not(oldObj, newObj);
  t.is(oldObj.arr, newObj.arr);
  t.is(oldObj.func, newObj.func);
  t.is(oldObj.prop, newObj.prop);
});

test("shallowCopy should be able to copy array", t => {
  t.plan(5);
  const oldArray = [0, [1, 2], { a: 1 }, function() {}];
  const newArray = shallowCopy(oldArray);
  t.not(oldArray, newArray);
  t.is(oldArray[0], newArray[0]);
  t.is(oldArray[1], newArray[1]);
  t.is(oldArray[2], newArray[2]);
  t.is(oldArray[3], newArray[3]);
});
