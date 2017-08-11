var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');
var rename = require("gulp-rename");

// Compile sass files
gulp.task('sass', function () {
  gulp.src('./assets/scss/styles.scss')
    .pipe(sass({errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass'}))
  	.pipe(autoprefixer({
  	    browsers: ['last 6 versions'],
  	    cascade: false
  	}))
  	.pipe(concat('styles.css'))
    .pipe(gulp.dest('./assets/css'));
  gulp.src('assets/css/styles.css')
    .pipe(clean())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('assets/css'))
  gulp.src('./assets/scss/testing/*')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(concat('testing.css'))
  	.pipe(gulp.dest('./assets/css'));
  gulp.src('./assets/scss/plugins/*')
  	.pipe(sass().on('error', sass.logError))
  	.pipe(gulp.dest('./assets/css/plugins'));

});

// The default task (called when you run `gulp`)
gulp.task('watch', function() {
  gulp.run('sass');

  // Watch files and run tasks if they change

  gulp.watch(['./assets/scss/*.scss', './assets/scss/testing/*.scss'], function() {
    gulp.run('sass');
  })
});
