let arr = [{}, [], "Anna", 9, [], false, false, true, "John", {}];
let ar = 0;
let obj = 0;
let num = 0;
let bol = 0;
let str = 0;

for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "object" && !Array.isArray(arr[i])) {
    obj++;
  } else if (Array.isArray(arr[i])) {
    ar++;
  } else if (typeof arr[i] === "number") {
    num++;
  } else if (typeof arr[i] === "string") {
    str++;
  } else if (typeof arr[i] === "boolean") {
    bol++;
  }
}

console.log("Number = ", num);
console.log("String = ", str);
console.log("Boolean = ", bol);
console.log("Object = ", obj);
console.log("Array = ", ar);
