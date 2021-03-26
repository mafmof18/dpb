<?php global $dir;
  get_header();

  if(isset($_GET['category'])) {
    $category = $_GET['category'];
  } else {
    $category = 'all';
  }

  $categories = get_categories();
?>

<div id="menu-icon"></div>

<nav>
  <div class="sp-nav-wrap">
    <h1><a href="/"><span>DPB</span></a></h1>

    <div class="menu-wrap">
      <ul class="menu">
        <li><a href="/about/">ABOUT</a></li>
        <li><a href="/access_contact/">ACCESS <br>& CONTACT</a></li>
      </ul>
      <ul class="sns">
        <li><a href="#"><i class="fab fa-instagram"></i></a></li>
        <li><a href="#"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
  </div>

    <?php
      echo '<ul class="gallery-category">';
      foreach( $categories as $obj ) {
        echo '<li class="'.$obj->slug.'" data-category="'.$obj->slug.'">'.$obj->name.'</li>';
      }
      echo '</ul>';
    ?>
</nav>
