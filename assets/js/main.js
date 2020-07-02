$(function () {
    // Slider
    $(".slider").slick({
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