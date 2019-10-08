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
// and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// ```javascript
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// ```
//
// * There are 3 subway lines:
//   * The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
//   * The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
//   * The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//   * All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// * Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
//
//
// #### Hints:
// * Work out how you would do it on paper first! Then start to explain that process in Javascript.
// * Get the program to work for a single line before trying to tackle multiple lines.
// * Don't worry about prompting the user for input. Hard code some values to get it working. You can use ```prompt()``` later to make it more interactive.
// * Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// * The key to the lab is finding the index positions of each stop. (hint: ```indexOf()```)
// * Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)

/// to be deleted vvv
console.log("MTA"); // heading for our console log

/// establish array for train lines within an object of different train lines
const mTA = {
  N: [
  "Times Square",
  "34th",
  "28th",
  "23rd",
  "Union Square",
  "8th"
  ],
  L: [
  "8th",
  "6th",
  "Union Square",
  "3rd",
  "1st"
  ],
  6: [
  "Grand Central",
  "33rd",
  "28th",
  "23rd",
  "Union Square",
  "Astor"
  ]
} // end of MTA object

/// establish the constants of the first trip
const startLine = "N"
const startStation = "Times Square"
const finishLine = "L"
const finishStation = "8th"


/// Initial output to HTML file
// variable to hold a reference to an element
const elStartLine = document.getElementById('startLine');
// replace the textContent of the element with the 'startline'
elStartLine.textContent = startLine;
// variable to hold a reference to an element
const elStation1 = document.getElementById('station1');
// replace the textContent of the element with the 'startstation'
elStation1.textContent = startStation;

// variable to hold a reference to an element
const elFinishLine = document.getElementById('finishLine');
// replace the textContent of the element with the 'startline'
elFinishLine.textContent = finishLine;
// variable to hold a reference to an element
const elStation2 = document.getElementById('station2');
// replace the textContent of the element with the 'startstation'
elStation2.textContent = finishStation;


// variables to be established
const firstLine = []; // define an array to store first train line
let firstStationIndex = ""; // define the index number of station you hop on
let firstUnionIndex = ""; // define the index number of Union Square
let lastLine = []; // define an array to store last train line
let lastUnionIndex = ""; // define the index number of Union Square second line
let lastStationIndex = ""; // define the index number of station you hop off at

// establish the array index for the start and finish lines of the stations started and Union Square (the interchange)
const indexFunction = function () {
  // find the index of the first station
  firstStationIndex = mTA[startLine].indexOf ( startStation );
  // find the index of Union Square interchange on the first line
  firstUnionIndex = mTA[startLine].indexOf ( "Union Square" );
  lastStationIndex = mTA[finishLine].indexOf ( finishStation );
  lastUnionIndex = mTA[finishLine].indexOf ( "Union Square" );
}

indexFunction();

/// if the first and last line equals, then:
if ( startLine === finishLine ) {
  /// if the first index is < last station index THEN
  /// loop through train line and push to array the stations
  if ( firstStationIndex < lastStationIndex ) {
    // console.log( `ftt`, firstStationIndex );
    for ( let i = firstStationIndex + 1; i < lastStationIndex; i++ ) {
         firstLine.push( mTA[startLine][i] );
       }
  } else {
    for ( let i = firstStationIndex - 1; i > lastStationIndex; i-- ) {
         firstLine.push( mTA[startLine][i] );
       }
  }
}

if ( startLine !== finishLine ) {
  /// First line stations
  /// if the first index is < Union Square interchange station index THEN
  /// loop through train line and push to array the stations
  if ( firstStationIndex < firstUnionIndex ) {
    for ( let i = firstStationIndex + 1; i < firstUnionIndex; i++ ) {
          firstLine.push( mTA[startLine][i] );
        }
    } else {
      for ( let i = firstStationIndex - 1; i > firstUnionIndex; i-- ) {
           // console.log( "g" );
           firstLine.push( mTA[startLine][i] );
         }
    }

    /// Second line stations
    /// if the finish index is < Union Square interchange station index THEN
    /// loop through train line and push to array the stations
    if ( lastStationIndex > lastUnionIndex ) {
      for ( let i = lastStationIndex + 1; i < lastUnionIndex; i++ ) {
            lastLine.push( mTA[finishLine][i] );
            console.log(`r`);
          }
      } else {
        for ( let i = lastUnionIndex - 1; i > lastStationIndex; i-- ) {
             // console.log( "g" );
             lastLine.push( mTA[finishLine][i] );
           }
      }
} /// end startLine !== finishLine


// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."

console.log( `You are starting at ${ startStation } station on the ${ startLine } line.`);
// if there are no stops to the final station
if ( firstLine.length === 0 ) {
  console.log(`There are no stops between your stations on line ${ startLine }.`);
  } else {
  console.log( `You must travel through the following stops on the ${ startLine } Line:`, firstLine.join('\, ') );
}
if ( startLine === finishLine ) {
  console.log(`You do not need to change lines.`);
  console.log( `${ firstLine.length } stops in total.` );
} else {
  console.log("Change at Union Square.");
  if ( lastLine.length === 0 ) {
    console.log(`There are no stops between your stations on line ${ finishLine}.`);
  } else {
  console.log( `Your journey continues through the following stops:` , lastLine.join('\, '),`on the ${ finishLine } line before disembarking at ${ finishStation } station.`);
  }
  /// if Union Square, manage the message
  if ( startStation === "Union Square" || finishStation === "Union Square") {
    const totalStops = firstLine.length + lastLine.length;
    console.log(`${ totalStops } stops before your destination.`);
  } else {
    const totalStops = firstLine.length + lastLine.length + 1;
    console.log( `${ totalStops } stops before your destination including Union Square.` );
  }
}
console.log(`Your final station is ${ finishStation } on the ${ finishLine } line.`);
