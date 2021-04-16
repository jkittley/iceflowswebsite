$(document).ready(function(){
  $(".scroller").click(function(e) {
    e.preventDefault();
    var dest = $(e.target).attr('href');
    if (dest !== null && dest !== undefined) {
      $('html, body').animate({
          scrollTop: $(dest).offset().top
      }, 1000);
    }
  });

  $('.dropdown-sci').click(function(e) {
    $('.dropdown-sci-title').html($(this).html());
  });

  // Manage the two chars lists
  $('#chars #pills-tab-bottom .nav-link').click(function(e) {
    $('#chars #pills-tab-top a').removeClass('active');
  });
  $('#chars #pills-tab-top .nav-link').click(function(e) {
    $('#chars #pills-tab-bottom a').removeClass('active');
  });

});