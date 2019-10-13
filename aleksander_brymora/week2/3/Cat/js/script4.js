const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '0px';
let isGoingRight = true;
let reset = 0;
let danced = false;

const catDance = function () {
    cat.src = 'https://media.giphy.com/media/BK1EfIsdkKZMY/giphy.gif';
    setTimeout(catDanceReset, 1000);
}

const catDanceReset = function () {
    cat.src = 'img/cat-walk.gif';
    reset = setInterval(catWalk, 10);
    danced = true;
}

const catWalk = function () {
    const oldLeft = parseInt(cat.style.left);
    if (isGoingRight) {
        if (document.body.clientWidth - cat.width < parseInt(cat.style.left)) {
            if (document.body.clientWidth - cat.width < parseInt(cat.style.left)) {
                isGoingRight = false;
                cat.style.transform = 'rotateY(180deg)';
                clearInterval(reset);
                catDance();
            }
            else {
                const newLeft = oldLeft + 1;
                cat.style.left = newLeft + 'px';
            }
        }
        else {
            const newLeft = oldLeft + 1;
            cat.style.left = newLeft + 'px';
        }
    }
    else {
        if (parseInt(cat.style.left) === 0) {
            isGoingRight = true;
            cat.style.transform = 'rotateY(0deg)';
        }
        else {
            const newLeft = oldLeft - 1;
            cat.style.left = newLeft + 'px';
        }
    }
}

reset = setInterval(catWalk, 10);