// MTA Lab
// Objectives:
// Apply your knowledge of Javascript to solve a real world problem.
// Get really good at array manipulation.
// Activity
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and
// stop that user is getting off at and prints the journey and the total number of
// stations for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function
// name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd,
// Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square,
// and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection
// points. (For example, this means the 28th stop on the N line is different than the
// 28th street stop on the 6 line, so you'll have to differentiate this when you name
// your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through
// or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in
// Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working.
// You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and
// intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e.
// 23rd on the N and on the 6 need to be differentiated)




//Array of objects with trainlines
const trainlines = [
  {
    name: "N line",
    stations: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  },
  {
    name: "L line",
    stations: ["8th", "6th", "Union Square", "3rd", "1st"],
  },
  {
    name: "6 line",
    stations: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"],
  }
]


//General function to get stations from a specific line
const getStations = function(fromStation, toStation, lineStations) {   //=>inputs are index initial station, index final station and line array
  let tripRoute = [];
  let stationsArray = lineStations;

  if (toStation > fromStation) { //if final station is after initial station
    tripRoute = stationsArray.slice(fromStation + 1, toStation + 1); //slice doesn't include end element in the array
  } else {  //if final station is before initial station
    tripRoute = stationsArray.slice(toStation, fromStation);
    tripRoute.reverse();
  }
  return tripRoute;
}


//function to plan the trip
const planTrip = function(initialLine, initialStation, finalLine, finalStation) {
  let initialLineStations; //initialize array of stations from starting line
  let finalLineStations;  //initialize array of stations from ending line
  let tripRoute;

  console.log(`From ${initialLine}, ${initialStation} - To ${finalLine}, ${finalStation}:`);

  //If starting or ending on Union Square but inputs have different lines
  if (initialStation === "Union Square" && initialLine !== finalLine) {
    initialLine = finalLine;
  } else if (finalStation === "Union Square" && initialLine !== finalLine) {
    finalLine = initialLine;
  }

  for (let i = 0; i < trainlines.length; i++) {   //go through array of trainlines
    if (trainlines[i].name === initialLine) {
      initialLineStations = trainlines[i].stations; //match starting line and get its array of stations from object
    }
    if (trainlines[i].name === finalLine) {
      finalLineStations = trainlines[i].stations; //match final line and get its array of stations from object
    }
  }

  const indexInitialStation = initialLineStations.indexOf(initialStation); //get index of starting station
  const indexFinalStation = finalLineStations.indexOf(finalStation); //get index of final station
  const indexInitialUS = initialLineStations.indexOf("Union Square"); //get index of US station in initial line
  const indexFinalUS = finalLineStations.indexOf("Union Square"); //get index of US station in final line


  //if travelling on one line only
  if (initialLine === finalLine) {
    tripRoute = getStations(indexInitialStation, indexFinalStation, initialLineStations);

    console.log(`You must travel through the following stops on the ${initialLine}:
      \n${tripRoute.join(", ")}.`);
  }

  //if having to change lines
  else {
    let tripRoute1 = getStations(indexInitialStation, indexInitialUS, initialLineStations);
    let tripRoute2 = getStations(indexFinalUS,indexFinalStation, finalLineStations);
    tripRoute = tripRoute1.concat(tripRoute2);

    console.log(`You must travel through the following stops on the ${initialLine}:
      \n${tripRoute1.join(", ")}.
      \nChange at Union Square to ${finalLine}.
      \nYour journey continues through the following stops: ${tripRoute2.join(", ")}.`);
  }
  console.log(`${tripRoute.length} stops in total.`);
}




planTrip("N line", "34th", "6 line", "Union Square");
console.log('');
planTrip("L line", "8th", "L line", "3rd");
console.log("");
planTrip("N line", "Times Square", "6 line", "Astor Place");
console.log("");
planTrip("N line", "Union Square", "6 line", "Grand Central");
console.log("");
planTrip("L line", "1st", "6 line", "Grand Central");
