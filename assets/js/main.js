$(function () {
    'use strict'

    var width = window.innerWidth;
    if (width < 992) {
        $('.offcanvas-collapse .nav-link').on('click', function () {
            $('.offcanvas-collapse').toggleClass('open')
        });
    }

    // Offcanvas
    $('[data-toggle="offcanvas"]').on('click', function () {
        $('.offcanvas-collapse').toggleClass('open')
    });


    // Banner
    $("#banner .banner").slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 1000,
    });

    // Slider
    $("#works .works").slick({
        arrows: true,
        rows: 2,
        slidesPerRow: 3,
        // the magic
        responsive: [{

            breakpoint: 992,
            settings: {
                rows: 2,
                slidesPerRow: 2,
            }

        }, {

            breakpoint: 768,
            settings: {
                rows: 1,
                slidesPerRow: 2,
                arrows: false,
                centerMode: true,
            }

        }, {

            breakpoint: 576,
            settings: {
                rows: 1,
                slidesPerRow: 1,
                arrows: false,
                centerMode: true
            }
        }]
    });

    $('#services1 .nav-next').click(function () {
        $('#services1 .nav .active').parent().next('li').find('a').trigger('click');
    });

    $('#services1 .nav-prev').click(function () {
        $('#services1 .nav .active').parent().prev('li').find('a').trigger('click');
    });

    $('#services3 .nav-next').click(function () {
        $('#services3 .nav .active').parent().next('li').find('a').trigger('click');
    });

    $('#services3 .nav-prev').click(function () {
        $('#services3 .nav .active').parent().prev('li').find('a').trigger('click');
    });
});

var scroll = new SmoothScroll('a[href*="#"]', {
    header: '[data-scroll-header]'
});