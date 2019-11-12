$(document).ready(function() {

  const find = function () {
    let search = $('#input').val()
    $('.results').empty();
    const url = `https://rickandmortyapi.com/api/character/?name=${search}`;
    $.ajax(url).done( function (data) {
      let loop = data.results

      loop.forEach( function(i) {
        let name = i.name;
        let image = i.image
        console.log(data);

        $('.results').append(`<div class="character"><img src="${image}"><p>${name}</p>`);

      })

    });

  };

$('button').on('click', find);
})
