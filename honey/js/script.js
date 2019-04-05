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

    $('.product-item_btn').click(function() {
        let i = $(this);
        if (i.hasClass('product-item_btn')) {
            let title = i.parent().find('.product-item_title').text();
            $('.more-info-title').text(title);

            let info = i.parent().find('.product-item-info-text').html();
            $('.more-info-text_div').html(info);

            let img = i.parent().find('.product-item-img').attr('src');
            $('.more-info-gallery-img').attr('src', img);

            let text = i.parent().find('.product-item_text').html();
            $('.more-info-price').html(text);

            $('.more').css("display", "block");
            console.log(img);

        } else {
            return false;
        }
    });

    $('.more-close').click(function() {
        $('.more').css("display", "none");

    });

    $(".submit").click(function() {
        var name = $('input[name=fio]').val();
        var tel = $('input[name=tel]').val();
        var otpravka = true;
        if(name==""){
            otpravka = false;
        }
        if(tel==""){
            otpravka = false;
        }
        if(otpravka)
        {
            dannie = {'polz_name':name, 'polz_tel':tel};
            $.post('senda.php', dannie, function(otvet){
                rezultat = '<div style="color:#D80018; margin-top: 15px; font-size: 17px;">'+otvet.text+'</div>';
                $(".form_result").hide().html(rezultat).slideDown();
            }, 'json');
        }
    });
    $(".submit1").click(function() {
        var name = $('input[name=fio1]').val();
        var tel = $('input[name=tel1]').val();
        var otpravka = true;
        if(name==""){
            otpravka = false;
        }
        if(tel==""){
            otpravka = false;
        }
        if(otpravka)
        {
            dannie = {'polz_name':name, 'polz_tel':tel};
            $.post('senda.php', dannie, function(otvet){
                rezultat = '<div style="color:#D80018; margin-top: 15px; font-size: 17px;">'+otvet.text+'</div>';
                $(".form_result1").hide().html(rezultat).slideDown();
            }, 'json');
        }
    });
});