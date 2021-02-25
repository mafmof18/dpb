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

  echo '<nav class="gallery-category">';
  echo '<ul>';
  foreach( $categories as $obj ) {
    echo '<li class="'.$obj->slug.'" data-category="'.$obj->slug.'">'.$obj->name.'</li>';
  }
  echo '</ul>';
  echo '</nav>';
  //  echo $category;

error_log("エラーです")

?>

<div class="sns">
  <ul>
    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
  </ul>
</div>

<main class="content">

  <div id="comic-area" class="comic-inner" data-category="<?php echo $category; ?>" data-path="<?php echo $wp_path;  ?>" data-nonce="<?php echo $nonce; ?>" >

   <div id="all" class="all comic-list" data-paged="1" data-loaded="false">
   </div>

    <?php
      foreach( $categories as $category ) {
    ?>
        <div id="<?php echo $category->slug ?>" class="<?php echo $category->slug ?> comic-list" data-paged="1" data-loaded="false">
          <?php //get_comic('all', 1, PAGE_COMIC_COUNT); ?>
        </div>
    <?php
      }
    ?>
  </div>

  <div class="loader">Loading...</div>

</main>

<?php get_footer(); ?>
