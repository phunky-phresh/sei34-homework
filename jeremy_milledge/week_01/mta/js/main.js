// MTA Week 01

// INPUTS AND STORAGE //////////////////////////////////////////////////////////
const nycSubway = { //inputs for subset of MTA lines
  N: ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']
};

const tripDB = []; // collection of all Trip objects

// INPUT VALIDATION ////////////////////////////////////////////////////////////
const addTrip = function(startL, startS, endL, endS) {
  /* validate input before creating object*/
  if (
    startS === 'Union Square' && endS === 'Union Square' ||
    (startS === endS && startL === endL)
  ) {
    return console.log(`Invalid input: You're already at ${startS}`)
  } else {
    return new Trip([startL, startS, endL, endS]);
  }
}

// Trip OBJECT CONSTRUCTION FUNCTIONS //////////////////////////////////////////
const Trip = function(inputArr) {
  /*creates Trip object to log from with planTrip */
  this.startLine = inputArr[0];
  this.start = inputArr[1];
  this.endLine = inputArr[2];
  this.end = inputArr[3];
  this.intStop = (this.start === 'Union Square' || this.end === 'Union Square');
  this.legs = allStops(inputArr[0], inputArr[1], inputArr[2], inputArr[3], this.intStop);
  this.transfers = findTransfers(this.legs);
  this.numLegs = this.legs.length;
  tripDB.push(this); //add to trip database
}

const allStops = function(startL, startS, endL, endS, intStop) {
  /* return all stations involved in a trip */
  let stops = []
  let firstLeg = [];
  if (startL !== endL && intStop) {
    //U.S start on diff line line isn't treated as two trips.
    startS === 'Union Square' ? startL = endL : endL = startL;
  }
  if (startL == endL) { //only one train to take
    firstLeg = singleLineStops(startL, startS, endS);
  } else {
    firstLeg = singleLineStops(startL, startS); //only take as far as U.S
    //new line is our 'finish line', new start is U.S, stop is finish dest.
    stops.push(singleLineStops(endL, 'Union Square', endS));
  }
  stops.unshift(firstLeg);
  return stops; //array of shape [[first leg stops], [second leg stops]...]
};

const singleLineStops = function(startL, startS, endS=false) {
  /* find and return stations involved for trip from a single line */
  const ln = nycSubway[startL]; //current line
  const sS = ln.indexOf(startS); // index from array item on the line
  let fS = !endS ? ln.indexOf('Union Square') : ln.indexOf(endS); //default U.S
  return pushStops(sS, fS, ln)
};

const pushStops = function(start, end, line) {
  /* return array of stops, determine direction of travel */
  let stopArr = [];
  let backwards = start > end;
  [start, end] = backwards ? [end, start] : [start, end];
  stopArr = [...line].slice(start, end + 1);
  return backwards ? stopArr.reverse() : stopArr;
};

const findTransfers = function(arr) {
  /* loop  through legs and retrieve last stop for all but last leg */
  tfers = [];
  for (let i = 0; i < arr.length - 1; i++) {
    tfers.push(arr[i][arr[i].length - 1]);
  }
  return tfers;
}

//LOGGING FUNCTIONS (FOR DISPLAY IN CONSOLE ONLY) //////////////////////////////
const asciiTrip = function(trip) {
  /* returns final string for logging to console */
  /* input must be a Trip instance */
  return logHeader(trip) + logBody(trip);
};

const logHeader = function(t) {
  return (
    `==============================================\n\
Line ${t.startLine}, ${t.start} --> Line ${t.endLine}, ${t.end}\n\
==============================================\n\n`
);};

const logBody = function(trip) {
  bodyMsg = '';
  for (let i = 0; i < trip.numLegs; i ++) { //loop to allow for later legs to be added
    let leg = trip.legs[i]; //copies so that we don't mess with Trip object
    bodyMsg += logOnboard(leg[0], i);
    bodyMsg += logLegs(leg)
    bodyMsg += logTransferOrFinal(trip.numLegs, leg[leg.length-1], trip.endLine, i);
  }
  return bodyMsg;
};

const logOnboard = function(sS, idx) {
  return (
    !idx ? `+===> Get on at ${sS}.\n|\n|\n`: ""
);};

const logLegs = function(legArr) {
  let leg = '';
  for (let i = 1; i < legArr.length - 1; i++) {
    leg += `|\n+ ${legArr[i]}\n|\n`;
  }
  return leg;
};

const logTransferOrFinal = function(numLegs, last, lastLine, idx) {
  changeMsg = '|\n|\n+===> ';
  if (numLegs > 1 && idx !== numLegs - 1) { //more than 1 leg and not last leg
    changeMsg += `Change at ${last} to Line ${lastLine}.\n|\n|\n`;
  } else {
    changeMsg += `Arrival at ${last}.`
  }
  return  changeMsg;
};

// TEST INPUTS /////////////////////////////////////////////////////////////////
// const testTrips = [
//   ['N', 'Times Square', 'N', '8th'],
//   ['L', '1st', '6', 'Grand Central'],
//   ['N', 'Times Square', '6', 'Grand Central'],
//   ['N', 'Union Square', 'L', '1st'],
//   ['6', 'Grand Central', 'L', 'Union Square']
// ];
//
// for (let k = 0; k < testTrips.length; k++) {
//   let t = testTrips[k];
//   new Trip(t[0], t[1], t[2], t[3]); //constructor pushes to DB automatically
//   asciiTrip(tripDB[k]); //log from DB
// }
//
// let eg = tripDB[2];


// WEBPAGE INTERACTIVITY ///////////////////////////////////////////////////////
let nycLines = Object.keys(nycSubway);
let sL = document.getElementById('startL');
let sS = document.getElementById('startS');
let eL = document.getElementById('endL');
let eS = document.getElementById('endS');
let vis = document.getElementById('visual');
let btn = document.getElementById('generate');
let lines = [sL,eL];

for (let i=0; i < nycLines.length; i++) {
  let val = Object.keys(nycSubway)[i]
  for (let j=0; j < 2; j++) {
    let line = document.createElement('option');
    line.textContent = val;
    line.value = val;
    lines[j].appendChild(line);
  }
}



const lineSelected = function(e) {
  let selected = e.target.value;
  if (selected !== 'default') {
    let linkedEl = e.target.id === 'endL' ? eS : sS;
    while (linkedEl.childNodes.length > 1) { //if any children, remove them on change
      linkedEl.removeChild(linkedEl.lastChild)
    }
    for (let i = 0; i < nycLines.length; i++) {
      if(selected === nycLines[i]) {
        let allowedStations = nycSubway[selected];
        let optGroup = document.createDocumentFragment(); //holds all option els
        for (let j = 0; j < allowedStations.length; j++) {
          let stationEl = document.createElement('option');
          stationEl.textContent = allowedStations[j];
          stationEl.value = allowedStations[j];
          optGroup.appendChild(stationEl);
        }
        linkedEl.appendChild(optGroup);
        break;
      }
    }
  }
};

sL.addEventListener('change', lineSelected);
eL.addEventListener('change', lineSelected);

const addFromClick = function() {
  let stationSelected = (eS.value !== 'default' && sS.value !== 'default');
  let t = addTrip(sL.value, sS.value, eL.value, eS.value);
  let success = typeof t === "undefined" ? false : true;
  vis.innerText = success ? asciiTrip(t) : 'Invalid Trip';
  return success ? console.log(asciiTrip(t)) : null;
};


let btnListener = btn.addEventListener('click', addFromClick);
