// Exercises: Objects
//
// The Recipe Card
//
// Never forget another recipe!
//
// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

let recipeCard = {
  title: "Mole",
  servings: 2,
  ingredients: ["cinnamon", "cumin", "cocoa"],
}

console.log(recipeCard.title);
console.log(`Serves: ${recipeCard.servings}`);
console.log("Ingredients:");
// for (let i = 0; i < recipeCard.ingredients.length; i++) {
//   console.log(recipeCard.ingredients[i]);
// }
console.log(recipeCard.ingredients.join("\n")); //similar aspect to the above 3 lines

// The Reading List
//
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

let bookList = [{title:"Training the Uphill Athlete", author: "Scott Johnson", alreadyRead: true}, {title: "Night Without Stars", author: "Peter F Hamilton", alreadyRead: true}, {title: "Why We Climb", author: "Chris Noble", alreadyRead: false}];

for (let i = 0; i < bookList.length; i++) {
  if (bookList[i].alreadyRead) {
    console.log(`You have already read ${bookList[i].title} by ${bookList[i].author}.`);
  } else {
  console.log(`You still need to read ${bookList[i].title} by ${bookList[i].author}.`);
}
}

// The Movie Database
//
// It's like IMDB, but much much smaller!
//
// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

let dawnWallMovie = {
  title: "The Dawn Wall (2017)",
  duration: 100,
  stars: ["Tommy Caldwell", "Kevin Jorgeson", "John Branch"]
}

function printMovie (movie) {
  let output = `${movie.title} lasts for ${movie.duration} minutes. Stars:`;
  for (let i = 0; i < movie.stars.length; i++ ) {
    output += ` ${movie.stars[i]},`
  }
  output = output.slice(0,output.length-1); //remove the final comma
  output += "."; //add a final full stop
  return output;
}

// much simpler version using join()
function printMovie2 (movie) {
  let output = `${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.`;
  return output;
}

console.log(printMovie(dawnWallMovie));
console.log(printMovie2(dawnWallMovie));
