// Making a Video Player in jQuery
// In this exercise, you will use jQuery instead of the DOM API to create the same list of links you made in Exercise 1.
//
// Start with your own solution from Exercise 1.
//
// First, download the jQuery library from jquery.com and save it into the same directory as your exercise files. Then, add a <script> tag to the page which loads in the jQuery library you just downloaded. The script tag will look something like this:
//   <script type="text/javascript" src="PUT THE FILENAME HERE"></script>
// Next, replace the existing code with jQuery - any DOM manipulation can be done with jQuery instead. If you're not sure how to do something with jQuery, google for "X with jQuery" and you will likely find the jQuery docs or StackOverflow questions.
//
// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

// const links = document.querySelectorAll('li a');
//
//
// for (var i = 0; i < links.length; i++) {
//   const link = links[i];
//   const href = link.getAttribute('href');
//   const thumbnailURL = youtube.generateThumbnailUrl(href);
//
//   const image = document.createElement('img'); // detached DOM node
//   image.setAttribute('src', thumbnailURL);
//   link.appendChild(image);
//   console.log(image);
// }

const links = $('li a');
for (var i = 0; i < $links.length; i++) {
  const link = $links[i];
  const $link = $links[i];
  const href = $link.attr('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);
  const $image = $('<img>');
  $image.attr('src', thumbnailURL);
  $link.append($image);
}


// $('li a').each(function() {
//   $(this).prepend(
//     $('<img>').attr('src', youtube.generateThumbnailUrl($(this).attr('href')))
//   );
// });




// Start with your code from the jQuery workshop.
//
// In the body of your HTML, create a <div> to hold the video player, either below or to the side of the list, and give it an id.
// In the script tag that you were working in before, create a thumbnailify() function that takes a single argument.
// Move the code that is currently inside your for loop into that thumbnailify() function.
// Change the contents of your function so that it uses a single argument, which is a jQuery object that represents an <a>, rather than an array of elements.
// Move the for loop so that it occurs after you define thumbnailify()
// Call thumbnailify() from inside your for loop.
// Make sure your player first works like it did before. Hint: you should only reference an array index from inside of the for loop.
// Now, in the thumbnailify() function, add a click listener to the link. We recommend using an anonymous function for the callback (not a named function). Put a console.log inside the callback to make sure it works.
// In the click listener callback, you will be using the "create and store, manipulate, inject" pattern to display an embedded video in the DIV you created.
// To find out what the code for an embedded Youtube video looks like, go to Youtube.com and find any embed code for a video.
// You can use youtube.generateEmbedUrl() from the youtube.js library to generate an embed URL.
// Use string concatenation, .html(), or other jQuery method of your choice to assemble and insert the embedded video element.
// Check your work! Try all your video links. Is there anything you need to change?
// As a bonus, try to make the video watcher <div> fade in using jQuery.
// Make sure that you use your browser developer tools to make debugging easier while working on this. Check for errors, and use console.log() to figure out how far your code makes it, and what the values of your variables are along the way.

const thumbnailify = function(link) {

}