// MTA Week 01

const nycSubway = {
  N: ['8th', 'Union Square', '23rd', '28th', '34th', 'Times Square'],
  L: ['8th', '6th', 'Union Square', '3rd', '1st'],
  6: ['Astor Place', 'Union Square', '23rd', '28th', '33rd', 'Grand Central']
};


const pushStops = function(start, end, line) {
  /* push stations on specified line to returned array */

  arr = [];
  [start, end] = start > end ? [end, start] : [start, end]; //swap start and end if start greater
  for (let i = start; i <= end; i++) {
    arr.push(line[i]);
  }
  return end > start ? arr.reverse() : arr;
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
  return stops;
};

const planTrip = function(startL, startS, endL, endS) {
  /* function to return string for printing to console */

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

const buildTrip = function() {
  /*creates trip object to print from with planTrip */
  /*push result to array of trips?*////// // TODO:
  return ({
    start: startS,
    end: endS,
    transfers: ['Union Square'],
    legs: [[],[]]
  });
}

let tripList = []; // collection of all trips from buildTrip object factory

console.log(planTrip('N', 'Times Square', 'N', '8th'));
console.log(planTrip('6', 'Astor Place', '6', 'Grand Central'));
console.log(planTrip('N', 'Times Square', '6', 'Grand Central')); //
console.log(planTrip('N', 'Union Square', 'L', '1st'));
console.log(planTrip('6', 'Grand Central', 'L', 'Union Square'));
