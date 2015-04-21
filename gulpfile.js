var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglifyjs');

gulp.task('sass', function () {
    gulp.src('assets/scss/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(gulp.dest('assets/dist/css/'));
});


gulp.task('uglify', function() {
  gulp.src('assets/js/**/*.js')
    .pipe(uglify('main.js'))
    .pipe(gulp.dest('assets/dist/js/'));
});

gulp.task('watch', function() {
  gulp.watch('assets/scss/*.scss', ['sass']);
  gulp.watch('assets/js/**/*.js', ['uglify']);
});

gulp.task('default', function() {
    gulp.start('sass', 'uglify');
});
