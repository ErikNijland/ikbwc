var gulp = require('gulp'),
    postcss = require('gulp-postcss'),
    htmlPostcss = require('gulp-html-postcss'),
    autoprefixer = require('autoprefixer'),
    postcssCustomMedia = require('postcss-custom-media');

gulp.task('postcss', function () {
    var processors = [
        autoprefixer({browsers: ['last 1 version']}),
        postcssCustomMedia()
    ];

    return gulp
        .src('./src/**/*.html')
        .pipe(htmlPostcss(processors))
        .pipe(gulp.dest('./build'));

});
