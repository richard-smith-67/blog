/**
 * Created by richard.smith on 16/10/2015.
 */
var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('js', function() {

    gulp.src(['js/angular.js', 'js/angular-ui-router.min.js', 'js/**/*.js', 'js/app.js' ])
        .pipe(concat('app.js'))
        .pipe(gulp.dest('assets'))

});

gulp.task('styles', function() {

    gulp.src(['styles/*.*'])
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('assets'))

});

//Runs js and styles tasks
gulp.task('build', ['js','styles'], function() {


});
