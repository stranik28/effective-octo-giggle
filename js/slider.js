let $status = $('.pagingInfo');
let $slickElement = $('.reviews_slider');

$(document).ready(function(){
    $('.reviews_slider').slick({

    });
    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        let i = (currentSlide ? currentSlide : 0) + 1;
        if(i < 10) {
            $status.text('0' + i + '/' + 12); //slick.slideCount
        }
        else {
            $status.text(i + '/' + 12); //slick.slideCount
        }
    });

    $slickElement.slick({
        autoplay: true,
        //dots: true
    });
});

