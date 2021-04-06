$(function() {
  $('body').prepend('<div class="overlay"></div>');

  $(document).on('click', '.img_popup', function() {
    var left = ($(window).width() / 2) + $(window).scrollLeft() - ($(this).attr('width') / 2);
    var top = ($(window).height() / 2) + $(window).scrollTop() - ($(this).attr('height') / 2);

    $('div.overlay').css('height', '96%');
    var $dom = '<div class="inner">';
    $dom += '<div class="image">';
    $dom += '<img src="' + $(this).attr('href') + '" />';
    $dom += '</div>';
    $dom += '<div class="details">';
    $dom += '<p class="title">' + $(this).attr('data-title') + '</p>'; // wordpressタイトル
    $dom += '<p class="meta">' + $(this).attr('data-meta') + '</p>'; // メタ情報
    $dom += '<p class="caption">' + $(this).attr('data-caption') + '</p>'; // wordpress本文
    $dom += '<ul class="categories">' + $(this).attr('data-cat') + '</ul>'; // カテゴリ
    $dom += '<p class="close"><span>Close</span></p>';
    $dom += '</div>';
    $dom += '</div>';
    $('div.overlay').empty().append($dom).css({display: 'block'});
    return false;
  });

  $('.close').click(function() {
    $('div.overlay').hide();
  });
});