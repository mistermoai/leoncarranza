// WIL
$(document).on('keydown', function(event) {
  if (event.key == "Escape") {
    $("modal1").fadeOut();
    $("#modal1").delay("2").addClass("hidden");
    $("modal1").delay(.005).animate({opacity: "0"});
    $("div.modalhide").removeClass("hidden");
  }
});

$('body').click((event) => {
  if (event.target.id !== 'modal1') {
    console.log('clicked in modal');
  } else {
    console.log('clicked out of modal');
    $("modal1").fadeOut();
    $("#modal1").delay("2").addClass("hidden");
    $("modal1").delay(.005).animate({opacity: "0"});
    $("div.modalhide").removeClass("hidden");
  }
});  

$("#gtgvsmullet").click(function() {
  console.log("item click");
  $("#modal1").removeClass("hidden");
  $("div.modalhide").addClass("hidden");
});

$("span.close").click(function() {
  console.log("item click");
  $("#modal1").addClass("hidden");
  $("div.modalhide").removeClass("hidden");
});
// WIL