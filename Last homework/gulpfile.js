var gulp = require('gulp');
var nunjucks = require('gulp-nunjucks');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

var path = {
    css:  'src/style/*.css',
    html: 'src/templates/*.html',
    img: 'src/images/*.*',
    dist: {
      css:  'dist/style/',
      html: 'dist/',
      img: 'dist/images/'
    }
};

gulp.task('default', ['build', 'serve', 'watch']);

gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(concat('style.css'))
    .pipe(gulp.dest(path.dist.css));
});

gulp.task('html', function () {
  return gulp.src(path.html)
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(path.dist.html));
});

gulp.task('img', function () {
    return gulp.src(path.img) 
        .pipe(imagemin())
        .pipe(gulp.dest(path.dist.img)) //И бросим в build
       
});

gulp.task('build', ['html', 'css', 'img']);

gulp.task('watch', function () {
  gulp.watch(path.css, ['css']);
  gulp.watch(path.html, ['html']);
  gulp.watch(path.img, ['img']);
});

gulp.task('serve', ['watch'], function() {
  browserSync.init({
    server: {
      baseDir: path.dist.html
    }
  });

  gulp.watch('dist/**').on('change', browserSync.reload);
});