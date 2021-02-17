<?php global $dir;
  get_header();

  if(isset($_GET['category'])) {
    $category = $_GET['category'];
  } else {
    $category = all;
  }
?>

<?php
$terms = get_terms('category_media');
  echo '<nav class="gallery-category">';
  echo '<ul>';
  foreach( $terms as $term ) {
    echo '<li>'.$term->name.'</li>';
  }
  echo '</ul>';
  echo '</nav>';
//  echo $category;
?>

<div class="sns">
  <ul>
    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
  </ul>
</div>

<main class="content">

  <?php echo do_shortcode('[gallery category=' . $category . ']'); ?>

  <?php
    $wp_alt = get_post_meta( 13 , '_wp_attachment_image_alt', true );
    echo $wp_alt;
  ?>

<?php
$myposts = get_posts('post_type=attachment&post_mime_type=image');
if (have_posts()):
 foreach($myposts as $post) : ?>
        <img src="<?php echo wp_get_attachment_url($post->ID); ?>">
 <?php endforeach; ?>
<?php endif; ?>

<?php

?>
</main>

<?php get_footer(); ?>
