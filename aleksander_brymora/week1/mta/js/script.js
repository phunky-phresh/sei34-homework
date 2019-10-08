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

//-- 2 --
//Function used to interpret user input of a line
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

//-- 4 --
//Function used to just print stations from first to last
const linePrint = function (start, end, line) {
    if (start < end) {
        //Tell the number of the steps
        console.log(end - start);
        //Tell the stops
        let message = 'You must travel through ';
        for (let i = start; i < end; i++) {
            message += `${line[i]}, `
        }
        message += `and get out at ${line[end]}.`;
        console.log(message);
        stations += ((end - start));
    }
    else {
        //Tell the number of the steps
        console.log(start - end);
        //Tell the stops
        let message = 'You must travel through ';
        for (let i = start; i > end; i--) {
            message += `${line[i]}, `
        }
        message += `and get out at ${line[end]}.`;
        console.log(message);
        stations += ((start - end));
    }
}

//-- 3 --
//Function used to choose if a trip has a transfer or not
const lineSearch = function (points, transfer) {
    if (transfer) {
        if (points.start.line[points.start.station] === 'Union Square') {
            console.log(`Change at Union Square from line ${points.start.lineName.toUpperCase()} to ${points.end.lineName.toUpperCase()}.`);
            console.log(`Amount of stops on lane ${points.end.lineName.toUpperCase()}: `);
            linePrint(points.end.transfer, points.end.station, points.end.line);
        }
        else {
            //First half
            console.log(`Amount of stops on lane ${points.start.lineName.toUpperCase()}: `);
            linePrint(points.start.station, points.start.transfer, points.start.line);
            //transfer message
            console.log(`Change at Union Square to line ${points.end.lineName.toUpperCase()}`);
            //Second half
            console.log(`Amount of stops on lane ${points.end.lineName.toUpperCase()}: `);
            linePrint(points.end.transfer, points.end.station, points.end.line);
        }
    }
    else {
        console.log(`Ammount of stops on lane ${points.start.lineName.toUpperCase()}: `);
        linePrint(points.start.station, points.end.station, points.start.line);
    }
    console.log(`Total stations to travel: ${stations}`);
    stations = 0;
    console.log('----------------------------------------------------');
}

//-- 1 --
//Main function - start
const planTrip = function (lineStart, stationStart, lineEnd, stationEnd) {
    //Defining an object to hold endpoints of the route
    let points = {
        start: {},
        end: {}
    }
    //First half
    points.start.line = lineMatchSearch(lineStart);
    points.start.lineName = lineStart.toLowerCase();
    points.start.station = points.start.line.indexOf(stationStart);
    points.start.transfer = points.start.line.indexOf('Union Square');
    //Second half
    points.end.line = lineMatchSearch(lineEnd);
    points.end.lineName = lineEnd.toLowerCase();
    points.end.station = points.end.line.indexOf(stationEnd);
    points.end.transfer = points.end.line.indexOf('Union Square');

    //Checking if transfers are necesarry
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
planTrip("l", "Union Square", "n", "Times Square");