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
    let t = createTrip(startL, startS, endL, endS);
    tripDB.push(t)
    return t;
  }
}

// trip OBJECT CONSTRUCTION FUNCTIONS //////////////////////////////////////////
const createTrip = function(startLine, start, endLine, end) {
  /*creates trip object */
  let intStop = start === 'Union Square' || end === 'Union Square'
  return {
    intStop, start, end,
    legs: calcJourney(startLine, start, endLine, end, intStop),
    get startLine(){return Object.keys(this.legs[0])[0]}, // method allows us to dynamically determine based on result of calcJourney
    get endLine() {return Object.keys(this.legs.slice(-1)[0])[0]}, // method allows us to dynamically determine based on result of calcJourney
    get xfers() {return this.stops.slice(0,-1).map(x => x.slice(-1)[0])},
    get stopCount() {return this.stops.reduce(((c, x) => c + x.length), 0) - this.xfers.length},
    get lineCount() {return this.legs.length},
    get stops() {return this.legs.map(x => Object.values(x)[0])},
    get lines() {return this.legs.map(x => Object.keys(x)[0])}
  };
};

const calcJourney = function(startL, startS, endL, endS, intStop) {
  /* return all stations involved in a trip */
  let stops = []
  let firstLeg = [];
  if (startL !== endL && intStop) { //only one trip even if U.S is selected on diff line
    startS === 'Union Square' ? startL = endL : endL = startL;
  }
  if (startL == endL) { //only one train to take
    firstLeg = singleLeg(startL, startS, endS);
  } else {
    firstLeg = singleLeg(startL, startS);
    stops.push(singleLeg(endL, 'Union Square', endS));
  }
  stops.unshift(firstLeg);
  return stops; //shape [{Line1: [first leg stops]}, {Line2: [second leg stops]}]
};

const singleLeg = function(line, start, end=false) {
  /* find and return stations involved for trip from a single line */
  const stations = nycSubway[line];
  const boarding = stations.indexOf(start);
  let alighting = !end ? stations.indexOf('Union Square') : stations.indexOf(end);
  return {[line]: legStops(stations, boarding, alighting)};
};

const legStops = function(stations, start, end) {
  /* return array of stops, determine direction of travel */
  let stops = [];
  let backwards = start > end;
  [start, end] = backwards ? [end, start] : [start, end];
  stops = [...stations].slice(start, end + 1);
  return backwards ? stops.reverse() : stops;
};

//LOGGING FUNCTIONS (FOR DISPLAY IN CONSOLE ONLY) //////////////////////////////
const asciiJourney = function(t) {
  /* returns final string for logging to console. trip object arg */
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
  for (let i = 0; i < t.lineCount; i++) { //loop to allow for later legs to be added
    let leg = t.stops[i];
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
  if (t.lineCount > 1 && idx !== t.lineCount - 1) { //more than 1 leg and not end leg
    changeMsg += `Change at ${leg[leg.length - 1]} to Line ${t.endLine}.\n|\n|\n`;
  } else {
    changeMsg += `Arrival at ${leg[leg.length - 1]}.\n\n${t.stopCount} stops in total.`
  }
  return  changeMsg;
};

// TEST INPUTS /////////////////////////////////////////////////////////////////
const examples = [
  ['N', 'Times Square', 'N', '8th'],
  ['L', '1st', '6', 'Grand Central'],
  ['N', 'Times Square', '6', 'Grand Central'],
  ['N', 'Union Square', 'L', '1st'],
  ['6', 'Grand Central', 'L', 'Union Square']
];

const runTests = () => examples.forEach(x => addTrip(x[0], x[1], x[2], x[3]));
const logDB = () => tripDB.forEach(x => console.log(asciiJourney(x)));
runTests();
const eg = tripDB[2];

// WEBPAGE INTERACTIVITY ///////////////////////////////////////////////////////

//initialise variables
let nycLines = Object.keys(nycSubway);
let sL = document.getElementById('startL');
let sS = document.getElementById('startS');
let eL = document.getElementById('endL');
let eS = document.getElementById('endS');
let vis = document.getElementById('visual');
let btn = document.getElementById('generate');
let lineElements = [sL,eL];

// Update Line Dropdowns
const updateLines = function(lineParentElements, value) {
  return lineParentElements.map(x => appendOptionChild(x, value));
};

nycLines.map(x => updateLines(lineElements, x));

// Update Station Dropdowns
const updateStations = function(e) {
  let lineSelect = e.target.value;
  let stationSelect = e.target.id === 'endL' ? eS : sS; //pick associated station dropdown
  clearOptions(stationSelect);
  if (lineSelect !== 'default') {
    nycSubway[lineSelect].map(x => appendOptionChild(stationSelect, x));
  }
};

// function to execute on button click - adds obj and prints if valid selections
const clickToAdd = function() {
  let t = addTrip(sL.value, sS.value, eL.value, eS.value);
  let success = typeof t === "undefined" ? false : true;
  vis.innerText = success ? asciiJourney(t) : 'Invalid Trip';
  return success ? console.log(asciiJourney(t)) : null;
};

//helper functions
function appendOptionChild(parentElement, value) {
  let option = document.createElement('option');
  option.textContent = value;
  option.value = value;
  parentElement.appendChild(option);
}

function clearOptions(parentElement) {
  while (parentElement.childNodes.length > 1) { //if unwanted children, remove
    parentElement.removeChild(parentElement.lastChild);
  }
}

//necessary event listeners
sL.addEventListener('change', updateStations);
eL.addEventListener('change', updateStations);
btn.addEventListener('click', clickToAdd);
