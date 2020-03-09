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

(function () {
    document.addEventListener('DOMContentLoaded', function () {
        let calendarEl = document.getElementById('calendar');

        let calendar = new FullCalendar.Calendar(calendarEl, {
            locale: 'ru',
            plugins: ['interaction', 'dayGrid', 'timeGrid'],
            defaultView: 'dayGridMonth',
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
            },
            events: [
                {
                    title: 'Занятия йогой',
                    start: '2020-02-01'
                },
                {
                    title: 'Заниятия фитнесом',
                    start: '2020-02-07',
                    end: '2020-02-10'
                },
                {
                    groupId: '999',
                    title: 'Занятия бизнес фитнесом',
                    start: '2020-02-09T16:00:00'
                },
                {
                    groupId: '999',
                    title: 'Занятия бизнес фитнесом',
                    start: '2020-02-16T16:00:00'
                },
                {
                    title: 'Консалтинг по консалтингу',
                    start: '2020-02-11',
                    end: '2020-02-13'
                },
                {
                    title: 'Встреча с преподователями',
                    start: '2020-02-12T10:30:00',
                    end: '2020-02-12T12:30:00'
                },
                {
                    title: 'Бассейн',
                    start: '2020-02-12T12:00:00'
                },
                {
                    title: 'Митинг благодарных пользователеей',
                    start: '2020-02-12T14:30:00'
                },
                {
                    title: 'Праздник годовщины',
                    start: '2020-02-13T07:00:00'
                },
                {
                    title: 'Смотрим что то',
                    url: 'http://google.com/',
                    start: '2020-02-28'
                }
            ]
        });

        calendar.setOption('locale', 'ru');

        calendar.render();
    });
})();