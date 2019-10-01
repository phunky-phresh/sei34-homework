// DrEvil
const drEvil = function(amount) {
  let sayIt = `${amount} dollars`;
  if (amount === 1000000) {
    sayIt += " (pinky)";
  }
  return sayIt;
};
//console.log(drEvil(1000000));

// MixUp
const mixUp = function(str1, str2) {
  const slice1a = str1.slice(0,2);
  const slice1b = str1.slice(2);
  const slice2a = str2.slice(0,2);
  const slice2b = str2.slice(2);
  const concat = `${slice2a}${slice1b} ${slice1a}${slice2b}`;
  return concat;
};
//console.log(mixUp('dog', 'cat'));

// FixStart
const fixStart = function(str) {
  let fixed = str;
  const firstChar = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] === firstChar) {
      fixed = fixed.slice(0, i) + '*' + fixed.slice(i + 1);
    }
  }
  return fixed;
};
//console.log(fixStart("peter piper picked a pepper"));

// Verbing
const verbing = function(str) {
  const len = str.length;
  if (len < 3) {
    return str;
  } else if (str.slice(-3) === 'ing') {
    return str + 'ly';
  } else {
    return str + 'ing';
  }
};
//console.log(verbing('in'));
//console.log(verbing('interest'));
//console.log(verbing('interesting'));


// Not Bad
const notBad = function(str) {
  let fixed = str;
  const idx_not = str.search(/not/gi);
  const idx_bad = str.search(/bad/gi);
  if (idx_bad > idx_not && idx_not >= 0) {
    fixed = fixed.slice(0, idx_not) + 'good' + fixed.slice(idx_bad + 3);
  }
  return fixed;
};
//console.log(notBad("that's nOt Bad hey!"));
