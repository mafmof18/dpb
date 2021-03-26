$(function() {
  $('body').prepend('<div class="overlay"></div>');

  $('a.img_popup').click(function() {
    var left = ($(window).width() / 2) + $(window).scrollLeft() - ($(this).attr('width') / 2);
    var top = ($(window).height() / 2) + $(window).scrollTop() - ($(this).attr('height') / 2);

    $('div.overlay').css('height', $(document).height());
    $('div.overlay').empty().append('<img src="' + $(this).attr('href') + '" />').css({display: 'block'});
    $('div.overlay img').css({left: left, top: top, opacity: '1'});
    return false;
  });

  $('div.overlay').click(function() {
    $('div.overlay').hide();
  });
});