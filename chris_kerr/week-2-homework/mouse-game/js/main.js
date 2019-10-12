///////////////
// DEFINTITIONS
///////////////
let mouseSpeed = 25;
let frameRate = 30;
let maxCats = 15;
let catArray = [];
let mouseOb = {
  id: '',
};
let cheeseOb = {
  id: '',
};

let cont = document.getElementById('container');
let maxSpeed = 10;
let catQueue = 0;
let userScore = 0;
let snd = new Audio("resources/mjau4.wav");
let frameDuration = 50; //milliseconds
let currentIntervalStatus = 'running';

let catImgs = ['images/cat1.gif', 'images/cat2.gif', 'images/cat3.gif', 'images/cat4.gif', 'images/cat5.gif', 'images/cat6.gif', 'images/cat7.gif', 'images/cat8.gif', 'http://www.anniemation.com/clip_art/images/cat-walk.gif'];

document.getElementById('faster').addEventListener('click',faster);
document.getElementById('slower').addEventListener('click',slower);
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

  // test for unique starting position, to ensure no initial overlap
  if (allObjects.length > 0) {
    do {
       leftPos = Math.floor(Math.random() * (cont.offsetWidth - 110));
       topPos = Math.floor(Math.random() * (cont.offsetHeight - 155)) + 45;
    } while (function() {
        rebuildObject();

        catArray.forEach( function(i) {
          if (parseInt(i.rightWall) >= leftPos && parseInt(i.id.style.left) <= (leftPos + 100) && parseInt(i.bottomWall) >= topPos && parseInt(i.topWall) <= (topPos + 100)) {
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

  if (type === 'cat') {
    let newNode = document.createElement('img');
    newNode.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    newNode.setAttribute('class', 'normalCat');
    newNode.setAttribute('src', `${catImgs[8]}`)
    //pick a random image
    // newNode.setAttribute('src', `${catImgs[Math.floor((Math.random()*catImgs.length))]}`)
    cont.appendChild(newNode);
    let newCatObj = {
      id: newNode,
      xVel: 0,
      yVel: 0,
      //id.style.left: leftPos,
      topWall: topPos,
      rightWall: leftPos + newNode.style.offsetWidth,
      bottomWall: leftPos + newNode.style.offsetHeight,
    };
    catArray.push(newCatObj);
    randomVels((catArray.length-1), false, false, false, false);
  }

  if (type === 'mouse') {
    if (document.getElementById('mouse') === null) {
      let newNode = document.createElement('img');
      newNode.setAttribute('class', 'normalMouse');
      newNode.setAttribute('id', 'mouse');
      newNode.setAttribute('src', `images/mouse.jpeg`)
      cont.appendChild(newNode);
      newNode.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    } else {
      document.getElementById('mouse').setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    }

    mouseOb.xVel = mouseSpeed;
    mouseOb.yVel = mouseSpeed;
    mouseOb.id = document.getElementById('mouse');
    //mouseOb.id.style.left = leftPos;
    mouseOb.topWall = topPos;
    mouseOb.rightWall = leftPos + mouseOb.id.style.offsetWidth;
    mouseOb.bottomWall = leftPos + mouseOb.id.style.offsetHeight;
  }

  if (type === 'cheese') {
    if (document.getElementById('cheese') === null){
      let newNode = document.createElement('img');
      newNode.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
      newNode.setAttribute('class', 'cheese');
      newNode.setAttribute('id', 'cheese');
      newNode.setAttribute('src', `images/cheese.jpeg`)
    cont.appendChild(newNode);
  } else {
    document.getElementById('cheese').setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
  }

    cheeseOb.id = document.getElementById('cheese');
    //cheeseOb.id.style.left = leftPos;
    cheeseOb.topWall = topPos;
    cheeseOb.rightWall = leftPos + cheeseOb.id.style.offsetWidth;
    cheeseOb.bottomWall = leftPos + cheeseOb.id.style.offsetHeight;
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
  let nodeList = document.querySelectorAll('img');
  nodeList.forEach(function(i,j) {
    //console.log(nodeList[j]) //work out how to delete this node!
  })
}

function initialBuild() {

  elementBuilder('mouse');
  elementBuilder('cheese');
  elementBuilder('cat');
  elementBuilder('cat');

  document.getElementById('speedoText').innerText = `The current speed is ${1000 / 50 * maxSpeed} px/s`;
  document.getElementById('cat-counter').innerHTML = `Your score is ${userScore}`;
}

///////////////////////
//RUN CODE FUNCTIONS
///////////////////////

function run() {
  //every other function to be called from here, based on if / else conditions
  rebuildObject();
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
    console.log('Hit right wall');
  } else if (parseInt(mouseOb.id.style.left) <= 0) {
    console.log('Hit left wall');;
  }

  if ((parseInt(mouseOb.id.style.top) + mouseOb.id.offsetHeight) >= cont.offsetHeight) { //test for bottom wall, if this fails, then test top
    console.log('Hit bottom wall');
  } else if (parseInt(mouseOb.id.style.top) <= 40) { //40 is width of blue bar
    console.log('Hit top wall');
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
  console.log(parseInt(object2.id.style.left))
  if (parseInt(object1.rightWall) >= parseInt(object2.id.style.left) && parseInt(object1.id.style.left) <= parseInt(object2.rightWall) && parseInt(object1.bottomWall) >= parseInt(object2.topWall) && parseInt(object1.topWall) <= parseInt(object2.bottomWall)) {
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
        meow();
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


///////////////////
// INTERACTION CODE
///////////////////
function faster(){
  maxSpeed ++;
  document.getElementById('speedoText').innerText = `The current speed is ${1000 / frameDuration * maxSpeed} px/s`;
  clearInterval(catOneID);
  catOneID = setInterval(run, frameDuration);

}

function slower(){
  maxSpeed --;
  document.getElementById('speedoText').innerText = `The current speed limit is ${1000 / frameDuration * maxSpeed} px/s`;
  clearInterval(catOneID);
  catOneID = setInterval(run, frameDuration);
}

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

function rebuildObject() {
  //recalc cats walls on each clock cycle
  for (let i = 0; i < catArray.length; i++) {
    //catArray[i].id.style.left = parseInt(catArray[i].id.style.left);
    catArray[i].topWall = parseInt(catArray[i].id.style.top);
    catArray[i].rightWall = parseInt(catArray[i].id.style.left) + catArray[i].id.offsetWidth;
    catArray[i].bottomWall = catArray[i].topWall + catArray[i].id.offsetHeight;
  }

  // recalc mouse walls on each cycle
  //mouseOb.id.style.left = parseInt(mouseOb.id.style.left);
  mouseOb.topWall = parseInt(mouseOb.id.style.top);
  mouseOb.rightWall = parseInt(mouseOb.id.style.left) + mouseOb.id.offsetWidth;
  mouseOb.bottomWall = mouseOb.topWall + mouseOb.id.offsetHeight;

  //cheeseOb.id.style.left = parseInt(cheeseOb.id.style.left);
  cheeseOb.topWall = parseInt(cheeseOb.id.style.top);
  cheeseOb.rightWall = parseInt(cheeseOb.id.style.left) + cheeseOb.id.offsetWidth;
  cheeseOb.bottomWall = cheeseOb.topWall + cheeseOb.id.offsetHeight;
}











/////////////
// LOAD CODE
/////////////
initialBuild();
let catTwoID = setInterval(createTest, 500);
let catOneID = setInterval(run, frameDuration);
pause();
