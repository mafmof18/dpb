<?php
// wpemoji 消す
remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
remove_action( 'admin_print_scripts', 'print_emoji_detection_script' );
remove_action( 'wp_print_styles', 'print_emoji_styles' );
remove_action( 'admin_print_styles', 'print_emoji_styles' );

// WordPressバージョン出力metaタグ非表示
remove_action( 'wp_head','wp_generator' );

// link rel="wlwmanifest"の削除
remove_action( 'wp_head', 'wlwmanifest_link' );

// link rel="EditURI"の削除
remove_action( 'wp_head', 'rsd_link' );

// link rel="dns-prefetch"の削除
function remove_dns_prefetch( $hints, $relation_type ) {
  if ( 'dns-prefetch' === $relation_type ) {
    return array_diff( wp_dependencies_unique_hosts(), $hints );
  }
  return $hints;
}
add_filter( 'wp_resource_hints', 'remove_dns_prefetch', 10, 2 );

// wp-jsonを削除
remove_action('wp_head','rest_output_link_wp_head');

// JSやCSSに自動で付与されるバージョン番号 非表示
function vc_remove_wp_ver_css_js( $src ) {
  if ( strpos( $src, 'ver=' ) )
    $src = remove_query_arg( 'ver', $src );
  return $src;
}
add_filter( 'style_loader_src', 'vc_remove_wp_ver_css_js', 9999 );
add_filter( 'script_loader_src', 'vc_remove_wp_ver_css_js', 9999 );

// wp_footer()で出力されるJavascript 非表示
function register_javascript() {
wp_deregister_script('wp-embed');
wp_deregister_script('comment-reply');
}
add_action('wp_enqueue_scripts', 'register_javascript');

// WP5 Gutenberg エディア styleを削除
function dequeue_plugins_style() {
  wp_dequeue_style('wp-block-library');
}
add_action( 'wp_enqueue_scripts', 'dequeue_plugins_style', 9999);

// default jQuey 削除
function my_delete_local_jquery() {
  wp_deregister_script('jquery');
}
add_action( 'wp_enqueue_scripts', 'my_delete_local_jquery' );

// メディアライブラリ 不要なthumbnail作成 削除
function disable_image_sizes( $new_sizes ) {
  unset( $new_sizes['thumbnail'] );
  unset( $new_sizes['medium'] );
  unset( $new_sizes['large'] );
  unset( $new_sizes['medium_large'] );
  unset( $new_sizes['1536x1536'] );
  unset( $new_sizes['2048x2048'] );
  return $new_sizes;
}
add_filter( 'intermediate_image_sizes_advanced', 'disable_image_sizes' );
add_filter( 'big_image_size_threshold', '__return_false' );

// 余計なpタグを消す
remove_filter('the_content', 'wpautop');
?>