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
    $(document.body).animate( {
        opacity: '0'
    }, 1000, function() {
        document.location = link.attr("href");
    })
});