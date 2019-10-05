const myCart = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart) {
  let totalCost = 0;
  let prices = Object.values(cart);
  for (var i = 0; i < prices.length; i++) {
    totalCost += Number(items[i]);
  }
  return totalCost;
}
console.log(cashRegister(myCart));
