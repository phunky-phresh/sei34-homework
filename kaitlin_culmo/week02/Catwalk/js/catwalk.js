
const img = document.getElementsByTagName('img')[0];
console.log(img);
img.style.left = '0px';

const watchKittyWalk = function() {
  let oldTop = parseInt(img.style.left);
  let newTop = oldTop + 10;
  img.style.left = newTop + 'px';
  if (parseInt(img.style.left) > (window.innerWidth - img.width)) {
    img.style.left = '0px';
    // window.clearInterval(stopTimer);
  }
};

const stopTimer = window.setInterval(watchKittyWalk, 50); //running function at every -- ms





// const img = document.getElementsByTagName('img')[0];
//
// let pos = 0
// let direction = "right"
// console.log(img);



// var move = null;
//    var body_width = document.body.clientWidth;
//
//    function doMove() {
//
//        var rect = move.getBoundingClientRect();
//
//        if(rect.right > body_width) {
//          return;
//        }
//
//        move.style.left = parseInt(move.style.left) + 2 + 'px';
//        setTimeout(doMove);
//    }
//
//    function init() {
//        move = document.getElementById("myimage");
//        move.style.left = "0px";
//        doMove();
//    }
//
// init();
