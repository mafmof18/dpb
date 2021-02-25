<?php
global $dir, $site;

$dir = [];
$dir['theme'] = get_bloginfo('template_directory', 'display');
$dir['img'] = get_bloginfo('template_directory', 'display') . '/images';

$site = [];
$site['title'] = get_bloginfo('name');
$site['description'] = get_bloginfo('description');
$site['url'] = get_bloginfo('url');

// １ページに表示する漫画の件数
define('PAGE_COMIC_COUNT', 10);

/*** Media Library Categoriesのカテゴリーを通常と分離 ***/
add_filter('wpmediacategory_taxonomy' , function(){return 'category_media';} );

// アイキャッチ有効
function twpp_setup_theme() {
  add_theme_support( 'post-thumbnails' );
}
add_action( 'after_setup_theme', 'twpp_setup_theme' );
?>