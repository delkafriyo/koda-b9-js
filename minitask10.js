let food = ["Sate", "Nasi Goreng", "Bakso", "Bubur Ayam"];

function newFood(food, idx, merge) {
  let newFood = [];
  let resultCut = [];
  if (merge > 0) {
    for (let i = 0; i < food.length; i++) {
      if (i >= idx && i < idx + merge) {
        resultCut[resultCut.length] = food[i];
        continue;
      } else {
        newFood[newFood.length] = food[i];
      }
    }
  }
  food = newFood;
  return resultCut;
}

console.log(newFood(food, 1, 1));

console.log(food.splice(1, 1));
