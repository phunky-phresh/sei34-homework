// Homework - Week01 Day5 - MTA lab
//
// Objectives:
// Create a program that models a simple subway system.
//
// The program takes the line and stop that a user is getting on at and the line and stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:
//
// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.
//
// // console.log() shows output similar to this:
// // "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// // "Change at Union Square."
// // "Your journey continues through the following stops: 23rd, 28th, 33rd."
// // "7 stops in total."
// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
// All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.)
// Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
// Hints:
// Work out how you would do it on paper first! Then start to explain that process in Javascript.
// Get the program to work for a single line before trying to tackle multiple lines.
// Don't worry about prompting the user for input. Hard code some values to get it working. You can use prompt() later to make it more interactive.
// Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
// The key to the lab is finding the index positions of each stop. (hint: indexOf())
// Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)



// Planning log /////////////////////////////////////////////////////////
// #1 If passagers need to change line?
// #2 Found out travel sesstion on relevant lines.
// #3 If passagers travel backwards on lines?
// #4 Count total stops travelled.


// Variables and functions preparation /////////////////////////////////

// Log messages set-up
let tripLine1Msg = (line, trip) => console.log(`You must travel through the following stops on the ${line} line: ${trip}`);
let changeLineMsg = () => {console.log(`Change at Union Square.`)};
let tripLine2Msg = (trip) =>console.log(`Your journey continues through the following stops: ${trip}`);
let totalStopsMsg = (totalStops) => console.log(`${totalStops.length} stops in total`);
////// Variables passed into log messages
let trip = [];
let totalStops = []


// Subway line set-up
const network = {
    N: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    L: ["8th", "6th", "Union Square", "3rd", "1st"],
    6: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
};

// Functions preparation

////// Check if a transit is needed.
const changeLine = (line1, line2) => line1 !== line2;

///// Record journey. (incomplete if redirection is not required)
const recordJourney = function (line, stop1, stop2) {
    const argLine = network[line]; // Line passagers are travelling on.
    foo = [argLine.indexOf(stop1), argLine.indexOf(stop2)].sort();  // Sort index of start and destination on the line.
    trip = argLine.slice(...foo);  // Record journey.
    return trip
}

///// Return redirected (if needed) array of stops.
const redirectTrip = function(trip, stop) {  // {perimeter: trip(arg), destination(str)}
    if (trip[0] === stop) {
        trip = trip.reverse(); // if first stop in the trip array is destination, reverse the array.
    } else {
        trip.splice(0,1); // otherwise remove the start point as the passage does not travel through the start.
        trip.push(stop); // add destination as it was not sliced in in the main function.
    }
    return trip;
}

// Main function ///////////////////////////////////////////////////////

const planTrip = function(line1, stop1, line2, stop2) {
    console.log(`FROM: *${stop1}* on *${line1}* TO *${stop2}* on *${line2}*.`);

    if (!changeLine(line1, line2)) {
        trip = recordJourney(line1, stop1, stop2);
        trip = redirectTrip(trip, stop2);
        tripLine1Msg(line1, trip);
        totalStopsMsg(trip);
    } else {
        trip = recordJourney(line1, stop1, "Union Square");
        trip = redirectTrip(trip, "Union Square");
        tripLine1Msg(line1, trip);
        totalStops = trip;
        changeLineMsg();
        trip = recordJourney(line2, "Union Square", stop2);
        trip = redirectTrip(trip, stop2);
        tripLine2Msg(trip);
        totalStops.push(...trip);
        totalStopsMsg(totalStops);
    }
}

// Test ////////////////////////////////////////////////////////////////


planTrip("N", "34th", "N", "8th");
console.log('===========================');
planTrip("N", "8th", "N", "34th");
console.log('===========================');
planTrip("N", "34th", "L", "8th");
console.log('===========================');
planTrip("6", "Grand Central", "N", "8th");
console.log('===========================');
planTrip("N", "8th", "L", "8th");
