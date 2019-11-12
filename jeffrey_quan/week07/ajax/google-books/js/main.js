console.log('Working!')


const fetchInfo = function () {

  document.getElementsByClassName("result")[0].innerHTML = "";

  const xhr = new XMLHttpRequest();

  book_title = document.getElementsByClassName("book")[0].value
  url = "https://www.googleapis.com/books/v1/volumes?q=title:" + book_title

  xhr.open('GET', url)

  xhr.send()

  xhr.onreadystatechange = function () {
    if (xhr.readyState !== 4 ) {
      return;
    }

    const data = JSON.parse(xhr.responseText);

    if (data["totalItems"] === 0) {

      document.getElementsByClassName("result")[0].innerHTML = "No results were found."

    } else {

      const length = data["items"].length;

      for (let i = 0; i < length; i++) {
        title = data["items"][i]["volumeInfo"]["title"];
        thumbnail = data["items"][i]["volumeInfo"]["imageLinks"]["thumbnail"]
        author = data["items"][i]["volumeInfo"]["authors"]
        description = data["items"][i]["volumeInfo"]["description"]

        const result = document.getElementsByClassName("result")[0];

        const searchResult = document.createElement('div');
        searchResult.className = "search-result"
        result.appendChild(searchResult);

        const image = document.createElement('img');
        image.src = thumbnail;
        searchResult.appendChild(image);

        const info = document.createElement('div');
        info.className = "book-info";
        searchResult.appendChild(info);

        const authorName = document.createElement('p');
        authorName.innerHTML = `Author: ${ author }`;
        info.appendChild(authorName);

        const bookDescription = document.createElement('div');
        bookDescription.className = "book-desc"
        bookDescription.innerHTML = description;
        info.appendChild(bookDescription);
      }
    }
  };
};

document.getElementById('fetch').addEventListener('click', fetchInfo)

// "https://www.googleapis.com/books/v1/volumes?q=title:"
