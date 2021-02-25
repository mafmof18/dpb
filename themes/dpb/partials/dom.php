<?php
    $image_id = get_post_thumbnail_id();
    $image_url = wp_get_attachment_image_src($image_id, true);
    $path = $image_url;
    if (isset($path[0])) {
      $path = $path[0];
    }
  ?>
    <article id="post-<?php the_ID(); ?>" class="the-post">
      <a href="<?php echo $path; ?>"  data-caption="<?php the_content(); ?>" class="the-comic">
        <?php the_post_thumbnail('thumbnail'); ?>
        <p><?php echo the_title(); ?></p>
      </a>
    </article>

