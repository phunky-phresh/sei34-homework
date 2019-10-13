const cat = document.getElementById('cat');
cat.style.position = 'absolute';
cat.style.left = '0px';
let reset = 0;

const catWalk = function () {
    const oldLeft = parseInt(cat.style.left);
    const newLeft = oldLeft + 10;
    cat.style.left = newLeft + 'px';
    if (document.body.clientWidth - cat.width < parseInt(cat.style.left)) {
        clearInterval(reset);
        cat.style.left = 0;
        reset = setInterval(catWalk, 20);
    }
}
reset = setInterval(catWalk, 20);
