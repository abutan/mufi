(function ($) {
    $(document).ready(function () {
        let button = $('.expand-menu');
        let menu = $('.header-menu');
        let flag = false;
        button.click(function (e) {
            if (flag === false) {
                menu.fadeIn(700);
                flag = true;
                if($(window).width()>769){
                    $('.navbar .dropdown').hover(function() {
                        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();
                    }, function() {
                        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();
                    });

                    $('.navbar .dropdown > a').click(function(){
                        location.href = this.href;
                    });
                }
            } else {
                menu.fadeOut(700);
                flag = false;
            }
            e.stopPropagation();
        });

        $(document).click(function (e) {
            if (flag === true) {
                menu.fadeOut(700);
                flag = false;
            }
            e.stopPropagation();
        });
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
    let modal = $('#enter-modal');
    let form = modal.find('form');
    let submit = modal.find('button[type="submit"]');
    submit.click(function () {
        form.submit();
        modal.hide();
    })
})(jQuery);

(function ($) {
    let modal = $('#review-modal');
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

(function ($) {

    if($(window).width()>769){
        $('.nav .dropdown').hover(function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

        }, function() {
            $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

        });

        $('.nav .dropdown > a').click(function(){
            location.href = this.href;
        });
    }
})(jQuery);

(function ($) {
    $(document).ready(function () {
        let menu = $('.aside-menu').find('nav');
        let par = menu.find('.nav-link');
        let drop = menu.find('.dropdown-item');

        if (menu.is(':visible')) {
            if (sessionStorage.getItem('trace') !== null) {
                let text = sessionStorage.getItem('trace').toString();
                menu.find('a:contains(' + text + ')').addClass('active-trace');
            }

            if (sessionStorage.getItem('active') !== null) {
                console.log(sessionStorage.getItem('active'));
                let text = sessionStorage.getItem('active').toString();
                let link = menu.find('a:contains(' + text + ')');
                link.addClass('active');
                link.parent().parent().find('a').addClass('active-trace');
                link.parent().css('display', 'block');
            }
            sessionStorage.clear();
        }

        par.click(function (e) {
            sessionStorage.clear();
            sessionStorage.setItem('trace', $(this).text());
            e.stopPropagation();
        });

        drop.click(function (e) {
            sessionStorage.clear();
            // let parent = $(this).parent().parent().find('a');
            sessionStorage.setItem('active', $(this).text());
            // sessionStorage.setItem('trace', parent.text());
            e.stopPropagation();
        });
    });
})(jQuery);