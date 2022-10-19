$(document).ready(function(){
  $("#button").click (function(){
    $("#events").hide();
  });
  $('#carouselMain').carousel({
    interval: 3000
  });
  $("#carouselMain").swiperight(function() {
    $(this).carousel('prev');
  });
 $("#carouselMain").swipeleft(function() {
    $(this).carousel('next');
 });
});
