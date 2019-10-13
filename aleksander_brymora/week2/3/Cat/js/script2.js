const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '0px';
let isGoingRight = true;

const catWalk = function () {
    const oldLeft = parseInt(cat.style.left);
    if (isGoingRight) {
        if (document.body.clientWidth - cat.width < parseInt(cat.style.left)) {
            isGoingRight = false;
            cat.style.transform = 'rotateY(180deg)';
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

setInterval(catWalk, 10);