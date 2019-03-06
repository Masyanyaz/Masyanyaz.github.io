$(function() {

$('.anchor a').click(function(e) {
        var anch = $(this);
        $('html').animate({
            scrollTop: $(anch.attr('href')).offset().top
        }, 800);
        e.preventDefault();
        return false;
    });

});