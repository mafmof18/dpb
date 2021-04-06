<?php

  function get_comic($category, $paged, $display_count) {
    global $last_page_num;
    if ($category === 'all') {
      // お知らせ全件取得
      $args = array(
        'post_type' => 'post',
        'posts_per_page' => $display_count,
        'order' => 'ASC',
        'paged' => $paged,
        'post_status' => 'publish',
      );
    } else {
      $args = array(
        'post_type' => 'post',
        'posts_per_page' => $display_count,
        'order' => 'ASC',
        'paged' => $paged,
        'category_name' => $category,
        'post_status' => 'publish',
      );

    }
    $the_query = new WP_Query($args);
    if ($the_query) {
      while ($the_query->have_posts()) {
        $the_query->the_post();
        get_template_part('partials/dom');
      }
      wp_reset_postdata();
    }

    if (isset($the_query) && ! empty($the_query)) {
      $last_page_num = $the_query->max_num_pages;
    }
  }

?>