// Specification

// Build a search form that lets the user enter a book title. The Sinatra app will use HTTParty to fetch the data for the chosen book from Google Books and display it on the page. Display the cover, as a bare minimum.

// Sample URL

// https://www.googleapis.com/books/v1/volumes?q=title:Ulysses

const xhr = new XMLHttpRequest();


let run = function() {
    let input = $('#search-box').val();

    xhr.open("GET", `https://www.googleapis.com/books/v1/volumes?q=title:${input}`);
    xhr.send();

    xhr.onreadystatechange = function() {
    console.log(xhr.readyState)
    if (xhr.readyState === 4) {
        console.log('4')
    }
}

    $('#search-box').val('')
}

