<?php
/**
 * WordPress の基本設定
 *
 * このファイルは、インストール時に wp-config.php 作成ウィザードが利用します。
 * ウィザードを介さずにこのファイルを "wp-config.php" という名前でコピーして
 * 直接編集して値を入力してもかまいません。
 *
 * このファイルは、以下の設定を含みます。
 *
 * * MySQL 設定
 * * 秘密鍵
 * * データベーステーブル接頭辞
 * * ABSPATH
 *
 * @link https://ja.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// 注意:
// Windows の "メモ帳" でこのファイルを編集しないでください !
// 問題なく使えるテキストエディタ
// (http://wpdocs.osdn.jp/%E7%94%A8%E8%AA%9E%E9%9B%86#.E3.83.86.E3.82.AD.E3.82.B9.E3.83.88.E3.82.A8.E3.83.87.E3.82.A3.E3.82.BF 参照)
// を使用し、必ず UTF-8 の BOM なし (UTF-8N) で保存してください。

// ** MySQL 設定 - この情報はホスティング先から入手してください。 ** //
/** WordPress のためのデータベース名 */
define( 'DB_NAME', 'katadass_wp3' );

/** MySQL データベースのユーザー名 */
define( 'DB_USER', 'katadass_wp3' );

/** MySQL データベースのパスワード */
define( 'DB_PASSWORD', 'd8m3rl9mzm' );

/** MySQL のホスト名 */
define( 'DB_HOST', 'mysql8041.xserver.jp' );

/** データベースのテーブルを作成する際のデータベースの文字セット */
define( 'DB_CHARSET', 'utf8' );

/** データベースの照合順序 (ほとんどの場合変更する必要はありません) */
define( 'DB_COLLATE', '' );

/**#@+
 * 認証用ユニークキー
 *
 * それぞれを異なるユニーク (一意) な文字列に変更してください。
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org の秘密鍵サービス} で自動生成することもできます。
 * 後でいつでも変更して、既存のすべての cookie を無効にできます。これにより、すべてのユーザーを強制的に再ログインさせることになります。
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'x({Y%{gV$-^nl/nTtU@(8jNe89?AjCF8aqht>P6e0kf3Nq/N^W{s38w7n^8avzVs' );
define( 'SECURE_AUTH_KEY',  'E$5*9[Pw0~0|o&t[fHll6dyL6lH|nG/P4yNbzXN)[NQJ9QM:PkX:<iC|c?[z{AzX' );
define( 'LOGGED_IN_KEY',    'A.(9Re_WG}IWGl?Qc=)uh;$:V}U,=F`@7r!f};l:B7Cn{+xm_!kkD=_b-0C,I6Z~' );
define( 'NONCE_KEY',        't;`Lj:t[1&)MPK?4R93_B46;v5v^ffW`35*`eta_i7Xyz?&RfOvA?,VQ0#8X+VGw' );
define( 'AUTH_SALT',        'EO)M~`yi@,ms?n|<rHz`G39VI{34?7b}J7)>bg_N-_s6Vau>,*K;K*,$sEU]t:3V' );
define( 'SECURE_AUTH_SALT', 'fh0<]Oz<KWDeEMd$J2oL)soq%0Dt6V@fJQ {Se6Paw6U#P[T?)hq; 1EDpqo$9H>' );
define( 'LOGGED_IN_SALT',   '4G)b:>GmI()z&V>EVTvWZi%~-[}d&^E`~zO`VyRv|.M{+a*WEFHg9_e$v&h@Z]?o' );
define( 'NONCE_SALT',       '5#;4qLGC3F-h&|eYu@rn(Nj$H8X3N6lL0zjl/:+>vQiXhsu?.2)^l?P9<VL7lTh(' );
define( 'WP_CACHE_KEY_SALT','%d1~i?S!~+>~J,z136 :vwlfedve4`+#]w+CIuE(/6{V|PiLh:^?hNZ]hFgt)XNi' );

/**#@-*/

/**
 * WordPress データベーステーブルの接頭辞
 *
 * それぞれにユニーク (一意) な接頭辞を与えることで一つのデータベースに複数の WordPress を
 * インストールすることができます。半角英数字と下線のみを使用してください。
 */
$table_prefix = 'wp_';

/**
 * 開発者へ: WordPress デバッグモード
 *
 * この値を true にすると、開発中に注意 (notice) を表示します。
 * テーマおよびプラグインの開発者には、その開発環境においてこの WP_DEBUG を使用することを強く推奨します。
 *
 * その他のデバッグに利用できる定数についてはドキュメンテーションをご覧ください。
 *
 * @link https://ja.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', true );
define( 'WP_DEBUG_LOG', true );
define( 'WP_DEBUG_DISPLAY', true );

/* 編集が必要なのはここまでです ! WordPress でのパブリッシングをお楽しみください。 */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
