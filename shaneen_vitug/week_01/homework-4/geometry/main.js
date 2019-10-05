// # Geometry Function Lab
//
// ### Part 1, Rectangle
// Given the following a `rectangle` object like the one below, write the following functions:

const rectangleA = {
  length: 4,
  width: 4
};

// * isSquare - Returns whether the rectangle is a square or not
const isSquare = function (obj) {
  if (obj.length === obj.width) {
    return "It's a square!"
  } else {
    return "It's NOT a square."
  }
};

// * area - Returns the area of the rectangle
const areaRectangle = function (obj) {
  return obj.length * obj.width;
};

// * perimeter - Returns the perimeter of the rectangle
const perimeter = function (obj) {
  return 2 * (obj.length + obj.width);
};


// ### Part 2, Triangle
// Given the following a `triangle` object like the one below, write the following functions:

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

// * isEquilateral - Returns whether the triangle is equilateral or not
const isEquilateral = function (obj) {
  if (obj.sideA === obj.sideB && obj.sideA === obj.sideC) {
    return "The triangle is equilateral."
  } else {
    return "The triangle is NOT equilateral."
  }
};

// * isIsosceles - Returns whether the triangle is isosceles or not (has two equal sides)
const isIsosceles = function (obj) {
  if (obj.sideA === obj.sideB || obj.sideA === obj.sideC || obj.sideB === obj.sideC) {
    return "The triangle is isosceles."
  } else {
    return "The triangle is NOT isosceles."
  }
};

// * area - Returns the area of the Triangle (Heron's formula)
const areaTriangle = function (obj) {
  let sp = (obj.sideA + obj.sideB + obj.sideC) / 2;
  return Math.sqrt(sp * (sp - obj.sideA) * (sp - obj.sideB) * (sp - obj.sideC));
};

// * isObtuse - Returns whether the triangle is obtuse or not
//a2+b2<c2, then lengths a, b, and c make up the sides of an obtuse triangle.
//It is important to note that the length ‘‘c″ is always the longest.
const isObtuse = function (obj) {
  const sqSideA = obj.sideA * obj.sideA;
  const sqSideB = obj.sideB * obj.sideB;
  const sqSideC = obj.sideC * obj.sideC;

  if ( ((sqSideA + sqSideB) < sqSideC) || ((sqSideA + sqSideC) < sqSideB) || ((sqSideC + sqSideB) < sqSideA))  {
    return "The triangle is obtuse."
  } else {
    return "The triangle is NOT obtuse."
  }
};
