<?php
global $dir;

// stylesheets 登録
function add_stylesheet(){
  global $dir;
  wp_register_style('style', $dir['theme'] . '/css/min/style.css');
  wp_register_style('fontawesome', '//use.fontawesome.com/releases/v5.9.0/css/all.css');
  wp_register_style('googlefont', 'https://fonts.googleapis.com/css2?family=Raleway:wght@700&display=swap');
  // 読み込み
  wp_enqueue_style('style');
  wp_enqueue_style('googlefont');
  wp_enqueue_style('fontawesome');
}

// javascripts 登録
function add_javascripts(){
  global $dir;
  wp_register_script('jquery', '//code.jquery.com/jquery-1.11.0.min.js');
  wp_register_script('wookmark', $dir['theme'] . '/js/libs/wookmark.min.js');
  wp_register_script('main', $dir['theme'] . '/js/min/main.js');
  // 読み込み
  wp_enqueue_script('jquery');
  wp_enqueue_script('wookmark');
  wp_enqueue_script('main');
}

// 実行
add_action('wp_head', 'add_stylesheet', 1);
add_action('wp_footer', 'add_javascripts', 1);

?>