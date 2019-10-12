
const $btn = $('#add-cat');
const $again = $('#again');
const $score = $('#score');
const $gameoverPanel = $('#gameover');
const $notice = $('#notice');
//add meow sounds
let meows = [];
for (let i = 1; i <= 7; i++) {
  meows.push(new Audio(`sfx/meow${i}.wav`));
}

// map coordinates for clickable area of gifs
// list in order of images in gif directory
const coords = [
  [15,16,37,16,39,37,26,42,11,35],
  [84,411,132,339,98,239,95,134,225,114,231,233,296,239,322,144,374,103,449,143,365,176,309,315,329,385,309,412,201,416],
  [114,156,163,7,329,1,410,136,364,296,128,297],
  [39,70,4,44,27,3,80,9,70,70],
  [92,159,371,163,448,221,447,351,33,352],
  [26,340,44,283,59,138,44,22,168,11,192,124,266,32,212,250,225,385,189,384,111,352],
  [62,254,36,76,78,21,141,28,164,86,154,164,157,255],
  [8,46,59,5,93,18,72,58,65,75,14,62]
];

//native dimensions of gifs for coordinate scaling on instantiation.
// list in order of images in gif directory

const nativeDims = [
  [50,50],
  [480, 480],
  [500, 298],
  [83, 76],
  [450, 450],
  [269, 386],
  [214, 262],
  [98, 76]
]

//add cat gifs
let cats = [];
for (let i = 0; i <= 7; i++) {
  cats.push({
    name: `cat${i}`,
    image: `gif/cat${i}.gif`,
    dims: nativeDims[i],
    coords: coords[i],
  });
}

let y = window.innerHeight; // TODO: -296 removed: make dynamic based on specific gif dims
let x = window.innerWidth;


const newCat = function() {
  //create image element
  let $c = $('<img>')//document.createElement('img');

  //set gif
  $c.attr('src', cats[rand(8)].image);

  //position and size
  let width = rand(x/1.5, 40);
  $c.css({
    top: rand(y) + 'px',
    left: rand(x) + 'px',
    width: width + 'px'
  });

  //image rotation TODO: last step as needs to allow flip and mapping
  //c.style.webkitTransform += `rotate(${rand(360)}deg)`;

  //score increment
  $score.html(parseInt($score.html()) + 1);

  //add click listener
  $c.click(gameOver);

  //instantiate cat
  $('#cats').append($c);

  //set interval
  window.setInterval(bounceFlip,100, $c, rand(80,10), rand(80,10));

  //bg adjustment
  $('body').css('background', `rgb(${rand(255)},${rand(255)},${rand(255)})`);

  //button adjustment
  $btn.css({
    left: rand(x) + 'px',
    top: rand(y) + 'px'
  });

  //sound TODO: jQuery different/better for soiunds? stop on gameoveR?
  let meow = meows[rand(7)];
  meow.play();
  meow.currentTime=0;


}

function gameOver() {
  $('#cats').empty(); // remove all cats
  $btn.hide(); // hide meow button
  $notice.html($score.html()); //set score to h2 in gameover panel
  $score.hide(); // hide score in corner
  $gameoverPanel.css('display', 'flex'); //show gameover panel
}

function startAgain() {
  $btn.show(); //show meow button
  $score.show(); //show score
  $gameoverPanel.hide(); //hide gameover panel
  $score.html('0'); //reset score to 0
}

function rand(max, min=0) {
  let n = Math.floor(Math.random() * max);
  return  n < min ? n + min : n;
}

function getMovement($obj, dm, max, dir) {
  let m0 = parseInt($obj.css(dir));
  let m1 = m0;
  let cls = dir === 'left' ? 'xback' : 'yback';

  if (m0 > max) {
    $obj.addClass(cls);
    m1 -= dm;
  } else if ($obj.hasClass(cls)) {
    if (m0 > 0) {
      m1 -= dm;
    } else {
      $obj.removeClass(cls);
    }
  } else {
    m1 += dm;
  }
  return  m1;
}

const bounceFlip = function($cat, dx, dy) {
  $cat.css({
    left: getMovement($cat, dx, x, 'left') + 'px',
    top: getMovement($cat, dy, y, 'top') + 'px'
  });
}

$again.click(startAgain);
$btn.click(newCat);
