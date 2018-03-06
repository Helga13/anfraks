$(document).ready(function () {
  
  'use strict'
  
  // menu catalog
//  $('.js-toggle_menu + span').on('click', function(){
//    $(this).prev().addClass('is-open').next().next().slideDown(300).parent('li').siblings().find('.is-open').removeClass('is-open').next().next().slideUp(300);
//  });
  
  // sliders
  $('.main_slider').slick({
    arrows: false,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000    
  });
  
//  $('.doors_slider').slick({
//    arrows: true,
//    infinite: false,
//    slidesToShow: 3,
//    slidesToScroll: 3,
//    responsive: [
//    {
//      breakpoint: 1281,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2,
//      }
//    },
//    {
//      breakpoint: 993,
//      settings: {
//        slidesToShow: 3,
//        slidesToScroll: 3,
//      }
//    },
//    {
//      breakpoint: 768,
//      settings: {
//        slidesToShow: 2,
//        slidesToScroll: 2,
//      }
//    },
//    {
//      breakpoint: 481,
//      settings: {
//        slidesToShow: 1,
//        slidesToScroll: 1,
//        variableWidth: true
//      }
//    }
//  ]
//  });
  
//  $('.product_slider').slick({
//    arrows: true    
//  });
  
  // tabs
//  $('.tabs_block').each(function () {
//    $(this).find('.tab').each(function (i) {
//      $(this).on('click', function (e) {
//        e.preventDefault();
//        $(this).addClass('active').siblings().removeClass('active').closest('.tabs_block').find('.tabs_content').removeClass('active').eq(i).addClass('active');
//      });
//    });
//  });
  
  // inputmask
//  $('#call_phone, #popup_phone').mask('(99) 999-99-99');
  
  // select
//  
//  $('.js-select').select2({
//    minimumResultsForSearch: Infinity 
//  });
  
  // popup
  


});