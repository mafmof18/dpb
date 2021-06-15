// spグロナビ開閉

var state = false;
var scrollpos;
$('#menu-icon').on('click', function(){
//console.log(state);
  $('nav').slideToggle();
  if(state == false) {
    scrollpos = $(window).scrollTop();
    $(this).addClass('active');
    $('body').addClass('fixed').css({'top': -scrollpos});
    state = true;
  } else {
    $(this).removeClass('active');
    $('body').removeClass('fixed').css({'top': 0});
    $(window).scrollTop( scrollpos );
    state = false;
  }
});

// spメニュー内のリンク押したらスライドが閉じる
  $(".gallery-category a").on("click", function(){
    if(state == true) {
      $('nav').slideUp('fast');
      $('#menu-icon').removeClass('active');
      $('body').removeClass('fixed');
      state = false;
    }
  });
