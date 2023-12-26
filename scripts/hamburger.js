$("#hamburger").click(function() {
  console.log("test");

  if ($("nav").hasClass('hidden')) {
    $("nav").removeClass('hidden');
    $("nav").fadeIn();
    $(".maincontent").fadeOut();

  } else {
    $("nav").addClass('hidden');
    $("main").removeClass('hidden');
    $("footer").removeClass('hidden');
    $(".maincontent").fadeIn();
  }

});
