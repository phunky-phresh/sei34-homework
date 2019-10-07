const lines = {
  N : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  L : ["8th", "6th", "Union Square", "3rd", "1st"],
  6 : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

function planTrip (startLine, location, endLine, destination) {

  const isDifferentLines = startLine !== endLine;

  const locationIndex = lines[startLine].indexOf(location);
  const destinationIndex = lines[endLine].indexOf(destination);

  if (isDifferentLines) {

    const unionSquareStartIndex = lines[startLine].indexOf("Union Square");
    const unionSquareEndIndex = lines[endLine].indexOf("Union Square");

    let startTrip = lines[startLine].slice(locationIndex + 1, unionSquareStartIndex + 1);

    if (locationIndex > unionSquareStartIndex) {
      startTrip = lines[startLine].slice(unionSquareStartIndex, locationIndex).reverse();
    }

    console.log(`You must travel through the following stops on the ${startLine} line: ${startTrip.join(", ")}`);

    console.log("Change at Union Square.");

    let endTrip = lines[endLine].slice(unionSquareEndIndex + 1, destinationIndex + 1);

    if (destinationIndex < unionSquareEndIndex) {
      endTrip = lines[endLine].slice(destinationIndex, unionSquareEndIndex).reverse();
    }

    console.log(`Continue your journey on the ${endLine}: ${endTrip.join(", ")}`);
    console.log(`${startTrip.length + endTrip.length} stops in total.`);
  } else {

    let journey = lines[startLine].slice(locationIndex + 1, destinationIndex + 1);

    if (locationIndex > destinationIndex) {
      journey = lines[startLine].slice(destinationIndex, locationIndex).reverse();
    }

    console.log(`You must travel through the following stops on the ${startLine} line: ${journey.join(", ")}`);
    console.log(`${journey.length} stops in total.`);
  }
}

// TEST

// 1) SAME LINE NORMAL ORDER
planTrip("N", "Times Square", "N", "23rd"); // output: 34th, 28th, 23rd. 3 stops

// 2) SAME LINE REVERSE ORDER
planTrip("6", "Astor Place", "6", "28th"); // output: Union Square, 23rd, 28th. 3 stops

// 3) DIFF LINE NORMAL ORDER
planTrip("L", "8th", "6", "Astor Place"); // output: L line - 6th, Union Square. Change at Union Square. Continue 6 line - Astor Place. 3 stops

// 4) DIFF LINE REVERSE ORDER
planTrip("N", "Times Square", "6", "Grand Central"); // output: N line - 34th, 28th, 23rd, Union Square. Change at Union Square.
// Continue 6 line - 23rd, 28th, 33rd, Grand Central. 8 stops
