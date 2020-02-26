$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
            e.preventDefault();

            var target = $(this).attr("href");
            var targetOffset = $(target).offset().top-50;

            $('html, body').stop().animate({scrollTop: targetOffset}, 1000, function() {
                    location.hash = target;
            });

            return false;
    });
});