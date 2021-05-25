<?php global $dir;
  get_header();

  if(isset($_GET['category'])) {
    $category = $_GET['category'];
  } else {
    $category = 'all';
  }

  $wp_path = '';
  // ローカルならパスを渡す
  if (strpos($_SERVER['HTTP_HOST'], '192.168') !== false || strpos($_SERVER['HTTP_HOST'], 'localhost') !== false) {
    $wp_path = ABSPATH;
  } else {
    $wp_path = '';
  }

  $nonce = wp_create_nonce("ajax-nonce");
  $categories = get_categories();
?>

<main id="container" class="container">
  <div id="comic-area" class="comic-inner" data-category="<?php echo $category; ?>" data-path="<?php echo $wp_path; ?>" data-nonce="<?php echo $nonce; ?>" >
     <ul id="all" class="all comic-list" data-paged="1" data-loaded="false">
     </ul>

      <?php
        foreach( $categories as $category ) {
      ?>
        <ul id="<?php echo $category->slug ?>" class="<?php echo $category->slug ?> comic-list" data-paged="1" data-loaded="false">
          <?php //get_comic('all', 1, PAGE_COMIC_COUNT); ?>
        </ul>
      <?php
      }
    ?>
  </div>

  <div class="loader">Loading...</div>
</main>

<?php get_footer(); ?>
