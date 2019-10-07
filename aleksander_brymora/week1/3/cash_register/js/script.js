// Input
const cartForParty = {
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
};

const cashRegister = function(receipt) {
    const keys = Object.keys(receipt);
    let total = 0;
    for (let i = 0; i < keys.length; i++) {
        total += parseFloat(receipt[keys[i]]);
    }
    return total;
}

// Output
console.log(cashRegister(cartForParty));
