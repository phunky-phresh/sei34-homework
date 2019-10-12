console.log("Cat Walk");

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




// Create a variable to store a reference to the img.
const image = document.querySelector('#cat');
// Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
image.style.left = 0;
let pos = 0;
let direction = "right";
image.style.bottom = "30%";
console.log(pos);

const catWalk = function() {
      if (direction === "right") {
        pos += 10;
      } else if ( direction === "left"){
        pos -=10;
      }
      image.style.left = pos + "px";

  if ( pos > window.innerWidth ) {
    console.log("stop");
    // setTimeout(function(){ setInterval(dogWalk,1000)});
    direction = "left";
    image.style.transform = 'scaleX(-1)';
    console.log(direction);
    // clearInterval(walkTimerID);
    // function catWalkBack();
  } else if ( pos < -300) {
    direction = "right";
    image.style.transform = 'scaleX(1)';
  }
  // else if ( pos === )
}

const walkTimerID = setInterval(catWalk, 70);

////////////  DOG //////////////////////////
// // Create a variable to store a reference to the img.
const image2 = document.querySelector('#dog');
// // Change the style of the img to have a "left" of "0px", so that it starts at the left hand of the screens.
// image2.style.left = -300;
image2.style.bottom = "40%";
let pos2 = -500;
let direction2 = "right";
console.log(pos2);

const dogWalk = function() {
      if (direction2 === "right") {
        pos2 += 10;
      } else if ( direction2 === "left"){
        pos2 -=10;
      }
      // console.log(window.innerWidth);
      console.log(pos2);
      // console.log(image2);
      // image2.style.right = 0;
      image2.style.left = -300 + pos2 + "px";
  // if ( pos2 > (window.innerWidth/2) ){
  //   setInterval(dance, 2000);
  // }

  if ( pos2 > window.innerWidth ) {
    console.log("stop");
    direction2 = "left";
    image2.style.transform = 'scaleX(-1)';
    console.log(direction2);
    // clearInterval(walkTimerID);
    // function catWalkBack();
  }
  // else if ( pos2 < -300) {
  //   direction2 = "right";
  //   image2.style.transform = 'rotate(0deg)';
  // }
}


const walkDogTimerID = setTimeout( setInterval(dogWalk, 50), 1000);
