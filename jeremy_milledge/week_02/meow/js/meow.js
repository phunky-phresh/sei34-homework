// setup ///////////////////////////////////////////////////////////////////////
const $target = $('#add-cat');
const $score = $('#score');
const $gameoverPanel = $('#gameover');
const $canvas = $('#canvas');
const $miniMenu = $('#mini');
const $save = $('#save');

// image dims and approximate coordinate maps of opaque area
const imgData = [
  [[50,50],[15,16,37,16,39,37,26,42,11,35]],
  [[480, 480],[84,411,132,339,98,239,95,134,225,114,231,233,296,239,322,144,374,
    103,449,143,365,176,309,315,329,385,309,412,201,416]],
  [[500, 298],[114,156,163,7,329,1,410,136,364,296,128,297]],
  [[83, 76],[39,70,4,44,27,3,80,9,70,70]],
  [[430, 228],[92,159,371,163,448,221,447,351,33,352]],
  [[269, 386],[26,340,44,283,59,138,44,22,168,11,192,124,266,32,212,250,225,385,
    189,384,111,352]],
  [[214, 262],[62,254,36,76,78,21,141,28,164,86,154,164,157,255]],
  [[98, 76],[8,46,59,5,93,18,72,58,65,75,14,62]]
];

//add cat gifs
let cats = [];
for (let i = 0; i <= 7; i++) {
  cats.push({
    name: `cat${i}`,
    image: `img/cat${i}.gif`,
    dims: imgData[i][0],
    perimeter: imgData[i][1],
  });
}

//add meow sounds to array for random selection
let meows = [];
for (let i = 1; i <= 7; i++) {
  meows.push(new Audio(`sfx/meow${i}.wav`));
}

//window dimensions - this is static. TODO: dynamic resize
let y = window.innerHeight;
let x = window.innerWidth;
$canvas[0].width = x;
$canvas[0].height = y;

//tracking and stats
let catCount = 0;
let clickData = [];

// cat creation ////////////////////////////////////////////////////////////////
const newCat = function() {
  //create image element
  let $c = $('<img>')//document.createElement('img');

  //which cat are we working with?
  const kitty = cats[rand(8)];
  $c.attr('src', kitty.image);
  $c.attr('usemap', `#cat${catCount}`);

  //position and size
  const width = rand(x/3, 40); //minimum size 40px, maximum is 1/3 screen width
  const scale = width/kitty.dims[0];
  const height = scale * kitty.dims[1] // get proportional height
  $c.css({
    top: rand(y) + 'px',
    left: rand(x) + 'px',
    width: width + 'px'
  });

  //set and append map to the cat
  let polyMap = kitty.perimeter.map(x => x * scale); //scale map to size of gif
  let $m = $(`<map><area href="#" shape="poly" coords="${polyMap.join(',')}" /></map>`);
  $m.attr('name', `cat${catCount}`);
  $m.mousedown(gameOver); //add mousedown listener to map
  $c.append($m)

  //score increment
  $score.html(parseInt($score.html()) + 1);
  catCount++

  //instantiate cat
  $('#cats').append($c);

  //start movement of this cat
  window.setInterval(bounceFlip, 100, $c, width, height, rand(80,10), rand(80,10));

  //bg adjustment
  $('body').css('background', `rgb(${rand(255)},${rand(255)},${rand(255)})`);

  //button adjustment (screen size less fixed dims of newcat image)
  let clickPos = [parseInt($target.css('left')) + 25, parseInt($target.css('top')) + 19];
  $target.css({left: rand(x - 50) + 'px', top: rand(y - 38) + 'px'});

  //sound TODO: jQuery different/better for soiunds? stop on gameover?
  let meow = meows[rand(7)];
  meow.play();
  meow.currentTime=0;

  //record click stats in array
  clickData.push([$.now(), clickPos, $('body').css('background-color')]);
}



//gameplay /////////////////////////////////////////////////////////////////////
const bounceFlip = function($cat, imageX, imageY, dx, dy) {
  $cat.css({
    left: getMovement($cat, dx, imageX, 'left') + 'px',
    top: getMovement($cat, dy, imageY, 'top') + 'px'
  });
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

function gameOver() {
  $('#cats').empty(); // remove all cats
  $target.hide(); // hide meow button
  $('#notice').html($score.html()); //set score to h2 in gameover panel
  $score.hide(); // hide score in corner
  $gameoverPanel.css('display', 'flex'); //show gameover panel
  drawArt();
  saveLink();
}

// painting ////////////////////////////////////////////////////////////////////
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
      ); // TODO: turn into function that randomly selects quadratic, bezier, line
      cx.strokeStyle = stats[i].color;
      cx.stroke();
    }
  }
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

// ui //////////////////////////////////////////////////////////////////////////
function startAgain(canvasClear=false) {

  if (canvasClear) {
    let cx = $canvas[0].getContext("2d");
    cx.clearRect(0, 0, $canvas[0].width, $canvas[0].height);
  }
  $target.show(); //show meow button
  $gameoverPanel.hide(); //hide gameover panel
  $miniMenu.hide(); //hide save menu
  $score.show(); //show score
  $score.html('0'); //reset score to 0
  $catCount = 0; //reset instance counter
  clickData = [] //reset data log
}

function toggleMenu(showGameover=true) {
  if (showGameover) {
    $miniMenu.hide(300);
    $gameoverPanel.css('display', 'flex').fadeIn(500);
  } else {
    $miniMenu.show(300);
    $gameoverPanel.hide(300);
  }
}

function saveLink () {
  $save.attr('download', 'cat-art.png');
  $save.attr('target', '_blank');
  $save.attr(
    'href', $canvas[0].toDataURL("image/png")
    .replace("image/png","application/octet-stream")
  );
  $save.click();
}

// helpers /////////////////////////////////////////////////////////////////////
function rand(max, min=0) {
  let n = Math.floor(Math.random() * max);
  return  n < min ? n + min : n;
}

function randCoeff() { //-1 -> 1 range
  return Math.random() * 2 - 1;
}


// listeners ///////////////////////////////////////////////////////////////////
$('#toggle-menu').click(() => toggleMenu(true));
$('#show-art').click(() => toggleMenu(false));
$target.mousedown(newCat);
$('#gameover-more').click(() => startAgain());
$('.new').click(() => startAgain(true));
