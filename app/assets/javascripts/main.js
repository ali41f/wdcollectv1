$(function(){

  $('#masonry-container').masonry({
    itemSelector: '.box',
    columnWidth: 400,
    gutterWidth: 40,
    isFitWidth: true
  });

  $(".box:not(.ar-form-box)").click(function(){
    $collecttext = $(this).find('p.collect-data').text();
    $('.ar-modal').text($collecttext);
    $('.modal-overlay').fadeIn();
    $('.ar-icon').click(function(){
      $('.modal-overlay').fadeOut();
    });
  });


  //$(document).on "turbolinks:load"
  $(document).on('turbolinks:load', function() {

    $(".box:not(.ar-form-box)").click(function(){
      $collecttext = $(this).find('p.collect-data').text();
      $('.ar-modal').text($collecttext);
      $('.modal-overlay').fadeIn();
      $('.ar-icon').click(function(){
        $('.modal-overlay').fadeOut();
      });
    });
    $('#masonry-container').masonry({
      itemSelector: '.box',
      columnWidth: 400,
      gutterWidth: 40,
      isFitWidth: true
    });

  });
});
