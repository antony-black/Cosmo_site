$(function(){

    $('.slider__box').slick({

      prevArrow:'<button type="button" class="slider-arrow arrow-left"><img src="img/slider/arrow-left.svg" alt="arrow-left"></button>',
      nextArrow:'<button type="button" class="slider-arrow arrow-right"><img src="img/slider/arrow-right.svg" alt="arrow-right"></button>'

    })


    $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
    });

    $('.slider__item-inner').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1] // Will preload 0 - before current, and 1 after the current image
      }
    });


});