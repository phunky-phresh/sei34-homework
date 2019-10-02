// DrEvil
const drEvil = function(amount) {
  let sayIt = amount + ' dollars';
  if (amount === 1000000) {
    sayIt += " (pinky)";
  }
  return sayIt;
};
//console.log(drEvil(1000000));

// MixUp
const mixUp = function(str1, str2) {
  const s1a = str1.slice(0,2);
  const s1b = str1.slice(2);
  const s2a = str2.slice(0,2);
  const s2b = str2.slice(2);
  const mixedUp = s2a + s1b + ' ' + s1a + s2b;
  return mixedUp;
};
//console.log(mixUp('dog', 'cat'));

// FixStart
const fixStart = function(str) {
  let fixed = str;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[0]) {
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
  const idx_not = str.search('not');
  const idx_bad = str.search('bad');
  if (idx_bad > idx_not && idx_not >= 0) {
    fixed = fixed.slice(0, idx_not) + 'good' + fixed.slice(idx_bad + 3);
  }
  return fixed;
};
console.log(notBad("that's not bad hey!"));
