<?php
global $dir;

// stylesheets 登録
function add_stylesheet(){
  global $dir;
  wp_register_style('style', $dir['theme'] . '/css/min/style.css');
//  wp_register_style('fontawesome', '//use.fontawesome.com/releases/v5.9.0/css/all.css');
  wp_register_style('googlefont', '//fonts.googleapis.com/css2?family=Raleway:wght@300&display=swap');
  wp_register_style('slick-theme', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css');
  // 読み込み
  wp_enqueue_style('style');
  wp_enqueue_style('googlefont');
  wp_enqueue_style('fontawesome');
  wp_enqueue_style('slick');
  wp_enqueue_style('slick-theme');
}

// javascripts 登録
function add_javascripts(){
  global $dir;
  wp_register_script('jquery', '//code.jquery.com/jquery-2.2.4.min.js');
  wp_register_script('fontawesome', '//kit.fontawesome.com/a6489741f4.js');
  wp_register_script('webfont', '//webfonts.xserver.jp/js/xserver.js');
//  wp_register_script('slick', '//cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js');
  wp_register_script('main', $dir['theme'] . '/js/min/main.js');
  // 読み込み
  wp_enqueue_script('jquery');
//  wp_enqueue_script('slick');
  wp_enqueue_script('fontawesome');
  wp_enqueue_script('webfont');
  wp_enqueue_script('main');
}

// 読み込み
add_action('wp_head', 'add_stylesheet', 1);
add_action('wp_head', 'add_javascripts', 1);

?>