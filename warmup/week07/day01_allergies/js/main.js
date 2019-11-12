console.log("hello");

const findAllergies = {
  scorecard: {
    1: "eggs",
    2: "peanuts",
    4: "shellfish",
    8: "strawberries",
    16: "tomatoes",
    32: "chocolate",
    64: "pollen",
    128: "cats"
  },
  getKeys: function(){
    const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
    // console.log("allergy keys", allergyKeys);
    return allergyKeys;
  },
  getList: function(score){
    const keys = this.getKeys();
    let allergies = [];

    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];

      if( score >= key) {
        allergies.push(this.scorecard[key]);
        score -= key
      }
    }
    // console.log('allergies', allergies);
    return allergies;
  },
  diagnosis: function(score){
    const allergyList = this.getList(score);

    if(allergyList.length > 0){
      console.log('Allergies: ', allergyList.join(', '));
    } else {
      console.log('No allergies');
    }
  }

};

findAllergies.diagnosis(34);
findAllergies.diagnosis(0);

//version 2
// const scorecard = {
//   "cats": 128,
//   "pollen": 64,
//   "chocolate": 32,
//   "tomatoes": 16,
//   "strawberries": 8,
//   "shellfish": 4,
//   "peanuts": 2,
//   "eggs": 1
// };
//
// const findAllergies2 = function(score){
//   let allergyList = [];
//
//   Object.keys(scorecard).forEach(function(key){
//     console.log('old score', score);
//
//     if(score % scorecard[key] < score) {
//       allergyList.push(key);
//       score = score % scorecard[key];
//       console.log('new score', score);
//     }
//
//   });
//
//   if(allergyList.length > 0){
//     console.log('Allergies:', allergyList.join(', '));
//   } else {
//     console.log('No allergies');
//   }
// }
//
// findAllergies2(34);


// Jin's answer with recursion
// let list = [];
//     const scorecard = {
//         7: "cats",
//         6: "pollen",
//         5: "chocolate",
//         4: "tomatoes",
//         3: "strawberries",
//         2: "shellfish",
//         1: "peanuts",
//         0: "eggs",
//     };
//     let m = 7;
//     const calcAllergies = function(score) {
//         if (m >= 0){
//             if (m >= 0 && score >= 2**m) {
//                 score -= 2 ** m;
//                 console.log(`The person is allergic to ${scorecard[m]}.`);
//                 list.push(scorecard[m]);
//             }
//         m -= 1;
//         calcAllergies(score)}
//     }
//     calcAllergies(34)
//     console.log(list);


























// const scorecard = {
//   "cats": 128,
//   "pollen": 64,
//   "chocolate": 32,
//   "tomatoes": 16,
//   "strawberries": 8,
//   "shellfish": 4,
//   "peanuts": 2,
//   "eggs": 1
// };
