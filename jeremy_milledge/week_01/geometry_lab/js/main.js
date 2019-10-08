//RECTANGLES
const rectangles = [
  {length: 4, width: 4}, {length: 2, width: 5}
];

const rectIsSquare = function(rect) {
  if (rect.length === rect.width) {
    return true;
  }
  return false;
}

const rectArea = function(rect) {
  return rect.length * rect.width;
}

const rectPerimeter = function(rect) {
  return 2 * rect.length + 2 * rect.width;
}
for (let i = 0; i < rectangles.length; i++) {
  console.log(`Rect ${i + 1}: \n\tSquare? ${rectIsSquare(rectangles[i])}\
  \n\tArea = ${rectArea(rectangles[i])}\
  \n\tPerimeter = ${rectPerimeter(rectangles[i])}`);
}

//TRIANGLES
const triangles = [
  {sideA: 3, sideB: 4, sideC: 4},
  {sideA: 3, sideB: 4, sideC: 6 },
  {sideA: 3, sideB: 3, sideC: 3 }
];

const isEquilateral = function(tri) {
  if (tri.sideA === tri.sideB && tri.sideB === tri.sideC) {
    return true;
  }
  return false;
}

const isIsosceles = function(tri) {
  if(tri.sideA === tri.sideB || tri.sideA === tri.sideC || tri.sideB === tri.sideC) {
    return true;
  }
  return false;
}

const isObtuse = function(tri) {
  let sideLengths = Object.values(tri).sort();
  let longest = sideLengths.pop();
  if (longest < (sideLengths[0] + sideLengths[1])) {
    if (longest **2 > (sideLengths[0] **2 + sideLengths[1] ** 2)) {
      return true;
    }
  }
  return false;
}

for (let i = 0; i < triangles.length; i++) {
  console.log(`Tri ${i + 1} (sides: ${Object.values(triangles[i]).join(', ')}):\
  \n\tEquilateral? ${isEquilateral(triangles[i])}\
  \n\tIsosceles? ${isIsosceles(triangles[i])}\
  \n\tObtuse? ${isObtuse(triangles[i])}`);
}
