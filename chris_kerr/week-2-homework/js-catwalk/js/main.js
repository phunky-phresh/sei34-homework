let catArray = [
  {
    catID: document.getElementById('catOne'),
    xVel: 10,
    yVel: 10,
    leftWall: 0,
    topWall: 50,
    rightWall: 100,
    bottomWall: 150,
  },
  {
    catID: document.getElementById('catTwo'),
    xVel: 6,
    yVel: -12,
    leftWall: 0,
    topWall: 50,
    rightWall: 100,
    bottomWall: 150,
  },
  {
    catID: document.getElementById('catThree'),
    xVel: 15,
    yVel: -3,
    leftWall: 0,
    topWall: 50,
    rightWall: 100,
    bottomWall: 150,
  },
]

let cont = document.getElementById('container');

let maxSpeed = 10;

function motion() {
  //every other function to be called from here, based on if / else conditions
  rebuildObject();
  detectCol();

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
      meow();
    } else if (parseInt(currentCat.style.left) <= 0) {
      randomVels(i, true, false, false, false);
      meow();
    }

    if ((parseInt(currentCat.style.top) + currentCat.offsetHeight) >= cont.offsetHeight) { //test for bottom wall, if this fails, then test top
      randomVels(i, false, false, false, true);
      meow();
    } else if (parseInt(currentCat.style.top) <= 0) {
      randomVels(i, false, false, true, false);
      meow();
    }
  }
  //now collision detection between cats
  for (let i = 0; i < catArray.length; i++) {
    for (let j = i + 1; j < catArray.length; j++) {
      if (catArray[i].rightWall > catArray[j].leftWall && catArray[i].leftWall < catArray[j].rightWall && catArray[i].bottomWall < catArray[j].topWall && catArray[i].topWall > catArray[j].bottomWall) {
        let changeArray = [i, j];
        hitChangeCalc(changeArray);
        //createCat();
        meow();
      }
    }
  }
}

let hitCounter = 0;

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
  hitCounter ++;
  if (hitCounter > 20) catArray = catArray.splice(0,3);
}

function rebuildObject() {
  //recalc leftWall & topWall on each clock cycle
  for (let i = 0; i < catArray.length; i++) {
    catArray[i].leftWall = parseInt(catArray[i].catID.style.left);
    catArray[i].topWall = parseInt(catArray[i].catID.style.top);
    catArray[i].rightWall = catArray[i].leftWall + catArray[i].catID.offsetWidth;
    catArray[i].bottomWall = catArray[i].topWall - catArray[i].catID.offsetHeight;
  }
}

function createCat() {
  let newCat = document.createElement('img');

  let leftPos = Math.floor(Math.random() * (cont.offsetWidth - 150));
  let topPos = Math.floor(Math.random() * (cont.offsetHeight - 150));

  newCat.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px;`);
  newCat.setAttribute('class', 'normal');
  newCat.setAttribute('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif')

  let newCatObj = {
    catID: newCat,
    xVel: leftPos,
    yVel: topPos,
    leftWall: 0,
    topWall: 50,
    rightWall: 100,
    bottomWall: 150,
  };

  catArray.push(newCatObj);

  cont.appendChild(newCat);

  randomVels((catArray.length-1), false, false, false, false);
  meow();
}

function meow () {
  let snd = new Audio("resources/mjau4.wav"); // buffers automatically when created
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
  let maxWidth = cont.offsetWidth;
  let maxHeight = cont.offsetHeigh;

  for (let i = 0; i < catArray.length; i++) {
    randomVels(i, false, false, false, false)
    leftPos = Math.floor(Math.random() * (cont.offsetWidth - 150));
    topPos = Math.floor(Math.random() * (cont.offsetHeight - 150));
    catArray[i].catID.setAttribute('style', `top: ${topPos}px; left: ${leftPos}px`);
  }
  document.getElementById('speedoText').innerText = `The current speed is ${1000 / 50 * maxSpeed} px/s`;
}
initialBuild();

document.getElementById('faster').addEventListener('click',faster);
document.getElementById('slower').addEventListener('click',slower);
document.getElementById('addCat').addEventListener('click',createCat);
document.getElementById('pause').addEventListener('click',pause);

function faster(){
  maxSpeed += 5;
  document.getElementById('speedoText').innerText = `The current speed is ${1000 / 50 * maxSpeed} px/s`;
}

function slower(){
  maxSpeed -= 5;
  document.getElementById('speedoText').innerText = `The current speed is ${1000 / 50 * maxSpeed} px/s`;
}

function pause() {
  if (document.getElementById('pause').innerHTML === "pause") {
    clearInterval(catOneID);
    document.getElementById('pause').innerHTML = "resume";
    return;
  }
  if (document.getElementById('pause').innerHTML === "resume") {
    catOneID = setInterval(motion, 25);
    document.getElementById('pause').innerHTML = "pause";
    return;
  }
}

let catOneID = setInterval(motion, 25);
