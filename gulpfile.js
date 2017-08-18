var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');
var rename = require("gulp-rename");
//var imageResize = require('gulp-image-resize'); /* todo: solve error - module not found error */

// Compile sass files
gulp.task('sass', function () {
  gulp.run('bootstrap');
  gulp.src('./assets/scss/styles.scss')
    .pipe(sass({errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass'}))
  	.pipe(autoprefixer({
  	    browsers: ['last 2 versions'],
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

gulp.task('vendor', function () {
  gulp.src(['./node_modules/cssgram/source/css/*.css'])
    .pipe(gulp.dest('./assets/vendor/cssgram'));
  gulp.src(['./node_modules/bootstrap-sass/assets/stylesheets/**/*.scss'])
    .pipe(gulp.dest('./assets/vendor/bootstrap/'));
  gulp.src(['./node_modules/font-awesome-sass/assets/stylesheets/**/*.scss'])
    .pipe(gulp.dest('./assets/vendor/font-awesome/scss'));
  gulp.src(['./node_modules/font-awesome-sass/assets/fonts/font-awesome/fontawesome-webfont.*'])
    .pipe(gulp.dest('./assets/vendor/font-awesome/fonts'));
  gulp.src(['./node_modules/leaflet/dist/**/*'])
    .pipe(gulp.dest('./assets/vendor/leaflet'));
  gulp.src(['./node_modules/list.js/dist/**/*'])
    .pipe(gulp.dest('./assets/vendor/listjs'));
  gulp.src(['./node_modules/animate.scss/vendor/assets/stylesheets/**/*'])
    .pipe(gulp.dest('./assets/vendor/animate.scss'));
  });


gulp.task('bootstrap', function () {
  gulp.src('./assets/vendor/bootstrap/bootstrap-custom.scss')
    .pipe(sass({errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass'}))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(concat('bootstrap.css'))
    .pipe(gulp.dest('./assets/css/'));
});


/* create responsive images - requires imagemagik and graphicsmagik */

gulp.task('responsive-images', function () {
  gulp.src(['assets/images/path1.jpg','assets/images/path2.jpg',
    'assets/images/path3.jpg','assets/images/path4.jpg'])
    .pipe(imageResize({
      width : 250,
      height : 300,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('assets/images/md'));
  });
