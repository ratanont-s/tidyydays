$(function () {
    'use strict'

    // Offcanvas
    $('[data-toggle="offcanvas"]').on('click', function () {
      $('.offcanvas-collapse').toggleClass('open')
    })

    // Banner
    $("#banner .banner").slick({
        arrows: false,
        dots: true,
    });

    // Slider
    $(".slider").slick({
        arrows: false,
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
            }

        }, {

            breakpoint: 576,
            settings: {
                rows: 1,
                slidesPerRow: 1,
            }
        }]
    });
});