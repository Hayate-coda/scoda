




        $('#zoom').on('click', function() {
       $("#sidebar,#joinbutton").removeClass("col-12 show");
        $("#sidebar,#joinbutton").toggleClass("d-sm-block");
});

$('#zoommini').on('click', function() {
  $("#sidebar").removeClass("d-none");
$("#sidebar").addClass("col-12 lead");

});

$('#minisearch').on('click', function() {
$("#search").toggleClass("d-none col-12 p-0");
$("#searchinput").toggleClass("w-100");
});
