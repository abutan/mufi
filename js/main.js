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