<?php get_header(); ?>

<main class="content pages">

<?php if(have_posts()): while(have_posts()):the_post(); ?>

  <p><?php the_content(); ?></p>

<?php endwhile; endif; ?>

</main>

<?php get_footer(); ?>​