




        $('#zoom').on('click', function() {
       $("#sidebar,#joinbutton").removeClass("col-12 show");
        $("#sidebar,#joinbutton").toggleClass("d-sm-block");
});

$('#zoommini').on('click', function() {
  $("#sidebar,#joinbutton").removeClass("d-none");
$("#sidebar,#joinbutton").addClass("col-12 lead mr-auto ml-auto");
});

$('#minisearch').on('click', function() {
$("#search").toggleClass("d-none col-12 p-0");
$("#searchinput").toggleClass("w-100");
});

$('.dropdown').hover(function() {
$(".dropdown-menu").toggleClass("show");
});
