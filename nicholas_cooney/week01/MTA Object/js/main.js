// train lines
const trainLines = {
  'lineN': ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
  'lineL': ["8th", "6th", "Union Square", "3rd", "1st"],
  'line6': ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

////multi line journey ////
const trainTrip = function(startLine, stopA, finishLine, stopB) {
  let trainStops = [];
  let startArray = trainLines[startLine];
  let finishArray = trainLines[finishLine];

  let begin = startArray.indexOf(stopA);
  let end = finishArray.indexOf(stopB);
  let union1 = startArray.indexOf("Union Square");
  let union2 = finishArray.indexOf("Union Square");
  let line1 = [];
  let line2 = [];

      if (begin < union1) {
        for (let i = begin; i <= union1; i++) {
          line1.push(startArray[i]);
        }
    } if (begin > union1) {
        for (let i = begin; i >= union1; i--) {
          line1.push(startArray[i]);
        }
    } if (end < union2) {
        for (let i = end; i <= union2; i++) {
          line2.push(finishArray[i]);
        }
    } if (end > union2) {
        for (let i = end; i >= union2; i--) {
          line2.push(finishArray[i]);
        }
    }
    line2.pop();
    let reverse = line2.reverse();
    let journey = line1.concat(reverse);
    if (stopA === 'Union Square') {
      return (`Get on at Union Square ${finishLine}. Contiue down ${line2} station. ${line2.length} stops`)
    } else {
      return (`You must travel through the following stops on ${startLine}: ${line1}. Change at Union Square. And continue on ${finishLine}: ${reverse}. This is a total of ${journey.length} stops`)
  }
}

console.log(trainTrip('lineL', 'Union Square', 'lineL', '1st'));
console.log(trainTrip('lineN', 'Times Square', 'line6', 'Grand Central'));
console.log(trainTrip('lineL', '8th', 'line6', 'Grand Central'));

/////single line journey ////
const singleTrip = function(startLine, stopA, stopB) {
  let trainStops = [];
  let lineArray = trainLines[startLine];
  let begin = lineArray.indexOf(stopA);
  // console.log(begin);
  let end = lineArray.indexOf(stopB);
  if (begin < end) {
  for (let i = begin; i <= end; i++) {
    // console.log(lineArray[i]);
    trainStops.push(lineArray[i]);
  }
  return trainStops;
} else {
  for (let i = begin; i >= end; i--) {
    trainStops.push(lineArray[i]);
  }
  return trainStops;
}
}
console.log(singleTrip('lineL', '1st', 'Union Square'));
