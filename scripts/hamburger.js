$("#hamburger").click(function() {
  console.log("test");

  if ($("nav").hasClass('hidden')) {
    $("nav").removeClass('hidden');
    $(".maincontent").addClass('hidden');

  } else {
    $("nav").addClass('hidden');
    $("main").removeClass('hidden');
    $("footer").removeClass('hidden');
    $(".maincontent").removeClass('hidden');
  }

});
