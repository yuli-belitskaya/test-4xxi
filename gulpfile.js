var gulp = require('gulp');
var postcss = require('gulp-postcss');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var autoprefixer = require('autoprefixer');
var cssnano = require('cssnano');
var csslint = require('gulp-csslint');
var jslint = require('gulp-jslint');
var uglify = require('gulp-uglify');

var jsFiles = [
    './src/js/main.js',
    './src/js/popup.js',
    './src/js/selecttext.js'
];

gulp.task('css', function () {
    var plugins = [
        autoprefixer,
        cssnano
    ];
    return gulp.src('./src/css/*.css')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(plugins))
        .pipe(concat('style.min.css'))
        .pipe(gulp.dest('./build/css/'));

});

gulp.task('js', function() {
    return gulp.src(jsFiles)
        .pipe(concat('script.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./build/js/'))
});

gulp.task('csslint', function () {
    return gulp.src('./src/css/*.css')
        .pipe(csslint())
        .pipe(csslint.formatter());
});

gulp.task('jslint', function () {
    return gulp.src(jsFiles)
        .pipe(jslint({
            this: true
        }))
        .pipe(jslint.reporter('default', true));
});