<?php global $dir, $site; ?>
<!DOCTYPE html>
<html lang="ja">

<head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#">
<meta charset="utf-8">
<meta name="description" content="<?php echo $site['description'] ?>">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, shrink-to-fit=no, viewport-fit=cover" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<title><?php echo $site['title'] ?></title>
<?php /* fb ogp
<meta property="og:title" content="<?php echo $site['title'] ?>" />
<meta property="og:type" content="website" />
<meta property="og:description" content="<?php echo $site['description'] ?>" />
<meta property="og:url" content="<?php echo $site['url'] ?>" />
<meta property="og:image" content="ページの画像URL" />
<meta property="og:site_name" content="<?php echo $site['title'] ?>" />
<meta property="og:locale" content="ja_JP" />
*/ ?>
<?php /* twitter cord
<meta name="twitter:card" content="カード種類" />
<meta name="twitter:site" content="@ユーザー名" />
<meta property="og:url" content="記事のURL" />
<meta property="og:title" content="記事のタイトル" />
<meta property="og:description" content="記事の要約（ディスクリプション）" />
<meta property="og:image" content="画像のURL" />
*/ ?>
<?php // iconfont 読み込み?>
<style>
  @font-face {
    font-family: "svgfont";
    src: url('/wp-content/themes/dpb/fonts/svgfont/files/svgfont.eot');
    src: url('/wp-content/themes/dpb/fonts/svgfont/files/svgfont.eot?#iefix') format('eot'),
      url('/wp-content/themes/dpb/fonts/svgfont/files/svgfont.woff') format('woff'),
      url('/wp-content/themes/dpb/fonts/svgfont/files/svgfont.ttf') format('truetype'),
      url('/wp-content/themes/dpb/fonts/svgfont/files/svgfont.svg#svgfont') format('svg');
    font-weight: normal;
    font-style: normal;
  }
</style>
<?php wp_head(); ?>
<?php get_template_part('partials/analytics'); ?>

</head>


<?php
  $body_class = '';

  if (is_home()) {
    $body_class = 'home';
  }
?>

<body <?php body_class(); ?>>
<header id="header">
  <h1>Daily Practice Books</h1>
</header>

<?php get_template_part('navigation'); ?>