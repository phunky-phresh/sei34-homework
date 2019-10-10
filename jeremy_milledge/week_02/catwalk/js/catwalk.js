
const btn = document.getElementById('add-cat');
const again = document.getElementById('again');
const score = document.getElementById('score');
const gameoverPanel = document.getElementById('gameover');
const notice = document.getElementById('notice');
//add meow sounds
let meows = [];
for (let i = 1; i <= 7; i++) {
  meows.push(new Audio(`sfx/meow${i}.wav`))
}
//add cat gifs
let cats = [];
for (let i = 1; i <= 8; i++) {
  cats.push(`gif/cat${i}.gif`);
}

let y = window.innerHeight - 296;
let x = window.innerWidth - 296;


const newCat = function() {
  let c = document.createElement('img');

  c.setAttribute('src', cats[rand(8)]);
  c.style.top = rand(y) + 'px';
  c.style.left = rand(x) + 'px';
  c.style.width = rand(x/1.5, 40) + 'px';
  c.style.webkitTransform += `rotate(${rand(360)}deg)`;
  score.innerText = parseInt(score.innerText) + 1;
  c.addEventListener('click', gameOver);
  document.getElementById('cats').appendChild(c);

  //set interval
  window.setInterval(bounceFlip,100, c, rand(80,10), rand(80,10));

  //bg adjustment
  let randRGB = `rgb(${rand(255)},${rand(255)},${rand(255)})`
  document.body.style.backgroundColor = randRGB;

  //button adjustment
  btn.style.left = rand(x) + 'px'
  btn.style.top = rand(y) + 'px'

  //sound
  let meow = meows[rand(7)];
  meow.play();
  meow.currentTime=0;


}

function gameOver() {
  let allCats = document.getElementById('cats');
  btn.style.display = 'none';
  score.style.display = 'none';
  while (allCats.firstChild) {
    allCats.removeChild(allCats.firstChild);
  }
  notice.innerText = score.innerText;
  gameoverPanel.style.display = 'flex';
}

function startAgain() {
  btn.style.display =  'block';
  score.style.display = 'block';
  gameoverPanel.style.display = 'none'
  score.innerText = '0';
}

function rand(max, min=0) {
  let n = Math.floor(Math.random() * max)
  return  n < min ? n + min : n;
}

function getMovement(obj, dm, max, dir) {
  let m0 = parseInt(obj.style[dir]);
  let m1 = m0;
  let cls = dir === 'left' ? 'xback' : 'yback';

  if (m0 > max) {
    obj.classList.add(cls);
    m1 -= dm;
  } else if (obj.classList.contains(cls)) {
    if (m0 > 0) {
      m1 -= dm;
    } else {
      obj.classList.remove(cls);
    }
  } else {
    m1 += dm;
  }
  return  m1;
}

const bounceFlip = function(cat, dx, dy) {
  cat.style.left = getMovement(cat, dx, x, 'left') + 'px';
  cat.style.top = getMovement(cat, dy, y, 'top') + 'px';
}

again.addEventListener('click',startAgain);
btn.addEventListener('click', newCat)
