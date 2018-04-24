$(document).ready(function(){

  // слайдер
 function htmSlider(){

  var slideWrap = $('.slider__wrap');

  var nextLink = $('.slider__arow_next');
  var prevLink = $('.slider__arow_prev');

		
   // Клик по ссылке на следующий слайд 
  nextLink.click(function(){
    slideWrap.animate({left: slideWrap.position().left - $('.slider__item').outerWidth()}, 500, function(){
     slideWrap
      .find('.slider__item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   
  });

   // Клик по ссылке на предыдующий слайд 
  prevLink.click(function(){
    slideWrap
     .css({'left': slideWrap.position().left - $('.slider__item').outerWidth()})
     .find('.slider__item:last')
     .prependTo(slideWrap)
     .parent()
     .animate({left: 0}, 500);
   
  });
		
   // Функция автоматической прокрутки слайдера 
  function autoplay(){
    slideWrap.animate({left: slideWrap.position().left - $('.slider__item').outerWidth()}, 500, function(){
     slideWrap
      .find('.slider__item:first')
      .appendTo(slideWrap)
      .parent()
      .css({'left': 0});
    });
   
  };
		
var timer = setInterval(autoplay, 5000);

 $('.slider').hover(function() {
        clearInterval(timer);
     }, function() {
        timer = setInterval(autoplay, 5000);
    });

 };
 
  // иницилизация функции слайдера 
 htmSlider();

// размеры блока с обувью
 function Why() {
  if ($(window).outerWidth() > 568) {
  var width = $('.why__wrap-block').width() - $('.why__wrap_left').width() - $('.why__wrap_right').width();
  var height = $('.why__wrap-block').height();
  $('.why__bg-block').css({
    'width':width,
    'height':height
  });
  if (width > height) {
   $('.why__bg').css({
    'width':height,
    'height':height,
    'top':'0',
    'left':(width - height) / 2
   });
 } else {
  $('.why__bg').css({
    'width':width,
    'height':width,
    'left':'0',
    'top':(height - width) / 2
   }); 
 }
};
 };
 
 Why();
 
 // размеры линий, идущих от текста к обуви
 function whyLine(boots, block) {
   var pointSvgLeft = boots.find('.why__svg').offset().left + boots.find('.why__svg').width() / 2;
   var pointSvgTop = boots.find('.why__svg').offset().top + boots.find('.why__svg').height() / 2;
   var pointLineLeft = block.find('.why__line').offset().left;
   var pointLineTop = block.find('.why__line').offset().top;
   var pointBlockLeft = block.offset().left;
    if ($(window).outerWidth() > 568) {
   if (pointSvgLeft >= pointLineLeft && pointSvgTop >= pointLineTop) {
    block.find('.why__line').css({
    'width': pointSvgLeft - pointLineLeft,
    'height': pointSvgTop - pointLineTop
   });
   };
   if (pointSvgLeft >= pointLineLeft && pointSvgTop < pointLineTop) {
    block.find('.why__line').css({
    'width': pointSvgLeft - pointLineLeft,
    'height': block.offset().top + block.height() / 2 - pointSvgTop + boots.find('.why__svg').height(),
    'transform':'scaleY(-1)',
    'transform-origin':'50% 0%'
   });
   };
   if (pointSvgLeft < pointBlockLeft && pointSvgTop >= pointLineTop) {
    block.find('.why__line').css({
    'width': pointBlockLeft - pointSvgLeft,
    'height': pointSvgTop - pointLineTop
   });
   };
   if (pointSvgLeft < pointBlockLeft && pointSvgTop < pointLineTop) {
    block.find('.why__line').css({
    'width': pointBlockLeft - pointSvgLeft,
    'height': block.offset().top + block.height() / 2 - pointSvgTop + boots.find('.why__svg').height(),
    'transform':'scaleY(-1)',
    'transform-origin':'50% 0%'
   });
   };
 };
 };

// иницилизация линий
 whyLine($('.why__boots_pull'), $('.why__block_pull'));
 whyLine($('.why__boots_shock'), $('.why__block_shock'));
 whyLine($('.why__boots_custom'), $('.why__block_custom'));
 whyLine($('.why__boots_eco'), $('.why__block_eco'));
 whyLine($('.why__boots_toe'), $('.why__block_toe'));
 whyLine($('.why__boots_machine'), $('.why__block_machine'));
 whyLine($('.why__boots_form'), $('.why__block_form'));
 whyLine($('.why__boots_flexible'), $('.why__block_flexible'));
 whyLine($('.why__boots_traction'), $('.why__block_traction'));

 // инициализация размеров при изменении размеров окна
 $(window).resize(function() {
   Why();
   whyLine($('.why__boots_pull'), $('.why__block_pull'));
   whyLine($('.why__boots_shock'), $('.why__block_shock'));
   whyLine($('.why__boots_custom'), $('.why__block_custom'));
   whyLine($('.why__boots_eco'), $('.why__block_eco'));
   whyLine($('.why__boots_toe'), $('.why__block_toe'));
   whyLine($('.why__boots_machine'), $('.why__block_machine'));
   whyLine($('.why__boots_form'), $('.why__block_form'));
   whyLine($('.why__boots_flexible'), $('.why__block_flexible'));
   whyLine($('.why__boots_traction'), $('.why__block_traction'));
 });

// боковое меню, изменение акливной ссылки при нажатии
 var menu_selector = ".navigation";
function onScroll(){
  var scroll_top = $(document).scrollTop();
  $(menu_selector + " a").each(function(){
    var hash = $(this).attr("href");
    var target = $(hash);
    if (target.position().top <= scroll_top && target.position().top + target.outerHeight() > scroll_top) {
      $(menu_selector + " a.navigation__link_active").removeClass("navigation__link_active");
      $(this).addClass("navigation__link_active");
    } else {
      $(this).removeClass("navigation__link_active");
    };
  });
};
  $(document).on("scroll", onScroll);

  // исменение активной ссылки при клике и плавный скрол к якорю
  $("a[href^=#]").click(function(e){
    e.preventDefault();
    $(document).off("scroll");
    $(menu_selector + " a.navigation__link_active").removeClass("navigation__link_active");
    $(this).addClass("navigation__link_active");
    var hash = $(this).attr("href");
    var target = $(hash);
    $("html, body").animate({
        scrollTop: target.offset().top
    }, 500, function(){
      window.location.hash = hash;
      $(document).on("scroll", onScroll);
    });
  });

});