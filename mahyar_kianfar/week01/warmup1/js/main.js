/*Warmup - Raindrops
Write a Javascript program that will take a number (eg 28 or 1755 or 9, etc) and output the following:

If the number contains 3 as a factor, output 'Pling'.
If the number contains 5 as a factor, output 'Plang'.
If the number contains 7 as a factor, output 'Plong'.
If the number does not contain 3, 5, or 7 as a factor, output the number as a string.
Examples
28 has 7 as a factor.
In raindrop-speak, this would be a simple "Plong".
1755 has 3 and 5 as factors.
In raindrop-speak, this would be a "PlingPlang".
34 has neither 3, 5 nor 7 as a factor.
Raindrop-speak doesn't know what to make of that, so it just goes with the straightforward "34".*/

const raindrop = function(number){
  let string ="";
  if(number % 3 === 0){
    string += "Pling";
  };
  if(number % 5 === 0){
    string += "Plang";
  };

  if(number % 7 ===0){
    string  += "Plong";
  };

if(string.length === 0 ){
  string +=number;
};

  return string;

};
console.log('Raindrop speak for 28', raindrop(28));
console.log('Raindrop speak for 28', raindrop(1755));
console.log('Raindrop speak for 28', raindrop(105));
console.log('Raindrop speak for 28', raindrop(34));



// The Recipe Card
// Never forget another recipe!
//
// Create an object to hold information on your favorite
//recipe. It should have properties for title (a string),
//servings (a number), and ingredients (an array of strings).
//
// On separate lines (one console.log statement for each),
//log the recipe information so it looks like:
//
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

const favoriteRec ={
  name : "Mole",
  serves : 2,
  ingredients : ['cinnamon','cumin', 'cocoa' ]
};

console.log(favoriteRec.name);
console.log('Serves:', favoriteRec.serves);
console.log(favoriteRec.ingredients);
console.log('Recipe:', favoriteRec);
console.log(favoriteRec.ingredients.join(' , '));
console.log(favoriteRec.ingredients.join('\n'));
for (var i = 0; i < favoriteRec.ingredients.length; i++) {
  console.log(favoriteRec.ingredients[i]);
}
//
// The Reading List
// Keep track of which books you read and which books you want to read!
//
// Create an array of objects, where
//each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books.
//For each book, log the book title and book
//author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output
//depending on whether you read it yet or not. If you
//read it, log a string like 'You already
//read "The Hobbit" by J.R.R. Tolkien', and if not,
//log a string like 'You still need to read
//"The Lord of the Rings" by J.R.R. Tolkien.'

const library = [
  {title:'The Hobbit',author:'J.R.R. Tolkien', alreadyRead:true},
  {title:'The Lord Of The Rings', author:'J.R.R. Tolkien', alreadyRead:false},
  {title:'',author:'', alreadyRead:true}
];
for (var i = 0; i < library.length; i++) {
  const book = library[i];
  const bookInfo = `"${book.title}" by ${book.author}`;
  if (book.alreadyRead) {
    console.log(`You already read ${bookInfo}`);
  }else{
    console.log(`You still read ${bookInfo}`);
  }
  //console.log(book);
}

  // const readingList ={
  //    books : [title: "Persian Tom Cats", bookAuthor: "Samuel Jacson"];
  //    book1 = {title: 'The Hobbit', bookAuthor: 'J.R.R. Tolkien'}
  // }


  /*The Movie Database
It's like IMDB, but much much smaller!

Create an object to store the following
information about your favorite movie: title (a string),
duration (a number), and stars (an array of strings).
Create a function to print out the movie information like so:
"Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."*/
const myFavoriteMovies ={
  title: 'Kalla',
  duration: 108,
  stars: ['George Cloony', 'John Smith']
};

const movieInfo = function(movie){
  const info = `${movie.title} last for ${movie.duration} stars ${movie.stars.join(',')} `;
}
