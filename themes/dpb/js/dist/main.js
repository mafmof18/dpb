// （本）投稿の取得作成、ajax

let $categoryTab = $('.gallery-category');
let $comic = $('#comic-area');
let $cssLoader = $('.loader');
let $body = $('body');

// homeの処理
if ($body.hasClass('home')) {
  // 初期処理
  init();

  $categoryTab.find('li').on('click', function(e) {
    e.preventDefault();
    $('.gallery-category').find('li').removeClass('current');
    $(this).addClass('current');
    getPost($(this).data('category'), false);
  });
}

function init() {
  let cat = $comic.data('category');
  let $current = $('.gallery-category').find('.' + cat);
  if ($current.length > 0) {
    $current.addClass('current');
  }

  getPost(cat, false);

  // 一覧画面でのスクロール監視
  let flug = true;

  $(window).on('scroll', function(){
    if ($cssLoader.css('display') === 'block') {
      return false;
    }
    let pageFoot = $('.information-container').height();
    let scroll = $(this).scrollTop();
    scroll += 1000;
    if(flug){
      flug = false;
      setTimeout(function(){
        if (pageFoot < scroll) {
          let category = 'all';
          if ($categoryTab.find('.current').length > 0) {
            category = $categoryTab.find('.current').attr('data-category');
          }
          getPost(category, true);
        }
        flug = true;
        return flug;
      }, 100);
    }
  });
}

function getPost(cat, nextLoad) {
  let $container = $('#comic-area');
  let nonce = $container.data('nonce');
  let wp_path = $container.data('path');
  let $target = $container.find('#' + cat);
  let paged = $('#' + cat).attr('data-paged');

  // 2回目移行は
  if ($cssLoader.css('display') === 'block') {
    return false;
  }
  // 読み込み済みなら
  if (nextLoad && $target.attr('data-loaded') === 'true') {
    return false;
  }

  $categoryTab.find('li').addClass('disable');
  $cssLoader.fadeIn();
  if (! nextLoad) {
    $container.find('.comic-list').hide();
  }
  // 読み込み済みなら通信しない
  if ($target.find('li').length > 0 && ! nextLoad) {

    $cssLoader.fadeOut(function() {
      $categoryTab.find('li').removeClass('disable');
      if (! nextLoad) {
        $target.fadeIn();
      }
    });
    return false;
  }

  $.ajax({
    url: '/wp-content/themes/dpb/ajax-loading/load.php',
    type: 'GET',
    dataType: 'json',
    data: {
      'cat': cat,
      'paged': paged,
      'wp_path': wp_path,
      'check_nonce': nonce,
    },
    timeout: 5000,
  })
  .done(function(data) {
    //let dom = '';
    // 戻り値が空なら
    if (data == null || data == '' || data['html'] == '') {
      return false;
    }
    //$container.html(data['html']);
    $cssLoader.fadeOut(function() {
      $categoryTab.find('li').removeClass('disable');
      if (data['last_page_num'] == paged) {
        $target.attr('data-loaded', 'true');
      } else {
        paged = 1 + parseInt(paged);
        $('#' + cat).attr('data-paged', paged);
      }
      $target.append(data['html']);
      if (! nextLoad) {
        $target.fadeIn();
      }

      // ランダムサイズの画像配置
      $target.find('li').wookmark({
        autoResize: true,
        container: $('#container'),
        offset: 20,
        outerOffset: 10,
//        itemWidth: 210
      });
    });
  })
  .fail(function(jqXHR, textStatus, errorThrown) { // eslint-disable-line
    //console.log(errorThrown);
    $cssLoader.fadeOut(function() {
      $categoryTab.find('li').removeClass('disable');
    });
  });
}
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