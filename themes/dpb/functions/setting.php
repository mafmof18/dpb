<?php
global $dir, $site;

$dir = [];
$dir['theme'] = get_bloginfo('template_directory', 'display');
$dir['img'] = get_bloginfo('template_directory', 'display') . '/images';

$site = [];
$site['title'] = get_bloginfo('name');
$site['description'] = get_bloginfo('description');
$site['url'] = get_bloginfo('url');


/*** Media Library Categoriesのカテゴリーを通常と分離 ***/
add_filter('wpmediacategory_taxonomy' , function(){return 'category_media';} );

?>