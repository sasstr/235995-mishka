/* "use strict"; */

var gulp = require("gulp");
var sass = require("gulp-sass");
var plumber = require("gulp-plumber");  // не прерывает работу вотчера елси есть ошибки сборки
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");  // раставляем вендорные префиксы
var server = require("browser-sync").create();
var csso = require("gulp-csso");  // минифицируем CSS
var rename = require("gulp-rename"); // используем что бы переименовать файл
var imagemin = require("gulp-imagemin"); // сжимает jpeg png gif svg
var webp = require("gulp-webp"); // png jpg конвертим в webp
var svgstore = require("gulp-svgstore"); // создаем svg спрайт
var posthtml = require("gulp-posthtml");
var include = require("posthtml-include");// вставляем в разметку с помощью тега include
var del = require("del"); // удаляем папку build перед новой сборкой
var uglify = require("gulp-uglify"); // сжимает JS минифицирует
var pump = require('pump'); //помогает uglify работать без ошибок
var htmlmin = require("gulp-htmlmin"); // сжимает html минифицирует

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(gulp.dest("build/css"))
    .pipe(csso())  // минифицируем CSS
    .pipe(rename("style.min.css")) // меняем имя файла на style.min.css в разметке указать его
    .pipe(gulp.dest("build/css"))
    .pipe(server.stream());
});

gulp.task('js', function (cb) {
  pump([
      gulp.src('js/*.js'),
      uglify(),
      gulp.dest('build')
    ],
    cb
  );
});

gulp.task('minify', function() {
  return gulp.src('source/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('build'));
});

gulp.task("images", function() {  // сжимаем картинки
  return gulp.src("source/img/**/*.{png,jpg,svg}")
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo()
    ]))
    .pipe(gulp.dest("source/img"));
});

gulp.task("webp", function() {  // конвертируем изобрежиня в webp формат
  return gulp.src("source/img/**/*.{png,jpg}")
    .pipe(webp({quality: 90}))
    .pipe(gulp.dest("source/img"));
});

gulp.task("sprite", function () { // создаем svg спрайт
  return gulp.src("source/img/icon-*.svg")
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(rename("sprite.svg"))
    .pipe(gulp.dest("build/img"));
});

gulp.task("html", function () {  // вставляем svg спрайт в разметку
  return gulp.src("source/*.html")
    .pipe(posthtml([
      include()
    ]))
    .pipe(gulp.dest("build"));
});

gulp.task("copy", function () {  // копируем все файлы проекта в папку build
  return gulp.src([
    "source/fonts/**/*.{woff,woff2}",
    "source/img/**",
    "source/js/**",
    "source/**/*.html"
  ], {
    base: "source"
  })
  .pipe(gulp.dest("build"));
});

gulp.task("clean", function () {  // удаелеяем папку с содежимым build перед каждой новой сборкой
  return del("build");
});

gulp.task("build", gulp.series(  // собираем проект запуская таски
    "clean",
    "copy",
    "css",
    "sprite",
    "html"
  ));

gulp.task("server", function () {  // отслеживаем изменения в файлах и пересобираем проект
  server.init({
    server: "build/",
    /* notify: false,
    open: true,
    cors: true,
    ui: false */
  });

  gulp.watch("source/js/main.js", gulp.series("js", "refresh"));
  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/img/icon-*.svg", gulp.series("sprite", "html", "refresh"));
  gulp.watch("source/*.html", gulp.series("html", "refresh"));


  //gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("refresh", function (done){
  server.reload();
  done();
});

gulp.task("start", gulp.series("build", "server"));
