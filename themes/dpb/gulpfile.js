var gulp = require('gulp');
var compass = require('gulp-compass');
var plumber = require('gulp-plumber'); //Stream中に起こるエラーが原因でタスク(watch)が強制停止することを防止するモジュール
var browserSync = require('browser-sync').create(); // 対象Dirでfileが更新されたらブラウザを自動リロードするモジュール
var concat = require('gulp-concat'); // jsファイル結合
var uglify = require("gulp-uglify"); // jsファイル圧縮

var rename = require('gulp-rename');
var iconfont = require('gulp-iconfont');
var consolidate = require('gulp-consolidate');
var runTimestamp = Math.round(Date.now()/1000);
var fontName = 'svgfont'; // アイコンフォント名

// compass
gulp.task('compass', function(){
  gulp.src('css/sass/**/*.scss')
  .pipe(plumber())
  .pipe(compass({
    config_file: 'config/compass.rb',
    comments: false,
    css: 'css/min/',
    sass: 'css/sass/'
  }));
});

// browser-sync
gulp.task('browser-sync', function() {
  browserSync.init({
    proxy: 'localhost:1001',
    files: [
      "./css/min/*.css",
      "./js/min/*.js",
      "./**/*.php",
    ]
  });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

// js 結合 & 圧縮
gulp.task('js.concat', function() {
  return gulp.src('js/src/*.js')
    .pipe(plumber())
    .pipe(concat('main.js'))
    .pipe(gulp.dest('js/dist'));
});

gulp.task('js.uglify', function() {
  return gulp.src('js/dist/main.js')
    .pipe(plumber())
    .pipe(uglify('main.min.js'))
    .pipe(gulp.dest('js/min/'));
});

// 監視して処理するのをひとまとめにしておく
gulp.task('js-min', ['js.concat', 'js.uglify']);

// iconfont
// 参考サイト: https://hirakublog.com/code/78/
//アイコンフォント作成タスク
gulp.task('Iconfont', function(){
  gulp.src(['images/svg/*.svg'])
  .pipe(iconfont({
    fontName: fontName, // required
    timestamp: runTimestamp,
    formats: ['ttf','eot','woff','svg']
  }))
  .on('glyphs', function(glyphs, options) {
    engine = 'lodash',
    consolidateOptions = {
      glyphs: glyphs,
      fontName: fontName,
      fontPath: '/wp-content/themes/corporate/fonts/svgfont/files/', // cssからのフォントパスを指定 ※cssからの相対パスでフォントを指定してもOK
      className: 'svgfont', // cssのフォントのクラス名を指定
    }
    // アイコンフォント用のscssを作成(実装用)
    gulp.src('fonts/svgfont/templates/svgfont.scss')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename: '_' + fontName }))
    .pipe(gulp.dest('css/sass/modules/')); // scssの吐き出し先を指定
    // アイコンフォント用のcssを作成(プレビュー用)
    gulp.src('fonts/svgfont/templates/svgfont.css')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename:fontName }))
    .pipe(gulp.dest('fonts/svgfont/check/')); // scssの吐き出し先を指定
    // アイコンフォント一覧のサンプルHTMLを作成(プレビュー用)
    gulp.src('fonts/svgfont/templates/svgfont.html')
    .pipe(consolidate(engine, consolidateOptions))
    .pipe(rename({ basename:'check' }))
    .pipe(gulp.dest('fonts/svgfont/check/')); // サンプルhtmlの吐き出し先を指定
  })
  .pipe(gulp.dest('fonts/svgfont/files/'));
});

//gulp watch
gulp.task('watch', function(){
  gulp.watch('css/sass/**/*.scss',['compass']);
  gulp.watch('images/svg/*.svg', ['Iconfont']);
});

gulp.task('default', ['watch' , 'browser-sync'], function () {
  gulp.watch(['js/src/*.js'], ['js-min']);
  gulp.watch("./*.php", ['bs-reload']);
  gulp.watch("./css/min/*.css", ['bs-reload']);
  gulp.watch("./js/*.js", ['bs-reload']);
});
