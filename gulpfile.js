'use strict';

var del = require('del');
var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task('clean', function () {
  del('dist');
});

gulp.task('build', ['build-js']);

gulp.task('build-js', function () {
  gulp.src(['src/**', '!src/**/{__tests__,__tests__/**}'])
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});

gulp.task('default', ['build']);
