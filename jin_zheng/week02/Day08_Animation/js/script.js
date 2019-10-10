// The Cat Walk
// Who needs Milan when you have JavaScript?
//
// Start with this webpage, which has a single img tag of an animated GIF of a cat walking.
//
//
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





//Planning log
//#1 decide walking direction
//#2 find threshold for dancing
//#3 change img, 10s
//#4 finish dancing, change img back
//#5 normal walking

const img = document.querySelector('img');
// img.style.position = 'absolute'
img.style.left = 0;

// determine walking direction
let walkBack = false;
const walkBackwards = function(windowWidth, imgWidth, left) {
    if (windowWidth-imgWidth < left) {
    //turning point walk backwards
        walkBack = true;
        img.setAttribute("class", "walking-backwards");
    } else if (left < 0) {
    //turning point walk forwards
        walkBack = false;
        img.setAttribute("class", "walking-forwards");
    }
    return walkBack;
}

// find dance point
const findDancePoint = (windowWidth, imgWidth) => (windowWidth-imgWidth)/2;

//change img, adjust image center, finishing dance.
const catDance = function(windowWidth, imgWidth, left) {
    if (Math.abs(left - findDancePoint(windowWidth, imgWidth)) < 5) { //dancing point range
        img.src = "images/catdancing.gif" //change image
        const img2Width = parseInt(img.width); //record 2nd img's width
        clearInterval(walkingInterval);//pausce 5 sec
        img.setAttribute("class", "dancing")
        setTimeout(() => (finishDance(windowWidth, imgWidth, left, img2Width)), 2000); //run finishDance in 5 sec
    }
}

//finish dancing,
const finishDance = function(windowWidth, imgWidth, left, img2Width) {
    img.src = "http://www.anniemation.com/clip_art/images/cat-walk.gif"; //change images back

    if (walkBack) { //another boost to prevent stucking within the dance point range
        left -= 10;
        img.setAttribute("class", "walking-backwards");
    } else {
        left += 10;
        img.setAttribute("class", "walking-forwards");
    }
    //change style back
    img.style.left = left + "px";
    walkingInterval = setInterval(catWalkWrapper, 50); //restart catWalkWrapper, and reset walkingInterval to be used to clear setInterval latter

}

//normal walk
const catWalk = function(windowWidth, imgWidth, left) {
    if (walkBackwards(windowWidth, imgWidth, left)) {
        left -= 10;
    } else {
        left += 10;
    }
    img.style.left = left +'px';
}

// main function: to be passed to setInterval
const catWalkWrapper = function(){
    const windowWidth = parseInt(window.innerWidth);
    const imgWidth = parseInt(img.width);
    let left = parseInt(img.style.left);
    catWalk(windowWidth, imgWidth, left)
    catDance(windowWidth, imgWidth, left);
}

//to be used when clear setinterval
let walkingInterval = setInterval(catWalkWrapper, 50);
