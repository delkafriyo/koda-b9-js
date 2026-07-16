function processArray(array, processor) {
  let newArray = [];
  if (!Array.isArray(array)) {
    console.log("Wrong Input! Input must be an Array");
    return;
  }
  if (typeof processor !== "function") {
    console.log("Wrong Input! Input must be a Function");
    return;
  }
  for (let i = 0; i < array.length; i++) {
    newArray[i] = processor(array[i]);
  }
  return newArray;
}

// callback function
const showNumber = (num) => `Number : ${num}`;
const makeDollar = (num) => `$${num}`;
const addFive = (num) => num + 5;

const numbers = [1, 2, 3, 4, 5];

console.log(processArray(numbers, showNumber));

console.log(processArray(numbers, makeDollar));

console.log(processArray(numbers, addFive));
