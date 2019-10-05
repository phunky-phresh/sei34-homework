console.log("Working! Homework - mta");

// Day 5 - Friday, 4 October 2019

// https://gist.github.com/wofockham/8ac3c1d747f345d89d3d

// # MTA Lab
//
// ## Objectives:
// * Apply your knowledge of Javascript to solve a real world problem.
// * Get really good at array manipulation.
//
// #### Activity
// * Create a program that models a simple subway system.
//
// * The program takes the line and stop that a user is getting on at and the line
// and stop that user is getting off at and prints the journey and the total number of
// stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name
// and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd,
// Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and
//   8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and
//   Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection
//   points. (For example, this means the 28th stop on the N line is different than the
//     28th street stop on the 6 line, so you'll have to differentiate this when you name your
//     stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or
// change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in
// Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working.
// You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and
// intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names
// (i.e. 23rd on the N and on the 6 need to be differentiated)

const subway = {

  lines: {
    N: ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'],
    L: ['8th', '6th', 'Union Square', '3rd', '1st'],
    6: ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
  },

  // initialize key-value pair to record total number of stops for every trip
  totalStops: 0,

  // this function logs the stops made on a given line
  // stopA is the current station
  // stopB is the destination station
  recordStops: function(line, stopA, stopB) {

    // initialize array to store the stops for the journey
    let stops = [];

    // stores the array of the selected line
    const currentLine = this.lines[line];

    // finds the index of the current station and the destination station on the current line
    const indexOfstopA = currentLine.indexOf(stopA);
    const indexOfstopB = currentLine.indexOf(stopB);

    // travelling the same direction as the way the array is written
    if (indexOfstopA < indexOfstopB) {

      for (let i = indexOfstopA + 1; i <= indexOfstopB; i++) {
        stops.push(currentLine[i]);
        this.totalStops += 1;
      }

    // travelling the opposite direction to the way the array is written
    } else if (indexOfstopA > indexOfstopB) {

      for (let i = indexOfstopA + 1; i >= indexOfstopB; i--) {
        stops.push(currentLine[i]);
        this.totalStops += 1;
      }

    // if the current station is the same as the destination station
    } else {

      console.log(`Error. You cannot have your current station as your destination station.`);
      return false;

    }

    return stops;

  },

  // lineA is the line of the current station, stopA
  // lineB is the line of the destination station, stopB
  planTrip: function(lineA, stopA, lineB, stopB) {

    // each time the function is called, the total stops count must be reset to zero
    // or it will return the total stops account from the previous time the function was called
    this.totalStops = 0;

    // if the trip is on one line only
    if (lineA === lineB) {

      // stores the stops in a variable
      const stopsOnLine = this.recordStops(lineA, stopA, stopB);

      // message will only show if the the starting station isn't the same as the destination station
      if (stopA !== stopB) {
        console.log(`You must travel through the following stops on ${ lineA } line: ${ stopsOnLine.join(', ') }.`);
      }

    } else {

      // these variables hold the stops on each line
      // note that the change in lines is at Union Square
      const stopsOnLineA = this.recordStops(lineA, stopA, 'Union Square');
      const stopsOnLineB = this.recordStops(lineB, 'Union Square', stopB);

      // messages to log showing the complete journey
      console.log(`You must travel through the following stops on the ${ lineA } line: ${ stopsOnLineA.join(', ')}.`);
      console.log(`Change at Union Square.`);
      console.log(`Your journey continues through the following stops on the ${ lineB } line: ${ stopsOnLineB.join(', ')}.`);
      console.log(`${ this.totalStops } stops in total.`);
    }
  }
};

subway.planTrip('N','Times Square', 'L', '1st');
subway.planTrip('N','34th', 6, 'Grand Central');
subway.planTrip(6, '28th', 'L', '1st');
subway.planTrip('L', '28th', 'L', '1st'); // same line
subway.planTrip('L', '28th', 'L', '28th'); // same line and stops. should return error message


//////////////////////////////
// Using Arrays:

// let totalStops = 0;
//
// const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
// const lineL = ['8th', '6th', 'Union Square', '3rd', '1st'];
// const lineS = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
//
//
// const stopsMade = function(line, startStop, endStop) {
//
//   let currentLine = [];
//   let lineName = '';
//
//   if (line === 'lineN') {
//     currentLine = lineN;
//     lineName = 'N';
//   } else if (line === 'lineL') {
//     currentLine = lineL;
//     lineName = 'L';
//   } else {
//     currentLine = lineS;
//     lineName = '6';
//   }
//
//   let stops = [];
//   const indexOfStartStop = currentLine.indexOf(startStop);
//   const indexOfEndStop = currentLine.indexOf(endStop);
//
//   if (indexOfStartStop < indexOfEndStop) {
//     for (let i = indexOfStartStop + 1; i <= indexOfEndStop; i++) {
//       stops.push(currentLine[i]);
//       totalStops += 1;
//     }
//    } else {
//     for (let i = indexOfStartStop - 1; i >= indexOfEndStop; i--){
//       stops.push(currentLine[i]);
//       totalStops += 1;
//     }
//    }
//    console.log(`You must travel through the following stops on line ${ lineName }: ${ stops.join(', ') }`);
//    return stops;
// };
//
// stopsMade('lineN', 'Times Square', 'Union Square');
// console.log('Change at Union Square');
// stopsMade('lineS', 'Union Square', '33rd');
// console.log(`Total number of stops: ${ totalStops }`);
