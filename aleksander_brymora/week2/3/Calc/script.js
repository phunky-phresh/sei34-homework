// Square
const square = document.getElementById('square-button');
const squareCalc = function () {
    const num = parseInt(document.getElementById('square-input').value);
    document.getElementById('solution').innerText = num * num;
}
square.addEventListener('click', squareCalc);

//Half
const half = document.getElementById('half-button');
const halfCalc = function () {
    const num = parseInt(document.getElementById('half-input').value);
    document.getElementById('solution').innerText = num / 2;
}
half.addEventListener('click', halfCalc);

// Percentage
const percent = document.getElementById('percent-button');
const percentCalc = function () {
    const num1 = parseInt(document.getElementById('percent1-input').value);
    const num2 = parseInt(document.getElementById('percent2-input').value);
    document.getElementById('solution').innerText = `${(num1 / num2) * 100}%`;
}
percent.addEventListener('click', percentCalc);

// Circle area
const circle = document.getElementById('area-button');
const circleCalc = function () {
    const num = parseInt(document.getElementById('area-input').value);
    document.getElementById('solution').innerText = num * num * Math.PI;
}
circle.addEventListener('click', circleCalc);