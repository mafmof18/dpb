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
        <li><a href="https://www.instagram.com/dailypracticebooks/" target="_blank"><i class="fab fa-instagram"></i></a></li>
        <li><a href="https://twitter.com/D_P_Books/" target="_blank"><i class="fab fa-twitter"></i></a></li>
      </ul>
    </div>
  </div>

  <?php
    echo '<ul class="gallery-category">';
    echo '<li class="all" data-category="all"><a href="/">ALL</a></li>';
    foreach( $categories as $obj ) {
      echo '<li class="'.$obj->slug.'" data-category="'.$obj->slug.'"><a href="/?category='.$obj->slug.'">'.$obj->name.'</a></li>';
    }
    echo '</ul>';
  ?>
</nav>
