const rectangleA = {
    length: 4,
    width: 4
};
const rectangleB = {
    length: 8,
    width: 4
};

const isSquare = function (rectangle) {
    return (rectangle.length === rectangle.width);
}
const area = function (rectangle) {
    return (rectangle.length * rectangle.width);
}
const perimeter = function (rectangle) {
    return ((rectangle.length + rectangle.width) * 2);
}

console.log("Square");
console.log(isSquare(rectangleA));
console.log(isSquare(rectangleB));
console.log("--------------------");
console.log("Area");
console.log(area(rectangleA));
console.log(area(rectangleB));
console.log("--------------------");
console.log("Perimeter");
console.log(perimeter(rectangleA));
console.log(perimeter(rectangleB));
console.log("--------------------");


//-----------------------------------------------
const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4
};
const triangleB = {
    sideA: 4,
    sideB: 4,
    sideC: 4
};
const triangleC = {
    sideA: 4,
    sideB: 4,
    sideC: 7
};

const isEquilateral = function (triangle) {
    return (triangle.sideA === triangle.sideB && triangle.sideB === triangle.sideC);
}
const isIsosceles = function (triangle) {
    let iso = false;
    if (triangle.sideA === triangle.sideB && triangle.sideA !== triangle.sideC) { iso = true; }
    else if (triangle.sideA === triangle.sideC && triangle.sideA !== triangle.sideB) { iso = true; }
    else if (triangle.sideB === triangle.sideC && triangle.sideA !== triangle.sideB) { iso = true; }
    return iso;
}
const isObtuse = function (triangle) {
    let longest = 0;
    let longIndex = 0;
    if (triangle.sideA > longest) {
        longest = triangle.sideA;
    }
    if (triangle.sideB > longest) {
        longest = triangle.sideA;
        longIndex = 1;
    }
    if (triangle.sideC > longest) {
        longest = triangle.sideA;
        longIndex = 2;
    }

    if (longIndex === 0) {
        if (longest * longest > triangle.sideB * triangle.sideB + triangle.sideC * triangle.sideC) {
            return true;
        }
        return false;
    }
    else if (longIndex === 1) {
        if (longest * longest > triangle.sideA * triangle.sideA + triangle.sideC * triangle.sideC) {
            return true;
        }
        return false;
    }
    else {
        if (longest * longest > triangle.sideB * triangle.sideB + triangle.sideA * triangle.sideA) {
            return true;
        }
        return false;
    }
}
const triangleArea = function (triangle) {
    const p = (triangle.sideA + triangle.sideB + triangle.sideC) / 2;
    return Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC));
}

console.log("Equiteral");
console.log(isEquilateral(triangleA));
console.log(isEquilateral(triangleB));
console.log(isEquilateral(triangleC));
console.log("--------------------");

console.log("Isosceles");
console.log(isIsosceles(triangleA));
console.log(isIsosceles(triangleB));
console.log(isIsosceles(triangleC));
console.log("--------------------");

console.log("Obtuse");
console.log(isObtuse(triangleA));
console.log(isObtuse(triangleB));
console.log(isObtuse(triangleC));
console.log("--------------------");

console.log("Area");
console.log(triangleArea(triangleA));
console.log(triangleArea(triangleB));
console.log(triangleArea(triangleC));
console.log("--------------------");