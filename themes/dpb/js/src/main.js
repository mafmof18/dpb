// slick
/*
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 4000,
  fade: true,
  speed: 2000,
  arrows: false
});
*/

// ランダムサイズの画像配置
$('.comic-list li').wookmark({
  autoResize: true,
  container: $('#container'),
  offset: 10,
  outerOffset: 10,
  itemWidth: 210
});

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

  $(window).on('load', function() {
    //$('.the-comic').fancybox();
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
  if ($target.find('article').length > 0 && ! nextLoad) {
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

      //$('.the-comic').fancybox();
    });
  })
  .fail(function(jqXHR, textStatus, errorThrown) { // eslint-disable-line
    //console.log(errorThrown);
    $cssLoader.fadeOut(function() {
      $categoryTab.find('li').removeClass('disable');
    });
  });
}
