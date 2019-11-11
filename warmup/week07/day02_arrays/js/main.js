console.log("arrrays");
// [1, 2, 3].reverse();
// ["Hello", ["World", 42] ].flat()


const reverse = function( arr ){
  let output = [];

  // looping forwards
  // for (let i = 0; i < arr.length; i++) {
  //   const currentElem = arr[i];
  //   output.unshift(currentElem);
  // }

  for (let i = arr.length-1; i >= 0; i--) {
    const currentElem = arr[i];
    output.push(currentElem);
    console.log(output);
  }

  console.log(output)
  return output
};

reverse([1, 2, 3, 4]);


const flatten = function( arr ){
  let output = [];

  for (var i = 0; i < arr.length; i++) {
    const currentElem = arr[i];

    if(Array.isArray(currentElem)){

      // for (let j = 0; j < currentElem.length; j++) {
      //   const innerElem = currentElem[j];
      //   output.push( innerElem );
      // }

      output = output.concat(currentElem);

    } else {
      output.push( currentElem );
    }
  }


  console.log(output);
  return output;
};

flatten(["Hello", ["World", 42] ]);












// Jez's solutions :)

// REVERSING ///////////////////////////////////////////////////////////////////

const reverse = function(arr) {
  return arr.map((e, i) => arr[arr.length - 1 - i]);
};

console.log(reverse([1,2,3,4]))

// FLATTENING //////////////////////////////////////////////////////////////////

const isEmpty = function(arr) {
  // to check if everything within an array is an empty array or nothing at all
  // this check itself recurses
  return Array.isArray(arr) && (arr.length == 0 || arr.every(isEmpty));
}

const flatten = function(arr, output=[]) {
  //initialise with default empty output array

  while (!isEmpty(arr)) {
    if (!Array.isArray(arr[0])) { //extract non-array element and move on
      output.push(arr.shift())
    } else if (isEmpty(arr[0])) { //done with first element, remove it
      arr.shift()
    } else { //drill down with recursion
      flatten(arr[0], output)
    }
  }
  return output;
}



console.log(flatten(['hello', ['world', 42]]));
console.log(flatten(['hello', [['world', 42]]]));
console.log(
  flatten(['hello', [[true,false,true],'world', 42, [1, 2, ['a', 'b', ['A', [0,1,2], 'C']]]]])
);
