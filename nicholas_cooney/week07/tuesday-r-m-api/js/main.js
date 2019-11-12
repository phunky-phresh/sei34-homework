$(document).ready(function() {

  const find = function () {
    let search = $('#input').val()
    $('.results').empty();
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
    $.ajax(url).done( function (data) {
      let loop = data.results

      loop.forEach( function(i) {
        let name = i.name;
        let status = i.status;
        let species = i.species;
        let image = i.image;
        console.log(data);

        $('.results').append(`<div class="card"><div class="character"><div class="image"><img src="${image}"><div class="stats"><div><h3>Name:</h3><p>${name}</p></div><div id="mid"><h3>Status:</h3><p>${status}</p></div><div><h3>Species:</h3><p>${species}</p></div>`);

      })

    });

  };

$('button').on('click', find);
})
