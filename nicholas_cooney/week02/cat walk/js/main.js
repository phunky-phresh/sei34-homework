
const cat = document.getElementById('cat');
let direction = "right";
cat.style.left = '0px';
// cat.style.right = '0px';

const catWalk = function() {
  const oldPos = parseInt(cat.style.left);
  const newPos = oldPos + 1;
  const reverse = oldPos -1;
  const screenWidth = window.innerWidth-296;

  if (direction === "right") {
    cat.style.left = newPos + 'px';

    if (parseInt(cat.style.left) >= screenWidth) {
      cat.style.transform = 'scaleX(-1)'
      direction = "left";
  }
}   if (direction === "left") {
    // console.log('left');
    cat.style.left = reverse + 'px';
    if ( parseInt(cat.style.left) < 0 ) {
      cat.style.transform = 'scaleX(1)';
      direction = "right";
    }
}

};

setInterval(catWalk, 10);
