$("#hamburger").click(function() {
  console.log("test");

  if ($("nav").hasClass('hidden')) {
    $("nav").removeClass('hidden');
    console.log("showed")

  } else {
    $("nav").addClass('hidden');
    console.log("hidden")
  }

});
