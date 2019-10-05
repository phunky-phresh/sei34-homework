//Lines definition
const lineN = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const lineL = ['8th', 'Union Square', '3rd', '1st'];
const line6 = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Palace'];
let stations = 0;

console.log('To choose a route input:');
console.log('starting line, starting station, final line, final station');
console.log(`Line N: ${lineN.join(', ')}`);
console.log(`Line L: ${lineL.join(', ')}`);
console.log(`Line 6: ${line6.join(', ')}`);
console.log('=============================================================');

const lineMatchSearch = function (line) {
    line = line.toLowerCase();
    if (line === 'n') {
        return lineN;
    }
    else if (line === 'l') {
        return lineL;
    }
    else {
        return line6;
    }
}

const linePrint = function (start, end, line) {
    if (start < end) {
        //Tell the number of the steps
        console.log(`---- Number of stations on this line: ${(end - start)} ----`);
        //Tell the stops
        let message = 'You must travel through the following stops on this line: ';
        for (let i = start; i < end; i++) {
            message += `${line[i]}, `
        }
        message += `and get out at ${line[end]}.`;
        console.log(message);
        stations += ((end - start));
    }
    else {
        //Tell the number of the steps
        console.log(`---- Number of stations on this line: ${(start - end)} ----`);
        //Tell the stops
        let message = 'You must travel through the following stops on this line: ';
        for (let i = start; i > end; i--) {
            message += `${line[i]}, `
        }
        message += `and get out at ${line[end]}.`;
        console.log(message);
        stations += ((start - end));
    }
}

//This function should be used to 
const lineSearch = function (points, transfer) {
    if (transfer) {
        //First half
        linePrint(points.start.station, points.start.transfer, points.start.line);
        //transfer message
        console.log("Change at Union Square.");
        //Second half
        linePrint(points.end.transfer, points.end.station, points.end.line);
    }
    else {
        linePrint(points.start.station, points.end.station, points.start.line);
    }
    console.log(`Total stations to travel: ${stations}`);
    stations = 0;
    console.log('----------------------------------------------------');
}

const planTrip = function (lineStart, stationStart, lineEnd, stationEnd) {
    //Defining an object to hold endpoints of the route
    let points = {
        start: {
            line: lineMatchSearch(lineStart)
        },
        end: {
            line: lineMatchSearch(lineEnd)
        }
    }
    //adding more details to the previous object
    //(it's like that because i couldn't figure out how to access line key while defining the object)
    points.start.station = points.start.line.indexOf(stationStart);
    points.start.transfer = points.start.line.indexOf('Union Square');
    points.end.station = points.end.line.indexOf(stationEnd);
    points.end.transfer = points.end.line.indexOf('Union Square');

    //Checking for transfers
    if (points.start.line === points.end.line) {
        lineSearch(points, false);
    }
    else {
        lineSearch(points, true);
    }
}

planTrip("n", "Times Square", "N", "8th");
planTrip("n", "Times Square", "6", "33rd");
planTrip("l", "1st", "6", "33rd");