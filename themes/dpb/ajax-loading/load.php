<?php

  // wp_pathがあり空でなければ（ローカル用）
  if (isset($_GET['wp_path']) && $_GET['wp_path'] !== '') {
    $wp_path = $_GET['wp_path']. 'wp-config.php';
  // なければテーマからの相対パスでwp-configをインクルードする
  } else {
    // 本番とテストの絶対パスをベタ書きで記載
    $wp_path = '../../../../wp-load.php';
  }

  // wp-configがあれば
  if (file_exists($wp_path)) {
    global $last_page_num;
    // wp-configを読み込む
    require_once($wp_path);

    ob_start();
    get_comic($_GET['cat'], $_GET['paged'], PAGE_COMIC_COUNT);
    $dom = ob_get_contents();

    ob_end_clean();
    // nonceが不正ならば
    //if ( ! check_ajax_referer( 'ajax-nonce', 'check_nonce', false ) ) {
    //  die();
    //}

    $json = array(
      'html' => $dom,
      'last_page_num' => $last_page_num
    );
    header("Content-Type: application/json; X-Content-Type-Options: nosniff; charset=utf-8");
    echo json_encode($json);
    die();
  }
?>