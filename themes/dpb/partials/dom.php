<?php
    $image_id = get_post_thumbnail_id();
    $image_url = wp_get_attachment_image_src($image_id, true);
    $categories = get_the_category();
    $meta_value = get_post_meta($post->ID, 'meta_text', true);
    $category = '';
    foreach($categories as $cat) {
      //(例)classにスラッグを指定したカテゴリーのラベル
      $category .= '<span class="'.$cat->slug.' cat">'.$cat->name.'</span>';
    }
    $path = $image_url;
    if (isset($path[0])) {
      $path = $path[0];
    }
  ?>
    <li id="post-<?php the_ID(); ?>" class="the-post">
      <a href="<?php echo $path; ?>" data-title='<?php echo the_title(); ?>' data-meta='<?php echo nl2br($meta_value); ?>' data-cat='<?php echo $category ?>' data-caption="<?php the_content(); ?>" class="the-comic img_popup">
        <?php the_post_thumbnail('full'); ?>
      </a>
    </li>

