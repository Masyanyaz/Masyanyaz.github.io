$(function() {

    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 777);
        e.preventDefault();
        return false;
    });

    $('.toggle-btn').click(function() {
        let i = $(this);
        if (i.hasClass('toggle-active')) {
            return false;
        } else {
            $('.toggle-btn').toggleClass('toggle-active');
            $('.toggle-row').toggleClass('active');
            $('.toggle-row').toggleClass('hidden');
        }
    });

});