$("#entry1").click(function() {
  if ($("#furniture3d").hasClass("hidden")) {
    $("#furniture3d").removeClass('hidden');
} else {
  $("#furniture3d").addClass('hidden');
}
});

$("#entry2").click(function() {
  if ($("#buildingassembly3d").hasClass("hidden")) {
    $("#buildingassembly3d").removeClass('hidden');
} else {
  $("#buildingassembly3d").addClass('hidden');
}
});

$("#entry3").click(function() {
  if ($("#cltlines").hasClass("hidden")) {
    $("#cltlines").removeClass('hidden');
} else {
  $("#cltlines").addClass('hidden');
}
});
