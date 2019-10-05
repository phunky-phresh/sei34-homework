// MTA Week 01


// INPUTS AND STORAGE //////////////////////////////////////////////////////////

const nycSubway = { //inputs for subset of MTA lines
  N: ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']
};

const tripDB = []; // collection of all Trip objects

// Trip OBJECT CONSTRUCTION FUNCTIONS //////////////////////////////////////////

const Trip = function(startL, startS, endL, endS) {
  /*creates Trip object to log from with planTrip */

  // TODO:  parse start and end lines/station to ensure they make sense
  //        don't just blindly add them to the object if they dont
  this.legs = findAllStops(startL, startS, endL, endS);
  this.start = startS;
  this.startLine = startL;
  this.end = endS;
  this.endLine = endL;
  this.transfers = findTransfers(this.legs);
  this.numLegs = this.legs.length;

  tripDB.push(this); //add to trip database
}

const pushStops = function(start, end, line) {
  /* push stations on specified line to returned array */

  let swapped = false;
  if (start > end) { //swap start and end if start greater
    [start, end] = [end, start];
    swapped = true;
  }

  let arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(line[i]);
  }
  return swapped ? arr.reverse() : arr;
};

const singleLineStops = function(startL, startS, endS=false) {
  /* find and return stations involved for trip from a single line */

  const ln = nycSubway[startL]; //current line
  const sS = ln.indexOf(startS); // index from array item on the line
  let fS = !endS ? ln.indexOf('Union Square') : ln.indexOf(endS); //default to U.S]
  return pushStops(sS, fS, ln)
};

const findAllStops = function(startL, startS, endL, endS) {
  /* return all stations involved in a trip */

  let stops = []
  let firstLeg = [];
  if (startL !== endL && (startS === 'Union Square' || endS === 'Union Square')) {
    //if we specify a different line to begin (or end) at U.S, we set the
    //line to be consistent so it isn't treated as two trips.
    startS === 'Union Square' ? startL = endL : endL = startL;
  }
  if (startL == endL) { //only one train to take
    firstLeg = singleLineStops(startL, startS, endS);
  } else { //need to take two trains
    firstLeg = singleLineStops(startL, startS); //only take as far as U.S
    //new line is our 'finish line', new start is U.S, stop is finish dest.
    stops.push(singleLineStops(endL, 'Union Square', endS));
  }
  stops.unshift(firstLeg);
  return stops; //array of shape [[first leg stops], [second leg stops]...]
};

const findTransfers = function(arr) {
  /* loop  through legs and retrieve last stop for all but last leg */

  tfers =[]
  for (let i = 0; i < arr.length - 1; i++) {
    tfers.push(arr[i][arr[i].length-1]);
  }
  return tfers;
}

//LOGGING FUNCTIONS (FOR DISPLAY IN CONSOLE ONLY) //////////////////////////////

const logTrip = function(Trip) {
  /* returns string for logging to console */
  /* input must be a Trip instance */

  return console.log(logHeader(Trip) + logBody(Trip));
};

const logHeader = function(t) {
  return (
    `\n==============================================\n\
Line ${t.startLine}, ${t.start} --> Line ${t.endLine}, ${t.end}\n\
==============================================\n\n`
  );
};

const logBody = function(trip) {
  bodyMsg = '';
  for (let i = 0; i < trip.numLegs; i ++) { //loop to allow for later legs to be added
    let leg = trip.legs[i]; //copies so that we don't mess with Trip object
    bodyMsg += logGetOn(leg[0], i);
    bodyMsg += logLegs(leg)
    bodyMsg += logTransferOrFinal(trip.numLegs, leg[leg.length-1], trip.endLine, i);
  }
  return bodyMsg
};

const logGetOn = function(sS, idx) {
  return (
    !idx ? `~ Get on at ${sS}.\n\\\n \\\n`: ""
  );
};

const logLegs = function(legArr) {
  let leg = '';
  for (let i = 1; i < legArr.length - 1; i++) {
    leg += ` |\n + ${legArr[i]}\n |\n`;
  }
  return leg;
};

const logTransferOrFinal = function(numLegs, last, lastLine, idx) {
  changeMsg = ' /\n/\n~ ';
  if (numLegs > 1 && idx !== numLegs - 1) { //more than 1 leg and not last leg
    changeMsg += `Change at ${last} to Line ${lastLine}.\n\\\n \\\n`;
  } else {
    changeMsg += `Arrival at ${last}.\n `
  }
  return  changeMsg;
};

// TEST INPUTS /////////////////////////////////////////////////////////////////
const testTrips = [
  ['N', 'Times Square', 'N', '8th'],
  ['L', '1st', '6', 'Grand Central'],
  ['N', 'Times Square', '6', 'Grand Central'],
  ['N', 'Union Square', 'L', '1st'],
  ['6', 'Grand Central', 'L', 'Union Square']
];

for (let k = 0; k < testTrips.length; k++) {
  let t = testTrips[k];
  new Trip(t[0], t[1], t[2], t[3]); //constructor pushes to DB automatically
  logTrip(tripDB[k]); //log from DB
}

let eg = tripDB[2];


// WEBPAGE INTERACTIVITY ///////////////////////////////////////////////////////
//let lines = [];
//let stations = [];


const buildFromClick = function() {

  let sL = document.getElementById('startL').value;
  let sS = document.getElementById('startS').value;
  let eL = document.getElementById('endL').value;
  let eS = document.getElementById('endS').value;
  let t = new Trip(sL, sS, eL, eS)
  return logTrip(t);
};

let btn = document.getElementById('generate');
let btnListener = btn.addEventListener('click', buildFromClick);
