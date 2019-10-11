// Create a new Javascript file and link to it with a script tag at the bottom.
//
// Create a variable to store a reference to the img.
//
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
//
// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// Bonus #4: Pretty much go nuts or whatever.
//const catImg = document.getElementById('catImg');

// var img = document.getElementsByTagName('img');
// img.style.position = 'absolute';
// img.style.left = '0px';
// var watchKittyFall = function() {
//   var oldTop = parseInt(img.style.left);
//   var newTop = oldTop + 10;
//   img.style.left = newTop + 'px';
// };
// setInterval(watchKittyFall, 10);



const catImg = document.getElementById('catImg');
catImg.style.position = 'absolute';
catImg.style.left = '0px';

// var getWidth = function() {
//   if (self.innerWidth) {
//     return self.innerWidth;
//   }
// }
//
// var getMaxWidth = function() {
//   return screen.width;
// }
// const listItems = document.querySelectorAll('img');
// listItems.className = 'listitem';

const makeImageBigger = function() {
  const catImg = document.getElementById('catImg');
  catImg.setAttribute('width', catImg.width + 1);
};
setInterval(makeImageBigger, 10);


const catWalk = function() {


  const maxWidth = 1280;
  var oldleft = parseInt(catImg.style.left);
  var newleft = oldleft + 5;
  var wid = catImg.offsetWidth;
  wid += newleft;
  catImg.style.left = newleft + 'px';
  makeImageBigger();

  if (wid > maxWidth) {
    clearInterval(fadeTimer);
  }
};

var fadeTimer = setInterval(catWalk, 100);