console.log('Working! Homework - The Cat Walk')

// Week 2, Day 4
// Day 8 - Thursday, 10 October 2019

// https://gist.github.com/wofockham/b4a62f016bfd241627dd

// # Exercises: Animation
//
// ## The Cat Walk
//
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
// ```html
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Cat Walk</title>
//  </head>
//  <body>
//
//   <img style="position:absolute;" src="http://www.anniemation.com/clip_art/images/cat-walk.gif">
//
//  </body>
// </html>
// ```
//
// - Create a new Javascript file and link to it with a script tag at the bottom.
// - Create a variable to store a reference to the img.
// - Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// - Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
// - Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// - Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// - Bonus #2: When the cat reaches the right-hand of the screen, make them move right-to-lefts instead. They should keep walking back and forth forever and ever.
//
// - Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.
//
// - Bonus #4: Pretty much go nuts or whatever.

// Shared variable
let innerWidth = window.innerWidth - 250;

// Bonus #1 - Cat restarts at left once it hits right boundary
const catA = document.getElementById('catA');
catA.style.position = 'absolute';
catA.style.left = '0px';

const catWalkA = function() {
  let oldLeft = parseInt(catA.style.left);
  let newLeft = oldLeft + 10;
  console.log(newLeft);
  catA.style.left = newLeft + 'px';

  if (newLeft > innerWidth) {
    console.log(catA.style.left);
    catA.style.left = '0px';
  }
};

// setInterval(catWalkA, 50);

// Bonus #2 - Cat walks back and forth
const catB = document.getElementById('catB');
catB.style.position = 'absolute';
catB.style.left = '0px';
let condition = "left-to-right";
let increment = 0;

const catWalkB = function() {

  if (condition === "left-to-right") {
    increment += 10;
  } else if (condition === "right-to-left") {
    increment -= 10;
  }

  console.log( increment );
  if (increment >= innerWidth) {
    condition = "right-to-left";
    catB.style.transform = 'scaleX(-1)';
  } else if (increment <= -40) {
    condition = "left-to-right";
    catB.style.transform = 'scaleX(1)';
  }

  catB.style.left = increment + 'px';
};

// setInterval(catWalkB, 50);

// Bonus #3 - Cat dances in middle of the screen
const catC = document.getElementById('catB');
catC.style.position = 'absolute';
catC.style.left = '0px';
let conditionC = "left-to-right";
let incrementC = 0;

const catWalkC = function() {

  const dancingCat = function() {
    catC.img.src = "https://media2.giphy.com/media/3mXcJgVhPxWZa/giphy.gif?cid=790b7611bccd11e8bf21cd2979c8867abf00a7ddfc84333b&rid=giphy.gif"
  };

  if (incrementC > (innerWidth / 2 - 10) && incrementC < (innerWidth / 2 + 10)){
    setInterval(dancingCat, 10000);
  }

  if (conditionC === "left-to-right") {
    increment += 10;
  } else if (conditionC === "right-to-left") {
    increment -= 10;
  }

  console.log(conditionC);
  if (incrementC >= innerWidth) {
    conditionC = "right-to-left";
    catC.style.transform = 'scaleX(-1)';
  } else if (incrementC <= -45) {
    conditionC = "left-to-right";
    catC.style.transform = 'scaleX(1)';
  }

  catC.style.left = incrementC + 'px';
};

// setInterval(catWalkC, 50);
