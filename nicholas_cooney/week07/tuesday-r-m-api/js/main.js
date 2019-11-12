$(document).ready(function() {

  const find = function () {
    let search = $('#input').val()
    $('.results').empty();
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
    $.ajax(url).done( function (data) {
      let loop = data.results
      let next = data.info.next
      loop.forEach( function(i) {
        let name = i.name;
        let status = i.status;
        let species = i.species;
        let image = i.image;
        // console.log(data);


        $('.results').append(`<div class="card"><div class="character"><div class="image"><img src="${image}"><div class="stats"><div><h3 id ="name">${name}</h3></div><div id="mid"><span>Status:</span><p>${status}</p></div><div><span>Species:</span><p>${species}</p></div>`);

      })
      $('.pages').append(`<a id="page" href="${next}">Next Page</a>`)

    });

  };

$('button').on('click', find);

  const next = function() {
    
  }

$('.page').on('click', next)
})
