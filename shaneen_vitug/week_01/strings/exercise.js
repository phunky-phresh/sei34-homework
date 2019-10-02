// ## DrEvil

const drEvil = function (amount) {
  if (amount === 1000000) {
    return amount + " dollars (pinky)";
  };

  return amount + " dollars";
};

// ## MixUp

const mixUp = function (string1, string2) {
  const first2CharsString1 = string1.slice(0, 2);
  const first2CharsString2 = string2.slice(0, 2);
  const foo = string1.replace(first2CharsString1, first2CharsString2);
  const bar = string2.replace(first2CharsString2, first2CharsString1);
  return foo + " " + bar;
};

// ## FixStart

const fixStart = function (string) {
  const firstChar = string.slice(0, 1);
  const foo = string.replace(new RegExp(`${firstChar}`, 'gi'), '*');
  return `${firstChar}${foo.slice(1)}`;
};

// ## Verbing
const verbing = function (stringVerb) {
  if (stringVerb.length >= 3 && !stringVerb.endsWith('ing')) {
    return `${stringVerb}ing`;
  } else if (stringVerb.length >= 3 && stringVerb.endsWith('ing')) {
    return `${stringVerb}ly`;
  } else {
    return stringVerb;
  }
};

// ## Not Bad
const notBad = function (string) {
  const notIndex = string.indexOf("not");
  const badIndex = string.indexOf("bad");
  if (notIndex < badIndex && string.includes("not") && string.includes("bad")) {
    return string.substring(0, notIndex) + "good!."
  };
    return string;
};
