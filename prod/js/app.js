$(document).ready(function () {
  
  'use strict'
  
  // menu blackout
  $(window).scroll(function () {
    $('header').each(function () {
      var newScroll = $(window).scrollTop();
      var tempScroll = $(this).height() - newScroll;
      if (tempScroll < 0) tempScroll = 0;
      var tempOpacityBg = ((newScroll) / ($(window).height() / 3));
      $('.header_overlay').css('opacity', tempOpacityBg);
      var currentOpacityOverlay = ($('.header_overlay').css('opacity'));
      if (currentOpacityOverlay >= 0.95) {
        $('.header_overlay').css('opacity', '.95');
      }
    });
  });
  
  // sticky logo on index page
  if($('.main_logo').length){
    $(function () {
      var box = $('.main_logo');
      var top = box.offset().top + 14;
      $(window).scroll(function () {
        var windowpos = $(window).scrollTop();
        if (windowpos < top) {
          box.removeClass('sticky');
        }
        else {
          box.addClass('sticky');
        }
      });
    }); 
  }
  
  // sliders
  $('.main_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000    
  });
  
  var numSlides = $('.js-slider .reliquary_item').length;
  var numSlidesAbout = $('.js-slider .about_item').length;
console.log(numSlides);
console.log(numSlidesAbout);
  if(numSlides > 1 || numSlidesAbout > 1){
    $('.js-slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
      centerMode: true,
//      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
//      responsive: [
//        {
//          breakpoint: 1401,
//          settings: {
//            slidesToShow: 1,
//          }
//        },
//        {
//          breakpoint: 993,
//          settings: {
//            slidesToShow: 1
//          }
//        }
//      ]
    });
  }else{
    $('.js-slider .reliquary_item').addClass('slick-visible');
    $('.js-slider .about_item').addClass('slick-visible');
    $('.js-slider').slick({
      arrows: true,
      dots: true,
      infinite: true,
//      centerMode: true,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
    });
  }
  
  
  // tabs
  $('.tabs_block').each(function () {
    $(this).find('.tab').each(function (i) {
      $(this).on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active');
      });
    });
  });
  
//   inputmask
  $('#w_phone, #p_phone').mask('+375 (99) 999-99-99');
  
  // popup
  	$('.js-popup').click(function (e) {
  	  e.preventDefault();
  	  var DataId = $(this).attr('data-id');
  	  if (typeof DataId == "string") {
  	    $('#' + DataId).fadeIn(300).css('display', 'flex');
  	    $('body').css('overflow', 'hidden');
  	  }
  	});
  	$('.popup').click(function (e) {
  	  e = event || window.event
  	  if (e.target == this) {
  	    $(this).fadeOut(200);
  	    $('body').css('overflow', 'auto');
  	  }
  	});
  	$('.popup .link').click(function (e) {
  	  e.preventDefault();
  	  $(this).parents('.popup').fadeOut(200);
  	  $('body').css('overflow', 'auto');
  	});
  	$('.popup .popup_content').click(function (e) {
  	  e.stopPropagation();
  	});
  
  // murger menu
  
  $('.js-menu').on('click', function(){
    $(this).next('.menu_block').addClass('is-visible').fadeIn(300);
    $('.logo_container').css({'z-index': '0'});
    $('body').css('overflow', 'hidden');
  });
  $('.js-close').on('click', function(){
    $(this).parent('.menu_block').removeClass('is-visible').fadeOut(100);
    $('.logo_container').css({'z-index': ''});
    $('body').css('overflow', 'auto');
  });

});