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
});