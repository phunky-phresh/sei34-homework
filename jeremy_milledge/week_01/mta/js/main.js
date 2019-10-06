// MTA Week 01

// INPUTS AND STORAGE //////////////////////////////////////////////////////////
const nycSubway = { //inputs for subset of MTA lines
  N: ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']
};

const tripDB = []; // collection of all trip objects

// INPUT VALIDATION ////////////////////////////////////////////////////////////
const addTrip = function(startL, startS, endL, endS) {
  /* validate input before creating object*/
  if (
    startS === 'Union Square' && endS === 'Union Square' ||
    (startS === endS && startL === endL)
  ) {
    return console.log(`Invalid input: You're already at ${startS}`)
  } else {
    return createTrip([startL, startS, endL, endS]);
  }
}

// trip OBJECT CONSTRUCTION FUNCTIONS //////////////////////////////////////////
const createTrip = function(valid) {
  /*creates trip object */
  let trip = {};
  trip.intStop = valid[1] === 'Union Square' || valid[3] === 'Union Square';
  trip.legs = allStops(valid[0], valid[1], valid[2], valid[3], trip.intStop);
  trip.startLine = valid[0];
  trip.start = valid[1];
  trip.endLine = valid[2];
  trip.end = valid[3];
  trip.transfers = findTransfers(trip);
  trip.numStops = countstops(trip);
  trip.legCount = trip.legs.length;
  trip.getAllStops = () => trip.legs.map(x => Object.values(x)[0]); //return [[],[]] for easy manipulation

  tripDB.push(trip); //add to trip database
  return trip;
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
  return stops; //shape [{Line1: [first leg stops]}, {Line2: [second leg stops]}]
};

const singleLineStops = function(startL, startS, endS=false) {
  /* find and return stations involved for trip from a single line */
  const ln = nycSubway[startL]; //current line
  const sS = ln.indexOf(startS); // index from array item on the line
  let fS = !endS ? ln.indexOf('Union Square') : ln.indexOf(endS); //default U.S
  return {[startL]: pushStops(sS, fS, ln)};
};

const pushStops = function(start, end, line) {
  /* return array of stops, determine direction of travel */
  let stopArr = [];
  let backwards = start > end;
  [start, end] = backwards ? [end, start] : [start, end];
  stopArr = [...line].slice(start, end + 1);
  return backwards ? stopArr.reverse() : stopArr;
};

const findTransfers = function(t) {
  /* loop  through legs and retrieve last stop for all but last leg */
  tfers = [];
  for (let i = 0; i < t.legCount - 1; i++) {
    tfers.push(t.getAllStops()[i][t.getAllStops()[i].length - 1]);
  }
  return tfers;
};

const countstops = function(t) {
  return t.getAllStops().reduce(((acc, x) => acc + x.length), 0) - t.transfers.length;
};
//LOGGING FUNCTIONS (FOR DISPLAY IN CONSOLE ONLY) //////////////////////////////
const asciiTrip = function(t) {
  /* returns final string for logging to console */
  /* input must be a trip object */
  return asciiHeader(t) + asciiBody(t);
};

const asciiHeader = function(t) {
  return (
    `==============================================\n\
Line ${t.startLine}, ${t.start} --> Line ${t.endLine}, ${t.end}\n\
==============================================\n\n`
);};

const asciiBody = function(t) {
  bodyMsg = '';
  for (let i = 0; i < t.legCount; i ++) { //loop to allow for later legs to be added
    let leg = t.getAllStops()[i];
    bodyMsg += asciiOnboard(leg[0], i);
    bodyMsg += asciiStopsOnLeg(leg)
    bodyMsg += asciiTransferFinal(t, leg, i);
  }
  return bodyMsg;
};

const asciiOnboard = function(start, idx) {
  return (
    !idx ? `+===> Get on at ${start}.\n|\n|\n`: ""
);};

const asciiStopsOnLeg = function(leg) {
  let stops = '';
  for (let i = 1; i < leg.length - 1; i++) {
    stops += `|\n+ ${leg[i]}\n|\n`;
  }
  return stops;
};

const asciiTransferFinal = function(t, leg, idx) {
  changeMsg = '|\n|\n+===> ';
  if (t.legCount > 1 && idx !== t.legCount - 1) { //more than 1 leg and not end leg
    changeMsg += `Change at ${leg[leg.length - 1]} to Line ${t.endLine}.\n|\n|\n`;
  } else {
    changeMsg += `Arrival at ${leg[leg.length - 1]}.\n\n${t.numStops} stops in total.`
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

const runTests = function() {
  for (let i = 0; i < testTrips.length; i++) {
    let t = testTrips[i];
    addTrip(t[0], t[1], t[2], t[3]);
  }
};

const logDB = function(db) {
  for (let i = 0; i < db.length; i++) {
    console.log(asciiTrip(db[i]));
  }
}

// WEBPAGE INTERACTIVITY ///////////////////////////////////////////////////////
let nycLines = Object.keys(nycSubway);
let sL = document.getElementById('startL');
let sS = document.getElementById('startS');
let eL = document.getElementById('endL');
let eS = document.getElementById('endS');
let vis = document.getElementById('visual');
let btn = document.getElementById('generate');
let lineElements = [sL,eL];

for (let i = 0; i < nycLines.length; i++) {
  let val = nycLines[i];
  for (let j = 0; j < lineElements.length; j++) {
    let line = document.createElement('option');
    line.textContent = val;
    line.value = val;
    lineElements[j].appendChild(line);
  }
}

const lineChanged = function(e) {
  let selected = e.target.value;
  if (selected !== 'default') {
    let linkedEl = e.target.id === 'endL' ? eS : sS; //pick associated station dropdown
    while (linkedEl.childNodes.length > 1) { //if any children, remove them on change
      linkedEl.removeChild(linkedEl.lastChild)
    }
    for (let i = 0; i < nycLines.length; i++) {
      if(selected === nycLines[i]) {
        let allowedStations = nycSubway[selected];
        let optGroup = document.createDocumentFragment(); //holds all elements
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

const clickToAdd = function() {
  let t = addTrip(sL.value, sS.value, eL.value, eS.value);
  let success = typeof t === "undefined" ? false : true;
  vis.innerText = success ? asciiTrip(t) : 'Invalid Trip';
  return success ? console.log(asciiTrip(t)) : null;
};

sL.addEventListener('change', lineChanged);
eL.addEventListener('change', lineChanged);
btn.addEventListener('click', clickToAdd);
