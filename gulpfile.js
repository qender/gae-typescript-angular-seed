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

gulp.task('sass', function () {
    return gulp.src(
        'static/styles/sass/main.scss'
    )
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('static/styles/css/concat-css'));
});

gulp.task('concatCss', ['sass'], function() {
    return gulp.src([
        'static/styles/css/concat-css/main.css',
        'static/styles/css/concat-css/*.css'
    ])
    .pipe(concatCss('higherme.css'))
    .pipe(gulp.dest('static/styles/css'))
});

gulp.task('default', ['sass','concatCss','typescript']);
