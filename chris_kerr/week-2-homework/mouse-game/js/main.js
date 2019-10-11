//// defining stuff
let catArray = [
  {
    catID: document.getElementById('catOne'),
    xVel: 10,
    yVel: 10,
    leftWall: 0,
    topWall: 0,
    rightWall: 0,
    bottomWall: 0,
  },
  {
    catID: document.getElementById('catTwo'),
    xVel: 6,
    yVel: -12,
    leftWall: 0,
    topWall: 0,
    rightWall: 0,
    bottomWall: 0,
  },
]

let mouseOb = {
  id: document.getElementById('mouse'),
  xVel: 15,
  yVel: 15,
  leftWall: 0,
  topWall: 0,
  rightWall: 0,
  bottomWall: 0,
  }

let cheeseOb = {
  id: document.getElementById('cheese'),
  leftWall: 0,
  topWall: 0,
  rightWall: 0,
  bottomWall: 0,
}

let cont = document.getElementById('container');
let maxSpeed = 10;
let catQueue = 0;
let userScore = 0;
let snd = new Audio("resources/mjau4.wav");
let frameDuration = 50; //milliseconds
let currentIntervalStatus = 'running';

document.getElementById('faster').addEventListener('click',faster);
document.getElementById('slower').addEventListener('click',slower);
document.getElementById('pause').addEventListener('click',pause);
document.getElementById('resume').addEventListener('click',resume);
document.body.addEventListener('keydown', function (event) {
  moveMouse(event.keyCode);
  })



/// declaring functions
function motion() {
  //every other function to be called from here, based on if / else conditions
  rebuildObject();
  detectCol();
  detectMouseCheese();

  for (let i = 0; i < catArray.length; i++) {
    let currentCat = catArray[i].catID;
    moveCat(currentCat, catArray[i].xVel, catArray[i].yVel);
  }
}

function moveCat(currentCat, xVel, yVel) {
  currentCat.setAttribute('style', `top: ${parseInt(currentCat.style.top) + yVel}px; left: ${parseInt(currentCat.style.left) + xVel}px`);
}

function detectCol() {
  //hit a wall?
  for (let i = 0; i < catArray.length; i++ ) {
    let currentCat = catArray[i].catID;
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
  //now collision detection between cats
  for (let i = 0; i < catArray.length; i++) {
    for (let j = i + 1; j < catArray.length; j++) {
      if (catArray[i].rightWall >= catArray[j].leftWall && catArray[i].leftWall <= catArray[j].rightWall && catArray[i].bottomWall <= catArray[j].topWall && catArray[i].topWall >= catArray[j].bottomWall) {
        let changeArray = [i, j];
        hitChangeCalc(changeArray);
        meow();
      }
    }
  }
}

function detectMouseCheese() {
  //hit a wall, CHANGE TO STOP FURTHER MOVEMENT PAST THE WALL, move this to MOVEMOUSE() function?
  for (let i = 0; i < catArray.length; i++ ) {
    let currentCat = catArray[i].catID;
    if ((parseInt(currentCat.style.left) + currentCat.offsetWidth) >= cont.offsetWidth) { //test for right wall, if this fails, then test left
      //hits the right wall
      randomVels(i, false, true, false, false);
      meow();
    } else if (parseInt(currentCat.style.left) <= 0) {
      randomVels(i, true, false, false, false);
      meow();
    }

    if ((parseInt(currentCat.style.top) + currentCat.offsetHeight) >= cont.offsetHeight) { //test for bottom wall, if this fails, then test top
      randomVels(i, false, false, false, true);
      meow();
    } else if (parseInt(currentCat.style.top) <= 40) { //40 is width of blue bar
      randomVels(i, false, false, true, false);
      meow();
    }
  }
      // mouse hits cheese?
      if (mouseOb.rightWall >= cheeseOb.leftWall && mouseOb.leftWall <= cheeseOb.rightWall && mouseOb.bottomWall <= cheeseOb.topWall && mouseOb.topWall >= cheeseOb.bottomWall) {
        create('cheese');
        create('cat');
        document.getElementById('cat-counter').innerHTML = `You're score is ${++userScore}`

      }

      //mouse hits cat?
      for (let i = 0; i < catArray.length; i++) {
        if (mouseOb.rightWall >= catArray[i].leftWall && mouseOb.leftWall <= catArray[i].rightWall && mouseOb.bottomWall <= catArray[i].topWall && mouseOb.topWall >= catArray[i].bottomWall) {
          alert('You got eaten!');
          initialBuild();
        }
      }
}

function miniDetectCol(leftPos, topPos) {
  rebuildObject();

  for (let i = 0; i < catArray.length; i++) {
    if (catArray[i].rightWall >= leftPos && catArray[i].leftWall <= (leftPos + 100) && catArray[i].bottomWall <= topPos && catArray[i].topWall >= (topPos - 100)) {
      return true;
    }
  }
  return false;
}

function hitChangeCalc (changeArray) {
  //purpose of this is to reverse the direction of both collided cats
  for (let i = 0; i < changeArray.length; i++) {
    catArray[changeArray[i]].xVel = catArray[changeArray[i]].xVel * (-1);
    catArray[changeArray[i]].yVel = catArray[changeArray[i]].yVel * (-1);

    if (catArray[changeArray[i]].xVel < 0) {
      catArray[changeArray[i]].catID.setAttribute("class", "flipped");
    } else {
      catArray[changeArray[i]].catID.setAttribute("class", "normal");
    }
  }
}

function rebuildObject() {
  //recalc cats walls on each clock cycle
  for (let i = 0; i < catArray.length; i++) {
    catArray[i].leftWall = parseInt(catArray[i].catID.style.left);
    catArray[i].topWall = parseInt(catArray[i].catID.style.top);
    catArray[i].rightWall = catArray[i].leftWall + catArray[i].catID.offsetWidth;
    catArray[i].bottomWall = catArray[i].topWall - catArray[i].catID.offsetHeight;
  }
  //recalc mouse walls on each cycle
  mouseOb.leftWall = parseInt(mouseOb.id.style.left);
  mouseOb.topWall = parseInt(mouseOb.id.style.top);
  mouseOb.rightWall = mouseOb.leftWall + mouseOb.id.offsetWidth;
  mouseOb.bottomWall = mouseOb.topWall - mouseOb.id.offsetHeight;
  cheeseOb.leftWall = parseInt(cheeseOb.id.style.left);
  cheeseOb.topWall = parseInt(cheeseOb.id.style.top);
  cheeseOb.rightWall = cheeseOb.leftWall + cheeseOb.id.offsetWidth;
  cheeseOb.bottomWall = cheeseOb.topWall - cheeseOb.id.offsetHeight;
}

function create(type) {
  let newNode = document.createElement('img');

  do {
    leftPos = Math.floor(Math.random() * (cont.offsetWidth - 110));
    topPos = Math.floor(Math.random() * (cont.offsetHeight - 155)) + 45;
  } while (miniDetectCol(leftPos, topPos))

  if (type === 'cat') {
    newNode.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    newNode.setAttribute('class', 'normal');
    newNode.setAttribute('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif')

    let newCatObj = {
      catID: newNode,
      xVel: leftPos,
      yVel: topPos,
      leftWall: 0,
      topWall: 50,
      rightWall: 100,
      bottomWall: 150,
    };

    catArray.push(newCatObj);

    cont.appendChild(newNode);

    randomVels((catArray.length-1), false, false, false, false);
  }

  if (type === 'cheese') {
    cheeseOb.id.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
    cheeseOb.leftWall = parseInt(cheeseOb.id.style.left);
    cheeseOb.topWall = parseInt(cheeseOb.id.style.top);
    cheeseOb.rightWall = cheeseOb.leftWall + cheeseOb.id.offsetWidth;
    cheeseOb.bottomWall = cheeseOb.topWall - cheeseOb.id.offsetHeight;
  }

}

function meow () {
  snd.play();
}

function randomVels(arrayIndex, minX, maxX, minY, maxY) {
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
    catArray[arrayIndex].catID.setAttribute("class", "flipped");
  } else {
    catArray[arrayIndex].catID.setAttribute("class", "normal");
  }
}

function initialBuild() {

  //for the cats
  for (let i = 0; i < catArray.length; i++) {
    randomVels(i, false, false, false, false)

    do {
      leftPos = Math.floor(Math.random() * (cont.offsetWidth - 110));
      topPos = Math.floor(Math.random() * (cont.offsetHeight - 155)) + 45;
    } while (miniDetectCol(leftPos, topPos))

    if (miniDetectCol) catArray[i].catID.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px`);
  }
  document.getElementById('speedoText').innerText = `The current speed is ${1000 / 50 * maxSpeed} px/s`;
  document.getElementById('cat-counter').innerHTML = `You're score is ${userScore}`;

  //for the cheese
  do {
    leftPos = Math.floor(Math.random() * (cont.offsetWidth - 110));
    topPos = Math.floor(Math.random() * (cont.offsetHeight - 155)) + 45;
  } while (miniDetectCol(leftPos, topPos))
  cheeseOb.id.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
  cheeseOb.leftWall = parseInt(cheeseOb.id.style.left);
  cheeseOb.topWall = parseInt(cheeseOb.id.style.top);
  cheeseOb.rightWall = cheeseOb.leftWall + cheeseOb.id.offsetWidth;
  cheeseOb.bottomWall = cheeseOb.topWall - cheeseOb.id.offsetHeight;

  //for the mouse
  do {
    leftPos = Math.floor(Math.random() * (cont.offsetWidth - 110));
    topPos = Math.floor(Math.random() * (cont.offsetHeight - 155)) + 45;
  } while (miniDetectCol(leftPos, topPos))
  mouseOb.id.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
}

function faster(){
  maxSpeed ++;
  document.getElementById('speedoText').innerText = `The current speed is ${1000 / frameDuration * maxSpeed} px/s`;
  clearInterval(catOneID);
  catOneID = setInterval(motion, frameDuration);

}

function slower(){
  maxSpeed --;
  document.getElementById('speedoText').innerText = `The current speed limit is ${1000 / frameDuration * maxSpeed} px/s`;
  clearInterval(catOneID);
  catOneID = setInterval(motion, frameDuration);
}

function pause() {
  clearInterval(catOneID);
  currentIntervalStatus = 'paused';
}

function resume() {
  if (currentIntervalStatus === 'paused') {
    catOneID = setInterval(motion, 25);
    currentIntervalStatus = 'running'
  }
}

function animate () {

}

function createTest () {
  if (catArray.length > 15) {
    catQueue = 0;
    //clearInterval(catTwoID);
    //clearInterval(catOneID);
    //display gameover page!
  } else if (catQueue > 0) {
    create('cat');
    catQueue = 0;
  }
}

function moveMouse(dir) {
  if (currentIntervalStatus === 'paused') resume();

  //keyCode 38 is up
  if (dir === 38) {
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top) - mouseOb.yVel}px; left: ${parseInt(mouseOb.id.style.left)}px`);
  }

  //keyCode 40 is down
  if (dir === 40) {
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top) + mouseOb.yVel}px; left: ${parseInt(mouseOb.id.style.left)}px`);
  }

  //keyCode 39 is right
  if (dir === 39) {
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top)}px; left: ${parseInt(mouseOb.id.style.left) + mouseOb.xVel}px`);
    mouseOb.id.setAttribute("class", "flipped");
  }

  //keyCode 37 is left
  if (dir === 37) {
    mouseOb.id.setAttribute('style', `top: ${parseInt(mouseOb.id.style.top)}px; left: ${parseInt(mouseOb.id.style.left) - mouseOb.xVel}px`);
    mouseOb.id.setAttribute("class", "normal");
  }
}





/// execute it all
initialBuild();
let catTwoID = setInterval(createTest, 500);
let catOneID = setInterval(motion, frameDuration);
pause();
