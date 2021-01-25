var gulp = require('gulp');
var ts = require('gulp-typescript');

var browserify = require('browserify');
var source = require('vinyl-source-stream');
var tsify = require('tsify');
const { parallel } = require('gulp');

gulp.task('html', function () {
    return gulp.src('src/*.html')
        .pipe(gulp.dest('dist'));
});

gulp.task('default',parallel(["html"]), function () {
    return browserify({
        basedir: ('.'),
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    })
    .plugin(tsify)
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));
});