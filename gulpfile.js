var gulp = require('gulp');
var minCSS = require('gulp-clean-css"');

gulp.task('min', function() {
    gulp.src('skillUp-homework2/page/css/style.css').pipe(gulp.dest('demo/css/'))
        .pipe(minCSS())
        .pipe(gulp.dest('demo/css/'))


});