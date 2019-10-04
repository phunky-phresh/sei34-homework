
let linesObject = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

function planTrip(startLine, startStation, endLine, endStation) {
  console.log(`Request: ${startLine}, ${startStation}, ${endLine}, ${endStation}`)
  let directions;
  let lineOneStops = [];
  let lineTwoStops = [];

  if (startStation === "Union Square") startLine = endLine;
  if (endStation === "Union Square") endLine = startLine;

  if (startLine === endLine) {
    lineOneStops = singleLineTrip(startLine, startStation, endStation);
    directions = `You must travel through the following stops on the ${startLine} line: ${lineOneStops.join(', ')}.\n${lineOneStops.length} stops in total.`;

  } else {
    lineOneStops = singleLineTrip(startLine, startStation, "Union Square");
    lineTwoStops = singleLineTrip(endLine, "Union Square", endStation);
    directions = `You must travel through the following stops on the ${startLine} line: ${lineOneStops.join(', ')}.\nChange at Union Station.\nThen continue on ${endLine} line: ${lineTwoStops.join(', ')}\n${lineOneStops.length + lineTwoStops.length} stops in total.`;
  }
  //directions = lineOneStops + " " + lineTwoStops;
  console.log(directions);
}

function singleLineTrip(line, startStation, endStation) {
  let singleJourneyOutput = [];
  let stationListArray = linesObject[line];
  let startStationIndex;
  let endStationIndex;

  //am I going up or down the line?
  for (let i = 0; i < stationListArray.length; i++) {
    if (startStation === stationListArray[i]) {
      startStationIndex = Number(i);
    }
    if (endStation === stationListArray[i]) {
      endStationIndex = Number(i);
    }
  }
  if (startStationIndex < endStationIndex) {
    for (let i = startStationIndex + 1; i <= endStationIndex; i++ ) {
      singleJourneyOutput.push(stationListArray[i]);
    }
    //console.log(singleJourneyOutput);
  } else {
    //reverse direction if needed
    for (let i = startStationIndex - 1; i >= endStationIndex; i--) {
      singleJourneyOutput.push(stationListArray[i]);
    }
    //console.log(singleJourneyOutput);
  }
  return singleJourneyOutput;
}

//console.log(`You must travel through the following stops on the <input> line: <joined array excluding starting, including finishing>. \nNo line change required. \nYou will have <stops, including last> stops total.`);

planTrip("N", "33rd", "6", "3rd")
planTrip("6", "Union Square", "L", "1st")
planTrip("L", "8th", "6", "Union Square")
planTrip("L", "8th", "N", "Times Square")
