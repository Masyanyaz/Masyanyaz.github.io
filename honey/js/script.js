$(function() {
    $("a[href*='#']").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 900);
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

    $('.reviews-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});