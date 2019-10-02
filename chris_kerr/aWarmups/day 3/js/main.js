let inputNum; //prompt("Please input a number to test:");
let testResult = inputNum;
let test3 = "";
let test5 = "";
let test7 = "";

function raindrop() {
    inputNum = document.getElementById("inputNum2").value;
    //console.log(inputNum);

    test3 = "";
    test5 = "";
    test7 = "";

    if (inputNum%3 === 0) {
      test3 = "Pling";
    }

    if (inputNum%5 === 0) {
      test5 = "Plang";
    }

    if (inputNum%7 === 0) {
      test7 = "Plong";
    }


    testResult = test3 + test5 + test7 || inputNum;

    //console.log(testResult);
    document.getElementById("testResults").innerHTML = "Raindrop speak for " + inputNum + " is: " + testResult;
}
