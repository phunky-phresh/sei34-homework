
const btn = document.getElementById('add-cat');
let meows = [];
for (let i = 1; i <= 7; i++) {
  meows.push(new Audio('sfx/meow'+i+'.wav'))
}
let count = 0;
let y = window.innerHeight - 296;
let x = window.innerWidth - 296;
let cattery = []

const newCat = function() {
  let c = document.createElement('img');
  c.setAttribute('src', 'http://www.anniemation.com/clip_art/images/cat-walk.gif');
  c.style.top = rand(y) + 'px';
  c.style.left = rand(x) + 'px';
  c.style.width = rand(400,20) + 'px';
  c.style.webkitTransform = `rotate(${rand(360)}deg)`;
  c.id = count;
  count++
  document.body.appendChild(c);

  //set interval
  cattery.push(window.setInterval(bounceFlip,100, c, rand(80,10), rand(80,10)));

  //bg adjustment
  let randRGB = `rgb(${rand(255)},${rand(255)},${rand(255)})`
  document.body.style.backgroundColor = randRGB;

  //button adjustment
  btn.style.left = rand(x) + 'px'
  btn.style.top = rand(y) + 'px'

  //sound
  let meow = meows[rand(8,1)];
  meow.play();
  meow.currentTime=0;
}

function rand(max, min=0) {
  let n = Math.floor(Math.random() * max)
  return  n < min ? n + min : n;
}

function getMovement(obj, dm, max, dir, cls) {
  let m0 = parseInt(obj.style[dir]);
  let m1 = m0;

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
  cat.style.left = getMovement(cat, dx, x, 'left', 'xback') + 'px';
  cat.style.top = getMovement(cat, dy, y, 'top', 'yback') + 'px';
}


btn.addEventListener('click', newCat)
