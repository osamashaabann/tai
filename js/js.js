$(document).ready(function(){
    // Adding The sticky Class to The Header Sticky Clone
    let $header = $("header");
    let $sticky = $header.before($header.clone()).addClass("sticky");

    // Scroll function to add Our Class
    $(window).on("scroll" , function(){
        let $windowScrolly =  $(window).scrollTop();
        $("body").toggleClass("scroll" , ($windowScrolly > 250));
    });

    // Carousel
    $('#carouselFade').carousel();

    
    // Slick Slider
    $(".slider").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrow: false,
    centerMode: true,


        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 3
                }
            },

            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }

        ]
    });


    $('.counter').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 1500,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
   
    

    
    
});