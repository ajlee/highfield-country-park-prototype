var gulp = require('gulp');
var sass = require('gulp-sass');

// Compile sass files
gulp.task('sass', function () {
    gulp.src('./assets/scss/*')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});

// The default task (called when you run `gulp`)
gulp.task('watch', function() {
  gulp.run('sass');

  // Watch files and run tasks if they change

  gulp.watch(['./assets/scss/*.scss'], function() {
    gulp.run('sass');
  })
});
