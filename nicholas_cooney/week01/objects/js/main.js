// Geometry

// Part 1, rectangle

const rectangleA = {
  length: 4,
  width: 5
};

const isSquare = function() {
  if (rectangleA.length === rectangleA.width) {
    return "It is a square";
  } else {
    let area = rectangleA.length * rectangleA.width;
    let perimeter = rectangleA.length + rectangleA.width;
    return `The rectangles area is ${area} and perimeter is ${perimeter}`;
  }
}

console.log(isSquare());

// Part 2, Triangle

const triangleA = {
  sideA: 4,
  sideB: 4,
  sideC: 4
};
const triangleB = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function(triangle) {
  const test = triangle;
  if (test.sideA === test.sideB && test.sideA === test.sideC) {
    return true;
  } else {
    return false;
  }
}
console.log(isEquilateral(triangleA));


const isIsosceles = function(triangle) {
  //const test = triangle;
  for (let i = 0; triangle.length > i; i++) {
    const side = test[i];
  //  if (side.sideA === side.sideB){
    return true;
  }
//  }
}

console.log(isIsosceles(triangleB));

// The Cash Register

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

const cashRegister = function(cart) {
  let pricesString = Object.values(cart); // converts the object values into an array
  let sum = 0; // sum gives an initial value for the summation of the array values
  for (let i = 0; pricesString.length > i; i++) {
    const pricesNum = Number(pricesString[i]); // converts the array strings into numbers so they can be added together
    sum = sum + pricesNum; // this equation takes the array values and adds them to the initial value of sum (0)
    }
    return sum;
}
console.log(cashRegister(cartForParty)) ;
