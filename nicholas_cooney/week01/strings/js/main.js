// Dr Evil

const drEvil = function(amount) {
  //const evil = amount;
  if (amount.length >= 7) {
    console.log(`${amount} dollars (pinky)`);
  } else {
      console.log(`${amount} dollars`);
  }
}

drEvil('10');
drEvil('10000000');

// Mixup

const mixUp = function(mix1, mix2) {
  const slice1 = mix1.slice(2);
  const slice2 = mix2.slice(2);
  const sub1 = mix1.substring(0,2);
  const sub2 = mix2.substring(0,2);
  console.log(`${sub1}${slice2} ${sub2}${slice1}`);
  //console.log(slice1);
}

mixUp("cow", "cat");

//Fix Start
/*
const fixStart = function(fixed) {
  const first = fixed.charAt(0);
  for (let i = 1; i < fixed.length; i++) {
    //alert(fixed.charAt(i));
    if (fixed[i] === first) {
      console.log("true");
    //  console.log(i);
}
    }
    }
fixStart("babble");
*/
/*
function fixStart(fixed) {
  var first = fixed.charAt(0);
  return first + fixed.slice(1).replace(new RegExp(first, 'g'), "*");
}
console.log(fixStart("pineapple"));
*/
//verbing

const verbing = function(verb) {
  if (verb.length >= 3 && verb.slice(-3) !== "ing") {
    console.log(verb + "ing")
  } else if (verb.slice(-3) === "ing"){
    console.log(verb + "ly");
  }
  else {
    console.log(verb);
  }
}

verbing('run');

// Not bad

const notBad = function(string) {
  //const not = "not";
  //const bad = "bad";
  const search = string.indexOf("not")
  const search2 = string.indexOf("bad")
  if (search === true && search2 === true) {
   const itIs = string.substring(0, search);
    console.log(itIs +"good!");
  }

}
notBad("This dinner is not that bad!");
