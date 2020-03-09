(function ($) {
    $(document).ready(function () {
        let button = $('.expand-menu');
        button.click(function (e) {
            e.preventDefault();
            $('.header-menu').toggle();
        })
    })
})(jQuery);

(function ($) {
    $(document).ready(function () {
        $('#sert-popup').fancybox();
    });
})(jQuery);

(function ($) {
    $('.reviews-slider').slick({
        accessibility: true,
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})(jQuery);

(function ($) {
    let modal = $('#backcall-modal');
    let form = modal.find('form');
    let submit = modal.find('button[type="submit"]');
    submit.click(function () {
        form.submit();
        modal.hide();
    })
})(jQuery);

(function ($) {
    let modal = $('#faq-modal');
    let form = modal.find('form');
    let submit = modal.find('button[type="submit"]');
    submit.click(function () {
        form.submit();
        modal.hide();
    })
})(jQuery);

(function ($) {
    $('.phone-field').inputmask('+7(999) 999 99 99')
})(jQuery);

(function ($) {
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).siblings().find('.pre-img').css('background', 'url("./images/default/arrow_top.png") no-repeat center 3px');
    })
})(jQuery);

(function ($) {
    $('.collapse').on('hidden.bs.collapse', function () {
        $(this).siblings().find('.pre-img').css('background', 'url("./images/default/arrow_down.png") no-repeat center 3px');
    })
})(jQuery);