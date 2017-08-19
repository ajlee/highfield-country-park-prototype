var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean-css');
var rename = require("gulp-rename");
var twig_compile = require('gulp-twig-compile');
//var imageResize = require('gulp-image-resize'); /* todo: solve error - module not found error */

/* moves assets to publish folder and runs sass/twig compile */
gulp.task('publish', function () {
  gulp.run('sass');
  gulp.run('twig');
  gulp.src(['src/assets/**/*'])
    .pipe(gulp.dest('publish/assets'));
  });

// Compile sass files
gulp.task('sass', function () {
  gulp.run('bootstrap');
  gulp.src('./src/scss/styles.scss')
    .pipe(sass({errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass'}))
  	.pipe(autoprefixer({
  	    browsers: ['last 2 versions'],
  	    cascade: false
  	}))
  	.pipe(concat('styles.css'))
    .pipe(gulp.dest('./publish/assets/css'));
  gulp.src('publish/assets/css/styles.css')
    .pipe(clean())
    .pipe(rename('styles.min.css'))
    .pipe(gulp.dest('publish/assets/css'));

});

// compile twig files
gulp.task('twig', function () {
    'use strict';
    var twig = require('gulp-twig');
    return gulp.src('./src/twig/*.twig')
        .pipe(twig())
        .pipe(gulp.dest('publish'));
});


// The default task (called when you run `gulp`)
gulp.task('watch', function() {
  gulp.run('sass');

  // Watch files and run tasks if they change

  gulp.watch(['./src/scss/*.scss','./src/twig/**/*.twig'], function() {
    gulp.run('sass');
    gulp.run('twig');
  })
});

gulp.task('vendor', function () {
  gulp.src(['./node_modules/cssgram/source/css/*.css'])
    .pipe(gulp.dest('./src/vendor/cssgram'));
  gulp.src(['./node_modules/bootstrap-sass/assets/stylesheets/**/*.scss'])
    .pipe(gulp.dest('./src/vendor/bootstrap/'));
  gulp.src(['./node_modules/font-awesome-sass/assets/stylesheets/**/*.scss'])
    .pipe(gulp.dest('./src/vendor/font-awesome/scss'));
  gulp.src(['./node_modules/font-awesome-sass/assets/fonts/font-awesome/fontawesome-webfont.*'])
    .pipe(gulp.dest('./src/assets/fonts'));
  gulp.src(['./node_modules/leaflet/dist/**/*'])
    .pipe(gulp.dest('./src/vendor/leaflet'));
  gulp.src(['./node_modules/list.js/dist/**/*'])
    .pipe(gulp.dest('./src/assets/js/vendor/listjs'));
  gulp.src(['./node_modules/animate.scss/vendor/assets/stylesheets/**/*'])
    .pipe(gulp.dest('./src/vendor/animate.scss'));
  });


gulp.task('bootstrap', function () {
  gulp.src('./assets/vendor/bootstrap/bootstrap-custom.scss')
    .pipe(sass({errLogToConsole: true, sourceComments: 'map', sourceMap: 'sass'}))
    .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
    }))
    .pipe(concat('bootstrap.css'))
    .pipe(gulp.dest('.publish/assets/css/'));
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

