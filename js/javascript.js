
$(document).ready(function(){
  // Add smooth scrolling to all links in navbar + footer link
  $(".navbar a, footer a[href='#myPage']").on('click', function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 900, function(){

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  });

  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
      if (pos < winTop + 600) {
        $(this).addClass("slide");
      }
    });
  });
})


$('.grid').masonry({
  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
  columnWidth: '.grid-sizer',
  percentPosition: true
});





$(document).ready(function(){
  $('.bxslider').bxSlider({
    speed:600,
    auto: true,
    controls: true,
    pager: false

  });
});



$(function() {
    $( "input[type=submit], a, button" )
      .button()
      .click(function( event ) {
        event.preventDefault();
      });
  });


function init_map1() {
  var myLocation = new google.maps.LatLng(48.868829, 2.337601);
    mapOptions = {
    center: myLocation,
    zoom: 16
  };
  var marker = new google.maps.Marker({
    position: myLocation,
    title: "IESA Multimedia"
  });
  var map = new google.maps.Map(document.getElementById("map1"), mapOptions);
  marker.setMap(map);
}
