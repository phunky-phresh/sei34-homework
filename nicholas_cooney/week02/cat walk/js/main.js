
const cat = document.getElementById('cat');
cat.style.left = '0px';
// cat.style.right = '0px';

const catWalk = function() {
  const oldPos = parseInt(cat.style.left);
  const newPos = oldPos + 1;
  const reverse = oldPos -1;
  const screenWidth = window.innerWidth-296;
  // cat.style.left = newPos + 'px';
    if (parseInt(cat.style.left) >= screenWidth) {
    // cat.style.right = '0px';
    cat.style.transform = 'scaleX(-1)'
    // console.log(screenWidth);
    console.log(parseInt(cat.style.left));
    cat.style.left = reverse + 'px';
    //problem. once it hits screenWidth it immediately resuses the belown code and gets stuck in a loop
  } else
  // else if (cat.style.left = '0px')
  {
    cat.style.left = newPos + 'px';
  }

};

setInterval(catWalk, 10);
//
//
// const catWalk = function() {
//   const oldPos = parseInt(cat.style.left);
//   const newPos = oldPos + 1;
//   const screenWidth = window.innerWidth-296;
//   cat.style.left = newPos + 'px';
//
//
//   if (parseInt(cat.style.left) === screenWidth) {
//     //the above if statement compares the numerical value of cat.style.left with the current window size. This has to take into account the size of the image (ie.296)
//     clearInterval(stopWalk);
//     cat.style.transform = 'scaleX(-1)';
//   }
//
// };
// const stopWalk = setInterval(catWalk, 10);
