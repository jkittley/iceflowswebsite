$(document).ready(function(){
  
  videoLightning({
    elements: [
      {
        ".video-link": {
          id: "y-x3d3GZNwXrE",
          autoplay: true,
          color: "black",
          bdColor: "#000000"
        }
      }
    ]
  });

  $(".scroller").click(function(e) {
    e.preventDefault();
    var dest = $(e.target).attr('href');
    if (dest !== null && dest !== undefined) {
      $('html, body').animate({
          scrollTop: $(dest).offset().top
      }, 1000);
    }
  });

  $('.stop-youtube').click(function(){
    console.log("Stop all videos");
    $('.youtube-video').each(function(){
      $(this).attr("src", $(this).attr("src"));
    });
  });

});