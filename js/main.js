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
        lazyLoad: 'ondemand',
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