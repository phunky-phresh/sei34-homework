const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '0px';
let isGoingRight = true;
let reset = 0;
let isDancing = false;

// Going right
// Stopping on the far right
// Changing the picture for set time
// Changing the picture back
// Flipping it
// Going left
// Repeat

//Cat going right
const catWalkRight = function () {
    cat.style.transform = 'rotateY(0deg)';
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft + 1;
    cat.style.left = newLeft + 'px';
}

// cat going left
const catWalkLeft = function () {
    isDancing = false;
    cat.src = 'img/cat-walk.gif';
    cat.style.transform = 'rotateY(180deg)';
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft - 1;
    cat.style.left = newLeft + 'px';
}

const catDance = function () {
    cat.src = 'https://media.giphy.com/media/BK1EfIsdkKZMY/giphy.gif';
    setTimeout(catWalkLeft);
}

const catWalk = function () {
    reset = setInterval(catWalkRight, 10);
    if (document.body.clientWidth - cat.width <= parseInt(cat.style.left)) {
        clearInterval(reset);
        isDancing = true;
    }
    while (isDancing) {
        catDance();
    }
    reset = setTimeout(catWalkLeft, 10);
    if (parseInt(cat.style.left <= 0)) {
        reset = setInterval(catWalkRight, 10);
    }
}

const something = function () {
    console.log(document.body.clientWidth - cat.width <= parseInt(cat.style.left));
}

setInterval(something, 100);

catWalk();