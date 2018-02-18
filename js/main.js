// Callback függvény fade után.

function fadeDone() {
    console.log(this);
}

// Eseménykezelő beállítása
$("p").click(function(){
    $(this).hide();
    //$(this).fadeTo(2000,1,fadeDone);
    //$(this).slideDown(1500);
});

// Esemény kiváltása
// $("p").click();

// Kattintás megelőzése.
/*
$("nav a.nav-link").click(function(ev) {
    event.preventDefault();
    var link = $(this);
    var prop = link.data("prop") || "opacity";
    var val = link.data("value") || "0";
    var speed = link.data("speed") || 1000;
    var settings = {};
    settings [prop] = val;

    $(document.body).animate(settings, speed, function() {
        document.location = link.attr("href");
    })
});

*/

// Events olda

$(".events-search-row input").on("keyup", function(ev) {
    $.each( $(".events-card-deck .card .card-title"), function(index, elem)   {
        var elem = $(elem);
        var search = ev.target.value.toLowerCase();
        var content = elem.html().toLowerCase();
        if ( content.indexOf(search) == -1 ) {
          elem.parents(".card").hide();
        } else {
          elem.parents(".card").show();
        }
      });
    });

// Ticket oldal

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});