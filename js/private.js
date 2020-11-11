$(document).ready(function() {
    if ($('.back-top').length) {
        var scrollTrigger = 300,
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-top').addClass('show');

                } else {
                    $('.back-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });

        $('.back-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }
})

$(document).ready(function(){
   $(window).bind('scroll', function() {
   var navHeight = $( window ).height() - 70;
         if ($(window).scrollTop() > 1) {
             $('.header-menu, main').addClass('fix-menu');
         }
         else {
             $('.header-menu, main').removeClass('fix-menu');
         }
    });
}); 

$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
}); 


$('.slide-part').slick({
    autoplay: false,
    arrow: false,
    dots: false,
    slidesToShow: 6,
    slidesToScroll: 2, 
    prevArrow: '',
    nextArrow: '',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
}); 


$('.list-proj').slick({
    autoplay: false,
    arrow: true,
    dots: false, 
    slidesToShow: 5,
    slidesToScroll: 2, 
    infinite: false,
    prevArrow: '<button class="prev"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="next"><i class="fa fa-angle-right"></i></button>',
    responsive: [
        {
            breakpoint: 767, 
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            }
        }
    ]
}); 

new WOW().init();


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
});