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
  //        box.css({
  //          'position': 'static',
  //          'transform': 'none'
  //        });
        }
        else {
          box.addClass('sticky');
  //        box.css({
  //          'position': 'fixed',
  //          'top': '14px',
  //          'left': '50%',
  //          'transform': 'translateX(-50%)'
  //        });
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
  
  $('.js-slider').slick({
    arrows: true,
    dots: true,
    infinite: true,
    centerMode: true,
//    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
    {
      breakpoint: 1401,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  });
  
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

//
//(function(){  // анонимная функция (function(){ })(), чтобы переменные "a" и "b" не стали глобальными
//var a = document.querySelector('.main_logo'), b = null;  // селектор блока, который нужно закрепить
//window.addEventListener('scroll', Ascroll, false);
//document.body.addEventListener('scroll', Ascroll, false);  // если у html и body высота равна 100%
//function Ascroll() {
//  if (b == null) {  // добавить потомка-обёртку, чтобы убрать зависимость с соседями
//    var Sa = getComputedStyle(a, ''), s = '';
//    for (var i = 0; i < Sa.length; i++) {  // перечислить стили CSS, которые нужно скопировать с родителя
//      if (Sa[i].indexOf('overflow') == 0 || Sa[i].indexOf('padding') == 0 || Sa[i].indexOf('border') == 0 || Sa[i].indexOf('outline') == 0 || Sa[i].indexOf('box-shadow') == 0 || Sa[i].indexOf('background') == 0) {
//        s += Sa[i] + ': ' +Sa.getPropertyValue(Sa[i]) + '; '
//      }
//    }
//    b = document.createElement('div');  // создать потомка
//    b.style.cssText = s + ' box-sizing: border-box; width: ' + a.offsetWidth + 'px;';
//    a.insertBefore(b, a.firstChild);  // поместить потомка в цепляющийся блок первым
//    var l = a.childNodes.length;
//    for (var i = 1; i < l; i++) {  // переместить во вновь созданного потомка всех остальных потомков (итого: создан потомок-обёртка, внутри которого по прежнему работают скрипты)
//      b.appendChild(a.childNodes[1]);
//    }
//    a.style.height = b.getBoundingClientRect().height + 'px';  // если под скользящим элементом есть другие блоки, можно своё значение
//    a.style.padding = '0';
//    a.style.border = '0';  // если элементу присвоен padding или border
//  }
//  if (a.getBoundingClientRect().top < 15) { // elem.getBoundingClientRect() возвращает в px координаты элемента относительно верхнего левого угла области просмотра окна браузера
//    b.className = 'sticky';
//  } else {
//    b.className = '';
//  }
//  window.addEventListener('resize', function() {
//    a.children[0].style.width = getComputedStyle(a, '').width
//  }, false);  // если изменить размер окна браузера, измениться ширина элемента
//}
//})()