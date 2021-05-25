// spグロナビ開閉

var state = false;
var scrollpos;
$('#menu-icon').on('click', function(){
  $('nav').slideToggle();
  if(state == false) {
    scrollpos = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollpos});
    state = true;
  } else {
    $('body').removeClass('fixed').css({'top': 0});
    $(window).scrollTop( scrollpos );
    state = false;
  }
});

// メニュー内のリンク押したらスライドが閉じる
//$(".gallery-category a").on("click", function(){
//  $("nav").slideUp('fast');
//    $('body').removeClass('fixed').css({'top': 0});
//    state = false;
//});