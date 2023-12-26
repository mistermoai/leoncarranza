// $(document).ready(function(){
//   $("nav").delay("fast").animate({height: "0px"});
//     $("nav").delay("fast").animate({opacity: "0"});
//     $("main").removeClass('hidden');
//     $("footer").removeClass('hidden');
//     $(".maincontent").removeClass('hidden');
//     $("nav").addClass('hidden');
// });

$("#hamburger").click(function() {
  console.log("test");

  if ($("nav").hasClass('hidden')) {
    $(".maincontent").delay(.0000005).animate({opacity: "0"}); 
    $(".maincontent").addClass('hidden');
    $("nav").fadeIn();
    $("nav").animate({height: "50%"});
    $("nav").stop(true, true).delay(.005).animate({opacity: "1"});
    $("nav").removeClass('hidden');

  } else {
    $("nav").animate({height: "0px"});
    $("nav").delay(.005).animate({opacity: "0"});
    $("main").removeClass('hidden');
    $("footer").removeClass('hidden');
    $(".maincontent").removeClass('hidden');
    $(".maincontent").delay(.00000005).animate({opacity: "1"});
    $("nav").addClass('hidden');
  }

});
