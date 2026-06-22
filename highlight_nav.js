$(document).ready(function() {
    setNavigation();
});

function setNavigation() {
    var path = $(location).attr('pathname');
    $("nav#main-nav a").each(function() {
        var href = $(this).attr('href');
        if (path == href) {
            $(this).addClass('active');
        }
    });
}