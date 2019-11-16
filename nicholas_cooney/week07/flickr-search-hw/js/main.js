// let currentPage = 1;
// let totalPages = 1;
//global variables
const state = {
  currentPage: 1,
  totalPages: 1
};

const showImages = function(results) {
  //Nested Helper function
  console.log(results);

  const generateURL = function (p) {
    return [
      'http://farm',
      p.farm,
      '.static.flickr.com/',
      p.server,
      '/',
      p.id,
      '_',
      p.secret,
      '_c.jpeg' //can be changed to something else for different sizes. check docs
    ].join('');
  };
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL( photo );
    // const $img = $('<img>').attr('src', thumbnailURL)
    const $img = $('<img>', {src: thumbnailURL}); // same as line above
    $img.appendTo('.images');

  })
};
  const searchFlickr = function (terms) {

    const flickrURL = 'http://api.flickr.com/services/rest?jsoncallback=?';

    $.getJSON(flickrURL, {
      method: 'flickr.photos.search',
      api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
      text: terms,
      format: 'json',
      page: state.currentPage
    }).done(showImages).done(function(result){
        state.totalPages = result.photos.pages;
        console.log(state.totalPages)
        state.currentPage ++;
      });


};

$(document).ready(function() {

  $('#search').on('submit', function (event) {
    event.preventDefault();
    const query = $('#query').val();
    state.currentPage = 1;
    $('.images').empty(); //empties the div for new search items
    // get search Terms
    //fetch images from api
    searchFlickr( query );
  });

let lastScrollBottom = 0;
  const limit = _.throttle(searchFlickr, 5000);
  $(window).on('scroll', function () {
    // console.log('scrolltop', $(window).scrollTop());
    // console.log('window height', $(window).height());
    // console.log('document height', $(document).height());

    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      if ( scrollBottom < 650 && state.totalPages > 1) {
        // get query
        const query = $('#query').val();
        limit(query);
        //load new images

      }
  });

  $('#four').on('click', function () {

    $('.images').toggleClass('images2');
  });


});


//don't make requests if there are no more images
//only load 100 more images
