// 本クリック時の処理

$(function() {
  $('body').prepend('<div class="overlay"></div>');

  $(document).on('click', '.img_popup', function() {
    var left = ($(window).width() / 2) + $(window).scrollLeft() - ($(this).attr('width') / 2);
    var top = ($(window).height() / 2) + $(window).scrollTop() - ($(this).attr('height') / 2);
    // popup時に背景を固定
    scrollPosition = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -scrollPosition});

    $('div.overlay').css('height', '90%');
    var $dom = '<div class="inner">';
    $dom += '<div class="image">';
    $dom += '<img src="' + $(this).attr('href') + '" />';
    $dom += '</div>';
    $dom += '<div class="details">';
    $dom += '<p class="title">' + $(this).attr('data-title') + '</p>'; // wordpressタイトル
    $dom += '<p class="meta">' + $(this).attr('data-meta') + '</p>'; // メタ情報
    $dom += '<div class="caption">' + $(this).attr('data-caption') + '</div>'; // wordpress本文
    $dom += '<ul class="categories">' + $(this).attr('data-cat') + '</ul>'; // カテゴリ
    $dom += '<p class="close"><span></span></p>';
    $dom += '</div>';
    $dom += '</div>';
    $('div.overlay').empty().append($dom).css({display: 'block'});
    return false;
  });

  $(document).on('click', ".close", function(){
    $('div.overlay').hide();
    // popup時に背景を固定 解除
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo( 0 , scrollPosition );
  });
});