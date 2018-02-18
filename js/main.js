// Callback függvény fade után.
function fadeDone() {
    console.log(this);
}

// Eseménykezelő beállítása
$("p").click(function(){
    $(this).hide();
    //$(this).fadeTo(2000,1,fadeDone);
    $(this).slideDown(1500);
});

// Esemény kiváltása
$("p").click();

// Kattintás megelőzése.
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