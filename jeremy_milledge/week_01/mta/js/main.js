// MTA Week 01

const nycSubway = {
  N: ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']
};


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
    stops.push(firstLeg);
  } else { //need to take two trains
    firstLeg = singleLineStops(startL, startS); //only take as far as U.S
    stops.push(firstLeg);
    //new line is our 'finish line', new start is U.S, stop is finish dest.
    const secondLeg = singleLineStops(endL, 'Union Square', endS);
    stops.push(secondLeg);
  }
  return stops; //array of shape [[first leg stops], [second leg stops]]
};

const planTrip = function(startL, startS, endL, endS) {
  /* function to return string for loging to console*/

  let msg = '==============================================\n';
  msg += `Line ${startL}, ${startS} --> Line ${endL}, ${endS}\n`
  msg += '==============================================\n\n';
  //array of shape [[first leg stops], [second leg stops]]
  const allStops = findAllStops(startL, startS, endL, endS);
  const numLegs = allStops.length;

  const lines = [startL, endL];

  for (let i = 0; i < numLegs; i ++) {
    const thisLeg = allStops[i];
    const legLen = thisLeg.length;
    const firstInLeg = thisLeg.shift(); //removes doubled-up entry of transfer station
    const lastInLeg = thisLeg.pop(); // in order to
    msg = !i ? msg + `You get on at ${firstInLeg}.\n\n`: msg;

    msg += `Leg #${i + 1}/${numLegs} on the ${lines[i]} line:\n`;
    for (let j = 0; j < legLen - 2; j++) {
      msg += ` > ${thisLeg[j]}\n`;
    }
    if (numLegs > 1 && i !== numLegs - 1) {
      msg += `\nChange at ${lastInLeg}.\n\n`;
    } else {
      msg += `\nYou arrive at ${lastInLeg}.`
    }
  }
  return msg;
};

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
  //this.log = logTrip(this)

  tripDB.push(this); //add to trip database
}

const findTransfers = function(arr) {
  tfers =[]
  for (let i = 0; i < arr.length - 1; i++) {
    tfers.push(arr[i][arr[i].length-1]);
  }
  return tfers;
}

let logTrip = function(trip) {
  /* returns string for logging to console */
  /* input must be a Trip instance */

  let msg = logHeader(trip);

  for (let i = 0; i < trip.numLegs; i ++) { //loop to allow for later legs to be added
    let leg = trip.legs[i]; //copies so that we don't mess with Trip object
    const legFirst = leg[0]; //leg.shift() affecting object itself?????
    const legLast = leg[leg.length-1]; // leg.pop() ^ here as well
    msg += logGetOn(legFirst, i);
    msg += logLegs(leg)
    msg += logTransferOrFinal(trip.numLegs, legLast, trip.endLine, i);
  }
  return console.log(msg);
};

const logGetOn = function(sS, idx) {
  return (
    !idx ? `~ Get on at ${sS}.\n\\\n \\\n`: ""
  );
};

const logTransferOrFinal = function(num, last, lastLine, idx) {
  return (num > 1 && idx !== num - 1) ? ` /\n/\n~ Change at ${last} to Line ${lastLine}.\n\\\n \\\n` : ` /\n/\n~ Arrival at ${last}.\n `;
};

const logLegs = function(legArr) {
  let leg = '';
  for (let i = 1; i < legArr.length - 1; i++) {
    leg += ` |\n + ${legArr[i]}\n |\n`;
  }
  return leg;
};

const logHeader = function(t) {
  return (
    `\n==============================================\n\
Line ${t.startLine}, ${t.start} --> Line ${t.endLine}, ${t.end}\n\
==============================================\n\n`
  );
};

let tripDB = []; // collection of all Trip objects


//TEST INPUTS ==================================
const testTrips = [
  ['N', 'Times Square', 'N', '8th'],
  ['L', '1st', '6', 'Grand Central'],
  ['N', 'Times Square', '6', 'Grand Central'],
  ['N', 'Union Square', 'L', '1st'],
  ['6', 'Grand Central', 'L', 'Union Square']
];

for (let k = 0; k < testTrips.length; k++) {
  let t = testTrips[k];
  new Trip(t[0], t[1], t[2], t[3]);
  logTrip(tripDB[k]);
}

let eg = tripDB[2];

// for (let k = 0; k < testTrips.length; k++) {
//   let t = testTrips[k];
//   console.log(planTrip(t[0], t[1], t[2], t[3]));
// }
