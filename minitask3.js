let cost = 100000;
let payment = 150000;
let change = payment - cost;
let fiftyThousand = 0;
let tenThousand = 0;
let fiveThousand = 0;
let twoThousand = 0;
let oneThousand = 0;

while (change >= 1000) {
  if (change >= 50000) {
    fiftyThousand++;
    change -= 50000;
  } else if (change >= 10000) {
    tenThousand++;
    change -= 10000;
  } else if (change >= 5000) {
    fiveThousand++;
    change -= 5000;
  } else if (change >= 2000) {
    twoThousand++;
    change -= 2000;
  } else {
    oneThousand++;
    change -= 1000;
  }
}

console.log("Fifty Thousand = ", fiftyThousand, "lembar");
console.log("Ten Thousand = ", tenThousand, "lembar");
console.log("Five Thousand = ", fiveThousand, "lembar");
console.log("Two Thousand = ", twoThousand, "lembar");
console.log("One Thousand = ", oneThousand, "lembar");
