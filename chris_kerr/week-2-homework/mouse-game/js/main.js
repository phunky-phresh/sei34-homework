///////////////
// DEFINTITIONS
///////////////
let frameRate = 60;
let frameDuration = Math.floor(1000 / frameRate); //milliseconds
let maxSpeed = 10;
let mouseSpeed = 1.5 * maxSpeed;
let maxCats = 15;
let catArray = [];
let mouseOb = {
  id: '',
};
let cheeseOb = {
  id: '',
};
let cont = document.getElementById('container');
let catQueue = 0;
let userScore = 0;
let snd = new Audio("resources/mjau4.wav");
let currentIntervalStatus = 'running';

let catImgs = ['images/cat1.gif', 'images/cat2.gif', 'images/cat3.gif', 'images/cat4.gif', 'images/cat5.gif', 'images/cat6.gif', 'images/cat7.gif', 'images/cat8.gif', 'images/cat-walk.gif'];

document.getElementById('pause').addEventListener('click',pause);
document.getElementById('resume').addEventListener('click',resume);
document.body.addEventListener('keydown', function (event) {
  moveMouse(event.keyCode);
  })


///////////////////////
//NEW CREATOR FUNCTIONS
///////////////////////

function elementBuilder (type) {
  //create an all object list
  let allObjects = [];
  if (catArray.length > 0) allObjects.push([...catArray]);
  if (mouseOb.id != '') allObjects.push(mouseOb);
  if (cheeseOb.id != '') allObjects.push(cheeseOb);

  // create a node and then create input parameters for it
  let leftPos = 0, topPos = 0;

  //// test for unique starting position, to ensure no initial overlap
  if (allObjects.length > 0) {
    do {
       leftPos = Math.floor(Math.random() * (cont.offsetWidth - 110));
       topPos = Math.floor(Math.random() * (cont.offsetHeight - 155)) + 45;
    } while (function() {
        rebuildObject();

        allObjects.forEach( function(i) {
          if (parseInt(i.style.left) + i.offsetWidth >= leftPos && parseInt(i.id.style.left) <= (leftPos + 100) && parseInt(i.id.style.top) + i.id.offsetHeight >= topPos && parseInt(i.id.style.top) <= (topPos + 100)) {
            console.log('clash - called within ElementBuilder');
            return true;
          }
        return false;
        })
    } === true)
  } else {
    leftPos = Math.floor(Math.random() * (cont.offsetWidth - 110));
    topPos = Math.floor(Math.random() * (cont.offsetHeight - 155)) + 45;
  }
  ///

  if (type === 'cat') {
    let newNode = document.createElement('img');
    newNode.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    newNode.setAttribute('class', 'normalCat');
    newNode.setAttribute('src', `${catImgs[8]}`)
    //pick a random image
    // newNode.setAttribute('src', `${catImgs[Math.floor((Math.random()*catImgs.length))]}`)
    document.getElementById('cat-box').appendChild(newNode);
    let newCatObj = {
      id: newNode,
      xVel: 0,
      yVel: 0,
    };
    catArray.push(newCatObj);
    randomVels((catArray.length-1), false, false, false, false);
  }

  if (type === 'mouse') {
    if (document.getElementById('mouse') === null) {
      let newNode = document.createElement('img');
      newNode.setAttribute('class', 'normalMouse');
      newNode.setAttribute('id', 'mouse');
      newNode.setAttribute('src', `images/mouse2.png`)
      document.getElementById('cat-box').appendChild(newNode);
      newNode.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    } else {
      document.getElementById('mouse').setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    }

    mouseOb.xVel = mouseSpeed;
    mouseOb.yVel = mouseSpeed;
    mouseOb.id = document.getElementById('mouse');
  }

  if (type === 'cheese') {
    if (document.getElementById('cheese') === null){
      let newNode = document.createElement('img');
      newNode.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
      newNode.setAttribute('class', 'cheese');
      newNode.setAttribute('id', 'cheese');
      newNode.setAttribute('src', `images/cheese.png`)
    document.getElementById('cat-box').appendChild(newNode);
  } else {
    document.getElementById('cheese').setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
  }

    cheeseOb.id = document.getElementById('cheese');
  }
}

function randomVels (arrayIndex, minX, maxX, minY, maxY) {

  let xVel = 0;
  let yVel = 0

  //true means limit set
  if (minX === false && maxX === false) {
    xVel = Math.floor((Math.random() - 0.5) * maxSpeed);
  } else if (minX === true && maxX === false) {
    xVel = Math.floor(Math.random() * maxSpeed / 2);
  } else if (minX === false && maxX === true) {
    xVel = Math.floor((Math.random() - 1) * maxSpeed / 2);
  }

  if (minY === false && maxY === false) {
    yVel = Math.floor((Math.random() - 0.5) * maxSpeed);
  } else if (minY === true && maxY === false) {
    yVel = Math.floor(Math.random() * maxSpeed / 2);
  } else if (minY === false && maxY === true) {
    yVel = Math.floor((Math.random() - 1) * maxSpeed / 2);
  }

    catArray[arrayIndex].xVel = xVel;
    catArray[arrayIndex].yVel = yVel;

    if (xVel < 0) {
      catArray[arrayIndex].id.setAttribute("class", "flippedCat");
    } else {
      catArray[arrayIndex].id.setAttribute("class", "normalCat");
  }
}

function reset () {
  catArray = [];
  mouseOb = {
    id: '',
  };
  cheeseOb = {
    id: '',
  };
  userScore = 0;
  const myNode = document.getElementById("cat-box");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }
}

function initialBuild() {

  elementBuilder('mouse');
  elementBuilder('cheese');
  elementBuilder('cat');
  elementBuilder('cat');
  document.getElementById('cat-counter').innerHTML = `Your score is ${userScore}`;
}

///////////////////////
//RUN CODE FUNCTIONS
///////////////////////

function run() {
  //every other function to be called from here, based on if / else conditions
  detectCol();
  detectWall();

  catArray.forEach(function(i, j) {
    catArray[j].id.setAttribute('style', `top: ${parseInt(catArray[j].id.style.top) + catArray[j].yVel}px; left: ${parseInt(catArray[j].id.style.left) + catArray[j].xVel}px`);
  })
}

function detectWall() {
  // has a cat hit wall?
  for (let i = 0; i < catArray.length; i++ ) {
    let currentCat = catArray[i].id;
    if ((parseInt(currentCat.style.left) + currentCat.offsetWidth) >= cont.offsetWidth) { //test for right wall, if this fails, then test left
      //hits the right wall
      randomVels(i, false, true, false, false);
    } else if (parseInt(currentCat.style.left) <= 0) {
      randomVels(i, true, false, false, false);
    }

    if ((parseInt(currentCat.style.top) + currentCat.offsetHeight) >= cont.offsetHeight) { //test for bottom wall, if this fails, then test top
      randomVels(i, false, false, false, true);
    } else if (parseInt(currentCat.style.top) <= 40) { //40 is width of blue bar
      randomVels(i, false, false, true, false);
    }
  }

  // is the mouse near a wall?
  if ((parseInt(mouseOb.id.style.left) + mouseOb.id.offsetWidth) >= cont.offsetWidth) {
    crossWall('right');
  } else if (parseInt(mouseOb.id.style.left) <= 0) {
    crossWall('left');
  }

  if ((parseInt(mouseOb.id.style.top) + mouseOb.id.offsetHeight) >= cont.offsetHeight) { //test for bottom wall, if this fails, then test top
    crossWall('bottom');
  } else if (parseInt(mouseOb.id.style.top) <= 40) { //40 is width of blue bar
    crossWall('top');
  }
}

function createTest () {
  if (catArray.length > maxCats) {
    catQueue = 0;
    //clearInterval(catTwoID);
    //clearInterval(catOneID);
    //display gameover page!
  } else if (catQueue > 0) {
    elementBuilder('cat');
    catQueue = 0;
  }
}

function detectCollision (object1, object2) {
  if (parseInt(object1.id.style.left) + object1.id.offsetWidth >= parseInt(object2.id.style.left) && parseInt(object1.id.style.left) <= parseInt(object2.id.style.left) + object2.id.offsetWidth && parseInt(object1.id.style.top) + object1.id.offsetHeight >= parseInt(object2.id.style.top) && parseInt(object1.id.style.top) <= parseInt(object2.id.style.top) + object2.id.offsetHeight) {
    return true;
  } else {
    return false;
  }
}

function detectCol() {
  //now collision detection between cats
  for (let i = 0; i < catArray.length; i++) {
    for (let j = i + 1; j < catArray.length; j++) {
      if (detectCollision(catArray[i], catArray[j])) {
        //let changeArray = [i, j];
        hitChangeCalc([i, j]);
      }
    }
  }

  // mouse hits cheese?
  if (detectCollision(mouseOb, cheeseOb)) {
    elementBuilder('cheese');
    elementBuilder('cat');
    document.getElementById('cat-counter').innerHTML = `Your score is ${++userScore}`
  }

  //mouse hits cat?
  for (let i = 0; i < catArray.length; i++) {
    if (detectCollision(mouseOb, catArray[i])) {
      meow();
      alert('You got eaten!');
      pause();
      reset();
      initialBuild();
    }
  }
}

function meow () {
  snd.play();
}

function crossWall (wall) {
  if (wall === 'right') {
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top)}px; left: ${2}px`);
  }
  if (wall === 'left') {
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top)}px; left: ${cont.offsetWidth - mouseOb.id.offsetWidth - 2}px`);
  }
  if (wall === 'top') {
    mouseOb.id.setAttribute('style', `top: ${cont.offsetHeight - mouseOb.id.offsetHeight - 2}px; left: ${parseInt(mouseOb.id.style.left)}px`);
  }
  if (wall === 'bottom') {
    mouseOb.id.setAttribute('style', `top: ${40 + 2}px; left: ${parseInt(mouseOb.id.style.left)}px`);
  }

}

///////////////////
// INTERACTION CODE
///////////////////

function pause() {
  clearInterval(catOneID);
  currentIntervalStatus = 'paused';
}

function resume() {
  if (currentIntervalStatus === 'paused') {
    catOneID = setInterval(run, 25);
    currentIntervalStatus = 'running'
  }
}

function moveMouse(dir) {

  //keyCode 38 is up
  if (dir === 38) {
    if (currentIntervalStatus === 'paused') resume();
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top) - mouseOb.yVel}px; left: ${parseInt(mouseOb.id.style.left)}px`);
  }

  //keyCode 40 is down
  if (dir === 40) {
    if (currentIntervalStatus === 'paused') resume();
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top) + mouseOb.yVel}px; left: ${parseInt(mouseOb.id.style.left)}px`);
  }

  //keyCode 39 is right
  if (dir === 39) {
    if (currentIntervalStatus === 'paused') resume();
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top)}px; left: ${parseInt(mouseOb.id.style.left) + mouseOb.xVel}px`);
    mouseOb.id.setAttribute("class", "flippedMouse");
  }

  //keyCode 37 is left
  if (dir === 37) {
    if (currentIntervalStatus === 'paused') resume();
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top)}px; left: ${parseInt(mouseOb.id.style.left) - mouseOb.xVel}px`);
    mouseOb.id.setAttribute("class", "normalMouse");
  }
}

///////// OLDER STUFF /////////
/// declaring functions


function hitChangeCalc (changeArray) {
  //purpose of this is to reverse the direction of both collided cats
  for (let i = 0; i < changeArray.length; i++) {
    catArray[changeArray[i]].xVel = catArray[changeArray[i]].xVel * (-1);
    catArray[changeArray[i]].yVel = catArray[changeArray[i]].yVel * (-1);

    if (catArray[changeArray[i]].xVel < 0) {
      catArray[changeArray[i]].id.setAttribute("class", "flippedCat");
    } else {
      catArray[changeArray[i]].id.setAttribute("class", "normalCat");
    }
  }
}

/////////////
// LOAD CODE
/////////////

initialBuild();
let catTwoID = setInterval(createTest, 500);
let catOneID = setInterval(run, frameDuration);
pause();
