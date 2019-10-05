const ccValid = function(num) {
  this.number = num;
  this.valid = false;

  //input type
  if(typeof num != "number") {
    //only dashes and numbers in string?
    const notNumDashRe = /[^0-9-]/g;
    if (num.match(notNumDashRe)) {
      this.error = 'contains more than just nums and dash';
      console.log(this)
      return this;
    }
  }

  //convert to string(if not already) and remove dashes
  const str = num.toString().replace(/-/g,'');

  //number of digits
  if (str.length !== 16) {
    this.error = 'not 16 digits';
    console.log(this)
    return this;
  }

  //last letter even
  if (str.slice(-1) % 2 !== 0) {
    this.error = 'last letter not even';
    console.log(this)
    return this;
  }

  let strArr = str.split('');
  let numArr = strArr.map(x => Number(x));
  let sum = numArr.reduce((total, x) => total + x);
  //sum of digits
  if (sum <= 16) {
    this.error = 'sum not greater than 16';
    console.log(this)
    return this;
  }
  let sameness = numArr.slice(1).filter(x => x === numArr[0]);
  //sameness
  if (sameness.length == 15) {
    this.error = 'repeats one number 16 times';
    console.log(this)
    return this;
  }

  this.valid = true;
  console.log(this)
  return this;
};

let a = new ccValid(9999777788880000);
let b = new ccValid(6666666666661666);
let c = new ccValid('a92332119c011112');
let d = new ccValid(4444444444444444);
let e = new ccValid(1111111111111110);
let f = new ccValid(6666666666666661);
let g = new ccValid('9999-7777-8888-0000');
let h = new ccValid('6666-6666-6666-1666');
