
const searchForm= document.querySelector('form')


searchForm.addEventListener('submit', function (event) {
  event.preventDefault();
  search = document.getElementById('search').value

  const xhr = new XMLHttpRequest();

    xhr.open('GET', `https://www.googleapis.com/books/v1/volumes?q=${search}`);

    xhr.send();


    // make sure you undestand this!!!! The return exits the function until ready state is 4. When it is 4 the code inside the onreadystatechange function starts to run
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4){
        return; // too soon for complete data. sometimes readyState 3 isn't complete. 4 is complete
      }
      const data = JSON.parse(xhr.responseText); //turns JSON into object
      const image = data.items[0].volumeInfo.imageLinks.thumbnail;

      const img = document.createElement('img');
      const h2 = document.createElement('h2');
      const book = document.createElement('div');
      book.setAttribute("class", "book");
      img.setAttribute("src", `${image}`);
      h2.innerHTML = data.items[0]["volumeInfo"]["title"];
      const booksDiv = document.getElementById('books');
      booksDiv.appendChild(book);
      book.appendChild(h2);
      book.appendChild(img);

    };
});


// findBook("Jaws");
