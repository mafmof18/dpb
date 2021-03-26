<?php get_header(); ?>

<main class="content">

<?php if(have_posts()): while(have_posts()):the_post(); ?>

  <?php remove_filter('the_content', 'wpautop'); ?>
  <!-- /wp:html -->
  <?php the_content(); ?>
  <!-- /wp:html -->

<?php endwhile; endif; ?>

</main>

<?php get_footer(); ?>​