
$(document).ready(function () {
    $(".service-slider").slick({

        // normal options...
        infinite: false,
        centerMode: true,
        nextArrow: false,
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        autoplay: false,

    });
    $(".inner-slider").slick({

        // normal options...
        infinite: false,
        slidesToScroll: 1,
        slidesToShow: 3,
        nextArrow: false,
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        autoplay: true,

    });
});