var gulp = require('gulp'),
    sass = require('gulp-sass'),
    concatCss = require('gulp-concat-css'),
    typescript = require('gulp-typescript'),
    concat = require('gulp-concat'),
    streamqueue = require('streamqueue');

gulp.task('typescript', function() {
    var tsResult = gulp.src([
        'static/scripts/typings/**/*.ts',
        'static/scripts/**/*.ts',
        'static/scripts/*.ts',
        'static/scripts/app/*.ts'
    ])
        .pipe(typescript({
            declarationFiles: false,
            noExternalResolve: true,
            sortOutput: true
        }));

    jsResult = streamqueue({objectMode: true},
        tsResult.js,
        gulp.src("static/scripts/js/boot.js")
    );

    return jsResult
        .pipe(concat('higherme.js'))
        .pipe(gulp.dest('static/scripts/js'));
});

//gulp.task('sass', function () {
//    return gulp.src(
//        'sass/main.scss'
//    )
//    .pipe(sass().on('error', sass.logError))
//    .pipe(gulp.dest('sass/concat-css'));
//});
//
//gulp.task('concatCss', ['sass'], function() {
//    return gulp.src([
//        'sass/concat-css/main.css',
//        'sass/concat-css/*.css'
//    ])
//    .pipe(concatCss('kumbaya.css'))
//    .pipe(gulp.dest('app/styles'))
//});
//
//gulp.task('default', ['sass','concatCss']);

gulp.task('default', ['typescript']);
