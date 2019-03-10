$(function() {

$('.anchor a').click(function(e) {
    var anch = $(this);
    $('html').animate({
        scrollTop: $(anch.attr('href')).offset().top
    }, 800);
    e.preventDefault();
    return false;
});


var j = 0;
var f = function () {
	let x = $('.control a').length;
	$('.slider li').removeClass('slider__active').eq(j).addClass('slider__active');
	$('.control a').removeClass('control__active').eq(j).addClass('control__active');
	j++;
	if (j < x) {
		setTimeout(f, 4000);
	} else {
		j = 0;
		setTimeout(f, 4000);
	}
}

f();

$('.control a').click(function() {
	let i = $(this).parent().index();
	if ($(this).hasClass('control__active')) {
		return false;
	} else {
		$('.slider li').removeClass('slider__active').eq(i).addClass('slider__active');
		$('.control a').removeClass('control__active').eq(i).addClass('control__active');
	}
});

});