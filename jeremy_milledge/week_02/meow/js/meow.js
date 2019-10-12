
const $pusheen = $('#add-cat');
// const $overNew = $('gameover-new');
const $score = $('#score');
const $gameoverPanel = $('#gameover');
const $notice = $('#notice');
const $canvas = $('#art');
const $saveMenu = $('#save-menu');
const $save = $('#save');
// const $saveNew = $('save-new');
$saveMenu.hide();


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
  [430, 228],
  [269, 386],
  [214, 262],
  [98, 76]
]

//add cat gifs
let cats = [];
for (let i = 0; i <= 7; i++) {
  cats.push({
    name: `cat${i}`,
    image: `img/cat${i}.gif`,
    dims: nativeDims[i],
    coords: coords[i],
  });
}

//window dimensions - this is static. TODO: dynamic resize
let y = window.innerHeight;
let x = window.innerWidth;
$canvas[0].width = x;
$canvas[0].height = y;
//count for unique cat instance ID
let catCount = 0;

//stat collection
let clickData = [];

const newCat = function() {
  //create image element
  let $c = $('<img>')//document.createElement('img');

  //which cat gif are we working with?
  const catNum = rand(8);

  //set gif
  $c.attr('src', cats[catNum].image);
  $c.attr('usemap', `#cat${catCount}`);


  //position and size
  const width = rand(x/3, 40); //minimum size 40px, maximum is 1/2 screen width
  const scale = width/nativeDims[catNum][0];
  const height = scale * nativeDims[catNum][1] // get proportional height
  $c.css({
    top: rand(y) + 'px',
    left: rand(x) + 'px',
    width: width + 'px'
  });

  //set and append map to the cat
  let polyMap = coords[catNum].map(x => x * scale); //scale map to size of gif
  let $m = $(`<map name="cat${catCount}"><area href="#" shape="poly" coords="${polyMap.join(',')}" /></map>`);
  $m.mousedown(gameOver); //add click listener to map
  $c.append($m)

  //image rotation TODO: last step as needs to allow flip and mapping
  //c.style.webkitTransform += `rotate(${rand(360)}deg)`;

  //score increment
  $score.html(parseInt($score.html()) + 1);

  //instantiate cat
  $('#cats').append($c);

  //start movement of this cat
  window.setInterval(bounceFlip, 100, $c, width, height, rand(80,10), rand(80,10));

  //bg adjustment
  $('body').css('background', `rgb(${rand(255)},${rand(255)},${rand(255)})`);

  //button adjustment (screen size less fixed dims of newcat image)
  let clickPos = [parseInt($pusheen.css('left')) + 25, parseInt($pusheen.css('top')) + 19];
  $pusheen.css({
    left: rand(x - 50) + 'px',
    top: rand(y - 38) + 'px'
  });

  //sound TODO: jQuery different/better for soiunds? stop on gameover?
  let meow = meows[rand(7)];
  meow.play();
  meow.currentTime=0;

  catCount++
  clickData.push([$.now(), clickPos, $('body').css('background-color')]);
}

function gameOver() {
  //calcStats();
  $('#cats').empty(); // remove all cats
  $pusheen.hide(); // hide meow button
  $notice.html($score.html()); //set score to h2 in gameover panel
  $score.hide(); // hide score in corner
  $gameoverPanel.css('display', 'flex'); //show gameover panel
  drawArt();
  //clickData = []; //reset log
}

function calcStats() {
  let stats = [];
  for (let i = 0; i < clickData.length; i++) {
    let current = ((clickData[i][0] - clickData[0][0])/1000).toFixed(2);
    let interval = i === 0 ? 0 : (current - stats[i-1].sinceStart).toFixed(2);
    stats.push({
      sinceStart: current,
      sinceLast: interval,
      position: clickData[i][1],
      color: clickData[i][2]
    });
  }
  return stats;
}

function startAgain(canvasClear=false, saveMenu=true) {

  if (canvasClear) {
    let cx = $canvas[0].getContext("2d");
    cx.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
  } else if (!saveMenu) {
    drawArt();
  }


  $pusheen.show(); //show meow button
  $gameoverPanel.hide(); //hide gameover panel
  $saveMenu.hide(); //hide save menu
  $score.show(); //show score
  $score.html('0'); //reset score to 0
  $catCount = 0; //reset instance counter
  clickData = [] //reset data log
}

function rand(max, min=0) {
  let n = Math.floor(Math.random() * max);
  return  n < min ? n + min : n;
}

function randCoeff() { //-1 -> 1 range
  return Math.random() * 2 - 1;
}
function getMovement($obj, dm, imageDim, dir) {
  let m0 = parseInt($obj.css(dir));
  let m1 = m0;
  let [cls, max] = dir === 'left' ? ['xback', x - imageDim] : ['yback', y - imageDim];

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

function drawArt() {
  let stats = calcStats();
  let cx = $canvas[0].getContext("2d");
  for (let i = 0; i < stats.length; i++) {
    if (i !== stats.length - 1) {
      let [startX, startY] = stats[i].position;
      let [endX, endY] = stats[i + 1].position;
      let midX = (endX + startX)/2;
      let diffX = endX - startX;
      let midY = (endY + startY)/2;
      let diffY = endY - startY;
      cx.beginPath();
      cx.lineWidth = `${300/stats[i].sinceStart*stats[i].sinceLast}`;
      cx.moveTo(...stats[i].position);
      cx.quadraticCurveTo(
        (midX - randCoeff() * diffX)*stats[i+1].sinceLast,
        (midY - randCoeff() * diffY)*stats[i+1].sinceLast,
        ...stats[i + 1].position
      );
      cx.strokeStyle = stats[i].color;
      cx.stroke();
    }
  }
}

function toggleMenu(showGameover=true) {
  if (showGameover) {
    $saveMenu.hide();
    $gameoverPanel.css('display', 'flex');
  } else {
    $saveMenu.show(500);
    saveLink();
    $gameoverPanel.hide(500);
  }
}

function toggleSaveOptions() {
  $('#save-options').toggle();
  console.log()
  $('#toggle-save').html() === '-' ? $('#toggle-save').html('+') : $('#toggle-save').html('-');
}

function saveLink () {
  $save.attr('download', 'cat-art.png');
  $save.attr('target', '_blank');
  $save.attr('href', $canvas[0].toDataURL("image/png").replace("image/png","application/octet-stream"));
  $save.click();
}

const bounceFlip = function($cat, imageX, imageY, dx, dy) {
  $cat.css({
    left: getMovement($cat, dx, imageX, 'left') + 'px',
    top: getMovement($cat, dy, imageY, 'top') + 'px'
  });
}


$('#toggle-save').click(() => toggleSaveOptions());
$('#show-art').click(() => toggleMenu(false));
$pusheen.mousedown(newCat);
$('#save-more').click(() => startAgain(false, true));
$('#gameover-more').click(() => startAgain());
$('.new').click(() => startAgain(true));
$('#save-main').click(() => toggleMenu());
