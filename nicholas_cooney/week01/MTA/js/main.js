// train lines


const lineN = ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"];
const lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
const line6 = ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"];
const planTrip = function(startLine, startStation, endLine, endStation) {
    //take value that is start position. log stations till arrive at finish stations
    const begin = startLine.indexOf(startStation);
    // console.log(begin);
    const end = endLine.indexOf(endStation);
    const unionSquare = startLine.indexOf("Union Square");
    const unionSquare2 = endLine.indexOf("Union Square");
    console.log(unionSquare);
    console.log(unionSquare2);
    let line1 = []
    let line2 = []
      //plots stations on starting line
      if (begin < unionSquare) {
      for (let i = begin; i <= unionSquare; i++) {
        // console.log(startLine[i]);
        line1.push(startLine[i]);
      }
    } if (begin > unionSquare) {
      for (let i = begin; i >= unionSquare; i--) {
        line1.push(startLine[i]);
      }
    }
      // console.log(line1);
      if (end < unionSquare2) {
      for (let i = end; i <= unionSquare2; i++) {
        line2.push(endLine[i]);
      }
      } if (end > unionSquare2) {
        for (let i = end; i >= unionSquare2; i--) {
          line2.push(endLine[i]);
        }
      }
      line2.pop();
      let reverse = line2.reverse();
      // console.log(reverse);
      // console.log(line2);
      let journey = line1.concat(reverse);
      // console.log(startLine);
      console.log(journey);
      // console.log(`You must travel through the following stops on the ${startLine}:
      //   ${line1}. Change at Union Square. And continue on ${endLine}: ${reverse}.`)

    }



////////////////////////// This loops through one line //////////////////////
    // let trainStops = [] //new array that logs all stations passed from begin to end

    //this loops through the line array from the first station to the last
    // for (let i = begin; i <= end; i++) {
    //   console.log(startLine[i]);
    //     trainStops.push(startLine[i]); //pushes the stations passed to the new array trainStops
    // }
    // return trainStops;
/////////////////////
    //create loop that finishes at finishStation.
    //log all stations between startStation and finishStation

    //travel between two lines
    //travel from start point to Union Square
    //change array at union square and continue to end stations



planTrip(line6, "Grand Central", lineL, "1st");


//array.concat() could be used when moving between two arrays
