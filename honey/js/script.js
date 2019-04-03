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
            console.log('asd')
        } else {
            $('.toggle-btn').removeClass('toggle-active').eq(i).addClass('slider__active');
        }
    });

});