// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var connect = require('gulp-connect');
var jade = require('gulp-jade');
var svgmin = require('gulp-svgmin');

// Lint Task
gulp.task('lint', function() {
    return gulp.src('js/:not(foundation.min.js)')
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(connect.reload());
});

// Compile Our Sass
gulp.task('sass', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'))
        .pipe(connect.reload());
});

// Compile Our Jade
gulp.task('html', function() {
    return gulp.src('jade/*.jade')
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('./'))
        .pipe(connect.reload());
});

// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'))
        .pipe(connect.reload());
});

// Minimize SVG images

gulp.task('vector', function() {
    return gulp.src('svg/*.svg')
        .pipe(svgmin())
        .pipe(gulp.dest('svg/min'))
        .pipe(connect.reload());
});

// Live Server

gulp.task('connect', function() {
  connect.server({
    port: 8080,
    livereload: true
  });
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
    gulp.watch('jade/*.jade', ['html']);
    gulp.watch('svg/*.svg', ['vector']);
});

// Default Task
gulp.task('default', ['lint', 'sass', 'html', 'scripts', 'vector', 'connect' , 'watch']);