let cost = 100000;
let payment = 1231000;
let change = payment - cost;
let fiftyThousand = 0;
let tenThousand = 0;
let fiveThousand = 0;
let twoThousand = 0;
let oneThousand = 0;

for (change; change >= 50000; change -= 50000) {
  fiftyThousand++;
}

for (change; change >= 10000; change -= 10000) {
  tenThousand++;
}

for (change; change >= 50000; change -= 5000) {
  fiveThousand++;
}

for (change; change >= 2000; change -= 2000) {
  twoThousand++;
}

for (change; change >= 1000; change -= 1000) {
  oneThousand++;
}

console.log("Fifty Thousand = ", fiftyThousand);
console.log("Ten Thousand = ", tenThousand);
console.log("Five Thousand = ", fiveThousand);
console.log("Two Thousand = ", twoThousand);
console.log("One Thousand = ", oneThousand);
