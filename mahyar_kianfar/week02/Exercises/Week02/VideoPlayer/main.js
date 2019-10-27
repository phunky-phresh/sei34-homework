// Step by Step:
//   Create an array of every link on the page using document.querySelectorAll(cssSelector)
//
// Iterate through the array.In each iteration of the loop:
//
//   Find the current href using element.getAttribute(name), and store into a variable
// Generate a thumbnail URL using youtube.generateThumbnailUrl(videoUrl)
// Create an IMG element using document.createElement(tagName)
// Set the "src" of the IMG element using element.setAttribute(name, value)
// Append the IMG to the link using element.appendChild(element)
// Quick Tip: If you need a refresher on the DOM API, check out slides 1 - 12 from the DOM Review here


const links = document.querySelectorAll('li a');


for (var i = 0; i < links.length; i++) {
  const link = links[i];
  const href = link.getAttribute('href');
  const thumbnailURL = youtube.generateThumbnailUrl(href);

  const image = document.createElement('img'); // detached DOM node
  image.setAttribute('src', thumbnailURL);
  link.appendChild(image);
  console.log(image);
}

//const href = element.getAttribute(name)