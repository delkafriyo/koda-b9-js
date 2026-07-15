let cost = 2000000;
let totalCost = 0;
let diskon = "0%";
if (cost < 500000) {
  diskon = "0%";
  totalCost = cost;
} else if (cost <= 1000000) {
  diskon = "5%";
  totalCost = cost - 0.05 * cost;
} else {
  diskon = "10%";
  totalCost = cost - 0.1 * cost;
}

console.log("Pembelian Rp. ", cost);
console.log("Diskon ", diskon);
console.log("Total Pembayaran Rp. ", totalCost);
