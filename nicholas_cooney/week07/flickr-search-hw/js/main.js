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
      '_q.jpeg' //can be changed to something else for different sizes. check docs
    ].join('');
  };
  _(results.photos.photo).each(function (photo) {
    const thumbnailURL = generateURL( photo );
    // const $img = $('<img>').attr('src', thumbnailURL)
    const $img = $('<img>', {src: thumbnailURL}); // same as line above
    $img.appendTo('#images');

  })
};
  let firstPage = 1;
  let page = 1;
  let nextPage = 0;
const searchFlickr = function (terms) {
  const flickrURL = 'http://api.flickr.com/services/rest?jsoncallback=?';
    p = firstPage;
  $.getJSON(flickrURL, {
    method: 'flickr.photos.search',
    api_key: '2f5ac274ecfac5a455f38745704ad084', // This is not a secret key
    text: terms,
    format: 'json',
    page: p
  }).done(showImages);
  let nextPage = firstPage += page;
    p = nextPage;
    // console.log(nextPage);
    // console.log(nextPage);


};


$(document).ready(function() {

  $('#search').on('submit', function (event) {
    event.preventDefault();
    $('#images').empty(); //empties the div for new search items
    // get search Terms
    const query = $('#query').val();
    //fetch images from api
    searchFlickr( query );
  });

  const limit = _.throttle(searchFlickr, 5000);
  $(window).on('scroll', function () {
    // console.log('scrolltop', $(window).scrollTop());
    // console.log('window height', $(window).height());
    // console.log('document height', $(document).height());

    const scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      if (scrollBottom < 650 ) {
        // get query
        const query = $('#query').val();
        limit(query);
        //load new images

      }
  });

});


//don't make requests if there are no more images
//only load 100 more images
