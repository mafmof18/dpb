<?php
// WordPressデフォルト設定の書き換え
locate_template('functions/cleanup.php', true);

// js css 読み込みファイル管理
locate_template('functions/resource.php', true);

// 各種設定
locate_template('functions/setting.php', true);

// 関数リスト
locate_template('functions/custom-functions.php', true);
?>
