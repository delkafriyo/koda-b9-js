// How to use Splice Method

// param : start : number, delete count, input1, ..inputX

let foodList = ["Sate", "Nasi Goreng", "Bakso", "Bubur Ayam"];

// Manual Splice
function newFood(food, idx, merge, ...input) {
  let newFood = [];
  let resultCut = [];
  if (merge > 0) {
    for (let i = 0; i < food.length; i++) {
      if (i >= idx && i < idx + merge) {
        for (let j = 0; j < input.length; j++) {
          newFood[newFood.length] = input[j];
        }
        resultCut[resultCut.length] = food[i];
        continue;
      } else {
        newFood[newFood.length] = food[i];
      }
    }
  }
  foodList = newFood;
  return resultCut;
}

// Call manual splice
console.log(newFood(foodList, 1, 1, "Nasi", "Mie Ayam"));
console.log(foodList);

// Call Splice Method
console.log(foodList.splice(1, 1, "Seblak", "ketoprak"));
console.log(foodList);
